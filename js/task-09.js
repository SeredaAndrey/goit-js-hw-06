function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");
const container = document.querySelector("body");
const span = document.querySelector(".color");

btn.addEventListener("click", () => {
  const fonColor = getRandomHexColor();
  span.textContent = fonColor;
  container.style.backgroundColor = `${fonColor}`;
});
