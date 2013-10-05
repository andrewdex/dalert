/*
DAlert Simple JqueryPlugin
Version: 1.0 (Beta)
Dependencies : Jquery 1.6 + , Jquery UI 1.6 + Jquery UI CSS
Info & API : http://www.dalert.andrewdex.com
Contribute : http://www.github.com/andrewdex/dalert

* dalert("Making the Alert Box much simpler, yet fancy");
*/
	
function dalert(title, msg) {
	
	
	if (msg !== null) {
	

		$("body").append("<div id='dialog' style='display:none' title='" + title + "'>" + msg + "</div>");
		$("#dialog").dialog({
			modal:true
			});
	
	} else {
		return false;
	
	}
	
	
}