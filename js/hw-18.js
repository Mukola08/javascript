// Напиши скрипт, який виконає наступні операції.
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.
// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li).
const itemEl = document.querySelectorAll("#categories .item ");
itemEl.forEach((element) => {
  const title = element.querySelector("h2").textContent;
  const elements = element.querySelectorAll("ul li").length;
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${elements}`);
});

// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, після чого вставить всі li за одну операцію в список ul.ingredients. Для створення DOM-вузлів використовуй document.createElement().
const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ListEl = document.querySelector("#ingredients");
const link = ingredients.map((item) => {
    const elem = document.createElement("li");
    elem.textContent = item;
    return elem
})
ListEl.append(...link)

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
const listElement = document.querySelector("#gallery");
images.forEach(({url, alt}) => {
listElement.insertAdjacentHTML(
  "beforeend",
  `    <li>
        <img src="${url}" width="500px alt="${alt}">
    </li>`
);
})
document.querySelector("body").prepend(listElement)
console.log(listElement);

// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.
// Створи змінну counterValue в якій буде зберігається поточне значення лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу


