<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header" id="site-header">
    <div class="header-container">
        <!-- Logo -->
        <a href="<?php echo esc_url(home_url('/')); ?>" class="site-logo">
            <span class="logo-multi">MULTI</span><span class="logo-mian">MIAN</span>
        </a>

        <!-- Navigation -->
        <nav class="main-nav" id="main-nav">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container' => false,
                'fallback_cb' => 'multimian_default_menu',
            ));
            ?>
            <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn-get-started">Get Started</a>
        </nav>

        <!-- Mobile Menu Toggle -->
        <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle Menu">
            <span>☰</span>
        </button>
    </div>
</header>

<?php
// Default menu fallback
function multimian_default_menu() {
    echo '<a href="' . esc_url(home_url('/')) . '">Home</a>';
    echo '<a href="' . esc_url(home_url('/services')) . '">Services</a>';
    echo '<a href="' . esc_url(home_url('/portfolio')) . '">Portfolio</a>';
    echo '<a href="' . esc_url(home_url('/process')) . '">Process</a>';
    echo '<a href="' . esc_url(home_url('/pricing')) . '">Pricing</a>';
    echo '<a href="' . esc_url(home_url('/about')) . '">About</a>';
    echo '<a href="' . esc_url(home_url('/contact')) . '">Contact</a>';
}
?>
