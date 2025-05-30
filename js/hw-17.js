// 1. Створити розмітку з кнопкою та текстовим полем. За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.
const titleEl = document.querySelector("p");
const buttonEl = document.querySelector("button");
titleEl.textContent = "Mykola";
buttonEl.textContent = "hello"
buttonEl.textContent = buttonEl.textContent.replace("hello", "Mykola")
titleEl.textContent = titleEl.textContent.replace("Mykola", "Hello");

// 2. Створити розмітку з заголовком та зображенням. За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" на шлях до іншого зображення.
const textEl = document.querySelector("h1");
const imgEl = document.querySelector("img");
textEl.textContent = "Спорт"
imgEl.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc7UPx7Bt_BslUzwhUcGUS0h6KCwb0fyfrJQ&s";
imgEl.width = '600'

