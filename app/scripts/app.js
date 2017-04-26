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