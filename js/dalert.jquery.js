/*
 * DAlert jQueryPlugin
 * dalert.alert("Making the Alert Box much simpler, yet fancy");
 * Version: 1.0
 * Author: Andrew dEX (Dilusha)
 * Dependencies : Jquery 1.6 + , Jquery UI 1.6 + Jquery UI CSS Framework
 * Info & API : http://dalert.andrewdex.com
 * Contribute : http://www.github.com/andrewdex/dalert
 * 
 * Copyright 2013 Andrew dEX (Dilusha Gonagala)
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

//Making the anonymous function
(function (Dalert, $, undefined) {
    
    "use strict";
    
    //Dalert Namespace for the dalert plugin library
     dalert = {
            
   

        //Alert Dialog box Implementation
        alert: function (dalert_msg, title_msg, FontColor, bodyColor) {

            if (!title_msg)
                title_msg = 'DAlert';

            if (!FontColor)
                FontColor = 'black';

            if (!bodyColor)
                bodyColor = 'rgb(255, 255, 255)';

            if (!dalert_msg)
                dalert_msg = 'This is a Dalert !';

            try {
                $("<div></div>").html(dalert_msg).dialog({
                    title: title_msg,
                    resizable: false,
                    modal: true,
                    //Make it more secure and neat when closing - Removes the dialog content onClose
                    beforeClose: function(event, ui) { 
                         $(this).remove();
                     },
                    buttons: {
                        "Ok": function () {
                            $(this).dialog("close");
                           


                        }
                    }
                });
                // jQuery UI ByPass
                $(".ui-widget-content").css("color", FontColor);
                $(".ui-widget-content").css("background", bodyColor);


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
        confirm: function (dalertConf_msg, trueFunction, falseFunction, title_msg,
            FontColor, bodyColor) {


            if (!title_msg)
                title_msg = 'DAlert';

            if (!FontColor)
                FontColor = 'black';

            if (!bodyColor)
                bodyColor = 'rgb(255, 255, 255)';

            if (!dalertConf_msg)
                dalertConf_msg = 'This is a Dalert Confirm !';

            try {
                $("<div></div>").html(dalertConf_msg).dialog({
                    title: title_msg,
                    resizable: false,
                    modal: true,
                    //Make it more secure and neat when closing - Removes the dialog content onClose
                    beforeClose: function(event, ui) { 
                         $(this).remove();
                     },
                    buttons: {
                        "Yes": function () {
                            if (!trueFunction) {
                                $(this).dialog("close");
                            } else {
                                eval(trueFunction)();
                                $(this).dialog("close");

                            }

                        },
                        "No": function () {
                            if (!falseFunction) {
                                $(this).dialog("close");

                            } else {
                                eval(falseFunction)();
                                $(this).dialog("close");


                            }

                        }
                    }
                });

                // jQuery UI-CSS Framework ByPass
                $(".ui-widget-content").css("color", FontColor);
                $(".ui-widget-content").css("background", bodyColor);

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
            $(".ui-widget-header").css("background", "#26598f");


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
