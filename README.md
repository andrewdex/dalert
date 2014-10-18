DAlert 1.1
======

Dalert is a simple jQuery and jQuery UI plugin that easily create a customizable alert (or confirm) window as a replacement for the native javascript alert and confirm methods.
Dependencies : jQuery, jQuery UI



* Homepage & Documentation: [http://andrewdex.github.io/dalert]


## Simple usage

//Dalert Alert Dialog
dalert.alert("I am a liitle DAlert !"); 


//Dalert Confirm Dialog
dalert.alert("Are you sure ? ", "Confirm Tittle" , 
function(result){
	if(result){
	//If yes clicked 
	}
	else{
	//if no clicked
	}
}
);

## Getting started
Download the [latest release](https://github.com/andrewdex/dalert/archive/master.zip) or clone the repo, `git clone git://github.com/andrewdex/dalert.git`.

