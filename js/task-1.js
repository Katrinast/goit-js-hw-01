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

Задание 5
Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

Ниже приведен список стран и стоимость доставки.

Китай - 100 кредитов
Чили - 250 кредитов
Австралия - 170 кредитов
Индия - 80 кредитов
Ямайка - 120 кредитов