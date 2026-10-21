---
layout: page
permalink: /repositories/
title: Repositories
description: Open-source code for my papers and libraries.
seo_description: "Open-source code by Louis Berthier: TorchSOM, a PyTorch library for self-organizing maps (JMLR), and the code of SOCP (NeurIPS 2026) and xopa."
# Edit `_data/repositories.yml`: `repos` lists the repositories shown as cards (name, description, language, links).
nav: false
---

{% if site.data.repositories.github_users %}

## GitHub users

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.repos %}
<div class="lb-repos">
  {% for repo in site.data.repositories.repos %}
    {% case repo.language %}
      {% when "Python" %}{% assign lang_color = "#3572A5" %}
      {% when "Jupyter Notebook" %}{% assign lang_color = "#DA5B0B" %}
      {% else %}{% assign lang_color = "#8b8b8b" %}
    {% endcase %}
    <div class="card lb-repo">
      <div class="card-body">
        <div class="lb-repo-head">
          <h3 class="card-title">
            <a href="https://github.com/{{ repo.name }}"><i class="fa-brands fa-github"></i>{{ repo.name }}</a>
          </h3>
          {% if repo.language %}
            <span class="lb-repo-lang"><span class="lb-lang-dot" style="background-color: {{ lang_color }}"></span>{{ repo.language }}</span>
          {% endif %}
        </div>
        <p class="card-text">{{ repo.description }}</p>
        {% if repo.links %}
          <div class="lb-research-links">
            {% for link in repo.links %}
              <a class="btn btn-sm z-depth-0" href="{{ link.url }}" role="button">{{ link.label }}</a>
            {% endfor %}
          </div>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>
{% endif %}
