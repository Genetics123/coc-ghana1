const translations = {};
let currentLang = localStorage.getItem('language') || 'en';

fetch('languages.json')
  .then(response => response.json())
  .then(data => {
    Object.assign(translations, data);
    applyLanguage(currentLang);
  })
  .catch(err => console.error('Error loading translations:', err));

document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('languageSelect');
  if (select) {
    select.value = currentLang;
    select.addEventListener('change', (e) => {
      currentLang = e.target.value;
      localStorage.setItem('language', currentLang);
      applyLanguage(currentLang);
    });
  }
});

function applyLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;
}
