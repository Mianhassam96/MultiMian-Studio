<footer class="site-footer">
    <!-- Newsletter Section -->
    <div class="footer-newsletter">
        <div class="container">
            <h3 class="newsletter-title">Stay Updated</h3>
            <p class="newsletter-description">Get the latest web development tips, project insights, and exclusive offers delivered to your inbox.</p>
            <form class="newsletter-form" id="newsletter-form">
                <input type="email" name="email" class="newsletter-input" placeholder="Enter your email address" required>
                <button type="submit" class="newsletter-button">Subscribe</button>
            </form>
            <div id="newsletter-message"></div>
        </div>
    </div>

    <!-- Main Footer -->
    <div class="footer-main">
        <div class="container">
            <div class="footer-grid">
                <!-- Brand Column -->
                <div class="footer-col">
                    <div class="footer-brand">
                        <a href="<?php echo esc_url(home_url('/')); ?>" class="footer-logo">
                            <span class="logo-multi">MULTI</span><span class="logo-mian">MIAN</span>
                        </a>
                        <p class="footer-description">
                            We build professional websites and custom web applications that help businesses grow online. From startups to established companies, we deliver solutions that work.
                        </p>
                        <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn btn-primary btn-sm">Get Free Quote</a>
                    </div>

                    <!-- Social Links -->
                    <div class="footer-social">
                        <?php if (get_theme_mod('facebook_url')) : ?>
                            <a href="<?php echo esc_url(get_theme_mod('facebook_url')); ?>" class="social-link" target="_blank" rel="noopener" aria-label="Facebook">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/></svg>
                            </a>
                        <?php endif; ?>
                        
                        <?php if (get_theme_mod('linkedin_url')) : ?>
                            <a href="<?php echo esc_url(get_theme_mod('linkedin_url')); ?>" class="social-link" target="_blank" rel="noopener" aria-label="LinkedIn">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.07 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM8.5 8h3.8v2.18h.06c.53-1 1.82-2.06 3.75-2.06 4 0 4.74 2.64 4.74 6.07V24h-4V15.5c0-2.04-.04-4.66-2.84-4.66-2.84 0-3.28 2.22-3.28 4.5V24h-4z"/></svg>
                            </a>
                        <?php endif; ?>
                        
                        <?php if (get_theme_mod('github_url')) : ?>
                            <a href="<?php echo esc_url(get_theme_mod('github_url')); ?>" class="social-link" target="_blank" rel="noopener" aria-label="GitHub">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.8-1.4-3.8-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.7 1.6.7 1.7 1.6.1 3.1-1.1 3.8-2 .1-.9.6-1.5 1-1.9-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2.9-.2 1.8-.3 2.7-.3s1.9.1 2.7.3c2.3-1.6 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.7.9 1.2 2 1.2 3.3 0 4.4-2.8 5.4-5.4 5.7.6.5 1 1.3 1 2.6v3.8c0 .4.2.8.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>
                            </a>
                        <?php endif; ?>
                        
                        <?php if (get_theme_mod('whatsapp_number')) : ?>
                            <a href="https://wa.me/<?php echo esc_attr(get_theme_mod('whatsapp_number')); ?>" class="social-link" target="_blank" rel="noopener" aria-label="WhatsApp">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                            </a>
                        <?php endif; ?>
                    </div>

                    <!-- Contact Info -->
                    <div class="footer-contact">
                        <?php if (get_theme_mod('contact_address')) : ?>
                            <div class="contact-item">
                                <span><?php echo esc_html(get_theme_mod('contact_address')); ?></span>
                            </div>
                        <?php endif; ?>
                        
                        <?php if (get_theme_mod('contact_email')) : ?>
                            <div class="contact-item">
                                <a href="mailto:<?php echo esc_attr(get_theme_mod('contact_email')); ?>"><?php echo esc_html(get_theme_mod('contact_email')); ?></a>
                            </div>
                        <?php endif; ?>
                        
                        <?php if (get_theme_mod('contact_phone')) : ?>
                            <div class="contact-item">
                                <a href="tel:<?php echo esc_attr(str_replace(' ', '', get_theme_mod('contact_phone'))); ?>"><?php echo esc_html(get_theme_mod('contact_phone')); ?></a>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>

                <!-- Company Column -->
                <div class="footer-col">
                    <ul class="footer-links">
                        <h4>Company</h4>
                        <li><a href="<?php echo esc_url(home_url('/about')); ?>">About Us</a></li>
                        <li><a href="<?php echo esc_url(home_url('/portfolio')); ?>">Portfolio</a></li>
                        <li><a href="<?php echo esc_url(home_url('/process')); ?>">Our Process</a></li>
                        <li><a href="<?php echo esc_url(home_url('/pricing')); ?>">Pricing</a></li>
                        <li><a href="<?php echo esc_url(home_url('/contact')); ?>">Contact Us</a></li>
                    </ul>
                </div>

                <!-- Services Column -->
                <div class="footer-col">
                    <ul class="footer-links">
                        <h4>Services</h4>
                        <li><a href="<?php echo esc_url(home_url('/services#business-websites')); ?>">Business Websites</a></li>
                        <li><a href="<?php echo esc_url(home_url('/services#web-applications')); ?>">Web Applications</a></li>
                        <li><a href="<?php echo esc_url(home_url('/services#ecommerce')); ?>">E-Commerce Solutions</a></li>
                        <li><a href="<?php echo esc_url(home_url('/services#website-redesign')); ?>">Website Redesign</a></li>
                        <li><a href="<?php echo esc_url(home_url('/services#speed-optimization')); ?>">Speed Optimization</a></li>
                    </ul>
                </div>

                <!-- Resources Column -->
                <div class="footer-col">
                    <ul class="footer-links">
                        <h4>Resources</h4>
                        <li><a href="<?php echo esc_url(home_url('/testimonials')); ?>">Testimonials</a></li>
                        <li><a href="<?php echo esc_url(home_url('/faq')); ?>">FAQ & Guides</a></li>
                        <li><a href="<?php echo esc_url(home_url('/blog')); ?>">Blog</a></li>
                        <li><a href="<?php echo esc_url(home_url('/privacy-policy')); ?>">Privacy Policy</a></li>
                        <li><a href="<?php echo esc_url(home_url('/terms')); ?>">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
        <div class="container">
            <div class="footer-bottom-content">
                <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Built by <span style="color: var(--primary); font-weight: 600;">Mian Hassam</span>. All rights reserved.</p>
                <div class="footer-bottom-links">
                    <a href="<?php echo esc_url(home_url('/privacy-policy')); ?>">Privacy</a>
                    <span>·</span>
                    <a href="<?php echo esc_url(home_url('/terms')); ?>">Terms</a>
                    <span>·</span>
                    <a href="<?php echo esc_url(home_url('/contact')); ?>">Contact</a>
                </div>
            </div>
        </div>
    </div>
</footer>

<!-- WhatsApp Button -->
<?php if (get_theme_mod('whatsapp_number')) : ?>
    <a href="https://wa.me/<?php echo esc_attr(get_theme_mod('whatsapp_number')); ?>" class="whatsapp-button" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        💬
    </a>
<?php endif; ?>

<!-- Scroll to Top Button -->
<button class="scroll-top" id="scroll-top" aria-label="Scroll to top">
    ↑
</button>

<?php wp_footer(); ?>
</body>
</html>
