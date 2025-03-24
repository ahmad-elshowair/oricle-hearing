/**
 * FF Pro View Event tracking
 */
document.addEventListener("DOMContentLoaded", function () {
  if (typeof flux !== "undefined") {
    flux.track("view");
  }
});
