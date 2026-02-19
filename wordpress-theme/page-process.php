<?php
/**
 * Template Name: Process Page
 *
 * @package MultiMian_Pro
 */

get_header();
?>

<main id="primary" class="site-main">
    <!-- Header Section -->
    <section class="hero-section py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div class="container">
            <div class="text-center max-w-4xl mx-auto animate-on-scroll">
                <div class="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
                    <span class="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                    <span class="text-sm font-medium text-blue-700 dark:text-blue-400">Transparent & Efficient</span>
                </div>

                <h1 class="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    From Vision to Reality: Our Proven Process
                </h1>
                <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                    We don&apos;t just build websites—we create digital solutions that drive real business results. Our transparent, efficient 6-step process ensures you&apos;re involved, informed, and excited every step of the way.
                </p>
                <div class="inline-flex items-center gap-3 text-sm text-blue-600 bg-blue-100 dark:bg-blue-900/30 px-6 py-3 rounded-xl">
                    <span>⏱️</span>
                    <span>Average project timeline: 3-8 weeks depending on complexity</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Process Steps -->
    <section class="section py-16">
        <div class="container">
            <div class="max-w-5xl mx-auto">
                <?php
                $process_steps = array(
                    array(
                        'number' => '01',
                        'title' => 'Requirement Discussion',
                        'icon' => '💬',
                        'description' => 'We start by understanding your vision, goals, and requirements',
                        'details' => array(
                            'Initial consultation call to discuss your project',
                            'Understanding your business objectives and target audience',
                            'Identifying key features and functionality needed',
                            'Discussing timeline, budget, and expectations',
                            'Answering all your questions and concerns'
                        ),
                        'duration' => '1-2 days'
                    ),
                    array(
                        'number' => '02',
                        'title' => 'Planning & UI/UX',
                        'icon' => '🎨',
                        'description' => 'Creating a detailed plan and designing the user experience',
                        'details' => array(
                            'Project scope documentation and technical specifications',
                            'Wireframes and mockups for visual approval',
                            'User flow and navigation structure',
                            'Design system and style guide creation',
                            'Technology stack selection and architecture planning'
                        ),
                        'duration' => '3-7 days'
                    ),
                    array(
                        'number' => '03',
                        'title' => 'Development',
                        'icon' => '⚙️',
                        'description' => 'Building your solution with clean, efficient code',
                        'details' => array(
                            'Frontend development with modern frameworks',
                            'Backend API and database implementation',
                            'Integration of third-party services',
                            'Regular progress updates and demos',
                            'Code reviews and quality assurance'
                        ),
                        'duration' => '2-6 weeks'
                    ),
                    array(
                        'number' => '04',
                        'title' => 'Testing',
                        'icon' => '🧪',
                        'description' => 'Rigorous testing to ensure everything works perfectly',
                        'details' => array(
                            'Functionality testing across all features',
                            'Cross-browser and device compatibility testing',
                            'Performance and load testing',
                            'Security vulnerability assessment',
                            'User acceptance testing with your feedback'
                        ),
                        'duration' => '3-5 days'
                    ),
                    array(
                        'number' => '05',
                        'title' => 'Delivery',
                        'icon' => '🚀',
                        'description' => 'Launching your project and making it live',
                        'details' => array(
                            'Final review and approval from you',
                            'Deployment to production environment',
                            'Domain and hosting setup',
                            'SSL certificate installation for security',
                            'Training on how to use and manage your site'
                        ),
                        'duration' => '1-2 days'
                    ),
                    array(
                        'number' => '06',
                        'title' => 'Support',
                        'icon' => '🛡️',
                        'description' => 'Ongoing maintenance and support after launch',
                        'details' => array(
                            '30-day post-launch support included',
                            'Bug fixes and issue resolution',
                            'Performance monitoring and optimization',
                            'Content updates and minor changes',
                            'Available for ongoing maintenance packages'
                        ),
                        'duration' => 'Ongoing'
                    )
                );

                foreach ($process_steps as $idx => $step) :
                ?>
                    <div class="mb-12 last:mb-0 animate-on-scroll">
                        <div class="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden bg-white dark:bg-gray-800 shadow-lg">
                            <!-- Background Number -->
                            <div class="absolute top-0 right-0 text-[150px] font-bold text-blue-600/5 leading-none">
                                <?php echo esc_html($step['number']); ?>
                            </div>

                            <div class="relative z-10">
                                <div class="flex items-start gap-6 mb-6">
                                    <div class="flex-shrink-0">
                                        <div class="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                                            <?php echo esc_html($step['icon']); ?>
                                        </div>
                                    </div>
                                    <div class="flex-1">
                                        <div class="flex items-center gap-4 mb-2">
                                            <h2 class="text-3xl font-bold text-gray-900 dark:text-white"><?php echo esc_html($step['title']); ?></h2>
                                            <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 text-sm rounded-full">
                                                <?php echo esc_html($step['duration']); ?>
                                            </span>
                                        </div>
                                        <p class="text-lg text-gray-600 dark:text-gray-400 mb-6"><?php echo esc_html($step['description']); ?></p>
                                    </div>
                                </div>

                                <div class="ml-0 md:ml-26">
                                    <h3 class="font-semibold text-blue-600 mb-4">What happens in this phase:</h3>
                                    <ul class="space-y-3">
                                        <?php foreach ($step['details'] as $detail) : ?>
                                            <li class="flex items-start gap-3">
                                                <span class="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 text-sm mt-0.5">
                                                    ✓
                                                </span>
                                                <span class="text-gray-600 dark:text-gray-400"><?php echo esc_html($detail); ?></span>
                                            </li>
                                        <?php endforeach; ?>
                                    </ul>
                                </div>
                            </div>

                            <!-- Connector Line -->
                            <?php if ($idx < count($process_steps) - 1) : ?>
                                <div class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-blue-600/50 to-transparent"></div>
                            <?php endif; ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Why Our Process Works -->
    <section class="section py-16 bg-gray-50 dark:bg-gray-900">
        <div class="container">
            <div class="max-w-5xl mx-auto">
                <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Why Our Process Works
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <?php
                    $benefits = array(
                        array('icon' => '🎯', 'title' => 'Clear Communication', 'desc' => 'Regular updates and transparent communication throughout the entire project lifecycle.'),
                        array('icon' => '⚡', 'title' => 'Efficient Delivery', 'desc' => 'Streamlined workflow that delivers quality results without unnecessary delays.'),
                        array('icon' => '🛡️', 'title' => 'Quality Assurance', 'desc' => 'Rigorous testing and quality checks ensure your project works flawlessly.')
                    );

                    foreach ($benefits as $benefit) :
                    ?>
                        <div class="glass-card p-6 rounded-2xl text-center bg-white dark:bg-gray-800 shadow-lg animate-on-scroll">
                            <div class="text-4xl mb-4"><?php echo esc_html($benefit['icon']); ?></div>
                            <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white"><?php echo esc_html($benefit['title']); ?></h3>
                            <p class="text-gray-600 dark:text-gray-400"><?php echo esc_html($benefit['desc']); ?></p>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="section py-16">
        <div class="container">
            <div class="text-center glass-card p-12 rounded-3xl bg-white dark:bg-gray-800 shadow-lg animate-on-scroll">
                <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Get Started?</h2>
                <p class="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                    Let&apos;s discuss your project and create a custom plan that fits your needs and budget.
                </p>
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact'))); ?>" class="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all">
                        Start Your Project
                        <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                        </svg>
                    </a>
                    <a href="<?php echo esc_url(get_permalink(get_page_by_path('pricing'))); ?>" class="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-600 rounded-xl text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all font-semibold">
                        View Pricing
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
