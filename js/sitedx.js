/*
 * DAlert UI jQ Scripts
 * 
 * */


$("#simple_dalert_link").click(function() {
	$("#dalert_home_link").removeClass("active");
	$("#replace_alert_link").removeClass("active");
	$("#replace_confirm_link").removeClass("active");
	$("#parameterized_link").removeClass("active");
	$(this).addClass("active");
    $('html,body').animate({
        scrollTop: $("#dalert_simple").offset().top
    }, 1000);
});


$("#dalert_home_link").click(function() {
	$("#simple_dalert_link").removeClass("active");
	$("#replace_alert_link").removeClass("active");
	$("#replace_confirm_link").removeClass("active");
	$("#parameterized_link").removeClass("active");
	$(this).addClass("active");

});



$("#replace_alert_link").click(function() {
	$("#dalert_home_link").removeClass("active");
	$("#simple_dalert_link").removeClass("active");
	$("#replace_confirm_link").removeClass("active");
	$("#parameterized_link").removeClass("active");
	$(this).addClass("active");
    $('html,body').animate({
        scrollTop: $("#alert_replace").offset().top
    }, 1000);
});

$("#replace_confirm_link").click(function() {
	$("#dalert_home_link").removeClass("active");
	$("#simple_dalert_link").removeClass("active");
	$("#replace_alert_link").removeClass("active");
	$("#parameterized_link").removeClass("active");
	$(this).addClass("active");
    $('html,body').animate({
        scrollTop: $("#confirm_replace").offset().top
    }, 1000);
});



$("#parameterized_link").click(function() {
	$("#dalert_home_link").removeClass("active");
	$("#simple_dalert_link").removeClass("active");
	$("#replace_alert_link").removeClass("active");
	$("#replace_confirm_link").removeClass("active");
	$(this).addClass("active");
    $('html,body').animate({
        scrollTop: $("#dalert_paramters").offset().top
    }, 1000);
});


