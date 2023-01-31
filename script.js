const timeDisplay = document.querySelector("#time");

function displayTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(displayTime, 1000);

displayTime();
