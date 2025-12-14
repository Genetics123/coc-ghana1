// Update footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

// Resource search filter
const resourceSearch = document.getElementById("resourceSearch");
const resourceCards = document.querySelectorAll(".resource-card");

if (resourceSearch && resourceCards.length > 0) {
  resourceSearch.addEventListener("input", () => {
    const query = resourceSearch.value.toLowerCase().trim();

    resourceCards.forEach(card => {
      const keywords = (card.getAttribute("data-keywords") || "").toLowerCase();
      const text = card.textContent.toLowerCase();

      if (!query || keywords.includes(query) || text.includes(query)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// Smooth scroll is handled by CSS (scroll-behavior: smooth)
// This JS is intentionally minimal to keep the site lightweight.
