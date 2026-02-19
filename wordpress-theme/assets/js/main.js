jQuery(document).ready(function($) {
    'use strict';

    // Theme Toggle
    const themeToggle = $('#themeToggle');
    const body = $('body');
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        body.addClass('dark-mode');
    }
    
    themeToggle.on('click', function() {
        body.toggleClass('dark-mode');
        const theme = body.hasClass('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });

    // Mobile Menu Toggle
    const mobileMenuToggle = $('#mobileMenuToggle');
    const mobileMenu = $('#mobileMenu');
    
    mobileMenuToggle.on('click', function() {
        $(this).toggleClass('active');
        mobileMenu.toggleClass('active');
    });

    // Smooth Scroll
    $('a[href^="#"]').on('click', function(e) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 1000);
        }
    });

    // Scroll Indicator
    $('.scroll-indicator').on('click', function() {
        $('html, body').animate({
            scrollTop: $(window).height()
        }, 1000);
    });

    // Newsletter Form
    $('#newsletterForm').on('submit', function(e) {
        e.preventDefault();
        
        const form = $(this);
        const email = form.find('input[name="email"]').val();
        const messageDiv = $('.newsletter-message');
        
        $.ajax({
            url: multimianAjax.ajaxurl,
            type: 'POST',
            data: {
                action: 'multimian_newsletter',
                nonce: multimianAjax.nonce,
                email: email
            },
            beforeSend: function() {
                form.find('button').prop('disabled', true).text('Subscribing...');
            },
            success: function(response) {
                if (response.success) {
                    messageDiv.html('<p style="color: #10b981;">' + response.data.message + '</p>');
                    form[0].reset();
                } else {
                    messageDiv.html('<p style="color: #ef4444;">' + response.data.message + '</p>');
                }
            },
            error: function() {
                messageDiv.html('<p style="color: #ef4444;">An error occurred. Please try again.</p>');
            },
            complete: function() {
                form.find('button').prop('disabled', false).text('Subscribe');
                setTimeout(function() {
                    messageDiv.html('');
                }, 5000);
            }
        });
    });

    // Contact Form
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        const form = $(this);
        const formData = {
            action: 'multimian_contact_form',
            nonce: multimianAjax.nonce,
            name: form.find('input[name="name"]').val(),
            email: form.find('input[name="email"]').val(),
            subject: form.find('input[name="subject"]').val(),
            message: form.find('textarea[name="message"]').val()
        };
        
        $.ajax({
            url: multimianAjax.ajaxurl,
            type: 'POST',
            data: formData,
            beforeSend: function() {
                form.find('button[type="submit"]').prop('disabled', true).text('Sending...');
            },
            success: function(response) {
                if (response.success) {
                    alert(response.data.message);
                    form[0].reset();
                } else {
                    alert(response.data.message);
                }
            },
            error: function() {
                alert('An error occurred. Please try again.');
            },
            complete: function() {
                form.find('button[type="submit"]').prop('disabled', false).text('Send Message');
            }
        });
    });

    // Login Form
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        
        const form = $(this);
        const formData = {
            action: 'multimian_login',
            nonce: multimianAjax.nonce,
            email: form.find('input[name="email"]').val(),
            password: form.find('input[name="password"]').val(),
            remember: form.find('input[name="remember"]').is(':checked')
        };
        
        $.ajax({
            url: multimianAjax.ajaxurl,
            type: 'POST',
            data: formData,
            beforeSend: function() {
                form.find('button[type="submit"]').prop('disabled', true).text('Logging in...');
                $('.form-message').remove();
            },
            success: function(response) {
                if (response.success) {
                    form.before('<div class="form-message success">' + response.data.message + '</div>');
                    setTimeout(function() {
                        window.location.href = response.data.redirect;
                    }, 1000);
                } else {
                    form.before('<div class="form-message error">' + response.data.message + '</div>');
                }
            },
            error: function() {
                form.before('<div class="form-message error">An error occurred. Please try again.</div>');
            },
            complete: function() {
                form.find('button[type="submit"]').prop('disabled', false).text('Login');
            }
        });
    });

    // Register Form
    $('#registerForm').on('submit', function(e) {
        e.preventDefault();
        
        const form = $(this);
        const password = form.find('input[name="password"]').val();
        const confirmPassword = form.find('input[name="confirm_password"]').val();
        
        if (password !== confirmPassword) {
            form.before('<div class="form-message error">Passwords do not match.</div>');
            setTimeout(function() {
                $('.form-message').remove();
            }, 3000);
            return;
        }
        
        const formData = {
            action: 'multimian_register',
            nonce: multimianAjax.nonce,
            name: form.find('input[name="name"]').val(),
            email: form.find('input[name="email"]').val(),
            password: password
        };
        
        $.ajax({
            url: multimianAjax.ajaxurl,
            type: 'POST',
            data: formData,
            beforeSend: function() {
                form.find('button[type="submit"]').prop('disabled', true).text('Creating account...');
                $('.form-message').remove();
            },
            success: function(response) {
                if (response.success) {
                    form.before('<div class="form-message success">' + response.data.message + '</div>');
                    setTimeout(function() {
                        window.location.href = response.data.redirect;
                    }, 1000);
                } else {
                    form.before('<div class="form-message error">' + response.data.message + '</div>');
                }
            },
            error: function() {
                form.before('<div class="form-message error">An error occurred. Please try again.</div>');
            },
            complete: function() {
                form.find('button[type="submit"]').prop('disabled', false).text('Sign Up');
            }
        });
    });

    // Fade in elements on scroll
    const fadeElements = $('.fade-in');
    
    function checkFade() {
        fadeElements.each(function() {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('visible');
            }
        });
    }
    
    $(window).on('scroll', checkFade);
    checkFade(); // Initial check

    // Add animation class
    $('<style>.fade-in { opacity: 0; transform: translateY(20px); transition: all 0.6s; } .fade-in.visible { opacity: 1; transform: translateY(0); }</style>').appendTo('head');

    // Sticky Header
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('.site-header').addClass('scrolled');
        } else {
            $('.site-header').removeClass('scrolled');
        }
    });

    // User Menu Dropdown
    $('.user-menu-toggle').on('click', function(e) {
        e.stopPropagation();
        $('.user-dropdown').toggleClass('show');
    });

    $(document).on('click', function() {
        $('.user-dropdown').removeClass('show');
    });

    $('.user-dropdown').on('click', function(e) {
        e.stopPropagation();
    });

    // Add show class styles
    $('<style>.user-dropdown.show { opacity: 1; visibility: visible; transform: translateY(0); }</style>').appendTo('head');
});
