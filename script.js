// script.js – Complete JavaScript for the Fosco Chapter website (December 16, 2025)
// Handles:
// - Feather icons replacement
// - Mobile menu toggle (with ✕ close icon)
// - Resource collapsibles: ONLY ONE OPEN AT A TIME
// - Resource search filter (searches titles, keywords, link text)
// - Auto-update copyright year

document.addEventListener('DOMContentLoaded', () => {
  // 1. Replace Feather icons (chevrons in headers)
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

      // If the clicked one is already open, close it
      if (currentCard.classList.contains('open')) {
        currentCard.classList.remove('open');
        return;
      }

      // Close all cards first
      document.querySelectorAll('.resource-card.collapsible').forEach(card => {
        card.classList.remove('open');
      });

      // Open the clicked one
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

      resourcesList.querySelectorAll('.resource-card').forEach(card => {
        const keywords = card.getAttribute('data-keywords') || '';
        const headerText = card.querySelector('.collapsible-header h3')?.textContent.toLowerCase() || '';
        const linkTexts = Array.from(card.querySelectorAll('.collapsible-content a'))
          .map(a => a.textContent.toLowerCase())
          .join(' ');

        const searchText = `${keywords} ${headerText} ${linkTexts}`;

        if (query === '' || searchText.includes(query)) {
          card.style.display = 'block';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    });
  }

  // 5. Update copyright year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
