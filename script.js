/* ---------------------------------------------------------
   ✅ COLLAPSIBLE LOGIC (Accordion + Pre-Scroll Fix)
--------------------------------------------------------- */
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach(section => {
  const header = section.querySelector(".collapsible-header");

  header.addEventListener("click", () => {
    const query = document.getElementById("resourceSearch").value.toLowerCase();

    if (!query) {

      const isOpening = !section.classList.contains("open");

      // ✅ If closing → scroll to header BEFORE collapsing
      if (!isOpening) {
        const yOffset = -20;
        const y = header.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth"
        });

        // ✅ Wait for scroll to finish, THEN collapse
        setTimeout(() => {
          section.classList.remove("open");
        }, 300);

        return; // stop here
      }

      // ✅ If opening → close others first
      collapsibles.forEach(other => {
        if (other !== section) {
          other.classList.remove("open");
        }
      });

      // ✅ Open this section
      section.classList.add("open");

      // ✅ Scroll down to opened section
      const yOffset = -20;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
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





