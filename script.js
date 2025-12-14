/* ---------------------------------------------------------
   ✅ COLLAPSIBLE LOGIC (Accordion Mode)
--------------------------------------------------------- */
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach(section => {
  const header = section.querySelector(".collapsible-header");

  header.addEventListener("click", () => {
    const query = document.getElementById("resourceSearch").value.toLowerCase();

    // ✅ Only allow manual toggling when search is empty
    if (!query) {

      // ✅ Close all other sections
      collapsibles.forEach(other => {
        if (other !== section) {
          other.classList.remove("open");
        }
      });

      // ✅ Toggle the clicked section
      section.classList.toggle("open");
    }
  });
});


/* ---------------------------------------------------------
   ✅ SEARCH LOGIC (auto-expand + hide + highlight)
--------------------------------------------------------- */
const searchInput = document.getElementById("resourceSearch");
const resourceCards = document.querySelectorAll(".resource-card");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  let anyVisible = false;

  resourceCards.forEach(card => {
    const keywords = card.getAttribute("data-keywords").toLowerCase();
    const header = card.querySelector("h3");

    // ✅ Remove old highlights
    header.innerHTML = header.textContent;

    if (keywords.includes(query)) {
      card.style.display = "block";
      card.classList.add("open");   // Auto-open matching category
      anyVisible = true;

      // ✅ Highlight matching text in the header
      if (query.trim() !== "") {
        const title = header.textContent;
        const regex = new RegExp(`(${query})`, "gi");
        header.innerHTML = title.replace(
          regex,
          `<span style="background:yellow; padding:2px; border-radius:3px;">$1</span>`
        );
      }

    } else {
      card.style.display = "none";
      card.classList.remove("open"); // Close non-matching categories
    }
  });

  // ✅ Show or hide "No results found"
  noResults.style.display = anyVisible ? "none" : "block";
});
