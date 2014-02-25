ReevooEarth.Renderer = function () {
  this.render = function(review) {
    var responses = review.responses.map(function (r) { return r.answer; });
    var generalComments = responses[2];
    var wouldBuyAgain = responses[3];

    var html = "";
    var wouldBuyAgainText;

    if (wouldBuyAgain != null) {
      if (wouldBuyAgain == true) {
        wouldBuyAgainText = "<span style='font-size: 200%; color: green'>Yes</span>, I would buy again from this retailer";
      }
      else if (wouldBuyAgain == false) {
        wouldBuyAgainText = "<span style='font-size: 200%; color: red'>No</span>, I would not buy again from this retailer";
      }
      html = html.concat('<p style="margin-bottom: 10px">' + wouldBuyAgainText + '</p>');
    }

    html = html.concat('<p style="font-style: italic">"' + generalComments + '"</p>');
    html = html.concat('<p style="margin-top: 20px">' + firstName(review) + '</p>');
    html = html.concat('<p>' + submittedAt(review) + '</p>');

    console.log(review);

    return html;
  };

  var submittedAt = function (review) {
    var date = review.submitted_at;
    date = date.replace("UTC", "");
    return jQuery.timeago(date);
  };

  var firstName = function (review) {
    return review.reviewer.first_name || "anonymous";
  };
};
