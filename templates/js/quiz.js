// import { timerProgress } from "./timer.js";

const headerContainer = document.querySelector("#header");
const questionContainer = document.querySelector("#question");
const submitButton = document.querySelector("#submit");

let score = 0;
let sectionIndex = 0;
let questionIndex = 0;

// clearPage();
// showQuestion();

// submitButton.addEventListener("click", timerProgress)

// Очистка текстовых полей
function clearPage() {
  headerContainer.innerHTML = "";
  questionContainer.innerHTML = "";
}


// Добавление вопроса на страницу
// function showQuestion() {
//   console.log("showQuestion");

//   // Смена вопроса
//   const headerTemplate = `
//   <h1 class="title">Раздел: %section%</h1>`;
//   const title = headerTemplate.replace(
//     "%section%",
//     questions[sectionIndex]["section"]
//   );
//   headerContainer.innerHTML = title;

//   // Добавление вариантов ответа
//   // .entries возвращает массив с парой индекс=значение
//   for ([index, questionText] of questions[questionIndex]["question"].entries()) {
//     const questionTemplate = ` <h2 class="quiz-header__question">%question%</h2>`;
//     const questionHTML = questionTemplate.replace("%question%", questionText);
//     questionContainer.innerHTML = questionHTML;
//   }
//   //   for ([index, answerText] of questions[questionIndex]["answers"].entries()) {
//   //     const questionTemplate = `
//   // <li>
//   // 	<label>
//   // 		<input type="radio" value='%number%' class="answer" name="answer" />
//   // 		<span>%answer%</span>
//   // 	</label>
//   // </li>`;

//   //     const answerHTML = questionTemplate
//   //       .replace("%answer%", answerText)
//   //       .replace("%number%", index);
//   //     listContainer.innerHTML += answerHTML;
//   //   }
// }

// Проверка ввода ответа
// function checkAnswer() {

//   // Проверка выбора ответа
//   submitButton.blur();
//   if (answerText === null) {
//     return;
//   }

//   if (questionIndex !== questions.length - 1) {
//     questionIndex++;
//     clearPage();
//     showQuestion();
//   } else if (sectionIndex !== section.length - 1) {
//     sectionIndex++;
//     clearPage();
//     showQuestion();
//   } else {
//     clearPage();
//     showResults();
//   }
// }

// function showResults() {
//   let result = `${score} из ${questions.length}`;

//   const resultsTemplate = `
//   <h2 class="title">%title%</h2>
//   <h3 class="summary">%message%</h3>
//   <p class="result">%result%</p>`;
//   const resultMessage = resultsTemplate
//     .replace("%title%", "Результаты")
//     .replace("%message%", "Количество правильных ответов: ")
//     .replace("%result%", result);
//   headerContainer.innerHTML += resultMessage;

//   submitButton.blur();
//   submitButton.innerText = "Завершить";
// }
