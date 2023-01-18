var joke = document.getElementById("joke");
var jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

function generateJoke() {
  var config = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch("https://icanhazdadjoke.com/", config)
    .then((odg) => odg.json())
    .then((data) => {
      joke.innerHTML = data.joke;
    });
}
