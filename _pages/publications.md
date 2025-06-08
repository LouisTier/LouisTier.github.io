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

  <!-- Include Journals Section from _includes -->
  {% include publications/journals.html %}

  <!-- Include Conferences Section from _includes -->
  {% include publications/conferences.html %}

  <!-- Include Talks Section from _includes -->
  {% include publications/talks.html %}

  <!-- Include Posters Section from _includes -->
  {% include publications/posters.html %}

</div> <!-- Close publications-wrapper -->

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Main publications tabs
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
    
    // Talks sub-tabs
    const talksNavItems = document.querySelectorAll('.talks-nav-item');
    const talksContentSections = document.querySelectorAll('.talks-content-section');
    
    talksNavItems.forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all nav items and sections
        talksNavItems.forEach(i => i.classList.remove('active'));
        talksContentSections.forEach(s => s.classList.remove('active'));
        
        // Add active class to clicked item
        this.classList.add('active');
        
        // Show the appropriate section
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
      });
    });
  });
</script> 