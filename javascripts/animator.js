ReevooEarth.Animator = function () {
  var privateEarth, privateMarks;
  var index = 0;
  var isAnimating = false;

  this.animate = function (earth, marks) {
    privateEarth = earth;
    privateMarks = marks;

    setSpeed(0.3);
    monitorAnimation();
    animateRecursively();
  };

  // private
  var animateRecursively = function () {
    nextIndex();
    animateOne();
    queueAnimation();
  };

  var animateOne = function () {
    isAnimating = true;
    var mark = privateMarks[index];

    flyTo(mark);
    mark.activate();
  };

  var monitorAnimation = function () {
    var event = "viewchangeend";

    google.earth.addEventListener(privateEarth.getView(), event, function () {
      isAnimating = false;
    });
  };

  var queueAnimation = function () {
    setTimeout(function () {
      if (isAnimating) {
        queueAnimation();
      }
      else {
        animateRecursively();
      }
    }, 5000);
  };

  var nextIndex = function () {
    index += 1;
    index %= privateMarks.length;
  };

  var flyTo = function(mark) {
    var lookAt = privateEarth.createLookAt('');

    lookAt.setLatitude(mark.latitude);
    lookAt.setLongitude(mark.longitude);
    lookAt.setRange(500000);

    privateEarth.getView().setAbstractView(lookAt);
  };

  var setSpeed = function (speed) {
    privateEarth.getOptions().setFlyToSpeed(speed);
  };
};
