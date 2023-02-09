const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const tinkSound = document.querySelector(`audio[src = "tink.wav"]`);

function setDate() {
  // current date
  const now = new Date();
  // get seconds
  const seconds = now.getSeconds();
  // convert seconds to degree
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  tinkSound.play();
  // gets minute
  const mins = now.getMinutes();
  // convert minute to degree
  const minDegrees = (mins / 60) * 360 + 90;

  minHand.style.transform = `rotate(${minDegrees}deg)`;
  // get hours
  const hours = now.getHours();
  // convert hours to degree
  const hourDegrees = (hours / 12) * 360 + 90;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
