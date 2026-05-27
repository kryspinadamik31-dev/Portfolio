const elements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();

    if (rect.top < window.innerHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);