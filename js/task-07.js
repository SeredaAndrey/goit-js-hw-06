const inputRange = document.querySelector("#font-size-control");
// const inputRange = document.getElementById("font-size-control");
const textSpan = document.querySelector("#text");
// const textSpan = document.getElementById("text");
console.dir(textSpan);

inputRange.addEventListener("change", () => {
  console.log(inputRange.value);
  textSpan.style.fontSize = `${inputRange.value}px`;
});
