<?php
/**
 * Template Name: Pricing Page
 *
 * @package MultiMian_Pro
 */

get_header();
?>

<main id="primary" class="site-main">
    <!-- Header -->
    <section class="hero-section py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div class="container">
            <div class="text-center max-w-4xl mx-auto animate-on-scroll">
                <h1 class="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Simple, Transparent Pricing
                </h1>
                <p class="text-xl text-gray-600 dark:text-gray-400 mb-4">No hidden fees. No surprises. Just honest pricing for quality work.</p>
                <p class="text-sm text-blue-600">Flexible payment plans available • 50% upfront, 50% on delivery</p>
            </div>
        </div>
    </section>

    <!-- Pricing Cards -->
    <section class="section py-16">
        <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <?php
                $packages = array(
                    array(
                        'name' => 'Starter Website',
                        'price' => '$499',
                        'duration' => '1-2 weeks',
                        'description' => 'Perfect for small businesses getting started online',
                        'features' => array(
                            'Up to 5 pages',
                            'Mobile-responsive design',
                            'Contact form integration',
                            'Basic SEO optimization',
                            'Social media links',
                            'Free SSL certificate',
                            'Google Analytics setup',
                            '1 round of revisions',
                            '30-day post-launch support'
                        ),
                        'idealFor' => 'Small businesses, service providers, personal brands',
                        'popular' => false
                    ),
                    array(
                        'name' => 'Business Website',
                        'price' => '$1,499',
                        'duration' => '2-4 weeks',
                        'description' => 'Comprehensive solution for growing businesses',
                        'features' => array(
                            'Up to 15 pages',
                            'Custom design tailored to your brand',
                            'Advanced SEO optimization',
                            'Blog/CMS integration',
                            'Contact forms with email notifications',
                            'Image gallery or portfolio section',
                            'Social media integration',
                            'Google Maps integration',
                            '2 rounds of revisions',
                            '60-day post-launch support',
                            'Performance optimization',
                            'Google Analytics & Search Console'
                        ),
                        'idealFor' => 'Established businesses, professional firms, growing brands',
                        'popular' => true
                    ),
                    array(
                        'name' => 'Custom Web App',
                        'price' => 'Custom',
                        'duration' => '4-8 weeks',
                        'description' => 'Fully customized solutions for unique needs',
                        'features' => array(
                            'Unlimited pages and features',
                            'Custom functionality',
                            'User authentication system',
                            'Database design',
                            'Admin dashboard',
                            'API development',
                            'Third-party integrations',
                            'Payment gateway integration',
                            'Advanced security',
                            'Unlimited revisions',
                            '90-day post-launch support',
                            'Scalable architecture',
                            'Documentation and training'
                        ),
                        'idealFor' => 'SaaS startups, complex business needs, scalable platforms',
                        'popular' => false
                    )
                );

                foreach ($packages as $idx => $pkg) :
                ?>
                    <div class="glass-card rounded-3xl p-8 relative bg-white dark:bg-gray-800 shadow-lg animate-on-scroll <?php echo $pkg['popular'] ? 'ring-2 ring-blue-600 scale-105' : ''; ?>">
                        <?php if ($pkg['popular']) : ?>
                            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                                    Most Popular
                                </span>
                            </div>
                        <?php endif; ?>

                        <div class="text-center mb-6">
                            <h3 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white"><?php echo esc_html($pkg['name']); ?></h3>
                            <div class="text-4xl font-extrabold text-blue-600 mb-2"><?php echo esc_html($pkg['price']); ?></div>
                            <div class="text-sm text-gray-600 dark:text-gray-400 mb-4">Timeline: <?php echo esc_html($pkg['duration']); ?></div>
                            <p class="text-gray-600 dark:text-gray-400"><?php echo esc_html($pkg['description']); ?></p>
                        </div>

                        <div class="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <p class="text-sm font-semibold text-blue-600 mb-1">Ideal for:</p>
                            <p class="text-sm text-gray-600 dark:text-gray-400"><?php echo esc_html($pkg['idealFor']); ?></p>
                        </div>

                        <ul class="space-y-3 mb-8">
                            <?php foreach ($pkg['features'] as $feature) : ?>
                                <li class="flex items-start gap-3">
                                    <span class="flex-shrink-0 w-5 h-5 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 text-xs mt-0.5">✓</span>
                                    <span class="text-sm text-gray-600 dark:text-gray-400"><?php echo esc_html($feature); ?></span>
                                </li>
                            <?php endforeach; ?>
                        </ul>

                        <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact'))); ?>" class="block w-full text-center py-4 rounded-xl font-medium transition-all <?php echo $pkg['popular'] ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20'; ?>">
                            <?php echo $pkg['popular'] ? 'Get Started' : 'Learn More'; ?>
                        </a>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <section class="section py-16 bg-gray-50 dark:bg-gray-900">
        <div class="container">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Common Questions</h2>
                <div class="space-y-6">
                    <?php
                    $faqs = array(
                        array('q' => 'What\'s included in the price?', 'a' => 'All packages include design, development, testing, deployment, and post-launch support. You own all code and assets. No hidden fees.'),
                        array('q' => 'Do you offer payment plans?', 'a' => 'Yes! We typically split payments: 50% upfront and 50% upon completion. Custom payment plans available for larger projects.'),
                        array('q' => 'What if I need changes after launch?', 'a' => 'All packages include post-launch support (30-90 days). After that, we offer affordable maintenance packages or hourly rates.')
                    );

                    foreach ($faqs as $faq) :
                    ?>
                        <div class="glass-card p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg animate-on-scroll">
                            <h3 class="text-lg font-bold mb-2 text-gray-900 dark:text-white"><?php echo esc_html($faq['q']); ?></h3>
                            <p class="text-gray-600 dark:text-gray-400"><?php echo esc_html($faq['a']); ?></p>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="section py-16">
        <div class="container">
            <div class="text-center glass-card p-12 rounded-3xl bg-white dark:bg-gray-800 shadow-lg animate-on-scroll">
                <h2 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Not Sure Which Package to Choose?</h2>
                <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">Let&apos;s have a conversation about your project.</p>
                <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact'))); ?>" class="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all">
                    Schedule Free Consultation →
                </a>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
