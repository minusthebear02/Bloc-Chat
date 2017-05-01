(function() {
    function Room($firebaseArray, $cookies) {
        
        var ref = firebase.database().ref().child("rooms");
        
        var rooms = $firebaseArray(ref);
         
        
        return {
            all: rooms,
            addRoom: function(name) {
                rooms.$add(name);
            },
            addUser: function(username) {
                $cookies.put('blocChatCurrentUser', username);
            }
            
            
            
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', '$cookies', Room]);
})();