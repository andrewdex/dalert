/*
 * DAlert UI jQ Scripts
 * 
 * */


$("#dalert").click(function() {
	dalert.alert("hey");
    $('html').animate({
        scrollTop: $("html").offset().top
    }, 1000);
});