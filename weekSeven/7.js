// تكليفات JavaScript Bootcamp من الدرس 048 إلى 053
console.log("تكليفات JavaScript Bootcamp من الدرس 048 إلى 053");
console.log("==================================================");
console.log("التكليف 01")
// التكليف 01
let start = 10;
let end = 100;
let exclude = 40;
for (let i = start; i <= end; i += start) {
    if (i === exclude) continue;
    console.log(i);
}
console.log("==========");
console.log("التكليف 02");
// ==========
// التكليف 02
let start_1 = 10;
let end_1 = 0;
let stop = 3;
for (let i = start_1; i >= stop; i--) {
    if (i < start_1) console.log(`${end_1}${i}`);
    else console.log(`${i}`);
}
console.log("===========");
console.log("التكليف 03");
// ===========
// التكليف 03
let start_2 = 1;
let end_2 = 6;
let breaker = 2;
for (let i = start_2; i <= end_2; i++) {
    console.log(`${i}`);
    console.log(`-- ${breaker}`);
    console.log(`-- ${end_2 - breaker}`);
}
console.log("===========");
console.log("التكليف 04");
// ===========
// التكليف 04
let index = 10;
let jump = 2;
for (; ;) {
    // Write Your Code Here
    console.log(index);
    index -= jump;
    if (index == jump) break;
}
console.log("===========");
console.log("التكليف 05");
// ===========
// التكليف 05
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let k = letter.length;
for (let i = k - k; i < friends.length; i++) {
    if (friends[i][letter.length - 1] == letter.toUpperCase()) {
        continue;
    }
    console.log(`${k++} => ${friends[i]}`);
}
console.log("===========");
console.log("التكليف 06");
// ===========
// التكليف 06
let start_3 = 0;
let swappedName = "elZerO";
let changChar = [];
for (let i = start_3; i < swappedName.length; i++) {
    if (swappedName[i] == swappedName[i].toUpperCase())
        changChar.push(swappedName[i].toLowerCase());
    else
        changChar.push(swappedName[i].toUpperCase());
}
console.log(changChar.join(""));
console.log("===========");
console.log("التكليف 07");
// ===========
// التكليف 07
let start_4 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
mix.sort().shift();
for (let i = start_4; i < mix.length; i++) {
    if (typeof mix[i] == "string")
        break;
    console.log(mix[i]);
}