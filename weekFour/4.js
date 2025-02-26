// تكليفات JavaScript Bootcamp من الدرس 023 إلى 026

/* Number Challenge */
let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(Math.min(a,b,c,d)));//2
// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a , Math.trunc(d))); // 10000
// Get Integer "2" From d Variable With 4 Methods
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(parseInt(d));
// Use Variables b + d To Get This Valus
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round((Math.floor(b) / Math.ceil(d)).toFixed(2))); // 67 => Number
/* ================= */
/* التكليف 01 */
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(1e5); // 100000
console.log(10**5); // 100000
console.log(0.5e5 + 0.5e5); // 100000
console.log(Number("100000")); // 100000
console.log(+"100000"); // 100000
console.log(100000.000); // 100000
console.log(Math.pow(10,5)); // 100000
console.log(Math.floor(100000.565650)); // 100000
/* ================= */
/* التكليف 02 */
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991
/* =============== */
/* التكليف 03 */
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16
/* ================= */
/* التكليف 04 */
let myVar = "100.56789 Views";
console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57
/* ================ */
/* التكليف 05 */
let num = 10;
console.log(+Number.isInteger(num) + +Number.isInteger(num)); // 2
/* =============== */
/* التكليف 06 */
let flt = 10.4;
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(+Number(flt).toFixed(0)); // 10
console.log(Number.parseInt(flt)); // 10
/* ============= */
/* التكليف 07 */
console.log(Math.trunc(Math.random() * 4));// 0 || 1 || 2 || 3 || 4