"use strict";
angular.module('app').component('appHome', {
    bindings: {},
    controllerAs: 'vm',
    controller: function () {
        var vm = this;
    },
    template: "\n\n<div class=\"h1 text-muted\">kit-plan</div>\n<ol>\n    <li>initialise kit-inventory</li>\n    <li>create/edit/delete kit-items => kit-inventory</li>\n    <li>create/delete kit-lists</li> \n    <li>edit-kit-list => add/remove kit-items => kit-list</li> \n</ol>\n\n<div class=\"h2 text-muted\">todo</div>\n<div class=\"h3 text-muted\">data</div>\n<ol>        \n    <li>keep it in a json file for now so that we can persist it</li>\n    <li>local storage???</li>\n    <li>figure out where it can be persisted => gist???</li>\n</ol>\n<div class=\"h2 text-muted\">components</div>\n<kit-inventory></kit-inventory>\n<kit-item></kit-item>        \n<div class=\"h2 text-muted\">implementation</div>\n<kit-list></kit-list>\n\n    "
});
