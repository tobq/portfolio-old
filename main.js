var goc = document.getElementById("goc");
var god = document.getElementById("god");
var gou = document.getElementById("gou");
var projects = document.getElementById("proj");
var slide = document.getElementById("slide");
var sections = document.getElementsByTagName("section"), focused = 0;
var scrolling = false, SCROLL_DUR = 700;

window.onwheel = function MouseWheelHandler(e) {
	var e = window.event || e;
	if (e.wheelDelta < 0 || 0 > e.detail) next();
	else prev();
	e.preventDefault();
	return false;
}

god.onclick = projects.onclick = next;
gou.onclick = prev;

function next() {
	++focused;
	setTop();
}

function prev() {
	--focused;
	setTop();
}

function setTop() {
	if (scrolling || focused < 0 || focused + 1 > sections.length) return false;
	scrolling = true;
	slide.style.bottom = focused * window.innerHeight + "px";
	projects.className = goc.className = focused ? "o" : "";
	setTimeout(function () { scrolling = false }, SCROLL_DUR);
}
window.onresize = setTop
