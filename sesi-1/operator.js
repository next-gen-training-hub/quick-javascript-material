const customers = [
  { name: 'Joko', status: 'DONE' }, // 0
  { name: 'Andy', status: 'DONE' }, // 1
  { name: 'Brown', status: 'PROCESS' }, // 2
  { name: 'Brown', status: null }, // 2
];

// OPERATOR
console.log(customers[3].status === 'DONE'); // 1
console.log(customers[3].status !== 'PROCESS'); // 2

// TRUE && TRUE = TRUE (kunci)
// TRUE && FALSE = FALSE

// TRUE || TRUE = TRUE
// FALSE || FALSE = FALSE (kunci)
