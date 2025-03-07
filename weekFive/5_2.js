/*
If Condition Challenge
*/
console.log("If Condition Challenge");
let a = 10;
if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}
// Write Previous Condition With Ternary If Syntax
(a < 10) ? console.log(10) :
  (a >= 10 && a <= 40) ? console.log("10 To 40") :
    (a > 40) ? console.log("> 40") :
      console.log("Unknown");

let st = "Elzero Web School";
if ((st.length * 2).toString() === "34") {
  console.log("Good 1");
}
// W Position May Change
if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
  console.log("Good 2");
}
if (st !== "string") {
  console.log("Good 3");
}
if ((typeof (st.length)).toString() === "number") {
  console.log("Good 4");
}
if ((st.slice(0, 6)).repeat(2) === "ElzeroElzero") {
  console.log("Good 5");
}
// تكليفات JavaScript Bootcamp من الدرس 033 إلى 037
console.log("===================================================");
console.log(" تكليفات JavaScript Bootcamp من الدرس 033 إلى 037");
console.log("===================================================");
console.log("التكليف 01");
// =========================
// التكليف 01
// Test Case 1
let num_1 = 9; // "009"
if (num_1 < 10) console.log(`00${num_1}`);
// Test Case 2
let num_2 = 20; // "020"
if (num_2 > 10 && num_2 < 100) console.log(`0${num_2}`);
// Test Case 3
let num_3 = 110; // "110"
if (num_3 >= 100) console.log(num_3);
console.log("===========");
console.log("التكليف 02");
// =========================
// التكليف 02
let num01 = 9;
let str = "9";
let str2 = "20";
if (num01 == str) {
  console.log(`${num01} Is The Same Value As ${str}`);
}
if (num01 == str && num01 !== str) {
  console.log(`${num01} Is The Same Value As ${str} But Not The Same Type`);
}
if (num01 !== str2) {
  console.log(`${num01} Is Not The Same Value Or The Same Type As ${str2}`);
}
if (typeof str === typeof str2 && str != str2) {
  console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
}
console.log("===========");
console.log("التكليف 03");
// =========================
// التكليف 03
let num001 = 10;
let num002 = 30;
let num003 = "30";
if (num003 > num001 && typeof num003 != typeof num002) {
  console.log(`${num003} Is Larger Than ${num001} And Type string Not The Same Type As number `);
}
if (num003 > num001 && num002 == num003 && typeof num002 != typeof num003) {
  console.log(`${num003} Is Larger Than ${num001} And Value Is The Same As ${num002} And Type String Is Not The Same As Number`);
}
console.log("===========");
console.log("التكليف 04");
// =========================
// التكليف 04

// Edit What You Want Here
let num1 = 15;
let num2 = 1;
let num3 = 15;
let num4 = 50;
/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/
// Condition 1
if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 2
if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 3
if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 4
if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 5
if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 6
if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 7
if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}