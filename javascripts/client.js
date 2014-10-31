ReevooEarth.Client = function () {
  this.trkref = param("trkref");
  this.retrieveReviews = function () {
    var url = "http://localhost:3000/v4/organisations/" + this.trkref + "/reevoo_earth";
    //var url = "https://api.reevoocloud.com/v4/organisations/" + this.trkref + "/reevoo_earth";
    var data;
    var trkref = this.trkref;
    var xhr = $.ajax({
      url: url,
      jsonp: "callback",
      dataType: "jsonp",
      success: function( response ) {
        if (response && response.stats && response.reviews) {
          localStorage.setItem("reevoo_earth_reviews_" + trkref, JSON.stringify(response));
          location.reload();
        }
      }
    });
  };

};

var param = function (name) {
  return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
}
