/**
 * FF Pro Universal Tag
 */
!(function (f, l, u, x, j, s, a, b) {
  window.flux ||
    ((j = "undefined" != typeof fluxOptions ? fluxOptions : {}),
    (s = "undefined" != typeof fluxDefaults ? fluxDefaults : {}),
    ((a = l.createElement("script")).src =
      "https://" + u + "/integration/lumetricv2.min.js?v=" + x),
    (a.type = "text/javascript"),
    (a.async = "true"),
    (queue = []),
    (window.flux = {
      track: function () {
        queue.push(arguments);
      },
    }),
    (a.onload = a.onreadystatechange =
      function () {
        var rs = this.readyState;
        if (!rs || "complete" == rs || "loaded" == rs)
          try {
            for (window.flux = new Lumetric(u, x, j, s); 0 != queue.length; ) {
              var args = queue.pop();
              window.flux.track.apply(null, args);
            }
          } catch (e) {}
      }),
    (b = document.getElementsByTagName("script")[0]).parentNode.insertBefore(
      a,
      b
    ));
})(window, document, "go.oriclehearing.com", "3.2.0");
