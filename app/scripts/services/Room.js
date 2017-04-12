(function() {
    function Room($firebaseArray) {
        
        var ref = firebase.database().ref().child("rooms");
        
        var rooms = $firebaseArray(ref);
         
        
        return {
            all: rooms,
            addRoom: function(name) {
                var newObj = {};
                var num = rooms.length + 1;
                newObj[num] = name;
                rooms.$add(newObj[num]);
            }
            
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();