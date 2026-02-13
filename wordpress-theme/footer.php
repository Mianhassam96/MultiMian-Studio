<?php
/**
 * The footer template
 *
 * @package MultiMian
 */
?>

    </div><!-- #content -->

    <footer id="colophon" class="site-footer bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
        <div class="container mx-auto px-4">
            <!-- Newsletter Section -->
            <div class="max-w-2xl mx-auto text-center mb-16">
                <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Stay Updated</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-6">Get the latest web development tips, trends, and exclusive offers delivered to your inbox.</p>
                
                <form id="newsletter-form" class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter your email" 
                        required
                        class="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                    <button 
                        type="submit"
                        class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30"
                    >
                        Subscribe
                    </button>
                </form>
                <div id="newsletter-message" class="mt-4 hidden"></div>
            </div>

            <!-- Footer Columns -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                <!-- About Column -->
                <div class="lg:col-span-1">
                    <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">About MultiMian</h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        We build high-performance websites and custom web applications that help businesses grow online.
                    </p>
                    <a href="<?php echo esc_url(home_url('/contact')); ?>" class="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-colors">
                        Start Your Project
                    </a>
                </div>

                <!-- Company Column -->
                <div>
                    <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">Company</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="<?php echo esc_url(home_url('/about')); ?>" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</a></li>
                        <li><a href="<?php echo esc_url(home_url('/portfolio')); ?>" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Portfolio</a></li>
                        <li><a href="<?php echo esc_url(home_url('/process')); ?>" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Our Process</a></li>
                        <li><a href="<?php echo esc_url(home_url('/pricing')); ?>" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</a></li>
                        <li><a href="<?php echo esc_url(home_url('/contact')); ?>" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
                    </ul>
                </div>

                <!-- Services Column -->
                <div>
                    <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">Services</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="<?php echo esc_url(home_url('/services/business-websites')); ?>" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Business Websites</a></li>
                        <li><a href="<?php echo esc_url(home_url('/services')); ?>" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Web Applications</a></li>
                        <li><a href="<?php echo esc_url(home_url('/services')); ?>" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">E-Commerce</a></li>
                        <li><a href="<?php echo esc_url(home_url('/services')); ?>" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Website Redesign</a></li>
                        <li><a href="<?php echo esc_url(home_url('/services')); ?>" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Optimization</a></li>
                    </ul>
                </div>

                <!-- Why Choose Us Column -->
                <div>
                    <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">Why Choose Us</h3>
                    <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li class="flex items-start gap-2">
                            <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Fast Delivery</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Mobile Responsive</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span>SEO Friendly</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span>24/7 Support</span>
                        </li>
                    </ul>
                </div>

                <!-- Resources Column -->
                <div>
                    <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">Resources</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="<?php echo esc_url(home_url('/testimonials')); ?>" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Testimonials</a></li>
                        <li><a href="<?php echo esc_url(home_url('/faq')); ?>" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">FAQ</a></li>
                        <li><a href="<?php echo esc_url(home_url('/blog')); ?>" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</a></li>
                        <li><a href="<?php echo esc_url(home_url('/privacy-policy')); ?>" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                        <li><a href="<?php echo esc_url(home_url('/terms')); ?>" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="pt-8 border-t border-gray-200 dark:border-gray-800">
                <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        &copy; <?php echo date('Y'); ?> MultiMian. All rights reserved.
                    </p>
                    
                    <!-- Social Links -->
                    <div class="flex items-center gap-4">
                        <?php
                        $social_networks = array(
                            'facebook' => 'Facebook',
                            'twitter' => 'Twitter',
                            'linkedin' => 'LinkedIn',
                            'instagram' => 'Instagram',
                            'github' => 'GitHub'
                        );
                        
                        foreach ($social_networks as $network => $label) {
                            $url = get_theme_mod($network . '_url');
                            if ($url) :
                        ?>
                            <a href="<?php echo esc_url($url); ?>" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="<?php echo esc_attr($label); ?>">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <!-- Icon paths would go here -->
                                </svg>
                            </a>
                        <?php
                            endif;
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- WhatsApp Button -->
    <a href="https://wa.me/<?php echo esc_attr(get_theme_mod('whatsapp_number', '+923258831437')); ?>" 
       target="_blank" 
       rel="noopener noreferrer"
       class="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
       aria-label="Chat on WhatsApp">
        <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
    </a>

    <!-- WhatsApp Popup -->
    <div id="whatsapp-popup" class="whatsapp-popup-overlay hidden">
        <div class="whatsapp-popup">
            <div class="whatsapp-popup-header">
                <button class="whatsapp-popup-close" onclick="closeWhatsAppPopup()">
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <div class="whatsapp-popup-icon">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                </div>
                <h2 style="color: white; font-size: 1.875rem; font-weight: bold; margin: 0; font-family: 'Space Grotesk', sans-serif; letter-spacing: 0.05em; position: relative; z-index: 10;">
                    Welcome to MultiMian! 👋
                </h2>
                <p style="color: rgba(255, 255, 255, 0.9); margin-top: 0.5rem; position: relative; z-index: 10;">
                    Let's start building something amazing
                </p>
            </div>
            
            <div class="whatsapp-popup-body">
                <h3 class="whatsapp-popup-title">Let's Start a Conversation</h3>
                <p class="whatsapp-popup-subtitle">Get instant answers to your questions and free consultation</p>
                
                <ul class="whatsapp-popup-features">
                    <li>
                        <svg fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Instant Response</span>
                    </li>
                    <li>
                        <svg fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Free Consultation</span>
                    </li>
                    <li>
                        <svg fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Project Discussion</span>
                    </li>
                    <li>
                        <svg fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Quick Quote</span>
                    </li>
                </ul>
                
                <div class="whatsapp-popup-buttons">
                    <a href="https://wa.me/<?php echo esc_attr(get_theme_mod('whatsapp_number', '+923258831437')); ?>?text=Hi%20MultiMian!%20I'm%20interested%20in%20your%20services." 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="whatsapp-popup-button whatsapp-popup-button-primary"
                       onclick="closeWhatsAppPopup()">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Chat on WhatsApp
                    </a>
                    <button class="whatsapp-popup-button whatsapp-popup-button-secondary" onclick="closeWhatsAppPopup()">
                        Maybe Later
                    </button>
                </div>
            </div>
            
            <div class="whatsapp-popup-footer">
                We typically reply within minutes during business hours
            </div>
        </div>
    </div>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
