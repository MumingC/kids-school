/* 「這裡看不懂」回報按鈕。
 *
 * 用法：在頁面裡引入這支之前，先設好 window.KS_FEEDBACK：
 *
 *   window.KS_FEEDBACK = { course:'核分裂', sections:'.station' };
 *   // 或自訂：{ course:'火箭', resolve:function(){ return {title:'...', anchor:''} } }
 *
 * sections 給的選擇器會挑出「目前真的顯示在畫面上」的那一段，
 * 取它的第一個 h1/h2 當段落名稱。整個 UI 包在 Shadow DOM 裡，
 * 不會跟頁面本身的 CSS 互相污染。
 */
(function () {
  var CFG = window.KS_FEEDBACK;
  if (!CFG || !CFG.course) return;

  var API = location.hostname.endsWith(".github.io")
    ? "https://kids-school.vercel.app/api/feedback"
    : "/api/feedback";

  function currentSection() {
    if (typeof CFG.resolve === "function") {
      try { return CFG.resolve() || { title: "", anchor: "" }; } catch (e) { /* 落到下面 */ }
    }
    if (CFG.sections) {
      var els = document.querySelectorAll(CFG.sections);
      for (var i = 0; i < els.length; i++) {
        // offsetParent 是 null 代表這段目前 display:none
        if (els[i].offsetParent !== null) {
          var h = els[i].querySelector("h1,h2");
          return {
            title: (i + 1) + ". " + (h ? h.textContent.trim() : els[i].id || ""),
            anchor: els[i].id || "",
          };
        }
      }
    }
    return { title: "", anchor: "" };
  }

  function post(payload) {
    return fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true, // 小孩送出後馬上關分頁也還是送得出去
    }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; });
  }

  var host = document.createElement("div");
  host.style.cssText = "position:fixed;right:0;bottom:0;z-index:2147483000";
  var sd = host.attachShadow({ mode: "open" });
  sd.innerHTML =
    '<style>' +
    ':host{all:initial}' +
    '*{box-sizing:border-box;font-family:"Noto Sans TC",system-ui,-apple-system,sans-serif}' +
    '.wrap{position:fixed;right:16px;bottom:16px;display:flex;flex-direction:column;align-items:flex-end;gap:8px}' +
    '@media(max-width:520px){.wrap{right:12px;bottom:12px;left:12px;align-items:stretch}}' +
    '.btn{appearance:none;border:0;cursor:pointer;font-size:15px;font-weight:700;line-height:1;' +
    'padding:13px 18px;border-radius:999px;background:#0B7F8E;color:#fff;' +
    'box-shadow:0 3px 10px rgba(0,0,0,.22);transition:transform .15s,background .15s}' +
    '.btn:hover{transform:translateY(-2px)}' +
    '.btn:active{transform:translateY(0)}' +
    '.btn.done{background:#2E9E5B}' +
    '.btn:disabled{cursor:default;transform:none}' +
    '.panel{background:#fff;color:#16202b;border:1px solid #cfdae4;border-radius:14px;' +
    'padding:14px;width:min(300px,calc(100vw - 24px));box-shadow:0 8px 28px rgba(0,0,0,.18)}' +
    '.panel p{margin:0 0 9px;font-size:13.5px;color:#54718f;line-height:1.6}' +
    '.panel textarea{width:100%;min-height:64px;resize:vertical;font-size:15px;line-height:1.6;' +
    'padding:9px;border:1px solid #cfdae4;border-radius:9px;color:#16202b;background:#fff}' +
    '.panel textarea:focus{outline:2px solid #0B7F8E;outline-offset:1px}' +
    '.row{display:flex;gap:8px;margin-top:9px}' +
    '.row button{flex:1;appearance:none;border:0;cursor:pointer;font-size:14px;font-weight:700;' +
    'padding:10px;border-radius:9px}' +
    '.send{background:#0B7F8E;color:#fff}' +
    '.skip{background:#eef3f8;color:#54718f}' +
    '.err{color:#c0392b;font-size:13px;margin:8px 0 0}' +
    '@media(prefers-color-scheme:dark){' +
    '.panel{background:#16262f;color:#e6eef5;border-color:#2b4351}' +
    '.panel p{color:#9fb6c6}' +
    '.panel textarea{background:#0f1c24;color:#e6eef5;border-color:#2b4351}' +
    '.skip{background:#22333d;color:#9fb6c6}}' +
    '</style>' +
    '<div class="wrap">' +
    '<div class="panel" hidden>' +
    '<p>收到了 👍 想說是哪裡不懂嗎？（可以不說）</p>' +
    '<textarea maxlength="500" placeholder="例如：不知道臨界質量是什麼意思"></textarea>' +
    '<div class="row"><button class="send">送出</button><button class="skip">不用了</button></div>' +
    '<p class="err" hidden></p>' +
    '</div>' +
    '<button class="btn" type="button">🤔 這裡看不懂</button>' +
    '</div>';

  var btn = sd.querySelector(".btn");
  var panel = sd.querySelector(".panel");
  var ta = sd.querySelector("textarea");
  var err = sd.querySelector(".err");
  var pageId = null;
  var hideTimer = null;

  function reset() {
    panel.hidden = true;
    err.hidden = true;
    ta.value = "";
    btn.disabled = false;
    btn.className = "btn";
    btn.textContent = "🤔 這裡看不懂";
    pageId = null;
  }

  btn.addEventListener("click", function () {
    if (btn.disabled) return;
    btn.disabled = true;
    btn.className = "btn done";
    btn.textContent = "✓ 收到了！";

    var sec = currentSection();
    var url = location.origin + location.pathname + (sec.anchor ? "#" + sec.anchor : "");

    panel.hidden = false;
    ta.focus({ preventScroll: true });
    clearTimeout(hideTimer);
    hideTimer = setTimeout(reset, 25000); // 沒打字就自己收起來

    post({ course: CFG.course, section: sec.title, url: url }).then(function (r) {
      if (r && r.ok) { pageId = r.id || null; return; }
      btn.className = "btn";
      btn.textContent = "😵 送不出去，等等再按";
      panel.hidden = true;
      clearTimeout(hideTimer);
      hideTimer = setTimeout(reset, 4000);
    });
  });

  sd.querySelector(".send").addEventListener("click", function () {
    var note = ta.value.trim();
    clearTimeout(hideTimer);
    if (!note) return reset();
    if (!pageId) { err.textContent = "還在送，等一秒再按一次"; err.hidden = false; return; }
    ta.disabled = true;
    post({ id: pageId, note: note }).then(function (r) {
      ta.disabled = false;
      if (r && r.ok) { btn.textContent = "✓ 謝謝你！"; reset0(); }
      else { err.textContent = "送不出去，再試一次"; err.hidden = false; }
    });
  });

  function reset0() {
    panel.hidden = true;
    hideTimer = setTimeout(reset, 2500);
  }

  sd.querySelector(".skip").addEventListener("click", function () {
    clearTimeout(hideTimer);
    reset();
  });

  (document.body || document.documentElement).appendChild(host);
})();
