angular.module('app').component('appHome', {
    bindings: {},
    controllerAs: 'vm',
    controller: function() {
        let vm: any = this;

    },
    template: `

<div class="h1 text-muted">kit-plan</div>
<ol>
    <li>initialise kit-inventory</li>
    <li>create/edit/delete kit-items => kit-inventory</li>
    <li>create/delete kit-lists</li> 
    <li>edit-kit-list => add/remove kit-items => kit-list</li> 
</ol>

<div class="h2 text-muted">todo</div>
<div class="h3 text-muted">data</div>
<ol>        
    <li>keep it in a json file for now so that we can persist it</li>
    <li>local storage???</li>
    <li>figure out where it can be persisted => gist???</li>
</ol>
<div class="h2 text-muted">components</div>
<kit-inventory></kit-inventory>
<kit-item></kit-item>        
<div class="h2 text-muted">implementation</div>
<kit-list></kit-list>

    `
});
