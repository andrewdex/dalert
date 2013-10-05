/*
DAlert Simple JqueryPlugin
Version: 1.0 (Beta)
Author: Andrew dEX (Dilusha)
Dependencies : Jquery 1.6 + , Jquery UI 1.6 + Jquery UI CSS Framework
Info & API : http://www.dalert.andrewdex.com
Contribute : http://www.github.com/andrewdex/dalert

* dalert("Making the Alert Box much simpler, yet fancy");
*/

//Default Dalert Implementation
function dalert(msg,title) {
	
	if (title==null){
		title="Dalert";
	}
	
	if (msg !== null) {
	

		$("body").append("<div id='dialog' style='display:none' title='" + title + "'>" + msg + "</div>");
		$("#dialog").dialog({
			modal:true
			});
	
	} else {
		return false;
	
	}
	
	
}

//
var d = {
		
//		init: function()
//		{
//			
//			dalert();
//		},

	    dalert: function(msg,title) {
	    	
	    	if (title==null){
	    		title="Dalert";
	    	}
	    	
	    	if (msg !== null) {
	    	

	    		$("body").append("<div id='dialog' style='display:none' title='" + title + "'>" + msg + "</div>");
	    		$("#dialog").dialog({
	    			modal:true
	    			});
	    	
	    	} else {
	    		return false;
	    	
	    	}
	    	
	    },

	    confirm: function() {
	    }
	};
//d.init();