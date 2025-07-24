// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// output angka terakhir
// console.log(numbers[10]);
// total elemen dan total index selisih 1
// console.log(numbers[numbers.length - 1]);

// length tidak hanya untuk array, tetapi untuk string

// const country = 'INDONESIA';
// console.log(country.length);
// console.log(country[country.length - 1]);

// pertanyaan: number 1,2,3,4,5 === 5,4,3,2,1
// Jadi kalo: string: INDONESIA ==== AISENODNI
// const country = 'INDONESIA';
// let count = country.length - 1; // 9
// while (count >= 0) {
//   console.log(country[count]);
//   count--;
// }

// modern
// Array: push, pop, unshif, shift, slice

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// console.log(numbers);
// numbers.push(15); // tambah ke belakang
// numbers.unshift(15); // tambah di depan
// numbers.pop(); // hapus elemen di akhir
// numbers.shift(); // hapus elemen di awal
// start=index, end=element, menghasilkan array baru
// const newNumbers = numbers.slice(3, 8);
// console.log(newNumbers);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// // Kalo Andy mau mencetak angka yang dimulai dari 4
// // dan dia ingin angkanya genap. Bagaimana?
// // output: 4, 6, 8, 10

// for (let i = 0; i < numbers.length; i++) {
//   // console.log(numbers[i]);
//   // dimulai dari angka 4
//   if (numbers[i] >= 4 && numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//     // if (numbers[i] % 2 === 0) {
//     //   console.log(numbers[i]);
//     // }
//   }
// }

const numbers = [11, 1, 6, 10, 9, 7, 2, 4, 5, 3, 8];
// Bagaimana hasilnya urut dari terkecil ke terbesar? [4, 6, 8, 10]

// modern
const numberOutput = numbers
  .filter((num) => num >= 4 && num % 2 == 0)
  .sort((a, b) => a - b);
console.log(numberOutput);

// Tradisional??
// Filter
let output = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 4 && numbers[i] % 2 === 0) {
    output.push(numbers[i]);
  }
}

// console.log(output);

// sort --> yang jelas ini pasti 2x looping
// bubble sort => bandingkan 1 persatu (kesamping)
// [6, 10, 4, 8]; --> 6 ---- 10 | 10 ---- 8 | 6 8 10 | 10 --- 4 | 6 8 4 10
// [6, 8, 4] 6 ---- 8 | 8 ---- 4 | 6 4 8
// [6, 4] 6 ---- 4 | 4 6
// [4, 6, 8, 10]

for (let i = 0; i < output.length - 1; i++) {
  // console.log('i-', output[i]);
  for (let j = 0; j < output.length - 1 - i; j++) {
    // console.log('j-', output[j]);
    // tanda "<" berarti desc | tanda ">" berarti asc
    if (output[j] > output[j + 1]) {
      // simpan dulu hasil awal
      // metode tukar
      let temp = output[j]; // 10
      output[j] = output[j + 1]; // 4
      output[j + 1] = temp; // 10
    }
  }
}
console.log(output); // [ 6, 10, 4, 8 ]

// 1 --> 6 & 10 --> OK
// 2 --> 10 & 4 --> TUKAR
// [6, 10, 4, 8]
// 3 --> 10 & 8 --> TUKAR
// [6, 4, 10, 8]
// 4 --> 6 & 4 --> TUKAR
// [6, 4, 8, 10]
// output
// [4, 6, 8, 10]
