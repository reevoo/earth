// TODO
ReevooEarth.Animator = function () {
  this.animate = function (earth, marks) {
    marks[0].activate();

    // Create a new LookAt.
    var lookAt = earth.createLookAt('');

    // Set the position values.
    lookAt.setLatitude(12.345);
    lookAt.setLongitude(54.321);
    lookAt.setRange(500000.0); //default is 0.0

    earth.getOptions().setFlyToSpeed(0.5);

    // Update the view in Google Earth.
    earth.getView().setAbstractView(lookAt);
  };
};
