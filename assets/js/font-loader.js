// Load Google Fonts when the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  // Only load fonts when the page is ready and WebFont is available
  if (typeof WebFont !== "undefined") {
    WebFont.load({
      google: {
        families: [
          "Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic",
          "Oswald:200,300,400,500,600,700",
          "Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic",
          "Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic",
          "EB Garamond:regular,500,600,700,800,italic,500italic,600italic,700italic,800italic",
          "Roboto:regular,italic,500,700,900",
          "Poppins:regular,500,600,700,800,900",
        ],
        // Subset parameter reduces font size by specifying only needed characters
        text: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,/()'!& 1234567890",
      },
    });
  }
});
