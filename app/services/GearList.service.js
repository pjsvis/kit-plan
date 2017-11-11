"use strict";
angular
    .module('app')
    .factory('GearListService', function ($http) {
    var fac = {
        all: all
    };
    return fac;
    function all() {
        return $http
            .get('app/services/gear-list.json')
            .then(function (response) {
            return response;
        });
    }
});
