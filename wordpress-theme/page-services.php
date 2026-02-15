<?php
/**
 * Template Name: Services Page
 * 
 * @package MultiMian
 */

get_header();
?>

<main id="primary" class="site-main">
    <div class="container mx-auto px-4 py-16">
        
        <!-- Hero Section -->
        <div class="text-center mb-16">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Professional Web Development Services
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                From simple business websites to complex web applications, we deliver solutions that drive results.
            </p>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            <!-- Business Websites -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div class="text-4xl mb-4">🏢</div>
                <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Business Websites</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-6">Professional websites that establish credibility and attract customers.</p>
                <ul class="space-y-2 mb-6">
                    <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Custom Design</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Mobile Responsive</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span>SEO Optimized</span>
                    </li>
                </ul>
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                    Get Started
                </a>
            </div>

            <!-- Web Applications -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div class="text-4xl mb-4">⚡</div>
                <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Web Applications</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-6">Custom web apps tailored to your business processes and workflows.</p>
                <ul class="space-y-2 mb-6">
                    <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Custom Features</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Scalable Architecture</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span>API Integration</span>
                    </li>
                </ul>
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                    Get Started
                </a>
            </div>

            <!-- E-Commerce -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div class="text-4xl mb-4">🛒</div>
                <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">E-Commerce Solutions</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-6">Powerful online stores that convert visitors into customers.</p>
                <ul class="space-y-2 mb-6">
                    <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Payment Integration</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Inventory Management</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Secure Checkout</span>
                    </li>
                </ul>
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                    Get Started
                </a>
            </div>

            <!-- Website Redesign -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div class="text-4xl mb-4">🎨</div>
                <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Website Redesign</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-6">Modernize your existing website with fresh design and better performance.</p>
                <ul class="space-y-2 mb-6">
                    <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Modern Design</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Better UX</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Faster Loading</span>
                    </li>
                </ul>
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                    Get Started
                </a>
            </div>

            <!-- Speed Optimization -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div class="text-4xl mb-4">⚡</div>
                <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Speed Optimization</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-6">Make your website lightning-fast for better user experience and SEO.</p>
                <ul class="space-y-2 mb-6">
                    <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Performance Audit</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Code Optimization</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span>CDN Setup</span>
                    </li>
                </ul>
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                    Get Started
                </a>
            </div>

            <!-- Ongoing Support -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div class="text-4xl mb-4">🛠️</div>
                <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ongoing Support</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-6">Keep your website running smoothly with our maintenance and support services.</p>
                <ul class="space-y-2 mb-6">
                    <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Regular Updates</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Security Monitoring</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Priority Support</span>
                    </li>
                </ul>
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                    Get Started
                </a>
            </div>

        </div>

        <!-- CTA Section -->
        <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p class="text-xl mb-8 opacity-90">Let's discuss your project and find the perfect solution for your needs.</p>
            <a href="<?php echo esc_url(home_url('/contact')); ?>" class="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                Get Free Consultation
            </a>
        </div>

    </div>
</main>

<?php
get_footer();
