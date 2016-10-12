(function() {
    'use strict';

    angular.module('MenuApp')
    .component('menuCategories', {
        templateUrl: 'src/templates/menulist.template.html',
        bindings: {
            categories: '<'
        }
    });

})();
