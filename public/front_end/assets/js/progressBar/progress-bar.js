!function(t){"use strict";t(window).on("scroll",function(){t(".progress").each(function(){var i=t(this);i.visible(!0)&&i.each(function(){var t=i.find(".progress-bar"),n=i.find(".ct-progressBar-text"),r=t.attr("aria-valuenow");n.text(r+"%"),t.addClass("animating").css("width",r+"%")})})})}(jQuery);