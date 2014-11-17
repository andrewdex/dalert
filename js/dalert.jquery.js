/*
 * DAlert jQueryPlugin
 * dalert.alert("Making the Alert Box much simpler, yet fancy");
 * Version: 1.1.0
 * Author: Dilusha Gonagala (andrewdex)
 * Dependencies : Jquery 1.6 + , Jquery UI 1.6 + Jquery UI CSS Framework
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


(function (Dalert, $, undefined) {

    "use strict";

    //Dalert Main namespaceNamespace for the dalert plugin library

    dalert = {
        //Alert Dialog box Implementation
        alert: function (dalert_msg, title_msg, callback, options) {

            //Default Option Values
            var tittle = "DAlert !",
                message = "Hi.. I am A DAlert !",
                callbackThis,
                tittleBgColor_def = "#275F98",
                tittleFontColor_def = "#ffffff",
                messageBgColor_def = "#ffffff",
                messageFontColor_def = "#000000";

            //Set options
            if (options !== undefined) {

                //Message font color
                if (options.messageFontColor !== undefined && options.messageFontColor !== "") {

                    messageFontColor_def = options.messageFontColor;

                }

                //Message background color
                if (options.messageBgColor !== undefined && options.messageBgColor !== "") {

                    messageBgColor_def = options.messageBgColor;

                }

                //Tittle background color
                if (options.tittleBgColor !== undefined && options.tittleBgColor !== "") {

                    tittleBgColor_def = options.tittleBgColor;

                }

                //Tittle font color
                if (options.tittleFontColor !== undefined && options.tittleFontColor !== "") {

                    tittleFontColor_def = options.tittleFontColor;

                }


            }

            /*Alert Callback declaration/assignment and validation*/
            if(callback !== undefined){
                
                if(Object.prototype.toString.call(callback) === '[object Function]'){

                        callbackThis = callback;

                }    
                
            }

            //tittle message
            if (!title_msg)
                title_msg = tittle;
            //message text
            if (!dalert_msg)
                dalert_msg = message;

            try {
                $("<div></div>").html(dalert_msg).dialog({
                    title: title_msg,
                    resizable: false,
                    modal: true,
                    //Make it more secure and neat when closing - Removes the dialog content onClose
                    beforeClose: function (event, ui) {
                        $(this).remove();
                    },
                    buttons: {
                        "Ok": function () {
                            $(this).dialog("close");
                        }
                    },

                    /*Callback support for alert*/
                    close: function () {
                    
                    if(callbackThis !== undefined){
                        callbackThis();
                    }
                    

                    }
                });

                // jQuery UI ByPass
                $(".ui-widget-content").css("color", messageFontColor_def);
                $(".ui-widget-content").css("background", messageBgColor_def);
                $(".ui-widget-header").css("background", tittleBgColor_def);
                $(".ui-dialog-title").css("color", tittleFontColor_def);

                //Call jQueryUI ByPass
                dalert.byPassjQueryUI();

                //Catching Errors, In Case if something goes wrong 
                //Act normal as nothing happened :) and output the native alert function.  
            } catch (error) {
                console.log(error);
                alert(dalert_msg);
            }

        },

        // DAlert Confirm Dialog
        confirm: function (dalert_msg, title_msg, callback, options) {

            //Default Option Values
            var tittle = "DAlert !",
                message = "Hi.. I am A DAlert Confirm !",
                tittleBgColor_def = "#275F98",
                tittleFontColor_def = "#ffffff",
                messageBgColor_def = "#ffffff",
                messageFontColor_def = "#000000",
                result;

            //Set options
            if (options !== undefined) {

                //Message font color
                if (options.messageFontColor !== undefined && options.messageFontColor !== "") {

                    messageFontColor_def = options.messageFontColor;

                }

                //Message background color
                if (options.messageBgColor !== undefined && options.messageBgColor !== "") {

                    messageBgColor_def = options.messageBgColor;

                }

                //Tittle background color
                if (options.tittleBgColor !== undefined && options.tittleBgColor !== "") {

                    tittleBgColor_def = options.tittleBgColor;

                }

                //Tittle font color
                if (options.tittleFontColor !== undefined && options.tittleFontColor !== "") {

                    tittleFontColor_def = options.tittleFontColor;

                }


            }

            //tittle message
            if (!title_msg)
                title_msg = tittle;
            //message text
            if (!dalert_msg)
                dalert_msg = message;

            try {
                $("<div></div>").html(dalert_msg).dialog({
                    title: title_msg,
                    resizable: false,
                    modal: true,
                    //Make it more secure and neat when closing - Removes the dialog content onClose
                    beforeClose: function (event, ui) {
                        $(this).remove();
                    },
                    buttons: {
                        "Yes": function () {

                            result = true;
                            if (callback !== undefined && callback !== "") {
                                if (typeof (callback) == "function") {
                                    // do something
                                    callback(result);
                                    $(this).dialog("close");
                                } else {
                                    dalert.alert("Not a function !");
                                }

                            }
                            if (callback === "" || callback === undefined) {
                                dalert.alert("Please define a callback function");
                            }

                        },
                        "No": function () {

                            result = false;
                            if (callback !== undefined && callback !== "") {
                                if (typeof (callback) == "function") {

                                    callback(result);
                                    $(this).dialog("close");
                                } else {

                                    dalert.alert("Not a function !");
                                }

                            }
                            if (callback === "" || callback === undefined) {
                                dalert.alert("Please define a callback function");
                            }



                        }
                    }
                });

                // jQuery UI ByPass
                $(".ui-widget-content").css("color", messageFontColor_def);
                $(".ui-widget-content").css("background", messageBgColor_def);
                $(".ui-widget-header").css("background", tittleBgColor_def);
                $(".ui-dialog-title").css("color", tittleFontColor_def);

                //Call buttonPadding ByPass
                dalert.byPassjQueryUI();

                //Catching Errors, In Case if something goes wrong with jQuery UI, 
                //Replicate the native confirm function and handling the parameterized true false functions.    
            } catch (error) {
                console.log(error);
                var conf_val = confirm(dalertConf_msg);
                if (conf_val == true) {
                    eval(trueFunction)();
                } else {
                    eval(falseFunction)();
                }
            }

        },

        //jQuery UI Override for button padding and jQuery Dialog UI
        byPassjQueryUI: function () {

            $(".ui-button-text-only .ui-button-text").css("padding-left", "20px");
            $(".ui-button-text-only .ui-button-text").css("padding-right", "20px");
            $(".ui-button-text-only .ui-button-text").css("padding-top", "5px");
            $(".ui-button-text-only .ui-button-text").css("padding-bottom", "5px");
            $(".ui-button-text-only .ui-button-text").css("font-size", "13px");

            $(".ui-dialog").css("border-width", "1px");
            $(".ui-dialog").css("border-style", "solid");
            $(".ui-dialog").css("border-color", "#76A0F8");



        },


        // Replace DAlert With Window JavaScript Original objects : alert, confirm.
        ReplaceAlert: function () {

            window.alert = dalert.alert;

        },

        ReplaceConfirm: function () {

            window.confirm = dalert.confirm;

        }

    };


}(window.dalert = window.dalert || {}, jQuery));