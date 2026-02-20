/**
 * MultiMian Studio Theme JavaScript
 * @version 2.0.0
 */

(function($) {
    'use strict';

    // Document Ready
    $(document).ready(function() {
        
        // Header Scroll Effect
        $(window).on('scroll', function() {
            const header = $('#site-header');
            if ($(window).scrollTop() > 20) {
                header.addClass('scrolled');
            } else {
                header.removeClass('scrolled');
            }
        });

        // Mobile Menu Toggle
        $('#mobile-menu-toggle').on('click', function() {
            $('#main-nav').toggleClass('active');
            $(this).find('span').text(function(i, text) {
                return text === '☰' ? '✕' : '☰';
            });
        });

        // Close mobile menu when clicking outside
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.header-container').length) {
                $('#main-nav').removeClass('active');
                $('#mobile-menu-toggle').find('span').text('☰');
            }
        });

        // Newsletter Form Submission
        $('#newsletter-form').on('submit', function(e) {
            e.preventDefault();
            
            const form = $(this);
            const email = form.find('input[name="email"]').val();
            const button = form.find('button');
            const messageDiv = $('#newsletter-message');
            
            // Disable button and show loading
            button.prop('disabled', true).html('<span class="loading"></span> Subscribing...');
            
            $.ajax({
                url: multimianAjax.ajaxurl,
                type: 'POST',
                data: {
                    action: 'newsletter_subscribe',
                    email: email,
                    nonce: multimianAjax.nonce
                },
                success: function(response) {
                    if (response.success) {
                        messageDiv.html('<div class="success-message">✓ ' + response.data.message + '</div>');
                        form[0].reset();
                    } else {
                        messageDiv.html('<div class="error-message">✕ ' + response.data.message + '</div>');
                    }
                },
                error: function() {
                    messageDiv.html('<div class="error-message">✕ Something went wrong. Please try again.</div>');
                },
                complete: function() {
                    button.prop('disabled', false).html('Subscribe');
                    setTimeout(function() {
                        messageDiv.html('');
                    }, 5000);
                }
            });
        });

        // Contact Form Submission
        $('#contact-form').on('submit', function(e) {
            e.preventDefault();
            
            const form = $(this);
            const formData = {
                action: 'contact_form',
                name: form.find('input[name="name"]').val(),
                email: form.find('input[name="email"]').val(),
                message: form.find('textarea[name="message"]').val(),
                nonce: multimianAjax.nonce
            };
            
            const button = form.find('button[type="submit"]');
            const messageDiv = $('#contact-message');
            
            // Disable button and show loading
            button.prop('disabled', true).html('<span class="loading"></span> Sending...');
            
            $.ajax({
                url: multimianAjax.ajaxurl,
                type: 'POST',
                data: formData,
                success: function(response) {
                    if (response.success) {
                        messageDiv.html('<div class="success-message">✓ ' + response.data.message + '</div>');
                        form[0].reset();
                    } else {
                        messageDiv.html('<div class="error-message">✕ ' + response.data.message + '</div>');
                    }
                },
                error: function() {
                    messageDiv.html('<div class="error-message">✕ Something went wrong. Please try again.</div>');
                },
                complete: function() {
                    button.prop('disabled', false).html('Send Message');
                    setTimeout(function() {
                        messageDiv.html('');
                    }, 5000);
                }
            });
        });

        // Scroll to Top Button
        const scrollTopBtn = $('#scroll-top');
        
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 300) {
                scrollTopBtn.addClass('visible');
            } else {
                scrollTopBtn.removeClass('visible');
            }
        });
        
        scrollTopBtn.on('click', function() {
            $('html, body').animate({ scrollTop: 0 }, 600);
        });

        // Smooth Scroll for Anchor Links
        $('a[href^="#"]').on('click', function(e) {
            const target = $(this.getAttribute('href'));
            if (target.length) {
                e.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 80
                }, 800);
            }
        });

        // Animate elements on scroll
        function animateOnScroll() {
            $('.animate-fade-in, .animate-slide-in').each(function() {
                const elementTop = $(this).offset().top;
                const elementBottom = elementTop + $(this).outerHeight();
                const viewportTop = $(window).scrollTop();
                const viewportBottom = viewportTop + $(window).height();
                
                if (elementBottom > viewportTop && elementTop < viewportBottom) {
                    $(this).css({
                        'opacity': '1',
                        'transform': 'translateY(0) translateX(0)'
                    });
                }
            });
        }

        // Initial animation check
        animateOnScroll();
        
        // Animation on scroll
        $(window).on('scroll', animateOnScroll);

        // Service Card Hover Effect
        $('.service-card').hover(
            function() {
                $(this).find('.service-icon').css('transform', 'scale(1.2) rotate(10deg)');
            },
            function() {
                $(this).find('.service-icon').css('transform', 'scale(1) rotate(0deg)');
            }
        );

        // Add loading class to body when page is loading
        $(window).on('load', function() {
            $('body').addClass('loaded');
        });

        // Lazy load images
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
                img.src = img.dataset.src;
            });
        } else {
            // Fallback for browsers that don't support lazy loading
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
            document.body.appendChild(script);
        }

        // Console message
        console.log('%c MultiMian Studio ', 'background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; font-size: 20px; font-weight: bold; padding: 10px 20px; border-radius: 5px;');
        console.log('%c Built with ❤️ by Mian Hassam ', 'color: #3b82f6; font-size: 14px; font-weight: bold;');
        console.log('%c https://github.com/Mianhassam96 ', 'color: #6b7280; font-size: 12px;');
    });

})(jQuery);
