let lastScrollTop = 0;
const header = document.getElementById("header");
const THRESHOLD = 10;  // px from top before you start hiding

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  // Show the header if within threshold
  if (scrollTop <= THRESHOLD) {
    header.classList.remove("hide-header");
  }
  // Otherwise hide the header as normal
  else if (scrollTop > lastScrollTop) {
    header.classList.add("hide-header");
  }
  // Scrolling up shows the header
  else {
    header.classList.remove("hide-header");
  }

  lastScrollTop = scrollTop;
});
