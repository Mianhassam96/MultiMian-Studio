<?php
/**
 * The template for displaying archive pages
 *
 * @package MultiMian_Pro
 */

get_header();
?>

<main id="primary" class="site-main">
    <div class="container py-16">
        <header class="page-header mb-12 text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                <?php the_archive_title(); ?>
            </h1>
            <?php if (get_the_archive_description()) : ?>
                <div class="text-xl text-gray-600 dark:text-gray-400">
                    <?php the_archive_description(); ?>
                </div>
            <?php endif; ?>
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
                <h2 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Nothing Found</h2>
                <p class="text-gray-600 dark:text-gray-400">It looks like nothing was found at this location.</p>
            </div>
        <?php endif; ?>
    </div>
</main>

<?php
get_footer();