(function() {
    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
//        $urlRouterProvider.when('', '/home');
        
        $stateProvider
            .state('home', {
            url: '/home',
            controller: 'RoomListCtrl as rooms',
            templateUrl: 'templates/home.html'
        })
    }
    
    angular
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);
})();