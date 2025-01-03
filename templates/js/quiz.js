import { timerProgress } from "./timer.js";

const headerContainer = document.querySelector("#header");
const questionContainer = document.querySelector("#question");
const submitButton = document.querySelector("#submit");

let score = 0;
let sectionIndex = 0;
let questionIndex = 0;

let time = 60;

submitButton.addEventListener("click", timerProgress)

