const filtering = (arr) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 4 && arr[i] % 2 === 0) {
      output.push(arr[i]);
    }
  }
  return output;
};

const modernSort = (arr) => {
  return [...arr].sort((a, b) => a - b);
};

const tradisionalSort = (arr) => {
  let numberOutputTradisional = [...arr];
  for (let i = 0; i < numberOutputTradisional.length - 1; i++) {
    for (let j = 0; j < numberOutputTradisional.length - 1 - i; j++) {
      if (numberOutputTradisional[j] > numberOutputTradisional[j + 1]) {
        let temp = numberOutputTradisional[j];
        numberOutputTradisional[j] = numberOutputTradisional[j + 1];
        numberOutputTradisional[j + 1] = temp;
      }
    }
  }

  return numberOutputTradisional;
};

// Filter
const numbers = Array.from({ length: 50000 }, () =>
  Math.floor(Math.random() * 50000)
);
const filtered = filtering(numbers);

console.time('MODERN');
console.log(modernSort(filtered));
console.timeEnd('MODERN');

console.time('TRADISIONAL');
console.log(tradisionalSort(filtered));
console.timeEnd('TRADISIONAL');
