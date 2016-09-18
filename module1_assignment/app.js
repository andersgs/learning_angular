(function() {
'use strict';

var msg_empty = "<strong>Please enter data first.</strong>";
var msg_enjoy = "<strong>Enjoy!</strong>";
var msg_too_much = "<strong>Too much! </strong>";

var msg_style_enjoy = 'alert alert-success';
var msg_style_empty = 'alert alert-warning';
var msg_style_too_much = 'alert alert-danger';

angular.module('LunchCheck', ['ngSanitize'])
.controller('LunchCheckController', lunchCheckController);

lunchCheckController.$inject = ['$scope'];

function lunchCheckController ($scope) {
    $scope.lunch_items = '';
    $scope.total_food = 0;
    $scope.judge = function() {
        var total_food_items = calculate_n_food_items($scope.lunch_items);
        $scope.total_food = total_food_items;
        if( total_food_items == 0) {
             $scope.judgment = msg_empty;
             $scope.msg_class = msg_style_empty;
         } else if (total_food_items < 4 ) {
             $scope.judgment = msg_enjoy;
             $scope.msg_class = msg_style_enjoy;
         } else {
             $scope.judgment = msg_too_much;
             $scope.msg_class = msg_style_too_much;
         };
    };

    function calculate_n_food_items(string) {
        var total = 0;
        var words = string.split(',');
        for (var i = 0; i < words.length; i++){
            var tmp = words[i].trim();
            if( tmp.length > 0) {
                total += 1;
            }
        }
        return total;
    };
}
})();
