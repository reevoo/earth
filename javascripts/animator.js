ReevooEarth.Animator = function () {
  var privateEarth, privateMarks;

  this.animate = function (earth, marks) {
    if (marks.length == 0) {
      alert("No customer experience reviews.");
      return;
    }

    privateEarth = earth;
    privateMarks = marks;

    animateRecursively(0);
  };

  // private
  var animateRecursively = function (index) {
    var mark = privateMarks[index];

    var nextAnimation = function () {
      index += 1;
      index %= privateMarks.length;

      animateRecursively(index);
    };

    animateOne(mark, nextAnimation);
  };

  var animateOne = function (mark, nextAnimation) {
    flyTo(mark, 20000);
    after("animation", function () {
      mark.open();
      after(3000, function () {
        mark.close();

        after(1000, nextAnimation);
      });
    });
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
