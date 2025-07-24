// Primitive & Non-Primitive

// Primitive: string, number, boolean, dst
// '', "", 0-...., true|false, null, undefined

let city = 'Jakarta Selatan';
// city = 20;
console.log(typeof city); // cek tipe data apa

// Non-Primitive: Array, Object
// -> [] | { }
const numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers);
// cek struktur
console.log(Array.isArray(numbers));

const people = {
  name: 'Jution',
  address: 'Jl. Abdul Kadir',
};
console.log(typeof people);
console.log(typeof people === 'object' && !Array.isArray(people));

const customers = [
  { name: 'Joko', status: 'DONE' }, // 0
  { name: 'Andy', status: 'DONE' }, // 1
  { name: 'Brown', status: 'PROCESS' }, // 2
  { name: 'Brown', status: null }, // 2
];

// OPERATOR
console.log(customers[3].status === 'DONE'); // 1
console.log(customers[3].status !== 'PROCESS'); // 2

// status: DONE, PROCESS
// -->
