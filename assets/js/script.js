// Handle CSS loading (non-blocking CSS loading pattern)
function handleStylesheetLoading() {
  const stylesheet = document.getElementById("main-stylesheet");
  if (stylesheet && stylesheet.getAttribute("media") === "print") {
    stylesheet.setAttribute("media", "all");
    console.log("Stylesheet loaded and applied");
  }
}

// Link Management function
function replaceProductLinks() {
  // Configuration
  const TRACKING_URL = "https://www.click.example.com/click";

  // Get all anchor tags on the page
  const productLinks = document.querySelectorAll(
    'a[href^="https://go.oriclehearing.com/action/1"], a[href*="everflowclient.io"]'
  );

  // Replace links
  productLinks.forEach((link) => {
    // Store original URL as data attribute
    const originalUrl = link.getAttribute("href");
    link.setAttribute("data-original-url", originalUrl);

    // Replace with tracking URL
    link.setAttribute("href", TRACKING_URL);
  });

  console.log(
    `Link replacement completed: ${productLinks.length} links modified`
  );
}

// Update date displays with properly formatted dates
function updateDateDisplays() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const newDate = new Date();
  const formattedDate =
    dayNames[newDate.getDay()] +
    ", " +
    monthNames[newDate.getMonth()] +
    " " +
    newDate.getDate() +
    ", " +
    newDate.getFullYear();

  // Update the article date display
  const dateElement = document.getElementById("Date");
  if (dateElement) {
    dateElement.textContent = formattedDate;
  }

  // Update the update date display
  const updateDateElement = document.getElementById("update_date");
  if (updateDateElement) {
    updateDateElement.textContent = formattedDate;
  }
}

// Main functionality
document.addEventListener("DOMContentLoaded", function () {
  // Handle stylesheet loading
  handleStylesheetLoading();

  // Update date displays
  updateDateDisplays();

  // Execute link replacement
  replaceProductLinks();

  // Fix for mobile menu
  const menuButton = document.querySelector('[data-collapse="medium"]');
  const navOverlay = document.getElementById("w-nav-overlay-0");

  if (menuButton) {
    // Ensure the mobile menu works correctly
    menuButton.addEventListener("touchend", function (e) {
      if (window.innerWidth <= 991) {
        if (navOverlay.style.display === "block") {
          navOverlay.style.display = "none";
        } else {
          navOverlay.style.display = "block";
        }
      }
    });
  }

  // Fix for buttons and links to work on touch devices
  const allButtons = document.querySelectorAll(".w-button, a");
  allButtons.forEach(function (button) {
    button.addEventListener("touchstart", function () {
      // This empty handler ensures touch events work properly
    });
  });

  // Handle hover states on mobile - convert hover to tap
  const hoverElements = document.querySelectorAll("[data-w-id]");
  hoverElements.forEach(function (element) {
    element.addEventListener("touchstart", function () {
      this.classList.add("hover");
    });
    element.addEventListener("touchend", function () {
      setTimeout(function () {
        element.classList.remove("hover");
      }, 300);
    });
  });

  // Fix for forms - ensure they submit correctly on all devices
  const forms = document.querySelectorAll("form");
  forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      // Prevent default only if there's custom form handling
      const hasCustomHandler = form.hasAttribute("data-custom-submit");
      if (hasCustomHandler) {
        e.preventDefault();
        // Any custom form handling logic would go here
      }
    });
  });

  // Prevent horizontal scrolling on mobile
  document.body.style.overflowX = "hidden";
});

// In case the DOM is already loaded
if (document.readyState !== "loading") {
  handleStylesheetLoading();
  updateDateDisplays();
}
