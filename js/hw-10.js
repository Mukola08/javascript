//1 Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек. Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції:
// Порахувати суму всіх елементів масиву.
// Знайти мінімальний елемент масиву.
// Знайти максимальний елемент масиву.
// Перепишіть колбек-функції на стрілки
console.log("1.Завдання(Callback)____");
const masiv = [1, 22, 3, 4, 55, 6, 7]

const processArray = function (array, callback) {
    return callback(array)
}

const samMasiv = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i += 1){
        sum += array[i]
    }
    return sum
}
console.log(processArray(masiv, samMasiv));

const minMasiv = function (array) {
    let min = array[0]
    for (let i = 0; i < array.length; i += 1){
        if (min > array[i]) {
            min = array[i]
        }
    }
    return min 
}

console.log(processArray(masiv, minMasiv));

const maxMasiv = function (array) {
    let max = array[0]
    for (let i = 0; i < array.length; i += 1){
        if (max < array[i]) {
          max = array[i]
      }
        
    }
    return max
}
console.log(processArray(masiv, maxMasiv));

// Стрілкова______________________________
console.log("1.Завдання(Стрілкова)____");

const musiv = [1, 22, 3, 4, 55, 6, 7]
const proocessArray = (array, callback) => callback(array)
const getSum = function (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i += 1){
        sum += arr[i]
    }
    return sum
}
const getMin = (arr) => Math.min(...arr);
const getMax = (arr) => Math.max(...arr);
console.log(processArray(masiv, getSum));
console.log(processArray(masiv, getMin));
console.log(processArray(masiv, getMax));

// 2. Створіть функцію operate(a, b, callback), яка приймає два числа та колбек для виконання операції над ними. Використайте її для виконання наступних операцій:

// Додавання.
// Віднімання.
// Множення.
// Ділення.
// Перепишіть колбеки на стрілкові функції
console.log("2.Завдання(callback)____");
const operate = function (a, b, callback) {
    return callback(a,b)
}
const plusNumbers = function (a, b) {
    return a + b
}
const minesNumbers = function (a, b) {
    return a - b
}
const multiplicationNumbers = function (a, b) {
    return a * b
}
const divisionNumbers = function (a, b) {
    return a / b
}
console.log(operate(10, 5, plusNumbers));
console.log(operate(10, 5, minesNumbers));
console.log(operate(10, 5, multiplicationNumbers));
console.log(operate(10, 5, divisionNumbers));

console.log("2.Завдання(Стрілкова)____");

const oparate = (a, b, callback) => callback(a, b);
console.log(oparate(10, 5, (a, b) => a + b));
console.log(oparate(10, 5, (a, b) => a - b)); 
console.log(oparate(10, 5, (a, b) => a * b)); 
console.log(oparate(10, 5, (a, b) => a / b));