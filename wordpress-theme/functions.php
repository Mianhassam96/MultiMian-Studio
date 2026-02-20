<?php
/**
 * MultiMian Studio Theme Functions
 * 
 * @package MultiMian
 * @version 2.0.0
 */

// Theme Setup
function multimian_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    add_theme_support('custom-logo');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'multimian'),
        'footer' => __('Footer Menu', 'multimian'),
    ));
}
add_action('after_setup_theme', 'multimian_setup');

// Enqueue styles and scripts
function multimian_scripts() {
    // Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800;900&display=swap', array(), null);
    
    // Theme stylesheet
    wp_enqueue_style('multimian-style', get_stylesheet_uri(), array(), '2.0.0');
    
    // jQuery (included with WordPress)
    wp_enqueue_script('jquery');
    
    // Theme JavaScript
    wp_enqueue_script('multimian-script', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '2.0.0', true);
    
    // Localize script for AJAX
    wp_localize_script('multimian-script', 'multimianAjax', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('multimian_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'multimian_scripts');

// Register widget areas
function multimian_widgets_init() {
    register_sidebar(array(
        'name'          => __('Footer Widget Area 1', 'multimian'),
        'id'            => 'footer-1',
        'description'   => __('Add widgets here to appear in your footer.', 'multimian'),
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));
    
    register_sidebar(array(
        'name'          => __('Footer Widget Area 2', 'multimian'),
        'id'            => 'footer-2',
        'description'   => __('Add widgets here to appear in your footer.', 'multimian'),
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));
}
add_action('widgets_init', 'multimian_widgets_init');

// Customizer Settings
function multimian_customize_register($wp_customize) {
    // Contact Information Section
    $wp_customize->add_section('multimian_contact', array(
        'title'    => __('Contact Information', 'multimian'),
        'priority' => 30,
    ));
    
    // Email
    $wp_customize->add_setting('contact_email', array(
        'default'           => 'mianhassam96@gmail.com',
        'sanitize_callback' => 'sanitize_email',
    ));
    $wp_customize->add_control('contact_email', array(
        'label'    => __('Email Address', 'multimian'),
        'section'  => 'multimian_contact',
        'type'     => 'email',
    ));
    
    // Phone
    $wp_customize->add_setting('contact_phone', array(
        'default'           => '+92 325 883 1437',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('contact_phone', array(
        'label'    => __('Phone Number', 'multimian'),
        'section'  => 'multimian_contact',
        'type'     => 'text',
    ));
    
    // Address
    $wp_customize->add_setting('contact_address', array(
        'default'           => 'Pakistan',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('contact_address', array(
        'label'    => __('Address', 'multimian'),
        'section'  => 'multimian_contact',
        'type'     => 'text',
    ));
    
    // WhatsApp Number
    $wp_customize->add_setting('whatsapp_number', array(
        'default'           => '923258831437',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('whatsapp_number', array(
        'label'    => __('WhatsApp Number (with country code, no +)', 'multimian'),
        'section'  => 'multimian_contact',
        'type'     => 'text',
    ));
    
    // Social Media Section
    $wp_customize->add_section('multimian_social', array(
        'title'    => __('Social Media Links', 'multimian'),
        'priority' => 31,
    ));
    
    // Facebook
    $wp_customize->add_setting('facebook_url', array(
        'default'           => 'https://www.facebook.com/mian.hassam.kz',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('facebook_url', array(
        'label'    => __('Facebook URL', 'multimian'),
        'section'  => 'multimian_social',
        'type'     => 'url',
    ));
    
    // LinkedIn
    $wp_customize->add_setting('linkedin_url', array(
        'default'           => 'https://www.linkedin.com/in/mianhassam96/',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('linkedin_url', array(
        'label'    => __('LinkedIn URL', 'multimian'),
        'section'  => 'multimian_social',
        'type'     => 'url',
    ));
    
    // GitHub
    $wp_customize->add_setting('github_url', array(
        'default'           => 'https://github.com/Mianhassam96',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('github_url', array(
        'label'    => __('GitHub URL', 'multimian'),
        'section'  => 'multimian_social',
        'type'     => 'url',
    ));
}
add_action('customize_register', 'multimian_customize_register');

// AJAX Handler for Newsletter Subscription
function multimian_newsletter_subscribe() {
    check_ajax_referer('multimian_nonce', 'nonce');
    
    $email = sanitize_email($_POST['email']);
    
    if (!is_email($email)) {
        wp_send_json_error(array('message' => 'Invalid email address'));
    }
    
    // Here you can add your newsletter service integration
    // For now, we'll just store it in WordPress options or send an email
    
    $admin_email = get_option('admin_email');
    $subject = 'New Newsletter Subscription';
    $message = "New newsletter subscription from: " . $email;
    
    wp_mail($admin_email, $subject, $message);
    
    wp_send_json_success(array('message' => 'Thanks for subscribing! Check your inbox.'));
}
add_action('wp_ajax_newsletter_subscribe', 'multimian_newsletter_subscribe');
add_action('wp_ajax_nopriv_newsletter_subscribe', 'multimian_newsletter_subscribe');

// AJAX Handler for Contact Form
function multimian_contact_form() {
    check_ajax_referer('multimian_nonce', 'nonce');
    
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $message = sanitize_textarea_field($_POST['message']);
    
    if (empty($name) || empty($email) || empty($message)) {
        wp_send_json_error(array('message' => 'Please fill in all fields'));
    }
    
    if (!is_email($email)) {
        wp_send_json_error(array('message' => 'Invalid email address'));
    }
    
    $admin_email = get_option('admin_email');
    $subject = 'New Contact Form Submission from ' . $name;
    $email_message = "Name: " . $name . "\n";
    $email_message .= "Email: " . $email . "\n\n";
    $email_message .= "Message:\n" . $message;
    
    $headers = array('Reply-To: ' . $email);
    
    if (wp_mail($admin_email, $subject, $email_message, $headers)) {
        wp_send_json_success(array('message' => 'Message sent successfully! We\'ll get back to you soon.'));
    } else {
        wp_send_json_error(array('message' => 'Failed to send message. Please try again.'));
    }
}
add_action('wp_ajax_contact_form', 'multimian_contact_form');
add_action('wp_ajax_nopriv_contact_form', 'multimian_contact_form');

// Remove WordPress version from head
remove_action('wp_head', 'wp_generator');

// Disable XML-RPC
add_filter('xmlrpc_enabled', '__return_false');

// Security: Remove WordPress version from RSS
function multimian_remove_version() {
    return '';
}
add_filter('the_generator', 'multimian_remove_version');

// Add custom body classes
function multimian_body_classes($classes) {
    if (is_front_page()) {
        $classes[] = 'home-page';
    }
    return $classes;
}
add_filter('body_class', 'multimian_body_classes');

// Excerpt length
function multimian_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'multimian_excerpt_length');

// Excerpt more
function multimian_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'multimian_excerpt_more');
