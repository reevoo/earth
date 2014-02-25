var ReevooEarth = function (id) {
  var loader   = new ReevooEarth.Loader();
  var marker   = new ReevooEarth.Marker();
  var client   = new ReevooEarth.Client();
  var renderer = new ReevooEarth.Renderer();
  var animator = new ReevooEarth.Animator();

  client.authenticate();
  var reviews = client.customerExperienceReviews();

  loader.load(id, function (earth) {
    var marks = reviews.map(function (review) {

      return marker.mark(
        earth,
        review.locationName,
        renderer.render(review),
        review.latitude,
        review.longitude
      );
    });

    animator.animate(earth, marks);
  });

  var round = function (string, places) {
    return parseFloat(string).toFixed(places);
  };
};
