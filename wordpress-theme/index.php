<?php
/**
 * The main template file
 *
 * @package MultiMian
 */

get_header();
?>

<!-- Hero Section -->
<section class="hero-section">
    <div class="hero-background">
        <div class="hero-orb hero-orb-1"></div>
        <div class="hero-orb hero-orb-2"></div>
        <div class="hero-grid"></div>
        <div class="hero-particles">
            <?php for ($i = 0; $i < 15; $i++) : ?>
                <div class="particle" style="left: <?php echo rand(0, 100); ?>%; top: <?php echo rand(0, 100); ?>%;"></div>
            <?php endfor; ?>
        </div>
    </div>

    <div class="container hero-content">
        <!-- Badge -->
        <div class="hero-badge fade-in">
            <div class="status-dot"></div>
            <span>Available for Projects</span>
            <span class="year-badge">2026</span>
        </div>

        <!-- Main Heading -->
        <h1 class="hero-title fade-in">
            <span class="hero-title-line">Build Your</span>
            <span class="hero-title-gradient">Digital Future</span>
        </h1>

        <div class="hero-line fade-in"></div>

        <!-- Description -->
        <p class="hero-description fade-in">
            We craft <span class="text-highlight">stunning websites</span> and <span class="text-highlight">powerful web applications</span> that drive real business results.
        </p>

        <!-- Tech Stack -->
        <div class="hero-tech fade-in">
            <div class="tech-badge tech-react">⚛️ React</div>
            <div class="tech-badge tech-nextjs">▲ Next.js</div>
            <div class="tech-badge tech-tailwind">🎨 Tailwind</div>
            <div class="tech-badge tech-typescript">⚡ TypeScript</div>
        </div>

        <!-- CTA Buttons -->
        <div class="hero-cta fade-in">
            <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn btn-primary btn-lg">
                <span class="btn-icon">🚀</span>
                <span>Start Your Project</span>
                <svg class="btn-arrow" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
            </a>
            <a href="<?php echo esc_url(home_url('/portfolio')); ?>" class="btn btn-secondary btn-lg">
                <span>View Portfolio</span>
                <span class="btn-icon">📁</span>
            </a>
        </div>

        <!-- Stats -->
        <div class="hero-stats fade-in">
            <div class="stat-card">
                <div class="stat-icon">⭐</div>
                <div class="stat-number">50+</div>
                <div class="stat-label">Projects Completed</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">👥</div>
                <div class="stat-number">30+</div>
                <div class="stat-label">Happy Clients</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">🏆</div>
                <div class="stat-number">5+</div>
                <div class="stat-label">Years Experience</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">💯</div>
                <div class="stat-number">100%</div>
                <div class="stat-label">Satisfaction</div>
            </div>
        </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
        <span>SCROLL</span>
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
    </div>
</section>

<!-- Services Section -->
<section class="services-section">
    <div class="container">
        <div class="section-header">
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
            $services = array(
                array(
                    'icon' => '🌐',
                    'title' => 'Business Websites',
                    'description' => 'Professional websites that establish your online presence and convert visitors into customers',
                    'features' => array('Custom Design', 'SEO Ready', 'Fast Loading', 'Mobile Responsive'),
                    'color' => 'blue'
                ),
                array(
                    'icon' => '⚡',
                    'title' => 'SaaS Platforms',
                    'description' => 'Scalable subscription-based applications with advanced features and integrations',
                    'features' => array('Multi-tenant', 'Subscription Billing', 'Admin Dashboard', 'API Integration'),
                    'color' => 'purple'
                ),
                array(
                    'icon' => '🛒',
                    'title' => 'E-Commerce Solutions',
                    'description' => 'Complete online stores with secure payment processing and inventory management',
                    'features' => array('Payment Gateway', 'Product Management', 'Order Tracking', 'Analytics'),
                    'color' => 'green'
                ),
                array(
                    'icon' => '📱',
                    'title' => 'Web Applications',
                    'description' => 'Custom web applications tailored to your specific business requirements',
                    'features' => array('Custom Features', 'Database Design', 'User Authentication', 'Cloud Hosting'),
                    'color' => 'orange'
                )
            );

            foreach ($services as $service) :
            ?>
                <div class="service-card service-<?php echo esc_attr($service['color']); ?>">
                    <div class="service-icon"><?php echo $service['icon']; ?></div>
                    <h3 class="service-title"><?php echo esc_html($service['title']); ?></h3>
                    <p class="service-description"><?php echo esc_html($service['description']); ?></p>
                    <div class="service-features">
                        <?php foreach ($service['features'] as $feature) : ?>
                            <span class="feature-tag"><?php echo esc_html($feature); ?></span>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Features Section -->
<section class="features-section">
    <div class="features-background">
        <div class="feature-orb feature-orb-1"></div>
        <div class="feature-orb feature-orb-2"></div>
    </div>

    <div class="container">
        <div class="section-header">
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
                array('icon' => '⚡', 'title' => 'Lightning Fast', 'description' => 'Optimized for speed and performance with advanced caching and CDN integration'),
                array('icon' => '🎨', 'title' => 'Beautiful Design', 'description' => 'Stunning, modern designs that captivate users and enhance brand identity'),
                array('icon' => '📱', 'title' => 'Fully Responsive', 'description' => 'Perfect experience across all devices with mobile-first design approach'),
                array('icon' => '🔒', 'title' => 'Secure & Reliable', 'description' => 'Enterprise-grade security with SSL, data encryption, and regular backups'),
                array('icon' => '🚀', 'title' => 'SEO Optimized', 'description' => 'Built-in SEO best practices to help you rank higher on search engines'),
                array('icon' => '💼', 'title' => 'Business Growth', 'description' => 'Strategic solutions designed to drive conversions and business success')
            );

            foreach ($features as $feature) :
            ?>
                <div class="feature-card">
                    <div class="feature-icon"><?php echo $feature['icon']; ?></div>
                    <h3 class="feature-title"><?php echo esc_html($feature['title']); ?></h3>
                    <p class="feature-description"><?php echo esc_html($feature['description']); ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="cta-section">
    <div class="cta-background">
        <div class="cta-grid"></div>
        <div class="cta-orb cta-orb-1"></div>
        <div class="cta-orb cta-orb-2"></div>
    </div>

    <div class="container">
        <div class="cta-content">
            <span class="cta-badge">🎯 Ready to Transform Your Business?</span>
            <h2 class="cta-title">
                Let's Build Something <span class="cta-gradient">Extraordinary</span>
            </h2>
            <p class="cta-description">
                Transform your digital presence with our expert development team. From concept to launch, we bring your vision to life with cutting-edge technology and exceptional design.
            </p>

            <div class="cta-buttons">
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn btn-white btn-lg">
                    <span class="btn-icon">🚀</span>
                    <span>Start Your Project</span>
                    <svg class="btn-arrow" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                </a>
                <a href="<?php echo esc_url(home_url('/portfolio')); ?>" class="btn btn-outline btn-lg">
                    <span class="btn-icon">📁</span>
                    <span>View Our Work</span>
                </a>
            </div>

            <!-- Trust Indicators -->
            <div class="trust-indicators">
                <div class="trust-item">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Free Consultation</span>
                </div>
                <div class="trust-item">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Fast Delivery</span>
                </div>
                <div class="trust-item">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>100% Satisfaction</span>
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
