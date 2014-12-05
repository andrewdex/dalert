;(function(window) {

	"use strict";

	var Dalert = {

		originalAlert: window.alert,
		originalConfirm: window.confirm,

		defaultConfig: {
			title: "DAlert!",
			message: "Message",
			titleBgColor: "#275F98",
			titleFontColor: "#ffffff",
			messageBgColor: "#ffffff",
			messageFontColor: "#000000"
		},

		alert: function (message, title, callback, options) {
			var alertSettings = Dalert.setOptions(message, title, callback, options),
				alertElement = document.createElement('div');

			alertElement.innerHTML = alertSettings.message;

			Dalert.dialog(alertElement, {
				title: alertSettings.title,
				resizable: false,
				modal: true,

				beforeClose: function (event, ui) {
					$(this).remove();
				},

				buttons: {
					"Ok": function () {
						Dalert.closeDialog(this);
					}
				},

				close: alertSettings.callback
			});

			// When drop jQueryUI - Remove this!
			Dalert.byPassJqueryUi(alertSettings);
		},

		confirm: function (message, title, callback, options) {
			var alertSettings = Dalert.setOptions(message, title, callback, options),
				alertElement = document.createElement('div');

			alertElement.innerHTML = alertSettings.message;

			Dalert.dialog(alertElement, {
				title: alertSettings.title,
				resizable: false,
				modal: true,

				beforeClose: function (event, ui) {
					$(this).remove();
				},

				buttons: {
					"Yes": function () {
						var confirmResult = true;

						if(!alertSettings.callback) {
							Dalert.alert("Please define a callback function");
							return;
						}

						if (typeof (alertSettings.callback) !== "function") {
							Dalert.alert("Not a function !");
							return;
						}

						alertSettings.callback(confirmResult);
						Dalert.closeDialog(this);
					},

					"No": function () {
						var confirmResult = false;

						if(!alertSettings.callback) {
							Dalert.alert("Please define a callback function");
							return;
						}

						if (typeof (alertSettings.callback) !== "function") {
							Dalert.alert("Not a function !");
							return;
						}

						alertSettings.callback(confirmResult);
						Dalert.closeDialog(this);
					}
				}
			});

			// When drop jQueryUI - Remove this!
			Dalert.byPassJqueryUi(alertSettings);
		},

		// When drop jQueryUI - Replace this
		dialog: function(alertElement, settings) {
			$(alertElement).dialog(settings);
		},

		closeDialog: function(element) {
			$(element).dialog("close");
		},

		byPassJqueryUi: function(settings) {
			document.querySelector(".ui-widget-content").style.background = settings.messageBgColor;
			document.querySelector(".ui-widget-header").style.background = settings.titleBgColor;
			document.querySelector(".ui-dialog-title").style.color = settings.titleFontColor;
			document.querySelector(".ui-widget-content").style.color = settings.messageFontColor;

			document.querySelector(".ui-button-text-only .ui-button-text").style.padding = "5px 20px";
			document.querySelector(".ui-button-text-only .ui-button-text").style.fontSize = "13px";

			document.querySelector(".ui-dialog").style.border = "1px solid #76A0F8";
		},

		setOptions: function(message, title, callback, options) {
			var thisOptions = Dalert.defaultConfig;

			thisOptions.title = title || Dalert.defaultConfig.title;
			thisOptions.message = message || Dalert.defaultConfig.message;
			thisOptions.callback = callback || new Function;

			if(options){
				thisOptions.tittleBgColor = options.titleBgColor || Dalert.defaultConfig.titleBgColor;
				thisOptions.tittleFontColor = options.titleFontColor || Dalert.defaultConfig.titleFontColor;
				thisOptions.messageBgColor = options.messageBgColor || Dalert.defaultConfig.messageBgColor;
				thisOptions.messageFontColor = options.messageFontColor || Dalert.defaultConfig.messageFontColor;
			}

			return thisOptions;
		},

		restore: function() {
			window.alert = originalAlert;
			window.confirm = originalConfirm;
		},

		replaceAlert: function () {
			window.alert = Dalert.alert;
		},

		replaceConfirm: function () {
			window.confirm = Dalert.confirm;
		}

	};

	window.dalert = Dalert;

})(window);