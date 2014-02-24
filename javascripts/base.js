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
        locationName(review),
        renderer.render(review),
        review.location.latitude,
        review.location.longitude
      );
    });

    animator.animate(earth, marks);
  });

  var locationName = function (review) {
    var name = review.reviewer.location;

    var lat = review.location.latitude;
    var long = review.location.longitude;
    var coord = round(lat, 2) + ", " + round(long, 2);

    return name || coord;
  };

  var round = function (string, places) {
    return parseFloat(string).toFixed(places);
  };
};
