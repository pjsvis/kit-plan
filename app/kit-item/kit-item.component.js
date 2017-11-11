"use strict";
angular.module('app').component('kitItem', {
    bindings: {},
    controllerAs: 'vm',
    controller: function () {
        var vm = this;
        var kitItem = {
            name: 'rucsac',
            category: 'carry',
            weight: 123,
            notes: 'not the correct weight! not even close!'
        };
        var kitItems = [kitItem];
        vm.kitItems = kitItems;
    },
    template: "\n    <div class=\"h4\">kit-Item</div>\n<ol>\n<li>View kit item</li>\n<li>Edit kit item</li>\n</ol>\n\n<div>\n<div class=\"h2 text-muted\">kit-item</div>\n<ol>\n<li ng-repeat=\"k in vm.kitItems\">\n    It's a <strong>{{k.name}}</strong> of type <strong>{{k.category}}</strong> weighing in at <strong>{{k.weight}}</strong> grams albeit <strong>{{k.notes}}</strong>\n</li>\n</ol>\n\n</div>\n\n    "
});
