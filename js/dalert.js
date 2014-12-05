/*
 * DAlert - Pure JS Modal/Alert/Confirm Extention
 * dalert.alert("Making the Alert Box much simpler, yet fancy");
 * Version: 1.1.0
 * Author: Dilusha Gonagala (andrewdex)
 * Dependencies : Just JavaScript
 * Info & API : http://andrewdex.github.io/dalert/
 * Contribute : http://www.github.com/andrewdex/dalert
 *
 * Copyright 2014  Dilusha Gonagala (@andrewdex)
 *
Released under the MIT license
_______________________________
http://opensource.org/licenses/MIT
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 *
 */

;
(function (window, $) {

    "use strict";

    var Dalert = {

        originalAlert: window.alert,
        originalConfirm: window.confirm,


        defaultConfigStatic: {
            title: "DAlert!",
            message: "Message",
            titleBgColor: "#275F98",
            titleFontColor: "#ffffff",
            messageBgColor: "#ffffff",
            messageFontColor: "#000000"
        },

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

                        if (!alertSettings.callback) {
                            Dalert.alert("Please define a callback function");
                            return;
                        }

                        if (typeof (alertSettings.callback) !== "function") {
                            Dalert.alert("Not a function !");
                            return;
                        }

                        alertSettings.callback(confirmResult);
                        Dalert.closeDialog(this);
                        Dalert.byPassJqueryUi(alertSettings);
                    },

                    "No": function () {
                        var confirmResult = false;

                        if (!alertSettings.callback) {
                            Dalert.alert("Please define a callback function");
                            return;
                        }

                        if (typeof (alertSettings.callback) !== "function") {
                            Dalert.alert("Not a function !");
                            return;
                        }

                        alertSettings.callback(confirmResult);
                        Dalert.closeDialog(this);
                        Dalert.byPassJqueryUi(alertSettings);
                    }
                }
            });

            // When drop jQueryUI - Remove this!
            Dalert.byPassJqueryUi(alertSettings);
        },

        // When drop jQueryUI - Replace this with a new method for dialog
        dialog: function (alertElement, settings) {
            $(alertElement).dialog(settings);
        },

        closeDialog: function (element) {
            $(element).dialog("close");
        },

        byPassJqueryUi: function (settings) {

            var UIDialogTittle = document.querySelectorAll(".ui-dialog-title"),
                UIbuttons = document.querySelectorAll(".ui-button-text-only .ui-button-text"),
                UIWidgetHeader = document.querySelectorAll(".ui-widget-header"),
                UIWidget = document.querySelectorAll(".ui-widget-content");

            for (var i = 0; i < UIDialogTittle.length; i++) {
                UIDialogTittle[i].style.color = settings.titleFontColor;

            }

            for (var i = 0; i < UIWidgetHeader.length; i++) {
                UIWidgetHeader[i].style.background = settings.titleBgColor;

            }

            for (var i = 0; i < UIWidget.length; i++) {
                UIWidget[i].style.background = settings.messageBgColor;
                UIWidget[i].style.color = settings.messageFontColor;
            }

            for (var i = 0; i < UIbuttons.length; i++) {

                UIbuttons[i].style.padding = "5px 20px";
                UIbuttons[i].style.fontSize = "13px";

            }

            document.querySelector(".ui-dialog").style.border = "1px solid #76A0F8";


        },

        setOptions: function (message, title, callback, options) {

            var thisOptions = Dalert.defaultConfig;
            thisOptions.title = title || Dalert.defaultConfig.title;
            thisOptions.message = message || Dalert.defaultConfig.message;
            thisOptions.callback = callback || new Function;

            if (options) {

            	/*If all options are defined*/
                if (options.titleBgColor !== undefined || options.titleBgColor !== "") {

                    thisOptions.titleBgColor = options.titleBgColor;
                }

                if (options.titleFontColor !== undefined || options.titleFontColor !== "") {

                    thisOptions.titleFontColor = options.titleFontColor;
                }

                if (options.messageBgColor !== undefined || options.messageBgColor !== "") {

                    thisOptions.messageBgColor = options.messageBgColor;

                }

                if (options.messageFontColor !== undefined || options.messageFontColor !== "") {

                    thisOptions.messageFontColor = options.messageFontColor;
                }

                /*If Not*/

                if (options.titleBgColor == undefined || options.titleBgColor == "") {

                    thisOptions.titleBgColor = Dalert.defaultConfigStatic.titleBgColor;
                }


                if (options.titleFontColor == undefined || options.titleFontColor == "") {

                    thisOptions.titleFontColor = Dalert.defaultConfigStatic.titleFontColor;
                }

                if (options.messageBgColor == undefined || options.messageBgColor == "") {

                    thisOptions.messageBgColor = Dalert.defaultConfigStatic.messageBgColor;
                }

                if (options.messageFontColor == undefined || options.messageFontColor == "") {

                    thisOptions.messageFontColor = Dalert.defaultConfigStatic.messageFontColor;
                }


            } else {

            		/*If options are not defined replace the static configs in order to reset the UI on each alert*/
                    thisOptions.titleBgColor = Dalert.defaultConfigStatic.titleBgColor;
                    thisOptions.titleFontColor = Dalert.defaultConfigStatic.titleFontColor;
                    thisOptions.messageBgColor = Dalert.defaultConfigStatic.messageBgColor;
                    thisOptions.messageFontColor = Dalert.defaultConfigStatic.messageFontColor;                

            }

            return thisOptions;
        },

        restore: function () {
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

})(window, jQuery);