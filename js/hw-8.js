// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.

// Спочатку через for
const friends = ["Mango", "Roly", "Kiwi", "Ajax"];
let string = "";
for (let i = 0; i < friends.length; i += 1){
    string += friends[i];
    if (i < friends.length -1) {
        string += ", "
    }
}
console.log(string);

// Потім через join()
const news = friends.join(", ")
console.log(news);

// 2Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];


//3. Видалити

const cardToRemove = 'Карточка-3';
const index = cards.indexOf(cardToRemove);
cards.splice(index, 1)


//4. Додати
const cardToInsert = 'Карточка-6';
const index1 = cards.indexOf('Карточка-5');
cards.splice(index1 + 1, 0, cardToInsert);


//5Оновити
const cardToUpdate = 'Карточка-4';
const index2 = cards.indexOf(cardToUpdate);
cards.splice(index2, 1, 'Карточка-3', 'Карточка-4');
console.log(cards);