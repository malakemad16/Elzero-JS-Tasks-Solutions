// Product With Title And Description Practice
document.write("<h2> Product With Title And Description Practice </h2>");
console.log("Product With Title And Description Practice");
for (let i = 1; i <= 5; i++) {
    let myElement = document.createElement("div");
    myElement.setAttribute("class", "container");
    let myHeading = document.createElement("h3");
    let myHeadingText = document.createTextNode(`Product ${i}`);
    let myParagraph = document.createElement("p");
    let myParagraphText = document.createTextNode("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat itaque laborum exercitationem cupiditate placeat tempore recusandae, porro, alias expedita enim nihil inventore voluptatibus. Suscipit ratione sed unde nobis voluptatibus adipisci?\
    ");
    myHeading.appendChild(myHeadingText);
    myParagraph.appendChild(myParagraphText);
    myElement.appendChild(myHeading);
    myElement.appendChild(myParagraph);
    myElement.appendChild(document.createElement("hr"));
    document.body.appendChild(myElement);
    console.log(myElement);
}
console.log("=================================================");
console.log("تكليفات JavaScript Bootcamp من الدرس 086 إلى 093");
console.log("=================================================");
// التكليف 01
console.log("التكليف 01");
console.log(document.getElementsByTagName("div")[0]);
console.log(document.getElementById("elzero"));
console.log(document.getElementsByClassName("element")[0]);
console.log(document.querySelector("div"));
console.log(document.querySelector("#elzero"));
console.log(document.querySelector(".element"));
console.log(document.querySelector("[name='js']"));
console.log(document.body.children[0]);
console.log(document.body.childNodes[1]);
console.log(document.body.firstElementChild);
// التكليف 02
console.log("===========");
console.log("التكليف 02");
for (let i = 0; i < 10; i++) {
    let myImage = document.images[i];
    myImage.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    myImage.alt = "Elzero Logo";
    console.log(myImage);
}
// التكليف 03
let myInput = document.querySelector("[name='dollar']");
let myResult = document.querySelector(".result");
let myForm = document.forms[0];
myInput.oninput = function () {
    myResult.textContent = `{${myInput.value}} USD Dollar =
    {${(myInput.value * 15.6).toFixed(2)}} Edyption Pound`
}
myForm.style.cssText = "display: flex;\
flex-direction: column;\
align-items: center;\
padding: 15px;\
margin: 0 auto;\
width: fit-content;\
border: 1px solid black;"
myInput.style.cssText = "padding: 10px 15px;\
margin-bottom: 10px;\
border: 1px solid #ddd;\
outline: none;";
// التكليف 04
console.log("===========");
console.log("التكليف 04");
let divOne = document.querySelector(".one");
let divTwo = document.querySelector(".two");
let oneText = divTwo.textContent;
let twoText = divOne.textContent;
let oneTitle = divTwo.title;
let twoTitle = divOne.title;
divOne.title = oneTitle;
divTwo.title = twoTitle;
divOne.textContent = oneText;
divTwo.textContent = `${twoText} ${++divTwo.childNodes.length}`
console.log(divOne);
console.log(divTwo);
// التكليف 05
console.log("===========");
console.log("التكليف 05");
for (let i = 10; i < 15; i++) {
    let image = document.images[i];
    if (image.hasAttribute("alt"))
        image.alt = "old";
    else
        image.alt = "Elzero New"
    console.log(image);
}
// التكليف 06
console.log("===========");
console.log("التكليف 06");
let form = document.forms[1];
form.style.cssText = "display: flex;\
flex-direction: column;\
justify-content: center;\
align-items: center;\
padding: 10px 15px;";
let elementsInput = document.querySelector("[name='elements']");
let textsInput = document.querySelector("[name='texts']");
let allInputs = document.querySelectorAll(".input");
allInputs.forEach(input => {
    input.style.cssText = "padding: 10px 15px;\
    width: 250px;\
    margin-bottom: 10px;\
    border: 1px solid #ddd;\
    outline: none;";
});
let createBtn = document.querySelector("[name='create']");
createBtn.style.cssText = "padding: 10px 15px;\
width: 250px;\
background-color: #00BCD4;\
border: none;\
cursor: pointer;";
let selectElement = document.getElementsByTagName("select");
let resultBox = document.querySelector(".results");
createBtn.onclick = (event) => {
    event.preventDefault();
    resultBox.innerHTML = " ";
    for (let i = 1; i <= elementsInput.value; i++) {
        let element = document.createElement(selectElement.value);
        element.className = "box";
        element.setAttribute("title", "Element");
        element.setAttribute("id", `id-${i}`);
        element.appendChild(document.createTextNode(textsInput.value));
        resultBox.style.cssText = "display: flex;\
        flex-wrap: wrap;\
        justify-content: center;\
        gap: 10px;\
        width: 50%;\
        margin-top: 15px;"
        element.style.cssText = "background-color: orange;\
        color: white;\
        padding: 10px 15px;"
        resultBox.appendChild(element);
    }
}