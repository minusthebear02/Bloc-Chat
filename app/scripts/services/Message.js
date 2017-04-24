(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        
        
        return {
      getByRoomId: function (roomId) {
          
        ref = firebase.database().ref().child("messages");  
    
        ref = ref.orderByChild('roomID').equalTo(roomId);
        return $firebaseArray(ref);
          
      }
    };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();