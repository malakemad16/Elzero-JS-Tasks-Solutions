// تكليفات JavaScript Bootcamp من الدرس 018 إلى 022
// operator challange

/* Challenge 1 */
let a = 10;
let b = "20";
let c = 80;
console.log(++a + +b++ + +c++ - +a++);//100
console.log(++a + -b + +c++ - -a++ + +a);//100
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);//100
/* ================== */
/* Challenge 2 */
let d = "-100";
let e = "20";
let f = 30;
let g = true;
// Only Use Variables Value
// Do Not Use Variable Twice
console.log(-d * +e);  // 2000 
console.log(-(--d) + f + ++e * ++g);// 173
/* ================= */
/* التكليف 01 */
// Replace ? With Arithmetic Operators
console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0
/* =================== */
/* التكليف 02 */
let num = 3;
// Solution One
console.log(num + num); // 6
// Solution Two
console.log(num * num - num ); // 6
// Soultion Three
console.log(Math.pow(num , num)/num -num); // 6
// Soultion Four
console.log(num * (num - +true)); // 6
// Solution Five
console.log(num + true + true + true); // 6
// Solution Six
console.log(num += num); // 6
/* =============== */
/* التكليف 03 */
let num3 = "10";
// Solution One
console.log(+num3 + +num3); // 20
// Solution Two
console.log((+num3 / +num3 + +num3 / +num3)* +num3); // 20
// Solution Three
console.log(Number(num3)+Number(num3)); // 20
// Solution Four
console.log(+num3 + Number(num3)); // 20
/* ================ */
/* التكليف 04 */
let points = 10;
points++;
points++;
points++;
console.log(points); // 13
points--;
points--;
points--;
points--;
points--;
console.log(points); // 8;