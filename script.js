/* ---------------------------------------------------------
   ✅ FULLSCREEN SECTION MODE (Only one section visible)
--------------------------------------------------------- */
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach(section => {
  const header = section.querySelector(".collapsible-header");

  header.addEventListener("click", () => {
    const query = document.getElementById("resourceSearch").value.toLowerCase();

    if (!query) {
      const isOpening = !section.classList.contains("open");

      // ✅ If opening → show only this section
      if (isOpening) {
        collapsibles.forEach(other => {
          if (other !== section) {
            other.style.display = "none";   // hide others completely
            other.classList.remove("open");
          }
        });

        section.classList.add("open");
        section.style.display = "block";     // ensure it's visible

        // ✅ Scroll to top of the page (no more weird offsets)
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

      // ✅ If closing → restore all sections
      else {
        section.classList.remove("open");

        collapsibles.forEach(other => {
          other.style.display = "block";     // show everything again
        });

        // ✅ Scroll to top again for clean reset
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
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






