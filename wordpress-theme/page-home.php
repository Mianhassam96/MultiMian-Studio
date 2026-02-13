<?php
/**
 * Template Name: Home Page
 * 
 * @package MultiMian
 */

get_header();
?>

<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
    <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
    
    <div class="container relative z-10 py-20">
        <div class="max-w-4xl mx-auto text-center">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-6 animate-fade-in-up">
                <span class="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span class="text-sm font-semibold text-blue-700 dark:text-blue-400">
                    Trusted by 50+ Businesses Worldwide
                </span>
            </div>
            
            <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up" style="animation-delay: 0.1s">
                <span class="block text-gray-900 dark:text-white">Turning Ideas into</span>
                <span class="block gradient-text">Powerful Web Solutions</span>
            </h1>
            
            <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed animate-fade-in-up" style="animation-delay: 0.2s">
                We build high-performance websites and custom web applications that help businesses grow, increase revenue, and dominate their market.
            </p>
            
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style="animation-delay: 0.3s">
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    Get Your Free Consultation
                </a>
                <a href="<?php echo esc_url(home_url('/portfolio')); ?>" class="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-xl font-bold text-lg transition-all duration-300">
                    View Our Work
                </a>
            </div>
            
            <!-- Trust Badges -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in-up" style="animation-delay: 0.4s">
                <div class="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div class="text-3xl font-bold text-blue-600 mb-1">50+</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
                </div>
                <div class="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div class="text-3xl font-bold text-blue-600 mb-1">4.9★</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Client Rating</div>
                </div>
                <div class="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div class="text-3xl font-bold text-blue-600 mb-1">7 Days</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Avg. Turnaround</div>
                </div>
                <div class="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div class="text-3xl font-bold text-blue-600 mb-1">24/7</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Support Available</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Services Section -->
<section class="py-20 bg-white dark:bg-gray-900">
    <div class="container">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Services That Drive <span class="gradient-text">Real Results</span>
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-400">
                From concept to launch, we deliver complete web solutions tailored to your business goals.
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Service cards would be dynamically loaded here -->
            <?php
            $services = array(
                array(
                    'icon' => '🌐',
                    'title' => 'Business Websites',
                    'description' => 'Professional websites that establish credibility and convert visitors into customers.',
                    'link' => home_url('/services/business-websites')
                ),
                array(
                    'icon' => '⚡',
                    'title' => 'Web Applications',
                    'description' => 'Custom web apps that streamline operations and improve efficiency.',
                    'link' => home_url('/services')
                ),
                array(
                    'icon' => '🛒',
                    'title' => 'E-Commerce Solutions',
                    'description' => 'Online stores that drive sales with seamless shopping experiences.',
                    'link' => home_url('/services')
                ),
            );
            
            foreach ($services as $service) :
            ?>
            <div class="card-hover p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div class="text-5xl mb-4"><?php echo $service['icon']; ?></div>
                <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white"><?php echo $service['title']; ?></h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4"><?php echo $service['description']; ?></p>
                <a href="<?php echo esc_url($service['link']); ?>" class="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                    Learn More →
                </a>
            </div>
            <?php endforeach; ?>
        </div>
        
        <div class="text-center mt-12">
            <a href="<?php echo esc_url(home_url('/services')); ?>" class="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all duration-300">
                View All Services
            </a>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
    <div class="container">
        <div class="max-w-3xl mx-auto text-center text-white">
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
                Ready to Start Your Project?
            </h2>
            <p class="text-xl mb-8 opacity-90">
                Let's discuss how we can help you achieve your business goals with a powerful web solution.
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="px-8 py-4 bg-white hover:bg-gray-50 text-blue-600 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                    Get Your Free Consultation
                </a>
                <a href="https://wa.me/<?php echo esc_attr(get_theme_mod('whatsapp_number', '+923258831437')); ?>" target="_blank" class="px-8 py-4 bg-transparent hover:bg-white/10 text-white border-2 border-white/50 hover:border-white rounded-xl font-bold text-lg transition-all duration-300">
                    💬 Chat on WhatsApp
                </a>
            </div>
        </div>
    </div>
</section>

<?php
get_footer();
