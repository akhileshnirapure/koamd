/// <reference path="../../lib/knockout-3.0.0.js" />
/// <reference path="../../require.js" />
define(['ko', 'core', 'domReady!'],
    function (ko, AN) {
        
        AN.namespace('AN.ViewModels.Calculator');

        AN.ViewModels.Calculator = function() {
            var self = this;

            self.result = ko.observable(0);
            self.add = function () {
                var val = self.result();
                self.result(++val);
                
            };
        };

        return AN.ViewModels.Calculator;

    });