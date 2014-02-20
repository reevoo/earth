ReevooEarth.Animator.Queue = function () {
  var queue = new Array();
  var first = true;
  var privateEarth;

  this.add = function (earth, animation) {
    privateEarth = earth;

    if (first) {
      animation();
      setTimeout(processQueue, 0);
      first = false;
    }
    else {
      queue.push(animation);
    }
  };

  var processQueue = function () {
    while (true) {
      if (queue.length != 0) {
        var animation = queue.shift();
        onceAnimationHasFinished(animation);
      }
      // add a sleep?
    }
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
  };
};

