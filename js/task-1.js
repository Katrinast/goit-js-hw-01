// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }

// makeTransaction;

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"


// const inputEl = document.querySelector('input[type="text"]');
// inputEl.addEventListener('blur', event => {
//   const inputValue = event.target.value;
//   let result;

//   if (!inputValue.length) return;

//   const capitalFirstLetter = inputValue[0].toUpperCase();

//   result = capitalFirstLetter + inputValue.slice(1);
//   result = `${capitalFirstLetter}${inputValue.slice(1)}`;

//   console.log('result: ', result);
// });


// const TRIGGER =
//   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sed eius dolormque impedit molestiae quos aut asperiores, fugiat earum soluta officiis nobis facilis voluptatibus dicta quaerat doloribus odit cum sint!';

//  const inputEl = document.querySelector('input[type="text"]');
// inputEl.addEventListener('blur', event => {
// const inputValue = event.target.value;

// if (TRIGGER.includes(inputValue)) {
// console.log('Matching');
// } else {
// console.log('No matching');
// }
// });

/**
 * Напиши цикл for, який виводить у консоль браузера
 * числа за зростанням від a до b, але тільки якщо число кратне 5.
 */
// function caunter(a,b){
// for (let i = b; i <= a; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
// }
//   }
// }
// console.log(caunter(100, 20));
/**
 * Напиши скрипт, який підраховує суму всіх парних чисел,
 * які входять в діапазон чисел у змінних від min до max.
 * Наприклад, якщо min=0 і max=5, то діапазон 0-5,
 * і в ньому два парних числа - 2 і 4, їх сума 6.
 */


// function sumOfEvenNumbers(min, max) {
// let sum = 0;

// for (let i = min; i < max; i++) {
  
//   if (i % 2 === 0) {
//     sum += i;
//   }
//   }
//   return sum;
// }
// const min = 0;
// const max = 5;
// const result = sumOfEvenNumbers(min, max);
// console.log(`Сума всіх парних чисел в діапазоні від ${min} до ${max}: ${result}`);

// Завдання 1
// Оголоси дві змінні, які зберігають назву та ціну товару: name і price
// Присвойте змінним наступні характеристики товару (відразу при оголошенні)
// назва: Генератор захисного поля
// ціна: 1000
// Використовуючи стандартний рядок виведи в консоль інформацію про товар, вийде: 'Обрано «Генератор захисного поля», ціна за штуку 1000 кредитів'.
// Присвой товару нову ціну - 2000
// Використовуючи стандартний рядок виведи в консоль інформацію про товар, вийде: 'Обрано «Генератор захисного поля», ціна за штуку 2000 кредитів'.



// let name = "Генератор захисного поля";
// let price = 1000;

// // Виводимо інформацію про товар у консоль
// console.log(`Обрано «${name}», ціна за штуку ${price} кредитів.`);

// // Присвоюємо товару нову ціну
// price = 2000;

// // Виводимо оновлену інформацію про товар у консоль
// console.log(`Обрано «${name}», ціна за штуку ${price} кредитів.`);

// Завдання 2
// Напиши скрипт перевірки кількості товарів на складі. Є змінні total (кількість товарів на складі) і ordered (одиниць товару в замовленні).

// Порівняй ці значення і за результатами виведи:

// Якщо в замовленні вказано число, що перевищує кількість товарів на складі, то виведи повідомлення "На складі недостатньо товарів!".
// В іншому випадку виводь повідомлення "Замовлення оформлено, з вами зв'яжеться менеджер".
// Перевір працездатність коду з різними значеннями змінної ordered, наприклад 20, 80 і 130.

// function makeMessage(total, ordered) {
//   if (total >= ordered) {
//     return "Замовлення оформлено, з вами зв'яжеться менеджер";
//   } else {
//     return "На складі недостатньо товарів!";
//   }
// }

// console.log(makeMessage(100, 50));
// console.log(makeMessage(100, 20));
// console.log(makeMessage(100, 80));
// console.log(makeMessage(100, 130));


// Задание 3
// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// let yourUserPassword = prompt("enter your password")

// if (yourUserPassword === null) {
//   message = "Cancelled by the user";
  
// } if(yourUserPassword === ADMIN_PASSWORD) {
// message = "You are welcome!"
// }
// else {
//   message = "Access is denied, the password is incorrect!"
// }

// alert(message);

// Задание 4
// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

//


// // Оголошуємо змінні для кількості кредитів та ціни одного дроїда
// const credits = 23580;
// const pricePerDroid = 3000;

// // Питаємо користувача про кількість дроїдів, які він хоче купити
// let droidsToBuy = prompt('Скільки дроїдів ви хочете купити?');

// // Перевірка, чи користувач натиснув "Скасувати"
// if (droidsToBuy === null) {
//     console.log('Отменено пользователем!');
// } else {
//     // Розрахунок загальної вартості замовлення
//     let totalPrice = droidsToBuy * pricePerDroid;

//     // Перевірка, чи користувач може оплатити замовлення
//     if (totalPrice > credits) {
//         console.log('Недостаточно средств на счету!');
//     } else {
//         // Розрахунок залишку кредитів та виведення повідомлення про успішну оплату
//         let creditsLeft = credits - totalPrice;
//         console.log(`Вы купили ${droidsToBuy} дроидов, на счету осталось ${creditsLeft} кредитов.`);
//     }
// }

// Задание 5
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

// let country = prompt("Введите страну для доставки:");

// switch (key) {
//   case "Китай":
//     alert("Доставка в Китай будет стоить 100 кредитов");
    
//     break;
  
//   case "Чили":
//     alert("Доставка в Чили будет стоить 250 кредитов");
//     break;
  
//   case "Австралия":
//     alert("Доставка в Австралия будет стоить 170 кредитов");
//     break;
  
//   case "Индия":
//     alert("Доставка в Индия будет стоить 80 кредитов");
//     break;
  
//   case "Ямайка":
//     alert("Доставка в Ямайка будет стоить 120 кредитов");
//     break;

//   default:
//   alert("В вашей стране доставка не доступна");
// }

// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.

// let input;
// let total = 0;

// do {
//   input = prompt("Введите число:");
//   if (input !== null) {
//     total += Number(input);
//   }
  
// } while (input !== null);

// alert(`Общая сумма чисел равна ${total}`);

/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву.
 * Функція each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */

// function each(array, callback) {
//   const numbers = [];
  
//   for (const item of array) {
//     const res = callback(item);
//     numbers.push(res);
//   }
//   return numbers;
// }

// const result1 = each([64, 49, 36, 25, 16], function (value) {
//   // value
//   return value * 2;
// });
// console.log(result1)

// const result2 = each([64, 49, 36, 25, 16], function (value) {
//   return value - 10;
// });
// console.log(result2);


// function changeEven(numbers, value) {
//   let newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value);
//     } else {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
// };

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10))

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// // Оригинальный массив не изменился
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]


// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);


// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   const averagePlaytimePerGame = player.playtime / player.gamesPlayed;
//   return acc + averagePlaytimePerGame;
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const salaries = Object.values(salary);
// console.log('salaries:', salaries);

// const totalSalary = salaries.reduce((acc, item) => {
//   return acc + item;
// });

// console.log(totalSalary);



/**
 * Рахуємо загальну кількість годин
 */

//


//Напиши скрипт, який для об'єкта user,
//Послідовно:
//1 додати поле mood зі значенням 'happy'
//2 замінити hobby на 'skydiving'
//3 замінити значення premium на false
//4 виводити вміст об'єкта user у форматі
//ключ:значення використовуючи Object.keys() і for...of



//Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//Рядок з назвою каменю.
//Функція вважає, що м повертає загальну вартість каменів
//з ​​таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
// { name: "Смарагд", price: 1300, quantity: 4 },
// { name: "Діамант", price: 2700, quantity: 6 },
// { name: "Сапфір", price: 400, quantity: 7},
// { name: "Щебінь", price: 150, quantity: 100 },
//];

//Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//Рядок з назвою каменю.
//Функція вважає, що м повертає загальну вартість каменів
//з ​​таким ім'ям, ціною та кількістю з об'єкта
// const stones = [
// { name: "Смарагд", price: 1300, quantity: 4 },
// { name: "Діамант", price: 2700, quantity: 6 },
// { name: "Сапфір", price: 400, quantity: 7},
// { name: "Щебінь", price: 150, quantity: 100 },
// ];

// const calcTotalPrice = (stones, stonesName) => {
//   return stones.forEach(function (stone, index) {
  
// })
// };

// calcTotalPrice(stones, "Діамант");

//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль
const products = [];
const makeProduct = (name, price, callback) => {
  const product = {
    name,
    price,
    id: Math.random(),
  };
  callback(product);
};

const showProduct = product => {
  console.log(product);
  products.push(product);

};

makeProduct("iphone", 1000, showProduct);
makeProduct("samsung", 800, showProduct);
makeProduct("xiomi", 500, showProduct);
console.log(products);


