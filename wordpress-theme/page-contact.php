<?php
/**
 * Template Name: Contact Page
 *
 * @package MultiMian_Pro
 */

get_header();
?>

<main id="primary" class="site-main">
    <!-- Hero Section -->
    <section class="hero-section py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div class="container">
            <div class="text-center animate-on-scroll">
                <h1 class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Let&apos;s Build Something Great Together
                </h1>
                <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
                    Have a project in mind? Need a website that actually converts? Looking for a custom web solution? We&apos;re here to help. Get in touch and let&apos;s discuss how we can bring your vision to life.
                </p>
                <div class="inline-flex items-center gap-3 text-sm text-blue-600 bg-blue-100 dark:bg-blue-900/30 px-6 py-3 rounded-xl">
                    <span>⚡</span>
                    <span>We respond within 24 hours • Free consultation • No obligation</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Info Section -->
    <section class="section py-16 bg-white dark:bg-gray-900">
        <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <?php
                $contact_info = array(
                    array('icon' => '📧', 'label' => 'Email', 'value' => get_theme_mod('contact_email', 'mianhassam96@gmail.com'), 'href' => 'mailto:' . get_theme_mod('contact_email', 'mianhassam96@gmail.com')),
                    array('icon' => '📱', 'label' => 'Phone', 'value' => get_theme_mod('contact_phone', '+92 325 883 1437'), 'href' => 'tel:+923258831437'),
                    array('icon' => '💬', 'label' => 'WhatsApp', 'value' => '+92 325 883 1437', 'href' => 'https://wa.me/923258831437'),
                    array('icon' => '📍', 'label' => 'Location', 'value' => get_theme_mod('contact_address', 'Pakistan'), 'href' => '#')
                );

                foreach ($contact_info as $info) :
                ?>
                    <div class="text-center glass-card p-6 rounded-2xl hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 animate-on-scroll">
                        <div class="text-4xl mb-4"><?php echo esc_html($info['icon']); ?></div>
                        <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-white"><?php echo esc_html($info['label']); ?></h3>
                        <?php if ($info['href'] !== '#') : ?>
                            <a href="<?php echo esc_url($info['href']); ?>" class="text-blue-600 hover:text-blue-700 transition-colors" <?php echo strpos($info['href'], 'http') === 0 ? 'target="_blank" rel="noopener noreferrer"' : ''; ?>>
                                <?php echo esc_html($info['value']); ?>
                            </a>
                        <?php else : ?>
                            <p class="text-gray-600 dark:text-gray-400"><?php echo esc_html($info['value']); ?></p>
                        <?php endif; ?>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Contact Form Section -->
    <section class="section py-16 bg-gray-50 dark:bg-gray-800">
        <div class="container">
            <div class="max-w-4xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <!-- Form -->
                    <div class="glass-card p-8 rounded-2xl bg-white dark:bg-gray-900 animate-on-scroll">
                        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h2>
                        
                        <?php
                        // Display Contact Form 7 if available
                        if (function_exists('wpcf7_contact_form')) {
                            echo do_shortcode('[contact-form-7 id="1" title="Contact form 1"]');
                        } else {
                            // Fallback to mailto form
                            ?>
                            <form action="mailto:<?php echo esc_attr(get_theme_mod('contact_email', 'mianhassam96@gmail.com')); ?>" method="post" enctype="text/plain" class="space-y-6">
                                <div>
                                    <label for="name" class="block text-sm font-medium mb-2 text-gray-900 dark:text-white">Name *</label>
                                    <input id="name" name="name" type="text" required class="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition bg-white dark:bg-gray-800 text-gray-900 dark:text-white" placeholder="Your full name" />
                                </div>
                                <div>
                                    <label for="email" class="block text-sm font-medium mb-2 text-gray-900 dark:text-white">Email *</label>
                                    <input id="email" name="email" type="email" required class="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition bg-white dark:bg-gray-800 text-gray-900 dark:text-white" placeholder="your.email@example.com" />
                                </div>
                                <div>
                                    <label for="message" class="block text-sm font-medium mb-2 text-gray-900 dark:text-white">Message *</label>
                                    <textarea id="message" name="message" required rows="6" class="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white" placeholder="Tell me about your project or idea..."></textarea>
                                </div>
                                <div>
                                    <button type="submit" class="w-full px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition">
                                        Send Message via Email
                                    </button>
                                </div>
                            </form>
                        <?php } ?>
                    </div>

                    <!-- Additional Info -->
                    <div class="space-y-8 animate-on-scroll">
                        <div>
                            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose MultiMian?</h3>
                            <ul class="space-y-3 text-gray-600 dark:text-gray-400">
                                <li class="flex items-start gap-3">
                                    <span class="text-blue-600 mt-1">✓</span>
                                    <span>Results-driven solutions that grow your business</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="text-blue-600 mt-1">✓</span>
                                    <span>Clear communication in plain English, no tech jargon</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="text-blue-600 mt-1">✓</span>
                                    <span>Fast delivery without compromising quality</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="text-blue-600 mt-1">✓</span>
                                    <span>Ongoing support and partnership after launch</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Follow Me</h3>
                            <div class="flex gap-4">
                                <?php
                                $social_links = array(
                                    array('name' => 'GitHub', 'url' => get_theme_mod('github_url', ''), 'icon' => '🐙'),
                                    array('name' => 'LinkedIn', 'url' => get_theme_mod('linkedin_url', ''), 'icon' => '💼'),
                                    array('name' => 'Facebook', 'url' => get_theme_mod('facebook_url', ''), 'icon' => '📘')
                                );

                                foreach ($social_links as $social) :
                                    if ($social['url']) :
                                ?>
                                    <a href="<?php echo esc_url($social['url']); ?>" target="_blank" rel="noopener noreferrer" class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 rounded-xl flex items-center justify-center text-2xl transition" title="<?php echo esc_attr($social['name']); ?>">
                                        <?php echo esc_html($social['icon']); ?>
                                    </a>
                                <?php
                                    endif;
                                endforeach;
                                ?>
                            </div>
                        </div>

                        <div class="glass-card p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                            <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">🎁 Free Consultation</h3>
                            <p class="text-gray-600 dark:text-gray-400 mb-4">
                                Not sure where to start? Book a free 30-minute consultation. We&apos;ll discuss your goals, answer your questions, and provide honest advice—no sales pressure.
                            </p>
                            <p class="text-sm text-blue-600 font-medium">
                                ⚡ Response time: Within 24 hours
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
