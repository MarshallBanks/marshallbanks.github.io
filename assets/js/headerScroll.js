let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        // Scroll down: hide the header
        header.classList.add("hide-header");
    }
    else {
        // Scroll up: show the header
        header.classList.remove("hide-header");
    }

    lastScrollTop = scrollTop;
});