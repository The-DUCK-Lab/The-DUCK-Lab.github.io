---
title: People
description: "Meet the DUCK Lab team at Imperial College London — faculty, postdocs, and PhD students working on neuro-symbolic AI, constrained machine learning, theorem proving with LLMs, and verifiable reasoning."
layout: home
nav:
  order: 3
  tooltip: Meet the team
---

{% assign members = site.members | sort: "order" %}
{% assign current_members = members | where_exp: "m", "m.past != true" %}
{% assign past_members = members | where_exp: "m", "m.past == true" %}

<section>
  <div class="container">
    <div class="section-head">
      <h1 class="section-title">The <em>team</em></h1>
      <span class="section-meta">Imperial College London</span>
    </div>

    <div class="team-grid">
      {% for m in current_members %}
        {% include member-card.html member=m %}
      {% endfor %}
    </div>
  </div>
</section>

{% if past_members.size > 0 %}
<section>
  <div class="container">
    <div class="section-head section-head-small">
      <h2 class="section-title">Past <em>members</em></h2>
    </div>

    <div class="team-grid team-grid-small">
      {% for m in past_members %}
        {% include member-card.html member=m %}
      {% endfor %}
    </div>
  </div>
</section>
{% endif %}
