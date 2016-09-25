(function() {
    'use strict';

    angular.module("ShoppingListCheckOff", [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    //injecting service into controllers
    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtShoppingController.$inject =['ShoppingListCheckOffService'];

    //
    function ToBuyShoppingController(ShoppingListCheckOffService){
        var buy_list = this;
        buy_list.buy_list = ShoppingListCheckOffService.buy_list();
        buy_list.buy_item = function (item_number) {
            ShoppingListCheckOffService.buy_item(item_number);
        };
    }
    //
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
        var bought= this;
        bought.bought_list = ShoppingListCheckOffService.bought_list();
    }
    //
    //
    function ShoppingListCheckOffService() {
      var service = this;

      // List of shopping items
      var buy_items =  [
          {name : 'avocados',
           quantity: 2},
           {name : 'yogurts',
            quantity : 15},
           {name : 'cookies',
            quantity: 3},
           {name : 'dog treats',
            quantity: 50},
           {name : 'eggs',
            quantity: 12}
      ];

      var bought_items = [];

      service.buy_list = function() {
          return buy_items;
      };

      service.bought_list = function () {
          return bought_items;
      };

      service.buy_item = function (item_index) {
          bought_items.push(buy_items[item_index]);
          buy_items.splice(item_index, 1);
      };
    }

})();
