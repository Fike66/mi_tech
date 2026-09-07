// ====== DARK MODE TOGGLE - FIXED VERSION ======
// Wrap everything in a DOMContentLoaded event to ensure elements exist
document.addEventListener('DOMContentLoaded', function() {
    // Get both toggle buttons
    const themeToggle = document.getElementById('themeToggle');
    const themeToggleMobile = document.getElementById('themeToggleMobile');

    // Function to apply theme and update icons
    function applyTheme(isDark) {
        // Toggle the class on the body
        document.body.classList.toggle('dark-mode', isDark);

        // Update the icons for both buttons
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
        if (themeToggleMobile) {
            const icon = themeToggleMobile.querySelector('i');
            if (icon) {
                icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
            }
        }

        // Save the preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    // Function to toggle theme
    function toggleTheme() {
        const isCurrentlyDark = document.body.classList.contains('dark-mode');
        applyTheme(!isCurrentlyDark);
    }

    // Add event listeners to both buttons
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
        console.log('✅ Desktop dark mode toggle attached');
    } else {
        console.warn('⚠️ Desktop dark mode toggle not found');
    }

    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', toggleTheme);
        console.log('✅ Mobile dark mode toggle attached');
    } else {
        console.warn('⚠️ Mobile dark mode toggle not found');
    }

    // Load saved theme on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        applyTheme(true);
        console.log('🌙 Dark mode loaded from saved preference');
    } else {
        // Ensure light mode is applied by default if no saved theme
        applyTheme(false);
        console.log('☀️ Light mode applied by default');
    }
});

// ====== MOBILE MENU TOGGLE (UPDATED) ======
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle hamburger icon
            const icon = this.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.className = 'fas fa-bars';
            } else {
                icon.className = 'fas fa-times';
            }
        });

        // Close mobile menu on link click
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                const icon = menuBtn.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
            });
        });
    }
});

// ====== BACK TO TOP BUTTON ======
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// ====== FADE-IN SECTIONS ======
document.addEventListener('DOMContentLoaded', function() {
    const fadeSections = document.querySelectorAll('.fade-section');
    
    // Make hero section visible immediately
    const heroSection = document.querySelector('.fade-section');
    if (heroSection) {
        heroSection.classList.add('visible-on-load');
    }
    
    // Intersection Observer options
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.15
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    fadeSections.forEach(function(section) {
        if (!section.classList.contains('visible-on-load')) {
            observer.observe(section);
        }
    });
});

// ====== CONTACT FORM ======
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const message = document.getElementById('message')?.value.trim();
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            if (!email.includes('@') || !email.includes('.')) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Show success message
            alert('✅ Thank you, ' + name + '! Your message has been sent. I\'ll get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
});

// ====== KEYBOARD ACCESSIBILITY ======
document.addEventListener('keydown', function(e) {
    const mobileMenu = document.getElementById('mobileMenu');
    if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        const menuBtn = document.getElementById('menuBtn');
        if (menuBtn) {
            const icon = menuBtn.querySelector('i');
            if (icon) icon.className = 'fas fa-bars';
        }
    }
});

console.log('🚀 Fekadu Wolde Portfolio loaded successfully!');
console.log('📧 Feel free to reach out for collaboration.');