function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

makeTransaction;

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"


function normalizeInput(input, to) {
  if (to === "upper") {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

console.log(normalizeInput("This ISN'T SpaM", "lower")); // "this isn't spam"
console.log(normalizeInput("This ISN'T SpaM", "upper")); // "THIS ISN'T SPAM"
console.log(normalizeInput("Big SALE", "lower")); // "big sale"
console.log(normalizeInput("Big SALE", "upper")); // "BIG SALE"
console.log(normalizeInput("Stay Awhile and Listen", "lower")); // "stay awhile and listen"
console.log(normalizeInput("Stay Awhile and Listen", "upper")); // "STAY AWHILE AND LISTEN"

function checkForName(fullName, firstName) {
  return fullName.toLowerCase().includes(firstName.toLowerCase());
}