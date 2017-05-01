(function() {
    function BlocChatCookies($rootScope, $cookies, $uibModal) {

        var currentUser = $cookies.get('blocChatCurrentUser');
        
        console.log($cookies.get('blocChatCurrentUser'));
        
        if (!currentUser || currentUser === '') {
           $rootScope.modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'templates/adduser.html',
                controller: 'AddUsernameCtrl',
                controllerAs: 'adduser'
            })
        }
    }
    
    angular
        .module('blocChat')
        .run(['$rootScope', '$cookies', '$uibModal', BlocChatCookies]);
})();