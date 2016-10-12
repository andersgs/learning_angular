(function() {
    'use strict';

    angular.module("MenuApp")
    .service("MenuCatService", MenuCatService)
    .constant("ApiBasePath", "https://davids-restaurant.herokuapp.com");

    MenuCatService.$inject = ['$http', 'ApiBasePath']
    function MenuCatService($http, ApiBasePath){
        var service = this;

        console.log("This started.");

        var cats = $http({
            method: "GET",
            url: (ApiBasePath + "/categories.json")
        });

        service.getCats = function() {
            return cats;
        };

        service.getItems = function(shortName) {
            var promise = $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json"),
            params : {
                'category': shortName
                }
            });

            return promise;
        };
    }

})();
