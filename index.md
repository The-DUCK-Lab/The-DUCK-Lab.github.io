---
title: Home
nav:
  order: 0
  tooltip: Home
---

<div style="display: flex; flex-wrap: wrap; gap: 40px; align-items: center; margin-bottom: 60px;">
  
  <div style="flex: 1; min-width: 300px; text-align: left;">
        <h1 style="margin-top: 0; text-align: left;">About</h1>
        <p>
          Data, Uncertainty, Constraints, Knowledge — four words that sit at the heart of everything we do. At the DUCK Lab, we build AI systems that don't just learn from data, but reason over it: systems that acknowledge what they don't know, respect the rules of the world they operate in, and draw on structured knowledge to make better decisions. We're a small, tight-knit team at Imperial College London, united by a belief that we don't need to compromise between a powerful AI and a safe one.
        </p>
        <p>
          Interested in joining the lab? Contact me at firstname initial DOT surname AT imperial.ac.uk.
        </p>
        <p>
          Come for the research, stay for the good company!
        </p>
  </div>

  <div style="flex: 1; min-width: 300px;">
        <img 
          src="/images/group_photo.jpeg" 
          alt="DUCK Lab Group Photo" 
          style="width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"
        >
      </div>

</div>

{% comment %}
<h2 style="border-bottom: 2px solid #f2f2f2; padding-bottom: 10px;">
  {% include icon.html icon="fa-solid fa-newspaper" %} Recent News
</h2>
{% endcomment %}

<h1 style="margin-top: 60px; border-bottom: 2px solid #f2f2f2; padding-bottom: 10px; text-align: left;">
 {% include icon.html icon="fa-solid fa-newspaper" %} Recent News
</h1>


<div class="news-list">
  {% for item in site.data.news %}
            <div style="margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid #eee;">
              
              <div style="font-size: 0.85rem; color: #888; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px;">
                {{ item.date }}
              </div>
        
              <h3 style="margin: 0 0 5px 0; font-size: 1.15rem;">
                {{ item.title }}
              </h3>
        
              {% if item.subtitle %}
                <div style="font-size: 0.95rem; font-style: italic; color: #555; margin-bottom: 8px;">
                  {{ item.subtitle }}
                </div>
              {% endif %}
        
              <div style="font-size: 1rem; line-height: 1.6;">
                {{ item.description | markdownify | remove: '<p>' | remove: '</p>' }}
              </div>
        
            </div>
  {% endfor %}
</div>