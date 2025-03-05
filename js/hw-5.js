//1Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch

// const kava = "кава";
// const chay = "чай";
// const sik = "сік";
// const result = prompt(`Виберіть напій ${kava}, ${chay} або ${sik}`);
// switch (result.toLowerCase()) {
//     case kava:
//         alert(`Дякую за вибір (${kava})`)
//         console.log("Вибрано каву");
//         break;
//         case chay:
//         alert(`Дякую за вибір (${chay})`)
//         console.log("Вибрано Чай");
//         break;
//         case sik:
//         alert(`Дякую за вибір (${sik})`)
//         console.log("Вибрано Сік");
//         break;
//     default:
//         alert("Такого напою не існує або немає в наявності")
//         console.log("Помилка");
        
// }


//2Створіть змінну для зберігання введеного рядка, який може бути днем тижня. Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.

// const days = "Понеділок Вівторок Середа Четвер П'ятниця";
// const day = "Субота Неділя"
// const inp = prompt("Виберіть день тижня, від Понеділка до П'ятниці");
// if (days.includes(inp)) {
//     alert("Ви обрали робочий день")
// } else if (day.includes(inp)) {
//     alert ("Ви обрали вихідний день")
// } else {
//     alert ("Такого дня не існує")
// }


//3Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і виводьте відповідне повідомлення.

// const winter = [12, 1, 2];
// const spring = [3, 4, 5];
// const summer = [6, 7, 8];
// const fall = [9, 10, 11];
// const input = Number(prompt("Напишіть число від (1-12), щоб дізнатися пору року"));
// if (winter.includes(input)) {
//     alert("Ви обрали Зиму");
// } else if (spring.includes(input)) {
//     alert("Ви обрали Весну");
// } else if (summer.includes(input)) {
//     alert("Ви обрали Літо");
// } else if (fall.includes(input)) {
//     alert("Ви обрали Осінь");
// } else {
//     alert("Помилка Введіть число від (1-12)");
// }

//4Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

// const red = "червоний";
// const yell = "жовтий";
// const gre = "зелений";
// const result = prompt(`Виберіть колір ${red} ${yell} або ${gre}`);
// if (result.toLowerCase().includes(gre)) {
//     alert ("ЙТИ")
// } else if (result.toLowerCase().includes(yell)) {
//     alert("ЧЕКАТИ")
// } else if (result.toLowerCase().includes(red)) {
//     alert ("СТОП")
// } else {
//     alert(`Помилка, введіть ${red} ${yell} або ${gre} колір`)
// }


//5Створіть змінні для зберігання двох чисел та оператора (як у списку select). Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.

const namber = Number(prompt("Введіть число"));
const oper = prompt("Оберіть оператор (+ - * /)");
const number = Number(prompt('Введіть число'))
switch (oper) {
    case "+":
        alert(namber + number);
        break;
    case "-":
        alert(namber - number);
        break;
    case "*":
        alert(namber * number);
        break;
    case "/":
        if (number === 0) {
            alert("На нуль ділити не можна");
        } else {
            alert(namber / number)
        }
        break;
    default:
        alert ("Помилка введіть вірні данні")
}