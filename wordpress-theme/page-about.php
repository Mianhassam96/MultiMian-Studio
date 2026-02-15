<?php
/**
 * Template Name: About Page
 * 
 * @package MultiMian
 */

get_header();
?>

<main id="primary" class="site-main">
    <div class="container mx-auto px-4 py-16">
        
        <!-- Hero -->
        <div class="text-center mb-20 max-w-5xl mx-auto">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Building Digital Solutions That Drive Real Results
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400">
                We're not just developers—we're your strategic partner in digital growth.
            </p>
        </div>

        <!-- Story -->
        <section class="mb-20 max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">How MultiMian Started</h2>
            <div class="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
                <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    MultiMian was founded with a simple belief: every business deserves a powerful online presence that drives growth.
                </p>
                <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    I've seen too many businesses struggle with websites that don't deliver results. That's why I created MultiMian—to build digital solutions that actually work.
                </p>
                <p class="text-lg text-gray-600 dark:text-gray-400">
                    We focus on what matters: your goals, your customers, and your bottom line.
                </p>
            </div>
        </section>

        <!-- Founder -->
        <section class="mb-20">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="bg-white dark:bg-gray-800 p-2 rounded-3xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <div class="aspect-square rounded-2xl overflow-hidden relative">
                        <img 
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/founder.jpg" 
                            alt="Mian Hassam - Founder of MultiMian"
                            class="w-full h-full object-cover"
                            onerror="this.src='https://ui-avatars.com/api/?name=Mian+Hassam&size=600&background=2563EB&color=fff&bold=true'"
                        />
                    </div>
                </div>
                <div>
                    <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Meet Mian Hassam</h2>
                    <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
                        Founder of MultiMian and full-stack developer specializing in modern web technologies.
                    </p>
                    <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
                        With expertise in JavaScript, TypeScript, React, Node.js, and AI tools, I help businesses transform ideas into powerful digital solutions.
                    </p>
                    <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
                        My mission is simple: build websites and applications that don't just look good—they drive real business results.
                    </p>
                    <a href="<?php echo esc_url(home_url('/contact')); ?>" class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors">
                        Let's Work Together →
                    </a>
                </div>
            </div>
        </section>

        <!-- Values -->
        <section class="mb-20">
            <h2 class="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Why Trust MultiMian?</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                    <div class="text-5xl mb-4">🎯</div>
                    <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Results-Driven</h3>
                    <p class="text-gray-600 dark:text-gray-400">We measure success by your success. Every solution is designed for ROI.</p>
                </div>
                <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                    <div class="text-5xl mb-4">🔍</div>
                    <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Transparency</h3>
                    <p class="text-gray-600 dark:text-gray-400">Clear communication, honest timelines, no surprises.</p>
                </div>
                <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                    <div class="text-5xl mb-4">⭐</div>
                    <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Quality</h3>
                    <p class="text-gray-600 dark:text-gray-400">We don't cut corners. Every line of code is written with care.</p>
                </div>
                <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                    <div class="text-5xl mb-4">🤝</div>
                    <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Partnership</h3>
                    <p class="text-gray-600 dark:text-gray-400">Your success is our success. We're your long-term partner.</p>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="text-center bg-white dark:bg-gray-800 p-12 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Build Something Amazing?</h2>
            <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">Let's collaborate to turn your vision into reality.</p>
            <a href="<?php echo esc_url(home_url('/contact')); ?>" class="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors">
                Start a Conversation →
            </a>
        </section>

    </div>
</main>

<?php
get_footer();
