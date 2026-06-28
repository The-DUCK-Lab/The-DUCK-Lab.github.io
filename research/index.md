---
title: Research
description: "Peer-reviewed publications from the DUCK Lab at Imperial College London on neuro-symbolic AI, constrained deep learning, tabular data generation, theorem proving, and verifiable LLM reasoning."
layout: home
nav:
  order: 1
  tooltip: Published works
---

<section>
  <div class="container">
    <div class="section-head">
      <h1 class="section-title">Published <em>research</em></h1>
      <span class="section-meta">Peer-reviewed works</span>
    </div>

    {% assign citations = site.data.citations %}
    {% assign years_to_display = "2026,2025,2024,2023,2022" | split: "," %}

    {% for year in years_to_display %}
      {% assign current_year_papers = citations | where_exp: "item", "item.date contains year" %}
      {% if current_year_papers.size > 0 %}
        <div class="pub-year">
          <h2 class="pub-year-heading" id="{{ year }}">{{ year }}</h2>
          <div class="pub-list">
            {% for work in citations %}
              {% assign work_year = work.date | slice: 0, 4 %}
              {% if work_year == year %}
                {% include citation.html lookup=work.id style="rich" %}
              {% endif %}
            {% endfor %}
          </div>
        </div>
      {% endif %}
    {% endfor %}
  </div>
</section>
