/* Kids School cloud records (shared by pages that want to save progress).
   Records go to a Google Sheet owned by the parents, through the Apps Script in cloud/apps-script.gs.
   Each request carries the Google sign-in ID token; the script checks it with Google and only accepts
   accounts listed (as SHA-256 hashes) in its ROLES. Without sign-in, or with ENDPOINT empty, nothing is
   sent and pages keep working from localStorage as before. Unsent records wait in ks.cloud.queue.

   KSCloud.on                      -> true when ENDPOINT is set
   KSCloud.signedIn()              -> true while a fresh ID token is stored (they last 1 hour)
   KSCloud.role()                  -> "m" | "b" | "p" | null (known after the first answer from the script)
   KSCloud.save(app, recs)         -> Promise<ids saved>; recs need a string id; queued and retried later
   KSCloud.list(app)               -> Promise<[{who, data}]>  (a kid gets their own, a parent everyone's)
   KSCloud.signInButton(el, done)  -> renders the Google button into el; done() after sign-in
   KSCloud.signOut()
*/
(function(){
"use strict";
var ENDPOINT = "";   // the Apps Script web app URL, ending in /exec
var CID = "58307936708-iaq9fqnvidmk0shc2aqdkda01nnrto47.apps.googleusercontent.com";
var TOK = "ks.idtok", Q = "ks.cloud.queue", ROLE = "ks.cloud.role";

var get = function(k, d){ try { var v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch(e){ return d; } };
var put = function(k, v){ try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, JSON.stringify(v)); } catch(e){} };

function payload(tok){
  var seg = String(tok).split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
  while (seg.length % 4) seg += "=";
  var bin = atob(seg), bytes = new Uint8Array(bin.length);
  for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return JSON.parse(new TextDecoder("utf-8").decode(bytes));
}
function token(){ var t = get(TOK, null); return t && t.tok && t.exp * 1000 - Date.now() > 60000 ? t.tok : null; }
function setToken(tok){ try { put(TOK, { tok:tok, exp:payload(tok).exp }); } catch(e){} }

function call(body){
  // text/plain keeps this a "simple" request: Apps Script cannot answer a CORS preflight
  return fetch(ENDPOINT, { method:"POST", headers:{ "Content-Type":"text/plain;charset=utf-8" }, body:JSON.stringify(body) })
    .then(function(r){ return r.json(); })
    .then(function(j){
      if (!j || !j.ok){
        var err = (j && j.error) || "error";
        if (/^token|^account/.test(err)) put(TOK, null);    // bad or expired sign-in: ask again next time
        throw new Error(err);
      }
      if (j.role) put(ROLE, j.role);
      return j;
    });
}

var busy = null;
function flush(){
  if (!ENDPOINT || !token()) return Promise.resolve([]);
  if (busy) return busy.then(flush);
  var q = get(Q, []);
  if (!q.length) return Promise.resolve([]);
  var batch = q.slice(0, 20);
  busy = call({ action:"save", token:token(), items:batch }).then(function(j){
    var ok = {}; (j.saved || []).forEach(function(id){ ok[id] = 1; });
    put(Q, get(Q, []).filter(function(it){ return !ok[it.rec.id]; }));
    busy = null;
    return (j.saved || []).concat([]);
  }, function(e){ busy = null; throw e; });
  return busy.then(function(saved){
    return get(Q, []).length && saved.length ? flush().then(function(more){ return saved.concat(more); }, function(){ return saved; }) : saved;
  });
}

function save(app, recs){
  recs = [].concat(recs).filter(function(r){ return r && r.id; });
  var q = get(Q, []), have = {};
  q.forEach(function(it){ have[it.rec.id] = 1; });
  recs.forEach(function(r){ if (!have[r.id]){ q.push({ app:app, rec:r }); have[r.id] = 1; } });
  put(Q, q.slice(-100));
  return flush();
}

function list(app){
  if (!ENDPOINT || !token()) return Promise.resolve(null);
  return call({ action:"list", token:token(), app:app }).then(function(j){ return j.items || []; });
}

var gsi = null;
function loadGSI(){
  if (gsi) return gsi;
  gsi = new Promise(function(res, rej){
    var s = document.createElement("script");
    s.src = "https://accounts.google.com/gsi/client?hl=zh-TW"; s.async = true;
    s.onload = res; s.onerror = function(){ gsi = null; rej(new Error("gsi")); };
    document.head.appendChild(s);
  });
  return gsi;
}
var onSigned = function(){};
function signInButton(el, done){
  onSigned = done || function(){};
  return loadGSI().then(function(){
    google.accounts.id.initialize({ client_id:CID, auto_select:false, callback:function(resp){
      setToken(resp.credential);
      flush().catch(function(){}).then(function(){ onSigned(); });
    } });
    google.accounts.id.renderButton(el, { type:"standard", theme:"outline", size:"medium", shape:"pill", text:"signin", locale:"zh_TW" });
  });
}

window.KSCloud = {
  on: !!ENDPOINT,
  signedIn: function(){ return !!(ENDPOINT && token()); },
  role: function(){ return token() ? get(ROLE, null) : null; },
  pending: function(id){ return get(Q, []).some(function(it){ return it.rec.id === id; }); },
  save: save, flush: flush, list: list, signInButton: signInButton,
  signOut: function(){ put(TOK, null); put(ROLE, null); }
};
})();
