var goc = document.getElementById("goc");
var god = document.getElementById("god");
var gou = document.getElementById("gou");
var projects = document.getElementById("proj");
var slide = document.getElementById("slide");
var sections = document.getElementsByTagName("section"), focused = 0;
var scrolling = false, SCROLL_DUR = 700;

window.onwheel = function MouseWheelHandler(e) {
	var e = window.event || e;
	if ((e.wheelDelta || -e.detail) < 0) next();
	else prev();

	e.stopPropagation();
	e.preventDefault();
	return false;
}

god.onclick = projects.onclick = next;
gou.onclick = prev;

function next() {
	if (scrolling || focused + 2 > sections.length) return false;
	scrolling = true;
	var section = sections[++focused];
	slide.style.bottom = focused * window.innerHeight + "px";
	projects.className = goc.className = "o";
	setTimeout(function () { scrolling = false }, SCROLL_DUR);
}

function prev() {
	if (scrolling || focused < 1) return false;
	scrolling = true;
	var section = sections[--focused];
	slide.style.bottom = focused * window.innerHeight + "px";
	if (!focused) projects.className = goc.className = "";
	setTimeout(function () { scrolling = false }, SCROLL_DUR);
}
