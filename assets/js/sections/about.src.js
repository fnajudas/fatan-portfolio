window.PortfolioSectionRenderers = window.PortfolioSectionRenderers || {};

window.PortfolioSectionRenderers.about = function renderAboutSection(revealObserver) {
    const aboutLayout = document.getElementById('about-layout-dynamic');
    if (!aboutLayout) return;

    aboutLayout.innerHTML = `
        <article class="about-copy reveal reveal-from-left">
            <p class="about-intro">I am <span class="about-keywords">Muhammad Fatan Najuda Sarwan</span>, a backend engineer with 5+ years of experience delivering production systems in fintech, agriculture, education, and LMS products.</p>
            <p>I specialize in <span class="about-keywords">Golang services</span>, <span class="about-keywords">data pipelines</span>, and <span class="about-keywords">cloud-native architecture</span>. I enjoy designing APIs, data models, and workflows that are easy to evolve as products grow.</p>
            <p>Beyond implementation, I support teams through code review, mentoring, and technical training so delivery quality stays high and production stays predictable.</p>
            <div class="about-metrics" aria-label="Career highlights">
                <div class="about-metric"><strong>5+</strong><span>Years Experience</span></div>
                <div class="about-metric"><strong>20%+</strong><span>System Performance Gains</span></div>
                <div class="about-metric"><strong>4 Domains</strong><span>Cross-Industry Delivery</span></div>
                <div class="about-metric"><strong>Mentoring</strong><span>Technical Coaching</span></div>
            </div>
        </article>
        <aside class="about-json-card reveal reveal-from-right" aria-label="About profile in JSON">
            <div class="about-json-header">
                <span class="about-json-dots" aria-hidden="true"><i></i><i></i><i></i></span>
                <span class="about-json-file">about-profile.json</span>
            </div>
            <pre class="about-json-body"><code class="about-json-code">{
  <span class="about-json-k">"name"</span><span class="about-json-p">:</span> <span class="about-json-s">"Muhammad Fatan Najuda Sarwan"</span><span class="about-json-p">,</span>
  <span class="about-json-k">"role"</span><span class="about-json-p">:</span> <span class="about-json-p">[</span>
    <span class="about-json-s">"Senior Backend Engineer"</span><span class="about-json-p">,</span>
    <span class="about-json-s">"Data Engineer"</span><span class="about-json-p">,</span>
    <span class="about-json-s">"Technical Mentor"</span><span class="about-json-p">,</span>
    <span class="about-json-s">"Product Engineer"</span>
  <span class="about-json-p">]</span><span class="about-json-p">,</span>
  <span class="about-json-k">"location"</span><span class="about-json-p">:</span> <span class="about-json-s">"Indonesia"</span><span class="about-json-p">,</span>
  <span class="about-json-k">"experience"</span><span class="about-json-p">:</span> <span class="about-json-s">"5+ years"</span><span class="about-json-p">,</span>
  <span class="about-json-k">"focus"</span><span class="about-json-p">:</span> <span class="about-json-p">[</span>
    <span class="about-json-s">"Golang backend services"</span><span class="about-json-p">,</span>
    <span class="about-json-s">"Data engineering (Airflow, dbt, BigQuery)"</span><span class="about-json-p">,</span>
    <span class="about-json-s">"Cloud systems (AWS, GCP)"</span><span class="about-json-p">,</span>
    <span class="about-json-s">"Mentoring and technical training"</span>
  <span class="about-json-p">]</span><span class="about-json-p">,</span>
  <span class="about-json-k">"availability"</span><span class="about-json-p">:</span> <span class="about-json-s">"Open for backend roles and collaborations"</span>
}</code></pre>
        </aside>
    `;

    if (!revealObserver) return;
    aboutLayout.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
};
