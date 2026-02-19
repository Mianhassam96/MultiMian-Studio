<?php
/**
 * Template Name: Portfolio Page
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
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-6">
                    <span class="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                    <span class="text-sm font-semibold text-blue-700 dark:text-blue-400">
                        50+ Successful Projects Delivered
                    </span>
                </div>

                <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    <span class="block text-gray-900 dark:text-white">
                        Projects That Drive
                    </span>
                    <span class="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Real Business Results
                    </span>
                </h1>
                
                <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Every project we build is designed to solve real business challenges and deliver measurable results. 
                    From increasing revenue to improving efficiency, see how we turn ideas into powerful digital solutions.
                </p>

                <div class="flex flex-wrap items-center justify-center gap-6 text-sm">
                    <?php
                    $benefits = array(
                        array('icon' => '📈', 'text' => 'Increased Revenue'),
                        array('icon' => '⚡', 'text' => 'Improved Efficiency'),
                        array('icon' => '🎯', 'text' => 'Better User Experience'),
                        array('icon' => '🚀', 'text' => 'Faster Growth')
                    );
                    foreach ($benefits as $benefit) :
                    ?>
                        <div class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                            <span class="text-xl"><?php echo esc_html($benefit['icon']); ?></span>
                            <span class="font-medium"><?php echo esc_html($benefit['text']); ?></span>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="section py-16">
        <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php
                $portfolio = new WP_Query(array(
                    'post_type'      => 'portfolio',
                    'posts_per_page' => -1,
                    'orderby'        => 'date',
                    'order'          => 'DESC',
                ));

                if ($portfolio->have_posts()) :
                    while ($portfolio->have_posts()) : $portfolio->the_post();
                        $project_url = get_field('project_url');
                        $client_name = get_field('client_name');
                        $technologies = get_field('technologies');
                        $impact = get_field('project_impact');
                        ?>
                        <article class="portfolio-item animate-on-scroll group relative">
                            <div class="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/20">
                                <!-- Project Image -->
                                <?php if (has_post_thumbnail()) : ?>
                                    <div class="aspect-video relative overflow-hidden">
                                        <?php the_post_thumbnail('multimian-portfolio', array('class' => 'w-full h-full object-cover group-hover:scale-110 transition-transform duration-300')); ?>
                                        <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-300"></div>
                                        
                                        <?php if ($impact) : ?>
                                            <div class="absolute top-4 right-4 px-3 py-1.5 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">
                                                <?php echo esc_html($impact); ?>
                                            </div>
                                        <?php endif; ?>
                                    </div>
                                <?php else : ?>
                                    <div class="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
                                        <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-300"></div>
                                        <div class="absolute inset-0 flex items-center justify-center">
                                            <div class="text-6xl opacity-20 group-hover:opacity-30 transition-opacity">🌐</div>
                                        </div>
                                    </div>
                                <?php endif; ?>
                                
                                <!-- Project Content -->
                                <div class="p-6">
                                    <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                    </h3>
                                    
                                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                        <?php echo esc_html(get_the_excerpt()); ?>
                                    </p>
                                    
                                    <?php if ($technologies) : ?>
                                        <div class="flex flex-wrap gap-2 mb-4">
                                            <?php foreach ($technologies as $tech) : ?>
                                                <span class="px-2.5 py-1 rounded-lg text-xs font-semibold border bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800 transition-all duration-200 hover:scale-105">
                                                    <?php echo esc_html($tech['technology']); ?>
                                                </span>
                                            <?php endforeach; ?>
                                        </div>
                                    <?php endif; ?>
                                    
                                    <!-- Action Buttons -->
                                    <div class="flex items-center gap-3">
                                        <?php if ($project_url) : ?>
                                            <a href="<?php echo esc_url($project_url); ?>" target="_blank" rel="noreferrer" class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30">
                                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                View Live
                                            </a>
                                        <?php endif; ?>
                                        <a href="<?php the_permalink(); ?>" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-500 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-lg transition-all duration-300">
                                            Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    <?php
                    endwhile;
                    wp_reset_postdata();
                else :
                    ?>
                    <div class="col-span-full text-center py-12">
                        <p class="text-gray-600 dark:text-gray-400">No portfolio items found. Check back soon!</p>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="section py-16 bg-gradient-to-br from-blue-600 to-purple-600">
        <div class="container">
            <div class="relative rounded-3xl overflow-hidden">
                <div class="relative px-8 py-16 md:py-20 text-center">
                    <div class="max-w-3xl mx-auto animate-on-scroll">
                        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                            <span class="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span class="text-sm font-semibold text-white">
                                Ready to Start Your Project?
                            </span>
                        </div>

                        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Let&apos;s Build Something Amazing Together
                        </h2>
                        
                        <p class="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                            Join 50+ businesses that trust us to deliver results. Get a free consultation and discover how we can help you achieve your goals.
                        </p>

                        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                            <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact'))); ?>" class="group px-8 py-4 bg-white hover:bg-gray-50 text-blue-600 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2">
                                <span>Get Your Free Consultation</span>
                                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </a>
                            
                            <a href="https://wa.me/923258831437" target="_blank" rel="noopener noreferrer" class="px-8 py-4 bg-transparent hover:bg-white/10 text-white border-2 border-white/50 hover:border-white rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center gap-2">
                                <span class="text-2xl">💬</span>
                                <span>Chat on WhatsApp</span>
                            </a>
                        </div>

                        <div class="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
                            <div class="flex items-center gap-2">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                <span>Free Consultation</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                <span>No Obligation</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                <span>Response in 24 Hours</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
