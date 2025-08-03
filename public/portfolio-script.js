// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    initContactForm();
    initScrollIndicator();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    // Handle scroll effect on navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        
        // Update icon
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });
    
    // Close mobile menu when clicking on links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });
}

// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);
    
    // Observe all elements with scroll-animate class
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add scroll-animate class to various elements
    const elementsToAnimate = [
        '.section-header',
        '.about-text',
        '.about-highlights > .highlight-card',
        '.project-card',
        '.skill-category',
        '.experience-card',
        '.experience-side > div',
        '.contact-form-container',
        '.contact-info > div'
    ];
    
    elementsToAnimate.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, index) => {
            el.classList.add('scroll-animate');
            // Add staggered delay for multiple elements
            if (elements.length > 1) {
                el.style.animationDelay = `${index * 0.2}s`;
            }
        });
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const toast = document.getElementById('toast');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Validate form (basic validation)
        if (!name || !email || !message) {
            showToast('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showToast('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        showLoadingState(true);
        
        setTimeout(() => {
            showLoadingState(false);
            showToast('Message sent successfully!', 'success');
            contactForm.reset();
        }, 2000);
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show loading state on form submission
function showLoadingState(isLoading) {
    const submitBtn = document.querySelector('#contactForm button[type="submit"]');
    const btnText = submitBtn.querySelector('span') || submitBtn;
    
    if (isLoading) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
        btnText.textContent = 'Sending...';
    } else {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        btnText.innerHTML = '<i data-lucide="send"></i> Send Message';
        lucide.createIcons();
    }
}

// Toast notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastTitle = toast.querySelector('.toast-title');
    const toastDescription = toast.querySelector('.toast-description');
    const toastIcon = toast.querySelector('i');
    
    if (type === 'success') {
        toastTitle.textContent = 'Message Sent!';
        toastDescription.textContent = message;
        toastIcon.setAttribute('data-lucide', 'check-circle');
        toastIcon.style.color = 'var(--accent)';
    } else {
        toastTitle.textContent = 'Error';
        toastDescription.textContent = message;
        toastIcon.setAttribute('data-lucide', 'alert-circle');
        toastIcon.style.color = 'var(--destructive)';
    }
    
    lucide.createIcons();
    
    // Show toast
    toast.classList.add('show');
    
    // Hide toast after 5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}

// Scroll indicator functionality
function initScrollIndicator() {
    const scrollArrow = document.querySelector('.scroll-arrow');
    
    // Add click handler to scroll to about section
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            scrollToSection('about');
        });
    }
    
    // Update scroll arrow visibility based on scroll position
    window.addEventListener('scroll', function() {
        const heroSection = document.getElementById('hero');
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > heroHeight * 0.8) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });
}

// Parallax effect for hero background
function initParallax() {
    const heroSection = document.getElementById('hero');
    const heroBg = document.querySelector('.hero-bg');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroBg) {
            heroBg.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Initialize parallax on larger screens
if (window.innerWidth > 768) {
    initParallax();
}

// Floating animation for background elements
function initFloatingElements() {
    const floatingShapes = document.querySelectorAll('.floating-shape');
    
    floatingShapes.forEach((shape, index) => {
        const delay = index * 1000; // Stagger animations
        const duration = 6000 + (index * 1000); // Vary duration
        
        shape.style.animationDelay = `${delay}ms`;
        shape.style.animationDuration = `${duration}ms`;
    });
}

// Initialize floating elements
initFloatingElements();

// Typing effect for hero text (optional enhancement)
function initTypingEffect() {
    const heroWelcome = document.querySelector('.hero-welcome');
    const text = heroWelcome.textContent;
    heroWelcome.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroWelcome.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 1000);
}

// Uncomment to enable typing effect
// initTypingEffect();

// Skills animation on scroll
function initSkillsAnimation() {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillItems = entry.target.querySelectorAll('.skill-item');
                skillItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.transform = 'scale(1.05)';
                        setTimeout(() => {
                            item.style.transform = 'scale(1)';
                        }, 200);
                    }, index * 100);
                });
            }
        });
    }, { threshold: 0.5 });
    
    skillCategories.forEach(category => {
        skillObserver.observe(category);
    });
}

// Initialize skills animation
initSkillsAnimation();

// Project card hover effects
function initProjectEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add glow effect
            this.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            // Remove glow effect
            this.style.boxShadow = '';
        });
    });
}

// Initialize project effects
initProjectEffects();

// Smooth reveal animation for sections
function initSectionReveal() {
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.8s ease-out';
        sectionObserver.observe(section);
    });
}

// Initialize section reveal
initSectionReveal();

// Dynamic particle background (optional)
function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    
    document.body.appendChild(particleContainer);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(59, 130, 246, 0.5);
            border-radius: 50%;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 10}s;
        `;
        particleContainer.appendChild(particle);
    }
}

// Add particle CSS animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float {
        0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(particleStyle);

// Uncomment to enable particles
// createParticles();

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll-heavy functions
window.addEventListener('scroll', throttle(function() {
    // Your scroll-based animations here
}, 16)); // 60fps

// Preload images for better performance
function preloadImages() {
    const images = [
        'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Preload images
preloadImages();

// Add loading state for the entire page
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add any load-complete animations here
    const hero = document.getElementById('hero');
    if (hero) {
        hero.classList.add('loaded');
    }
});

// Global utility functions
window.scrollToSection = scrollToSection;