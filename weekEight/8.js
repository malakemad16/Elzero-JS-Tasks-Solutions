console.log("Random Arguments Function Challenge");
console.log("التكليف 05")
function showDetails(a, b, c) {
  let result = [];
  typeof a == "string" ? result[0] = `Hello ${a}` :
    typeof a == "number" ? result[1] = `Your Age Is ${a}` :
      a == true ? result[2] = `You Are Available For Hire` :
        result[2] = (`You Are Not Available For Hire`);
  typeof b == "string" ? result[0] = `Hello ${b}` :
    typeof b == "number" ? result[1] = `Your Age Is ${b}` :
      b == true ? result[2] = `You Are Available For Hire` :
        result[2] = `You Are Not Available For Hire`;
  typeof c == "string" ? result[0] = `Hello ${c}` :
    typeof c == "number" ? result[1] = `Your Age Is ${c}` :
      c == true ? result[2] = `You Are Available For Hire` :
        result[2] = `You Are Not Available For Hire`;
  console.log(result.join(", "));
}
showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
// ==================================================
// تكليفات JavaScript Bootcamp من الدرس 057 إلى 063
console.log("==================================================");
console.log("تكليفات JavaScript Bootcamp من الدرس 057 إلى 063");
console.log("==================================================");
// التكليف 01
console.log("التكليف 01");
function sayHello(theName, theGender) {
  // Your Code Here
  if (theGender === "Male")
    console.log(`Hello Mr ${theName}`);
  else if (theGender === "Female")
    console.log(`Hello Miss ${theName}`);
  else
    console.log(`Hello ${theName}`);
}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
// التكليف 02
console.log("===========");
console.log("التكليف 02");
function calculate(firstNum, secondNum, operation = "add") {
  // Your Code Here
  if (typeof secondNum === "undefined") {
    console.log(`Second Number Not Found`);
    return;
  }
  if (operation === "add")
    console.log(firstNum + secondNum);
  else if (operation === "subtract")
    console.log(firstNum - secondNum);
  else
    console.log(firstNum * secondNum);
}
// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
// التكليف 03
console.log("===========");
console.log("التكليف 03");
function ageInTime(theAge) {
  // Your Code Here
  if (theAge <= 10 || theAge >= 110) {
    console.log(`Age Out Of Range`);
    return
  }
  console.log(`Your Age Is ${theAge} year`);
  console.log(`Months => ${theAge * 12} Month`);
  console.log(`Weeks => ${theAge * 12 * 4} Week`);
  console.log(`Days => ${theAge * 12 * 4 * 30} day`);
  console.log(`Hours => ${theAge * 12 * 4 * 30 * 24} Hour`);
}
// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
// ==========
// التكليف 04
document.write(`<h3>التكليف 04</h3>`);
function createSelectBox(startYear, endYear) {
  // Your Code Here
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);
// ==========
// التكليف 06
console.log("===========");
console.log("التكليف 06");
function multiply(...nums) {
  let result = 1;
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] == "string")
      continue;
    result *= Math.trunc(nums[i]);
  }
  console.log(result);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000