//1 Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of
const user = {
  name: "Mykola",
  age: 17,
  hobby: "voleyball",
  premium: true,
}
user.mood = 'happy';
user.hobby = "skydiving";
user.premium = false;
const key = Object.keys(user);
for (let keys of key) {
  console.log(`${keys}: ${user[keys]}`);
  
}

//2 Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

function countProps(obj) {
  const result = Object.keys(obj).length;
  console.log(result);
  return result
}
  const users = {
    name: "Mykola",
    age: 17,
    hobby: "voleyball",
    coutry: "Ukraine",
    city: "lviv",
  };
countProps(users)
  

//3 Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

function findBestEmployee(employees) {
  const resulWork = Object.values(employees);
  let max = resulWork[0];
  for (let i = 0; i < resulWork.length; i += 1){
    if (max < resulWork[i]) {
      max = resulWork[i]
    }
  }
  const bun = Object.entries(employees)
  for (let a = 0; a < bun.length; a += 1){
    if (bun[a][1] === max) {
      console.log(bun[a][0]);
      return bun[a][0];
    }
  }
  
}
const works = {
  Mykola: 100,
  Rostik: 98,
  lev: 80,
}
findBestEmployee(works)

// 4 Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

function countTotalSalary(employees) {
  const suma = Object.values(employees);
  let sum = 0;
  for (let i = 0; i < suma.length; i += 1){
    sum += suma[i];
  }
  return sum;
}
 const work = {
  Mykola: 30000,
  Rostik: 25000,
  Roma: 20000,
}
console.log(countTotalSalary(work));

//5 Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

function getAllPropValues(arr, prop) {
    let result = [];
    for (let i in arr) {
   result.push(arr[i][prop])
    }
    return result;
}
const masiv = [
    {
        name: "Mykola",
        age: 17,
        hobby: "voleyball"
    },
    {
        name: 'Roma',
        age: 10,
        hobby: 'football'
    },
    {
        name: 'Andriy',
        age: 18,
        hobby: 'basketball',
    }
];
// getAllPropValues(masiv, "name");
console.log(getAllPropValues(masiv, "name"));

//6 Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
function calculateTotalPrice(allProdcuts, productName) {
    let sum = 0;
    for (let i of allProdcuts) {
        if (i.name === productName) {
            sum = i.price * i.quantity
        }
    }
    return sum;
}
const products = [
  { name: "Apple", price: 25, quantity: 3 },
  { name: "Banana", price: 65, quantity: 4 },
  { name: "Orange", price: 35, quantity: 5 },
];
console.log(calculateTotalPrice(products, "Apple"));
