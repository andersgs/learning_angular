(function() {
    'use strict';

    angular.module('MenuApp')
    .controller('CatDetailController', CatDetailController);

    CatDetailController.$inject = ['details']
    function CatDetailController(details){
        var dets = this;
        dets.cat_details = details.data.menu_items;
        dets.cat_name = details.data.category.name;
        console.log("This is cat_details:", dets);
    };
})()
