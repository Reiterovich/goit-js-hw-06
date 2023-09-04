function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

console.log(getRandomHexColor());

const onBody = document.querySelector("body");
const onBtn = document.querySelector(".change-color");
const onSpan = document.querySelector(".color");

onBtn.addEventListener("click", fonBody);

function fonBody(event) {
  const color = getRandomHexColor();
  onBody.style.backgroundColor = color;
  onSpan.textContent = color;
}
