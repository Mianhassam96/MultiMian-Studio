<?php
/**
 * The template for displaying all pages
 */

get_header(); ?>

<div class="page-content" style="padding: 8rem 2rem 4rem; min-height: 60vh;">
    <div class="container" style="max-width: 1200px; margin: 0 auto;">
        <?php
        while (have_posts()) :
            the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="entry-header" style="margin-bottom: 3rem; text-align: center;">
                    <h1 style="font-size: 3rem; font-weight: 900; color: var(--text-primary); margin-bottom: 1rem;">
                        <?php the_title(); ?>
                    </h1>
                </header>

                <div class="entry-content" style="font-size: 1.125rem; line-height: 1.8; color: var(--text-secondary);">
                    <?php
                    the_content();

                    wp_link_pages(array(
                        'before' => '<div class="page-links">' . esc_html__('Pages:', 'multimian'),
                        'after'  => '</div>',
                    ));
                    ?>
                </div>
            </article>
        <?php
        endwhile;
        ?>
    </div>
</div>

<?php get_footer(); ?>
