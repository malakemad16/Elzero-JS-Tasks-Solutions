// تكليفات JavaScript Bootcamp من الدرس 102 إلى 110
// التكليف 01
let hr = document.createElement("hr");
document.writeln("<h3>التكليف 01</h3>");
let promptNum = window.prompt("Print Numbers from To ?", "Number One - Number Two");
let counter = promptNum.split("-").sort();
for (let i = counter[0]; i <= counter[1]; i++) {
    let myDiv = document.createElement("div");
    myDiv.innerHTML = i;
    document.body.appendChild(myDiv);
}
document.body.appendChild(hr);
console.log(counter);
// التكليف 02
document.writeln("<h3>التكليف 02</h3>");
let div = document.createElement("div");
let heading = document.createElement("h2");
let paragraph = document.createElement("p");
let btn = document.createElement("button");
let headingText = document.createTextNode("Welcome");
heading.appendChild(headingText);
div.appendChild(heading);
let paragraphText = document.createTextNode("Welcome To Elzero Web School");
paragraph.appendChild(paragraphText);
div.appendChild(paragraph);
div.style.cssText = "width: 500px; height: 200px; margin: 20px auto;\
                    display: flex; flex-direction: column;\
                    justify-content: center; align-items: center;\
                    background-color: #eee; position: relative;";
let btnText = document.createTextNode("X");
btn.appendChild(btnText);
btn.style.cssText = "width: 30px; height: 30px; color: white;\
                    background-color: red; border: none; cursor: pointer;\
                    border-radius: 50%; position: absolute; top: -10px; right: -10px;\
                    display: flex; justify-content: center; align-items: center;"
div.appendChild(btn);
setTimeout(function () {
    document.body.appendChild(div);
}, 5000);
btn.addEventListener("click", () => {
    div.remove();
    document.body.appendChild(hr);
});
// التكليف 03
let div_3 = document.querySelector("div");
let count = setInterval(() => {
    div_3.innerHTML -= 1;
    if (div_3.innerHTML === "0")
        clearInterval(count);
}, 1000);
// التكليف 04
let div_4 = document.querySelector(".my-div");
let count_2 = setInterval(() => {
    div_4.innerHTML -= 1;
    if (div_3.innerHTML === "0") {
        window.open("https://elzero.org/study/javascript-bootcamp-2021-study-plan/", "_blank");
        clearInterval(count_2);
    }
}, 1000);
// التكليف 05
let div_5 = document.querySelector(".pop-up");
let count_3 = setInterval(() => {
    div_5.innerHTML -= 1;
    if (div_3.innerHTML === "5") {
        window.open("https://elzero.org/study/javascript-bootcamp-2021-study-plan/",
            "_blank",
            "width: 300px; height:300px;");
        clearInterval(count_3);
    }
}, 1000);
