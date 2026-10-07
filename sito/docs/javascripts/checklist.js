// Ricorda le caselle spuntate (- [ ]) di ogni pagina nel browser del lettore.
(function () {
  function init() {
    var boxes = document.querySelectorAll(".md-content .task-list-item input[type=checkbox]");
    if (!boxes.length) return;
    var key = "checklist:" + location.pathname;
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem(key)) || {}; } catch (e) {}

    boxes.forEach(function (box, i) {
      box.disabled = false;
      if (i in saved) box.checked = saved[i];
      box.addEventListener("change", function () {
        // Spunto un passaggio → spunto anche tutti i precedenti.
        // Tolgo la spunta → la tolgo anche ai successivi.
        boxes.forEach(function (b, j) {
          if (box.checked && j < i) b.checked = true;
          if (!box.checked && j > i) b.checked = false;
          saved[j] = b.checked;
        });
        try { localStorage.setItem(key, JSON.stringify(saved)); } catch (e) {}
        update();
      });
    });

    // Barra di avanzamento sotto il titolo
    var bar = document.createElement("div");
    bar.className = "checklist-progress";
    bar.innerHTML = '<span class="checklist-label"></span><div class="checklist-track"><div class="checklist-fill"></div></div>' +
                    '<button type="button" class="checklist-reset">Azzera</button>';
    var h1 = document.querySelector(".md-content h1");
    (h1 || document.querySelector(".md-content__inner")).insertAdjacentElement(h1 ? "afterend" : "afterbegin", bar);
    bar.querySelector(".checklist-reset").addEventListener("click", function () {
      boxes.forEach(function (b) { b.checked = false; });
      saved = {};
      try { localStorage.removeItem(key); } catch (e) {}
      update();
    });

    function update() {
      var done = [].filter.call(boxes, function (b) { return b.checked; }).length;
      bar.querySelector(".checklist-label").textContent = done + " / " + boxes.length + " completati";
      bar.querySelector(".checklist-fill").style.width = (100 * done / boxes.length) + "%";
    }
    update();
  }
  if (window.document$) document$.subscribe(init); else document.addEventListener("DOMContentLoaded", init);
})();
