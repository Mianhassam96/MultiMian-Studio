<?php
/**
 * Search form template
 *
 * @package MultiMian_Pro
 */
?>

<form role="search" method="get" class="search-form" action="<?php echo esc_url(home_url('/')); ?>">
    <div class="flex gap-2">
        <input 
            type="search" 
            class="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white" 
            placeholder="<?php echo esc_attr_x('Search...', 'placeholder', 'multimian'); ?>" 
            value="<?php echo get_search_query(); ?>" 
            name="s" 
        />
        <button 
            type="submit" 
            class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all"
        >
            <?php echo esc_html_x('Search', 'submit button', 'multimian'); ?>
        </button>
    </div>
</form>