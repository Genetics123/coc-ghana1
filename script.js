// script.js – Complete JavaScript for the Fosco Chapter website
// Handles:
// - Feather icons (chevrons in resource headers)
// - Mobile menu toggle (hamburger opens/closes with ✕ icon)
// - Resource collapsible tiles (expand/collapse on click)
// - Auto-update copyright year in footer

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
      // Change icon to ✕ when open, ☰ when closed
      navToggle.textContent = mainNav.classList.contains('open') ? '✕' : '☰';
    });
  }

  // 3. Collapsible resource categories (Faith, Purity, etc.)
  const collapsibleHeaders = document.querySelectorAll('.collapsible-header');
  collapsibleHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const card = header.parentElement; // the .resource-card
      card.classList.toggle('open');
    });
  });

  // 4. Update copyright year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
