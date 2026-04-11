---
title: People
nav:
  order: 3
  tooltip: About the team
---

{% comment %}
# Team

# {% include icon.html icon="fa-solid fa-users" %}People

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{% include section.html %}

{% endcomment %}



{% comment %}
{% include list.html data="members" component="portrait" filter="role == 'pi'" %}
{% include list.html data="members" component="portrait" filter="role != 'pi'" %}
{% endcomment %}

{% comment %}
## Principal Investigator
{% include list.html data="members" component="portrait" filter="role == 'professor'" %}

## Postdoctoral Researchers
{% include list.html data="members" component="portrait" filter="role == 'postdoc'" %}

## PhD Students
{% include list.html data="members" component="portrait" filter="role == 'phd'" %}
{% endcomment %}


{% include list.html data="members" component="member-bio" filter="role == 'professor'" %}
{% include list.html data="members" component="member-bio" filter="role == 'fellow'" %}
{% include list.html data="members" component="member-bio" filter="role == 'postdoc'" %}
{% include list.html data="members" component="member-bio" filter="role == 'phd' && name != 'Dylan John'" %}
{% include list.html data="members" component="member-bio" filter="name == 'Dylan John'" %}

{% comment %}
## Principal Investigator
{% include list.html data="members" component="member-bio" filter="role == 'professor'" %}

## Postdoctoral Researchers
{% include list.html data="members" component="member-bio" filter="role == 'postdoc'" %}

## PhD Students
{% include list.html data="members" component="member-bio" filter="role == 'phd'" %}
{% endcomment %}


{% comment %}
{% include section.html background="images/background.jpg" dark=true %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.



{% include section.html %}
{% endcomment %}

{% capture content %}

{% comment %}

{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% endcomment %}

{% endcapture %}

{% include grid.html style="square" content=content %}
