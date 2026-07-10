/* Лёгкая офлайн-разметка формул. Поддерживает \(...\), \[...\], дроби,
   степени/индексы и наиболее частые TeX-команды без внешних библиотек. */
(function (global) {
  "use strict";
  var symbols = {
    "Theta":"Θ", "theta":"θ", "alpha":"α", "beta":"β", "gamma":"γ", "delta":"δ", "Delta":"Δ",
    "lambda":"λ", "mu":"μ", "pi":"π", "sigma":"σ", "Sigma":"Σ", "omega":"ω", "Omega":"Ω",
    "le":"≤", "leq":"≤", "ge":"≥", "geq":"≥", "ne":"≠", "neq":"≠", "infty":"∞",
    "times":"×", "cdot":"·", "pm":"±", "rightarrow":"→", "to":"→", "leftarrow":"←",
    "in":"∈", "notin":"∉", "cup":"∪", "cap":"∩", "sum":"∑", "prod":"∏"
  };
  function esc(s) { return String(s == null ? "" : s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
  function group(s, start) {
    if (s[start] !== "{") return null;
    var depth = 0;
    for (var i = start; i < s.length; i++) { if (s[i] === "{") depth++; else if (s[i] === "}" && --depth === 0) return { value:s.slice(start + 1, i), end:i + 1 }; }
    return null;
  }
  function tex(src) {
    src = String(src || "").trim(); var out = "", i = 0;
    while (i < src.length) {
      if (src.slice(i, i + 5) === "\\frac") {
        var a = group(src, i + 5), b = a && group(src, a.end);
        if (a && b) { out += '<span class="mfrac"><span>' + tex(a.value) + '</span><span>' + tex(b.value) + '</span></span>'; i = b.end; continue; }
      }
      if (src.slice(i, i + 5) === "\\sqrt") {
        var r = group(src, i + 5); if (r) { out += '<span class="msqrt">√<span>' + tex(r.value) + '</span></span>'; i = r.end; continue; }
      }
      if (src[i] === "\\") {
        var m = src.slice(i + 1).match(/^[A-Za-z]+/);
        if (m) { var name = m[0]; out += symbols[name] || (name === "log" ? "log" : name === "mathrm" ? "" : "\\" + name); i += name.length + 1; continue; }
        if (i + 1 < src.length) { out += esc(src[i + 1]); i += 2; continue; }
      }
      if (src[i] === "^" || src[i] === "_") {
        var tag = src[i] === "^" ? "sup" : "sub", g = group(src, i + 1), val = g ? g.value : src[i + 1];
        if (val != null) { out += "<" + tag + ">" + tex(val) + "</" + tag + ">"; i = g ? g.end : i + 2; continue; }
      }
      if (src[i] === "{") { var bare = group(src, i); if (bare) { out += tex(bare.value); i = bare.end; continue; } }
      out += esc(src[i]); i++;
    }
    return out.replace(/~/g, " ");
  }
  function html(text) {
    var s = String(text == null ? "" : text), re = /\\\[([\s\S]*?)\\\]|\\\(([\s\S]*?)\\\)/g, last = 0, m, out = "";
    while ((m = re.exec(s))) { out += esc(s.slice(last, m.index)); out += '<span class="math ' + (m[1] != null ? "math--block" : "") + '">' + tex(m[1] != null ? m[1] : m[2]) + '</span>'; last = re.lastIndex; }
    return out + esc(s.slice(last));
  }
  function setText(el, text) { el.innerHTML = html(text).replace(/\n/g, "<br>"); }
  global.MathFormat = { html:html, setText:setText };
})(window);
