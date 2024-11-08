const form = document.querySelector(".form");
const answer = document.querySelector(".answer");

const hint = document.querySelector(".hint");

const call = document.querySelector(".call");
const callButton = document.querySelector(".call__button");
const counter = call.querySelector(".call__counter");
const counterValue = counter.querySelector(".call__counter-value");

console.log(counterValue);

const rightAnswer = "000";

function showAnwer() {
  answer.style.setProperty("display", " block");
}

function hideForm() {
  form.style.setProperty("display", "none");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const answer = form.querySelector("content__input").value;

  if (answer === rightAnswer) {
    hideForm();
    showAnwer();
  }
});

function counterControll() {
  setInterval(() => {
    if (Number(counterValue.textContent) > 0)
      counterValue.textContent = Number(counterValue.textContent) - 1;
    else call.classList.add("_hidden");
  }, 1000);
}

counterControll();

callButton.addEventListener("click", () => {hint.classList.add("_active") })
