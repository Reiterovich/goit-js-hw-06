const inputRange = document.querySelector("#font-size-control");
const textAbra = document.querySelector("#text");

inputRange.value = 50;
textAbra.style.fontSize = "50px";

inputRange.addEventListener("input", () => {
  const size = inputRange.value;
  textAbra.style.fontSize = `${size}px`;
});
