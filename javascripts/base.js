var ReevooEarth = function (id) {
  var loader       = new ReevooEarth.Loader();
  var marker       = new ReevooEarth.Marker();
  var client       = new ReevooEarth.Client();
  var renderer     = new ReevooEarth.Renderer();
  var animator     = new ReevooEarth.Animator();
  var interstitial = new ReevooEarth.Interstitial();

  var reviews = client.customerExperienceReviews();

  loader.load(id, function (earth) {
    var marks = reviews.map(function (review) {
      return marker.mark(
        earth,
        review.city,
        renderer.render(review),
        review,
        review.latitude,
        review.longitude
      );
    });

    animator.animate(earth, marks, interstitial);
  });

};
