const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
let timerId;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function changeBodyBgColor() {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
}

function onStartButtonClick() {
    timerId = setInterval(changeBodyBgColor, 1000);
    startButton.disabled = true;
    startButton.classList.add('button-clicked');
    stopButton.classList.remove('button-clicked');
}

function onStopButtonClick() {
    clearInterval(timerId);
    startButton.disabled = false;
    stopButton.classList.add('button-clicked');
    startButton.classList.remove('button-clicked');
}

startButton.addEventListener('click', onStartButtonClick);
stopButton.addEventListener('click', onStopButtonClick);
