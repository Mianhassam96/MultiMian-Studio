<?php
/**
 * The template for displaying the front page
 *
 * @package MultiMian_Pro
 */

get_header();
?>

<main id="primary" class="site-main">

    <!-- Hero Section -->
    <section class="hero-section">
        <div class="hero-background">
            <div class="hero-grid"></div>
            <div class="hero-gradient hero-gradient-1"></div>
            <div class="hero-gradient hero-gradient-2"></div>
        </div>

        <div class="container">
            <div class="hero-content animate-on-scroll">
                <div class="hero-badge">
                    <span class="pulse-dot"></span>
                    <span><?php esc_html_e('Available for new projects', 'multimian'); ?></span>
                </div>

                <h1 class="hero-title">
                    <?php echo esc_html(get_theme_mod('hero_title', 'Build High-Performance Websites That Grow Your Business')); ?>
                </h1>

                <p class="hero-subtitle">
                    <?php echo esc_html(get_theme_mod('hero_subtitle', 'MultiMian is a professional web development studio founded by Mian Hassam, specializing in modern, scalable, and SEO-optimized websites built with React, Next.js, and Node.js.')); ?>
                </p>

                <div class="hero-tech-stack">
                    <span class="tech-pill">Custom Web Development</span>
                    <span class="tech-pill">SaaS Applications</span>
                    <span class="tech-pill">Modern Business Websites</span>
                </div>

                <div class="hero-cta">
                    <a href="<?php echo esc_url(get_theme_mod('hero_cta_url', '/contact')); ?>" class="btn btn-primary btn-lg">
                        <span>🚀</span>
                        <span><?php echo esc_html(get_theme_mod('hero_cta_text', 'Start Your Project')); ?></span>
                    </a>
                    <a href="<?php echo esc_url(get_post_type_archive_link('portfolio')); ?>" class="btn btn-secondary btn-lg">
                        <span>📁</span>
                        <span><?php esc_html_e('View Portfolio', 'multimian'); ?></span>
                    </a>
                </div>

                <div class="hero-stats">
                    <div class="stat-item">
                        <div class="stat-icon">⭐</div>
                        <div class="stat-number">5.0</div>
                        <div class="stat-label">50+ Projects</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon">👥</div>
                        <div class="stat-number">30+</div>
                        <div class="stat-label">Happy Clients</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon">🏆</div>
                        <div class="stat-number">5+</div>
                        <div class="stat-label">Years Experience</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon">💯</div>
                        <div class="stat-number">100%</div>
                        <div class="stat-label">Satisfaction</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="services-section section">
        <div class="section-background"></div>
        <div class="container">
            <div class="section-header animate-on-scroll">
                <span class="section-badge">Our Expertise</span>
                <h2 class="section-title">
                    Comprehensive <span class="gradient-text">Digital Solutions</span>
                </h2>
                <p class="section-description">
                    From concept to deployment, we deliver cutting-edge web solutions that drive business growth and user engagement
                </p>
            </div>

            <div class="services-grid">
                <?php
                $services = new WP_Query(array(
                    'post_type'      => 'service',
                    'posts_per_page' => 4,
                    'orderby'        => 'menu_order',
                    'order'          => 'ASC',
                ));

                if ($services->have_posts()) :
                    while ($services->have_posts()) : $services->the_post();
                        $icon = get_field('service_icon') ?: '🌐';
                        $features = get_field('service_features');
                        ?>
                        <div class="service-card animate-on-scroll">
                            <div class="service-icon"><?php echo esc_html($icon); ?></div>
                            <h3 class="service-title"><?php the_title(); ?></h3>
                            <p class="service-description"><?php echo esc_html(get_the_excerpt()); ?></p>
                            <?php if ($features) : ?>
                                <div class="service-features">
                                    <?php foreach ($features as $feature) : ?>
                                        <span class="feature-tag"><?php echo esc_html($feature['feature']); ?></span>
                                    <?php endforeach; ?>
                                </div>
                            <?php endif; ?>
                        </div>
                    <?php
                    endwhile;
                    wp_reset_postdata();
                endif;
                ?>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features-section section">
        <div class="section-background">
            <div class="floating-gradient floating-gradient-1"></div>
            <div class="floating-gradient floating-gradient-2"></div>
        </div>
        <div class="container">
            <div class="section-header animate-on-scroll">
                <span class="section-badge">Why Choose Us</span>
                <h2 class="section-title">
                    Built for <span class="gradient-text">Excellence</span>
                </h2>
                <p class="section-description">
                    We combine cutting-edge technology with proven expertise to deliver exceptional results
                </p>
            </div>

            <div class="features-grid">
                <?php
                $features = array(
                    array('icon' => '⚡', 'title' => 'Lightning Fast', 'desc' => 'Optimized for speed and performance with advanced caching and CDN integration'),
                    array('icon' => '🎨', 'title' => 'Beautiful Design', 'desc' => 'Stunning, modern designs that captivate users and enhance brand identity'),
                    array('icon' => '📱', 'title' => 'Fully Responsive', 'desc' => 'Perfect experience across all devices with mobile-first design approach'),
                    array('icon' => '🔒', 'title' => 'Secure & Reliable', 'desc' => 'Enterprise-grade security with SSL, data encryption, and regular backups'),
                    array('icon' => '🚀', 'title' => 'SEO Optimized', 'desc' => 'Built-in SEO best practices to help you rank higher on search engines'),
                    array('icon' => '💼', 'title' => 'Business Growth', 'desc' => 'Strategic solutions designed to drive conversions and business success'),
                );

                foreach ($features as $feature) :
                    ?>
                    <div class="feature-card animate-on-scroll">
                        <div class="feature-icon"><?php echo esc_html($feature['icon']); ?></div>
                        <h3 class="feature-title"><?php echo esc_html($feature['title']); ?></h3>
                        <p class="feature-description"><?php echo esc_html($feature['desc']); ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Portfolio Section -->
    <section class="portfolio-section section">
        <div class="container">
            <div class="section-header animate-on-scroll">
                <span class="section-badge">Our Work</span>
                <h2 class="section-title">
                    Success <span class="gradient-text">Stories</span>
                </h2>
                <p class="section-description">
                    Discover how we&apos;ve helped businesses transform their digital presence and achieve remarkable growth
                </p>
            </div>

            <div class="portfolio-stats">
                <div class="stat-card animate-on-scroll">
                    <div class="stat-icon">🚀</div>
                    <div class="stat-number">50+</div>
                    <div class="stat-label">Projects Completed</div>
                </div>
                <div class="stat-card animate-on-scroll">
                    <div class="stat-icon">😊</div>
                    <div class="stat-number">30+</div>
                    <div class="stat-label">Happy Clients</div>
                </div>
                <div class="stat-card animate-on-scroll">
                    <div class="stat-icon">⭐</div>
                    <div class="stat-number">5+</div>
                    <div class="stat-label">Years Experience</div>
                </div>
            </div>

            <div class="portfolio-grid">
                <?php
                $portfolio = new WP_Query(array(
                    'post_type'      => 'portfolio',
                    'posts_per_page' => 6,
                    'orderby'        => 'date',
                    'order'          => 'DESC',
                ));

                if ($portfolio->have_posts()) :
                    while ($portfolio->have_posts()) : $portfolio->the_post();
                        ?>
                        <article class="portfolio-item animate-on-scroll">
                            <?php if (has_post_thumbnail()) : ?>
                                <div class="portfolio-image">
                                    <?php the_post_thumbnail('multimian-portfolio'); ?>
                                    <div class="portfolio-overlay">
                                        <a href="<?php the_permalink(); ?>" class="portfolio-link">
                                            <?php esc_html_e('View Project', 'multimian'); ?>
                                        </a>
                                    </div>
                                </div>
                            <?php endif; ?>
                            <div class="portfolio-content">
                                <h3 class="portfolio-title">
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </h3>
                                <p class="portfolio-excerpt"><?php echo esc_html(get_the_excerpt()); ?></p>
                            </div>
                        </article>
                    <?php
                    endwhile;
                    wp_reset_postdata();
                endif;
                ?>
            </div>

            <div class="text-center animate-on-scroll">
                <a href="<?php echo esc_url(get_post_type_archive_link('portfolio')); ?>" class="btn btn-primary btn-lg">
                    <span>📁</span>
                    <span><?php esc_html_e('View Full Portfolio', 'multimian'); ?></span>
                </a>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section section">
        <div class="section-background">
            <div class="floating-gradient floating-gradient-3"></div>
            <div class="floating-gradient floating-gradient-4"></div>
        </div>
        <div class="container">
            <div class="section-header animate-on-scroll">
                <span class="section-badge">Client Testimonials</span>
                <h2 class="section-title">
                    What Our <span class="gradient-text">Clients Say</span>
                </h2>
                <p class="section-description">
                    Don&apos;t just take our word for it - hear from the businesses we&apos;ve helped transform
                </p>
            </div>

            <div class="testimonials-grid">
                <?php
                $testimonials = new WP_Query(array(
                    'post_type'      => 'testimonial',
                    'posts_per_page' => 3,
                    'orderby'        => 'rand',
                ));

                if ($testimonials->have_posts()) :
                    while ($testimonials->have_posts()) : $testimonials->the_post();
                        $client_name = get_field('client_name') ?: get_the_title();
                        $client_role = get_field('client_role');
                        $rating = get_field('rating') ?: 5;
                        ?>
                        <div class="testimonial-card animate-on-scroll">
                            <div class="testimonial-rating">
                                <?php for ($i = 0; $i < $rating; $i++) : ?>
                                    <span class="star">★</span>
                                <?php endfor; ?>
                            </div>
                            <div class="testimonial-content">
                                <?php the_content(); ?>
                            </div>
                            <div class="testimonial-author">
                                <?php if (has_post_thumbnail()) : ?>
                                    <div class="author-avatar">
                                        <?php the_post_thumbnail('thumbnail'); ?>
                                    </div>
                                <?php else : ?>
                                    <div class="author-avatar author-initials">
                                        <?php echo esc_html(substr($client_name, 0, 2)); ?>
                                    </div>
                                <?php endif; ?>
                                <div class="author-info">
                                    <div class="author-name"><?php echo esc_html($client_name); ?></div>
                                    <?php if ($client_role) : ?>
                                        <div class="author-role"><?php echo esc_html($client_role); ?></div>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    <?php
                    endwhile;
                    wp_reset_postdata();
                endif;
                ?>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
        <div class="cta-background">
            <div class="cta-grid"></div>
            <div class="cta-gradient cta-gradient-1"></div>
            <div class="cta-gradient cta-gradient-2"></div>
        </div>
        <div class="container">
            <div class="cta-content animate-on-scroll">
                <span class="cta-badge">Ready to Get Started?</span>
                <h2 class="cta-title">
                    Let&apos;s Build Something <span class="gradient-text-light">Amazing Together</span>
                </h2>
                <p class="cta-description">
                    Transform your digital presence with our expert development team. From concept to launch, we&apos;re here to bring your vision to life with cutting-edge technology and exceptional design.
                </p>
                <div class="cta-buttons">
                    <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact'))); ?>" class="btn btn-light btn-lg">
                        <span>🚀</span>
                        <span><?php esc_html_e('Start Your Project', 'multimian'); ?></span>
                    </a>
                    <a href="<?php echo esc_url(get_post_type_archive_link('portfolio')); ?>" class="btn btn-outline-light btn-lg">
                        <span>📁</span>
                        <span><?php esc_html_e('View Our Work', 'multimian'); ?></span>
                    </a>
                </div>
            </div>
        </div>
    </section>

</main><!-- #primary -->

<?php
get_footer();
