<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package MultiMian_Pro
 */

get_header();
?>

<main id="primary" class="site-main">
    <div class="container py-16">
        <div class="text-center max-w-2xl mx-auto">
            <div class="text-8xl mb-8">🔍</div>
            <h1 class="text-6xl font-bold mb-4 text-gray-900 dark:text-white">404</h1>
            <h2 class="text-3xl font-bold mb-6 text-gray-700 dark:text-gray-300">Page Not Found</h2>
            <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all">
                    Go Home
                </a>
                <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact'))); ?>" class="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl font-semibold transition-all">
                    Contact Us
                </a>
            </div>

            <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">Search Our Site</h3>
                <?php get_search_form(); ?>
            </div>
        </div>
    </div>
</main>

<?php
get_footer();