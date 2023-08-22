sap.ui.define([
    "sap/ui/core/UIComponent"
], function(UIComponent) {
    'use strict';
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {

        metadata: {
            rootView: {
                "viewName": "sap.ui.demo.walkthrough.view.App",
                "type": "XML",
                "async": true,
                "id": "app"
            }
        },

        /**
         * @override
         */
        init: function() {
            UIComponent.prototype.init.apply(this, arguments);
            // set data model
            var oData = {
                recipient: {
                    name: "UI5"
                }
            };
            var oModel = new sap.ui.model.json.JSONModel(oData);
            this.setModel(oModel);
            
            // set i18n model
            var i18nModel = new sap.ui.model.resource.ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
                supportedLocales: [""],
                fallbackLocale: ""
            });
            this.setModel(i18nModel, "i18n");

        
        }
    });
});