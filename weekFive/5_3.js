// Switch And If Condition Challenge
console.log("Switch And If Condition Challenge");
console.log("==================================");
console.log("First Challenge");
let job = "Manager";
let salary = 0;
if (job === "Manager") {
    salary = 8000;
} else if (job === "IT" || job === "Support") {
    salary = 6000;
} else if (job === "Developer" || job === "Designer") {
    salary = 7000;
} else {
    salary = 4000;
}
console.log(`Salary from if-condition : ${salary}`);
switch (job) {
    case "Manager":
        salary = 8000;
        break;
    case "IT":
    case "Support":
        salary = 6000;
        break;
    case "Developer":
    case "Designer":
        salary = 7000;
        break;
    default:
        salary = 4000;
}
console.log(`Salary from switch : ${salary}`);
// ===============
console.log("================");
console.log("Second Challenge");
let holidays = 0;
let money = 0;
switch (holidays) {
    case 0:
        money = 5000;
        console.log(`My Money is ${money}`);
        break;
    case 1:
    case 2:
        money = 3000;
        console.log(`My Money is ${money}`);
        break;
    case 3:
        money = 2000;
        console.log(`My Money is ${money}`);
        break;
    case 4:
        money = 1000;
        console.log(`My Money is ${money}`);
        break;
    case 5:
        money = 0;
        console.log(`My Money is ${money}`);
        break;
    default:
        money = 0;
        console.log(`My Money is ${money}`);
}
if (holidays == 0) {
    money = 5000;
    console.log(`My Money is ${money}`);
}
else if (holidays == 1 || holidays == 2) {
    money = 3000;
    console.log(`My Money is ${money}`);
}
else if (holidays == 3) {
    money = 2000;
    console.log(`My Money is ${money}`);
}
else if (holidays == 4) {
    money = 1000;
    console.log(`My Money is ${money}`);
}
else if (holidays == 5) {
    money = 0;
    console.log(`My Money is ${money}`);
}
else {
    money = 0;
    console.log(`My Money is ${money}`);
}
console.log("==================================================");
console.log("تكليفات JavaScript Bootcamp من الدرس 038 إلى 039");
console.log("==================================================");
console.log("التكليف 01");
let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
day = `${day.trim().charAt(0).toUpperCase()}${day.trim().slice(1)}`;

switch (day) {
    case "Friday": case "Saterday": case "Sunday":
        console.log("No Appointments Available");
        break;
    case "Monday": case "Thursday":
        console.log("Available From 10:00 AM To 5:00 PM");
        break;
    case "Tuesday":
        console.log("Available From 10:00 AM To 6:00 PM");
        break;
    case "Wednesday":
        console.log("Available From 10:00 AM To 7:00 PM");
        break;
    default:
        console.log("It's Not A Valid Day");
}