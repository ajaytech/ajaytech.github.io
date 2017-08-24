sap.ui.controller("zmrp_pcore.home", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zmrp_pcore.home
*/
onInit: function() {

	var jsonModel = new sap.ui.model.json.JSONModel("zmrp_pcore/data/homePage.json");
	sap.ui.getCore().setModel(jsonModel);

	},

onHomeTilePress: function(evt){

	if(evt.oSource.getTitle()==="Monitor"){

		app.to("idMatStock");
	
	}else{

		app.to("idMaterialStockDetails");
	
	}

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zmrp_pcore.home
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zmrp_pcore.home
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zmrp_pcore.home
*/
//	onExit: function() {
//
//	}

});