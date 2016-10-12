(function() {
    'use strict';
    angular.module('MenuApp')
    .controller('MenuCatController', MenuCatController);

    MenuCatController.$inject = ['categories'];
    function MenuCatController(categories) {
        var menu = this;
        menu.categories = categories.data;
        console.log("This is menu:", menu);
    }
})();
