/**
 * MultiMian Pro Theme JavaScript
 */

(function($) {
    'use strict';

    // Dark Mode Toggle
    function initDarkMode() {
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const body = document.body;

        // Check for saved dark mode preference
        const darkMode = localStorage.getItem('darkMode');
        if (darkMode === 'enabled') {
            body.classList.add('dark-mode');
        }

        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', function() {
                body.classList.toggle('dark-mode');
                
                // Save preference
                if (body.classList.contains('dark-mode')) {
                    localStorage.setItem('darkMode', 'enabled');
                    document.cookie = 'dark_mode=true; path=/; max-age=31536000';
                } else {
                    localStorage.setItem('darkMode', null);
                    document.cookie = 'dark_mode=false; path=/; max-age=31536000';
                }
            });
        }
    }

    // Sticky Header
    function initStickyHeader() {
        const header = document.getElementById('masthead');
        let lastScroll = 0;

        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                header.classList.remove('scroll-up', 'scroll-down');
                return;
            }

            if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
                // Scroll Down
                header.classList.remove('scroll-up');
                header.classList.add('scroll-down');
            } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
                // Scroll Up
                header.classList.remove('scroll-down');
                header.classList.add('scroll-up');
            }

            lastScroll = currentScroll;
        });
    }

    // Mobile Menu Toggle
    function initMobileMenu() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const body = document.body;

        if (mobileMenuToggle && mobileMenu) {
            mobileMenuToggle.addEventListener('click', function() {
                this.classList.toggle('active');
                mobileMenu.classList.toggle('active');
                body.classList.toggle('mobile-menu-open');
                
                // Update aria-expanded
                const expanded = this.getAttribute('aria-expanded') === 'true' || false;
                this.setAttribute('aria-expanded', !expanded);
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', function(event) {
                if (!mobileMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                    mobileMenuToggle.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    body.classList.remove('mobile-menu-open');
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                }
            });

            // Close mobile menu on window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 1024) {
                    mobileMenuToggle.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    body.classList.remove('mobile-menu-open');
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        }
    }

    // Scroll Animations
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Smooth Scroll for Anchor Links
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Counter Animation
    function initCounterAnimation() {
        const counters = document.querySelectorAll('.stat-number');

        const animateCounter = (counter) => {
            const target = parseInt(counter.textContent.replace(/[^0-9]/g, ''));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = counter.textContent.replace(/[0-9]+/, target);
                }
            };

            updateCounter();
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    animateCounter(entry.target);
                    entry.target.classList.add('counted');
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            observer.observe(counter);
        });
    }

    // Portfolio Filter
    function initPortfolioFilter() {
        const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');

                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Filter items
                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // Back to Top Button
    function initBackToTop() {
        const backToTop = document.createElement('button');
        backToTop.innerHTML = '↑';
        backToTop.className = 'back-to-top';
        backToTop.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(backToTop);

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Consultation Popup - Shows after 10 seconds on every page load
    function initConsultationPopup() {
        let popupShown = false;
        
        // Show popup after 10 seconds
        setTimeout(function() {
            if (!popupShown) {
                showConsultationPopup();
                popupShown = true;
            }
        }, 10000); // 10 seconds

        function showConsultationPopup() {
            // Create popup HTML
            const popupHTML = `
                <div id="consultation-popup" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" style="animation: fadeIn 0.3s ease-out;">
                    <!-- Backdrop -->
                    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="closeConsultationPopup()"></div>

                    <!-- Popup Container -->
                    <div class="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden" style="animation: scaleIn 0.3s ease-out;">
                        <!-- Animated gradient line at top -->
                        <div class="h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700" style="background-size: 200% auto; animation: gradient 3s linear infinite;"></div>

                        <!-- Close Button -->
                        <button onclick="closeConsultationPopup()" class="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                            <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div class="grid grid-cols-1 lg:grid-cols-2">
                            <!-- LEFT SIDE - Brand Authority Panel -->
                            <div class="relative p-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
                                <!-- Floating background shapes -->
                                <div class="absolute top-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" style="animation: pulse 2s ease-in-out infinite;"></div>
                                <div class="absolute bottom-10 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl" style="animation: pulse 2s ease-in-out infinite; animation-delay: 1s;"></div>

                                <div class="relative z-10">
                                    <h2 class="text-2xl md:text-3xl font-bold mb-3 leading-tight text-white">
                                        Need Expert Help?
                                    </h2>

                                    <p class="text-sm text-blue-100 mb-6 leading-relaxed">
                                        Full stack development agency specializing in scalable web solutions.
                                    </p>

                                    <!-- Contact Info -->
                                    <div class="mb-6 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                                        <div class="flex items-center gap-2 mb-1">
                                            <span class="text-xl">📞</span>
                                            <a href="tel:+923258831437" class="text-lg font-bold hover:text-blue-200 transition-colors text-white">
                                                +92 325 883 1437
                                            </a>
                                        </div>
                                        <a href="https://wa.me/923258831437" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-xs text-blue-100 hover:text-white transition-colors">
                                            <span>💬</span> WhatsApp
                                        </a>
                                    </div>

                                    <!-- Trust Points -->
                                    <div class="space-y-2.5">
                                        <div class="flex items-center gap-2">
                                            <div class="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                                                <svg class="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span class="text-blue-50 text-sm font-medium">Custom Web Development</span>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <div class="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                                                <svg class="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span class="text-blue-50 text-sm font-medium">SaaS & E-commerce</span>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <div class="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                                                <svg class="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span class="text-blue-50 text-sm font-medium">SEO Optimized</span>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <div class="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                                                <svg class="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span class="text-blue-50 text-sm font-medium">Ongoing Support</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- RIGHT SIDE - Form Panel -->
                            <div class="p-8 bg-white dark:bg-gray-900">
                                <div id="popup-form-container">
                                    <h3 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                                        Free Strategy Call
                                    </h3>
                                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">
                                        Let's discuss your project goals.
                                    </p>

                                    <form id="consultation-form" class="space-y-4">
                                        <div>
                                            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                                                Full Name *
                                            </label>
                                            <input type="text" name="name" required class="w-full px-3 py-2.5 text-sm rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none" placeholder="John Doe" />
                                        </div>

                                        <div>
                                            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                                                Email *
                                            </label>
                                            <input type="email" name="email" required class="w-full px-3 py-2.5 text-sm rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none" placeholder="john@example.com" />
                                        </div>

                                        <div>
                                            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                                                Phone *
                                            </label>
                                            <input type="tel" name="phone" required class="w-full px-3 py-2.5 text-sm rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none" placeholder="+92 300 1234567" />
                                        </div>

                                        <div>
                                            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                                                Project Type *
                                            </label>
                                            <select name="project_type" required class="w-full px-3 py-2.5 text-sm rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none">
                                                <option value="">Select project type</option>
                                                <option value="business-website">Business Website</option>
                                                <option value="saas-platform">SaaS Platform</option>
                                                <option value="wordpress-website">WordPress</option>
                                                <option value="ecommerce">E-commerce</option>
                                                <option value="custom-web-app">Custom App</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                                                Message
                                            </label>
                                            <textarea name="message" rows="2" class="w-full px-3 py-2.5 text-sm rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none resize-none" placeholder="Brief project description..."></textarea>
                                        </div>

                                        <button type="submit" class="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-bold text-sm shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                                            <span>🚀</span>
                                            <span>Book Free Call</span>
                                        </button>
                                    </form>
                                </div>

                                <div id="popup-success-container" class="hidden flex-col items-center justify-center h-full text-center py-12">
                                    <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                                        <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                                        Thank You!
                                    </h3>
                                    <p class="text-sm text-gray-600 dark:text-gray-400">
                                        We'll contact you within 24 hours.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Glowing border between panels -->
                        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-400/50 to-transparent hidden lg:block"></div>
                    </div>
                </div>

                <style>
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                    @keyframes scaleIn {
                        from { transform: scale(0.9); opacity: 0; }
                        to { transform: scale(1); opacity: 1; }
                    }
                    @keyframes gradient {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                    @keyframes pulse {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0.5; }
                    }
                </style>
            `;

            // Add popup to body
            document.body.insertAdjacentHTML('beforeend', popupHTML);

            // Handle form submission
            const form = document.getElementById('consultation-form');
            if (form) {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    const formData = new FormData(form);
                    const name = formData.get('name');
                    const email = formData.get('email');
                    const phone = formData.get('phone');
                    const projectType = formData.get('project_type');
                    const message = formData.get('message');

                    // Create mailto link
                    const subject = encodeURIComponent(`Free Strategy Call Request from ${name}`);
                    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject Type: ${projectType}\n\nMessage:\n${message}`);
                    
                    // Open email client
                    window.location.href = `mailto:mianhassam96@gmail.com?subject=${subject}&body=${body}`;

                    // Show success message
                    document.getElementById('popup-form-container').style.display = 'none';
                    document.getElementById('popup-success-container').style.display = 'flex';

                    // Close popup after 3 seconds
                    setTimeout(function() {
                        closeConsultationPopup();
                    }, 3000);
                });
            }
        }

        // Close popup function
        window.closeConsultationPopup = function() {
            const popup = document.getElementById('consultation-popup');
            if (popup) {
                popup.style.animation = 'fadeOut 0.3s ease-out';
                setTimeout(function() {
                    popup.remove();
                }, 300);
            }
        };
    }

    // Initialize all functions when DOM is ready
    $(document).ready(function() {
        initDarkMode();
        initStickyHeader();
        initMobileMenu();
        initScrollAnimations();
        initSmoothScroll();
        initCounterAnimation();
        initPortfolioFilter();
        initBackToTop();
        initConsultationPopup();
    });

})(jQuery);
