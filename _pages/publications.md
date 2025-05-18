---
layout: minimal
title: "Publications"
permalink: /publications/
author_profile: true
---

# Publications

My published research focuses on applying mathematical principles to machine learning challenges, with an emphasis on developing robust and interpretable models.

<div class="pub-grid">
  {% for post in site.publications reversed %}
    {% include archive-single-card.html %}
  {% endfor %}
</div>

{% if site.publications.size == 0 %}
<div class="empty-message">
  <p>No publications available yet. Check back soon for updates!</p>
  
  <h2>In Progress</h2>
  <p>I'm currently working on research in the following areas:</p>
  <ul>
    <li>Theoretical foundations of machine learning</li>
    <li>Advanced optimization methods for deep learning</li>
    <li>Applications of machine learning in scientific computing</li>
  </ul>
</div>
{% endif %}

## Manual Publications

<div class="pub-grid">
  <div class="pub-card">
    <h3 class="pub-card-title"><a href="https://ieeexplore.ieee.org/abstract/document/10095570">2DSBG: A 2d Semi Bi-Gaussian Filter Adapted for Adjacent and Multi-Scale Line Feature Detection</a></h3>
    <p class="pub-card-authors">B. Magnier, G. Sakhi Shokouh, L. Berthier, M. Pie and A. Ruggiero</p>
    <p class="pub-card-journal">ICASSP 2023</p>
    <p>This paper presents a novel 2D Semi Bi-Gaussian (2DSBG) filter for detecting adjacent and multi-scale line features in images.</p>
    <div class="pub-card-links">
      <a href="https://ieeexplore.ieee.org/abstract/document/10095570" class="btn btn-sm">Paper</a>
    </div>
  </div>
  
  <div class="pub-card">
    <h3 class="pub-card-title">Detecting fast-ripples on both micro- and macro-electrodes in epilepsy: a Fourier Analysis-based Scalogram based detector (FAST)</h3>
    <p class="pub-card-authors">L. Gardy*, E. J. Barbeau, J. Curot, L. Valton, C. Hurter and L. Berthier</p>
    <p class="pub-card-journal">Submitted for peer review at Journal of Neuroscience Methods</p>
    <p>This work presents a novel approach for detecting fast-ripples in epilepsy patients using Fourier Analysis-based Scalogram techniques.</p>
  </div>
</div>

## Master's Thesis

<div class="pub-grid">
  <div class="pub-card">
    <h3 class="pub-card-title">Model-Based Quality-Diversity</h3>
    <p class="pub-card-authors">Louis Berthier</p>
    <p class="pub-card-journal">Imperial College London, 2022</p>
    <p>Explored novel approaches for Quality-Diversity optimization using model-based techniques, with applications in robotics and control systems.</p>
    <div class="pub-card-links">
      <a href="/files/pdf/IRP_LouisBERTHIER.pdf" class="btn btn-sm">Thesis PDF</a>
      <a href="https://github.com/LouisTier/Model-Based_Quality-Diversity" class="btn btn-sm">Code</a>
    </div>
  </div>
</div>
