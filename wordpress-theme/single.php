<?php
/**
 * The template for displaying single posts
 *
 * @package MultiMian_Pro
 */

get_header();
?>

<main id="primary" class="site-main">
    <div class="container py-16">
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class('max-w-4xl mx-auto'); ?>>
                <?php if (has_post_thumbnail()) : ?>
                    <div class="aspect-video mb-8 rounded-2xl overflow-hidden">
                        <?php the_post_thumbnail('large', array('class' => 'w-full h-full object-cover')); ?>
                    </div>
                <?php endif; ?>
                
                <header class="entry-header mb-8">
                    <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        <?php the_title(); ?>
                    </h1>
                    
                    <div class="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                        <span><?php echo get_the_date(); ?></span>
                        <span>•</span>
                        <span><?php echo get_the_author(); ?></span>
                        <?php if (has_category()) : ?>
                            <span>•</span>
                            <?php the_category(', '); ?>
                        <?php endif; ?>
                    </div>
                </header>

                <div class="entry-content prose prose-lg max-w-none dark:prose-invert">
                    <?php the_content(); ?>
                </div>

                <?php if (has_tag()) : ?>
                    <footer class="entry-footer mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <div class="flex flex-wrap gap-2">
                            <?php the_tags('<span class="text-sm text-gray-600 dark:text-gray-400 mr-2">Tags:</span>', '', ''); ?>
                        </div>
                    </footer>
                <?php endif; ?>
            </article>

            <nav class="post-navigation mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div class="flex justify-between">
                    <?php
                    $prev_post = get_previous_post();
                    $next_post = get_next_post();
                    ?>
                    
                    <?php if ($prev_post) : ?>
                        <a href="<?php echo get_permalink($prev_post); ?>" class="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                            ← <?php echo get_the_title($prev_post); ?>
                        </a>
                    <?php endif; ?>
                    
                    <?php if ($next_post) : ?>
                        <a href="<?php echo get_permalink($next_post); ?>" class="flex items-center gap-2 text-blue-600 hover:text-blue-700 ml-auto">
                            <?php echo get_the_title($next_post); ?> →
                        </a>
                    <?php endif; ?>
                </div>
            </nav>
        <?php endwhile; ?>
    </div>
</main>

<?php
get_footer();