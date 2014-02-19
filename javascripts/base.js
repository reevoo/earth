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
        review.reviewer.first_name,
        renderer.render(review),
        review.location.latitude,
        review.location.longitude
      );
    });

    animator.animate(earth, marks);
  });
};
