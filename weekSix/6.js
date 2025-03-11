// Array Challenge
console.log("Array Challenge");
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
// Write Code Here
my.pop();
my.pop();
my.reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(my.slice(1, 3)); // ["Elham", "Mazero"]
console.log(`${my[1].slice(0, 2)}${my[2].slice(2)}`); // "Elzero"
console.log(`${my[2].slice(4, 5)}${my[0][0]}`); // "rO"
// ==================================================
// تكليفات JavaScript Bootcamp من الدرس 040 إلى 047
console.log("=================================================");
console.log("تكليفات JavaScript Bootcamp من الدرس 040 إلى 047");
console.log("=================================================");
console.log("التكليف 01");
// ===========
// التكليف 01
// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
// Method 1
let myFriends_1 = ["Ahmed", "Elham", "Osama", "Gamal"];
myFriends_1.length=num;
console.log(myFriends_1); // ["Ahmed", "Elham", "Osama"];
// Method 2
let myFriends_2 = ["Ahmed", "Elham", "Osama", "Gamal"];
myFriends_2.pop();
console.log(myFriends_2); // ["Ahmed", "Elham", "Osama"];
console.log("===========");
console.log("التكليف 02");
// ===========
// التكليف 02
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
// Write Your Code Here
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]
console.log("===========");
console.log("التكليف 03");
// ==========
// التكليف 03
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
console.log("===========");
console.log("التكليف 04")
// ==========
// التكليف 04
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
console.log(words[words.length-1][0].slice(website.length).toUpperCase()); // ZERO
console.log("===========");
console.log("التكليف 05");
// ==========
// التكليف 05
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
// Write 3 Solutions
// solution one 
for (let i = 0; i < haystack.length; i++) {
    if (needle == haystack[i]) console.log("Found");
}
// solution two
if (haystack.includes(needle)) console.log("Found");
// solution three
if (haystack.indexOf(needle) != -1) console.log("Found");
console.log("===========");
console.log("التكليف 06");
// ===========
// التكليف 06
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];
// Your Code Here
allArrs=arr1.concat(arr2).sort().join("").slice(arr2.length).toLowerCase();
console.log(allArrs); // fxy