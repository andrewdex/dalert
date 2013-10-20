/*
 * DAlert UI jQ Scripts
 * 
 * */


$("#simple_dalert").click(function() {
	$("#dalert_home").removeClass("active");
	$("#replace_alert").removeClass("active");
	$(this).addClass("active");
    $('html,body').animate({
        scrollTop: $("#dalert_simple").offset().top
    }, 1000);
});


$("#dalert_home").click(function() {
	$("#simple_dalert").removeClass("active");
	$("#replace_alert").removeClass("active");
	$(this).addClass("active");

});



$("#replace_alert").click(function() {
	$("#dalert_home").removeClass("active");
	$("#simple_dalert").removeClass("active");
	$(this).addClass("active");
    $('html,body').animate({
        scrollTop: $("#alert_replace").offset().top
    }, 1000);
});