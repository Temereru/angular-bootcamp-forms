"use strict";

angular.module('movieLibrary').service('AddMovieService', ['$q', '$mdDialog', function($q, $mdDialog) {
  //the controller for this modal view
  var addMovieController = function($scope, $mdDialog) {
    var movie = {
      id:3,
      name:"The Hobbit: The Desolation of Smaug",
      year:2013,
      supportedResolution: [720,1080],
      posterImage: "https://en.wikipedia.org/wiki/File:The_Hobbit_-_The_Desolation_of_Smaug_theatrical_poster.jpg",
      shortDescription: "The film follows the titular character Bilbo Baggins as he accompanies Thorin Oakenshield and his fellow Dwarves on a quest to reclaim the Lonely Mountain from the dragon Smaug"
    };
    
    $scope.add = function() {
      $mdDialog.hide(movie);
    };
    
    $scope.cancel = function() {
      $mdDialog.cancel();
    };   
  };
  
  var showAddMovieModal = function(){
      var deferred = $q.defer();

      $mdDialog.show({
      controller: addMovieController,
      templateUrl: 'app/movies/addMovieDialog.html',
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
