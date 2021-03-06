(function() {
    function RoomListCtrl($rootScope, $uibModal, $scope, $cookies, Room, Message) {
        
        this.roomList = Room.all;
        
        this.activeRoom = {};
        
        this.activeMessages = null;
        
        this.selectRoom = function(room) {
            
            this.activeRoom = room;
            this.activeMessages = Message.getByRoomId(this.activeRoom.$id);
        };
        
        this.logOut = function() {
                $cookies.remove('blocChatCurrentUser');
                
                $rootScope.modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'templates/adduser.html',
                controller: 'AddUsernameCtrl',
                controllerAs: 'adduser'
            })
            }
        
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
        .controller('RoomListCtrl', ['$rootScope', '$uibModal', '$scope', '$cookies', 'Room', 'Message', RoomListCtrl]);
})();