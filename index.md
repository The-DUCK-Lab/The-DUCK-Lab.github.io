---
title: Home
description: "The DUCK Lab at Imperial College London builds AI systems that don't just learn from data but reason over it — combining machine learning with structured knowledge, constraints, and calibrated uncertainty. Led by Eleonora Giunchiglia."
layout: home
nav:
  order: 0
  tooltip: Home
---

{% assign months = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec" | split: "," %}

<!-- ============================================================ -->
<!-- HERO                                                           -->
<!-- ============================================================ -->
<section class="hero">
  <div class="container">
    <div class="hero-grid">
      <div class="hero-body">
        <div class="mega-lockup">
          <div class="mega-duck" aria-label="DUCK">
            <span class="l d">D</span><span class="l u">U</span><span class="l c">C</span><span class="l k">K</span>
          </div>
          <div class="mega-lab">Lab</div>
        </div>

        <div class="duck-legend">
          <div class="leg-d"><b>Data</b><span>What we learn from</span></div>
          <div class="leg-u"><b>Uncertainty</b><span>What we don't know</span></div>
          <div class="leg-c"><b>Constraints</b><span>Rules of the world</span></div>
          <div class="leg-k"><b>Knowledge</b><span>Structure we trust</span></div>
        </div>

        <p class="lede">
          We build AI systems that don't just learn from data, but <em>reason over it</em>. Systems that acknowledge what they don't know, respect the rules of the world, and draw on structured knowledge to make better decisions.
        </p>

        <div class="cta-row">
          <a href="{{ '/team/' | relative_url }}" class="btn btn-primary">Meet the team</a>
          <a href="{{ '/research/' | relative_url }}" class="btn btn-ghost">Our research →</a>
        </div>
      </div>

      <div class="hero-aside">
        <div class="hero-photo">
          <img src="{{ '/images/group_photo.jpeg' | relative_url }}" alt="DUCK Lab group photo">
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- ABOUT                                                          -->
<!-- ============================================================ -->
<section>
  <div class="container">
    <div class="about-block">
      <p>Four words sit at the heart of everything we do. Data. Uncertainty. Constraints. Knowledge. At the DUCK Lab we build AI systems that don't compromise between being powerful and being safe — a small, tight-knit team at Imperial College London united by the belief that rigor and creativity belong in the same sentence.</p>
      <p class="about-meta">Interested in joining the lab? Contact Eleonora at <code>e [DOT] giunchiglia [AT] imperial [DOT] ac [DOT] uk</code>.<br>🦆 Come for the research, stay for the good company.</p>
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- NEWS                                                           -->
<!-- ============================================================ -->
<section class="section-alt">
  <div class="container">
    <div class="section-head">
      <h2 class="section-title">Recent <em>news</em></h2>
      <a href="{{ '/news/' | relative_url }}" class="section-meta">All updates →</a>
    </div>

    <div class="timeline">
      {% for item in site.data.news limit: 5 %}
        {% assign parts = item.date | split: "-" %}
        {% assign m_idx = parts[0] | plus: 0 | minus: 1 %}
        <div class="timeline-item">
          <div class="timeline-date">{{ months[m_idx] }} {{ parts[1] }}</div>
          <h3 class="timeline-title">{{ item.title }}</h3>
          {% if item.subtitle %}
            <div class="timeline-subtitle">{{ item.subtitle }}</div>
          {% endif %}
          <p class="timeline-desc">{{ item.description | markdownify | remove: "<p>" | remove: "</p>" }}</p>
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- TEAM                                                           -->
<!-- ============================================================ -->
<section>
  <div class="container">
    <div class="section-head">
      <h2 class="section-title">The <em>team</em></h2>
      <a href="{{ '/team/' | relative_url }}" class="section-meta">Full team page →</a>
    </div>

    {% include team-showcase.html %}
  </div>
</section>
