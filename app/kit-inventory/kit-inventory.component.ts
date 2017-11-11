angular.module('app').component('kitInventory', {
    bindings: {},
    controllerAs: 'vm',
    controller: function(GearListService: IGearListService) {
        let vm: any = this;
        GearListService.all().then(function(response: any) {
            console.log(response.data);
            vm.gearList = response.data;
            vm.gearItem=response.data[0];
        });
    },
    template: `
   <div class="h4">kit-inventory</div>
<!--   <ol>
   <li>Add item</li>
   <li>Edit item</li>
   <li>Delete item</li>
   </ol>
-->
   <div><pre>{{vm.gearItem | json}}</pre></div>
   <div class="col-md-4">
   <ul class="list-group">
   <li class="list-group-item" ng-repeat="g in vm.gearList">{{$index+1}} {{g.Item}} {{g.Weight}}oz</li>
   </ul>
   </div>


    `
});
