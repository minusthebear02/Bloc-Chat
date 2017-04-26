(function() {
    function AddRoomCtrl($uibModal, $scope, Room) {
        
        
        $scope.text = '';
        $scope.submit = function() {
    
            if($scope.text) {
                Room.addRoom($scope.text);
                $scope.modalInstance.close();
            }
            
        }
    }
    
    angular
        .module('blocChat')
        .controller('AddRoomCtrl', ['$uibModal', '$scope', 'Room', AddRoomCtrl])
})();