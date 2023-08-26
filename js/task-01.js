const catNumber = document.querySelectorAll(".item");

console.log(`Number of categories: ${catNumber.length}`);

catNumber.forEach((element) => {
  const categoryName = element.firstElementChild;
  console.log(`Category: ${categoryName.textContent}`);
  const ulList = categoryName.nextElementSibling;
  const liCh = ulList.children;
  console.log(`Elements: ${liCh.length}`);
});
