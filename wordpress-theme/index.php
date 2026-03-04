<?php
/**
 * Premium Startup-Level Homepage
 * Following billion-dollar startup UI patterns
 */

get_header(); ?>

<!-- Announcement Bar -->
<div class="announcement-bar">
    <div class="announcement-content">
        <span class="announcement-icon">🚀</span>
        <span class="announcement-text">New: AI-Powered Development Tools Now Available</span>
        <a href="<?php echo home_url('/services'); ?>" class="announcement-link">Explore Now →</a>
    </div>
</div>

<!-- Premium Hero Section -->
<section class="premium-hero">
    <div class="hero-background">
        <div class="hero-grid"></div>
        <div class="hero-glow hero-glow-1"></div>
        <div class="hero-glow hero-glow-2"></div>
    </div>
    
    <div class="container hero-container">
        <div class="hero-content">
            <div class="hero-badge">
                <span class="badge-dot"></span>
                <span>Available for New Projects</span>
            </div>
            
            <h1 class="hero-title">
                All Powerful Web Tools<br/>
                <span class="gradient-text">in One Platform</span>
            </h1>
            
            <p class="hero-subtitle">
                A modern platform for creators, developers, and innovators. Build faster, scale smarter, and deliver exceptional digital experiences.
            </p>
            
            <div class="hero-buttons">
                <a href="<?php echo home_url('/contact'); ?>" class="btn-hero-primary">
                    <span>Explore Tools</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </a>
                <a href="<?php echo home_url('/portfolio'); ?>" class="btn-hero-secondary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                    <span>View Platform</span>
                </a>
            </div>
            
            <div class="hero-trust">
                <div class="trust-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Free Consultation</span>
                </div>
                <div class="trust-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Fast Delivery</span>
                </div>
                <div class="trust-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>100% Satisfaction</span>
                </div>
            </div>
        </div>
        
        <div class="hero-visual">
            <div class="floating-card card-1">
                <div class="card-icon">⚡</div>
                <div class="card-text">Lightning Fast</div>
            </div>
            <div class="floating-card card-2">
                <div class="card-icon">🎨</div>
                <div class="card-text">Beautiful Design</div>
            </div>
            <div class="floating-card card-3">
                <div class="card-icon">🔒</div>
                <div class="card-text">Secure & Reliable</div>
            </div>
            <div class="hero-dashboard">
                <div class="dashboard-header">
                    <div class="dashboard-dots">
                        <span></span><span></span><span></span>
                    </div>
                    <div class="dashboard-title">MultiMian Platform</div>
                </div>
                <div class="dashboard-content">
                    <div class="dashboard-stat">
                        <div class="stat-value">50+</div>
                        <div class="stat-label">Projects</div>
                    </div>
                    <div class="dashboard-stat">
                        <div class="stat-value">30+</div>
                        <div class="stat-label">Clients</div>
                    </div>
                    <div class="dashboard-stat">
                        <div class="stat-value">5+</div>
                        <div class="stat-label">Years</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Social Proof Section -->
<section class="social-proof">
    <div class="container">
        <p class="social-proof-text">Trusted by creators and developers worldwide</p>
        <div class="social-proof-stats">
            <div class="proof-stat">
                <div class="proof-number">50+</div>
                <div class="proof-label">Powerful Tools</div>
            </div>
            <div class="proof-stat">
                <div class="proof-number">1000+</div>
                <div class="proof-label">Active Users</div>
            </div>
            <div class="proof-stat">
                <div class="proof-number">99.9%</div>
                <div class="proof-label">Uptime</div>
            </div>
            <div class="proof-stat">
                <div class="proof-number">24/7</div>
                <div class="proof-label">Support</div>
            </div>
        </div>
    </div>
</section>

<!-- Tools Overview Section -->
<section class="section tools-overview">
    <div class="container">
        <div class="section-header">
            <div class="section-badge">🛠️ Our Services</div>
            <h2 class="section-title-large">Comprehensive <span class="gradient-text">Digital Solutions</span></h2>
            <p class="section-subtitle-large">Everything you need to build, launch, and scale your digital presence</p>
        </div>
        
        <div class="tools-grid">
            <div class="tool-card">
                <div class="tool-icon">🌐</div>
                <h3 class="tool-title">Business Websites</h3>
                <p class="tool-description">Professional websites that convert visitors into customers with modern design and SEO optimization</p>
                <div class="tool-features">
                    <span class="feature-tag">Custom Design</span>
                    <span class="feature-tag">SEO Ready</span>
                    <span class="feature-tag">Fast Loading</span>
                </div>
            </div>
            
            <div class="tool-card">
                <div class="tool-icon">⚡</div>
                <h3 class="tool-title">SaaS Platforms</h3>
                <p class="tool-description">Scalable subscription-based applications with advanced features and seamless integrations</p>
                <div class="tool-features">
                    <span class="feature-tag">Multi-tenant</span>
                    <span class="feature-tag">Billing</span>
                    <span class="feature-tag">Analytics</span>
                </div>
            </div>
            
            <div class="tool-card">
                <div class="tool-icon">🛒</div>
                <h3 class="tool-title">E-Commerce</h3>
                <p class="tool-description">Complete online stores with secure payments and inventory management systems</p>
                <div class="tool-features">
                    <span class="feature-tag">Payments</span>
                    <span class="feature-tag">Inventory</span>
                    <span class="feature-tag">Orders</span>
                </div>
            </div>
            
            <div class="tool-card">
                <div class="tool-icon">📱</div>
                <h3 class="tool-title">Web Applications</h3>
                <p class="tool-description">Custom web applications tailored to your specific business requirements and workflows</p>
                <div class="tool-features">
                    <span class="feature-tag">Custom</span>
                    <span class="feature-tag">Scalable</span>
                    <span class="feature-tag">Secure</span>
                </div>
            </div>
            
            <div class="tool-card">
                <div class="tool-icon">🎨</div>
                <h3 class="tool-title">UI/UX Design</h3>
                <p class="tool-description">Beautiful, user-centered designs that enhance brand identity and user experience</p>
                <div class="tool-features">
                    <span class="feature-tag">Modern</span>
                    <span class="feature-tag">Responsive</span>
                    <span class="feature-tag">Accessible</span>
                </div>
            </div>
            
            <div class="tool-card">
                <div class="tool-icon">🚀</div>
                <h3 class="tool-title">Performance</h3>
                <p class="tool-description">Lightning-fast websites optimized for speed, SEO, and exceptional user experience</p>
                <div class="tool-features">
                    <span class="feature-tag">Fast</span>
                    <span class="feature-tag">Optimized</span>
                    <span class="feature-tag">CDN</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Feature Showcase Section -->
<section class="feature-showcase">
    <div class="container">
        <div class="feature-row">
            <div class="feature-content">
                <div class="feature-badge">⚡ Speed</div>
                <h2 class="feature-title">Lightning Fast Performance</h2>
                <p class="feature-description">Our optimized infrastructure ensures your website loads in milliseconds, providing an exceptional user experience that keeps visitors engaged and boosts conversions.</p>
                <ul class="feature-list">
                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Advanced caching strategies</li>
                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Global CDN distribution</li>
                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Optimized code delivery</li>
                </ul>
            </div>
            <div class="feature-visual">
                <div class="visual-card">
                    <div class="visual-header">Performance Metrics</div>
                    <div class="visual-stats">
                        <div class="visual-stat">
                            <div class="stat-bar" style="width: 95%; background: linear-gradient(90deg, #10b981, #059669);"></div>
                            <div class="stat-info">
                                <span>Speed Score</span>
                                <span>95/100</span>
                            </div>
                        </div>
                        <div class="visual-stat">
                            <div class="stat-bar" style="width: 98%; background: linear-gradient(90deg, #3b82f6, #2563eb);"></div>
                            <div class="stat-info">
                                <span>SEO Score</span>
                                <span>98/100</span>
                            </div>
                        </div>
                        <div class="visual-stat">
                            <div class="stat-bar" style="width: 100%; background: linear-gradient(90deg, #8b5cf6, #7c3aed);"></div>
                            <div class="stat-info">
                                <span>Accessibility</span>
                                <span>100/100</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="feature-row feature-row-reverse">
            <div class="feature-content">
                <div class="feature-badge">🎨 Design</div>
                <h2 class="feature-title">Beautiful Modern Interface</h2>
                <p class="feature-description">Every pixel is crafted with attention to detail, creating stunning visual experiences that captivate users and strengthen your brand identity across all devices.</p>
                <ul class="feature-list">
                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Responsive design system</li>
                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Modern UI components</li>
                    <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Consistent branding</li>
                </ul>
            </div>
            <div class="feature-visual">
                <div class="visual-card">
                    <div class="visual-header">Design System</div>
                    <div class="color-palette">
                        <div class="color-swatch" style="background: #3b82f6;"></div>
                        <div class="color-swatch" style="background: #2563eb;"></div>
                        <div class="color-swatch" style="background: #1e40af;"></div>
                        <div class="color-swatch" style="background: #0f172a;"></div>
                    </div>
                    <div class="typography-sample">
                        <div class="type-large">Aa</div>
                        <div class="type-info">Inter • 900</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
