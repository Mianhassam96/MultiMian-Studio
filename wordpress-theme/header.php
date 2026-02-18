<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'multimian'); ?></a>

    <header id="masthead" class="site-header">
        <nav class="main-navigation" id="site-navigation">
            <div class="container">
                <div class="nav-wrapper">
                    <!-- Logo -->
                    <div class="site-branding">
                        <?php
                        if (has_custom_logo()) {
                            the_custom_logo();
                        } else {
                            ?>
                            <a href="<?php echo esc_url(home_url('/')); ?>" class="custom-logo-link" rel="home">
                                <span class="logo-text">
                                    <span class="logo-multi">MULTI</span><span class="logo-mian">MIAN</span>
                                </span>
                            </a>
                            <?php
                        }
                        ?>
                    </div>

                    <!-- Desktop Navigation -->
                    <div class="nav-menu-wrapper">
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'primary',
                            'menu_id'        => 'primary-menu',
                            'menu_class'     => 'nav-menu',
                            'container'      => false,
                            'fallback_cb'    => false,
                        ));
                        ?>
                    </div>

                    <!-- Right Side Actions -->
                    <div class="nav-actions">
                        <?php if (is_user_logged_in()) : ?>
                            <a href="<?php echo esc_url(wp_logout_url(home_url())); ?>" class="btn-link">
                                <?php esc_html_e('Logout', 'multimian'); ?>
                            </a>
                        <?php else : ?>
                            <a href="<?php echo esc_url(wp_login_url()); ?>" class="btn-link">
                                <?php esc_html_e('Login', 'multimian'); ?>
                            </a>
                            <a href="<?php echo esc_url(wp_registration_url()); ?>" class="btn btn-primary">
                                <?php esc_html_e('Sign Up', 'multimian'); ?>
                            </a>
                        <?php endif; ?>

                        <!-- Dark Mode Toggle -->
                        <button id="dark-mode-toggle" class="dark-mode-toggle" aria-label="<?php esc_attr_e('Toggle dark mode', 'multimian'); ?>">
                            <span class="sun-icon">☀️</span>
                            <span class="moon-icon">🌙</span>
                        </button>
                    </div>

                    <!-- Mobile Menu Toggle -->
                    <button class="mobile-menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </button>
                </div>
            </div>
        </nav>

        <!-- Mobile Menu -->
        <div class="mobile-menu" id="mobile-menu">
            <div class="mobile-menu-content">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_id'        => 'mobile-primary-menu',
                    'menu_class'     => 'mobile-nav-menu',
                    'container'      => false,
                    'fallback_cb'    => false,
                ));
                ?>

                <div class="mobile-menu-actions">
                    <?php if (is_user_logged_in()) : ?>
                        <a href="<?php echo esc_url(wp_logout_url(home_url())); ?>" class="btn btn-secondary btn-block">
                            <?php esc_html_e('Logout', 'multimian'); ?>
                        </a>
                    <?php else : ?>
                        <a href="<?php echo esc_url(wp_login_url()); ?>" class="btn btn-secondary btn-block">
                            <?php esc_html_e('Login', 'multimian'); ?>
                        </a>
                        <a href="<?php echo esc_url(wp_registration_url()); ?>" class="btn btn-primary btn-block">
                            <?php esc_html_e('Sign Up', 'multimian'); ?>
                        </a>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </header><!-- #masthead -->

    <div id="content" class="site-content">
