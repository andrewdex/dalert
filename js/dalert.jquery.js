/*
DAlert Simple JqueryPlugin
Version: 1.0 (Beta)
Author: Andrew dEX (Dilusha)
Dependencies : Jquery 1.6 + , Jquery UI 1.6 + Jquery UI CSS Framework
Info & API : http://www.dalert.andrewdex.com
Contribute : http://www.github.com/andrewdex/dalert

 * dalert("Making the Alert Box much simpler, yet fancy");
 */



var dx =  { 

	
	dalert : function (dalert_msg, title_msg, FontColor,bodyColor) {
	    if (!title_msg)
	        title_msg = 'DAlert';

	    if (!FontColor)
	    	FontColor = 'black';
	    
	    if(!bodyColor)
	    	bodyColor='rgb(10, 60, 65)';

	    if (!dalert_msg)
	    	dalert_msg = 'This is a Dalert !';

	    try {
	        $("<div></div>").html(dalert_msg).dialog({
	            title: title_msg,
	            resizable: false,
	            modal: true,
	            buttons: {
	                "Ok": function () {
	                    $(this).dialog("close");

	                }
	            }
	        });
	        //jQuery UI-CSS Framework ByPass
	        $(".ui-widget-content").css("color", FontColor);
	        $(".ui-widget-content").css("background", bodyColor);
	        
	    }
	    catch (error) {

	        alert(dalert_msg);
	    }



	},

	
	//Dalert Confirm Dialog
	dconfirm : function(dalertConf_msg,trueFunction,falseFunction, title_msg, FontColor,bodyColor) {

		 if (!title_msg)
		        title_msg = 'DAlert';

		    if (!FontColor)
		    	FontColor = 'black';
		    
		    if(!bodyColor)
		    	bodyColor='rgb(10, 60, 65)';

		    if (!dalertConf_msg)
		    	dalertConf_msg = 'This is a Dalert Confirm !';

		    try {
		        $("<div></div>").html(dalertConf_msg).dialog({
		            title: title_msg,
		            resizable: false,
		            modal: true,
		            buttons: {
		                "Ok": function () {

		                    $(this).dialog("close");
		                    alert("You Clicked Yes..."+ trueFunction);
		                    eval(trueFunction)();

		                },
		                Cancel: function() {
		                    $( this ).dialog( "close" );
		                    eval(falseFunction)();
		                  }
		            }
		        });
		        //jQuery UI-CSS Framework ByPass
		        $(".ui-widget-content").css("color", FontColor);
		        $(".ui-widget-content").css("background", bodyColor);
		        
		    }
		    catch (error) {

		        alert(dalertConf_msg);
		    }



	},
	
	
//Replace Dalert With Window Javscript original objects : alert, confirm	
	ReplaceAlert: function(){
		
		window.alert=dx.dalert;
		
	},
	
	
	ReplaceConfirm: function(){
		
		window.confirm=dx.dconfirm;
		
	}
	

	
	
};


//alert impl

//window.alert = function(msg){
//    dx.dalert("Hello");
//}
