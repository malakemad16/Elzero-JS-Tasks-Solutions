// تكليفات JavaScript Bootcamp من الدرس 079 إلى 085
console.log("تكليفات JavaScript Bootcamp من الدرس 079 إلى 085");
console.log("==================================================");
// التكليف 01
console.log("التكليف 01");
// Create Your Object Here
let member = {
    name: "Elzero",
    age: 38,
    country: "Egypt",
    fullDetails: function (name, age, country) {
        return `My Name Is ${this.name}, My Age Is ${this.age}, I Live In ${this.country}`;
    },
};
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());// My Name Is Elzero, My Age Is 38, I Live in Egypt
// التكليف 02
console.log("===========");
console.log("التكليف 02");
// Method One
// Create Your Object Here
let objMethodOne = {
    property: "Method One",
};
console.log(objMethodOne.property); // "Method One"
// Method Two
// Create Your Object Here
let objMethodTwo = new Object({
    property: "Method Two",
});
console.log(objMethodTwo.property); // "Method Two"
// Method Three
// Create Your Object Here
let objMethodThree = {};
objMethodThree.property = "Method Three";
console.log(objMethodThree.property); // "Method Three"
// Method Four
// Create Your Object Here
let objMethodFour = Object.create({
    property: "Method Four",
});
console.log(objMethodFour.property); // "Method Four"
// التكليف 03
console.log("===========");
console.log("التكليف 03");
let a = 1;
let threeNums = {
    b: 2,
    c: 3,
    d: 4,
};
let twoNums = {
    e: 5,
    f: 6,
};
let finalObject = Object.assign({ a }, threeNums, twoNums);
// Create Your Object Here in One Line
console.log(finalObject);
// التكليف 04
console.log("===========");
console.log("التكليف 04");
// The Object To Work With
let myFavGames = {
    "Trinity Universe": {
        publisher: "NIS America",
        price: 40,
    },
    "Titan Quest": {
        publisher: "THQ",
        bestThree: {
            one: "Immortal Throne",
            two: "Ragnarök",
            three: "Atlantis",
        },
        price: 50,
    },
    YS: {
        publisher: "Falcom",
        bestThree: {
            one: "Oath in Felghana",
            two: "Ark Of Napishtim",
            three: "origin",
        },
        price: 40,
    },
};
// Code One => How To Get Object Length ?
let objectLength = Object.getOwnPropertyNames(myFavGames).length;
//Object.getOwnPropertyNames(myFavGames)=>returns an array of game names
console.log(objectLength);
for (let i = 0; i < objectLength; i++) {
    console.log(`The Game Name Is ${Object.getOwnPropertyNames(myFavGames)[i]}`);
    console.log(`The Publisher Is ${myFavGames[Object.getOwnPropertyNames(myFavGames)[i]].publisher}`);
    console.log(`The Price Is ${myFavGames[Object.getOwnPropertyNames(myFavGames)[i]].price}`);
    // Check If Nested Object Has Property (bestThree)
    if (myFavGames[Object.getOwnPropertyNames(myFavGames)[i]].bestThree !== undefined) {
        console.log("- Game Has Releases");
        console.log(`First => ${myFavGames[Object.getOwnPropertyNames(myFavGames)[i]].bestThree.one}`);
        console.log(`Second => ${myFavGames[Object.getOwnPropertyNames(myFavGames)[i]].bestThree.two}`);
        console.log(`Third => ${myFavGames[Object.getOwnPropertyNames(myFavGames)[i]].bestThree.three}`);
    }
    console.log("#".repeat(20));
}
console.log("=================");
console.log("cleaner code");
console.log("=================");
let myFavGames_2 = {
    "Trinity Universe": { publisher: "NIS America", price: 40 },
    "Titan Quest": { publisher: "THQ", bestThree: { one: "Immortal Throne", two: "Ragnarök", three: "Atlantis" }, price: 50 },
    YS: { publisher: "Falcom", bestThree: { one: "Oath in Felghana", two: "Ark Of Napishtim", three: "origin" }, price: 40 },
};

Object.keys(myFavGames_2).forEach(game => {
    console.log(`The Game Name Is ${game}`);
    console.log(`The Publisher Is ${myFavGames_2[game].publisher}`);
    console.log(`The Price Is ${myFavGames_2[game].price}`);
    if (myFavGames_2[game].bestThree) {
        console.log("- Game Has Releases");
        Object.values(myFavGames_2[game].bestThree).forEach((release, index) => {
            console.log(`${["First", "Second", "Third"][index]} => ${release}`);
        });
    }
    console.log("#".repeat(20));
});