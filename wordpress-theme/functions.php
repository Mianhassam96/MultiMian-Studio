<?php
/**
 * MultiMian Studio Theme Functions
 * Version: 2.0
 */

// Theme Setup
function multimian_theme_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'multimian'),
        'footer' => __('Footer Menu', 'multimian'),
    ));
}
add_action('after_setup_theme', 'multimian_theme_setup');

// Enqueue styles and scripts
function multimian_enqueue_scripts() {
    // Styles
    wp_enqueue_style('multimian-style', get_stylesheet_uri(), array(), '2.0');
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap', array(), null);
    wp_enqueue_style('luxury-theme', get_template_directory_uri() . '/assets/css/luxury-theme.css', array('multimian-style'), '2.0');
    
    // Scripts
    wp_enqueue_script('multimian-main', get_template_directory_uri() . '/assets/js/main.js', array(), '2.0', true);
    
    // Localize script for AJAX
    wp_localize_script('multimian-main', 'multimianAjax', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('multimian_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'multimian_enqueue_scripts');

// AJAX Handler for Contact Form
function multimian_handle_contact_form() {
    check_ajax_referer('multimian_nonce', 'nonce');
    
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $phone = sanitize_text_field($_POST['phone']);
    $message = sanitize_textarea_field($_POST['message']);
    
    $to = get_option('admin_email');
    $subject = 'New Contact Form Submission from ' . $name;
    $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";
    $headers = array('Content-Type: text/plain; charset=UTF-8', 'From: ' . $name . ' <' . $email . '>');
    
    if (wp_mail($to, $subject, $body, $headers)) {
        wp_send_json_success(array('message' => 'Thank you! We will contact you soon.'));
    } else {
        wp_send_json_error(array('message' => 'Sorry, there was an error. Please try again.'));
    }
}
add_action('wp_ajax_multimian_contact_form', 'multimian_handle_contact_form');
add_action('wp_ajax_nopriv_multimian_contact_form', 'multimian_handle_contact_form');

// AJAX Handler for Newsletter
function multimian_handle_newsletter() {
    check_ajax_referer('multimian_nonce', 'nonce');
    
    $email = sanitize_email($_POST['email']);
    
    // Here you would integrate with your email marketing service
    // For now, we'll just send an email to admin
    $to = get_option('admin_email');
    $subject = 'New Newsletter Subscription';
    $body = "New newsletter subscription from: $email";
    
    if (wp_mail($to, $subject, $body)) {
        wp_send_json_success(array('message' => 'Successfully subscribed!'));
    } else {
        wp_send_json_error(array('message' => 'Subscription failed. Please try again.'));
    }
}
add_action('wp_ajax_multimian_newsletter', 'multimian_handle_newsletter');
add_action('wp_ajax_nopriv_multimian_newsletter', 'multimian_handle_newsletter');

// AJAX Handler for Consultation Popup Form
function multimian_handle_consultation() {
    check_ajax_referer('multimian_nonce', 'nonce');
    
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $phone = sanitize_text_field($_POST['phone']);
    $projectType = sanitize_text_field($_POST['projectType']);
    $message = sanitize_textarea_field($_POST['message']);
    
    $to = get_option('admin_email');
    $subject = 'Free Strategy Call Request from ' . $name;
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nProject Type: $projectType\n\nMessage:\n$message";
    $headers = array('Content-Type: text/plain; charset=UTF-8');
    
    if (wp_mail($to, $subject, $body, $headers)) {
        wp_send_json_success(array('message' => 'Thank you! We will contact you within 24 hours.'));
    } else {
        wp_send_json_error(array('message' => 'Sorry, there was an error. Please try again.'));
    }
}
add_action('wp_ajax_multimian_consultation', 'multimian_handle_consultation');
add_action('wp_ajax_nopriv_multimian_consultation', 'multimian_handle_consultation');

// Customizer Settings
function multimian_customize_register($wp_customize) {
    // Contact Information Section
    $wp_customize->add_section('multimian_contact', array(
        'title' => __('Contact Information', 'multimian'),
        'priority' => 30,
    ));
    
    // Phone Number
    $wp_customize->add_setting('multimian_phone', array(
        'default' => '+92 325 883 1437',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('multimian_phone', array(
        'label' => __('Phone Number', 'multimian'),
        'section' => 'multimian_contact',
        'type' => 'text',
    ));
    
    // WhatsApp Number
    $wp_customize->add_setting('multimian_whatsapp', array(
        'default' => '923258831437',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('multimian_whatsapp', array(
        'label' => __('WhatsApp Number (without +)', 'multimian'),
        'section' => 'multimian_contact',
        'type' => 'text',
    ));
    
    // Email
    $wp_customize->add_setting('multimian_email', array(
        'default' => 'mianhassam96@gmail.com',
        'sanitize_callback' => 'sanitize_email',
    ));
    $wp_customize->add_control('multimian_email', array(
        'label' => __('Email Address', 'multimian'),
        'section' => 'multimian_contact',
        'type' => 'email',
    ));
}
add_action('customize_register', 'multimian_customize_register');
