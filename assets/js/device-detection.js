/**
 * Device detection script for Oricle Hearing website
 * Adds appropriate CSS classes based on browser capabilities
 */

// Immediately-invoked function to detect JS and touch support
!(function (window, document) {
  var documentElement = document.documentElement,
    classPrefix = " w-mod-";

  // Add class for JavaScript support
  documentElement.className += classPrefix + "js";

  // Add class for touch device support
  if (
    "ontouchstart" in window ||
    (window.DocumentTouch && document instanceof DocumentTouch)
  ) {
    documentElement.className += classPrefix + "touch";
  }
})(window, document);
