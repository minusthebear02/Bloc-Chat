(function() {
    function RoomListCtrl($scope, Room) {
        console.log(Room.all);
        this.roomList = Room.all;
    }
    
    angular
        .module('blocChat')
        .controller('RoomListCtrl', ['$scope','Room', RoomListCtrl]);
})();