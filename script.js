// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  // Close mobile menu when clicking a nav link
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      if (mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
      }
    });
  });
}

// Auto-update copyright year
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Feather icons (already called in HTML, but safe to run again)
feather.replace();

/* ---------------------------------------------------------
   ✅ COLLAPSIBLE LOGIC (Accordion + No unwanted scrolling)
--------------------------------------------------------- */
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach(section => {
  const header = section.querySelector(".collapsible-header");
  if (header) {
    header.addEventListener("click", () => {
      const searchInput = document.getElementById("resourceSearch");
      const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

      // ✅ Disable manual toggling during active search
      if (query) return;

      // ✅ Save current scroll position to prevent jump
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      // ✅ Close all other sections (accordion behavior)
      collapsibles.forEach(other => {
        if (other !== section) {
          other.classList.remove("open");
        }
      });

      // ✅ Toggle this section
      section.classList.toggle("open");

      // ✅ Restore scroll position – eliminates unwanted scrolling
      window.scrollTo(0, scrollPosition);
    });
  }
});

/* ---------------------------------------------------------
   ✅ SEARCH LOGIC (auto-expand + hide + highlight + no results)
--------------------------------------------------------- */
const searchInput = document.getElementById("resourceSearch");
const resourceCards = document.querySelectorAll(".resource-card");
const noResults = document.getElementById("noResults");

if (searchInput && resourceCards.length > 0) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    let anyVisible = false;

    resourceCards.forEach(card => {
      const keywordsAttr = card.getAttribute("data-keywords") || "";
      const keywords = keywordsAttr.toLowerCase();
      const header = card.querySelector("h3");
      const headerText = header ? header.textContent.toLowerCase() : "";

      // ✅ Reset highlight and content
      if (header) {
        header.innerHTML = header.textContent;
      }

      // ✅ Check if card matches query (keywords or header text)
      const matches = query === "" || keywords.includes(query) || headerText.includes(query);

      if (matches) {
        card.style.display = "block";
        card.classList.add("open"); // Auto-open matching categories
        anyVisible = true;

        // ✅ Highlight matching text in header (only if query not empty)
        if (query && header) {
          const title = header.textContent;
          const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, "gi");
          header.innerHTML = title.replace(regex, `<span style="background:yellow; padding:2px 4px; border-radius:3px;">$1</span>`);
        }
      } else {
        card.style.display = "none";
        card.classList.remove("open");
      }
    });

    // ✅ Show/hide "No results found" message
    if (noResults) {
      noResults.style.display = anyVisible ? "none" : "block";
    }

    // When search is cleared, collapse all (optional – feels cleaner)
    if (query === "" && noResults) {
      collapsibles.forEach(card => card.classList.remove("open"));
    }
  });
}
