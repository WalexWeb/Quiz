const timerBackground = document.querySelector(".quiz-timer__progress");
const timerFill = document.querySelector(".quiz-timer__fill");
const seconds = document.querySelector("#time");
const hint = document.querySelector(".projector-hint");

// const startProjBtn = document.querySelector("#startProj");
// startProjBtn.onclick(timerProgress());

// const startBtn = document.getElementById('startAdmin')
// startBtn.onclick(timerProgress())

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

    let hintTemplate = `<img class="projector-hint__img" src="../static/images/ZnoevHint.jpg" alt="Подсказка..." />`;

    if (sec <= (time - 20)) {
      hint.innerHTML = hintTemplate;
    }
  }, 1000);
}

export { timerProgress };