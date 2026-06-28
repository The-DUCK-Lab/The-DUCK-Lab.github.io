---
title: News
description: "Latest updates from the DUCK Lab at Imperial College London — paper acceptances, project releases, talks, and lab milestones."
layout: home
nav:
  order: 4
  tooltip: Lab updates
---

{% assign months = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec" | split: "," %}

<section>
  <div class="container">
    <div class="section-head">
      <h1 class="section-title">Lab <em>news</em></h1>
      <span class="section-meta">Everything new at DUCK</span>
    </div>

    <div class="timeline">
      {% for item in site.data.news %}
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
