(function() {
  angular
    .module('imgApp')
    .controller('imgController', imgController);

  function imgController(resourceFactory, httpFactory) {
    var vm = this;
    vm.images = [];

    resourceFactory.getAllImages().then(function(requestedData) {
        vm.images = requestedData;
      },
      function(errorMsg) {
        console.log(errorMsg);
      });
  }
})();