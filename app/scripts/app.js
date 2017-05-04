(function() {
    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        
        $stateProvider
            .state('home', {
            url: '/home',
            controller: 'RoomListCtrl as rooms',
            templateUrl: 'templates/home.html'
        })
        
        $stateProvider
            .state('addroom', {
            url: '/home/addroom',
            controller: 'AddRoomCtrl',
            templateUrl: 'templates/addroom.html'
        })
    }
    
    angular
        .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase', 'ngCookies'])
        .config(config);
})();

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