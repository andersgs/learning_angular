(function() {
'use strict';

angular.module("NarrowItDownApp", [])
.controller("NarrowItDownController", NarrowItDownController)
.factory("MenuSearchFactory", MenuSearchFactory)
.constant("ApiBasePath", "https://davids-restaurant.herokuapp.com")
.directive("found", FoundItemsDirective);

function FoundItemsDirective() {
    var ddo = {
        templateUrl: 'found_items_list.html',
        scope : {
            foundItems: '<',
            onRemove: '&',
        },
        // controller: NarrowItDownController,
        // controllerAs: 'narrow',
        // bindToController: true
    };
    return ddo;
}


function MenuSearchService($http, $q, ApiBasePath){

    var service = this;
    var foundItems = [];

    service.getMatchedMenuItems = function (searchTerm) {

        foundItems.length = 0;

        if (searchTerm.trim() == '') {
            return
        }
        var promise = $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json")
        });

        promise.then( function(result) {
            var menuItems = result.data.menu_items;
            for( var i = 0; i < menuItems.length; i++){
                if( menuItems[i].description.search(searchTerm) != -1){
                    foundItems.push(menuItems[i]);
                }
            }
        });

    };

    service.getList = function () {
        return foundItems;
    };
}

function MenuSearchFactory() {
    var factory = function($http, $q, ApiBasePath) {
        return new MenuSearchService($http, $q, ApiBasePath);
    };
    return factory;
}


NarrowItDownController.$inject = ['MenuSearchFactory','$http', '$q', 'ApiBasePath']
function NarrowItDownController(MenuSearchFactory, $http, $q, ApiBasePath) {
    var narrow = this;
    var search_menu = MenuSearchFactory($http, $q, ApiBasePath);
    narrow.searchTerm = '';
    narrow.items = search_menu.getList();
    narrow.searchItems = function () {
        search_menu.getMatchedMenuItems(narrow.searchTerm);
        console.log('Here is narrow:', narrow.items);
    };
    narrow.removeItem = function(index) {
        narrow.items.splice(index, 1);
        console.log('Deleted:', index);
    }
}

})();
