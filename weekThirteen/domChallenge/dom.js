// DOM Challenge
// Create Header Elemnts
let header = document.createElement("header");
header.className = "nav-bar";
let logo = document.createElement("h2");
logo.className = "logo";
let logoText = document.createTextNode("Elzero");
logo.appendChild(logoText);
header.appendChild(logo);
let list = document.createElement("ul");
list.className = "links";
let arrLis = ["Home", "About", "Service", "Contact"];
for (let i = 0; i < arrLis.length; i++){
    let li = document.createElement("li");
    let liText = document.createTextNode(`${arrLis[i]}`);
    li.appendChild(liText);
    list.appendChild(li);
    // Style Fot Lis
    li.style.cssText = "padding: 0 5px; font-size: 14px;";
}
header.appendChild(list);
document.body.appendChild(header);
// Style For Header
document.body.style.fontFamily = "sans-serif";
header.style.cssText = "display: flex; justify-content: space-between; align-items: center;\
margin: 0 15px; color: #b6bbbe;";
logo.style.cssText = "font-size: 20px; color: #23a96e;"
list.style.cssText = "display: flex; list-style: none;";
// Create Conr=tainer Elments
let container = document.createElement("div");
let content = document.createElement("div");
content.className = "content";
for (let i = 0; i < 15; i++){
    let product = document.createElement("div");
    let productText = document.createTextNode("Product");
    product.appendChild(productText);
    product.style.cssText="color: hsl(203, 5.80%, 72.90%)";
    let span = document.createElement("span");
    let spanNumbers = document.createTextNode(`${i + 1}`);
    span.appendChild(spanNumbers);
    span.style.setProperty("color", "black", "important");
    span.style.setProperty("font-size", "20px", "important");
    product.appendChild(span);
    product.style.cssText = "display: flex; flex-direction: column-reverse; justify-content: center; align-items: center;\
    padding: 15px 20px; background-color: white; margin: 0 10px 10px 0; color: hsl(203, 5.80%, 72.90%);\
    font-size: 14px;"
    content.appendChild(product);
}
// Style For Container
content.style.cssText = "display: grid; grid-template-columns: repeat(auto-fill,minmax(350px,1fr));\
padding:10px; padding-right: 0; background-color: #ececec;"
container.appendChild(content);
// Create Footer Element
let footer = document.createElement("footer");
let footerText = document.createTextNode("Copyright 2021");
footer.appendChild(footerText);
footer.style.cssText = "background-color: #23a96e; color: white; display:flex; justify-content: center;\
align-items: center; padding: 15px"
container.appendChild(footer);
// Style Container 
container.style.cssText = "max-height: calc(100vh - 56px);"
document.body.appendChild(container);
document.writeln("<hr />");