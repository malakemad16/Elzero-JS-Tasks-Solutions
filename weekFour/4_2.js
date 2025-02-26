/* تكليفات JavaScript Bootcamp من الدرس 027 إلى 030 */
/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/
let a_2 = "Elzero Web School";
// Include This Method In Your Solution [slice, charAt]
console.log(a_2.charAt(2).toUpperCase() + a_2.slice(3,6)); // Zero
// 8 H
console.log(a_2.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH
// Return Array
console.log(a_2.split(" ",1)); // ["Elzero"]
// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a_2.substr(0,6)} ${a_2.substr(11,6)}`); // Elzero School
// Solution Must Be Dynamic Because String May Changes
console.log( a_2.charAt(0).toLowerCase() +
    a_2.substring(1, a_2.length - 1).toUpperCase() +
    a_2.charAt(a_2.length - 1).toLowerCase()); // eLZERO WEB SCHOOl
/* ================ */
/* التكليف 01 */
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName.at(0).repeat(3).toLowerCase()); // eee
/* =============== */
/* التكليف 02 */
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
console.log(word.includes(letterE)); // True