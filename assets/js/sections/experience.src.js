window.PortfolioSectionRenderers = window.PortfolioSectionRenderers || {};

window.PortfolioSectionRenderers.experience = function renderExperienceSection(revealObserver) {
    const timeline = document.getElementById('experience-timeline-dynamic');
    if (!timeline) return;

    const experiences = [
        { title: 'Senior Software Engineer - Lemonilo', period: 'Jun 2026 - Present · Jakarta, Indonesia', points: ['Building and maintaining production backend services in Go as part of Lemonilo\'s engineering team.'] },
        { title: 'Data Engineer - PT. Eratani Teknologi Nusantara', period: 'Aug 2025 - Jun 2026 · Jakarta, Indonesia', points: ['Built reliable, scalable, and maintainable data pipelines to support analytics and business intelligence across the organisation.', 'Maintained and orchestrated ETL pipelines with Apache Airflow, automating ingestion from multiple sources.', 'Built modular, reusable ingestion builders for Airflow DAGs with custom macros, Jinja templates, and dynamic schema validation.', 'Refactored and optimised legacy ingestion scripts, reducing execution time and GCS object size while improving maintainability.', 'Enhanced DBT transformation layers with reusable macros and UDFs to streamline business-logic transformations.', 'Collaborated with data analysts and backend teams to design unified schemas and data models for finance, farmer, and user domains.', 'Implemented monitoring and alerting via Airflow task callbacks and Slack integration for data quality and job status.', 'Optimised GCS and BigQuery usage for cost efficiency and compliance with project-level quotas.'] },
        { title: 'Senior Backend Engineer - PT. Eratani Teknologi Nusantara', period: 'Jun 2024 - Aug 2025 · Jakarta, Indonesia', points: ['Ran ISO 27001 end to end: ISMS, policies, risk treatment, asset and access registers, and evidence that matched day-to-day delivery rather than a last-minute scramble.', 'Designed and implemented scalable backend architectures (Hexagonal & orchestration), improving performance by ~20%.', 'Conducted code reviews and merge requests, mentoring junior developers to uphold coding standards and ensure stability.', 'Analyzed feature changes, performed technical breakdowns, and provided mitigation strategies to ensure seamless development.', 'Built internal notification systems for critical production errors, enabling faster incident response and improved MTTR.', 'Led production migration from AWS to GCP (compute, data, storage), reducing downtime and operational cost.', 'Orchestrated ETL pipelines with Apache Airflow; built reusable DAG patterns with Jinja templates and dynamic schema validation.'] },
        { title: 'Backend Engineer - PT. Eratani Teknologi Nusantara', period: 'Jun 2023 - Jun 2024 · Jakarta, Indonesia', points: ['Successfully refactored and modernised legacy code with SOLID principles, unit tests, and modularity.', 'Collaborated cross-functionally with frontend, QA, PMs, and UI/UX teams to deliver systems on time.', 'Reduced bug potential through structured error handling and defensive coding strategies.', 'Developed internal notification systems to alert teams on critical production errors, enabling faster incident response.'] },
        { title: 'Development Mentor - GoEscape Academy', period: 'Apr 2025 - Present · Indonesia', points: ['Developed effective teaching strategies for micro-services, database design, and architecture patterns.', 'Emphasized clean code, SOLID, and test-driven development while nurturing a growth mindset.', 'Conducted personalized 1-on-1 mentoring sessions with tailored learning paths and progress tracking.'] },
        { title: 'Development Mentor - Afteroffice Academy', period: 'May 2024 - Mar 2025 · Indonesia', points: ['Mentored 20+ mentees per batch in backend development using Go for professional engineering roles.', 'Delivered practical project-based training to 100+ mentees to bridge theory and real-world implementation.', 'Collaborated with fellow mentors to design and review scalable system architectures.'] },
        { title: 'Backend Engineer - PT. Sentra Inovasi Prima (Yipy)', period: 'Aug 2022 - Feb 2024 · Jakarta, Indonesia', points: ['Developed and refactored RESTful APIs using Go and MVC for maintainability.', 'Led migration from monolith to micro-services architecture, improving flexibility and deployment efficiency.', 'Managed AWS infrastructure (EC2, RDS, S3) and optimized database design for reliability and performance.'] },
        { title: 'Backend Developer - PT. Teknologi Inovasi Mandiri', period: 'Jun 2022 - Oct 2022 · Tangerang, Indonesia', points: ['Built and maintained RESTful APIs using Spring Boot for E-SID under the Ministry of Transportation.', 'Developed and supported internal systems at Bank BJB for periodic automation workflows.', 'Led migration from MySQL to PostgreSQL to improve consistency and scalability.'] },
        { title: 'Junior Backend Developer - PT. Fliptech Lentera Inspirasi Pertiwi (Flip ID)', period: 'Jun 2021 - Oct 2021 · Jakarta, Indonesia', points: ['Developed RESTful API endpoints using Node.js and Express.', 'Implemented secure authentication with Bearer Tokens and JWT.', 'Conducted manual API testing and validation using Postman.'] },
        { title: 'Web Developer - PT. Bank Tabungan Negara (Persero) Tbk.', period: 'Aug 2020 - Mar 2021 · Jakarta, Indonesia', points: ['Developed internal attendance web applications using CodeIgniter and React.js.', 'Performed regular maintenance and performance checks for internal apps.', 'Monitored and updated logs in Unix/Linux environments for early issue detection.'] },
        { title: 'Academic Consultant, Information Technology (Project Based)', period: 'Jun 2019 - Apr 2024 · Indonesia', points: ['Advised students on research-oriented thesis topics and proposal preparation.', 'Guided thesis writing with emphasis on clarity and logical structure.', 'Provided backend consulting for web and Android application projects.'] }
    ];

    timeline.innerHTML = experiences.map((item) => `
        <article class="experience-item reveal">
            <div class="experience-header">
                <h3>${item.title}</h3>
                <span class="period">${item.period}</span>
            </div>
            <ul>${item.points.map((point) => `<li>${point}</li>`).join('')}</ul>
        </article>
    `).join('');

    if (!revealObserver) return;
    timeline.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
};
