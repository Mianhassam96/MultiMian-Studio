<?php
/**
 * The template for displaying pages
 *
 * @package MultiMian_Pro
 */

get_header();
?>

<main id="primary" class="site-main">
    <div class="container py-16">
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class('max-w-4xl mx-auto'); ?>>
                <header class="entry-header mb-8 text-center">
                    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        <?php the_title(); ?>
                    </h1>
                </header>

                <div class="entry-content prose prose-lg max-w-none dark:prose-invert">
                    <?php the_content(); ?>
                </div>
            </article>
        <?php endwhile; ?>
    </div>
</main>

<?php
get_footer();