<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <div class="header-container">
        <div class="site-logo">
            <?php if (has_custom_logo()) : ?>
                <?php the_custom_logo(); ?>
            <?php else : ?>
                <a href="<?php echo esc_url(home_url('/')); ?>">
                    <span class="logo-multi">Multi</span><span class="logo-mian">Mian</span>
                </a>
            <?php endif; ?>
        </div>
        
        <nav class="main-navigation" role="navigation" aria-label="Primary Navigation">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container' => false,
                'fallback_cb' => function() {
                    echo '<a href="' . home_url('/') . '">Home</a>';
                    echo '<a href="' . home_url('/services') . '">Services</a>';
                    echo '<a href="' . home_url('/portfolio') . '">Portfolio</a>';
                    echo '<a href="' . home_url('/about') . '">About</a>';
                    echo '<a href="' . home_url('/pricing') . '">Pricing</a>';
                    echo '<a href="' . home_url('/contact') . '">Contact</a>';
                }
            ));
            ?>
            <a href="<?php echo home_url('/contact'); ?>" class="cta-button">Get Started</a>
        </nav>
        
        <div class="header-actions">
            <button id="themeToggle" class="theme-toggle" aria-label="Toggle Dark Mode" title="Toggle Dark Mode">
                <svg class="sun-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
                <svg class="moon-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: none;">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
            </button>
            
            <button class="mobile-menu-toggle" aria-label="Toggle Menu" aria-expanded="false">
                <span class="menu-icon">☰</span>
            </button>
        </div>
    </div>
</header>

<main id="main-content" class="site-main">
