// 1.Використати деструктуризацію об’єктів у всіх завданнях з попередньої ДЗ

const user = {
  name: "Mykola",
  age: 17,
  hobby: "voleyball",
  premium: true,
};

// const { name, age, hobby, premium } = user
// console.log(name, age, hobby, premium);


 const users = {
   name: "Mykola",
   age: 17,
   hobby: "voleyball",
   coutry: "Ukraine",
   city: "lviv",
};
// const { name, age, hobby, coutry, city } = users;
// console.log(name, age, hobby, coutry, city);

 
const works = {
  Mykola: 100,
  Rostik: 98,
  lev: 80,
};

const { Mykola, Rostik, lev } = works
console.log(Mykola, Rostik, lev);


 const work = {
   Mukola: 30000,
   Rosteak: 25000,
   Roma: 20000,
};
const { Mukola, Rosteak, Roma } = work
console.log(Mukola, Rosteak, Roma);

 
const masiv = [
  {
    name: "Mykola",
    age: 17,
    hobby: "voleyball",
  },
  {
    name: "Roma",
    age: 10,
    hobby: "football",
  },
  {
    name: "Andriy",
    age: 18,
    hobby: "basketball",
  },
];
const [a, b, c] = masiv;
console.log(a, b, c);


const products = [
  { name: "Apple", price: 25, quantity: 3 },
  { name: "Banana", price: 65, quantity: 4 },
  { name: "Orange", price: 35, quantity: 5 },
];
const [Apple, Banana, Orange] = products
console.log(Apple, Banana, Orange);


// 2. Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */
const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій

    transactions: [],
  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */

  createTransaction(amount, type) {},
  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {},

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {},

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {},
  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {},

  /*

   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {},
};