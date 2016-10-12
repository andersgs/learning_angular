(function() {
    'use strict';

    angular.module('MenuApp').
    config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        // make sure it defaults to home-page
        $urlRouterProvider.otherwise('/');

        // setup states or views
        $stateProvider

        .state('home', {
            url: '/',
            templateUrl: 'src/templates/home.template.html'
        })

        .state('menu', {
            url: '/menu',
            templateUrl: 'src/templates/menu.template.html',
            controller: 'MenuCatController as menu',
            resolve: {
                categories: ['MenuCatService', function(MenuCatService){
                        return MenuCatService.getCats();
                }]
            }
        })
        .state('catDetail', {
            url: '/cat_detail/{shortName}',
            templateUrl: 'src/templates/cat_detail.template.html',
            controller: 'CatDetailController as detail',
            resolve: {
                details: ['$stateParams','MenuCatService', function($stateParams, MenuCatService) {
                    return MenuCatService.getItems($stateParams.shortName);
                }]
            }
        });
    }

})();
