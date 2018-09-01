icon_menu.onclick = function myFunction() {
	var x = document.getElementById('adaptive-menu');

	if (x.className === "menu") {
		x.className += " responsive";
	}
	else {
		x.className = "menu";
	}
}