!function(a){"use strict";a(window).on("load",function(){var t=a(".ct-js-datePicker");a().datepicker&&(t.length>0&&t.each(function(){var t=a(this),e=parseBoolean(t.attr("data-todayHighlight"),!0),i=parseBoolean(t.attr("data-calendarWeeks"),!1),o=parseBoolean(t.attr("data-autoClose"),!1),n=parseBoolean(t.attr("data-keyboardNavigation"),!1);t.datepicker({todayHighlight:e,calendarWeeks:i,autoclose:o,keyboardNavigation:n});var c=a(".ct-js-datePicker"),d=c.innerWidth();c.on("focus",function(){var t=a(".datepicker");t.css("min-width",d),t.find("table").css("width","100%")})}),a(".ct-datePicker").find("input").on("focus",function(){a(".ct-datePicker").addClass("is-focused")}).blur(function(){a(".ct-datePicker").removeClass("is-focused")}))})}(jQuery);