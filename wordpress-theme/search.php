<?php
/**
 * The template for displaying search results
 *
 * @package MultiMian_Pro
 */

get_header();
?>

<main id="primary" class="site-main">
    <div class="container py-16">
        <header class="page-header mb-12 text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                <?php printf(esc_html__('Search Results for: %s', 'multimian'), '<span class="text-blue-600">' . get_search_query() . '</span>'); ?>
            </h1>
        </header>

        <?php if (have_posts()) : ?>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php while (have_posts()) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all'); ?>>
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="aspect-video overflow-hidden">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('large', array('class' => 'w-full h-full object-cover hover:scale-110 transition-transform duration-300')); ?>
                                </a>
                            </div>
                        <?php endif; ?>
                        
                        <div class="p-6">
                            <div class="text-xs text-blue-600 font-semibold mb-2 uppercase">
                                <?php echo get_post_type(); ?>
                            </div>
                            
                            <h2 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                                <a href="<?php the_permalink(); ?>" class="hover:text-blue-600 transition-colors">
                                    <?php the_title(); ?>
                                </a>
                            </h2>
                            
                            <div class="text-gray-600 dark:text-gray-400 mb-4">
                                <?php the_excerpt(); ?>
                            </div>
                            
                            <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                <span><?php echo get_the_date(); ?></span>
                                <a href="<?php the_permalink(); ?>" class="text-blue-600 hover:text-blue-700 font-semibold">
                                    Read More →
                                </a>
                            </div>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>
            
            <div class="mt-12">
                <?php the_posts_pagination(array(
                    'prev_text' => '← Previous',
                    'next_text' => 'Next →',
                    'class' => 'pagination'
                )); ?>
            </div>
        <?php else : ?>
            <div class="text-center py-16">
                <div class="text-6xl mb-8">🔍</div>
                <h2 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Nothing Found</h2>
                <p class="text-gray-600 dark:text-gray-400 mb-8">
                    Sorry, but nothing matched your search terms. Please try again with different keywords.
                </p>
                
                <div class="max-w-md mx-auto">
                    <?php get_search_form(); ?>
                </div>
            </div>
        <?php endif; ?>
    </div>
</main>

<?php
get_footer();