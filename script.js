const form = document.querySelector(".form");
const formInput = document.querySelector(".form__input");
const answer = document.querySelector(".answer");
const container = document.querySelector(".container");

const rightAnswer = "пи*27";

function showAnwer() {
  answer.classList.add("_active");
}

function hideForm() {
  form.classList.add("_hidden");
}

function showFailForm() {
  form.classList.add("_fail");
}

function showSuccess() {
  container.classList.add("_wide");
  hideForm();
  showAnwer();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const answer = formInput.value;

  if (answer === rightAnswer) {
    showSuccess();
  } else {
    showFailForm();
  }
});

formInput.addEventListener("input", () => {
  form.classList.remove("_fail");
});
