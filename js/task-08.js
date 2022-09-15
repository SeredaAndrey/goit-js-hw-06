// const refs = {
//   email: document.querySelector('[name="email"]'),
//   password: document.querySelector('[name="password"]'),
//   btn: document.querySelector(".login-form button"),
// };

// об'ект форми відправки
const dataForm = {
  email: "",
  password: "",
};

const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  // так потрібно збирати данні з форми
  //   const formData = new FormData(event.currentTarget);
  //   formData.forEach((value, name) => {
  //     console.log(name, value);
  //   });

  // так збираємо данні згідно завдання (через elements)
  const formElements = event.currentTarget.elements;

  dataForm.email = formElements.email.value;
  dataForm.password = formElements.password.value;

  if (!dataForm.email || !dataForm.password) {
    alert("email or password field is empty");
  } else {
    console.log(dataForm);
    form.reset();
  }
}
