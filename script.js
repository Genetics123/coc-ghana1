// script.js – Complete JavaScript for the Fosco Chapter website
// Handles:
// - Feather icons replacement
// - Mobile menu toggle (with ✕ close icon)
// - Resource collapsibles: ONLY ONE OPEN AT A TIME (others collapse automatically)
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

  // 4. Update copyright year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
