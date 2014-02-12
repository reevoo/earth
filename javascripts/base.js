var ReevooEarth = function (id) {
  var loader   = new ReevooEarth.Loader();
  var marker   = new ReevooEarth.Marker();
  var client   = new ReevooEarth.Client();
  var renderer = new ReevooEarth.Renderer();
  var animator = new ReevooEarth.Animator();

  loader.load(id, function (earth) {
    var reviews = client.latestReviews();

    var marks = reviews.map(function (review) {
      return marker.mark(
        earth,
        review.product_name,
        renderer.render(review),
        review.latitude,
        review.longitude
      );
    });

    animator.animate(earth, marks);
  });
};
