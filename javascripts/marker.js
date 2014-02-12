ReevooEarth.Marker = function () {
  var privateEarth;
  var imageUrl = "http://www.reevoo.com/images/homepage/introduction/narwhals.png";

  this.mark = function (earth, title, content, latitude, longitude) {
    privateEarth = earth;

    var placemark   = createPlacemark(title, latitude, longitude);
    var normalStyle = createStyle(imageUrl, 1.0);
    var hoverStyle  = createStyle(imageUrl, 1.5);
    var balloon     = createBalloon(content);

    attachStyles(placemark, normalStyle, hoverStyle);
    attachBalloon(placemark, balloon);
    attachPlacemark(placemark);

    return {
      activate: function () {
        privateEarth.setBalloon(balloon);
      }
    }
  };

  // private
  var createPlacemark = function (title, latitude, longitude) {
    var placemark = privateEarth.createPlacemark("");
    placemark.setName(title);

    var point = privateEarth.createPoint("");
    point.setLatitude(latitude);
    point.setLongitude(longitude);
    placemark.setGeometry(point);

    return placemark;
  };

  var createStyle = function (imageHref, scale) {
    var style = privateEarth.createStyle("");
    var icon = privateEarth.createIcon("");

    icon.setHref(imageHref);

    style.getIconStyle().setIcon(icon);
    style.getIconStyle().setScale(scale);

    return style;
  };

  var createBalloon = function (content) {
    var balloon = privateEarth.createHtmlStringBalloon('');

    balloon.setContentString(content);
    balloon.setMinWidth(200);
    balloon.setMaxHeight(200);
    balloon.setCloseButtonEnabled(false);

    return balloon;
  };

  var attachStyles = function (placemark, normal, hover) {
    var styleMap = privateEarth.createStyleMap("");

    styleMap.setNormalStyle(normal);
    styleMap.setHighlightStyle(hover);

    placemark.setStyleSelector(styleMap);
  };

  var attachBalloon = function (placemark, balloon) {
    balloon.setFeature(placemark);
  };

  var attachPlacemark = function (placemark) {
    privateEarth.getFeatures().appendChild(placemark);
  };

  var activator = function (balloon) {
    return {
      activate: function () {
        privateEarth.setBalloon(balloon);
      }
    }
  };
};
