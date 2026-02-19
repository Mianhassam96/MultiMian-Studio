<?php
/**
 * MultiMian Studio Theme Functions
 */

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
}
add_action('after_setup_theme', 'multimian_setup');

// Enqueue styles and scripts
function multimian_scripts() {
    // Tailwind CSS CDN
    wp_enqueue_style('tailwind-css', 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
    
    // Main stylesheet
    wp_enqueue_style('multimian-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Custom CSS
    wp_enqueue_style('multimian-custom', get_template_directory_uri() . '/assets/css/custom.css', array(), '1.0.0');
    
    // Alpine.js for interactivity
    wp_enqueue_script('alpinejs', 'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js', array(), '3.0.0', true);
    
    // Custom JavaScript
    wp_enqueue_script('multimian-script', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true);
    
    // Localize script for AJAX
    wp_localize_script('multimian-script', 'multimian_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('multimian_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'multimian_scripts');

// Register widget areas
function multimian_widgets_init() {
    register_sidebar(array(
        'name'          => __('Footer Widget Area', 'multimian'),
        'id'            => 'footer-1',
        'description'   => __('Add widgets here to appear in your footer.', 'multimian'),
        'before_widget' => '<div class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'multimian_widgets_init');

// Custom post types
function multimian_custom_post_types() {
    // Portfolio Post Type
    register_post_type('portfolio', array(
        'labels' => array(
            'name' => __('Portfolio', 'multimian'),
            'singular_name' => __('Portfolio Item', 'multimian'),
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-portfolio',
        'rewrite' => array('slug' => 'portfolio'),
    ));
    
    // Services Post Type
    register_post_type('service', array(
        'labels' => array(
            'name' => __('Services', 'multimian'),
            'singular_name' => __('Service', 'multimian'),
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-admin-tools',
        'rewrite' => array('slug' => 'services'),
    ));
    
    // Testimonials Post Type
    register_post_type('testimonial', array(
        'labels' => array(
            'name' => __('Testimonials', 'multimian'),
            'singular_name' => __('Testimonial', 'multimian'),
        ),
        'public' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-testimonial',
    ));
}
add_action('init', 'multimian_custom_post_types');

// AJAX Login Handler
function multimian_ajax_login() {
    check_ajax_referer('multimian_nonce', 'nonce');
    
    $username = sanitize_text_field($_POST['username']);
    $password = $_POST['password'];
    $remember = isset($_POST['remember']) ? true : false;
    
    $creds = array(
        'user_login'    => $username,
        'user_password' => $password,
        'remember'      => $remember
    );
    
    $user = wp_signon($creds, false);
    
    if (is_wp_error($user)) {
        wp_send_json_error(array('message' => $user->get_error_message()));
    } else {
        wp_send_json_success(array('message' => 'Login successful', 'redirect' => home_url('/dashboard')));
    }
}
add_action('wp_ajax_nopriv_multimian_login', 'multimian_ajax_login');

// AJAX Registration Handler
function multimian_ajax_register() {
    check_ajax_referer('multimian_nonce', 'nonce');
    
    $username = sanitize_text_field($_POST['username']);
    $email = sanitize_email($_POST['email']);
    $password = $_POST['password'];
    
    $user_id = wp_create_user($username, $password, $email);
    
    if (is_wp_error($user_id)) {
        wp_send_json_error(array('message' => $user_id->get_error_message()));
    } else {
        wp_set_current_user($user_id);
        wp_set_auth_cookie($user_id);
        wp_send_json_success(array('message' => 'Registration successful', 'redirect' => home_url('/dashboard')));
    }
}
add_action('wp_ajax_nopriv_multimian_register', 'multimian_ajax_register');

// Add custom user meta fields
function multimian_user_profile_fields($user) {
    ?>
    <h3><?php _e('Additional Profile Information', 'multimian'); ?></h3>
    <table class="form-table">
        <tr>
            <th><label for="bio"><?php _e('Bio', 'multimian'); ?></label></th>
            <td>
                <textarea name="bio" id="bio" rows="5" cols="30"><?php echo esc_attr(get_user_meta($user->ID, 'bio', true)); ?></textarea>
            </td>
        </tr>
        <tr>
            <th><label for="location"><?php _e('Location', 'multimian'); ?></label></th>
            <td>
                <input type="text" name="location" id="location" value="<?php echo esc_attr(get_user_meta($user->ID, 'location', true)); ?>" class="regular-text" />
            </td>
        </tr>
        <tr>
            <th><label for="website"><?php _e('Website', 'multimian'); ?></label></th>
            <td>
                <input type="url" name="website" id="website" value="<?php echo esc_attr(get_user_meta($user->ID, 'website', true)); ?>" class="regular-text" />
            </td>
        </tr>
    </table>
    <?php
}
add_action('show_user_profile', 'multimian_user_profile_fields');
add_action('edit_user_profile', 'multimian_user_profile_fields');

// Save custom user meta
function multimian_save_user_profile_fields($user_id) {
    if (!current_user_can('edit_user', $user_id)) {
        return false;
    }
    
    update_user_meta($user_id, 'bio', sanitize_textarea_field($_POST['bio']));
    update_user_meta($user_id, 'location', sanitize_text_field($_POST['location']));
    update_user_meta($user_id, 'website', esc_url_raw($_POST['website']));
}
add_action('personal_options_update', 'multimian_save_user_profile_fields');
add_action('edit_user_profile_update', 'multimian_save_user_profile_fields');

// Theme customizer
function multimian_customize_register($wp_customize) {
    // Contact Information Section
    $wp_customize->add_section('multimian_contact', array(
        'title' => __('Contact Information', 'multimian'),
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('phone_number', array('default' => '+92 325 883 1437'));
    $wp_customize->add_control('phone_number', array(
        'label' => __('Phone Number', 'multimian'),
        'section' => 'multimian_contact',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('email_address', array('default' => 'mianhassam96@gmail.com'));
    $wp_customize->add_control('email_address', array(
        'label' => __('Email Address', 'multimian'),
        'section' => 'multimian_contact',
        'type' => 'email',
    ));
    
    // Social Media Section
    $wp_customize->add_section('multimian_social', array(
        'title' => __('Social Media Links', 'multimian'),
        'priority' => 31,
    ));
    
    $social_links = array('facebook', 'linkedin', 'github', 'whatsapp');
    foreach ($social_links as $social) {
        $wp_customize->add_setting($social . '_url', array('default' => ''));
        $wp_customize->add_control($social . '_url', array(
            'label' => ucfirst($social) . ' URL',
            'section' => 'multimian_social',
            'type' => 'url',
        ));
    }
}
add_action('customize_register', 'multimian_customize_register');

// Excerpt length
function multimian_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'multimian_excerpt_length');

// Add body classes for dark mode
function multimian_body_classes($classes) {
    if (isset($_COOKIE['darkMode']) && $_COOKIE['darkMode'] === 'true') {
        $classes[] = 'dark';
    }
    return $classes;
}
add_filter('body_class', 'multimian_body_classes');
