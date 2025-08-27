let lis = document.querySelectorAll("ul li");
let mainDiv = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
    mainDiv.style.backgroundColor = window.localStorage.getItem("color");
    // Remove class active from all lis
    lis.forEach((li) => {
        li.classList.remove("active");
    })
    // Add class active to the current li
    document.querySelector(`[data-color = "${window.localStorage.getItem("color")}"]`).classList.add("active");
}

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        // Remove class active from all lis
        lis.forEach((li) => {
            li.classList.remove("active");
        })
        // add class active on the current li
        e.currentTarget.classList.add("active");
        // Add current color to local storage
        window.localStorage.setItem("color", e.currentTarget.dataset.color);
        mainDiv.style.backgroundColor = e.currentTarget.dataset.color;
    })
})