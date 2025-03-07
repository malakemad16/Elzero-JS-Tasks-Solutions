// تكليفات JavaScript Bootcamp من الدرس 001 إلى 009
console.log("===================================================");
console.log(" تكليفات JavaScript Bootcamp من الدرس 001 إلى 009");
console.log("===================================================");
console.log(" التكليف 02");
// التكليف 02
document.write('<h1 style="color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial;">Elzero</h1>');
document.write("<h2>Elzero</h2>");
document.querySelector("h2").style.color = "blue";
document.querySelector("h2").style.fontSize = "80px";
document.querySelector("h2").style.fontWeight = "bold";
document.querySelector("h2").style.textAlign = "center";
document.querySelector("h2").style.fontFamily = "Arial";
console.log("============");
console.log(" التكليف 03");
/* ===================== */
// التكليف 03
console.log("%cElzero %cWeb %cSchool",
    "color: red; font-size: 40px;",
    "color: green; font-weight: bold; font-size: 40px;",
    "color: white; background-color: blue; font-size: 40px");
console.log("============");
console.log(" التكليف 04");
/* ===================== */
// التكليف 04
console.group("Group One");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.group("Group Two");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.log("============");
console.log(" التكليف 05");
/* ===================== */
// التكليف 05
console.table(["Osama", "Elzero", "Web", "School", "<3"]);
console.log("============");
console.log(" التكليف 06");
/* ===================== */
// التكليف 06
// console.log("Iam In Console");
// document.write("Iam In Page");
/* console.log("Iam In Console");
document.write("Iam In Page"); */