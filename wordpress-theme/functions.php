<?php
/**
 * MultiMian Pro Theme Functions
 *
 * @package MultiMian_Pro
 * @since 1.0.0
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Theme Constants
define('MULTIMIAN_VERSION', '1.0.0');
define('MULTIMIAN_THEME_DIR', get_template_directory());
define('MULTIMIAN_THEME_URI', get_template_directory_uri());

/**
 * Theme Setup
 */
function multimian_setup() {
    // Add default posts and comments RSS feed links to head
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails
    add_theme_support('post-thumbnails');
    set_post_thumbnail_size(1200, 675, true);
    add_image_size('multimian-hero', 1920, 1080, true);
    add_image_size('multimian-portfolio', 800, 600, true);
    add_image_size('multimian-thumbnail', 400, 300, true);

    // Register navigation menus
    register_nav_menus(array(
        'primary' => esc_html__('Primary Menu', 'multimian'),
        'footer'  => esc_html__('Footer Menu', 'multimian'),
    ));

    // Switch default core markup to output valid HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Add theme support for selective refresh for widgets
    add_theme_support('customize-selective-refresh-widgets');

    // Add support for custom logo
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    // Add support for custom background
    add_theme_support('custom-background', array(
        'default-color' => 'ffffff',
    ));

    // Add support for editor styles
    add_theme_support('editor-styles');
    add_editor_style('assets/css/editor-style.css');

    // Add support for responsive embeds
    add_theme_support('responsive-embeds');

    // Add support for wide and full alignment
    add_theme_support('align-wide');

    // Add support for block styles
    add_theme_support('wp-block-styles');
}
add_action('after_setup_theme', 'multimian_setup');

/**
 * Set the content width
 */
function multimian_content_width() {
    $GLOBALS['content_width'] = apply_filters('multimian_content_width', 1200);
}
add_action('after_setup_theme', 'multimian_content_width', 0);

/**
 * Register Widget Areas
 */
function multimian_widgets_init() {
    register_sidebar(array(
        'name'          => esc_html__('Sidebar', 'multimian'),
        'id'            => 'sidebar-1',
        'description'   => esc_html__('Add widgets here.', 'multimian'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));

    // Footer widgets
    for ($i = 1; $i <= 4; $i++) {
        register_sidebar(array(
            'name'          => sprintf(esc_html__('Footer %d', 'multimian'), $i),
            'id'            => 'footer-' . $i,
            'description'   => sprintf(esc_html__('Footer widget area %d', 'multimian'), $i),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget'  => '</div>',
            'before_title'  => '<h4 class="widget-title">',
            'after_title'   => '</h4>',
        ));
    }
}
add_action('widgets_init', 'multimian_widgets_init');

/**
 * Enqueue Scripts and Styles
 */
function multimian_scripts() {
    // Google Fonts
    wp_enqueue_style('multimian-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap', array(), null);

    // Main stylesheet
    wp_enqueue_style('multimian-style', get_stylesheet_uri(), array(), MULTIMIAN_VERSION);

    // Custom CSS
    wp_enqueue_style('multimian-custom', MULTIMIAN_THEME_URI . '/assets/css/custom.css', array('multimian-style'), MULTIMIAN_VERSION);

    // Navigation script
    wp_enqueue_script('multimian-navigation', MULTIMIAN_THEME_URI . '/assets/js/navigation.js', array(), MULTIMIAN_VERSION, true);

    // Main JavaScript
    wp_enqueue_script('multimian-main', MULTIMIAN_THEME_URI . '/assets/js/main.js', array('jquery'), MULTIMIAN_VERSION, true);

    // Localize script for AJAX
    wp_localize_script('multimian-main', 'multimianAjax', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce'   => wp_create_nonce('multimian-nonce'),
    ));

    // Comment reply script
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'multimian_scripts');

/**
 * Register Custom Post Types
 */
function multimian_register_post_types() {
    // Portfolio Post Type
    register_post_type('portfolio', array(
        'labels' => array(
            'name'               => esc_html__('Portfolio', 'multimian'),
            'singular_name'      => esc_html__('Portfolio Item', 'multimian'),
            'add_new'            => esc_html__('Add New', 'multimian'),
            'add_new_item'       => esc_html__('Add New Portfolio Item', 'multimian'),
            'edit_item'          => esc_html__('Edit Portfolio Item', 'multimian'),
            'new_item'           => esc_html__('New Portfolio Item', 'multimian'),
            'view_item'          => esc_html__('View Portfolio Item', 'multimian'),
            'search_items'       => esc_html__('Search Portfolio', 'multimian'),
            'not_found'          => esc_html__('No portfolio items found', 'multimian'),
            'not_found_in_trash' => esc_html__('No portfolio items found in Trash', 'multimian'),
        ),
        'public'       => true,
        'has_archive'  => true,
        'rewrite'      => array('slug' => 'portfolio'),
        'supports'     => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'menu_icon'    => 'dashicons-portfolio',
        'show_in_rest' => true,
    ));

    // Services Post Type
    register_post_type('service', array(
        'labels' => array(
            'name'               => esc_html__('Services', 'multimian'),
            'singular_name'      => esc_html__('Service', 'multimian'),
            'add_new'            => esc_html__('Add New', 'multimian'),
            'add_new_item'       => esc_html__('Add New Service', 'multimian'),
            'edit_item'          => esc_html__('Edit Service', 'multimian'),
            'new_item'           => esc_html__('New Service', 'multimian'),
            'view_item'          => esc_html__('View Service', 'multimian'),
            'search_items'       => esc_html__('Search Services', 'multimian'),
            'not_found'          => esc_html__('No services found', 'multimian'),
            'not_found_in_trash' => esc_html__('No services found in Trash', 'multimian'),
        ),
        'public'       => true,
        'has_archive'  => true,
        'rewrite'      => array('slug' => 'services'),
        'supports'     => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'menu_icon'    => 'dashicons-admin-tools',
        'show_in_rest' => true,
    ));

    // Testimonials Post Type
    register_post_type('testimonial', array(
        'labels' => array(
            'name'               => esc_html__('Testimonials', 'multimian'),
            'singular_name'      => esc_html__('Testimonial', 'multimian'),
            'add_new'            => esc_html__('Add New', 'multimian'),
            'add_new_item'       => esc_html__('Add New Testimonial', 'multimian'),
            'edit_item'          => esc_html__('Edit Testimonial', 'multimian'),
            'new_item'           => esc_html__('New Testimonial', 'multimian'),
            'view_item'          => esc_html__('View Testimonial', 'multimian'),
            'search_items'       => esc_html__('Search Testimonials', 'multimian'),
            'not_found'          => esc_html__('No testimonials found', 'multimian'),
            'not_found_in_trash' => esc_html__('No testimonials found in Trash', 'multimian'),
        ),
        'public'       => true,
        'has_archive'  => false,
        'rewrite'      => array('slug' => 'testimonials'),
        'supports'     => array('title', 'editor', 'thumbnail'),
        'menu_icon'    => 'dashicons-testimonial',
        'show_in_rest' => true,
    ));

    // Team Members Post Type
    register_post_type('team', array(
        'labels' => array(
            'name'               => esc_html__('Team', 'multimian'),
            'singular_name'      => esc_html__('Team Member', 'multimian'),
            'add_new'            => esc_html__('Add New', 'multimian'),
            'add_new_item'       => esc_html__('Add New Team Member', 'multimian'),
            'edit_item'          => esc_html__('Edit Team Member', 'multimian'),
            'new_item'           => esc_html__('New Team Member', 'multimian'),
            'view_item'          => esc_html__('View Team Member', 'multimian'),
            'search_items'       => esc_html__('Search Team', 'multimian'),
            'not_found'          => esc_html__('No team members found', 'multimian'),
            'not_found_in_trash' => esc_html__('No team members found in Trash', 'multimian'),
        ),
        'public'       => true,
        'has_archive'  => false,
        'rewrite'      => array('slug' => 'team'),
        'supports'     => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon'    => 'dashicons-groups',
        'show_in_rest' => true,
    ));
}
add_action('init', 'multimian_register_post_types');

/**
 * Register Taxonomies
 */
function multimian_register_taxonomies() {
    // Portfolio Categories
    register_taxonomy('portfolio_category', 'portfolio', array(
        'labels' => array(
            'name'          => esc_html__('Portfolio Categories', 'multimian'),
            'singular_name' => esc_html__('Portfolio Category', 'multimian'),
        ),
        'hierarchical'      => true,
        'show_admin_column' => true,
        'show_in_rest'      => true,
        'rewrite'           => array('slug' => 'portfolio-category'),
    ));

    // Service Categories
    register_taxonomy('service_category', 'service', array(
        'labels' => array(
            'name'          => esc_html__('Service Categories', 'multimian'),
            'singular_name' => esc_html__('Service Category', 'multimian'),
        ),
        'hierarchical'      => true,
        'show_admin_column' => true,
        'show_in_rest'      => true,
        'rewrite'           => array('slug' => 'service-category'),
    ));
}
add_action('init', 'multimian_register_taxonomies');

/**
 * Theme Customizer
 */
function multimian_customize_register($wp_customize) {
    // Hero Section
    $wp_customize->add_section('multimian_hero', array(
        'title'    => esc_html__('Hero Section', 'multimian'),
        'priority' => 30,
    ));

    $wp_customize->add_setting('hero_title', array(
        'default'           => 'Build High-Performance Websites',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('hero_title', array(
        'label'   => esc_html__('Hero Title', 'multimian'),
        'section' => 'multimian_hero',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('hero_subtitle', array(
        'default'           => 'Professional full-stack development by Mian Hassam',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('hero_subtitle', array(
        'label'   => esc_html__('Hero Subtitle', 'multimian'),
        'section' => 'multimian_hero',
        'type'    => 'textarea',
    ));

    $wp_customize->add_setting('hero_cta_text', array(
        'default'           => 'Start Your Project',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('hero_cta_text', array(
        'label'   => esc_html__('CTA Button Text', 'multimian'),
        'section' => 'multimian_hero',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('hero_cta_url', array(
        'default'           => '/contact',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control('hero_cta_url', array(
        'label'   => esc_html__('CTA Button URL', 'multimian'),
        'section' => 'multimian_hero',
        'type'    => 'url',
    ));

    // Colors
    $wp_customize->add_setting('primary_color', array(
        'default'           => '#2563eb',
        'sanitize_callback' => 'sanitize_hex_color',
    ));

    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'primary_color', array(
        'label'   => esc_html__('Primary Color', 'multimian'),
        'section' => 'colors',
    )));

    $wp_customize->add_setting('secondary_color', array(
        'default'           => '#7c3aed',
        'sanitize_callback' => 'sanitize_hex_color',
    ));

    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'secondary_color', array(
        'label'   => esc_html__('Secondary Color', 'multimian'),
        'section' => 'colors',
    )));

    // Social Media
    $wp_customize->add_section('multimian_social', array(
        'title'    => esc_html__('Social Media', 'multimian'),
        'priority' => 40,
    ));

    $social_networks = array('facebook', 'twitter', 'instagram', 'linkedin', 'github', 'youtube');
    
    foreach ($social_networks as $network) {
        $wp_customize->add_setting($network . '_url', array(
            'default'           => '',
            'sanitize_callback' => 'esc_url_raw',
        ));

        $wp_customize->add_control($network . '_url', array(
            'label'   => ucfirst($network) . ' ' . esc_html__('URL', 'multimian'),
            'section' => 'multimian_social',
            'type'    => 'url',
        ));
    }

    // Contact Information
    $wp_customize->add_section('multimian_contact', array(
        'title'    => esc_html__('Contact Information', 'multimian'),
        'priority' => 50,
    ));

    $wp_customize->add_setting('contact_phone', array(
        'default'           => '+92 325 883 1437',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('contact_phone', array(
        'label'   => esc_html__('Phone Number', 'multimian'),
        'section' => 'multimian_contact',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('contact_email', array(
        'default'           => 'mianhassam96@gmail.com',
        'sanitize_callback' => 'sanitize_email',
    ));

    $wp_customize->add_control('contact_email', array(
        'label'   => esc_html__('Email Address', 'multimian'),
        'section' => 'multimian_contact',
        'type'    => 'email',
    ));

    $wp_customize->add_setting('contact_address', array(
        'default'           => 'Pakistan',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('contact_address', array(
        'label'   => esc_html__('Address', 'multimian'),
        'section' => 'multimian_contact',
        'type'    => 'textarea',
    ));
}
add_action('customize_register', 'multimian_customize_register');

/**
 * Custom Excerpt Length
 */
function multimian_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'multimian_excerpt_length');

/**
 * Custom Excerpt More
 */
function multimian_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'multimian_excerpt_more');

/**
 * Add Dark Mode Toggle to Body Class
 */
function multimian_body_classes($classes) {
    if (isset($_COOKIE['dark_mode']) && $_COOKIE['dark_mode'] === 'true') {
        $classes[] = 'dark-mode';
    }
    return $classes;
}
add_filter('body_class', 'multimian_body_classes');

/**
 * Include Required Files
 */
require_once MULTIMIAN_THEME_DIR . '/inc/template-tags.php';
require_once MULTIMIAN_THEME_DIR . '/inc/template-functions.php';

// Include ACF fields if ACF is active
if (class_exists('ACF')) {
    require_once MULTIMIAN_THEME_DIR . '/inc/acf-fields.php';
}
