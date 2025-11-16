const translations = {
  en: {}
  // Add more locales by mirroring the data-i18n keys. Example:
  // es: { siteTitle: "NetLogs para Desarrolladores", ... }
};

function applyTranslations(locale) {
  const strings = translations[locale] || {};
  const scoped = document.querySelectorAll('[data-i18n]');
  scoped.forEach((node) => {
    const key = node.getAttribute('data-i18n');
    if (strings[key]) node.textContent = strings[key];
  });

  const scopedBlocks = document.querySelectorAll('[data-i18n-scope]');
  scopedBlocks.forEach((block) => {
    const scope = block.getAttribute('data-i18n-scope');
    const scopedStrings = strings[scope];
    if (!scopedStrings) return;
    block.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      if (scopedStrings[key]) node.textContent = scopedStrings[key];
    });
  });
}

function initLanguageSelector() {
  const select = document.getElementById('language-switcher');
  if (!select) return;
  const saved = localStorage.getItem('netlogs-lang') || 'en';
  select.value = saved;
  applyTranslations(saved);

  select.addEventListener('change', (event) => {
    const lang = event.target.value;
    localStorage.setItem('netlogs-lang', lang);
    applyTranslations(lang);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  initLanguageSelector();
});
