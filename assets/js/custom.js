// Custom JavaScript for the minimal theme

document.addEventListener('DOMContentLoaded', function() {
  /******************************************
   * THEME TOGGLE FUNCTIONALITY
   ******************************************/
  function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    
    if (!themeToggle && !mobileThemeToggle) {
      console.error('Theme toggle buttons not found');
      return;
    }
    
    // Make sure we update the icon according to current theme
    function updateIcons() {
      const isDark = document.documentElement.classList.contains('dark-mode');
      const allIcons = document.querySelectorAll('#theme-toggle i, #mobile-theme-toggle i');
      
      allIcons.forEach(icon => {
        if (isDark) {
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
        } else {
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
        }
      });
    }
    
    // Update icons on init
    updateIcons();
    
    // Toggle Theme Function
    function toggleTheme(e) {
      if (e) e.preventDefault();
      
      const html = document.documentElement;
      const isDark = html.classList.contains('dark-mode');
      
      if (isDark) {
        // Switch to light mode
        html.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        console.log('Switched to light mode');
      } else {
        // Switch to dark mode
        html.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        console.log('Switched to dark mode');
      }
      
      // Update icons
      updateIcons();
    }
    
    // Add click listeners
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (mobileThemeToggle) {
      mobileThemeToggle.addEventListener('click', toggleTheme);
    }
  }
  
  // Initialize theme toggle
  initThemeToggle();
  
  /******************************************
   * NAVIGATION FUNCTIONALITY
   ******************************************/
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
  
  /******************************************
   * PUBLICATION PAGE FUNCTIONALITY
   ******************************************/
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
  
  /******************************************
   * GENERAL UI FUNCTIONALITY
   ******************************************/
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

  /******************************************
   * PUBLICATION/CV PAGE FUNCTIONALITY
   ******************************************/
  // Publication/CV Section Navigation (unified system)
  function initSectionNavigation() {
    const navItems = document.querySelectorAll('.pub-nav-item');
    const sections = document.querySelectorAll('.pub-section');
    
    console.log('Navigation initialization:', {
      navItems: navItems.length,
      sections: sections.length,
      navItemsList: Array.from(navItems).map(item => ({
        text: item.textContent,
        target: item.getAttribute('data-target')
      })),
      sectionsList: Array.from(sections).map(section => section.id)
    });
    
    if (navItems.length === 0 || sections.length === 0) {
      console.log('Skipping navigation init - no nav items or sections found');
      return; // Not on a page with this navigation
    }
    
    // Function to show a specific section
    function showSection(targetId) {
      console.log('Showing section:', targetId);
      
      // Hide all sections
      sections.forEach(section => {
        section.classList.remove('active');
        console.log('Hiding section:', section.id);
      });
      
      // Remove active class from all nav items
      navItems.forEach(item => {
        item.classList.remove('active');
      });
      
      // Show target section
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');
        console.log('Showing section:', targetSection.id);
      } else {
        console.error('Target section not found:', targetId);
      }
      
      // Add active class to clicked nav item
      const activeNavItem = document.querySelector(`[data-target="${targetId}"]`);
      if (activeNavItem) {
        activeNavItem.classList.add('active');
        console.log('Activated nav item:', activeNavItem.textContent);
      }
      
      // Update URL hash without scrolling
      if (history.replaceState) {
        history.replaceState(null, null, `#${targetId}`);
      }
    }
    
    // Add click listeners to nav items
    navItems.forEach((item, index) => {
      console.log(`Adding click listener to nav item ${index}:`, item.textContent, item.getAttribute('data-target'));
      item.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Nav item clicked:', this.textContent);
        const targetId = this.getAttribute('data-target');
        if (targetId) {
          console.log('Target ID:', targetId);
          showSection(targetId);
        } else {
          console.error('No data-target attribute found on:', this);
        }
      });
    });
    
    // Handle initial hash in URL
    function handleInitialHash() {
      const hash = window.location.hash.substring(1);
      console.log('Handling initial hash:', hash);
      if (hash && document.getElementById(hash)) {
        showSection(hash);
      } else {
        // Show first section by default
        const firstNavItem = navItems[0];
        if (firstNavItem) {
          const firstTarget = firstNavItem.getAttribute('data-target');
          if (firstTarget) {
            console.log('Showing first section by default:', firstTarget);
            showSection(firstTarget);
          }
        }
      }
    }
    
    // Initialize on page load
    handleInitialHash();
    
    // Handle browser back/forward
    window.addEventListener('hashchange', handleInitialHash);
  }
  
  // Initialize section navigation with delay to ensure DOM is ready
  setTimeout(() => {
    initSectionNavigation();
  }, 100);
  
  // Backup CV navigation initialization
  function initCVNavigation() {
    // Direct approach for CV page navigation
    const cvNavItems = document.querySelectorAll('.pub-nav-item');
    const cvSections = document.querySelectorAll('.pub-section');
    
    if (cvNavItems.length > 0 && cvSections.length > 0) {
      console.log('Initializing CV navigation backup');
      
      // Add event listeners directly
      cvNavItems.forEach((navItem) => {
        navItem.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('data-target');
          if (!targetId) return;
          
          // Hide all sections
          cvSections.forEach(section => {
            section.style.display = 'none';
            section.classList.remove('active');
          });
          
          // Remove active from all nav items
          cvNavItems.forEach(item => {
            item.classList.remove('active');
          });
          
          // Show target section
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            targetSection.style.display = 'block';
            targetSection.classList.add('active');
          }
          
          // Add active to clicked nav item
          this.classList.add('active');
          
          console.log('CV navigation: switched to', targetId);
        });
      });
      
      // Initialize first section
      if (cvSections.length > 0) {
        cvSections.forEach((section, index) => {
          if (index === 0) {
            section.style.display = 'block';
            section.classList.add('active');
          } else {
            section.style.display = 'none';
            section.classList.remove('active');
          }
        });
      }
    }
  }
  
  // Initialize CV navigation as backup
  setTimeout(() => {
    initCVNavigation();
  }, 200);
  
  // Additional initialization for talks page navigation if it exists
  function initTalksNavigation() {
    const talksNavItems = document.querySelectorAll('.talks-nav-item');
    const talksContentSections = document.querySelectorAll('.talks-content-section');
    
    if (talksNavItems.length === 0 || talksContentSections.length === 0) {
      return; // Not on talks page
    }
    
    // Function to show a specific talks section
    function showTalksSection(targetId) {
      // Hide all talks content sections
      talksContentSections.forEach(section => {
        section.classList.remove('active');
      });
      
      // Remove active class from all talks nav items
      talksNavItems.forEach(item => {
        item.classList.remove('active');
      });
      
      // Show target talks section
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');
      }
      
      // Add active class to clicked nav item
      const activeNavItem = document.querySelector(`[data-target="${targetId}"]`);
      if (activeNavItem) {
        activeNavItem.classList.add('active');
      }
    }
    
    // Add click listeners to talks nav items
    talksNavItems.forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        if (targetId) {
          showTalksSection(targetId);
        }
      });
    });
  }
  
  // Initialize talks navigation
  initTalksNavigation();
  
  /******************************************
   * CARD ANIMATIONS AND INTERACTIONS
   ******************************************/
  // Add staggered animation to cards
  function initCardAnimations() {
    const cards = document.querySelectorAll('.education-card, .work-card, .project-card, .teaching-card, .award-card, .volunteer-card, .pub-card');
    
    if (cards.length === 0) return;
    
    // Create intersection observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px 0px -50px 0px'
    };
    
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add small delay for staggered effect
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 100);
          
          cardObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Set initial state and observe cards
    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      cardObserver.observe(card);
    });
  }
  
  // Initialize card animations after a short delay
  setTimeout(initCardAnimations, 100);
  
  /******************************************
   * ENHANCED SKILL INTERACTIONS
   ******************************************/
  // Add progressive skill tag animations
  function initSkillAnimations() {
    const skillTags = document.querySelectorAll('.skill-tag, .interest-tag');
    
    if (skillTags.length === 0) return;
    
    // Add hover sound effect simulation through haptic feedback
    skillTags.forEach(tag => {
      tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.02)';
      });
      
      tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
      
      tag.addEventListener('click', function(e) {
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }
  
  // Initialize skill animations
  initSkillAnimations();
}); 