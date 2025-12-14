// ✅ Scroll animations that restart every time
const animatedElements = document.querySelectorAll(".fade-in, .slide-left, .slide-right");

function handleScrollAnimations() {
  const triggerBottom = window.innerHeight * 0.85;

  animatedElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    const boxBottom = el.getBoundingClientRect().bottom;

    // ✅ Add animation when entering view
    if (boxTop < triggerBottom && boxBottom > 0) {
      el.classList.add("visible");
    } 
    // ✅ Remove animation when leaving view (so it restarts)
    else {
      el.classList.remove("visible");
    }
  });
}

window.addEventListener("scroll", handleScrollAnimations);
window.addEventListener("load", handleScrollAnimations);

// ✅ Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

