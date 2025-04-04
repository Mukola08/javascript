// Завдання 1
// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

function logItems(array) {
    let result = [];
    for (let i = 0; i < array.length; i += 1){
        result.push(i + 1 + "-" + array[i]);
    }
    return result
}
console.log(logItems(['Mango', 'Poly', 'Ajax']));

// Завдання 2
// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

function calculateEngravingPrice(message, pricePerWord) {
    const result = message.split(" ").length * pricePerWord;
    return result
}
console.log(calculateEngravingPrice("i love java script", 30));


// Завдання 3
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

function findLongestWord(string) {
    const result = string.split(" ")
    let sum = result[0];
    for (let i = 0; i <= result.length; i += 1){
        if (sum < result[i]) {
            sum = result[i]
        }
    }
    return sum
}
console.log(findLongestWord("i love java script"));


// Завдання 4
// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.
function formatString(string) {
    let message = "";
    if (string.length < 40) {
        message = string
    } else {
        message = `${string.slice(0, 40,)}...`
    }
    
return message
}
console.log(formatString("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis mollitia tempora praesentium asperiores nemo cumque non odit doloribus accusantium, doloremque velit repellendus? Fuga commodi assumenda dignissimos."));


// Завдання 5
// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

function checkForSpam(message) {
    const slovo = ["spam", "sale"];
    const mess = message.toLowerCase();
    for (let word of slovo) {
        if (mess.includes(word)) {
            return true;
        }
    }
    return false;
}
console.log(checkForSpam("Lorem ipsum dolor sit amet consectetur adipisicing sale elit"));


// Завдання 6
// Напиши скрипт з наступним функціоналом:
// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.
// Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат promptзаписувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.

// let input;
// const numbers = [];
// let total = 0;

let input;
const numbers = [];
let total = 0;
while (true) {
    input = prompt("Введіть число");
    console.log(input);
    if (input === null) {
        alert("Ви вийшли")
        break;
    }
    if (isNaN(input)) {
        alert("Було введено не число, спробуйте ще раз")
        continue;
    }
    input = Number(input);
    numbers.push(input);

}
console.log(numbers);
if (numbers.length > 0) {
    for (let num of numbers) {
        total+=num
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
    
}
