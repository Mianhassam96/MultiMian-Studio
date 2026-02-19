<?php
/**
 * MultiMian Studio Theme Functions
 * 
 * @package MultiMian
 * @version 1.0.0
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
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
    add_image_size('multimian-featured', 1200, 600, true);
    add_image_size('multimian-thumbnail', 400, 300, true);
}
add_action('after_setup_theme', 'multimian_setup');

/**
 * Enqueue Scripts and Styles
 */
function multimian_scripts() {
    // Styles with cache busting
    $version = '1.0.' . time();
    wp_enqueue_style('multimian-style', get_stylesheet_uri(), array(), $version);
    wp_enqueue_style('multimian-main', get_template_directory_uri() . '/assets/css/main.css', array('multimian-style'), $version);
    
    // Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap', array(), null);
    
    // jQuery (WordPress includes it)
    wp_enqueue_script('jquery');
    
    // Scripts
    wp_enqueue_script('multimian-main', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), $version, true);
    
    // Localize script
    wp_localize_script('multimian-main', 'multimianAjax', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('multimian_nonce'),
    ));
}
add_action('wp_enqueue_scripts', 'multimian_scripts');

/**
 * Register Widget Areas
 */
function multimian_widgets_init() {
    register_sidebar(array(
        'name' => __('Sidebar', 'multimian'),
        'id' => 'sidebar-1',
        'description' => __('Add widgets here to appear in your sidebar.', 'multimian'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
    
    register_sidebar(array(
        'name' => __('Footer 1', 'multimian'),
        'id' => 'footer-1',
        'description' => __('Footer widget area 1', 'multimian'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4 class="widget-title">',
        'after_title' => '</h4>',
    ));
    
    register_sidebar(array(
        'name' => __('Footer 2', 'multimian'),
        'id' => 'footer-2',
        'description' => __('Footer widget area 2', 'multimian'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4 class="widget-title">',
        'after_title' => '</h4>',
    ));
    
    register_sidebar(array(
        'name' => __('Footer 3', 'multimian'),
        'id' => 'footer-3',
        'description' => __('Footer widget area 3', 'multimian'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4 class="widget-title">',
        'after_title' => '</h4>',
    ));
}
add_action('widgets_init', 'multimian_widgets_init');

/**
 * Custom Post Types
 */
function multimian_register_post_types() {
    // Portfolio Post Type
    register_post_type('portfolio', array(
        'labels' => array(
            'name' => __('Portfolio', 'multimian'),
            'singular_name' => __('Portfolio Item', 'multimian'),
            'add_new' => __('Add New', 'multimian'),
            'add_new_item' => __('Add New Portfolio Item', 'multimian'),
            'edit_item' => __('Edit Portfolio Item', 'multimian'),
            'new_item' => __('New Portfolio Item', 'multimian'),
            'view_item' => __('View Portfolio Item', 'multimian'),
            'search_items' => __('Search Portfolio', 'multimian'),
            'not_found' => __('No portfolio items found', 'multimian'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-portfolio',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite' => array('slug' => 'portfolio'),
    ));
    
    // Testimonials Post Type
    register_post_type('testimonial', array(
        'labels' => array(
            'name' => __('Testimonials', 'multimian'),
            'singular_name' => __('Testimonial', 'multimian'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-testimonial',
        'supports' => array('title', 'editor', 'thumbnail'),
        'rewrite' => array('slug' => 'testimonials'),
    ));
    
    // Services Post Type
    register_post_type('service', array(
        'labels' => array(
            'name' => __('Services', 'multimian'),
            'singular_name' => __('Service', 'multimian'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-admin-tools',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite' => array('slug' => 'services'),
    ));
}
add_action('init', 'multimian_register_post_types');

/**
 * AJAX Handler for Contact Form
 */
function multimian_contact_form_handler() {
    check_ajax_referer('multimian_nonce', 'nonce');
    
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $subject = sanitize_text_field($_POST['subject']);
    $message = sanitize_textarea_field($_POST['message']);
    
    // Send email
    $to = get_option('admin_email');
    $headers = array('Content-Type: text/html; charset=UTF-8', 'From: ' . $name . ' <' . $email . '>');
    $body = '<h2>New Contact Form Submission</h2>';
    $body .= '<p><strong>Name:</strong> ' . $name . '</p>';
    $body .= '<p><strong>Email:</strong> ' . $email . '</p>';
    $body .= '<p><strong>Subject:</strong> ' . $subject . '</p>';
    $body .= '<p><strong>Message:</strong></p>';
    $body .= '<p>' . nl2br($message) . '</p>';
    
    $sent = wp_mail($to, 'Contact Form: ' . $subject, $body, $headers);
    
    if ($sent) {
        wp_send_json_success(array('message' => 'Message sent successfully!'));
    } else {
        wp_send_json_error(array('message' => 'Failed to send message. Please try again.'));
    }
}
add_action('wp_ajax_multimian_contact_form', 'multimian_contact_form_handler');
add_action('wp_ajax_nopriv_multimian_contact_form', 'multimian_contact_form_handler');

/**
 * User Registration Handler
 */
function multimian_register_user() {
    check_ajax_referer('multimian_nonce', 'nonce');
    
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $password = $_POST['password'];
    
    // Validate
    if (empty($name) || empty($email) || empty($password)) {
        wp_send_json_error(array('message' => 'All fields are required.'));
    }
    
    if (!is_email($email)) {
        wp_send_json_error(array('message' => 'Invalid email address.'));
    }
    
    if (email_exists($email)) {
        wp_send_json_error(array('message' => 'Email already exists.'));
    }
    
    // Create user
    $user_id = wp_create_user($email, $password, $email);
    
    if (is_wp_error($user_id)) {
        wp_send_json_error(array('message' => $user_id->get_error_message()));
    }
    
    // Update user meta
    wp_update_user(array(
        'ID' => $user_id,
        'display_name' => $name,
        'first_name' => $name,
    ));
    
    // Auto login
    wp_set_current_user($user_id);
    wp_set_auth_cookie($user_id);
    
    wp_send_json_success(array(
        'message' => 'Registration successful!',
        'redirect' => home_url('/dashboard')
    ));
}
add_action('wp_ajax_multimian_register', 'multimian_register_user');
add_action('wp_ajax_nopriv_multimian_register', 'multimian_register_user');

/**
 * User Login Handler
 */
function multimian_login_user() {
    check_ajax_referer('multimian_nonce', 'nonce');
    
    $email = sanitize_email($_POST['email']);
    $password = $_POST['password'];
    $remember = isset($_POST['remember']) ? true : false;
    
    $creds = array(
        'user_login' => $email,
        'user_password' => $password,
        'remember' => $remember,
    );
    
    $user = wp_signon($creds, false);
    
    if (is_wp_error($user)) {
        wp_send_json_error(array('message' => 'Invalid email or password.'));
    }
    
    wp_send_json_success(array(
        'message' => 'Login successful!',
        'redirect' => home_url('/dashboard')
    ));
}
add_action('wp_ajax_multimian_login', 'multimian_login_user');
add_action('wp_ajax_nopriv_multimian_login', 'multimian_login_user');

/**
 * Customizer Settings
 */
function multimian_customize_register($wp_customize) {
    // Social Media Section
    $wp_customize->add_section('multimian_social', array(
        'title' => __('Social Media', 'multimian'),
        'priority' => 30,
    ));
    
    // Facebook
    $wp_customize->add_setting('facebook_url', array('default' => ''));
    $wp_customize->add_control('facebook_url', array(
        'label' => __('Facebook URL', 'multimian'),
        'section' => 'multimian_social',
        'type' => 'url',
    ));
    
    // LinkedIn
    $wp_customize->add_setting('linkedin_url', array('default' => ''));
    $wp_customize->add_control('linkedin_url', array(
        'label' => __('LinkedIn URL', 'multimian'),
        'section' => 'multimian_social',
        'type' => 'url',
    ));
    
    // GitHub
    $wp_customize->add_setting('github_url', array('default' => ''));
    $wp_customize->add_control('github_url', array(
        'label' => __('GitHub URL', 'multimian'),
        'section' => 'multimian_social',
        'type' => 'url',
    ));
    
    // WhatsApp
    $wp_customize->add_setting('whatsapp_number', array('default' => ''));
    $wp_customize->add_control('whatsapp_number', array(
        'label' => __('WhatsApp Number', 'multimian'),
        'section' => 'multimian_social',
        'type' => 'text',
    ));
    
    // Contact Info Section
    $wp_customize->add_section('multimian_contact', array(
        'title' => __('Contact Information', 'multimian'),
        'priority' => 31,
    ));
    
    // Phone
    $wp_customize->add_setting('contact_phone', array('default' => ''));
    $wp_customize->add_control('contact_phone', array(
        'label' => __('Phone Number', 'multimian'),
        'section' => 'multimian_contact',
        'type' => 'text',
    ));
    
    // Email
    $wp_customize->add_setting('contact_email', array('default' => ''));
    $wp_customize->add_control('contact_email', array(
        'label' => __('Email Address', 'multimian'),
        'section' => 'multimian_contact',
        'type' => 'email',
    ));
    
    // Address
    $wp_customize->add_setting('contact_address', array('default' => ''));
    $wp_customize->add_control('contact_address', array(
        'label' => __('Address', 'multimian'),
        'section' => 'multimian_contact',
        'type' => 'textarea',
    ));
}
add_action('customize_register', 'multimian_customize_register');

/**
 * Add Body Classes
 */
function multimian_body_classes($classes) {
    if (is_user_logged_in()) {
        $classes[] = 'logged-in-user';
    }
    
    if (is_front_page()) {
        $classes[] = 'home-page';
    }
    
    return $classes;
}
add_filter('body_class', 'multimian_body_classes');

/**
 * Excerpt Length
 */
function multimian_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'multimian_excerpt_length');

/**
 * Excerpt More
 */
function multimian_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'multimian_excerpt_more');
