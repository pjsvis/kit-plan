"use strict";
angular.module('app').component('kitInventory', {
    bindings: {},
    controllerAs: 'vm',
    controller: function (GearListService) {
        var vm = this;
        GearListService.all().then(function (response) {
            console.log(response.data);
            vm.gearList = response.data;
            vm.gearItem = response.data[0];
        });
    },
    template: "\n   <div class=\"h4\">kit-inventory</div>\n<!--   <ol>\n   <li>Add item</li>\n   <li>Edit item</li>\n   <li>Delete item</li>\n   </ol>\n-->\n   <div><pre>{{vm.gearItem | json}}</pre></div>\n   <div class=\"col-md-4\">\n   <ul class=\"list-group\">\n   <li class=\"list-group-item\" ng-repeat=\"g in vm.gearList\">{{$index+1}} {{g.Item}} {{g.Weight}}oz</li>\n   </ul>\n   </div>\n\n\n    "
});
