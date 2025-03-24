/**
 * Query Parameter Pass
 * Appends URL query parameters to all links on the page
 */
document.addEventListener("DOMContentLoaded", function () {
  // Function to get query string from current URL
  function getQueryString() {
    return window.location.search;
  }

  // Get all links on the page
  var links = document.getElementsByTagName("a");
  var queryString = getQueryString();

  // Only proceed if we have query parameters
  if (queryString && queryString.length > 1) {
    // Append query string to each link
    for (var i = 0; i < links.length; i++) {
      var link = links[i];

      // Check if the link already has a query string
      if (link.href.includes("?")) {
        // Append & and the additional query string
        link.href += "&" + queryString.substring(1);
      } else {
        // Append ? and the query string
        link.href += queryString;
      }
    }

    console.log("Query parameters appended to all links");
  }
});
