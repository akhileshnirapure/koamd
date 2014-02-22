/// <reference path="../../require.js" />
/// <reference path="../../lib/knockout-3.0.0.js" />

//NOTE: 'core' gets replaced by AN, the namespace defined in the core module, which is a return.

define(['ko', 'jqueryps', 'text!template/calculator.html', 'core', 'viewmodel/calculator', 'domReady!'],
    function (ko,jQuery,html,AN,calculator) {

        //  reset the container as it will duplicate 
        //  TODO move to a helper class which ensure the action and doesn't repeat
        jQuery("#calculator-form").html('');
        //  Append the html to container
        jQuery("#calculator-form").append(html);
        
        ko.applyBindings(new calculator(),jQuery("#calculator-form")[0]);

    });