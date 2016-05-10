"use strict";

angular.module('movieLibrary',['ui.bootstrap', 'ngMaterial', 'inAppMessaging', 'ngMessages'])
.controller('appCtrl', ['$scope', '$timeout', 'InAppMessagingService', function($scope, $timeout, inAppMessagingService){
  $scope.isAppReady = false;
  $timeout(function(){
    var inAppMessageToDisplay = inAppMessagingService.getInAppMessage();
    $scope.$broadcast(inAppMessagingService.events.onDisplayInAppMessageRequested, inAppMessageToDisplay);
  }, 3000);

  $timeout(function(){
    $scope.isAppReady = true;
  }, 1000)
}]);