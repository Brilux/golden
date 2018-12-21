const adaptiveMenu = document.getElementById('adaptive-menu');
const myFunction = () => adaptiveMenu.className === "menu"
    ? adaptiveMenu.className += " responsive" : adaptiveMenu.className = "menu";
