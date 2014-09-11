ReevooEarth.Renderer = function () {
  this.render = function(review) {
    var html = "";
    html = html.concat('<div id="popup">');
    html = html.concat('  <div id="content">');
    html = html.concat('    <div id="product">');
    html = html.concat('      <img class="product-image" src="' + productImage(review) + '"/>');
    html = html.concat('      <div class="score">');
    html = html.concat('        <div class="count">' + score(review) + '</div>');
    html = html.concat('        <div class="text">out of 10</div>');
    html = html.concat('      </div>');
    html = html.concat('      <div class="published">');
    html = html.concat('        <img src="images/time_icon.svg"/>');
    html = html.concat('        <span class="published-at">' + submittedAt(review) + '</span>');
    html = html.concat('      </div>');
    html = html.concat('    </div>');
    html = html.concat('    <div class="points" id="good-points">');
    html = html.concat('      <div class="left-smiley">');
    html = html.concat('        <img src="images/smile.svg"/>');
    html = html.concat('      </div>');
    html = html.concat('      <div class="contents">');
    html = html.concat('        <img id="blue-reevoo-icon" src="images/reevoo_icon_blue.svg"/> ' + goodPoints(review));
    html = html.concat('      </div>');
    html = html.concat('    </div>');
    html = html.concat('    <div class="points" id="bad-points">');
    html = html.concat('      <div class="left-smiley">');
    html = html.concat('        <img src="images/sad.svg"/>');
    html = html.concat('      </div>');
    html = html.concat('      <div class="contents"> ' + badPoints(review));
    html = html.concat('        <img id="orange-reevoo-icon" src="images/reevoo_icon_orange.svg"/>');
    html = html.concat('      </div>');
    html = html.concat('    </div>');
    html = html.concat('    <div id="details">');
    html = html.concat('      <div id="username">' + firstName(review) + '</div>');
    html = html.concat('    </div>');
    html = html.concat('  </div>');
    html = html.concat('</div>');
    return html;
  };

  var submittedAt = function (review) {
    return jQuery.timeago(review.date.replace("UTC", ""));
  };

  var firstName = function (review) {
    return review.first_name || "anonymous";
  };

  var goodPoints = function (review) {
    return review.good_points || "";
  }

  var badPoints = function (review) {
    return review.bad_points || "";
  }

  var productImage = function (review) {
    return review.product_image;
  }

  var score = function (review) {
    return review.score;
  }

};
