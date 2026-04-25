window.PortfolioSectionRenderers = window.PortfolioSectionRenderers || {};

window.PortfolioSectionRenderers.projects = function renderProjects(revealObserver) {
    const projectGrid = document.getElementById('project-grid-dynamic');
    if (!projectGrid) return;

    const projects = [
        {
            tags: ['Project based', 'Microservices'],
            title: 'PT. Nabati Group (Project Based)',
            description: '<strong>Feb 2026 - May 2026.</strong> Architected, maintained, and operated Go (Fiber) micro-services across inventory, sales, finance, and master data (MongoDB, Redis, RabbitMQ, gRPC/protobuf SDKs), integrated SAP HANA/NiFi pipelines, applied multi-tenant PH configuration, hardened observability, CI/CD, and testing, and partnered with stakeholders for a stable Philippine rollout.',
            tech: 'Go Fiber · MongoDB · Redis · RabbitMQ · gRPC · protobuf · SAP HANA · NiFi',
            role: 'Architecting and operating backend micro-services for rollout.'
        },
        {
            tags: ['Project based', 'Rust'],
            title: 'PT. Astra International Tbk (Project Based)',
            description: '<strong>Nov 2024 - Jan 2025.</strong> Greenfield backend engagement: defined service boundaries and module layout, then implemented core services in Rust from scratch - prioritizing safety, performance, and maintainability. Delivered a foundation the organisation could extend with confidence: clear structure, repeatable build and test workflows, and a path toward production hardening.',
            tech: 'Rust · Cargo',
            role: 'End-to-end ownership - architecture, Rust implementation, and rollout readiness.'
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
            description: 'Led the migration of legacy systems into modern, scalable architectures - including monolith-to-microservices restructuring, database schema redesign, and backend service refactoring to improve reliability and maintainability.',
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

    if (!revealObserver) return;
    projectGrid.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
};
