<?php
/**
 * Template Name: About Page
 *
 * @package MultiMian_Pro
 */

get_header();
?>

<main id="primary" class="site-main">
    <!-- Hero Section -->
    <section class="hero-section py-20">
        <div class="container">
            <div class="max-w-5xl mx-auto text-center animate-on-scroll">
                <h1 class="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Building Digital Solutions That Drive Real Results
                </h1>
                <p class="text-xl text-gray-600 dark:text-gray-400">
                    We&apos;re not just developers—we&apos;re your strategic partner in digital growth.
                </p>
            </div>
        </div>
    </section>

    <!-- Story Section -->
    <section class="section py-16">
        <div class="container">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">How MultiMian Started</h2>
                <div class="glass-card p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg">
                    <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
                        MultiMian was founded with a simple belief: every business deserves a powerful online presence that drives growth.
                    </p>
                    <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
                        I&apos;ve seen too many businesses struggle with websites that don&apos;t deliver results. That&apos;s why I created MultiMian—to build digital solutions that actually work.
                    </p>
                    <p class="text-lg text-gray-600 dark:text-gray-400">
                        We focus on what matters: your goals, your customers, and your bottom line.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Founder Section -->
    <section class="section py-16 bg-gray-50 dark:bg-gray-900">
        <div class="container">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="animate-on-scroll">
                    <div class="glass-card p-2 rounded-3xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg">
                        <div class="aspect-square rounded-2xl overflow-hidden">
                            <img 
                                src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/mian-hassam-founder.jpg'); ?>"
                                alt="Mian Hassam - Founder of MultiMian"
                                class="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div class="animate-on-scroll">
                    <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Meet Mian Hassam</h2>
                    <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
                        Founder of MultiMian and full-stack developer specializing in modern web technologies.
                    </p>
                    <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
                        With expertise in JavaScript, TypeScript, React, Node.js, and AI tools, I help businesses transform ideas into powerful digital solutions.
                    </p>
                    <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
                        My mission is simple: build websites and applications that don&apos;t just look good—they drive real business results.
                    </p>
                    <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact'))); ?>" class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all">
                        Let&apos;s Work Together →
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Values Section -->
    <section class="section py-16">
        <div class="container">
            <h2 class="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Why Trust MultiMian?</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <?php
                $values = array(
                    array('icon' => '🎯', 'title' => 'Results-Driven', 'text' => 'We measure success by your success. Every solution is designed for ROI.'),
                    array('icon' => '🔍', 'title' => 'Transparency', 'text' => 'Clear communication, honest timelines, no surprises.'),
                    array('icon' => '⭐', 'title' => 'Quality', 'text' => 'We don&apos;t cut corners. Every line of code is written with care.'),
                    array('icon' => '🤝', 'title' => 'Partnership', 'text' => 'Your success is our success. We&apos;re your long-term partner.')
                );

                foreach ($values as $value) :
                ?>
                    <div class="glass-card p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg animate-on-scroll hover:shadow-xl transition-all">
                        <div class="text-5xl mb-4"><?php echo esc_html($value['icon']); ?></div>
                        <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white"><?php echo esc_html($value['title']); ?></h3>
                        <p class="text-gray-600 dark:text-gray-400"><?php echo esc_html($value['text']); ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="section py-16 bg-gray-50 dark:bg-gray-900">
        <div class="container">
            <div class="text-center glass-card p-12 rounded-3xl bg-white dark:bg-gray-800 shadow-lg animate-on-scroll">
                <h2 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Build Something Amazing?</h2>
                <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">Let&apos;s collaborate to turn your vision into reality.</p>
                <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact'))); ?>" class="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all">
                    Start a Conversation →
                </a>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
