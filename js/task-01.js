const categoryEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoryEl.length}`);

categoryEl.forEach((element, index) => {
  const elementItem = element.querySelectorAll(".item li");
  const nameElementItem = element.querySelector(".item h2").textContent;
  console.log(`Category: ${nameElementItem}`);
  console.log(`Elements: ${elementItem.length}`);
});
