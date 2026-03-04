</main>

<footer class="site-footer">
    <div class="footer-content">
        <div class="footer-section">
            <h3 style="font-size: 1.75rem; font-weight: 900; margin-bottom: 1rem;">
                <span class="logo-multi">Multi</span><span class="logo-mian">Mian</span>
            </h3>
            <p>Professional full-stack development agency specializing in modern web solutions.</p>
            <p><strong>Phone:</strong> <a href="tel:<?php echo esc_attr(get_theme_mod('multimian_phone', '+92 325 883 1437')); ?>"><?php echo esc_html(get_theme_mod('multimian_phone', '+92 325 883 1437')); ?></a></p>
            <p><strong>Email:</strong> <a href="mailto:<?php echo esc_attr(get_theme_mod('multimian_email', 'mianhassam96@gmail.com')); ?>"><?php echo esc_html(get_theme_mod('multimian_email', 'mianhassam96@gmail.com')); ?></a></p>
        </div>
        
        <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="<?php echo home_url('/'); ?>">Home</a></li>
                <li><a href="<?php echo home_url('/services'); ?>">Services</a></li>
                <li><a href="<?php echo home_url('/portfolio'); ?>">Portfolio</a></li>
                <li><a href="<?php echo home_url('/about'); ?>">About</a></li>
            </ul>
        </div>
        
        <div class="footer-section">
            <h3>Services</h3>
            <ul>
                <li><a href="<?php echo home_url('/services'); ?>">Web Development</a></li>
                <li><a href="<?php echo home_url('/services'); ?>">SaaS Platforms</a></li>
                <li><a href="<?php echo home_url('/services'); ?>">E-Commerce</a></li>
                <li><a href="<?php echo home_url('/services'); ?>">Web Applications</a></li>
            </ul>
        </div>
        
        <div class="footer-section">
            <h3>Connect</h3>
            <ul>
                <li><a href="<?php echo home_url('/contact'); ?>">Contact Us</a></li>
                <li><a href="<?php echo home_url('/pricing'); ?>">Pricing</a></li>
                <li><a href="<?php echo home_url('/faq'); ?>">FAQ</a></li>
                <li><a href="<?php echo home_url('/testimonials'); ?>">Testimonials</a></li>
            </ul>
        </div>
    </div>
    
    <div class="footer-bottom">
        <p>&copy; <?php echo date('Y'); ?> MultiMian. All rights reserved. Built with ❤️ by Mian Hassam</p>
    </div>
</footer>

<!-- WhatsApp Float Button -->
<a href="https://wa.me/<?php echo esc_attr(get_theme_mod('multimian_whatsapp', '923258831437')); ?>?text=Hi! I would like to discuss a project with you." 
   target="_blank" 
   rel="noopener noreferrer" 
   class="whatsapp-float" 
   aria-label="Chat on WhatsApp">
    <svg viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
</a>

<!-- Scroll to Top Button -->
<button class="scroll-to-top" aria-label="Scroll to top">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 15l-6-6-6 6"/>
    </svg>
</button>

<!-- Consultation Popup - Modern Responsive Design -->
<div id="consultationPopup" class="popup-overlay">
    <div class="popup-container consultation-popup">
        <button class="popup-close-btn" aria-label="Close popup">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
            </svg>
        </button>
        
        <div class="popup-content-wrapper">
            <div class="popup-header-section">
                <div class="popup-icon-badge">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                    </svg>
                </div>
                <h2 class="popup-title">Start Your Project</h2>
                <p class="popup-subtitle">Get a free consultation and quote within 24 hours</p>
            </div>
            
            <form id="consultationForm" class="modern-form">
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Full Name</label>
                        <input type="text" name="name" class="form-input" required placeholder="John Doe">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Email Address</label>
                        <input type="email" name="email" class="form-input" required placeholder="john@example.com">
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Phone Number</label>
                        <input type="tel" name="phone" class="form-input" required placeholder="+92 300 1234567">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Project Type</label>
                        <select name="projectType" class="form-select" required>
                            <option value="">Select type</option>
                            <option value="business-website">Business Website</option>
                            <option value="saas-platform">SaaS Platform</option>
                            <option value="wordpress-website">WordPress Site</option>
                            <option value="ecommerce">E-Commerce</option>
                            <option value="custom-web-app">Web Application</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-group">
                    <label class="form-label">Project Details</label>
                    <textarea name="message" class="form-textarea" rows="3" placeholder="Tell us about your project..."></textarea>
                </div>
                
                <button type="submit" class="form-submit-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                    </svg>
                    <span>Send Request</span>
                </button>
                
                <p class="form-privacy-text">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0110 0v4"/>
                    </svg>
                    Your information is secure and will never be shared
                </p>
            </form>
            
            <div class="popup-contact-info">
                <div class="contact-info-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                    <a href="tel:<?php echo esc_attr(get_theme_mod('multimian_phone', '+92 325 883 1437')); ?>">
                        <?php echo esc_html(get_theme_mod('multimian_phone', '+92 325 883 1437')); ?>
                    </a>
                </div>
                <div class="contact-info-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <a href="https://wa.me/<?php echo esc_attr(get_theme_mod('multimian_whatsapp', '923258831437')); ?>" target="_blank" rel="noopener noreferrer">
                        Chat on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>



<!-- Success/Error Message -->
<div id="messageBox" class="message">
    <span id="messageText"></span>
</div>

<?php wp_footer(); ?>
</body>
</html>
