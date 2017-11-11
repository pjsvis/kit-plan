angular.module('app').component('kitItem', {
    bindings: {},
    controllerAs: 'vm',
    controller: function() {
        const vm: any = this;

        const kitItem: KitItem = {
            name: 'rucsac',
            category: 'carry',
            weight: 123,
            notes:
                'not the correct weight! not even close!'
        };
        const kitItems: KitItem[] = [kitItem];
        vm.kitItems = kitItems;
    },
    template: `
    <div class="h4">kit-Item</div>
<ol>
<li>View kit item</li>
<li>Edit kit item</li>
</ol>

<div>
<div class="h2 text-muted">kit-item</div>
<ol>
<li ng-repeat="k in vm.kitItems">
    It's a <strong>{{k.name}}</strong> of type <strong>{{k.category}}</strong> weighing in at <strong>{{k.weight}}</strong> grams albeit <strong>{{k.notes}}</strong>
</li>
</ol>

</div>

    `
});
