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
    url += "/customer_experience_reviews";

    var data;
    $.get(url, function (d) { data = d; });
    return data.customer_experience_reviews;
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
