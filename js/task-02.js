const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// отримання посилання на контейнер списку
const ingredientsContainerEl = document.querySelector(`ul`);

// функція створення одного елементу списку
const ingredientsElementsMarkup = (ingredients) => {
  const makeIngredientItem = document.createElement(`li`);
  makeIngredientItem.classList.add(`item`);
  makeIngredientItem.textContent = ingredients;
  return makeIngredientItem;
};

// створення розмітки списку
const ingredientsMarkup = ingredients.map(ingredientsElementsMarkup);

// додавання розмітки списку до загальної розмітки
ingredientsContainerEl.append(...ingredientsMarkup);
