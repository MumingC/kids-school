/* Shared by the city homepage mockups B and C: the data, the HUD, the info sheet and the drag camera. */
(function(){
"use strict";
var kid = new URLSearchParams(location.search).get("k");
var DISTRICTS = [
  { id:"science", name:"科學區", emo:"🔬", roof:"#8d7be0", wall:"#c9c0f4", ground:"#dcd6f7", deco:["🔭","🧪"],
    items:[
      { emo:"🚀", short:"火箭", title:"從地面到軌道", age:"小三起點", desc:"12 關火箭課程，每一關都有一個真的在算物理的互動模擬器。", href:"rocket/", tall:1 },
      { emo:"⏱️", short:"相對論", title:"時間變慢實驗室", age:"小二起點", desc:"跟光比賽跑到月球，用「光做的時鐘」看懂時間為什麼會變慢。", href:"relativity/" },
      { emo:"⚛️", short:"核分裂", title:"核分裂實驗室", age:"大孩", only:"b", desc:"8 站，從原子結構到連鎖反應，最後看反應爐與核彈的分岔。", href:"fission/" },
      { emo:"📐", short:"均一", title:"均一教育平台", age:"數學 · 自然 · 各年級", desc:"學校也在用的免費學習網站。會離開 Kids School。", href:"https://www.junyiacademy.org/" }
    ], ideas:[] },
  { id:"history", name:"歷史老城", emo:"🏛️", roof:"#b5653a", wall:"#edc9a4", ground:"#f1dfc4", deco:["🏺","⛲"],
    items:[
      { emo:"🗺️", short:"二戰", title:"小小歷史家：二次世界大戰", age:"兩種難度", desc:"會動的戰爭地圖、歷史大軸線、老照片與武器圖鑑。", href:"ww2/", mHref:"ww2/kids.html" }
    ], ideas:["🏯 臺灣的故事","🛕 古文明"] },
  { id:"computer", name:"電腦園區", emo:"💻", roof:"#3d7ea6", wall:"#b9dcee", ground:"#d5e8f2", deco:["📡","💡"],
    items:[
      { emo:"🤖", short:"AI 的故事", title:"AI 是怎麼長大的？", age:"親子共讀", desc:"從 AlphaGo 回到圖靈、感知器與 ELIZA，用人物故事看 AI 的歷史。", href:"ai-history/", tall:1 }
    ], ideas:["⌨️ 寫程式入門","🔐 密碼與暗號"] },
  { id:"nature", name:"自然公園", emo:"🌿", roof:"#4f9d5d", wall:"#cfe8c4", ground:"#c5e6b0", deco:["🌳","🦋","🌲"],
    items:[], ideas:["🦖 恐龍與化石","🐛 昆蟲觀察","🌦️ 天氣與颱風"] },
  { id:"geo", name:"地理港口", emo:"🌍", roof:"#d99a2b", wall:"#f6e2ae", ground:"#f3e7c0", deco:["⚓","🌴"],
    items:[
      { emo:"🕵️", short:"小偵探", title:"環球小偵探", age:"小三到小六", desc:"跟著線索追怪盜飛遍 38 座城市，認國旗、看文化圖鑑。", href:"detective/" },
      { emo:"🌉", short:"河流城市", title:"台北的水上公路", age:"9 站專題", desc:"台北能不能有通勤用的水上公路？最後當市長做選擇。", href:"river-city/", mHref:"river-city/kids.html" },
      { emo:"🧳", short:"旅行規劃", title:"旅行規劃師", age:"兩種難度 · 8 站", desc:"學會排行程，最後幫全家排出淡水一日遊。", href:"trip-planner/", mHref:"trip-planner/?lv=easy" }
    ], ideas:["🗾 臺灣地圖"] },
  { id:"fun", name:"遊樂街", emo:"🎪", roof:"#e4572e", wall:"#fbd0c1", ground:"#fde3d6", deco:["🎡","🎈"],
    items:[
      { emo:"📺", short:"小電視", title:"家庭小電視", age:"每天限時", desc:"爸爸媽媽挑過的頻道。點自己的名字進去。", tv:true, tall:1 },
      { emo:"📡", short:"小新聞", title:"新聞超小號", age:"小公視 · 每週五更新", desc:"給小朋友看的新聞，每集大約 15 分鐘。會算進小電視的時間。", news:true },
      { emo:"📻", short:"六分鐘", title:"The Six Minutes", age:"English · 每集約 6 分鐘", hide:"b", desc:"一集一集往下聽的英文廣播劇。", six:true },
      { emo:"🏘️", short:"小小村長", title:"Village Chief 小小村長", age:"大孩 · 英文介面", only:"b", desc:"六角格地圖的經濟策略遊戲：探索、建城、做買賣。", href:"village-chief/" }
    ], ideas:[] }
];
function items(d){ return d.items.filter(function(it){ return !(it.hide && it.hide === kid); }); }
function locked(it){ return it.only === "b" && kid === "m"; }
function lots(d){ return items(d).map(function(it){ return { it:it }; }).concat(d.ideas.map(function(s){ return { idea:s }; })); }

var NS = "http://www.w3.org/2000/svg";
function el(n, at, parent, text){ var e = document.createElementNS(NS, n); for (var k in at) e.setAttribute(k, at[k]); if (text != null) e.textContent = text; if (parent) parent.appendChild(e); return e; }
function shade(hex, f){ var n = parseInt(hex.slice(1), 16), r = n >> 16, g = n >> 8 & 255, b = n & 255;
  function c(v){ return Math.max(0, Math.min(255, Math.round(v * f))); } return "rgb(" + c(r) + "," + c(g) + "," + c(b) + ")"; }
function rnd(x, y){ var s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); }
var calm = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- HUD + sheet ---------- */
function hud(title, hint){
  document.body.insertAdjacentHTML("beforeend",
    '<div class="hud"><div class="bar"><div class="title">' + title + '<small id="greet"></small></div><div class="clock" id="clock">--:--</div></div>' +
    '<div class="chips" id="chips" aria-label="直接到某一區"></div></div>' +
    '<div class="zoom" id="zoom"><button id="zin" aria-label="放大">＋</button><button id="zout" aria-label="縮小">－</button><button id="zhome" aria-label="回到市中心">🏠</button></div>' +
    '<div class="hint" id="hint">' + hint + '</div><div class="sheet" id="sheet" aria-live="polite"></div>');
  function tick(){ var n = new Date(), h = n.getHours();
    document.getElementById("clock").textContent = ("0" + h).slice(-2) + ":" + ("0" + n.getMinutes()).slice(-2);
    document.getElementById("greet").textContent = (h < 11 ? "早安" : h < 18 ? "午安" : "晚安") + "！" + (kid === "m" ? "🦊 中孩，" : kid === "b" ? "🚀 大孩，" : "") + "想去哪一區？"; }
  tick(); setInterval(tick, 20000);
}
function chips(fn){
  var c = document.getElementById("chips");
  c.innerHTML = DISTRICTS.map(function(d){ return '<button data-d="' + d.id + '">' + d.emo + " " + d.name + "</button>"; }).join("");
  c.addEventListener("click", function(e){ var b = e.target.closest("button"); if (!b) return;
    c.querySelectorAll("button").forEach(function(x){ x.classList.toggle("on", x === b); });
    closeSheet(); hideHint(); fn(DISTRICTS.filter(function(x){ return x.id === b.dataset.d; })[0]); });
}
function hideHint(){ var h = document.getElementById("hint"); if (h) h.classList.add("off"); }
function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c]; }); }
function btn(href, label, sub, cls){ return '<a class="btn' + (cls ? " " + cls : "") + '" href="' + esc(href) + '">' + label + "<small>" + sub + "</small></a>"; }
function openSheet(g){
  var d = g._d, it = g._it, go, sheet = document.getElementById("sheet"), news = "&c=" + encodeURIComponent("新聞超小號");
  document.querySelectorAll(".bld.sel").forEach(function(b){ b.classList.remove("sel"); }); g.classList.add("sel");
  if (locked(it)) go = '<span class="lockmsg">☁️ 長大一點再來探險</span>';
  else if (it.tv) go = (kid !== "b" ? btn("tv/?p=m", "🦊 中孩", "進小電視") : "") + (kid !== "m" ? btn("tv/?p=b", "🚀 大孩", "進小電視") : "") + btn("tv/?p=s", "🐣 小小孩", "一起看", "alt");
  else if (it.news) go = (kid !== "b" ? btn("tv/?p=m" + news, "🦊 中孩", "看新聞") : "") + (kid !== "m" ? btn("tv/?p=b" + news, "🚀 大孩", "看新聞") : "");
  else if (it.six) go = btn("tv/?p=m", "▶ 聽故事", "接著聽") + btn("tv/?p=m&pick=1", "🔢 選集數", "自己挑一集", "alt");
  else { var easy = kid === "m" && it.mHref; go = btn(easy ? it.mHref : it.href, "🚪 進去", easy ? "簡單版" : "開始探險"); }
  sheet.innerHTML = '<button class="x" aria-label="關閉">✕</button><div class="where">' + d.emo + " " + esc(d.name) + '</div><h2>' + it.emo + " " + esc(it.title) +
    '</h2><span class="age">' + esc(it.age) + "</span><p>" + esc(it.desc) + '</p><div class="go">' + go + "</div>";
  sheet.classList.add("open"); sheet.querySelector(".x").onclick = closeSheet; hideHint();
}
function closeSheet(){ var s = document.getElementById("sheet"); if (s) s.classList.remove("open");
  document.querySelectorAll(".bld.sel").forEach(function(b){ b.classList.remove("sel"); }); }

/* ---------- camera: drag to pan; wheel, pinch and buttons to zoom (unless o.fixed gives the scale) ---------- */
function camera(stage, world, o){
  var cam = { x:0, y:0, s:1 }, ptrs = {}, moved = 0, pinch = 0, anim = 0, api;
  function lim(){ return o.fixed ? [o.fixed(), o.fixed()] : [o.min || .3, o.max || 1.8]; }
  function apply(){
    var L = lim(); cam.s = Math.max(L[0], Math.min(L[1], cam.s));
    var hw = stage.clientWidth / 2 / cam.s, hh = stage.clientHeight / 2 / cam.s, b = o.bounds;
    if (o.fixed){ cam.x = Math.max(b[0] + hw, Math.min(b[2] - hw, cam.x)); cam.y = (b[1] + b[3]) / 2; }
    else { cam.x = Math.max(b[0], Math.min(b[2], cam.x)); cam.y = Math.max(b[1], Math.min(b[3], cam.y)); }
    world.setAttribute("transform", "translate(" + (stage.clientWidth / 2 - cam.x * cam.s) + " " + (stage.clientHeight / 2 - cam.y * cam.s) + ") scale(" + cam.s + ")");
    if (o.onMove) o.onMove(cam);
  }
  function fly(x, y, s){
    cancelAnimationFrame(anim); var a = { x:cam.x, y:cam.y, s:cam.s }, t0 = performance.now(); if (s == null) s = cam.s;
    if (calm){ cam.x = x; cam.y = y; cam.s = s; return apply(); }
    (function step(now){ var k = Math.min(1, (now - t0) / 450), e = 1 - Math.pow(1 - k, 3);
      cam.x = a.x + (x - a.x) * e; cam.y = a.y + (y - a.y) * e; cam.s = a.s + (s - a.s) * e; apply(); if (k < 1) anim = requestAnimationFrame(step); })(t0);
  }
  function zoomAt(f, px, py){
    if (o.fixed) return;
    var wx = (px - stage.clientWidth / 2) / cam.s + cam.x, wy = (py - stage.clientHeight / 2) / cam.s + cam.y, L = lim();
    cam.s = Math.max(L[0], Math.min(L[1], cam.s * f));
    cam.x = wx - (px - stage.clientWidth / 2) / cam.s; cam.y = wy - (py - stage.clientHeight / 2) / cam.s; apply();
  }
  function dist(){ var k = Object.keys(ptrs); return Math.hypot(ptrs[k[0]][0] - ptrs[k[1]][0], ptrs[k[0]][1] - ptrs[k[1]][1]) || 1; }
  stage.addEventListener("pointerdown", function(e){ ptrs[e.pointerId] = [e.clientX, e.clientY]; moved = 0; cancelAnimationFrame(anim); if (Object.keys(ptrs).length === 2) pinch = dist(); });
  stage.addEventListener("pointermove", function(e){
    var p = ptrs[e.pointerId]; if (!p) return;
    var dx = e.clientX - p[0], dy = e.clientY - p[1], k = Object.keys(ptrs);
    ptrs[e.pointerId] = [e.clientX, e.clientY];
    if (k.length === 2){ var d = dist(); if (pinch) zoomAt(d / pinch, (ptrs[k[0]][0] + ptrs[k[1]][0]) / 2, (ptrs[k[0]][1] + ptrs[k[1]][1]) / 2); pinch = d; moved = 99; return; }
    moved += Math.abs(dx) + Math.abs(dy);
    if (moved > 6){ if (!stage.classList.contains("drag")){ stage.classList.add("drag"); try { stage.setPointerCapture(e.pointerId); } catch(_){} hideHint(); }
      cam.x -= dx / cam.s; cam.y -= dy / cam.s; apply(); }
  });
  function up(e){ delete ptrs[e.pointerId]; pinch = 0; stage.classList.remove("drag"); }
  stage.addEventListener("pointerup", up); stage.addEventListener("pointercancel", up);
  stage.addEventListener("wheel", function(e){ e.preventDefault();
    if (o.fixed){ cam.x += (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY) / cam.s; apply(); hideHint(); }
    else zoomAt(e.deltaY < 0 ? 1.12 : 1 / 1.12, e.clientX, e.clientY); }, { passive:false });
  addEventListener("resize", apply);
  world.addEventListener("click", function(e){ if (moved > 6) return; var g = e.target.closest(".bld"); if (g){ openSheet(g); if (o.onPick) o.onPick(g, api); } else closeSheet(); });
  world.addEventListener("keydown", function(e){ var g = e.target.closest(".bld"); if (g && (e.key === "Enter" || e.key === " ")){ e.preventDefault(); openSheet(g); if (o.onPick) o.onPick(g, api); } });
  var zi = document.getElementById("zin"), zo = document.getElementById("zout");
  if (o.fixed){ zi.hidden = zo.hidden = true; }
  else { zi.onclick = function(){ zoomAt(1.25, stage.clientWidth / 2, stage.clientHeight / 2); }; zo.onclick = function(){ zoomAt(.8, stage.clientWidth / 2, stage.clientHeight / 2); }; }
  api = { cam:cam, apply:apply, fly:fly, set:function(x, y, s){ cam.x = x; cam.y = y; if (s) cam.s = s; apply(); } };
  return api;
}
window.KS = { kid:kid, DISTRICTS:DISTRICTS, items:items, locked:locked, lots:lots, el:el, shade:shade, rnd:rnd, calm:calm,
  hud:hud, chips:chips, camera:camera, closeSheet:closeSheet, hideHint:hideHint };
})();
