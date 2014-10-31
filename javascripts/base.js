var ReevooEarth = function (id) {
  var loader       = new ReevooEarth.Loader();
  var marker       = new ReevooEarth.Marker();
  var client       = new ReevooEarth.Client();
  var renderer     = new ReevooEarth.Renderer();
  var animator     = new ReevooEarth.Animator();
  var interstitial = new ReevooEarth.Interstitial();

  launchReevooEarthMap(true);

  /**
   * Method to get the needed Reevoo Earth data and and launch Google Earth
   * once it's got it.
   */
  function launchReevooEarthMap(first_call) {
    var reevoo_data = getCachedReevooEarthData();
    if (reevoo_data) {
      initGoogleEarthMap(reevoo_data);
    } else {
      client.retrieveReviews();
      window.setTimeout(function() { location.reload(); },90000);
    }
  }

  /**
   * Method to load the Google Earth map on the browser
   * and initialize it with the associated Reevoo Data.
   * @param reevoo_data
   */
  function initGoogleEarthMap(reevoo_data) {
    renderer.renderStats(reevoo_data.stats, client.trkref);
    var reviews = reevoo_data.reviews;
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
  }

  /**
   * Method that checks whether we've got Reevoo Earth data cached
   * in the local storage and if so returns it.
   */
  function getCachedReevooEarthData() {
    var reevoo_data = localStorage.getItem("reevoo_earth_reviews_" + client.trkref);
    if (reevoo_data) {
      reevoo_data =  JSON.parse(reevoo_data);
    }
    if (reevoo_data && reevoo_data.stats && reevoo_data.reviews) {
      return reevoo_data;
    }
    return null;
  }

  //set an interval that will retrieve the reviews from the server every
  //10 minutes and reload reevoo earth with the new data.
  window.setInterval(function() {
    client.retrieveReviews();
  },600000);


};
