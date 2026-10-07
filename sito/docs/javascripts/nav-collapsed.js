// Menu di navigazione chiuso di default: si aprono solo le sezioni che il lettore
// ha aperto lui, e restano aperte (anche ricaricando o cambiando pagina).
(function () {
  var KEY = "nav-open";

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; }
  }
  function save(open) {
    try { localStorage.setItem(KEY, JSON.stringify(open)); } catch (e) {}
  }
  function label(toggle) {
    var l = toggle.parentElement.querySelector(":scope > label.md-nav__link, :scope > .md-nav__link");
    return l ? l.textContent.trim() : toggle.id;
  }

  function init() {
    var open = load();
    document.querySelectorAll(".md-nav--primary .md-nav__toggle").forEach(function (t) {
      if (t.id === "__drawer" || t.id === "__toc") return;
      var name = label(t);
      t.classList.remove("md-toggle--indeterminate");
      t.checked = open.indexOf(name) !== -1;
      t.addEventListener("change", function () {
        var list = load().filter(function (n) { return n !== name; });
        if (t.checked) list.push(name);
        save(list);
      });
    });
  }
  if (window.document$) document$.subscribe(init); else document.addEventListener("DOMContentLoaded", init);
})();
