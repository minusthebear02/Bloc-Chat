(function() {
    function AddMessageCtrl($rootScope, $uibModal, $scope, Message) {
        
        $scope.submit = function(activeRoom) {
    
            if($scope.text) {
                Message.send(activeRoom, $scope.text);
                this.text = '';
            }
            
        }
    }
    
    angular
        .module('blocChat')
        .controller('AddMessageCtrl', ['$rootScope', '$uibModal', '$scope', 'Message', AddMessageCtrl])
})();