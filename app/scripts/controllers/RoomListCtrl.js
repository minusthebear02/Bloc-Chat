(function() {
    function RoomListCtrl($rootScope, $uibModal, $scope, Room, Message) {
        this.roomList = Room.all;
        
        this.activeRoom = {};
        
        this.activeMessages = null;
        
        this.selectRoom = function(roomName) {
            
            this.activeRoom = roomName;
            this.activeMessages = Message.getByRoomId(this.activeRoom.$id);
        };
        
        
        
        this.open = function() {
            $rootScope.modalInstance = $uibModal.open({
              animation: true,
              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              templateUrl: 'templates/addroom.html',
              controller: 'AddRoomCtrl',
              controllerAs: 'addroom'

            });
        };
    }
    
    angular
        .module('blocChat')
        .controller('RoomListCtrl', ['$rootScope', '$uibModal', '$scope', 'Room', 'Message', RoomListCtrl]);
})();