var counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  var updateCounter = () => {
    var target = counter.getAttribute("data-target");
    var c = +counter.innerText;
    var increment = target / 1000;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
