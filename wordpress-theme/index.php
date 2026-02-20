<?php get_header(); ?>

<!-- Hero Section -->
<section class="hero-section">
    <div class="hero-bg"></div>
    <div class="hero-content">
        <!-- Badge -->
        <div class="hero-badge animate-fade-in">
            <span class="status-dot"></span>
            <span>Available for Projects</span>
            <span style="padding: 0.25rem 0.75rem; background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white; border-radius: 1rem; font-size: 0.75rem; font-weight: 800;">2026</span>
        </div>

        <!-- Main Heading -->
        <h1 class="hero-title animate-fade-in">
            <span class="hero-title-line1">Transform Ideas Into</span>
            <span class="hero-title-line2">Digital Reality</span>
        </h1>

        <div class="hero-divider"></div>

        <!-- Description -->
        <p class="hero-description animate-fade-in">
            We don't just build websites — we create <span class="highlight">digital experiences</span> that 
            <span class="highlight">captivate audiences</span> and <span class="highlight">skyrocket your growth</span>.
        </p>

        <!-- Tech Stack -->
        <div class="hero-tech-stack animate-fade-in">
            <div class="tech-badge">
                <span style="font-size: 1.5rem;">⚛️</span>
                <span>React</span>
            </div>
            <div class="tech-badge" style="background: linear-gradient(135deg, #374151, #111827);">
                <span style="font-size: 1.5rem;">▲</span>
                <span>Next.js</span>
            </div>
            <div class="tech-badge" style="background: linear-gradient(135deg, #0ea5e9, #06b6d4);">
                <span style="font-size: 1.5rem;">🎨</span>
                <span>Tailwind</span>
            </div>
            <div class="tech-badge" style="background: linear-gradient(135deg, #2563eb, #4f46e5);">
                <span style="font-size: 1.5rem;">⚡</span>
                <span>TypeScript</span>
            </div>
        </div>

        <!-- CTA Buttons -->
        <div class="hero-cta animate-fade-in">
            <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn btn-primary">
                <span style="font-size: 1.25rem;">🚀</span>
                <span>Start Your Project</span>
                <span>→</span>
            </a>
            <a href="<?php echo esc_url(home_url('/portfolio')); ?>" class="btn btn-secondary">
                <span>View Portfolio</span>
                <span style="font-size: 1.25rem;">📁</span>
            </a>
        </div>

        <!-- Stats -->
        <div class="hero-stats animate-fade-in">
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
</section>

<!-- Services Section -->
<section class="section" style="background: linear-gradient(180deg, #f9fafb 0%, #ffffff 100%);">
    <div class="container">
        <div class="section-header animate-fade-in">
            <span class="section-badge">✨ Our Expertise</span>
            <h2 class="section-title">
                Comprehensive <span class="gradient-text">Digital Solutions</span>
            </h2>
            <p class="section-description">
                From concept to deployment, we deliver cutting-edge web solutions that drive business growth and user engagement
            </p>
        </div>

        <div class="services-grid">
            <div class="service-card animate-fade-in">
                <span class="service-icon">🌐</span>
                <h3 class="service-title">Business Websites</h3>
                <p class="service-description">Professional websites that establish your online presence and convert visitors into customers</p>
                <div class="service-features">
                    <span class="feature-tag">Custom Design</span>
                    <span class="feature-tag">SEO Ready</span>
                    <span class="feature-tag">Fast Loading</span>
                    <span class="feature-tag">Mobile Responsive</span>
                </div>
            </div>

            <div class="service-card animate-fade-in">
                <span class="service-icon">⚡</span>
                <h3 class="service-title">SaaS Platforms</h3>
                <p class="service-description">Scalable subscription-based applications with advanced features and integrations</p>
                <div class="service-features">
                    <span class="feature-tag">Multi-tenant</span>
                    <span class="feature-tag">Subscription Billing</span>
                    <span class="feature-tag">Admin Dashboard</span>
                    <span class="feature-tag">API Integration</span>
                </div>
            </div>

            <div class="service-card animate-fade-in">
                <span class="service-icon">🛒</span>
                <h3 class="service-title">E-Commerce Solutions</h3>
                <p class="service-description">Complete online stores with secure payment processing and inventory management</p>
                <div class="service-features">
                    <span class="feature-tag">Payment Gateway</span>
                    <span class="feature-tag">Product Management</span>
                    <span class="feature-tag">Order Tracking</span>
                    <span class="feature-tag">Analytics</span>
                </div>
            </div>

            <div class="service-card animate-fade-in">
                <span class="service-icon">📱</span>
                <h3 class="service-title">Web Applications</h3>
                <p class="service-description">Custom web applications tailored to your specific business requirements</p>
                <div class="service-features">
                    <span class="feature-tag">Custom Features</span>
                    <span class="feature-tag">Database Design</span>
                    <span class="feature-tag">User Authentication</span>
                    <span class="feature-tag">Cloud Hosting</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="section" style="background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899); padding: 5rem 0;">
    <div class="container">
        <div class="section-header" style="color: white;">
            <h2 class="section-title" style="color: white; font-size: 3rem;">
                Ready to Transform Your Business?
            </h2>
            <p class="section-description" style="color: rgba(255,255,255,0.9); font-size: 1.5rem; margin-bottom: 2rem;">
                Let's build something extraordinary together. From concept to launch, we bring your vision to life.
            </p>
            <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn" style="background: white; color: var(--primary); font-size: 1.25rem; padding: 1.25rem 3rem;">
                <span style="font-size: 1.5rem;">🚀</span>
                <span>Start Your Project</span>
                <span>→</span>
            </a>
            <p style="margin-top: 1.5rem; color: rgba(255,255,255,0.8); font-size: 0.875rem;">
                ✨ Free Consultation • Fast Delivery • 100% Satisfaction
            </p>
        </div>
    </div>
</section>

<?php get_footer(); ?>
