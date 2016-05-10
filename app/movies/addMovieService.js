"use strict";

angular.module('movieLibrary').service('addMovieService', ['$q', '$mdDialog', function($q, $mdDialog) {
  //the controller for this modal view
  var addMovieController = function($scope, $mdDialog) {
    $scope.optionalResolutions = [480, 720, 1080];
    $scope.movie = {
      id: 0,
      name:"",
      year:1900,
      supportedResolution: [],
      posterImage: "",
      shortDescription: ""
    };
    
    $scope.add = function() {
      $mdDialog.hide($scope.movie);
    };
    
    $scope.cancel = function() {
      $mdDialog.cancel();
    };   
  };
  
  var showAddMovieModal = function(){
      var deferred = $q.defer();

      $mdDialog.show({
      controller: addMovieController,
      templateUrl: 'movies/addMovieDialog.html',
      parent: angular.element(document.body),
      clickOutsideToClose:false,
      fullscreen: false
    })
    .then(function(movie) {
      console.log('adding movie ' + movie.name);
      deferred.resolve(movie);
    }, function() {
      console.log('cancel add movie');
      deferred.reject();
    });
    return deferred.promise;
  };
  
  return {
      showAddMovieModal: showAddMovieModal
  } 
}]);
