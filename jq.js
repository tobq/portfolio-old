function next() {
	if ($("body").height() - ($(window).scrollTop() + $(window).height() - 100) > 0 || 3 > i) {
		if (i < $("section").length - 1) {
			if (i >= -1) {
				if (scr) {
					if (0 == i) {
						$("#goc").css("opacity", "1");
						$("#h").css("background","#000");
					}
					scr = false;
					$("html, body").stop().animate({
						scrollTop : $($("section")[++i]).offset().top - 100
					}, 700, "easeOutCubic");
					setTimeout(function() {
						scr = true;
					}, 700);
				}
			}
		}
	}
}
function prev() {
	if (i < $("section").length) {
		if (i > 0) {
			if (scr) {
				if (1 == i) {
					$("#goc").css("opacity", "0");
					$("#h").css("background","rgba(0,0,0,0)");
					$("html, body").stop().animate({
						scrollTop : $($("section")[--i]).offset().top
					}, 700, "easeOutCubic");
				} else $("html, body").stop().animate({
					scrollTop : $($("section")[--i]).offset().top - 100
				}, 700, "easeOutCubic");
				scr = false;
				setTimeout(function() {
					scr = true;
				}, 700);
			}
		}
	}
}
function now() {
	if (scr) {
		scr = false;
		$("html, body").stop().animate({
			scrollTop : $($("section")[i]).offset().top - 100
		}, 700, "easeOutCubic");
		setTimeout(function() {
			scr = true;
		}, 700);
	}
}
function displaywheel(e) {
	if (scr) {
		var evt = window.event || e;
		var o = evt.detail ? -120 * evt.detail : evt.wheelDelta;
		if (0 > o) {
			next();
		} else {
			prev();
		}
		e.preventDefault();
		e.stopPropagation();
	}
}
var i = 0;
var Tim;
var scr = true;
$(window).resize(function() {
	clearTimeout(Tim);
	Tim = setTimeout(function() {
		now();
	}, 500);
});
var mousewheelevt = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel";
document.attachEvent ? document.attachEvent("on" + mousewheelevt, displaywheel) : document.addEventListener && document.addEventListener(mousewheelevt, displaywheel, false), $("body").swipe({
	swipeUp : function(e, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist) {
		next();
	},
	swipeDown : function(e, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist) {
		prev();
	},
	threshold : 100,
	allowPageScroll : "vertical"
}), $("#god").click(function() {
	next();
}), $("#gou").click(function() {
	prev();
}), $("#proj").click(function() {
	next();
});
$(window).on("beforeunload", function() {
	$(window).scrollTop(0);
});
now();
