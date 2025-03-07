// تكليفات JavaScript Bootcamp من الدرس 031 إلى 032
console.log("تكليفات JavaScript Bootcamp من الدرس 031 إلى 032");
console.log("==================================================");
console.log("التكليف 01");
// التكليف 01
console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(!( -50 > +"-40")); // true
console.log(10 < -"-40"); // true
console.log(!( "10" === 10)); // true
console.log(20 > false); // true
console.log(`===========`);
console.log("التكليف 02");
// =======================
// التكليف 02
let num__1 = 10;
let num__2 = 20;
console.log(num__1 != num__2); // true
console.log(!(num__1 == num__2)); // true
console.log(num__1 < num__2); // true
console.log(num__2 > num__1); // true
console.log(num__1 < num__2 || num__2 > num__1); // true
console.log(typeof num__1 == typeof num__2); // true
console.log(`===========`);
console.log("التكليف 03");
// =========================
// التكليف 03
let a1 = 20;
let b = 30;
let c = 10;
console.log(a1 < b && a1 > c || a1 < b); // true
console.log(a1 < b || a1 > c); // true
console.log((a1 < b) && !(a1 > b) && !(a1 < c) && (a1 > c)); // true
