---
title: People
description: "Meet the DUCK Lab team at Imperial College London — faculty, postdocs, and PhD students working on neuro-symbolic AI, constrained machine learning, theorem proving with LLMs, and verifiable reasoning."
layout: home
nav:
  order: 3
  tooltip: Meet the team
---

<section>
  <div class="container">
    <div class="section-head">
      <h1 class="section-title">The <em>team</em></h1>
      <span class="section-meta">Imperial College London</span>
    </div>

    <div class="team-grid">
      {% assign members = site.members | sort: "order" %}
      {% for m in members %}
        {% include member-card.html member=m %}
      {% endfor %}
    </div>
  </div>
</section>
