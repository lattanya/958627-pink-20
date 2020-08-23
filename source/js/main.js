var header = document.querySelector(".main-header");
var button = header.querySelector(".main-header__toggle");

header.classList.remove("main-header--nojs");
button.addEventListener("click", function() {
    if (header.classList.contains("main-header--closed")) {
        header.classList.remove("main-header--closed");
        header.classList.add("main-header--opened");
    } else if (header.classList.contains("main-header--opened")) {
        header.classList.remove("main-header--opened");
        header.classList.add("main-header--closed");
    }
})
