var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("body");

function changeBackground() {
    body.style.bockground = `linear-gradient(to right, ${color1.value}, ${color2.value});`;
}
color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);