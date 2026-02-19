<?php
/**
 * Template Name: Services Page
 *
 * @package MultiMian_Pro
 */

get_header();
?>

<main id="primary" class="site-main">
    <!-- Hero Section -->
    <section class="hero-section py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div class="container">
            <div class="text-center max-w-4xl mx-auto animate-on-scroll">
                <div class="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
                    <span class="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span class="text-sm font-medium text-blue-700 dark:text-blue-400">Available for New Projects</span>
                </div>

                <h1 class="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Get a Website That Actually Brings You Customers
                </h1>
                <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                    Stop losing business to competitors with better websites. We build high-performance web solutions that turn visitors into paying customers.
                </p>

                <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact'))); ?>" class="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all">
                        Get Your Free Consultation
                        <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </a>
                    <a href="https://wa.me/923258831437" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-600 rounded-xl text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all font-semibold text-lg">
                        <span class="text-xl">💬</span>
                        Quick Chat on WhatsApp
                    </a>
                </div>

                <p class="text-sm text-gray-600 dark:text-gray-400">
                    ✓ Free consultation • ✓ No obligation • ✓ Response within 24 hours
                </p>

                <!-- Trust Indicators -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                    <div class="text-center">
                        <div class="text-3xl font-bold text-blue-600 mb-1">50+</div>
                        <div class="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-blue-600 mb-1">100%</div>
                        <div class="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-blue-600 mb-1">5+ Years</div>
                        <div class="text-sm text-gray-600 dark:text-gray-400">Experience</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-blue-600 mb-1">24/7</div>
                        <div class="text-sm text-gray-600 dark:text-gray-400">Support Available</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Pain Points Section -->
    <section class="section py-16">
        <div class="container">
            <div class="text-center mb-12 animate-on-scroll">
                <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Is Your Website Costing You Money?
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    These common problems are driving potential customers away from your business.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <?php
                $pain_points = array(
                    array('icon' => '😰', 'problem' => 'Outdated Design', 'impact' => 'Visitors leave within seconds because your site looks unprofessional', 'stat' => '94% judge credibility by design'),
                    array('icon' => '🐌', 'problem' => 'Slow Loading', 'impact' => 'Every second of delay costs you customers and sales', 'stat' => '40% abandon slow sites'),
                    array('icon' => '📱', 'problem' => 'Not Mobile-Friendly', 'impact' => 'You\'re losing 60%+ of potential customers who browse on phones', 'stat' => '60% of traffic is mobile')
                );

                foreach ($pain_points as $pain) :
                ?>
                    <div class="glass-card p-6 rounded-2xl border-2 border-red-200 dark:border-red-900/30 bg-white dark:bg-gray-800 animate-on-scroll">
                        <div class="text-5xl mb-4"><?php echo esc_html($pain['icon']); ?></div>
                        <h3 class="text-xl font-bold mb-3 text-red-600 dark:text-red-400"><?php echo esc_html($pain['problem']); ?></h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-4"><?php echo esc_html($pain['impact']); ?></p>
                        <div class="text-sm font-semibold text-blue-600 bg-blue-100 dark:bg-blue-900/30 px-3 py-2 rounded-lg inline-block">
                            <?php echo esc_html($pain['stat']); ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>

            <div class="text-center animate-on-scroll">
                <p class="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                    Don&apos;t let a poor website hold your business back.
                </p>
                <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact'))); ?>" class="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all">
                    Fix Your Website Now
                    <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>
    </section>

    <!-- Services List -->
    <section class="section py-16 bg-gray-50 dark:bg-gray-900">
        <div class="container">
            <div class="text-center mb-12 animate-on-scroll">
                <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Our Services
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    From concept to deployment, we deliver cutting-edge web solutions that drive business growth
                </p>
            </div>

            <?php
            $services = new WP_Query(array(
                'post_type'      => 'service',
                'posts_per_page' => -1,
                'orderby'        => 'menu_order',
                'order'          => 'ASC',
            ));

            if ($services->have_posts()) :
                ?>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <?php
                    while ($services->have_posts()) : $services->the_post();
                        $icon = get_field('service_icon') ?: '🌐';
                        $features = get_field('service_features');
                        $price = get_field('service_price');
                        $timeline = get_field('service_timeline');
                        ?>
                        <div class="service-card animate-on-scroll bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                            <div class="service-icon text-6xl mb-6"><?php echo esc_html($icon); ?></div>
                            <h3 class="service-title text-2xl font-bold mb-4 text-gray-900 dark:text-white"><?php the_title(); ?></h3>
                            <p class="service-description text-gray-600 dark:text-gray-400 mb-6"><?php echo esc_html(get_the_excerpt()); ?></p>
                            
                            <?php if ($features) : ?>
                                <div class="service-features mb-6">
                                    <?php foreach ($features as $feature) : ?>
                                        <span class="feature-tag inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mr-2 mb-2">
                                            <?php echo esc_html($feature['feature']); ?>
                                        </span>
                                    <?php endforeach; ?>
                                </div>
                            <?php endif; ?>

                            <?php if ($price || $timeline) : ?>
                                <div class="flex items-center justify-between mb-6 pb-6 border-t border-gray-200 dark:border-gray-700 pt-6">
                                    <?php if ($price) : ?>
                                        <div>
                                            <div class="text-sm text-gray-600 dark:text-gray-400">Starting at</div>
                                            <div class="text-xl font-bold text-blue-600"><?php echo esc_html($price); ?></div>
                                        </div>
                                    <?php endif; ?>
                                    <?php if ($timeline) : ?>
                                        <div class="text-right">
                                            <div class="text-sm text-gray-600 dark:text-gray-400">Timeline</div>
                                            <div class="text-lg font-semibold text-gray-900 dark:text-white"><?php echo esc_html($timeline); ?></div>
                                        </div>
                                    <?php endif; ?>
                                </div>
                            <?php endif; ?>

                            <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact'))); ?>" class="block text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all">
                                Get Started →
                            </a>
                        </div>
                    <?php
                    endwhile;
                    wp_reset_postdata();
                    ?>
                </div>
            <?php endif; ?>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="section py-16">
        <div class="container">
            <div class="text-center glass-card p-12 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 text-white animate-on-scroll">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
                <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                    Let&apos;s discuss your project and create a solution that drives real results.
                </p>
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact'))); ?>" class="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 rounded-xl font-semibold transition-all">
                        Schedule Free Consultation
                        <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </a>
                    <a href="<?php echo esc_url(get_permalink(get_page_by_path('pricing'))); ?>" class="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/50 hover:border-white rounded-xl text-white hover:bg-white/10 transition-all font-semibold">
                        View Pricing
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
