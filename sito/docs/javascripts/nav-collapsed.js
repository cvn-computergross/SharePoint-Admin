// Menu di navigazione sempre chiuso all'apertura di una pagina:
// le sezioni si aprono solo cliccandole.
(function () {
  function collapse() {
    document.querySelectorAll(".md-nav--primary .md-nav__toggle").forEach(function (t) {
      if (t.id === "__drawer") return;
      t.checked = false;
      t.classList.remove("md-toggle--indeterminate");
    });
  }
  if (window.document$) document$.subscribe(collapse); else document.addEventListener("DOMContentLoaded", collapse);
})();
