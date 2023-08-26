const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulList = document.querySelector("#ingredients");

ingredients.forEach((element) => {
  const prodEl = document.createElement("li");
  prodEl.textContent = element;
  ulList.append(prodEl);
});
