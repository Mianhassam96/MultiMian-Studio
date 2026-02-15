<?php
/**
 * Front Page Template
 * 
 * @package MultiMian
 */

get_header();
?>

<main id="primary" class="site-main">
    
    <!-- Hero Section -->
    <section class="relative py-20 md:py-32 overflow-hidden">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent leading-tight">
                    Build Your Dream Website Today
                </h1>
                <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    Professional web development services that transform your ideas into powerful digital solutions. Fast, reliable, and results-driven.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="<?php echo esc_url(home_url('/contact')); ?>" class="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        Get Free Consultation
                    </a>
                    <a href="<?php echo esc_url(home_url('/portfolio')); ?>" class="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                        View Our Work
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                    What We Do Best
                </h2>
                <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    From simple websites to complex web applications, we deliver solutions that drive results.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service 1 -->
                <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105">
                    <div class="text-5xl mb-4">🏢</div>
                    <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Business Websites</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">
                        Professional websites that establish credibility and attract customers.
                    </p>
                    <a href="<?php echo esc_url(home_url('/services')); ?>" class="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                        Learn More →
                    </a>
                </div>

                <!-- Service 2 -->
                <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105">
                    <div class="text-5xl mb-4">⚡</div>
                    <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Web Applications</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">
                        Custom web apps tailored to your business processes and workflows.
                    </p>
                    <a href="<?php echo esc_url(home_url('/services')); ?>" class="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                        Learn More →
                    </a>
                </div>

                <!-- Service 3 -->
                <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105">
                    <div class="text-5xl mb-4">🛒</div>
                    <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white">E-Commerce</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">
                        Powerful online stores that convert visitors into customers.
                    </p>
                    <a href="<?php echo esc_url(home_url('/services')); ?>" class="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                        Learn More →
                    </a>
                </div>

                <!-- Service 4 -->
                <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105">
                    <div class="text-5xl mb-4">🎨</div>
                    <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Website Redesign</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">
                        Modernize your existing website with fresh design and better performance.
                    </p>
                    <a href="<?php echo esc_url(home_url('/services')); ?>" class="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                        Learn More →
                    </a>
                </div>

                <!-- Service 5 -->
                <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105">
                    <div class="text-5xl mb-4">🚀</div>
                    <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Speed Optimization</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">
                        Make your website lightning-fast for better user experience and SEO.
                    </p>
                    <a href="<?php echo esc_url(home_url('/services')); ?>" class="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                        Learn More →
                    </a>
                </div>

                <!-- Service 6 -->
                <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105">
                    <div class="text-5xl mb-4">🛠️</div>
                    <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Ongoing Support</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">
                        Keep your website running smoothly with our maintenance services.
                    </p>
                    <a href="<?php echo esc_url(home_url('/services')); ?>" class="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                        Learn More →
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div class="text-center">
                    <div class="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                    <div class="text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div class="text-center">
                    <div class="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
                    <div class="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                </div>
                <div class="text-center">
                    <div class="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</div>
                    <div class="text-gray-600 dark:text-gray-400">Support Available</div>
                </div>
                <div class="text-center">
                    <div class="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">Fast</div>
                    <div class="text-gray-600 dark:text-gray-400">Delivery Time</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                    Why Choose MultiMian?
                </h2>
                <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    We're not just developers—we're your strategic partner in digital growth.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="text-center">
                    <div class="text-5xl mb-4">⚡</div>
                    <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">Fast Delivery</h3>
                    <p class="text-gray-600 dark:text-gray-400">Quick turnaround without compromising quality</p>
                </div>
                <div class="text-center">
                    <div class="text-5xl mb-4">📱</div>
                    <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">Mobile Responsive</h3>
                    <p class="text-gray-600 dark:text-gray-400">Perfect on all devices and screen sizes</p>
                </div>
                <div class="text-center">
                    <div class="text-5xl mb-4">🔍</div>
                    <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">SEO Friendly</h3>
                    <p class="text-gray-600 dark:text-gray-400">Built to rank well on search engines</p>
                </div>
                <div class="text-center">
                    <div class="text-5xl mb-4">🛡️</div>
                    <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">Secure & Reliable</h3>
                    <p class="text-gray-600 dark:text-gray-400">Enterprise-grade security and uptime</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20">
        <div class="container mx-auto px-4">
            <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 md:p-16 text-center text-white">
                <h2 class="text-3xl md:text-5xl font-bold mb-4">
                    Ready to Start Your Project?
                </h2>
                <p class="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
                    Let's discuss your goals and create a solution that drives real results for your business.
                </p>
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl">
                    Get Free Consultation
                </a>
            </div>
        </div>
    </section>

</main>

<?php
get_footer();
