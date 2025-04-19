// تكليفات JavaScript Bootcamp من الدرس 094 إلى 101
// التكليف 02
let addClasses = document.querySelector(".classes-to-add");
let removeClasses = document.querySelector(".classes-to-remove");
let currentElement = document.querySelector("[title = 'Current']");
let result = document.querySelector(".assign .classes-list div");
function updateClassDisplay() {
    result.innerHTML = "";
    if (currentElement.classList.length === 0) {
        let emptyMsg = document.createTextNode("No Classes To Show");
        result.appendChild(emptyMsg);
        return;
    }
    for (let i = 0; i < currentElement.classList.length; i++) {
        let span = document.createElement("span");
        let spanText = document.createTextNode(currentElement.classList[i]);
        span.appendChild(spanText);
        span.style.cssText = "background-color: #fc5535; color: white; padding: 10px; border-radius: 10px;";
        result.appendChild(span);
    }
}
updateClassDisplay();
addClasses.onblur = () => {
    let add = addClasses.value;
    if (add !== "") {
        currentElement.classList.add(...addClasses.value.trim().toLowerCase().split(" "));
        addClasses.value = "";
        updateClassDisplay();
    }
}
removeClasses.onblur = () => {
    let remove = removeClasses.value;
    if (remove !== "") {
        currentElement.classList.remove(...removeClasses.value.trim().toLowerCase().split(" "));
        removeClasses.value = "";
        updateClassDisplay();
    }
}
result.style.cssText = "display: flex; justify-content: center; align-items: center; gap: 10px;"
// التكليف 03
let ourElement = document.querySelector(".our-element");
let paragraph = ourElement.nextElementSibling;
paragraph.remove();
let start = document.createElement("div");
let startText = document.createTextNode("Start");
start.appendChild(startText);
start.className = "start";
start.setAttribute("title", "Start Element");
start.setAttribute("start-data", "start");
ourElement.before(start);
let end = document.createElement("div");
let endText = document.createTextNode("End");
end.appendChild(endText);
end.className = "end";
end.setAttribute("title", "End Element");
end.setAttribute("end-data", "end");
ourElement.after(end);
// التكليف 04
console.log("التكليف 04");
let element = document.querySelector(".my-div");
console.log(element.childNodes[4]);
// التكليف 05
console.log("التكليف 05");
let div = document.querySelector(".div");
let span = document.querySelector(".span");
let p = document.querySelector(".p");
let article = document.querySelector("article");
let section = document.querySelector("section");
document.body.addEventListener("click", (e) => {
    if (e.target === div)
        console.log("This Is div");
    else if (e.target === p)
        console.log("This Is p");
    else if (e.target === span)
        console.log("This Is span");
    else if (e.target === article)
        console.log("This Is article")
    else if (e.target === section)
        console.log("This Is section")
})