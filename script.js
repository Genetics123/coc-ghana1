// script.js – Complete JavaScript for the Fosco Chapter website
// Handles:
// - Feather icons replacement
// - Mobile menu toggle (with ✕ close icon)
// - Resource collapsibles: ONLY ONE OPEN AT A TIME
// - Resource search filter: shows matching categories (header always visible), opens matching ones, hides non-matching
// - Homepage search → redirects to resources page with query
// - Auto-update copyright year

document.addEventListener('DOMContentLoaded', () => {

  // 1. Replace Feather icons
  if (typeof feather !== 'undefined') {
    feather.replace();
  }

  // 2. Mobile menu toggle
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      navToggle.textContent = mainNav.classList.contains('open') ? '✕' : '☰';
    });
  }

  // 3. Collapsible resources – ONLY ONE OPEN AT A TIME
  const collapsibleHeaders = document.querySelectorAll('.collapsible-header');

  collapsibleHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const currentCard = header.parentElement;

      if (currentCard.classList.contains('open')) {
        currentCard.classList.remove('open');
        return;
      }

      // Close all
      document.querySelectorAll('.resource-card.collapsible').forEach(card => {
        card.classList.remove('open');
      });

      // Open clicked
      currentCard.classList.add('open');
    });
  });

  // 4. Resource search filter
  const searchInput = document.getElementById('resourceSearch');
  const resourcesList = document.getElementById('resourcesList');
  const noResults = document.getElementById('noResults');

  if (searchInput && resourcesList && noResults) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();
      let visibleCount = 0;

      resourcesList.querySelectorAll('.resource-card.collapsible').forEach(card => {
        const keywords = card.getAttribute('data-keywords') || '';
        const headerText = card.querySelector('.collapsible-header h3')?.textContent.toLowerCase() || '';
        const linkTexts = Array.from(card.querySelectorAll('.collapsible-content a'))
          .map(a => a.textContent.toLowerCase())
          .join(' ');

        const searchText = `${keywords} ${headerText} ${linkTexts}`;
        const matches = query === '' || searchText.includes(query);

        if (matches) {
          card.style.display = 'block';
          visibleCount++;

          if (query !== '') {
            card.classList.add('open'); // Auto-open matching
          } else {
            card.classList.remove('open'); // Close when cleared
          }

        } else {
          card.style.display = 'none';
          card.classList.remove('open');
        }
      });

      noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    });
  }

  // 5. HOMEPAGE SEARCH — Redirect to resources page
  const homeSearchInput = document.getElementById('homeSearchInput');
  const homeSearchBtn = document.getElementById('homeSearchBtn');

  if (homeSearchInput && homeSearchBtn) {
    homeSearchBtn.addEventListener('click', () => {
      const query = homeSearchInput.value.trim();

      if (query !== '') {
        window.location.href = "resources.html?search=" + encodeURIComponent(query);
      }
    });

    // Allow Enter key to trigger search
    homeSearchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        homeSearchBtn.click();
      }
    });
  }

  // 6. Update copyright year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
