sap.ui.define([], function(){
	"use strict";
	
	return sap.ui.controller("z.anlt.app.ext.controller.AnalyticalListPageExt", {
		onInit: function(){
			
			//here goes your code

		},

		onInitSmartFilterBarExtension: function(oEvent){

		},

		onBeforeRebindChartExtension: function(oEvent){

		},

		onBeforeRebindVisualFilterExtension: function(oEvent){

		},

		onListNavigationExtension: function(oEvent){
			var oBindingContext = oEvent.getSource().getBindingContext();
			var oObject = oBindingContext.getObject();

			// oNavigationController.navigateExternal("");

			return true;
		},

		onBeforeRebindTableExtension : function(oEvent){

		}

	});

});
