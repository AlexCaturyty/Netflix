window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.style.background = "linear-gradient(to bottom, black, #111111)";
    } else {
        header.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), transparent)";
    }
});
