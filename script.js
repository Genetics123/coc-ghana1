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

// ✅ Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
