sap.ui.define([
  "zmrp_pcore/util/formatters"
], function(formatter) {
  "use strict";

return sap.ui.controller("zmrp_pcore.materialStock", {

	formatter: formatter,

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zmrp_pcore.materialStock
*/
	onInit: function() {

		

		var jsonModel = new sap.ui.model.json.JSONModel("zmrp_pcore/data/dataApp.json");
		sap.ui.getCore().setModel(jsonModel,"globalModel");
	},

	onBack : function(){

		app.back();

	},

	/*

		Filter operations

	*/


	
	onChangeProduct : function(oEvt){

 	// create model filter for the change in Material Name
		  var aFilters = [];
		  var sQuery = oEvt.getParameter("value");
		  if (sQuery && sQuery.length > 0) {
		  var oFilter = new sap.ui.model.Filter(
		  					"Material Name",
		  					sap.ui.model.FilterOperator.Contains,
		  					 sQuery);
		  					 aFilters.push(oFilter);
							}

		  // update list binding

		  var oList = this.getView().byId("idProductsTable");
		  var binding = oList.getBinding("items");
		  binding.filter(aFilters);
	},

	onChangeID: function(oEvt){


 	// create model filter for the change in Material Name
		  var aFilters = [];
		  var sQuery = oEvt.getParameter("value");
		  if (sQuery && sQuery.length > 0) {
		  var oFilter = new sap.ui.model.Filter(
		  					"Material Num",
		  					sap.ui.model.FilterOperator.EQ,
		  					 sQuery);
		  					 aFilters.push(oFilter);
							}

		  // update list binding

		  var oTable = this.getView().byId("idProductsTable");
		  var binding = oTable.getBinding("items");
		  binding.filter(aFilters);

	},

	onChangeSupplier : function(oEvt){

		// create model filter for the change in Material Name
		  var aFilters = [];
		  var sQuery = oEvt.getParameter("value");
		  if (sQuery && sQuery.length > 0) {
		  var oFilter = new sap.ui.model.Filter(
		  					"Material Supplier",
		  					sap.ui.model.FilterOperator.Contains,
		  					 sQuery);
		  					 aFilters.push(oFilter);
							}

		  // update list binding

		  var oTable = this.getView().byId("idProductsTable");
		  var binding = oTable.getBinding("items");
		  binding.filter(aFilters);

	},

	onClear : function(oEvt){

		

		var oFilerBar = this.getView().byId("idFilterBarMaterialView");;
	  	var aItems = oFilerBar.getFilterItems();


	  	var oTable = this.getView().byId("idProductsTable");
	  	var binding = oTable.getBinding("items");
	  	binding.filter([]);

		var aFilters = oEvt.getParameter("selectionSet");

		for (var i = 0; i < aFilters.length; i++) {
			if(aFilters[i])aFilters[i].setValue("");
		}
	  	

	},

	/*

		End of Filters
	
	*/

	onDetails : function(oEvt){

		var oTable = this.getView().byId("idProductsTable");
		var aSelectedFields = oTable.getSelectedContexts();
		if(aSelectedFields && aSelectedFields.length){
			debugger;
		var sVal = 	aSelectedFields.map(function(oContext) 
				{ return oContext.getObject()["Material Num"]; }).join(", ");
		console.log(sVal);

			sap.m.MessageToast.show("Materials : "+sVal+" Added to Detail Screen");

		}else if (aSelectedFields.length === 0){

			sap.m.MessageToast.show("No Material Selected");

		}else{
			
			sap.m.MessageToast.show("Fail to Add Material(s) on Detail Screen");

		}

	},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zmrp_pcore.materialStock
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zmrp_pcore.materialStock
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zmrp_pcore.materialStock
*/
//	onExit: function() {
//
//	}

})
});

