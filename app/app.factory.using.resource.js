(function()
{
	angular.module('imgApp')
		.factory('resourceFactory', resourceFactory);
	
	function resourceFactory($resource,$q){
		
		Images = $resource('http://jsonplaceholder.typicode.com/photos');
	
		var getAllImages = function() {
			var deferred = $q.defer();
			Images.query(function(res){
					deferred.resolve(res);
					},
				function(err) { 
					deferred.reject(error);
				});
			
			return deferred.promise;
		}
		
		return {
			getAllImages : getAllImages
		};
	}
})();