// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active Navigation Link Highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNavLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);

    // Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');
    
    function updateNavbarBackground() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.98)';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        }
    }

    window.addEventListener('scroll', updateNavbarBackground);

    // Resume Download Functionality
    const downloadResumeBtn = document.getElementById('downloadResume');
    
    downloadResumeBtn.addEventListener('click', function() {
        // Create a temporary link element for download
        const link = document.createElement('a');
        link.href = '#'; // In a real scenario, this would be the path to the resume file
        link.download = 'Kumara_Vijay_MG_Resume.pdf';
        
        // Show a message since we don't have an actual file
        showNotification('Resume download will be available soon!', 'info');
        
        // In a real implementation, you would uncomment the following lines:
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
    });

    // Contact Form Handling
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission temporarily
        
        // Validate form fields
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }
        
        // Show success notification
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        
        // Clear form
        this.reset();
        
        // In a real implementation with Netlify, you would submit the form after showing notification
        // For now, we'll simulate the submission after a delay
        setTimeout(() => {
            // This would be where you actually submit to Netlify
            console.log('Form would be submitted to Netlify here');
        }, 1000);
    });

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    const elementsToAnimate = document.querySelectorAll(
        '.section, .education-card, .project-card, .experience-item, .skills-category, .certifications'
    );
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // Typing Effect for Hero Title
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.textContent;
    let typewriterIndex = 0;
    
    function typeWriter() {
        if (typewriterIndex < originalText.length) {
            heroTitle.textContent = originalText.substring(0, typewriterIndex + 1);
            typewriterIndex++;
            setTimeout(typeWriter, 50);
        }
    }

    // Start typing effect after a delay
    setTimeout(() => {
        heroTitle.textContent = '';
        typeWriter();
    }, 1000);

    // Notification System
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: ${type === 'success' ? '#0A84FF' : type === 'error' ? '#FF6B6B' : '#FFD166'};
            color: ${type === 'info' ? '#000' : '#fff'};
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 500;
            animation: slideInRight 0.3s ease-out;
            max-width: 300px;
        `;

        // Add close button styles
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: inherit;
            font-size: 20px;
            cursor: pointer;
            padding: 0;
            margin-left: auto;
        `;

        // Add to DOM
        document.body.appendChild(notification);

        // Close button functionality
        closeBtn.addEventListener('click', () => {
            notification.remove();
        });

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    // Add CSS animation for notification
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .nav-link.active {
            color: #0A84FF !important;
        }
        
        .nav-link.active:after {
            width: 100% !important;
        }
    `;
    document.head.appendChild(style);

    // Parallax Effect for Hero Section
    const hero = document.querySelector('.hero');
    
    function parallaxEffect() {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = scrolled * 0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${parallaxSpeed}px)`;
        }
    }

    window.addEventListener('scroll', parallaxEffect);

    // Skills Animation on Scroll
    const skillsSection = document.getElementById('skills');
    const skillElements = document.querySelectorAll('.skill');
    
    function animateSkills() {
        const sectionTop = skillsSection.offsetTop - window.innerHeight;
        
        if (window.pageYOffset > sectionTop) {
            skillElements.forEach((skill, index) => {
                setTimeout(() => {
                    skill.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    skill.style.opacity = '1';
                }, index * 100);
            });
        }
    }

    // Initially hide skills for animation
    skillElements.forEach(skill => {
        skill.style.opacity = '0';
    });

    window.addEventListener('scroll', animateSkills);

    // Project Cards Hover Effect Enhancement
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Smooth Loading Animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-in';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Copy Email Functionality
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const email = this.href.replace('mailto:', '');
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    showNotification('Email address copied to clipboard!', 'success');
                });
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = email;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showNotification('Email address copied to clipboard!', 'success');
            }
        });
    });

    // Form Validation Enhancement
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.style.borderColor = '#FF6B6B';
            } else {
                this.style.borderColor = '#0A84FF';
            }
        });
        
        input.addEventListener('focus', function() {
            this.style.borderColor = '#0A84FF';
        });
    });

    // Easter Egg: Konami Code
    let konamiCode = [];
    const konamiSequence = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];

    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.code);
        
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            showNotification('🎉 You found the easter egg! Thanks for exploring!', 'success');
            // Add some fun effect
            document.body.style.animation = 'pulse 0.5s ease-in-out';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 500);
        }
    });

    // Performance: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debouncing to scroll events
    const debouncedNavUpdate = debounce(updateActiveNavLink, 10);
    const debouncedNavBackground = debounce(updateNavbarBackground, 10);
    const debouncedParallax = debounce(parallaxEffect, 10);

    window.removeEventListener('scroll', updateActiveNavLink);
    window.removeEventListener('scroll', updateNavbarBackground);
    window.removeEventListener('scroll', parallaxEffect);

    window.addEventListener('scroll', debouncedNavUpdate);
    window.addEventListener('scroll', debouncedNavBackground);
    window.addEventListener('scroll', debouncedParallax);

    console.log('Portfolio loaded successfully! 🚀');
});