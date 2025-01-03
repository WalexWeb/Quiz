const timerBackground = document.querySelector(".quiz-timer__progress");
const timerFill = document.querySelector(".quiz-timer__fill");
const seconds = document.querySelector("#time");

function timerProgress() {
  let time = 60;
  let sec = time;
  const timer = setInterval(() => {
    if (sec > 0) {
      seconds.innerHTML = sec;
      const timePercent = (100 / time) * sec;
      timerFill.style.width = `${timePercent}%`;
      sec--;
    } else {
      clearInterval(timer);
      seconds.innerHTML = 0;
      timerBackground.classList.add("time-limited");
    }
  }, 1000);
}

export { timerProgress };