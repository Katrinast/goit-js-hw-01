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
function caunter(number){
const a = 100;
const b = 20;

for (let i = b; i <= a; i++) {
  if (i % 5 === 0) {
    number = i;
    return number;
    console.log(10);
}
  }
  }
/**
 * Напиши скрипт, який підраховує суму всіх парних чисел,
 * які входять в діапазон чисел у змінних від min до max.
 * Наприклад, якщо min=0 і max=5, то діапазон 0-5,
 * і в ньому два парних числа - 2 і 4, їх сума 6.
 */

const min = 0;
const max = 5;
let total = 0;
