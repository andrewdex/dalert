/*
 * DAlert UI jQ Scripts
 * 
 * */


$("#simple_dalert").click(function() {
	
    $('html,body').animate({
        scrollTop: $("#dalert_simple").offset().top
    }, 1000);
});