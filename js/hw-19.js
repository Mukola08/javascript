// 1.Напиши скрипт в якому є три радіобатони зі значенями кольрів. При обиранніна будь якого колір фону боді змінюється відповідно
document.querySelectorAll('input[name="color"]').forEach((input) => {
    input.addEventListener("click", () => {
    document.querySelector('body').style.background = input.value;
    })
})

// 2.Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.
document.querySelector('input[type="text"]').addEventListener("input", (event) => {
    document.querySelector("#name-output").textContent = event.target.value;
});
  
// Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на правильну кількість символів.
// Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// Якщо введена відповідна кількість, то border інпут стає зеленим,   якщо неправильне - червоним.


// 3. Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

const inputEl = document.querySelector("#font-size-control");
inputEl.addEventListener("input", () => {
  document.querySelector("#text").style.fontSize = inputEl.value + "1px";
});