//Arrow Function Challenge
console.log("Arrow Function Challenge");
let names = function (...names) {
    return `String [${names.join("], [")}] => Done !`;
};
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !
let namesArrow = (...names) => `String [${names.join("], [")}] => Done !`;
console.log(namesArrow("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !
let myNumbers = [20, 50, 10, 60];
let calc = (one, two, ...nums) => one + two + +nums;
console.log(calc(10, myNumbers[0], myNumbers[1])); // 80
// تكليفات JavaScript Bootcamp من الدرس 064 إلى 070
console.log("==================================================");
console.log("تكليفات JavaScript Bootcamp من الدرس 064 إلى 070");
console.log("==================================================");
// التكليف 01
console.log("التكليف 01");
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        // Write Your Code Here
        // Osama Mohamed => Osama M.
        // Ahmed ali => Ahmed A.
        let index = zName.indexOf(" ");
        let fName = zName.substr(0, index);
        return `${fName} ${zName[index + 1].toUpperCase()}.`;
    }
    function ageWithMessage(zAge) {
        // Write Your Code Here
        // 38 Is My Age => Your Age Is 38
        // 32 Is The Age => Your Age Is 32
        return `${zAge[0]}${zAge[1]}`;
    }
    function countryTwoLetters(zCountry) {
        // Write Your Code Here
        // Egypt => You Live In EG
        // Syria => You Live In SY
        return `${zCountry[0].toUpperCase()}${zCountry[1].toUpperCase()}`;
    }
    function fullDetails() {
        // Write Your Code Here
        return `Hello ${namePattern(zName)}, Your Age Is ${ageWithMessage(zAge)}, You Live In ${countryTwoLetters(zCountry)}`
    }
    return fullDetails(); // Do Not Edit This
}
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG
console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
// التكليف 02
console.log("===========");
console.log("التكليف 02");
function itsMe() {
    return `Iam A Normal Function`;
}
console.log(itsMe()); // Iam A Normal Function
let itsMe_2 = _ => `Iam AN Arrow Function`;
console.log(itsMe_2());

function urlCreate(protocol, web, tld) {
    return `${protocol}://www.${web}.${tld} Normal Function`;
}
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
let urlCreate_2 = (protocol, web, tld) => `${protocol}://www.${web}.${tld} Arrow Function`;
console.log(urlCreate_2("https", "elzero", "org")); // https://www.elzero.org
// التكليف 03
console.log("===========");
console.log("التكليف 03");
function checker(zName) {
    return function (status) {
        return function (salary) {
            return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
        };
    };
}
console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
let checker_2 = (zName) => (status) => (salary) =>
    status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
console.log(checker_2("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker_2("Ahmed")("Not Available")()); // Iam Not Avaialble
// التكليف 04
console.log("===========");
console.log("التكليف 04");
function specialMix(...data) {
    let result = 0;
    for (let i = 0; i < data.length; i++) {
        let num = parseInt(data[i]);
        if (!isNaN(num)) {
            result += num;
        }
    }
    if (result === 0) {
        return `All Is Strings`;
    }
    return result;
}
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings