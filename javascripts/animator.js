ReevooEarth.Animator = function () {
  var privateEarth, privateMarks, privateInterstitial;
  var interstitialReviewCounter = 1;

  this.animate = function (earth, marks, interstitial) {
    if (marks.length == 0) {
      alert("No customer experience reviews.");
      return;
    }

    privateEarth        = earth;
    privateMarks        = marks;
    privateInterstitial = interstitial;

    animateRecursively(0, 5000);
  };

  // private
  var animateRecursively = function (index, popupTime) {
    var mark = privateMarks[index];

    var nextAnimation = function () {
      index += 1;
      index %= privateMarks.length;
      animateRecursively(index, 5000);
    };

    animateOne(mark, nextAnimation, popupTime);
  };

  var animateOne = function (mark, nextAnimation, popupTime) {
    if (interstitialReviewCounter % 4 == 0) {
      //zoomOut
      privateInterstitial.display(nextAnimation);

    }
    else {
      flyTo(mark, 500000);
      after("animation", function () {
        privateEarth.getOptions().setGridVisibility(false);
        flyTo(mark, 20000);
        after("animation", function () {
          mark.open();
          var length = mark.length;
          after(popupTime, function () {
            mark.close();
            privateEarth.getOptions().setGridVisibility(false);
            after(0, nextAnimation);
          });
        });
      });
    }
    interstitialReviewCounter += 1;
  };

  var flyTo = function(mark, range) {
    var lookAt = privateEarth.createLookAt('');
    lookAt.setLatitude(mark.latitude);
    lookAt.setLongitude(mark.longitude);
    lookAt.setRange(range);

    privateEarth.getView().setAbstractView(lookAt);
  };

  var after = function (event, callback) {
    if (isNaN(event)) {
      afterAnimation(callback);
    }
    else {
      setTimeout(callback, event);
    }
  };

  var afterAnimation = function (callback) {
    var callThenUnbind = function () {
      callback();
      google.earth.removeEventListener(privateEarth.getView(), 'viewchangeend', callThenUnbind);
    };

    google.earth.addEventListener(privateEarth.getView(), 'viewchangeend', callThenUnbind);
  };
};
