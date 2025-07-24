// basic: FOR, WHILE, DO..WHILE
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);
// console.log(numbers[5]);
// console.log(numbers.length); // 7

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// WHILE DO --> kita cek dulu baru jalankan
// console.log('sebelum loop');
// let condition = 5;
// while (condition > 0) {
//   // SELAMA kondisi TRUE akan di jalankan
//   console.log('loop:', condition);

//   // KONDISI untuk membuat FALSE, agar berhenti
//   condition--; // ini pasti di bawah
// }
// console.log('sesudah loop');

// let count = 0;
// while (count < 3) {
//   // SELAMA kondisi TRUE akan di jalankan
//   console.log('count ke-:', count + 1);

//   // KONDISI untuk membuat FALSE, agar berhenti
//   count++; // ini pasti di bawah
// }
// output: count ke-1,count ke-2,count ke-3,..

// DO WHILE --> kita jalankan baru di cek [ex: inputan]

// Latihan (1..3)

/**
 * Andy seorang petugas pengantar makanan ingin mengantar makanan ke gedung 20 lantai
 * Sebelum masuk andy harus menyampaikan kode kepada security (kode ini angka yang genap)
 * Jika kode sesuai maka andy boleh menggunakan sebuah lift
 * Jika tidak sesuai maka tidak boleh menggunakan lift
 */

/**
 * Andy seorang petugas pengantar makanan ingin mengantar makanan ke gedung 20 lantai
 * Andy menaiki sebuah lift lt 1 ... lt 20
 * Simulasikan Andy menaiki sebuah lift menggunakan perulangan,,
 * Andy berada di lt 1....Andy berada di lt 20
 */

/**
 * Andy seorang petugas pengantar makanan sudah selesai mengantar makanan dari gedung lt 20
 * Andy menggunakan sebuah lift untuk turun dari lt 20 ke lt 1
 * Simulasikan Andy turun dengan sebuah lift menggunakan perulangan,,
 * Andy berada di lt 20....Andy berada di lt 1
 */

// Cek dulu sesuai apa gak
// const randomCode = 242;
// // genap atau ganjil
// if (randomCode % 2 === 0) {
//   // looping naik dan turun
//   // for..while..do

//   let conditionToUp = 0;
//   while (conditionToUp < 20) {
//     console.log('Andi naik lift lt:', conditionToUp + 1);
//     conditionToUp++; // asign ++
//   }

//   console.log('Andy memberikan makanan');

//   const isDone = false; // tetap dan gak berubah
//   if (isDone) {
//     let conditionToBottom = 20;
//     while (conditionToBottom > 0) {
//       console.log('Andi turun lift lt:', conditionToBottom);
//       conditionToBottom--; // asign
//     }
//   }
// } else {
//   console.log('Andy tidak boleh menaiki sebuah lift');
// }
