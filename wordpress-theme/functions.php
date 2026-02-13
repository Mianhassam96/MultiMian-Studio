<?php
/**
 * MultiMian Studio Theme Functions
 * 
 * @package MultiMian
 * @since 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

// Theme Setup
function multimian_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    add_theme_support('customize-selective-refresh-widgets');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'multimian'),
        'footer' => __('Footer Menu', 'multimian'),
    ));
    
    // Add image sizes
    add_image_size('multimian-portfolio', 800, 600, true);
}
add_action('after_setup_theme', 'multimian_setup');

// Enqueue styles and scripts
function multimian_scripts() {
    // Tailwind CSS from CDN
    wp_enqueue_style('tailwind-css', 'https://cdn.jsdelivr.net/npm/tailwindcss@3.3.3/dist/tailwind.min.css', array(), '3.3.3');
    
    // Theme styles
    wp_enqueue_style('multimian-style', get_stylesheet_uri(), array('tailwind-css'), '1.0.0');
    
    // Custom CSS
    wp_enqueue_style('multimian-custom', get_template_directory_uri() . '/assets/css/custom.css', array('tailwind-css'), '1.0.0');
    
    // Framer Motion (for animations)
    wp_enqueue_script('framer-motion', 'https://cdn.jsdelivr.net/npm/framer-motion@10.16.4/dist/framer-motion.min.js', array(), '10.16.4', true);
    
    // Theme scripts
    wp_enqueue_script('multimian-script', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true);
    
    // Localize script
    wp_localize_script('multimian-script', 'multimianData', array(
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('multimian-nonce'),
        'whatsapp' => '+923258831437',
    ));
}
add_action('wp_enqueue_scripts', 'multimian_scripts');

// Register widget areas
function multimian_widgets_init() {
    register_sidebar(array(
        'name' => __('Footer Column 1', 'multimian'),
        'id' => 'footer-1',
        'description' => __('Add widgets here to appear in footer column 1.', 'multimian'),
        'before_widget' => '<div id="%1$s" class="widget %2$s mb-6">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">',
        'after_title' => '</h3>',
    ));
    
    register_sidebar(array(
        'name' => __('Footer Column 2', 'multimian'),
        'id' => 'footer-2',
        'description' => __('Add widgets here to appear in footer column 2.', 'multimian'),
        'before_widget' => '<div id="%1$s" class="widget %2$s mb-6">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">',
        'after_title' => '</h3>',
    ));
}
add_action('widgets_init', 'multimian_widgets_init');

// Custom post type: Portfolio
function multimian_portfolio_post_type() {
    $labels = array(
        'name' => 'Portfolio',
        'singular_name' => 'Portfolio Item',
        'add_new' => 'Add New',
        'add_new_item' => 'Add New Portfolio Item',
        'edit_item' => 'Edit Portfolio Item',
        'new_item' => 'New Portfolio Item',
        'view_item' => 'View Portfolio Item',
        'search_items' => 'Search Portfolio',
        'not_found' => 'No portfolio items found',
        'not_found_in_trash' => 'No portfolio items found in trash',
    );
    
    $args = array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-portfolio',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite' => array('slug' => 'portfolio'),
    );
    
    register_post_type('portfolio', $args);
    
    // Register taxonomy for portfolio categories
    register_taxonomy('portfolio_category', 'portfolio', array(
        'label' => 'Portfolio Categories',
        'rewrite' => array('slug' => 'portfolio-category'),
        'hierarchical' => true,
    ));
}
add_action('init', 'multimian_portfolio_post_type');

// Custom post type: Testimonials
function multimian_testimonial_post_type() {
    $labels = array(
        'name' => 'Testimonials',
        'singular_name' => 'Testimonial',
        'add_new' => 'Add New',
        'add_new_item' => 'Add New Testimonial',
        'edit_item' => 'Edit Testimonial',
    );
    
    $args = array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-testimonial',
        'supports' => array('title', 'editor', 'thumbnail'),
    );
    
    register_post_type('testimonial', $args);
}
add_action('init', 'multimian_testimonial_post_type');

// Add custom meta boxes for portfolio
function multimian_portfolio_meta_boxes() {
    add_meta_box(
        'portfolio_details',
        'Portfolio Details',
        'multimian_portfolio_meta_box_callback',
        'portfolio',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'multimian_portfolio_meta_boxes');

function multimian_portfolio_meta_box_callback($post) {
    wp_nonce_field('multimian_portfolio_meta_box', 'multimian_portfolio_meta_box_nonce');
    
    $tagline = get_post_meta($post->ID, '_portfolio_tagline', true);
    $impact = get_post_meta($post->ID, '_portfolio_impact', true);
    $demo_url = get_post_meta($post->ID, '_portfolio_demo_url', true);
    $repo_url = get_post_meta($post->ID, '_portfolio_repo_url', true);
    $technologies = get_post_meta($post->ID, '_portfolio_technologies', true);
    
    ?>
    <p>
        <label for="portfolio_tagline"><strong>Tagline:</strong></label><br>
        <input type="text" id="portfolio_tagline" name="portfolio_tagline" value="<?php echo esc_attr($tagline); ?>" class="widefat">
    </p>
    <p>
        <label for="portfolio_impact"><strong>Impact Badge (e.g., "200% more engagement"):</strong></label><br>
        <input type="text" id="portfolio_impact" name="portfolio_impact" value="<?php echo esc_attr($impact); ?>" class="widefat">
    </p>
    <p>
        <label for="portfolio_demo_url"><strong>Demo URL:</strong></label><br>
        <input type="url" id="portfolio_demo_url" name="portfolio_demo_url" value="<?php echo esc_url($demo_url); ?>" class="widefat">
    </p>
    <p>
        <label for="portfolio_repo_url"><strong>Repository URL:</strong></label><br>
        <input type="url" id="portfolio_repo_url" name="portfolio_repo_url" value="<?php echo esc_url($repo_url); ?>" class="widefat">
    </p>
    <p>
        <label for="portfolio_technologies"><strong>Technologies (comma-separated, format: "Name:Type" e.g., "Next.js:frontend, Node.js:backend"):</strong></label><br>
        <textarea id="portfolio_technologies" name="portfolio_technologies" rows="3" class="widefat"><?php echo esc_textarea($technologies); ?></textarea>
    </p>
    <?php
}

function multimian_save_portfolio_meta_box($post_id) {
    if (!isset($_POST['multimian_portfolio_meta_box_nonce'])) {
        return;
    }
    
    if (!wp_verify_nonce($_POST['multimian_portfolio_meta_box_nonce'], 'multimian_portfolio_meta_box')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (isset($_POST['portfolio_tagline'])) {
        update_post_meta($post_id, '_portfolio_tagline', sanitize_text_field($_POST['portfolio_tagline']));
    }
    
    if (isset($_POST['portfolio_impact'])) {
        update_post_meta($post_id, '_portfolio_impact', sanitize_text_field($_POST['portfolio_impact']));
    }
    
    if (isset($_POST['portfolio_demo_url'])) {
        update_post_meta($post_id, '_portfolio_demo_url', esc_url_raw($_POST['portfolio_demo_url']));
    }
    
    if (isset($_POST['portfolio_repo_url'])) {
        update_post_meta($post_id, '_portfolio_repo_url', esc_url_raw($_POST['portfolio_repo_url']));
    }
    
    if (isset($_POST['portfolio_technologies'])) {
        update_post_meta($post_id, '_portfolio_technologies', sanitize_textarea_field($_POST['portfolio_technologies']));
    }
}
add_action('save_post', 'multimian_save_portfolio_meta_box');

// Contact form handler
function multimian_handle_contact_form() {
    check_ajax_referer('multimian-nonce', 'nonce');
    
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $message = sanitize_textarea_field($_POST['message']);
    
    $to = get_option('admin_email');
    $subject = 'New Contact Form Submission from ' . $name;
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = array('Content-Type: text/plain; charset=UTF-8', "Reply-To: $email");
    
    if (wp_mail($to, $subject, $body, $headers)) {
        wp_send_json_success(array('message' => 'Thank you! Your message has been sent.'));
    } else {
        wp_send_json_error(array('message' => 'Sorry, there was an error sending your message.'));
    }
}
add_action('wp_ajax_multimian_contact', 'multimian_handle_contact_form');
add_action('wp_ajax_nopriv_multimian_contact', 'multimian_handle_contact_form');

// Customizer settings
function multimian_customize_register($wp_customize) {
    // WhatsApp Settings
    $wp_customize->add_section('multimian_whatsapp', array(
        'title' => __('WhatsApp Settings', 'multimian'),
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('whatsapp_number', array(
        'default' => '+923258831437',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('whatsapp_number', array(
        'label' => __('WhatsApp Number', 'multimian'),
        'section' => 'multimian_whatsapp',
        'type' => 'text',
    ));
    
    // Social Media Links
    $wp_customize->add_section('multimian_social', array(
        'title' => __('Social Media Links', 'multimian'),
        'priority' => 31,
    ));
    
    $social_networks = array('facebook', 'twitter', 'linkedin', 'instagram', 'github');
    
    foreach ($social_networks as $network) {
        $wp_customize->add_setting($network . '_url', array(
            'default' => '',
            'sanitize_callback' => 'esc_url_raw',
        ));
        
        $wp_customize->add_control($network . '_url', array(
            'label' => ucfirst($network) . ' URL',
            'section' => 'multimian_social',
            'type' => 'url',
        ));
    }
}
add_action('customize_register', 'multimian_customize_register');
