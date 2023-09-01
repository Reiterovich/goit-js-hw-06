const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

outputEl.textContent = "Anonymous";

inputEl.addEventListener("input", (element) => {
  if (inputEl.value == "") {
    outputEl.textContent = "Anonymous";
  } else {
    outputEl.textContent = element.currentTarget.value;
  }
});
