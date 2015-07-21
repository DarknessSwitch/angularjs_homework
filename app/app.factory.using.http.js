(function() {
  angular.module('imgApp')
    .factory('httpFactory', httpFactory);

  function httpFactory($http, $q) {

    ImagesUrl = 'http://jsonplaceholder.typicode.com/photos';


    var getAllImages = function() {
      var deferred = $q.defer();
      $http.get(ImagesUrl)
        .success(function(data) {
          deferred.resolve(data);
        })
        .error(function(error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    return {
      getAllImages: getAllImages
    };
  }
})();