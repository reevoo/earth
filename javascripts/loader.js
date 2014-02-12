ReevooEarth.Loader = function () {
  var privateId, privateCallback;

  this.load = function (id, callback) {
    privateId = id;
    privateCallback = callback;

    google.load("earth", "1", { "other_params" : "sensor=false" });
    google.setOnLoadCallback(loadCallback);
  };

  // private
  var loadCallback = function () {
    google.earth.createInstance(privateId, successCallback, errorCallback);
  };

  var successCallback = function (instance) {
    instance.getWindow().setVisibility(true);
    privateCallback(instance);
  };

  var errorCallback = function (code) {
    console.log("Failed to create the google earth instance: " + code);
  };
};
