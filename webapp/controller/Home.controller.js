sap.ui.define([
	"./BaseController",
	
], function (BaseController) {
	"use strict";

	return BaseController.extend("products.products.controller.Home", {

		onInit : function () {

            

                    },
                    
                    prod: function () { 
        this.getRouter().navTo("worklist");
}
 
                    
	});

});