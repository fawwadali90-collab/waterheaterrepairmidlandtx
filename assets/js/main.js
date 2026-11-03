// Midland Water Heater Pros — nav interactions (Ultra Violet)
(function () {
  var navToggle = document.querySelector("[data-nav-toggle]");
  var navPanel = document.querySelector("[data-nav-panel]");
  if (navToggle && navPanel) {
    navToggle.addEventListener("click", function () {
      var open = navPanel.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  document.querySelectorAll("[data-nav-dropdown]").forEach(function (dd) {
    var btn = dd.querySelector("[data-dropdown-toggle]");
    var panel = dd.querySelector("[data-dropdown-panel]");
    var link = dd.querySelector(".nav-dropdown-trigger > a");
    if (!btn || !panel) return;
    function toggle(e) {
      if (e) e.preventDefault();
      var open = dd.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    }
    btn.addEventListener("click", toggle);
    // The Services/Locations label navigates to its hub page normally;
    // only the chevron button toggles the dropdown.
  });
  document.addEventListener("click", function (e) {
    document.querySelectorAll("[data-nav-dropdown].open").forEach(function (dd) {
      if (!dd.contains(e.target)) {
        dd.classList.remove("open");
        var btn = dd.querySelector("[data-dropdown-toggle]");
        if (btn) btn.setAttribute("aria-expanded", "false");
      }
    });
  });
})();
