const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (element) => {
  if (element.currentTarget.value.length == textInput.dataset.length) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
