ReevooEarth.Animator = function () {
  var queue = new ReevooEarth.Animator.Queue();
  var privateEarth, privateMarks;

  this.animate = function (earth, marks) {
    if (marks.length == 0) {
      alert("No customer experience reviews.");
      return;
    }

    privateEarth = earth;
    privateMarks = marks;

    setSpeed(0.3);

    for (var i = 0; i < marks.length; i++) {
      var mark = marks[i];
      queue.add(earth, function () {
        flyTo(mark);
      });
    };
  };

  // private
  var flyTo = function (mark) {
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
