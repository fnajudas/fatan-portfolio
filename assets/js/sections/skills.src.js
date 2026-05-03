window.PortfolioSectionRenderers = window.PortfolioSectionRenderers || {};

window.PortfolioSectionRenderers.skills = function renderSkillsSection(revealObserver) {
    const skillsGrid = document.getElementById('skills-grid-dynamic');
    if (!skillsGrid) return;

    const skills = [
        { title: 'Backend', desc: 'Production-grade services with clear contracts and observability.', badges: ['Golang Native', 'Rust', 'Java', 'Spring Framework', 'REST API design', 'Gin Framework', 'gRPC', 'WebSocket', 'SSE', 'LiveKit', 'RabbitMQ'] },
        { title: 'Databases', desc: 'Reliable persistence and query tuning for operational workloads.', badges: ['MongoDB', 'Redis', 'MySQL', 'PostgreSQL', 'Elasticsearch'] },
        { title: 'Data Engineering', desc: 'Orchestrated pipelines, modeled layers, and trusted dashboards.', badges: ['Python', 'Airflow', 'BigQuery', 'Jinja', 'dbt', 'GCS'] },
        { title: 'DevOps / Cloud', desc: 'Move fast with dependable environments and storage.', badges: ['AWS S3', 'GCP Composer', 'GCP Cloud Storage', 'Kubernetes', 'Docker', 'GitLab CI/CD', 'Nginx', 'Grafana', 'OpenTelemetry', 'Jaeger', 'Google Pub/Sub', 'MinIO', 'FCM'] },
        { title: 'Practices', desc: 'Architecture and habits that survive code review, production, and the occasional audit.', badges: ['Modern Architecture', 'Unit Testing', 'Object Oriented Programming', 'Software Development Approaches', 'ISO 27001 (ISMS)'] }
    ];

    skillsGrid.innerHTML = skills.map((skill) => `
        <div class="skill-card reveal">
            <h3>${skill.title}</h3>
            <p>${skill.desc}</p>
            <div class="badge-row">${skill.badges.map((badge) => `<span class="badge">${badge}</span>`).join('')}</div>
        </div>
    `).join('');

    if (!revealObserver) return;
    skillsGrid.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
};
