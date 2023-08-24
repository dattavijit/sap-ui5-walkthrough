sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (
    Controller,
    MessageToast
) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {

        onHelloButtonPress: function () {
            //read message from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            new MessageToast.show("Hello " + sRecipient + "! ");
        },

        onButtonShowDialogPress: function (oEvent) {
            // lazy load fragment
            if (!this._oDialog) {
                this._oDialog = sap.ui.xmlfragment("sap.ui.demo.walkthrough.view.HelloDialog", this);
                this.getView().addDependent(this._oDialog);
            }
            // open fragment    
            this._oDialog.open();
        },

        onDialogAfterClose: function (oEvent) {
            //refresh model
            this.getView().getModel().refresh(true);
        },

        onCloseButtonPress: function (oEvent) {
            // close fragment
            this._oDialog.close();

        }
    });
});