document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('main-nav');
    const year = document.querySelector('[data-year]');
    if (year) year.textContent = new Date().getFullYear();

    const closeNav = () => {
        if (!header || !toggle) return;
        header.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation');
    };

    if (toggle && header) {
        toggle.addEventListener('click', () => {
            const isOpen = header.classList.toggle('nav-open');
            toggle.setAttribute('aria-expanded', String(isOpen));
            toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
        });
    }
    if (nav) nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeNav(); });

    const setHeaderState = () => { if (header) header.classList.toggle('is-scrolled', window.scrollY > 12); };
    setHeaderState();
    window.addEventListener('scroll', setHeaderState, { passive: true });

    const revealElements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        revealElements.forEach((element) => element.classList.add('is-visible'));
        return;
    }
    const observer = new IntersectionObserver((entries, instance) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            instance.unobserve(entry.target);
        });
    }, { threshold: .12 });
    revealElements.forEach((element) => observer.observe(element));
});
