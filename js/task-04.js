const actionsDecrement = document.querySelector('[data-action="decrement"]');
const actionsIncrement = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = 0;

actionsDecrement.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

actionsIncrement.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
