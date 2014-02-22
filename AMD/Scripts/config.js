/// <reference path="require.js" />

define(function() {

    var rconfig = {
        baseUrl: 'Scripts/app',
        paths: {

            //  follow app directory structure convention

            //  Core Modules, defines the namespace
            core: 'init',
            
            
            viewmodel: 'viewmodels',
            template: 'templates',

            //  Page Modules 
            home: 'pages/home',

            //  Require JS Plugins, 
            domReady: 'lib/domReady', //    For ensuring the dom is loaded
            text: 'lib/text',         //    For Downloading the html templates

            //  Frameworks
            jqueryps: 'lib/jquery-ps',
            jquery: 'lib/jquery-2.1.0',
            ko: "lib/knockout-3.0.0",
        },
        map: {
            // '*' means all modules will get 'jquery-ps'
            // for their 'jquery' dependency.
            '*': { 'jquery': 'jqueryps' },

            // 'jquery-ps' wants the real jQuery module
            // though. If this line was not here, there would
            // be an unresolvable cyclic dependency.
            'jqueryps': { 'jquery': 'jquery' }
        },
        enforceDefine: true

    };

    require.config(rconfig);

    require(['home']);

});




