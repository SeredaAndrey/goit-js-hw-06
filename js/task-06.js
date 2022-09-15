const input = document.querySelector("#validation-input");
const inputlength = Number(input.dataset.length);

input.addEventListener("input", (event) => {
  if ([...event.currentTarget.value].length !== inputlength) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  } else {
    input.classList.add("valid");
    input.classList.remove("invalid");
  }
});
