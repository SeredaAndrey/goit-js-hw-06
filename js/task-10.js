function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const divElementContainer = document.querySelector(`#boxes`);
const inputField = document.querySelector("#controls input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");

let amount = 0;

inputField.addEventListener("input", onInputChange);

btnCreate.addEventListener("click", () => {
  divElementContainer.insertAdjacentHTML("beforeend", createBoxes(amount));
});
btnDestroy.addEventListener("click", () => {
  // divElementContainer.remove(); //удаляет полностью див вместе с родителем

  // тут делаю так чтобы удалял только созданную разметку с классом js-remove
  const removeList = document.querySelectorAll(".js-remove");
  for (let i = 0; i < removeList.length; i += 1) {
    removeList[i].remove();
  }
});

function onInputChange(event) {
  amount = event.currentTarget.value;
}

const createBoxes = (amount) => {
  const markup = [];
  let size = 30;
  for (let i = 1; i <= amount; i += 1) {
    const colorContainer = getRandomHexColor();
    markup.push(
      `<div class="js-remove" style="height:${size}px; width:${size}px; background-color:${colorContainer};"></div>`
    );
    size += 10;
  }
  return markup.join("");
};
