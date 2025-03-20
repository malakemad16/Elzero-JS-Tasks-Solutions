/*
  Higher Order Functions Challenges
  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code
  You Cannot Use
  - Numbers
  - Letters
  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/
console.log("Higher Order Functions Challenge");
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let solution = myString
    .split("")
    .map(function (ele) {
        return ele === "_" ? " " : ele;
    })
    .filter(function (ele, i, arr) {
        return isNaN(parseInt(ele)) && ele !== ',' && !ele.includes(arr[arr.length - true]);
    })
    .reduce(function (acc, curr) {
        return acc === curr ? acc : acc + curr;
    });
console.log(solution); // Elzero Web School
// تكليفات JavaScript Bootcamp من الدرس 071 إلى 078
console.log("==================================================");
console.log("تكليفات JavaScript Bootcamp من الدرس 071 إلى 078");
console.log("==================================================");
// التكليف 01
console.log("التكليف 01");
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let result = mix
    .map((ele) => isNaN(ele) ? ele : "")
    .reduce((acc, curr) => acc + curr);
console.log(result);// Elzero
// التكليف 02
console.log("===========");
console.log("التكليف 02");
let myString_2 = "EElllzzzzzzzeroo";
let result_2 = myString_2
    .split("")
    .filter((ele, i, arr) => ele !== arr[i - 1])
    .reduce((acc, curr) => acc + curr);
console.log(result_2);// Elzero
// التكليف 03
console.log("===========");
console.log("التكليف 03");
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let result_3 = myArray
    .join("")
    .split("")
    .filter((ele) => ele !== ",")
    .reduce((acc, curr) => acc + curr);
console.log(result_3);// Elzero
// التكليف 04
console.log("===========");
console.log("التكليف 04");
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let result_4 = numsAndStrings
    .filter(function (ele) {
        return !isNaN(ele);
    })
    .map((ele => -ele));
console.log(result_4);// [-1, -10, 10, 20, -5, -3]
// التكليف 05
console.log("===========");
console.log("التكليف 05");
let nums = [2, 12, 11, 5, 10, 1, 99];
let result_5 = nums
    .reduce((acc, curr) => {
        return curr % 2 == 1 ? acc + curr : acc * curr;
    }, 1);
console.log(result_5);// 500
