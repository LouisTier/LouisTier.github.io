// Custom JavaScript for the minimal theme

document.addEventListener('DOMContentLoaded', function() {
  // Ensure navigation is visible
  const navLinks = document.querySelector('.nav-links');
  const navLinkItems = document.querySelectorAll('.nav-links a');
  
  if (navLinks) {
    navLinks.style.display = 'flex';
    navLinks.style.visibility = 'visible';
    navLinks.style.opacity = '1';
  }
  
  navLinkItems.forEach(link => {
    link.style.display = 'inline-block';
    link.style.visibility = 'visible';
    link.style.opacity = '1';
  });
  
  // Get the current URL path
  const currentPath = window.location.pathname;
  
  // Get all navigation links
  const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
  
  // Function to add active class to matching link
  function setActiveClass(links) {
    links.forEach(link => {
      const linkHref = link.getAttribute('href');
      // Match the exact path or a path that starts with the href (but only if href is not just '/')
      if (linkHref === currentPath || 
          (linkHref !== '/' && currentPath.startsWith(linkHref))) {
        link.classList.add('active');
      }
    });
  }
  
  // Apply to both desktop and mobile navigation
  setActiveClass(navLinkItems);
  setActiveClass(mobileNavLinks);
  
  // Mobile menu toggle functionality
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (mobileMenuToggle && mobileNav) {
    mobileMenuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileNav.classList.toggle('visible');
    });
    
    // Close mobile menu when a link is clicked
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('visible');
        mobileMenuToggle.classList.remove('active');
      });
    });
  }
  
  // Hide mobile menu on window resize if screen becomes large enough
  window.addEventListener('resize', function() {
    if (window.innerWidth > 900 && mobileNav) {
      mobileNav.classList.remove('visible');
      if (mobileMenuToggle) {
        mobileMenuToggle.classList.remove('active');
      }
    }
    
    // Re-ensure navigation is visible after resize
    if (navLinks) {
      navLinks.style.display = 'flex';
      navLinks.style.visibility = 'visible';
      navLinks.style.opacity = '1';
    }
  });
  
  // Citation toggle functionality
  const citationToggles = document.querySelectorAll('.citation-toggle');
  
  citationToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      
      const parentCard = this.closest('.pub-card');
      const citationContent = parentCard.querySelector('.citation-content');
      
      if (citationContent) {
        if (citationContent.style.display === 'none' || !citationContent.style.display) {
          citationContent.style.display = 'block';
          this.textContent = 'Hide Citation';
        } else {
          citationContent.style.display = 'none';
          this.textContent = 'Cite';
        }
      }
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId !== '#' && document.querySelector(targetId)) {
        e.preventDefault();
        
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add visual indicator for scrolling
  const header = document.querySelector('.top-nav');
  
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
}); 