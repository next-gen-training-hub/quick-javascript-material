// Kondisi: truthy -- falsy
// if, switch, ternary

// (boolean) == truthy[true] = !0,[],{} -- falsy[false] = 0,'',null, undefined
console.log('IF');

const condition = 0;
if (condition) {
  console.log('SEHAT');
} else {
  console.log('TIDAK SEHAT');
}

console.log('SWITCH');
switch (condition) {
  case 28:
    console.log('SEHAT');
    break;
  default:
    console.log('TIDAK SEHAT');
}

console.log('TERNARY');
condition ? console.log('SEHAT') : console.log('TIDAK SEHAT');
