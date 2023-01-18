var sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sounds) => {
  var btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sounds;

  btn.addEventListener("click", function () {
    document.getElementById(sounds).play();
  });

  document.getElementById("buttons").appendChild(btn);
});
/*
function stopSong() {
  sounds.forEach((sound) => {
    var song = document.getElementById(sounds);
    song.pause();
    song.currentTime = 0;
  });
}
*/
