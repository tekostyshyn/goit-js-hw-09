import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startButton = document.querySelector('button[data-start]');
const daysField = document.querySelector('span[data-days]');
const hoursField = document.querySelector('span[data-hours]');
const minutesField = document.querySelector('span[data-minutes]');
const secondsField = document.querySelector('span[data-seconds]');
const DELAY = 1000;

const myInput = document.querySelector('#datetime-picker');
let chosenDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
    Notify.failure('Please choose a date in the future');
    } else {
      startButton.disabled = false;
      startButton.classList.add('enabled');
      chosenDate = selectedDates[0].getTime();
    }
  },
};

const fp = flatpickr(myInput, options);

startButton.addEventListener('click', onStartButtonPress);

function onStartButtonPress() {
    setInterval(() => {
    const deltaTime = chosenDate - Date.now();
    if (deltaTime < 0) return;
    const remainingTime = convertMs(deltaTime);
    updateMarkup(remainingTime);
    }, DELAY);
    myInput.disabled = true;
    startButton.disabled = true;
    startButton.classList.remove('enabled');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateMarkup(time) {
    daysField.textContent = addLeadingZero(time.days);
    hoursField.textContent = addLeadingZero(time.hours);
    minutesField.textContent = addLeadingZero(time.minutes);
    secondsField.textContent = addLeadingZero(time.seconds);
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0')
};



