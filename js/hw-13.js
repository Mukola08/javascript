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
const account = {
  balance: 0,
  transactions: [],
  countId: 1,
  createTransaction(amount, type) {
    const newTransactions = {
      amount: amount,
      type: type,
      id: this.countId,
    };
    this.countId += 1;
    return newTransactions;
  },
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, "deposit");
    this.transactions.push(transaction);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Недостатньо коштів для зняття цієї суми.");
      return;
    }
    this.balance -= amount;
    const transaction = this.createTransaction(amount, "withdraw");
    this.transactions.push(transaction);
  },
  getBalance() {
    return this.balance;
  },
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      const transaction = this.transactions[i];
      if (transaction.id === id) {
        return transaction;
      }
    }
    return null;
  },

  getTransactionTotal(type) {
    let total = 0;
    for (let i = 0; i < this.transactions.length; i += 1) {
      const transaction = this.transactions[i];
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};
account.deposit(1000);
console.log("Ваш баланс після поповнення дорівнює:", account.getBalance());
account.withdraw(500);
console.log("Ваш баланс після зняття дорівнює:", account.getBalance());
account.withdraw(700);
console.log("Ваш баланс після зняття дорівнює:", account.getBalance());
account.deposit(10000);
console.log("Ваш баланс після поповнення дорівнює:", account.getBalance());
account.deposit(50000);
console.log("Ваш баланс після поповнення дорівнює:", account.getBalance());
account.withdraw(40000);
console.log("Ваш баланс після зняття дорівнює:", account.getBalance());
account.getTransactionTotal("deposit");
console.log(
  "Загальна сума поповнень дорівнює:",
  account.getTransactionTotal("deposit")
);
account.getTransactionTotal("withdraw");
console.log(
  "Загальна сума зняття дорівнює:",
  account.getTransactionTotal("withdraw")
);
account.getTransactionDetails(2);
console.log("Деталі транзакції:", account.getTransactionDetails(2));