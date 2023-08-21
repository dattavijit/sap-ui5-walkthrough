sap.ui.define([
    "sap/m/Text"
], function(Text) {
    'use strict';
    return new Text({
        text:"This Text is coming from the callback"
    }).placeAt("content")
});