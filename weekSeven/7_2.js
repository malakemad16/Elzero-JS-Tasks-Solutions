// Loop Challenge
document.write(`<h2>Loop Challange</h2>`);
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

let length = 0;
for (let i = 0; i < myAdmins.length; i++) {
    if (myAdmins[i] == "Stop")
        break;
    length++;
}
document.write(`<div>We Have ${length} Admins</div>`);
document.write(`</hr>`);
for (let i = 0; i < length; i++) {
    document.write(`<div>The Admin For Team ${i + 1} Is ${myAdmins[i]}
    <h3>Team Members: </h3>`);
    let k = 1;
    for (let j = 0; j < myEmployees.length; j++) {
        if (myEmployees[j][0] == myAdmins[i][0]) {
            document.write(`<p>- ${k++} ${myEmployees[j]}</p>`);
        }
    }
    document.write(`</div>`);
    document.write(`<hr>`)
}
console.log("==================================================");
console.log("تكليفات JavaScript Bootcamp من الدرس 054 إلى 056");
console.log("==================================================");
// تكليفات JavaScript Bootcamp من الدرس 054 إلى 056
console.log("التكليف 01");
let friends_2 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index_2 = 0;
let counter = 0;
while (index_2 < friends_2.length) {
    if (typeof friends_2[index_2] == "number" || friends_2[index_2][0] == "A") {
        index_2++;
        continue;
    }
    console.log(`${++counter} => ${friends_2[index_2]}`);
    index_2++;
}
