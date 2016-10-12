(function() {
    'use strict';

    angular.module('MenuApp')
    .component("catDetails", {
        templateUrl: 'src/templates/cat_detail_list.template.html',
        bindings: {
            details: '<'
        }
    })
})();
