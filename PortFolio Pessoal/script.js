document.addEventListener('DOMContentLoaded', () => {

  // ---------- Menu mobile ----------
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      menuToggle.classList.toggle('active');
    });

    // fecha o menu ao clicar em um link (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('active');
      });
    });
  }

  // ---------- Scrollspy: destaca o link da seção visível ----------
  const sections = document.querySelectorAll('main section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  const setActiveLink = (id) => {
    navItems.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach(section => observer.observe(section));

  // ---------- Ano atual no rodapé (se existir elemento #ano) ----------
  const anoEl = document.querySelector('#ano');
  if (anoEl) {
    anoEl.textContent = new Date().getFullYear();
  }

});
