let answer = document.querySelectorAll(".answer-container");
let questions = document.querySelectorAll(".question-container");
let plus = document.querySelectorAll(".plus-icon");

questions.forEach((question) => {
  question.addEventListener("click", function (e) {
    question.classList.toggle("show");
  });
});
