---
layout: minimal
title: "Publications"
permalink: /publications/
author_profile: true
---

<div class="publications-wrapper">
  <nav class="pub-nav">
    <ul>
      <li><a href="#journals" class="pub-nav-item active" data-target="journals">Journals</a></li>
      <li><a href="#conferences" class="pub-nav-item" data-target="conferences">Conferences</a></li>
      <li><a href="#talks" class="pub-nav-item" data-target="talks">Talks</a></li>
      <li><a href="#posters" class="pub-nav-item" data-target="posters">Posters</a></li>
    </ul>
  </nav>

  <div class="pub-section active" id="journals">
    <h1>Journal Publications</h1>
    
    <div class="pub-grid">
      <div class="pub-card">
        <h3 class="pub-card-title"><a href="https://arxiv.org/abs/..." target="_blank">Detecting fast-ripples on both micro- and macro-electrodes in epilepsy: a Fourier Analysis-based Scalogram based detector (FAST)</a></h3>
        <p class="pub-card-authors">L. Gardy*, E. J. Barbeau, J. Curot, L. Valton, C. Hurter and L. Berthier</p>
        <p class="pub-card-journal">Submitted to Journal of Neuroscience Methods</p>
        <p>We present a novel approach for detecting fast-ripples in epilepsy patients using Fourier Analysis-based Scalogram techniques, potentially improving the diagnosis and treatment of epilepsy.</p>
        <div class="pub-card-links">
          <a href="#" class="btn btn-sm citation-toggle">Cite</a>
          <div class="citation-content" style="display: none;">
            <pre>@article{gardy2023detecting,
  title={Detecting fast-ripples on both micro- and macro-electrodes in epilepsy: a Fourier Analysis-based Scalogram based detector (FAST)},
  author={Gardy, L. and Barbeau, E. J. and Curot, J. and Valton, L. and Hurter, C. and Berthier, L.},
  journal={Journal of Neuroscience Methods},
  note={Under review},
  year={2023}
}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="pub-section" id="conferences">
    <h1>Conference Proceedings</h1>
    
    <div class="pub-grid">
      <div class="pub-card">
        <h3 class="pub-card-title"><a href="https://ieeexplore.ieee.org/abstract/document/10095570" target="_blank">2DSBG: A 2d Semi Bi-Gaussian Filter Adapted for Adjacent and Multi-Scale Line Feature Detection</a></h3>
        <p class="pub-card-authors">B. Magnier, G. Sakhi Shokouh, L. Berthier, M. Pie and A. Ruggiero</p>
        <p class="pub-card-journal">ICASSP 2023 - IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)</p>
        <p>We developed a novel 2D Semi Bi-Gaussian (2DSBG) filter for detecting adjacent and multi-scale line features in images, with applications in computer vision and image processing.</p>
        <div class="pub-card-links">
          <a href="https://ieeexplore.ieee.org/abstract/document/10095570" class="btn btn-sm" target="_blank">Paper</a>
          <a href="#" class="btn btn-sm citation-toggle">Cite</a>
          <div class="citation-content" style="display: none;">
            <pre>@inproceedings{magnier20232dsbg,
  title={2DSBG: A 2d Semi Bi-Gaussian Filter Adapted for Adjacent and Multi-Scale Line Feature Detection},
  author={Magnier, B. and Sakhi Shokouh, G. and Berthier, L. and Pie, M. and Ruggiero, A.},
  booktitle={ICASSP 2023-2023 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},
  pages={1--5},
  year={2023},
  organization={IEEE}
}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="pub-section" id="talks">
    <h1>Invited Talks</h1>
    
    <div class="pub-grid">
      <div class="pub-card">
        <h3 class="pub-card-title">Bayesian Approaches to Machine Learning: Foundations and Applications</h3>
        <p class="pub-card-authors">L. Berthier</p>
        <p class="pub-card-journal">Mathematics Department Seminar, École Polytechnique (2023)</p>
        <p>An introduction to Bayesian methods in machine learning, focusing on uncertainty quantification and its applications in decision-making systems.</p>
      </div>
    </div>
  </div>

  <div class="pub-section" id="posters">
    <h1>Posters</h1>
    
    <div class="pub-grid">
      <div class="pub-card">
        <h3 class="pub-card-title">Model-Based Quality-Diversity Optimization</h3>
        <p class="pub-card-authors">L. Berthier, A. Cully</p>
        <p class="pub-card-journal">Imperial College London Research Showcase (2022)</p>
        <p>Presented research on improving the sample efficiency of Quality-Diversity optimization algorithms using surrogate models.</p>
        <div class="pub-card-links">
          <a href="/files/pdf/IRP_LouisBERTHIER.pdf" class="btn btn-sm">Download</a>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.pub-nav-item');
    const sections = document.querySelectorAll('.pub-section');
    
    navItems.forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all nav items and sections
        navItems.forEach(i => i.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));
        
        // Add active class to clicked item
        this.classList.add('active');
        
        // Show the appropriate section
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
      });
    });
  });
</script>
