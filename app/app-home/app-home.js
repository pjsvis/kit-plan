"use strict";
angular.module('app').component('appHome', {
    bindings: {},
    controllerAs: 'vm',
    controller: function () {
        var vm = this;
        vm.val = 1 + 1;
    },
    template: "\n    <div class=\"container\">\n        <div class=\"h3 text-muted\">kit-plan</div>\n        <div class=\"text-muted\">1 + 1 = {{vm.val}}</div>\n        <div>\n            <ol>\n                <li>We need a data structure to hold kit details</li>\n                <li>We need a view to add/remove kit items from kit</li>\n                <li></li>\n                <li></li>\n                <li></li>\n                <li></li>\n                <li></li>\n            </ol>\n        </div>\n    </div>\n    "
});
