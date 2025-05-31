---
layout: minimal
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<div class="cv-wrapper">

  <div class="cv-header">
    <h1>Curriculum Vitae</h1>
    <div class="cv-actions">
      <a href="/assets/pdf/CV_LouisBERTHIER.pdf" class="btn btn-primary">
        <i class="fas fa-download"></i> Download Full CV
      </a>
    </div>
  </div>

  <nav class="pub-nav">
    <ul>
      <li><a href="#education" class="pub-nav-item active" data-target="education">Education</a></li>
      <li><a href="#experience" class="pub-nav-item" data-target="experience">Work</a></li>
      <li><a href="#skills" class="pub-nav-item" data-target="skills">Skills</a></li>
      <li><a href="#projects" class="pub-nav-item" data-target="projects">Projects</a></li>
      <li><a href="#awards" class="pub-nav-item" data-target="awards">Awards</a></li>
      <li><a href="#voluntary" class="pub-nav-item" data-target="voluntary">Volunteering</a></li>
    </ul>
  </nav>
  
  <!-- Include Education Section from _includes -->
  {% include cv/education.html %}

  <!-- Include Work Experience Section -->
  {% include cv/work-experience.html %}

  <!-- Include Technical Skills Section -->
  {% include cv/technical-skills.html %}

  <!-- Include Projects Section -->
  {% include cv/projects.html %}

  <!-- Include Awards Section -->
  {% include cv/awards.html %}

  <!-- Include Volunteering Section -->
  {% include cv/volunteering.html %}

</div> <!-- Close cv-wrapper -->

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