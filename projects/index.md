---
title: Projects
description: "Software, datasets, and tools from the DUCK Lab — including PiShield (constraints in PyTorch), ROAD-R (autonomous driving with logical requirements), and Pythagoras-Prover (efficient Lean theorem provers)."
layout: home
nav:
  order: 2
  tooltip: Software, datasets, and more
---

<section>
  <div class="container">
    <div class="section-head">
      <h1 class="section-title">Our <em>projects</em></h1>
      <span class="section-meta">Software, datasets, and tools</span>
    </div>

    <div class="projects">
      {% for project in site.data.projects %}
        <article class="project-card">
          <div class="project-img">
            {% if project.image %}
              <img src="{{ project.image | relative_url }}" alt="{{ project.title }}">
            {% endif %}
          </div>
          <div class="project-body">
            {% if project.tags %}
              <div class="project-tags">
                {% for tag in project.tags %}<span class="tag">{{ tag }}</span>{% endfor %}
              </div>
            {% endif %}
            <h3 class="project-title">{{ project.title }}</h3>
            {% if project.subtitle %}
              <div class="project-subtitle">{{ project.subtitle }}</div>
            {% endif %}
            <p class="project-desc">{{ project.description }}</p>
            {% include project-links.html project=project %}
          </div>
        </article>
      {% endfor %}
    </div>
  </div>
</section>
