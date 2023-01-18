var toggle = document.querySelector("#toggle");
var nav = document.querySelector("nav");

toggle.addEventListener("click", function () {
  nav.classList.toggle("active");
});
