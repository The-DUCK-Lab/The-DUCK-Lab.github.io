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

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Published research — DUCK Lab",
  "description": "{{ page.description | xml_escape }}",
  "url": "{{ site.url }}{{ site.baseurl }}{{ page.url }}",
  "isPartOf": {
    "@type": "WebSite",
    "name": "{{ site.title | xml_escape }}",
    "url": "{{ '/' | absolute_url }}"
  },
  "about": {
    "@type": "ResearchOrganization",
    "name": "DUCK Lab",
    "url": "{{ '/' | absolute_url }}"
  },
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": {{ citations.size }},
    "itemListElement": [
      {% for work in citations %}
      {
        "@type": "ListItem",
        "position": {{ forloop.index }},
        "item": {
          "@type": "ScholarlyArticle",
          "name": "{{ work.title | strip_html | xml_escape }}",
          "headline": "{{ work.title | strip_html | xml_escape }}",
          {% if work.description %}"abstract": "{{ work.description | strip_html | strip | xml_escape }}",{% endif %}
          {% if work.link %}"url": "{{ work.link }}",
          "sameAs": "{{ work.link }}",{% endif %}
          {% if work.date %}"datePublished": "{{ work.date }}",{% endif %}
          {% if work.image %}"image": "{{ work.image | absolute_url }}",{% endif %}
          {% if work.id %}"identifier": "{{ work.id }}",{% endif %}
          "author": [{% for a in work.authors %}
            {"@type":"Person","name":"{{ a | xml_escape }}"}{% unless forloop.last %},{% endunless %}{% endfor %}
          ]{% if work.publisher %},
          "publisher": {
            "@type": "Organization",
            "name": "{{ work.publisher | xml_escape }}"
          },
          "isPartOf": {
            "@type": "PublicationVolume",
            "publisher": {"@type":"Organization","name":"{{ work.publisher | xml_escape }}"}
          }{% endif %}
        }
      }{% unless forloop.last %},{% endunless %}{% endfor %}
    ]
  }
}
</script>
