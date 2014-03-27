ReevooEarth.Interstitial = function () {
  var reevooEarth = $("#reevoo-earth");
  var interstitial = $("#interstitial");

  this.display = function (callback) {
    swapView(reevooEarth, interstitial, 1000, function () {
      setTimeout(function () {
        swapView(interstitial, reevooEarth, 1000, callback);
      }, 3000);
    });
  };

  var swapView = function (from, to, duration, callback) {
    from.fadeOut(duration / 2, function () {
      to.fadeIn(duration / 2, callback);
    });
  };
};
