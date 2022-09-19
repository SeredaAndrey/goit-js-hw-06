const inputRange = document.querySelector("#font-size-control");
// const inputRange = document.getElementById("font-size-control");
const textSpan = document.querySelector("#text");
// const textSpan = document.getElementById("text");

inputRange.addEventListener("input", () => {
  textSpan.style.fontSize = `${inputRange.value}px`;
});
