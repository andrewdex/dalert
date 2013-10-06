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

	dalert : function (output_msg, title_msg, color) {
	    if (!title_msg)
	        title_msg = 'DAlert';

	    if (!color)
	        color = 'black';

	    if (!output_msg)
	        output_msg = 'No Message to Display.';

	    try {
	        $("<div></div>").html(output_msg).dialog({
	            title: title_msg,
	            resizable: false,
	            modal: true,
	            buttons: {
	                "Ok": function () {
	                    $(this).dialog("close");

	                }
	            }
	        });

	        $(".ui-widget-content").css("color", color);
	    }
	    catch (error) {

	        alert(output_msg);
	    }



	},

	confirm : function() {

	}
};
