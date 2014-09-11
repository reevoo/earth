ReevooEarth.Client.Adapter = function () {

  this.customerExperience = function (reviews) {
    return reviews.map(function (review) {
      var responses = review.responses.map(function (r) { return r.answer; });

      return {
        latitude: review.location.latitude,
        longitude: review.location.longitude,
        locationName: review.location.city || "", // delete the 'or' when data comes from API
        generalComments: responses[2],
        wouldBuyAgain: responses[3],
        firstName: review.reviewer.first_name,
        date: review.submitted_at
      };
    });
  };

};
