var goc = document.getElementById("goc");
var god = document.getElementById("god");
var gou = document.getElementById("gou");
var projects = document.getElementById("proj");
var slide = document.getElementById("slide");
var sections = document.getElementsByTagName("section"), focused = 0;
var scrolling = false, SCROLL_DUR = 200;

window.onwheel = function (e) {
	var e = window.event || e;
	if (e.wheelDelta < 0 || 0 > e.detail) next();
	else prev();
	e.preventDefault();
	return false;
}

god.onclick = next;
gou.onclick = prev;
projets.onclick = function(){
	focused = 1;
	setTop();
}
function next() {
	if (scrolling || focused + 2 > sections.length) return false;
	++focused;
	setTop();
}

function prev() {
	if (scrolling || focused < 1) return false;
	--focused;
	setTop();
}

function setTop() {
	scrolling = true;
	slide.style.bottom = focused * window.innerHeight + "px";
	projects.className = goc.className = focused ? "o" : "";
	setTimeout(function () { scrolling = false }, SCROLL_DUR);
}
window.onresize = setTop
