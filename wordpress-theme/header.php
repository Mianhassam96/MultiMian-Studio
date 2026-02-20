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

<header class="site-header">
    <nav class="navbar">
        <div class="container">
            <div class="navbar-content">
                <!-- Logo -->
                <div class="navbar-brand">
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="logo">
                        <span class="logo-multi">MULTI</span><span class="logo-mian">MIAN</span>
                    </a>
                </div>

                <!-- Desktop Navigation -->
                <div class="navbar-menu">
                    <ul class="nav-links">
                        <li><a href="<?php echo esc_url(home_url('/')); ?>">Home</a></li>
                        
                        <li class="dropdown">
                            <a href="<?php echo esc_url(home_url('/services')); ?>">Services</a>
                            <ul class="dropdown-menu">
                                <li><a href="<?php echo esc_url(home_url('/services/business-websites')); ?>">Business Websites</a></li>
                                <li><a href="<?php echo esc_url(home_url('/services/web-applications')); ?>">Web Applications</a></li>
                                <li><a href="<?php echo esc_url(home_url('/services/ecommerce')); ?>">E-Commerce</a></li>
                                <li><a href="<?php echo esc_url(home_url('/services/website-redesign')); ?>">Website Redesign</a></li>
                            </ul>
                        </li>
                        
                        <li><a href="<?php echo esc_url(home_url('/portfolio')); ?>">Portfolio</a></li>
                        <li><a href="<?php echo esc_url(home_url('/process')); ?>">Process</a></li>
                        <li><a href="<?php echo esc_url(home_url('/pricing')); ?>">Pricing</a></li>
                        <li><a href="<?php echo esc_url(home_url('/about')); ?>">About</a></li>
                        <li><a href="<?php echo esc_url(home_url('/contact')); ?>">Contact</a></li>
                    </ul>
                </div>

                <!-- Right Side Actions -->
                <div class="navbar-actions">
                    <!-- Theme Toggle -->
                    <button id="themeToggle" class="theme-toggle" aria-label="Toggle theme">
                        <svg class="sun-icon" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
                        </svg>
                        <svg class="moon-icon" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                        </svg>
                    </button>

                    <?php if (is_user_logged_in()) : ?>
                        <!-- User Menu -->
                        <div class="user-menu">
                            <button class="user-menu-toggle">
                                <img src="<?php echo esc_url(get_avatar_url(get_current_user_id())); ?>" alt="User" class="user-avatar">
                                <span><?php echo esc_html(wp_get_current_user()->display_name); ?></span>
                                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                                </svg>
                            </button>
                            <div class="user-dropdown">
                                <a href="<?php echo esc_url(home_url('/dashboard')); ?>">Dashboard</a>
                                <a href="<?php echo esc_url(home_url('/profile')); ?>">My Profile</a>
                                <a href="<?php echo esc_url(home_url('/settings')); ?>">Settings</a>
                                <a href="<?php echo esc_url(wp_logout_url(home_url())); ?>">Logout</a>
                            </div>
                        </div>
                    <?php else : ?>
                        <!-- Auth Buttons -->
                        <div class="auth-buttons">
                            <a href="<?php echo esc_url(home_url('/login')); ?>" class="btn btn-secondary btn-sm">Login</a>
                            <a href="<?php echo esc_url(home_url('/signup')); ?>" class="btn btn-primary btn-sm">Sign Up</a>
                        </div>
                    <?php endif; ?>

                    <!-- Mobile Menu Toggle -->
                    <button id="mobileMenuToggle" class="mobile-menu-toggle" aria-label="Toggle menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div id="mobileMenu" class="mobile-menu">
                <ul class="mobile-nav-links">
                    <li><a href="<?php echo esc_url(home_url('/')); ?>">Home</a></li>
                    <li><a href="<?php echo esc_url(home_url('/services')); ?>">Services</a></li>
                    <li><a href="<?php echo esc_url(home_url('/portfolio')); ?>">Portfolio</a></li>
                    <li><a href="<?php echo esc_url(home_url('/process')); ?>">Process</a></li>
                    <li><a href="<?php echo esc_url(home_url('/pricing')); ?>">Pricing</a></li>
                    <li><a href="<?php echo esc_url(home_url('/about')); ?>">About</a></li>
                    <li><a href="<?php echo esc_url(home_url('/contact')); ?>">Contact</a></li>
                    
                    <?php if (!is_user_logged_in()) : ?>
                        <li><a href="<?php echo esc_url(home_url('/login')); ?>" class="btn btn-secondary btn-sm">Login</a></li>
                        <li><a href="<?php echo esc_url(home_url('/signup')); ?>" class="btn btn-primary btn-sm">Sign Up</a></li>
                    <?php endif; ?>
                </ul>
            </div>
        </div>
    </nav>
</header>

<style>
/* Header Styles */
.site-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
}

.dark-mode .site-header {
    background: rgba(17, 24, 39, 0.95);
    border-bottom-color: rgba(255, 255, 255, 0.1);
}

.site-header.scrolled {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.navbar {
    padding: 1rem 0;
}

.navbar-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar-brand .logo {
    font-size: 1.5rem;
    font-weight: 800;
    display: flex;
    align-items: center;
}

.logo-multi {
    color: #3b82f6;
}

.logo-mian {
    color: #8b5cf6;
}

.navbar-menu {
    display: none;
}

@media (min-width: 1024px) {
    .navbar-menu {
        display: block;
    }
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-links li {
    position: relative;
}

.nav-links a {
    color: #374151;
    font-weight: 600;
    font-size: 0.875rem;
    transition: color 0.3s;
}

.dark-mode .nav-links a {
    color: #d1d5db;
}

.nav-links a:hover {
    color: #3b82f6;
}

.dropdown {
    position: relative;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    padding: 0.5rem 0;
    min-width: 200px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s;
    list-style: none;
    margin: 0;
}

.dark-mode .dropdown-menu {
    background: #1f2937;
}

.dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.dropdown-menu li {
    margin: 0;
}

.dropdown-menu a {
    display: block;
    padding: 0.75rem 1.5rem;
    color: #374151;
    font-size: 0.875rem;
}

.dark-mode .dropdown-menu a {
    color: #d1d5db;
}

.dropdown-menu a:hover {
    background: #f3f4f6;
    color: #3b82f6;
}

.dark-mode .dropdown-menu a:hover {
    background: #374151;
}

.navbar-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.theme-toggle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #e5e7eb;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
}

.dark-mode .theme-toggle {
    background: #374151;
    border-color: #4b5563;
}

.theme-toggle:hover {
    border-color: #3b82f6;
    transform: scale(1.1);
}

.sun-icon {
    display: block;
    color: #f59e0b;
}

.dark-mode .sun-icon {
    display: none;
}

.moon-icon {
    display: none;
    color: #8b5cf6;
}

.dark-mode .moon-icon {
    display: block;
}

.auth-buttons {
    display: none;
    gap: 0.75rem;
}

@media (min-width: 1024px) {
    .auth-buttons {
        display: flex;
    }
}

.btn-sm {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
}

.user-menu {
    position: relative;
}

.user-menu-toggle {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border: 2px solid #e5e7eb;
    border-radius: 9999px;
    background: white;
    cursor: pointer;
    transition: all 0.3s;
}

.dark-mode .user-menu-toggle {
    background: #374151;
    border-color: #4b5563;
}

.user-menu-toggle:hover {
    border-color: #3b82f6;
}

.user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
}

.user-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 0.5rem;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    padding: 0.5rem 0;
    min-width: 180px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s;
}

.dark-mode .user-dropdown {
    background: #1f2937;
}

.user-dropdown a {
    display: block;
    padding: 0.75rem 1.5rem;
    color: #374151;
    font-size: 0.875rem;
    transition: all 0.3s;
}

.dark-mode .user-dropdown a {
    color: #d1d5db;
}

.user-dropdown a:hover {
    background: #f3f4f6;
    color: #3b82f6;
}

.dark-mode .user-dropdown a:hover {
    background: #374151;
}

.mobile-menu-toggle {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    cursor: pointer;
}

@media (min-width: 1024px) {
    .mobile-menu-toggle {
        display: none;
    }
}

.mobile-menu-toggle span {
    width: 24px;
    height: 2px;
    background: #374151;
    transition: all 0.3s;
}

.dark-mode .mobile-menu-toggle span {
    background: #d1d5db;
}

.mobile-menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-toggle.active span:nth-child(2) {
    opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
}

.mobile-menu {
    display: none;
    padding: 1rem 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.dark-mode .mobile-menu {
    border-top-color: rgba(255, 255, 255, 0.1);
}

.mobile-menu.active {
    display: block;
}

@media (min-width: 1024px) {
    .mobile-menu {
        display: none !important;
    }
}

.mobile-nav-links {
    list-style: none;
    margin: 0;
    padding: 0;
}

.mobile-nav-links li {
    margin-bottom: 0.5rem;
}

.mobile-nav-links a {
    display: block;
    padding: 0.75rem 1rem;
    color: #374151;
    font-weight: 600;
    border-radius: 0.5rem;
    transition: all 0.3s;
}

.dark-mode .mobile-nav-links a {
    color: #d1d5db;
}

.mobile-nav-links a:hover {
    background: #f3f4f6;
    color: #3b82f6;
}

.dark-mode .mobile-nav-links a:hover {
    background: #374151;
}

.mobile-nav-links .btn {
    width: 100%;
    text-align: center;
    margin-top: 0.5rem;
}
</style>
