const numbers = Array.from({ length: 50000 }, () =>
  Math.floor(Math.random() * 50000)
);

// Tradisional??
// Filter
let output = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 4 && numbers[i] % 2 === 0) {
    output.push(numbers[i]);
  }
}

// MODERN
console.time('MODERN');
const numberOutputModern = [...output].sort((a, b) => a - b);
console.log(numberOutputModern);
console.timeEnd('MODERN');

console.time('TRADISIONAL');
let numberOutputTradisional = [...output];
for (let i = 0; i < numberOutputTradisional.length - 1; i++) {
  for (let j = 0; j < numberOutputTradisional.length - 1 - i; j++) {
    if (numberOutputTradisional[j] > numberOutputTradisional[j + 1]) {
      let temp = numberOutputTradisional[j];
      numberOutputTradisional[j] = numberOutputTradisional[j + 1];
      numberOutputTradisional[j + 1] = temp;
    }
  }
}
console.log(numberOutputTradisional);
console.timeEnd('TRADISIONAL');
