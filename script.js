// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

// Resource search
const resourceSearch = document.getElementById("resourceSearch");
const resourceCards = document.querySelectorAll(".resource-card");

resourceSearch.addEventListener("input", () => {
  const query = resourceSearch.value.toLowerCase().trim();

  resourceCards.forEach(card => {
    const keywords = card.getAttribute("data-keywords").toLowerCase();
    const text = card.textContent.toLowerCase();

    card.style.display =
      keywords.includes(query) || text.includes(query) ? "" : "none";
  });
});

// Collapsible resource categories
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach(section => {
  const header = section.querySelector(".collapsible-header");

  header.addEventListener("click", () => {
    section.classList.toggle("open");
  });
});
