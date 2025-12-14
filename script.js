// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

// Resource search
const searchInput = document.getElementById("searchInput");
const resourceCards = document.querySelectorAll(".resource-card");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  resourceCards.forEach(card => {
    const keywords = card.getAttribute("data-keywords").toLowerCase();

    if (keywords.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// Collapsible resource categories
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach(section => {
  const header = section.querySelector(".collapsible-header");

  header.addEventListener("click", () => {
    // ✅ Only toggle if there's no active search
    const query = document.getElementById("searchInput").value.toLowerCase();

    if (!query) {
      section.classList.toggle("open");
    }
  });
});
<script>
  // your collapsible code here...

  // ✅ Add the upgraded search code RIGHT HERE
  const searchInput = document.getElementById("searchInput");
  const resourceCards = document.querySelectorAll(".resource-card");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    resourceCards.forEach(card => {
      const keywords = card.getAttribute("data-keywords").toLowerCase();

      if (keywords.includes(query)) {
        card.style.display = "block";
        card.classList.add("open");   // ✅ Auto-open matching category
      } else {
        card.style.display = "none";
        card.classList.remove("open"); // ✅ Close non-matching categories
      }
    });
  });
</script>


