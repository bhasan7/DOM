var open = document.querySelector("#open");
var close = document.querySelector("#close");
var container = document.querySelector(".container");
open.addEventListener("click", function () {
  container.classList.add("show-naw");
});

close.addEventListener("click", function () {
  container.classList.remove("show-naw");
});
