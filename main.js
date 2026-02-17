(function () {
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const nav = document.querySelector('.site-nav');
  const menuToggle = document.querySelector('.menu-toggle');

  const modal = document.getElementById('img-modal');
  const modalImg = modal?.querySelector('.img-modal__img');
  const modalClose = modal?.querySelector('.img-modal__close');

  function closeMenu() {
    nav?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }

  function closeModal() {
    if (!modal || !modalImg) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    modalImg.src = '';
  }

  function openModal(src) {
    if (!modal || !modalImg || !src) return;
    modalImg.src = src;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }

  menuToggle?.addEventListener('click', () => {
    const isOpen = nav?.classList.toggle('open');
    menuToggle?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href') || '';
      if (!href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeMenu();
    });
  });

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0.15 }
    );
    sections.forEach((section) => observer.observe(section));
  }

  document.querySelectorAll('.shot-click').forEach((node) => {
    node.addEventListener('click', () => {
      openModal(node.getAttribute('data-full'));
    });
  });

  modalClose?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('img-modal__backdrop')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeMenu();
    }
  });
})();
