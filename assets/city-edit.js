/* 🎨 自訂城市 — the homepage's "customise the city" editor.
   index.html owns the data (DISTRICTS) and exposes window.KS_CITY; this file only edits the overrides
   layer stored in localStorage (KS_CITY.KEY) and asks the page to redraw. Nothing leaves the device. */
(function(){
"use strict";
var api, ov, box, pickOpen = null, resetArm = false, pending = null, raf = 0;

var CSS = [
  "#ced h3{font-size:16px;margin:16px 0 6px}",
  "#ced .ce-note{font-size:13.5px;margin:2px 0 8px}",
  "#ced input{width:auto;padding:4px 8px;border:2px solid var(--line);border-radius:10px;font:inherit;background:#fff}",
  "#ced input[type=checkbox]{width:20px;height:20px;padding:0;vertical-align:middle;accent-color:var(--leaf)}",
  "#ced input[type=color]{width:44px;height:34px;padding:1px 2px;cursor:pointer}",
  "#ced label{display:inline-flex;align-items:center;gap:4px;font-size:14px;font-weight:700;white-space:nowrap}",
  "#ced .s{min-width:36px;height:36px;padding:0 8px;border:0;border-radius:10px;background:#efe6d0;color:var(--ink);font:700 15px var(--body);cursor:pointer}",
  "#ced .s:disabled{opacity:.35;cursor:default}",
  "#ced .s.go2{background:var(--go);color:#fff}",
  "#ced .s.ok{background:var(--leaf);color:#fff}",
  "#ced .ce-row{display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;margin-top:6px}",
  "#ced .ce-pal button{display:inline-flex;align-items:center;gap:5px;padding:5px 12px;border:2px solid var(--line);border-radius:999px;background:#fff;font:700 14px var(--body);color:var(--ink);cursor:pointer}",
  "#ced .ce-pal button.on{border-color:var(--ink);background:var(--sun)}",
  "#ced .ce-pal i{display:inline-block;width:11px;height:11px;border-radius:50%}",
  "#ced .ce-d{border:2px solid var(--line);border-radius:14px;padding:8px 10px;margin:8px 0;background:#fff}",
  "#ced .ce-d.off{background:#f3efe6}",
  "#ced .ce-d.off .ce-bl{opacity:.55}",
  "#ced .ce-dh{display:flex;flex-wrap:wrap;align-items:center;gap:6px}",
  "#ced .ce-emo{width:3.4em;text-align:center}",
  "#ced .ce-name{flex:1 1 110px;min-width:0;font-weight:700}",
  "#ced .ce-bl{list-style:none;margin:6px 0 0;padding:0}",
  "#ced .ce-b{display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:6px 0;border-top:1px dashed var(--line)}",
  "#ced .ce-b.off .ce-n,#ced .ce-b.off .ce-pic{opacity:.45}",
  "#ced .ce-pic{flex:none;width:50px;height:50px;padding:2px;border:2px solid var(--line);border-radius:10px;background:var(--paper);cursor:pointer}",
  "#ced .ce-pic img{width:100%;height:100%;object-fit:contain;display:block}",
  "#ced .ce-n{flex:1 1 70px;min-width:0;font-weight:700;font-size:14.5px}",
  "#ced select{font:inherit;font-size:14px;max-width:118px;padding:5px 4px;border:2px solid var(--line);border-radius:10px;background:#fff}",
  "#ced .ce-grid{flex-basis:100%;display:grid;grid-template-columns:repeat(auto-fill,minmax(54px,1fr));gap:6px;padding:6px;background:var(--paper);border-radius:10px}",
  "#ced .ce-grid button{aspect-ratio:1;padding:3px;border:2px solid var(--line);border-radius:10px;background:#fff;cursor:pointer;font:700 12px var(--body)}",
  "#ced .ce-grid button.on{border-color:var(--go);background:#ffe9c2}",
  "#ced .ce-grid img{width:100%;height:100%;object-fit:contain;display:block}",
  "#ced .ce-warn{font-size:13px;color:var(--go);font-weight:700;margin:6px 0 0}",
  "#ced textarea{display:block;width:100%;min-height:64px;font:12px/1.4 ui-monospace,Consolas,monospace;padding:6px 8px;border:2px solid var(--line);border-radius:10px;resize:vertical}",
  "#ced .ce-msg{font-size:14px;font-weight:700;color:var(--ink);margin:6px 0 0}",
  "#ced .ce-msg.bad{color:var(--go)}",
  "#ce-cloud{display:flex;flex-wrap:wrap;align-items:center;gap:6px 10px;margin:4px 0 6px;padding:8px 10px;border-radius:12px;background:#eef6fb;font-size:14px;font-weight:700}",
  "#ce-cloud.ok{background:#e6f4ea}",
  "#ce-cloud button.s{min-width:36px;height:34px;padding:0 12px;border:0;border-radius:10px;background:var(--ink);color:#fff;font:700 14px var(--body);cursor:pointer}",
  "#ce-cloud .slot:empty{display:none}",
  "#ced .ce-done{display:block;width:100%;margin-top:16px;padding:10px;border:0;border-radius:14px;background:var(--go);color:#fff;font:900 17px var(--body);box-shadow:0 4px 0 #b9411f;cursor:pointer}"
].join("\n");

function esc(s){ return api.esc(s); }
function clone(o){ return o ? JSON.parse(JSON.stringify(o)) : {}; }
function D(id){ ov.d = ov.d || {}; return ov.d[id] = ov.d[id] || {}; }
function B(id){ ov.b = ov.b || {}; return ov.b[id] = ov.b[id] || {}; }
function baseItem(id){ var r = null; api.base.forEach(function(d){ d.items.forEach(function(it){ if (it.id === id) r = it; }); }); return r; }
function baseDist(id){ return api.base.filter(function(d){ return d.id === id; })[0]; }
function shown(d){ return d.items.filter(function(it){ return !it._off; }).length; }

// save -> the page redraws; keep our copy equal to what was stored
function commit(again){
  ov = clone(api.save(ov));
  cloudBar();
  if (again) render();
}
function commitSoon(){ cancelAnimationFrame(raf); raf = requestAnimationFrame(function(){ commit(false); }); }

function render(){
  var m = api.model(ov), visible = m.filter(function(d){ return !d.hidden; }).length, h = [];
  var sc = api.sheet.scrollTop;
  h.push('<p class="ce-note">改了馬上生效，先存在這台裝置；登入的話按「存到雲端」，換裝置也會出現。也可以用最下面的「搬家」複製過去。</p>');

  h.push('<h3>配色</h3><div class="ce-row ce-pal">');
  h.push('<button type="button" data-act="pal" data-v=""' + (ov.pal ? "" : ' class="on"') + ">原本</button>");
  Object.keys(api.palettes).forEach(function(k){
    var p = api.palettes[k];
    h.push('<button type="button" data-act="pal" data-v="' + k + '"' + (ov.pal === k ? ' class="on"' : "") + ">" +
      p.c.slice(0, 3).map(function(c){ return '<i style="background:' + c[0] + '"></i>'; }).join("") + esc(p.name) + "</button>");
  });
  h.push("</div>");

  h.push("<h3>區塊與房子</h3>");
  m.forEach(function(d, i){
    var bd = d._base, n = shown(d);
    h.push('<div class="ce-d' + (d.hidden ? " off" : "") + '" data-d="' + d.id + '">');
    h.push('<div class="ce-dh"><input class="ce-emo" data-act="emo" maxlength="8" aria-label="區塊的圖示" value="' + esc(d.emo) + '">' +
      '<input class="ce-name" data-act="name" maxlength="12" aria-label="區塊名稱" placeholder="' + esc(bd.name) + '" value="' + esc(d.name) + '">' +
      '<button class="s" type="button" data-act="dup" aria-label="往前移"' + (i ? "" : " disabled") + ">↑</button>" +
      '<button class="s" type="button" data-act="ddn" aria-label="往後移"' + (i < m.length - 1 ? "" : " disabled") + ">↓</button>" +
      '<label><input type="checkbox" data-act="dshow"' + (d.hidden ? "" : " checked") + (!d.hidden && visible <= 1 ? " disabled" : "") + ">顯示</label></div>");
    h.push('<div class="ce-row"><label>招牌 <input type="color" data-act="roof" value="' + d.roof + '"></label>' +
      '<label>地面 <input type="color" data-act="ground" value="' + (d._g ? d.ground : bd.ground) + '"></label>' +
      '<button class="s" type="button" data-act="dcol">原色</button>' +
      (bd.ideas.length ? '<label><input type="checkbox" data-act="sites"' + (d.ideas.length ? " checked" : "") + ">工地</label>" : "") + "</div>");
    if (n > 6) h.push('<p class="ce-warn">這一區有 ' + n + " 棟，一區只有 6 塊地，排在後面的不會出現。</p>");
    h.push('<ul class="ce-bl">');
    if (!d.items.length) h.push('<li class="ce-b"><span class="ce-n" style="font-weight:500">（還沒有房子）</span></li>');
    d.items.forEach(function(it, k){
      h.push('<li class="ce-b' + (it._off ? " off" : "") + '" data-i="' + it.id + '">' +
        '<button class="ce-pic" type="button" data-act="pick" aria-label="換房子的樣子" title="換房子的樣子"><img alt="" src="assets/city/' + esc(it.img) + '.webp"></button>' +
        '<span class="ce-n">' + esc(it.emo + " " + it.short) + (it.only ? " 🔒" : "") + "</span>" +
        '<select data-act="move" aria-label="搬到哪一區">' + m.map(function(t){
          var full = t.id !== d.id && shown(t) >= 6 && !it._off;
          return '<option value="' + t.id + '"' + (t.id === d.id ? " selected" : "") + (full ? " disabled" : "") + ">" + esc(t.emo + " " + t.name) + (full ? "（滿了）" : "") + "</option>";
        }).join("") + "</select>" +
        '<button class="s" type="button" data-act="iup" aria-label="往前"' + (k ? "" : " disabled") + ">↑</button>" +
        '<button class="s" type="button" data-act="idn" aria-label="往後"' + (k < d.items.length - 1 ? "" : " disabled") + ">↓</button>" +
        '<label><input type="checkbox" data-act="ishow"' + (it._off ? "" : " checked") + ">顯示</label>");
      if (pickOpen === it.id){
        var orig = baseItem(it.id).img;
        h.push('<div class="ce-grid" role="group" aria-label="房子的樣子">' + Object.keys(api.spr).map(function(k2){
          return '<button type="button" data-act="img" data-v="' + k2 + '"' + (k2 === it.img ? ' class="on"' : "") + ' title="' + k2 + (k2 === orig ? "（原本）" : "") + '"><img alt="' + k2 + '" loading="lazy" src="assets/city/' + k2 + '.webp"></button>';
        }).join("") + "</div>");
      }
      h.push("</li>");
    });
    h.push("</ul></div>");
  });

  h.push('<h3>搬家：複製到別台裝置</h3><p class="ce-note">按「複製」，把這段文字傳到另一台裝置，貼進同一個框，再按「套用」。</p>');
  h.push('<textarea data-act="io" spellcheck="false" aria-label="城市設定">' + esc(JSON.stringify(api.clean(ov) || {})) + "</textarea>");
  h.push('<div class="ce-row"><button class="s" type="button" data-act="copy">📋 複製</button><button class="s" type="button" data-act="imp">📥 套用貼上的設定</button></div>');
  if (pending) h.push('<p class="ce-msg">' + esc(pending.msg) + '</p><div class="ce-row"><button class="s ok" type="button" data-act="impyes">確定套用</button><button class="s" type="button" data-act="impno">取消</button></div>');
  h.push('<p class="ce-msg" id="ce-msg" role="status"></p>');

  h.push("<h3>恢復原樣</h3>");
  if (resetArm) h.push('<p class="ce-note">整座城市會回到原本的樣子（名稱、順序、樣子、顏色都還原）。</p><div class="ce-row"><button class="s go2" type="button" data-act="resetyes">確定恢復預設</button><button class="s" type="button" data-act="resetno">取消</button></div>');
  else h.push('<div class="ce-row"><button class="s" type="button" data-act="reset">↺ 恢復預設</button></div>');

  h.push('<button class="ce-done" type="button" data-act="done">完成，看整座城市</button>');
  box.innerHTML = h.join("");
  api.sheet.scrollTop = sc;
}

function say(t, bad){ var e = document.getElementById("ce-msg"); if (e){ e.textContent = t; e.className = "ce-msg" + (bad ? " bad" : ""); } }
function where(e){
  var d = e.target.closest("[data-d]"), b = e.target.closest("[data-i]");
  return { d:d && d.getAttribute("data-d"), i:b && b.getAttribute("data-i") };
}
function swap(a, x, y){ var t = a[x]; a[x] = a[y]; a[y] = t; return a; }

function onClick(e){
  var el = e.target.closest("[data-act]"); if (!el || el.tagName === "INPUT" || el.tagName === "SELECT" || el.tagName === "TEXTAREA") return;
  var act = el.getAttribute("data-act"), w = where(e), m, k, list;
  if (act === "pal"){
    var v = el.getAttribute("data-v");
    if (v) ov.pal = v; else delete ov.pal;
    Object.keys(ov.d || {}).forEach(function(id){ delete ov.d[id].roof; delete ov.d[id].ground; });
    commit(true);
  }
  else if (act === "dup" || act === "ddn"){
    m = api.model(ov).map(function(d){ return d.id; }); k = m.indexOf(w.d);
    ov.order = swap(m, k, act === "dup" ? k - 1 : k + 1); commit(true);
  }
  else if (act === "dcol"){ delete D(w.d).roof; delete D(w.d).ground; commit(true); }
  else if (act === "pick"){ pickOpen = pickOpen === w.i ? null : w.i; render(); }
  else if (act === "img"){
    var v2 = el.getAttribute("data-v");
    if (v2 === baseItem(w.i).img) delete B(w.i).img; else B(w.i).img = v2;
    pickOpen = null; commit(true);
  }
  else if (act === "iup" || act === "idn"){
    list = api.model(ov).filter(function(d){ return d.id === w.d; })[0].items.map(function(it){ return it.id; });
    k = list.indexOf(w.i); ov.io = ov.io || {};
    ov.io[w.d] = swap(list, k, act === "iup" ? k - 1 : k + 1); commit(true);
  }
  else if (act === "copy"){
    var ta = box.querySelector("textarea"), txt = ta.value;
    var fallback = function(){ try { ta.focus(); ta.select(); say(document.execCommand("copy") ? "已複製。" : "請長按文字框自己複製。"); } catch(_){ say("請長按文字框自己複製。"); } };
    try { navigator.clipboard.writeText(txt).then(function(){ say("已複製，可以貼到別的裝置了。"); }, fallback); } catch(_){ fallback(); }
  }
  else if (act === "imp"){
    var raw = box.querySelector("textarea").value.trim(), got;
    try { got = JSON.parse(raw); } catch(_){ pending = null; render(); say("看不懂這段文字，請確認整段都有貼上。", true); return; }
    var c = api.clean(got);
    if (!c && !(got && typeof got === "object" && !Array.isArray(got) && !Object.keys(got).length)){ pending = null; render(); say("這段文字裡沒有可以用的城市設定。", true); return; }
    var nd = c && c.d ? Object.keys(c.d).length : 0, nb = c && c.b ? Object.keys(c.b).length : 0;
    pending = { ov:c, msg:c ? "讀到了：" + nd + " 個區塊、" + nb + " 棟房子有調整" + (c.pal ? "，配色「" + api.palettes[c.pal].name + "」" : "") + "。套用後會取代這台裝置現在的城市。" : "這是「原本的城市」，套用後會回到預設。" };
    render();
  }
  else if (act === "impyes"){ ov = clone(pending.ov); pending = null; commit(true); say("套用好了。"); }
  else if (act === "impno"){ pending = null; render(); }
  else if (act === "reset"){ resetArm = true; render(); }
  else if (act === "resetno"){ resetArm = false; render(); }
  else if (act === "resetyes"){ resetArm = false; pickOpen = null; ov = {}; commit(true); say("已經恢復成原本的城市。"); }
  else if (act === "done"){ leave(); api.home(); }
}

function onInput(e){
  var el = e.target, act = el.getAttribute("data-act"), w = where(e), v = el.value, bd = w.d && baseDist(w.d);
  if (act === "name" || act === "emo"){
    var t = v.trim();
    if (!t || t === bd[act]) delete D(w.d)[act]; else D(w.d)[act] = t;
    commitSoon();
  }
  else if (act === "roof" || act === "ground"){ D(w.d)[act] = v.toLowerCase(); commitSoon(); }
}

function onChange(e){
  var el = e.target, act = el.getAttribute("data-act"), w = where(e);
  if (act === "dshow"){ if (el.checked) delete D(w.d).hidden; else D(w.d).hidden = true; commit(true); }
  else if (act === "sites"){ if (el.checked) delete D(w.d).sites; else D(w.d).sites = false; commit(true); }
  else if (act === "ishow"){ if (el.checked) delete B(w.i).hidden; else B(w.i).hidden = true; commit(true); }
  else if (act === "move"){
    var home = null; api.base.forEach(function(d){ d.items.forEach(function(it){ if (it.id === w.i) home = d.id; }); });
    if (el.value === home) delete B(w.i).d; else B(w.i).d = el.value;
    Object.keys(ov.io || {}).forEach(function(id){ ov.io[id] = ov.io[id].filter(function(x){ return x !== w.i; }); });
    commit(true);
  }
  else if (act === "roof" || act === "ground" || act === "name" || act === "emo"){ cancelAnimationFrame(raf); commit(true); }
}

function open(a){
  api = a; ov = clone(api.load()); pickOpen = null; resetArm = false; pending = null;
  if (!document.getElementById("ced-css")){ var st = document.createElement("style"); st.id = "ced-css"; st.textContent = CSS; document.head.appendChild(st); }
  api.close();
  api.sheet.innerHTML = '<button class="x" type="button" aria-label="關閉">✕</button><h2>🎨 自訂城市</h2><div id="ce-cloud" role="status"></div><div id="ced"></div>';
  api.sheet.querySelector(".x").onclick = leave;
  bar = document.getElementById("ce-cloud"); slotDone = false;
  bar.addEventListener("click", function(e){ if (e.target.closest("[data-act=push]")) push(); });
  cloudBar();
  box = document.getElementById("ced");
  box.addEventListener("click", onClick);
  box.addEventListener("input", onInput);
  box.addEventListener("change", onChange);
  render();
  api.sheet.scrollTop = 0;
  api.show();
}

/* ---------- cloud sync (assets/ks-cloud.js, app "city-layout") ----------
   localStorage stays the working copy. The cloud gets a new row only when someone presses
   "存到雲端" (or closes the editor with unsaved changes while signed in). On page load, a newer
   layout for this profile in the cloud replaces the local one; an older one is ignored. */
var APP = "city-layout", bar = null, slotDone = false;
function CL(){ return window.KSCloud && KSCloud.on ? KSCloud : null; }
function syncKey(){ return api.KEY + ".cloud"; }        // ts of the layout last known to be in the cloud
function synced(){ try { return JSON.parse(localStorage.getItem(syncKey())) || 0; } catch(e){ return 0; } }
function setSynced(ts){ try { localStorage.setItem(syncKey(), JSON.stringify(ts)); } catch(e){} }
function localTs(){ var l = api.load(); return l && l.ts || 0; }
function dirty(){ var t = localTs(); return !!t && t !== synced(); }

function cloudBar(msg){
  if (!bar || !document.body.contains(bar)) return;
  var c = CL(), txt, ok = false, btn = "";
  if (!c) txt = "💾 已存在這台裝置";
  else if (!c.signedIn()) txt = api.profile === "a" ? "💾 已存在這台裝置 · 用畫面上方的 Google 登入，就能同步到雲端" : "💾 已存在這台裝置 · 登入才能同步到雲端：";
  else if (!dirty() && synced()){ txt = "☁️ 已存到雲端"; ok = true; }
  else { txt = "💾 已存在這台裝置，還沒存到雲端"; btn = '<button class="s" type="button" data-act="push">☁️ 存到雲端</button>'; }
  bar.className = ok ? "ok" : "";
  var slot = bar.querySelector(".slot"), html = "<span>" + esc(msg || txt) + "</span>" + btn;
  if (bar._html !== html){        // only when it changes: a button replaced mid-click would swallow the click
    bar._html = html; bar.innerHTML = html;
    if (slot) bar.appendChild(slot);
  }
  if (!slot){ slot = document.createElement("span"); slot.className = "slot"; bar.appendChild(slot); }
  if (c && !c.signedIn() && api.profile !== "a"){
    if (!slotDone){ slotDone = true;
      c.signInButton(slot, function(){ slot.textContent = ""; slotDone = false; pull().then(function(){ cloudBar(); }, function(){ cloudBar(); }); })
        .catch(function(){ slotDone = false; }); }
  } else slot.textContent = "";
}

function push(quiet){
  var c = CL(); if (!c || !c.signedIn()) return Promise.resolve(false);
  var lay = api.load() || {}, ts = lay.ts || Date.now(), nd = api.model(lay).filter(function(d){ return !d.hidden; }).length;
  var rec = { id:"city-" + api.profile + "-" + ts, ts:ts, who:api.profile,
    summary:"City layout saved for " + api.profile + ": " + nd + " districts shown" + (api.hasCustom(lay) ? "" : " (default layout)"), layout:lay };
  if (JSON.stringify(rec).length > 45000){ cloudBar("城市設定太大，存不進雲端"); return Promise.resolve(false); }
  if (!quiet) cloudBar("☁️ 存到雲端中…");
  return c.save(APP, [rec]).then(function(ids){
    if (ids.indexOf(rec.id) >= 0){ setSynced(ts); cloudBar(); return true; }
    cloudBar("還沒送到雲端，下次會自動再送"); return false;
  }, function(){ cloudBar("存到雲端失敗，下次會自動再送（這台裝置已經存好了）"); return false; });
}

function pull(){
  api = api || window.KS_CITY;
  var c = CL(); if (!api || !c || !c.signedIn()) return Promise.resolve(null);
  return c.list(APP).then(function(rows){
    var best = null;
    (rows || []).forEach(function(r){ var d = r && r.data;
      if (d && d.who === api.profile && typeof d.ts === "number" && d.layout && typeof d.layout === "object" && (!best || d.ts > best.ts)) best = d; });
    if (!best) return "none";
    var lt = localTs();
    if (best.ts > lt){
      api.save(Object.assign({}, best.layout, { ts:best.ts }), true); setSynced(best.ts);
      if (box && document.body.contains(box)){ ov = clone(api.load()); render(); }
      cloudBar(); return "applied";
    }
    if (best.ts === lt) setSynced(lt);
    cloudBar(); return "kept";
  });
}

function leave(){ if (dirty()) push(true); api.close(); }

window.KS_CITY_EDIT = { open:open, pull:pull, push:push };
if (window.KS_CITY) pull().catch(function(){});     // on page load: bring in a newer layout from the cloud
})();
