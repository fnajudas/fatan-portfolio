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

        const renderProjects = () => {
            const projectGrid = document.getElementById('project-grid-dynamic');
            if (!projectGrid) return;

            const projects = [
                {
                    tags: ['Project based', 'Microservices'],
                    title: 'PT. Nabati Group (Project Based)',
                    description: '<strong>Feb 2026 – May 2026.</strong> Architected, maintained, and operated Go (Fiber) micro-services across inventory, sales, finance, and master data (MongoDB, Redis, RabbitMQ, gRPC/protobuf SDKs), integrated SAP HANA/NiFi pipelines, applied multi-tenant PH configuration, hardened observability, CI/CD, and testing, and partnered with stakeholders for a stable Philippine rollout.',
                    tech: 'Go Fiber · MongoDB · Redis · RabbitMQ · gRPC · protobuf · SAP HANA · NiFi',
                    role: 'Architecting and operating backend micro-services for rollout.'
                },
                {
                    tags: ['Project based', 'Rust'],
                    title: 'PT. Astra International Tbk (Project Based)',
                    description: '<strong>Nov 2024 – Jan 2025.</strong> Greenfield backend engagement: defined service boundaries and module layout, then implemented core services in Rust from scratch — prioritizing safety, performance, and maintainability. Delivered a foundation the organisation could extend with confidence: clear structure, repeatable build and test workflows, and a path toward production hardening.',
                    tech: 'Rust · Cargo',
                    role: 'End-to-end ownership — architecture, Rust implementation, and rollout readiness.'
                },
                {
                    tags: ['LMS', 'AI'],
                    title: 'Course Management System with AI Integration',
                    description: 'Developed a comprehensive Course Management system with cohort-based enrolment, multi-level progress tracking (microlearning, quizzes, activities, materials, meetings), and AI integration for automated course generation. Enables personalised learning paths for thousands of users with scalable architecture.',
                    tech: 'Golang · Gin Framework · PostgreSQL · MongoDB · Redis · Elasticsearch',
                    role: 'Backend engineer designing modular architecture and implementing core features.'
                },
                {
                    tags: ['LMS', 'AI'],
                    title: 'Quiz System with AI-Powered Question Generation',
                    description: 'Built a Quiz System with AI integration for automated question generation and paraphrasing, supporting multiple question types, real-time scoring, and attempt tracking. Improves learning efficiency and assessment quality through intelligent content creation.',
                    tech: 'Golang · PostgreSQL · MongoDB · Redis · RabbitMQ',
                    role: 'Backend engineer leading AI integration and quiz system architecture.'
                },
                {
                    tags: ['Real-time', 'Communication'],
                    title: 'Real-time Communication Platform',
                    description: 'Implemented real-time communication using LiveKit for video conferencing, WebSocket for chat/messaging, and SSE for notifications. Enables seamless interaction with sub-second latency for hundreds of concurrent participants in learning environments.',
                    tech: 'Golang · LiveKit · WebSocket · SSE · PostgreSQL · Redis',
                    role: 'Backend engineer architecting real-time communication infrastructure.'
                },
                {
                    tags: ['DevOps', 'Tooling'],
                    title: 'Code Generation Tools (entitygen, modulegen)',
                    description: 'Developed code generation tools that reduce boilerplate code by 60% and speed up feature development by 50%. Automates repetitive tasks in backend development, improving developer productivity and code consistency across the platform.',
                    tech: 'Golang · Builder Pattern · Code Generation',
                    role: 'Backend engineer creating developer tooling and automation.'
                },
                {
                    tags: ['Backend', 'Finance'],
                    title: 'Financial RAB Generator Service',
                    description: 'Backend service that generates project-wide RAB (budget plans), supporting scenarios where a single project contains multiple farmers. Generates data and securely stores files in S3 for finance operations.',
                    tech: 'Golang · Gin Framework · PostgreSQL',
                    role: 'Backend engineer for system design and implementation.'
                },
                {
                    tags: ['API', 'Integration'],
                    title: 'LiveKit Video Streaming Integration',
                    description: 'Designed and built a LiveKit-powered backend service for real-time video rooms, session orchestration, and secure token management. Focused on low latency, reliability, and clean API contracts for product teams.',
                    tech: 'Golang · LiveKit · PostgreSQL · Redis',
                    role: 'Backend engineer owning architecture and LiveKit integration.'
                },
                {
                    tags: ['AI', 'LMS'],
                    title: 'LLM Core Integration for Learning Management System',
                    description: 'Integrated an LLM core into the LMS to generate questions, answer keys, and paraphrased responses. Built reliable workflows so content teams can create and review learning materials faster.',
                    tech: 'Golang · PostgreSQL · MongoDB · Redis · RabbitMQ',
                    role: 'Backend engineer leading LLM integration for LMS features.'
                },
                {
                    tags: ['API', 'Integration'],
                    title: 'Third-Party Payment & ERP Integration Service',
                    description: 'Backend service integrating directly with multiple third-party systems including direct bank payment gateways, SNAP BI, and Odoo. Built to ensure reliable, secure, and consistent communication across finance and ERP workflows.',
                    tech: 'Golang Native · Gin Framework · PostgreSQL · Redis',
                    role: 'Backend engineer handling system architecture and API integration.'
                },
                {
                    tags: ['Data', 'Analytics'],
                    title: 'End-to-End Data Pipeline for Farmer Analytics',
                    description: 'Designed and built a reliable data pipeline that ingests, cleans, and transforms farmer operational data from transactional systems into BigQuery. The output powers real-time dashboards, performance tracking, and decision-making across agricultural operations.',
                    tech: 'Python · Airflow · BigQuery · dbt · GCS',
                    role: 'Backend engineer owning pipeline orchestration, data modelling, validation, and SLAs.'
                },
                {
                    tags: ['Migration', 'Architecture'],
                    title: 'System Migration & Modernization',
                    description: 'Led the migration of legacy systems into modern, scalable architectures — including monolith-to-microservices restructuring, database schema redesign, and backend service refactoring to improve reliability and maintainability.',
                    tech: 'Golang · PostgreSQL · AWS · GCP · Microservices',
                    role: 'Architected migration plans, executed phased rollouts, and ensured backward compatibility during system transitions.'
                }
            ];

            projectGrid.innerHTML = projects.map((project) => {
                const pills = project.tags.map((tag) => `<span class="pill">${tag}</span>`).join('');
                return `
                    <article class="project-card reveal">
                        <div class="pill-row">${pills}</div>
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="tech-stack">Tech: ${project.tech}</div>
                        <p><strong>Role:</strong> ${project.role}</p>
                    </article>
                `;
            }).join('');
        };

        renderProjects();

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
