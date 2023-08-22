sap.ui.define([
    "sap/ui/core/UIComponent"
], function (UIComponent) {
    'use strict';
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {

        metadata: {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
        },

        /**
         * @override
         */
        init: function () {
            UIComponent.prototype.init.apply(this, arguments);
            // set data model
            var oData = {
                recipient: {
                    name: "UI5"
                }
            };
            var oModel = new sap.ui.model.json.JSONModel(oData);
            this.setModel(oModel);



        }
    });
});