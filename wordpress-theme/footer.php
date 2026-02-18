    </div><!-- #content -->

    <footer id="colophon" class="site-footer">
        <div class="footer-widgets">
            <div class="container">
                <div class="footer-widget-grid">
                    <?php for ($i = 1; $i <= 4; $i++) : ?>
                        <?php if (is_active_sidebar('footer-' . $i)) : ?>
                            <div class="footer-widget-column">
                                <?php dynamic_sidebar('footer-' . $i); ?>
                            </div>
                        <?php endif; ?>
                    <?php endfor; ?>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="container">
                <div class="footer-bottom-content">
                    <div class="copyright">
                        <p>&copy; <?php echo date('Y'); ?> <a href="<?php echo esc_url(home_url('/')); ?>"><?php bloginfo('name'); ?></a>. <?php esc_html_e('All rights reserved.', 'multimian'); ?></p>
                    </div>

                    <?php if (has_nav_menu('footer')) : ?>
                        <nav class="footer-navigation">
                            <?php
                            wp_nav_menu(array(
                                'theme_location' => 'footer',
                                'menu_class'     => 'footer-menu',
                                'container'      => false,
                                'depth'          => 1,
                            ));
                            ?>
                        </nav>
                    <?php endif; ?>

                    <div class="social-links">
                        <?php
                        $social_networks = array(
                            'facebook'  => 'Facebook',
                            'twitter'   => 'Twitter',
                            'instagram' => 'Instagram',
                            'linkedin'  => 'LinkedIn',
                            'github'    => 'GitHub',
                            'youtube'   => 'YouTube',
                        );

                        foreach ($social_networks as $network => $label) {
                            $url = get_theme_mod($network . '_url');
                            if ($url) {
                                printf(
                                    '<a href="%s" target="_blank" rel="noopener noreferrer" aria-label="%s" class="social-link social-%s">
                                        <i class="icon-%s"></i>
                                    </a>',
                                    esc_url($url),
                                    esc_attr($label),
                                    esc_attr($network),
                                    esc_attr($network)
                                );
                            }
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
