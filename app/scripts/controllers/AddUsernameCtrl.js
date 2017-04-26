(function() {
    function AddUsernameCtrl($rootScope, $uibModal, $scope, Room) {
        
        
        $scope.text = '';
        $scope.submit = function() {
    
            if($scope.text) {
                Room.addUser($scope.text);
                $scope.modalInstance.close();
                
            }
            
        }
    }
    
    angular
        .module('blocChat')
        .controller('AddUsernameCtrl', ['$rootScope', '$uibModal', '$scope', 'Room', AddUsernameCtrl])
})();