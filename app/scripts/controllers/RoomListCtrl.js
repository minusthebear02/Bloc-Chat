(function() {
    function RoomListCtrl($rootScope, $uibModal, $scope, Room) {
        this.roomList = Room.all;
        
        this.open = function() {
            $rootScope.modalInstance = $uibModal.open({
              animation: true,
              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              templateUrl: 'templates/addroom.html',
              controller: 'AddRoomCtrl',
              contollerAs: 'addroom'

            });
        };
    }
    
    angular
        .module('blocChat')
        .controller('RoomListCtrl', ['$rootScope', '$uibModal', '$scope','Room', RoomListCtrl]);
})();