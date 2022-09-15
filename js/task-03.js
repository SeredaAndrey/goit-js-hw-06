const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// отримання посилання на контейнер списку
const imageElementContainer = document.querySelector(`.gallery`);

// функція створення одного елементу списку
const imageElementMarkup = (imageElement) => {
  return `
  <li>
    <img
    src='${imageElement.url}' 
    alt='${imageElement.alt}'>
  </li>`;
};
// console.log(imageElementMarkup(images[1]));
const makeImagesMarkup = images.map(imageElementMarkup).join("");
imageElementContainer.insertAdjacentHTML("beforeend", makeImagesMarkup);
// console.log(makeImagesMarkup);
