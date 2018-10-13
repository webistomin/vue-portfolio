const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('seconds');
let totalSeconds = 0;

function pad(val) {
  const valString = `${val}`;
  if (valString.length < 2) {
    return `0${valString}`;
  }
  return valString;
}

function setTime() {
  totalSeconds += 1;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60, 10));
}

setInterval(setTime, 1000);
