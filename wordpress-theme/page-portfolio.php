<?php
/**
 * Template Name: Portfolio Page
 * 
 * @package MultiMian
 */

get_header();
?>

<div class="py-16 md:py-24">
    <!-- Hero Section -->
    <div class="container text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-6">
            <span class="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span class="text-sm font-semibold text-blue-700 dark:text-blue-400">
                50+ Successful Projects Delivered
            </span>
        </div>

        <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span class="block text-gray-900 dark:text-white">Projects That Drive</span>
            <span class="block gradient-text">Real Business Results</span>
        </h1>
        
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Every project we build is designed to solve real business challenges and deliver measurable results. 
            From increasing revenue to improving efficiency, see how we turn ideas into powerful digital solutions.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span class="text-xl">📈</span>
                <span class="font-medium">Increased Revenue</span>
            </div>
            <div class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span class="text-xl">⚡</span>
                <span class="font-medium">Improved Efficiency</span>
            </div>
            <div class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span class="text-xl">🎯</span>
                <span class="font-medium">Better User Experience</span>
            </div>
            <div class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span class="text-xl">🚀</span>
                <span class="font-medium">Faster Growth</span>
            </div>
        </div>
    </div>

    <!-- Category Filter -->
    <div class="container mb-12">
        <div class="flex flex-wrap items-center justify-center gap-3">
            <button data-filter="all" class="active px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                All Projects
            </button>
            <?php
            $categories = get_terms(array(
                'taxonomy' => 'portfolio_category',
                'hide_empty' => true,
            ));
            
            if (!empty($categories)) :
                foreach ($categories as $category) :
            ?>
            <button data-filter="<?php echo esc_attr($category->slug); ?>" class="px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500">
                <?php echo esc_html($category->name); ?>
            </button>
            <?php
                endforeach;
            endif;
            ?>
        </div>
    </div>

    <!-- Projects Grid -->
    <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <?php
            $portfolio_query = new WP_Query(array(
                'post_type' => 'portfolio',
                'posts_per_page' => -1,
                'orderby' => 'date',
                'order' => 'DESC',
            ));
            
            if ($portfolio_query->have_posts()) :
                while ($portfolio_query->have_posts()) : $portfolio_query->the_post();
                    $tagline = get_post_meta(get_the_ID(), '_portfolio_tagline', true);
                    $impact = get_post_meta(get_the_ID(), '_portfolio_impact', true);
                    $demo_url = get_post_meta(get_the_ID(), '_portfolio_demo_url', true);
                    $repo_url = get_post_meta(get_the_ID(), '_portfolio_repo_url', true);
                    $technologies = get_post_meta(get_the_ID(), '_portfolio_technologies', true);
                    
                    $terms = get_the_terms(get_the_ID(), 'portfolio_category');
                    $category = !empty($terms) ? $terms[0]->name : 'Web Application';
                    $category_slug = !empty($terms) ? $terms[0]->slug : 'web-application';
                    
                    $tech_array = array();
                    if ($technologies) {
                        $tech_items = explode(',', $technologies);
                        foreach ($tech_items as $tech_item) {
                            $parts = explode(':', trim($tech_item));
                            if (count($parts) == 2) {
                                $tech_array[] = array(
                                    'name' => trim($parts[0]),
                                    'type' => trim($parts[1])
                                );
                            }
                        }
                    }
            ?>
            <div class="group relative animate-on-scroll" data-category="<?php echo esc_attr($category_slug); ?>">
                <div class="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/20">
                    <!-- Project Image -->
                    <div class="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
                        <?php if (has_post_thumbnail()) : ?>
                            <?php the_post_thumbnail('multimian-portfolio', array('class' => 'w-full h-full object-cover')); ?>
                        <?php else : ?>
                            <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-300"></div>
                            <div class="absolute inset-0 flex items-center justify-center">
                                <div class="text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                                    <?php echo $category === 'E-Commerce' ? '🛒' : ($category === 'Web Application' ? '⚡' : '🌐'); ?>
                                </div>
                            </div>
                        <?php endif; ?>
                        
                        <?php if ($impact) : ?>
                        <div class="absolute top-4 right-4 px-3 py-1.5 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">
                            <?php echo esc_html($impact); ?>
                        </div>
                        <?php endif; ?>
                    </div>
                    
                    <!-- Project Content -->
                    <div class="p-6">
                        <div class="mb-3">
                            <span class="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                                <?php echo esc_html($category); ?>
                            </span>
                        </div>
                        
                        <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            <?php the_title(); ?>
                        </h3>
                        
                        <?php if ($tagline) : ?>
                        <p class="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                            <?php echo esc_html($tagline); ?>
                        </p>
                        <?php endif; ?>
                        
                        <div class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                            <?php echo wp_trim_words(get_the_excerpt(), 20); ?>
                        </div>
                        
                        <!-- Tech Stack -->
                        <?php if (!empty($tech_array)) : ?>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <?php foreach ($tech_array as $tech) : 
                                $color_class = 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800';
                                if ($tech['type'] === 'backend') {
                                    $color_class = 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800';
                                } elseif ($tech['type'] === 'api') {
                                    $color_class = 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800';
                                } elseif ($tech['type'] === 'library') {
                                    $color_class = 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-800';
                                }
                            ?>
                            <span class="px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all duration-200 hover:scale-105 <?php echo $color_class; ?>">
                                <?php echo esc_html($tech['name']); ?>
                            </span>
                            <?php endforeach; ?>
                        </div>
                        <?php endif; ?>
                        
                        <!-- Action Buttons -->
                        <div class="flex items-center gap-3">
                            <?php if ($demo_url) : ?>
                            <a href="<?php echo esc_url($demo_url); ?>" target="_blank" rel="noopener noreferrer" class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                View Live
                            </a>
                            <?php endif; ?>
                            
                            <?php if ($repo_url) : ?>
                            <a href="<?php echo esc_url($repo_url); ?>" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-500 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-lg transition-all duration-300">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                </svg>
                                Code
                            </a>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
            <?php
                endwhile;
                wp_reset_postdata();
            else :
            ?>
            <div class="col-span-full text-center py-12">
                <p class="text-gray-600 dark:text-gray-400">No portfolio items found. Add some from the WordPress admin.</p>
            </div>
            <?php endif; ?>
        </div>
    </div>

    <!-- CTA Section -->
    <div class="container mt-20">
        <div class="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl overflow-hidden">
            <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
            <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"></div>
            
            <div class="relative px-8 py-16 md:py-20 text-center">
                <div class="max-w-3xl mx-auto">
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                        <span class="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                        <span class="text-sm font-semibold text-white">Ready to Start Your Project?</span>
                    </div>

                    <h2 class="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Let's Build Something Amazing Together
                    </h2>
                    
                    <p class="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                        Join 50+ businesses that trust us to deliver results. Get a free consultation and discover how we can help you achieve your goals.
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
        </div>
    </div>
</div>

<?php
get_footer();
