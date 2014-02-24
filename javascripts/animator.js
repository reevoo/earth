ReevooEarth.Animator = function () {
  var privateEarth, privateMarks;
  var index = 0;

  this.animate = function (earth, marks) {
    if (marks.length == 0) {
      alert("No customer experience reviews.");
      return;
    }

    privateEarth = earth;
    privateMarks = marks;

    setSpeed(0.3);
    animateRecursively();
  };

  // private
  var animateRecursively = function () {
    nextIndex();
    animateOne();
    onceAnimationHasFinished(animateRecursively);
  };

  var animateOne = function () {
    var mark = privateMarks[index];

    flyTo(mark);
    mark.activate();
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

  var onceAnimationHasFinished = function (nextEvent) {
    var callThenUnbind = function() {
      try {
        nextEvent();
      } catch(e) {
        console.log("Error in animation action: " + e);
      }
      google.earth.removeEventListener(privateEarth.getView(), 'viewchangeend', callThenUnbind);
    };

    google.earth.addEventListener(privateEarth.getView(), 'viewchangeend', callThenUnbind);
  }
};
