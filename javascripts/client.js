ReevooEarth.Client = function () {
  var api = "https://api.reevoocloud.com/v4";

  this.authenticate = function () {
    var user = param("username");
    var pass = param("password");

    $.ajaxSetup({ headers: authHeader(user, pass), async: false });
  };

  this.customerExperienceReviews = function () {
    var trkref = param("trkref");

    var url = api;
    url += "/organisations;trkref=" + trkref;
    url += "/customer_experience_reviews?per_page=1000";

    var data;
    $.get(url, function (d) { data = d; });
    var reviews = data.customer_experience_reviews;

    var foo = [];
    for (var i = 0; i < reviews.length; i++) {
      var r = reviews[i];
      if (r.location) {
        foo.push(r);
      }
    }

    return foo;
  };

  // private
  var authHeader = function (user, pass) {
    return { 'Authorization': 'Basic ' + btoa(user + ":" + pass) }
  };

  // http://stackoverflow.com/questions/1403888/get-escaped-url-parameter#answer-1404100
  var param = function (name) {
    return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
  }
};
