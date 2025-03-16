// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
const list = [3, 8, 25];
list[1] = 10; 
console.log(list);

// Створити масив із трьох рядків. Додати до масиву ще одну рядків.
const userName = ["Mykola", "Rostik", "Nazar"]
userName[3] = "Lev"
console.log(userName);
 
// Створити скрипт який поверне суму всіх чисел в масиві.
const namber = [30, 22, 100, 33, 50, 11, 44, 29, 17];
let suma = 0;
for (let i = 0; i < namber.length; i += 1){
        suma += namber[i]
}
console.log(suma);

// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
const listNumber = [7, 10, 11, 12, 71];
for (let i = 0; i <= listNumber.length -1; i += 1){
    console.log(listNumber[i]);
}

// Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
const lastName = ["coffe", "tea", "cappuccino", "americano", "cocoa"];
for (let i = 0; i < lastName.length; i += 1){
    if (lastName[i].length > 5) {
        console.log(lastName[i]);
    }
}

// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
const nambers = [30, 22, 100, 33, 50, 11, 44, 29, 17];
let max = list[0];
for (let i = 0; i <= nambers.length - 1; i += 1) {
    if (max < nambers[i]) {
        max = nambers[i]
    } 
}
console.log(max);

// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.

const leastNamber = [10, 13, 14, 17, 20, 23, 26, 28, 31, 53];
for (let i = 0; i <= leastNamber.length; i += 1){
    if (leastNamber[i] % 2 === 0) {
        console.log(leastNamber[i]);
        
    }
}