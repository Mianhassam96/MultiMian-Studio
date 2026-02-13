/**
 * MultiMian Studio Theme JavaScript
 */

(function($) {
    'use strict';

    // Dark mode toggle
    function initDarkMode() {
        const themeToggle = document.getElementById('theme-toggle');
        const html = document.documentElement;
        
        // Check for saved theme preference or default to light mode
        const currentTheme = localStorage.getItem('theme') || 'light';
        html.classList.toggle('dark', currentTheme === 'dark');
        
        if (themeToggle) {
            themeToggle.addEventListener('click', function() {
                html.classList.toggle('dark');
                const theme = html.classList.contains('dark') ? 'dark' : 'light';
                localStorage.setItem('theme', theme);
            });
        }
    }

    // Mobile menu toggle
    function initMobileMenu() {
        const menuToggle = document.getElementById('mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (menuToggle && mobileMenu) {
            menuToggle.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }

    // Smooth scroll for anchor links
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href !== '#0') {
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }

    // Newsletter form handler
    function initNewsletterForm() {
        const form = document.getElementById('newsletter-form');
        const message = document.getElementById('newsletter-message');
        
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const email = form.querySelector('input[type="email"]').value;
                const button = form.querySelector('button[type="submit"]');
                const buttonText = button.textContent;
                
                button.disabled = true;
                button.textContent = 'Subscribing...';
                
                // Simulate API call (replace with actual implementation)
                setTimeout(function() {
                    message.classList.remove('hidden');
                    message.className = 'mt-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg flex items-center gap-2';
                    message.innerHTML = '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span>Thank you for subscribing!</span>';
                    
                    form.reset();
                    button.disabled = false;
                    button.textContent = buttonText;
                    
                    setTimeout(function() {
                        message.classList.add('hidden');
                    }, 5000);
                }, 1000);
            });
        }
    }

    // Contact form handler
    function initContactForm() {
        const form = document.getElementById('contact-form');
        
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const formData = new FormData(form);
                formData.append('action', 'multimian_contact');
                formData.append('nonce', multimianData.nonce);
                
                const button = form.querySelector('button[type="submit"]');
                const buttonText = button.textContent;
                
                button.disabled = true;
                button.textContent = 'Sending...';
                
                $.ajax({
                    url: multimianData.ajaxUrl,
                    type: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function(response) {
                        if (response.success) {
                            showMessage('success', response.data.message);
                            form.reset();
                        } else {
                            showMessage('error', response.data.message);
                        }
                    },
                    error: function() {
                        showMessage('error', 'An error occurred. Please try again.');
                    },
                    complete: function() {
                        button.disabled = false;
                        button.textContent = buttonText;
                    }
                });
            });
        }
    }

    // Show message helper
    function showMessage(type, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg ${
            type === 'success' 
                ? 'bg-green-500 text-white' 
                : 'bg-red-500 text-white'
        }`;
        messageDiv.textContent = text;
        
        document.body.appendChild(messageDiv);
        
        setTimeout(function() {
            messageDiv.remove();
        }, 5000);
    }

    // Portfolio filter
    function initPortfolioFilter() {
        const filterButtons = document.querySelectorAll('[data-filter]');
        const portfolioItems = document.querySelectorAll('[data-category]');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter items
                portfolioItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        item.style.display = 'block';
                        item.classList.add('animate-fade-in-up');
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Scroll animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    // Sticky header
    function initStickyHeader() {
        const header = document.getElementById('masthead');
        let lastScroll = 0;
        
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.classList.add('shadow-lg');
            } else {
                header.classList.remove('shadow-lg');
            }
            
            lastScroll = currentScroll;
        });
    }

    // Initialize all functions when DOM is ready
    $(document).ready(function() {
        initDarkMode();
        initMobileMenu();
        initSmoothScroll();
        initNewsletterForm();
        initContactForm();
        initPortfolioFilter();
        initScrollAnimations();
        initStickyHeader();
        initWhatsAppPopup();
    });

    // WhatsApp Popup functionality
    function initWhatsAppPopup() {
        // Check if popup has been shown before
        const popupShown = localStorage.getItem('whatsapp_popup_shown');
        const popup = document.getElementById('whatsapp-popup');
        
        if (!popupShown && popup) {
            // Show popup after 3 seconds
            setTimeout(function() {
                popup.classList.remove('hidden');
                localStorage.setItem('whatsapp_popup_shown', 'true');
            }, 3000);
        }
        
        // Close popup when clicking outside
        if (popup) {
            popup.addEventListener('click', function(e) {
                if (e.target === popup) {
                    closeWhatsAppPopup();
                }
            });
        }
    }

    // Global function to close popup
    window.closeWhatsAppPopup = function() {
        const popup = document.getElementById('whatsapp-popup');
        if (popup) {
            popup.classList.add('hidden');
        }
    };

})(jQuery);
