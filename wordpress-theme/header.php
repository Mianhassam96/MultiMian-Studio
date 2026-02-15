<?php
/**
 * The header template
 *
 * @package MultiMian
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: '#2563EB',
                    }
                }
            }
        }
    </script>
    
    <?php wp_head(); ?>
</head>

<body <?php body_class('bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300'); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site min-h-screen flex flex-col">
    <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'multimian'); ?></a>

    <header id="masthead" class="site-header fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
        <div class="container mx-auto px-4">
            <nav class="flex items-center justify-between h-20">
                <!-- Logo -->
                <div class="flex items-center">
                    <?php if (has_custom_logo()) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <a href="<?php echo esc_url(home_url('/')); ?>" class="text-3xl md:text-4xl font-bold tracking-wider hover:scale-105 transition-transform duration-300" style="font-family: 'Space Grotesk', sans-serif;">
                            <span class="text-blue-600 dark:text-blue-400">MULTI</span><span class="text-gray-900 dark:text-white">MIAN</span>
                        </a>
                    <?php endif; ?>
                </div>

                <!-- Desktop Navigation -->
                <div class="hidden lg:flex items-center space-x-8">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'container' => false,
                        'menu_class' => 'flex items-center space-x-8',
                        'fallback_cb' => false,
                    ));
                    ?>
                    <a href="<?php echo esc_url(home_url('/contact')); ?>" class="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30">
                        Get Free Consultation
                    </a>
                    
                    <!-- Dark Mode Toggle -->
                    <button id="theme-toggle" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle dark mode">
                        <svg class="w-5 h-5 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>
                        </svg>
                        <svg class="w-5 h-5 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                        </svg>
                    </button>
                </div>

                <!-- Mobile Menu Button -->
                <button id="mobile-menu-toggle" class="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle menu">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </nav>

            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden lg:hidden pb-6">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container' => false,
                    'menu_class' => 'flex flex-col space-y-4',
                    'fallback_cb' => false,
                ));
                ?>
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="block text-center px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 mt-4">
                    Get Free Consultation
                </a>
            </div>
        </div>
    </header>

    <div id="content" class="site-content flex-grow pt-20">
