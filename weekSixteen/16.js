// Destructuring Challenge
console.log("Destructuring Challenge");
let chosen = 1;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

if (chosen == 1) {
    let [{ title, age, available, skills: [, skill] }, ,] = myFriends
    console.log(title);
    console.log(age);
    (available) ? console.log("Available") : console.log("Not Avilable");
    console.log(skill);
} else if (chosen == 2) {
    let [, { title, age, available, skills: [, skill] },] = myFriends
    console.log(title);
    console.log(age);
    (available) ? console.log("Available") : console.log("Not Avilable");
    console.log(skill);
} else {
    let [, , { title, age, available, skills: [skill] },] = myFriends
    console.log(title);
    console.log(age);
    (available) ? console.log("Available") : console.log("Not Avilable");
    console.log(skill);
}
// تكليفات JavaScript Bootcamp من الدرس 115 إلى 122
console.log("=================================================");
console.log("تكليفات JavaScript Bootcamp من الدرس 115 إلى 122");
console.log("=================================================");
console.log("التكليف 01");
let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
let [a, , , , e] = myNumbers;
console.log(a * e); // 5

console.log("==========");
console.log("التكليف 02");
let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here
let [a2, b, c, [d, e2, [f, g]]] = mySkills
console.log(`My Skills: ${a2}, ${b}, ${c}, ${d}, ${e2}, ${f}, ${g}`);
// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

console.log("==========");
console.log("التكليف 03");
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here
let mybestFriends = arr1.concat(arr2, arr3); // returns an array that gather all these names
let [c2, , , , , , , a3, b2] = mybestFriends;
console.log(`My Best Friends: ${a3}, ${b2}, ${c2}`);
// My Best Friends: Shady, Mahmoud, Ahmed

console.log("==========");
console.log("التكليف 04");
const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here
let { age: a4, working: w, country: c3, hobbies: [h1, , h3] } = member;
console.log(`My Age Is ${a4} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working
console.log(`I Live in ${c3}`);
// I Live in Egypt
console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming

console.log("==========");
console.log("التكليف 05");
const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
        "Oath In Felghana": ["USA", "Japan"],
        "Ark Of Napishtim": {
            US: "20 USD",
            JAP: "10 USD",
        },
        Origin: "30 USD",
    },
};
// Write Your Destructuring Assignment/s Here
let { title: t, developer: d2, releases: { Origin: or } } = game
let [u, j] = game.releases["Oath In Felghana"];
let { US: u_price, JAP: j_price } = game.releases["Ark Of Napishtim"];
let [o, a5] = Object.keys(game.releases);

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style
console.log(`And I Love ${d2} Games`);
// And I Love Falcom Games
console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan
console.log(`Although I Love ${a5}`);
// Although I Love Ark Of Napishtim
console.log(`${a5} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD
console.log(`${a5} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD
console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD