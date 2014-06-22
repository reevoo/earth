var ReevooEarth = function (id) {
  var loader       = new ReevooEarth.Loader();
  var marker       = new ReevooEarth.Marker();
  var client       = new ReevooEarth.Client();
  var renderer     = new ReevooEarth.Renderer();
  var animator     = new ReevooEarth.Animator();
  var interstitial = new ReevooEarth.Interstitial();

//  client.authenticate();
  var reviews = client.productReviews();

  loader.load(id, function (earth) {
    var marks = reviews.map(function (review) {
      return marker.mark(
        earth,
        review.product_name,
        renderer.render(review),
        review,
        review.latitude,
        review.longitude
      );
    });
//    marks.unshift(markCurrentLocation(earth));

    animator.animate(earth, marks, interstitial);
  });

//  var markCurrentLocation = function (earth) {
//    // Requires browser location support.
//    //navigator.geolocation.getCurrentPosition(function (position) {
//      return marker.mark(
//        earth,
//        "",
//        "You are here!",
//        "",
//        51.505554,
//        -0.104541,
//        "http://bethesignal.org/wp-content/uploads/2006/02/you-are-here.png"
//      );
//    //});
//  };
};
