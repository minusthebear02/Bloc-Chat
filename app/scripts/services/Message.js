(function() {
    function Message($firebaseArray, $cookies) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
        var time = new Date();
        var hour = time.getHours();
        var min = time.getMinutes();
        
        
        return {
      getByRoomId: function (roomId) {
          ref = firebase.database().ref().child("messages");  
        ref = ref.orderByChild('roomID').equalTo(roomId);
        return $firebaseArray(ref);
          
      },
           send: function(activeRoom, newMessage) {
                messages.$add({
                    content: newMessage,
                    sentAt: hour + ':' + min,
                    username: $cookies.get('blocChatCurrentUser'),
                    roomID: activeRoom
                })
            }
            
    };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();