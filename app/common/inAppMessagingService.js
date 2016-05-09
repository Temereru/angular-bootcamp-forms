"use strict";

angular.module('inAppMessaging', []).service('InAppMessagingService', [function() {
  var inAppMessagesEvents = {
    onDisplayInAppMessageRequested: 'onDisplayInAppMessageRequested'  
  };
  
  var inAppMessage = {
   id: 0,
   message: 'New search film field available in app now, check it out!',
   dateIssued: new Date().getTime() 
  };

  var getInAppMessage = function(){
    return inAppMessage;
  };
  
  return {
      events: inAppMessagesEvents,
      getInAppMessage: getInAppMessage
  } 
}]);
