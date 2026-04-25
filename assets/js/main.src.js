        document.body.classList.replace('no-js', 'js');

        const header = document.querySelector('.site-header');
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('.nav-links');

        const setHeaderState = () => {
            if (!header) return;
            const offset = window.scrollY > 8;
            header.classList.toggle('scrolled', offset);
        };

        setHeaderState();
        window.addEventListener('scroll', setHeaderState, { passive: true });

        const mainEl = document.getElementById('main');
        const skipLink = document.querySelector('.skip-link');
        const progressBar = document.getElementById('reading-progress-bar');
        const backToTopButton = document.querySelector('.back-to-top');
        const sectionLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
        const updateMobileNavTop = () => {
            if (!header) return;
            document.documentElement.style.setProperty('--mobile-nav-top', `${Math.round(header.getBoundingClientRect().height)}px`);
        };

        const updateReadingProgress = () => {
            if (!progressBar) return;
            const viewport = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight - viewport;
            const ratio = fullHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / fullHeight)) : 0;
            progressBar.style.width = `${Math.round(ratio * 100)}%`;
        };

        const updateBackToTopState = () => {
            if (!backToTopButton) return;
            backToTopButton.classList.toggle('is-visible', window.scrollY > 520);
        };

        const setActiveNavLink = () => {
            if (!sectionLinks.length) return;
            let activeSectionId = 'home';
            sectionLinks.forEach((link) => {
                const targetId = link.getAttribute('href')?.slice(1);
                if (!targetId) return;
                const section = document.getElementById(targetId);
                if (!section) return;
                const rect = section.getBoundingClientRect();
                if (rect.top <= 140 && rect.bottom >= 140) {
                    activeSectionId = targetId;
                }
            });
            sectionLinks.forEach((link) => {
                const isActive = link.getAttribute('href') === `#${activeSectionId}`;
                link.setAttribute('aria-current', isActive ? 'page' : 'false');
            });
        };

        if (skipLink && mainEl) {
            skipLink.addEventListener('click', () => {
                mainEl.focus({ preventScroll: false });
            });
        }

        if (navToggle && navLinks && header) {
            const closeMobileNav = () => {
                header.classList.remove('nav-open');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('nav-open-lock');
            };

            navToggle.addEventListener('click', () => {
                const isOpen = header.classList.toggle('nav-open');
                navToggle.setAttribute('aria-expanded', String(isOpen));
                document.body.classList.toggle('nav-open-lock', isOpen);
            });
            navLinks.querySelectorAll('a').forEach((link) => {
                link.addEventListener('click', () => {
                    closeMobileNav();
                });
            });
            document.addEventListener('keydown', (e) => {
                if (e.key !== 'Escape' || !header.classList.contains('nav-open')) return;
                closeMobileNav();
                navToggle.focus();
            });
            document.addEventListener('click', (e) => {
                const target = e.target;
                if (!(target instanceof Element)) return;
                if (!header.classList.contains('nav-open')) return;
                if (target.closest('.site-header')) return;
                closeMobileNav();
            });
        }

        const yearEl = document.querySelector('[data-year]');
        if (yearEl) {
            yearEl.textContent = new Date().getFullYear();
        }

        if (backToTopButton) {
            backToTopButton.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        updateReadingProgress();
        updateBackToTopState();
        setActiveNavLink();
        updateMobileNavTop();
        window.addEventListener('scroll', () => {
            updateReadingProgress();
            updateBackToTopState();
            setActiveNavLink();
            updateMobileNavTop();
        }, { passive: true });
        window.addEventListener('resize', () => {
            setActiveNavLink();
            updateMobileNavTop();
        });

        (function typewriterHero() {
            const root = document.getElementById('typewriter-root');
            const elA = document.getElementById('typewriter-a');
            const elPrefix = document.getElementById('typewriter-a-prefix');
            const elName = document.getElementById('typewriter-a-name');
            const elB = document.getElementById('typewriter-b');
            if (!root || !elA || !elB) return;

            const PREFIX = "Hi, I'm ";
            const NAME = "Fatan Najuda ";
            const PART_A = PREFIX + NAME;
            const ROLE_PREFIX = "— ";
            const roles = [
                "Backend\u00A0Engineer",
                "Data\u00A0Engineer",
                "Technical\u00A0Mentor",
                "Product\u00A0Engineer"
            ];
            const firstRole = ROLE_PREFIX + roles[0];
            const fullPlain = PART_A + firstRole;

            const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (reduced) {
                if (elPrefix && elName) {
                    elPrefix.textContent = PREFIX;
                    elName.textContent = NAME;
                } else {
                    elA.textContent = PART_A;
                }
                elB.textContent = firstRole;
                elB.classList.add('typewriter-cursor--idle');
                return;
            }

            const msType = 38;
            const msDelete = 24;
            const pauseAfterType = 1700;
            const pauseAfterDelete = 1500;
            const startDelay = 280;

            let i = 0;
            const lenA = PART_A.length;
            let roleIndex = 0;
            let roleCharIndex = 0;

            root.classList.add('is-typewriter-active');
            elB.classList.add('is-typewriter-active');

            function setPartAVisible(n) {
                if (elPrefix && elName) {
                    const take = Math.min(n, PREFIX.length);
                    elPrefix.textContent = PART_A.slice(0, take);
                    elName.textContent = n <= PREFIX.length ? '' : PART_A.slice(PREFIX.length, n);
                    if (n >= lenA) {
                        elName.classList.add('is-shine-ready');
                    } else {
                        elName.classList.remove('is-shine-ready');
                    }
                } else {
                    elA.textContent = PART_A.slice(0, n);
                }
            }

            function runType() {
                if (i >= fullPlain.length) {
                    setPartAVisible(PART_A.length);
                    elB.textContent = firstRole;
                    window.setTimeout(deleteRole, pauseAfterType);
                    return;
                }
                if (i < lenA) {
                    setPartAVisible(i + 1);
                    elB.textContent = '';
                } else {
                    setPartAVisible(PART_A.length);
                    elB.textContent = fullPlain.slice(lenA, i + 1);
                }
                i += 1;
                window.setTimeout(runType, msType);
            }

            function deleteRole() {
                const currentRole = elB.textContent || '';
                if (currentRole.length > ROLE_PREFIX.length) {
                    elB.textContent = currentRole.slice(0, -1);
                    window.setTimeout(deleteRole, msDelete);
                    return;
                }
                roleIndex = (roleIndex + 1) % roles.length;
                roleCharIndex = 0;
                window.setTimeout(typeRole, pauseAfterDelete);
            }

            function typeRole() {
                const nextRole = roles[roleIndex];
                if (roleCharIndex >= nextRole.length) {
                    elB.textContent = ROLE_PREFIX + nextRole;
                    window.setTimeout(deleteRole, pauseAfterType);
                    return;
                }
                elB.textContent = ROLE_PREFIX + nextRole.slice(0, roleCharIndex + 1);
                roleCharIndex += 1;
                window.setTimeout(typeRole, msType);
            }

            window.setTimeout(runType, startDelay);
        })();
