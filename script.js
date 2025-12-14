// ✅ Update footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ✅ Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

// ✅ Resource search filter
const resourceSearch = document.getElementById("resourceSearch");
const resourceGroups = document.querySelectorAll(".resource-group");

if (resourceSearch && resourceGroups.length > 0) {
  resourceSearch.addEventListener("input", () => {
    const query = resourceSearch.value.toLowerCase().trim();

    resourceGroups.forEach(group => {
      const keywords = (group.getAttribute("data-keywords") || "").toLowerCase();
      const text = group.textContent.toLowerCase();

      if (query === "") {
        group.style.display = "";
      } else if (keywords.includes(query) || text.includes(query)) {
        group.style.display = "";
      } else {
        group.style.display = "none";
      }
    });
  });
}

// ✅ Scroll animations (fade-in, slide-left, slide-right)
const animatedElements = document.querySelectorAll(".fade-in, .slide-left, .slide-right");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  animatedElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ✅ Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});



