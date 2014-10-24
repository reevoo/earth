ReevooEarth.Client = function () {

  this.customerExperienceReviews = function () {
    var trkref = param("trkref");
    var url = "http://earth.reevoo.com/v4/organisations/" + trkref + "/reevoo_earth";
    $.ajaxSetup({
      headers: { 'Authorization': "Basic ZWFydGg6ZWFydGg=" },
      async: false
    });
    var data;
    $.get(url, function (d) {
      if ("reviews" in d) {
        data = d.reviews;
        $('#num_reviews_value').html(d.stats.number_of_reviews);
        if (d.stats.number_of_languages <=1) {
          $('#num_languages').hide();
        }
        if (d.stats.number_of_countries <=1) {
          $('#num_countries').hide();
        }
        $('#retailer-logo').attr("src", "http://cdn.images.reevoo.com/retailers/Center/" + trkref + "/brand/200x144.png%1fbackground=transparent");

      } else {
        data = [];
      }
    });

    return data;
  };

  var param = function (name) {
    return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
  }

};
