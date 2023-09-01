const counterValue = document.querySelector("#value");
counterValue.value = 0;

console.log(counterValue.value);

const minButton = document.querySelector('button[data-action="decrement"]');
const plsButton = document.querySelector('button[data-action="increment"]');

plsButton.addEventListener("click", () => {
  counterValue.value += 1;
  counterValue.textContent = counterValue.value;
  console.log(counterValue.value);
});

minButton.addEventListener("click", () => {
  counterValue.value -= 1;
  counterValue.textContent = counterValue.value;
  console.log(counterValue.value);
});
