/// <reference path="jquery-2.1.0.js" />
/// <reference path="../require.js" />

//  Defining a AMD module for jQuery 
define(['jquery','domReady!'],
    function ($) {
        var jQuery = $.noConflict();
        return jQuery;
    });