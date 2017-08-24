sap.ui.define(function () {
    "use strict";
    return {
        formatBarColor: function (iValue) {
            var iQuantity = parseInt(iValue);
            var state;
            if(iQuantity > 5 ) state = "Good";
	        else if(iQuantity <= 5 && iQuantity > 2) state = "Neutral";
	        else state = "Error";
	        return state;
        },

        formatOrderIcons: function (sOrder) {
           
            var sState;
            if(sOrder === "in" ) sState = "sap-icon://up";
	        else if(sOrder === "out" ) sState = "sap-icon://down";
	        else sState = "sap-icon://to-be-reviewed";
	        return sState;
        },

        formatOrderColor: function (sOrder) {
           
            var sColor;
            if(sOrder === "in" ) sColor = "#1DE9B6";
	        else if(sOrder === "out" ) sColor = "#F50057";
	        else sColor = "#607D8B";
	        return sColor;
        },
        formatOrderQuantity : function(sParts){

        		var sOrder = 0;
        		var iNumber = 0;
                var iStartFlag = 0;
                var sQtyAvail = 0;

        		if(sParts && sParts.length !== 0){
					sOrder = sParts[0];
        			iNumber = sParts[1];
        			iStartFlag = sParts[2];
        			sQtyAvail = sParts[3];

        		}
        		//if it is the first item then return the available quantity
        		if(sOrder && sOrder.length >0 && iStartFlag === 1){
        			return sQtyAvail;
        			}

        		//if it is not first item then return based on order type
        		if(sOrder && sOrder.length >0 && sOrder === "SO" && iStartFlag === 0){
    				if(iNumber) iNumber= -1*parseInt(iNumber);
    			}
   			return iNumber;
		},

        formatVisible : function(iValue){

            if(parseInt(iValue)>0){
                return true;
            }else{
                return false;
            }
        },
        formatVisibleBtn : function(iValue){

            if(parseInt(iValue)>0){
                return false;
            }else{
                return true;
            }
        },
        formatOrderFeeds : function(iValue){
            console.log(iValue);
            iValue  = parseInt(iValue);
            if(iValue && iValue !== 0 ){
                return iValue;
            }else{
                return "";
            }
        },
        formatSuggestRatingTile : function(iValue){

            if(parseInt(iValue)===1){
               return '&#x2605;' ;
            }else if(parseInt(iValue)===2){
                return "&#9733;&#9733;";
            }else if(parseInt(iValue)===3){
                return "&#9733;&#9733;&#9733;";
            }else if(parseInt(iValue)===4){
                return "&#9733;&#9733;&#9733;&#9733;";
            }else{
                return "&#9733;&#9733;&#9733;&#9733;&#9733;";
            }
        }
    };

});