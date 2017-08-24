sap.ui.define([
  "zmrp_pcore/util/formatters"
], function(formatter) {
  "use strict";

return sap.ui.controller("zmrp_pcore.materialStockDetails", {

	formatter: formatter,
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zmrp_pcore.materialStockDetails
*/
	onInit: function() {


		var jsonModelList = new sap.ui.model.json.JSONModel("zmrp_pcore/data/dataDetailsApp.json");
		sap.ui.getCore().setModel(jsonModelList,"detailMaterial");	

		//sap.ui.getCore().setModel(jsonModel,"detailProduct");	

		var jsonModelDetails = new sap.ui.model.json.JSONModel("zmrp_pcore/data/dataDetailsMaterialsApp1055.json");
		sap.ui.getCore().setModel(jsonModelDetails,"detailMaterialStock");	

		
	},

	onBack : function(){

		app.back();

	},

	filterItems : function(oEvt){
	// create model filter for the change in Material Name
	  var aFilters = [];
	  var sQuery = oEvt.getParameter("newValue");
	  if (sQuery && sQuery.length > 0) {
	  var oFilter = new sap.ui.model.Filter(
	  					"Material Name",
	  					sap.ui.model.FilterOperator.Contains,
	  					 sQuery);
	  					 aFilters.push(oFilter);
						}

	  // update list binding

	  var oList = this.getView().byId("idListDetails");
	  var binding = oList.getBinding("items");
	  binding.filter(aFilters);

	},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zmrp_pcore.materialStockDetails
*/
	onBeforeRendering: function() {

					var dataGraphModel = sap.ui.getCore().getModel("detailMaterialStock");
					var dataGraph = [];
					var bindedDataGraph = [];
						if(dataGraphModel){
							dataGraph = dataGraphModel.getData();
							if(dataGraph && dataGraph["Stock flow"] && dataGraph["Stock flow"].length !== 0){
								bindedDataGraph = this.preprocessingData(dataGraph["Stock flow"]);								
							}
						}

					var oChartModel = new sap.ui.model.json.JSONModel();
					oChartModel.setData(bindedDataGraph);	

					var oVizFrame = this.oVizFrame = this.byId("idVizFrame");

					oVizFrame.setVizProperties({
					    plotArea : {
					        dataLabel : {
					            visible : true
					        }
					    },
					    valueAxis : {

					        title : {
					            visible : true
					        }
					    },
					    categoryAxis : {
					        title : {
					            visible : true
					        }
					    },
					    legend: {
	                            title: {
	                                visible: true
	                            },
	                            label: {
	                                text: {
	                                      positiveValue: "Stock In",
	                                      negativeValue: "Stock Out"
	                                }
	                            }
					    },
					    title : {
					        visible : true,
					        text : 'Stock Quantity'
					    }

					});

					sap.ui.getCore().setModel(oChartModel,"detailMaterialStockGraph");
	},

	//preprocessing based on the date and quatity
	preprocessingData : function(oData){
		//Date we get will be sorted with date
		var bindGraphData = [];
		var lenData = oData.length;
		var dateBetween = [];
		var flag;
		var iCounter = 1;

		
		//data to be made with regards to the waterfall graph
		bindGraphData.push({
					"Start":1,
					"Quantity":oData[0]["Quantity"],
					"Order Type":oData[0]["Order Type"],
					"Date":oData[0]["Date"],
					"Quantity Avail":oData[0]["Quantity Avail"]
					});

		//We are having oDate outside because one data 
		//can have mutiple SO/PO
		for (var i = 1; i < oData.length; i++) {

				var bFlagDate = this.isSameDate(oData[i-1]["Date"],oData[i]["Date"]);
				if(bFlagDate){
				bindGraphData.push({
								"Start":0,
								"Quantity":oData[i]["Quantity"],
								"Order Type":oData[i]["Order Type"],
								"Date":oData[i]["Date"]+"("+(iCounter++)+")",
								//previous pushed value of bindGraphData
								"Quantity Avail":oData[i]["Quantity Avail"]
					});
					}else{
						iCounter = 1;
						bindGraphData.push({
							"Start":0,
							"Quantity":oData[i]["Quantity"],
							"Order Type":oData[i]["Order Type"],
							"Date":oData[i]["Date"],
							//previous pushed value of bindGraphData
							"Quantity Avail":oData[i]["Quantity Avail"]
						});

					}
				}

				console.log(bindGraphData);
			return bindGraphData;


	},

	isSameDate : function(oDate1,oDate2){

		if(oDate1 !== undefined && oDate2 !== undefined){
		var aDataDate1 = oDate1.split("/");
		var aDataDate2 = oDate2.split("/");
		if(parseInt(aDataDate1[0]) === parseInt(aDataDate2[0])
			&& parseInt(aDataDate1[1]) === parseInt(aDataDate2[1])
			&& parseInt(aDataDate1[2]) === parseInt(aDataDate2[2])){

			return true;
		}

		return false;
	}
	return false;

	},

	onPressSuggestion : function(oEvt){
		var jsonModelSuggestion = new sap.ui.model.json.JSONModel("zmrp_pcore/data/suggestion.json");
		sap.ui.getCore().setModel(jsonModelSuggestion,"suggestion");	


	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zmrp_pcore.materialStockDetails
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zmrp_pcore.materialStockDetails
*/
//	onExit: function() {
//
//	}

})
});