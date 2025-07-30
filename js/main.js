// Simple menu functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing menu...');
    
    // Get the checkbox and menu links
    const menuToggle = document.getElementById('main-navigation-toggle');
    const menuLinks = document.querySelectorAll('.menu__link');
    const closeBtn = document.querySelector('.close-btn');
    const menuButton = document.querySelector('.site-header .menu');
    
    console.log('Menu toggle found:', menuToggle);
    console.log('Menu links found:', menuLinks.length);
    console.log('Close button found:', closeBtn);
    console.log('Menu button found:', menuButton);
    
    // Test menu button click
    if (menuButton) {
        menuButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Menu button clicked!');
            menuToggle.checked = !menuToggle.checked;
            console.log('Menu toggle state:', menuToggle.checked);
        });
    }
    
    // Close menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Menu link clicked:', this.textContent);
            // Close the menu
            menuToggle.checked = false;
            
            // Smooth scroll to section if it's an internal link
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-main') && 
            !e.target.closest('label[for="main-navigation-toggle"]') &&
            menuToggle.checked) {
            menuToggle.checked = false;
        }
    });
    
    // Close menu with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menuToggle.checked) {
            menuToggle.checked = false;
        }
    });
    
    // Close button functionality
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            console.log('Close button clicked!');
            menuToggle.checked = false;
        });
    }
});

// Smooth scrolling for all internal links
document.addEventListener('DOMContentLoaded', function() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const targetSection = document.querySelector(href);
            
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
