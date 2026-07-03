/**
 * MultiMian Studio Theme JavaScript
 * Version: 2.0
 */

(function() {
    'use strict';
    
    // Theme Toggle - Must run immediately on page load
    function initThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        const sunIcon = document.querySelector('.sun-icon');
        const moonIcon = document.querySelector('.moon-icon');
        const body = document.body;
        
        if (!themeToggle) {
            console.log('Theme toggle button not found');
            return;
        }
        
        // Check for saved theme preference or default to light mode
        const savedTheme = localStorage.getItem('theme');
        
        // Function to update icons and theme
        function updateTheme(isDark) {
            if (isDark) {
                body.classList.add('dark-mode');
                if (sunIcon) sunIcon.style.display = 'none';
                if (moonIcon) moonIcon.style.display = 'block';
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.remove('dark-mode');
                if (sunIcon) sunIcon.style.display = 'block';
                if (moonIcon) moonIcon.style.display = 'none';
                localStorage.setItem('theme', 'light');
            }
        }
        
        // Apply saved theme immediately on page load
        if (savedTheme === 'dark') {
            updateTheme(true);
        } else {
            updateTheme(false);
        }
        
        // Add click event listener
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle dark mode
            const isDark = body.classList.contains('dark-mode');
            updateTheme(!isDark);
            
            console.log('Theme toggled to:', !isDark ? 'dark' : 'light');
        });
        
        console.log('Theme toggle initialized with theme:', savedTheme || 'light');
    }
    
    // Initialize theme toggle immediately
    initThemeToggle();
    
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNavigation = document.querySelector('.main-navigation');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (mobileMenuToggle && mainNavigation) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNavigation.classList.toggle('active');
            const isExpanded = mainNavigation.classList.contains('active');
            mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
            menuIcon.textContent = isExpanded ? '✕' : '☰';
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mainNavigation.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mainNavigation.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                menuIcon.textContent = '☰';
            }
        });
    }
    
    // Scroll to Top Button
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    
    if (scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('active');
            } else {
                scrollToTopBtn.classList.remove('active');
            }
        });
        
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Popup Management - Show consultation popup on every page load
    const consultationPopup = document.getElementById('consultationPopup');
    const consultationForm = document.getElementById('consultationForm');
    
    if (consultationPopup) {
        // Show popup after 3 seconds on every page load
        setTimeout(function() {
            consultationPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
        }, 3000);
        
        // Close popup handlers
        const closeButtons = consultationPopup.querySelectorAll('.popup-close-btn, .popup-close, .popup-close-luxury');
        closeButtons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                consultationPopup.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close on overlay click
        consultationPopup.addEventListener('click', function(e) {
            if (e.target === consultationPopup) {
                consultationPopup.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Handle form submission
        if (consultationForm) {
            consultationForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const formData = new FormData(consultationForm);
                const submitButton = consultationForm.querySelector('button[type="submit"]');
                const originalText = submitButton.innerHTML;
                
                // Disable button and show loading
                submitButton.disabled = true;
                submitButton.innerHTML = '<span class="spinner"></span> Sending...';
                
                // Send AJAX request
                fetch(multimianAjax.ajaxurl, {
                    method: 'POST',
                    body: new URLSearchParams({
                        action: 'multimian_consultation',
                        nonce: multimianAjax.nonce,
                        name: formData.get('name'),
                        email: formData.get('email'),
                        phone: formData.get('phone'),
                        projectType: formData.get('projectType'),
                        message: formData.get('message')
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        showMessage(data.data.message, 'success');
                        consultationForm.reset();
                        setTimeout(function() {
                            consultationPopup.classList.remove('active');
                            document.body.style.overflow = '';
                        }, 2000);
                    } else {
                        showMessage(data.data.message, 'error');
                    }
                })
                .catch(() => {
                    showMessage('An error occurred. Please try again.', 'error');
                })
                .finally(() => {
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalText;
                });
            });
        }
    }
    
    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.disabled = true;
            submitButton.innerHTML = '<span class="spinner"></span> Sending...';
            
            fetch(multimianAjax.ajaxurl, {
                method: 'POST',
                body: new URLSearchParams({
                    action: 'multimian_contact_form',
                    nonce: multimianAjax.nonce,
                    name: formData.get('name'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    message: formData.get('message')
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    showMessage(data.data.message, 'success');
                    contactForm.reset();
                } else {
                    showMessage(data.data.message, 'error');
                }
            })
            .catch(error => {
                showMessage('An error occurred. Please try again.', 'error');
            })
            .finally(() => {
                submitButton.disabled = false;
                submitButton.innerHTML = originalText;
            });
        });
    }
    
    // Newsletter Form Handler
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(newsletterForm);
            const submitButton = newsletterForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.disabled = true;
            submitButton.innerHTML = '<span class="spinner"></span> Subscribing...';
            
            fetch(multimianAjax.ajaxurl, {
                method: 'POST',
                body: new URLSearchParams({
                    action: 'multimian_newsletter',
                    nonce: multimianAjax.nonce,
                    email: formData.get('email')
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    showMessage(data.data.message, 'success');
                    newsletterForm.reset();
                } else {
                    showMessage(data.data.message, 'error');
                }
            })
            .catch(error => {
                showMessage('An error occurred. Please try again.', 'error');
            })
            .finally(() => {
                submitButton.disabled = false;
                submitButton.innerHTML = originalText;
            });
        });
    }
    
    // Show Message Function
    function showMessage(message, type) {
        const messageBox = document.getElementById('messageBox');
        const messageText = document.getElementById('messageText');
        
        if (messageBox && messageText) {
            messageText.textContent = message;
            messageBox.className = 'message ' + type + ' active';
            
            // Scroll to message
            messageBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // Auto hide after 5 seconds
            setTimeout(function() {
                messageBox.classList.remove('active');
            }, 5000);
        }
    }
    
    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    document.querySelectorAll('.card, .section').forEach(el => {
        observer.observe(el);
    });
    
    // Header Scroll Effect
    const header = document.querySelector('.site-header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
    
})();
