<?php
/**
 * Premium Tech Agency Homepage
 * Luxury, Futuristic, Professional Design
 */

get_header(); ?>

<!-- Hero Section - Agency Level -->
<section class="luxury-hero">
    <div class="hero-bg-effects">
        <div class="tech-grid"></div>
        <div class="glow-orb glow-orb-1"></div>
        <div class="glow-orb glow-orb-2"></div>
        <div class="glow-orb glow-orb-3"></div>
    </div>
    
    <div class="container hero-wrapper">
        <div class="hero-content">
            <div class="hero-badge">
                <span class="badge-pulse"></span>
                <span>Trusted by 50+ Companies Worldwide</span>
            </div>
            
            <h1 class="hero-headline">
                We Build Powerful<br/>
                <span class="gradient-glow">Web Applications</span><br/>
                & Digital Products
            </h1>
            
            <p class="hero-subtitle">
                Helping startups and businesses launch scalable platforms with modern technology. 
                From concept to deployment, we deliver exceptional digital experiences.
            </p>
            
            <div class="hero-cta">
                <a href="<?php echo home_url('/contact'); ?>" class="btn-primary-glow">
                    <span>Start Your Project</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </a>
                <a href="<?php echo home_url('/portfolio'); ?>" class="btn-secondary-glass">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                    <span>View Portfolio</span>
                </a>
            </div>
            
            <div class="hero-trust">
                <div class="trust-stats">
                    <div class="stat-item">
                        <div class="stat-number">50+</div>
                        <div class="stat-label">Projects Delivered</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">98%</div>
                        <div class="stat-label">Client Satisfaction</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">5+</div>
                        <div class="stat-label">Years Experience</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="hero-visual">
            <div class="floating-dashboard">
                <div class="dashboard-window">
                    <div class="window-header">
                        <div class="window-dots">
                            <span></span><span></span><span></span>
                        </div>
                        <div class="window-title">MultiMian Platform</div>
                    </div>
                    <div class="window-content">
                        <div class="code-preview">
                            <div class="code-line"><span class="code-keyword">const</span> <span class="code-var">app</span> = <span class="code-func">createApp</span>()</div>
                            <div class="code-line"><span class="code-keyword">export</span> <span class="code-keyword">default</span> <span class="code-func">App</span></div>
                            <div class="code-line"><span class="code-comment">// Modern Architecture</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="floating-element element-1">
                <div class="element-icon">⚡</div>
                <div class="element-text">Fast Performance</div>
            </div>
            <div class="floating-element element-2">
                <div class="element-icon">🔒</div>
                <div class="element-text">Secure & Reliable</div>
            </div>
            <div class="floating-element element-3">
                <div class="element-icon">🚀</div>
                <div class="element-text">Scalable Solutions</div>
            </div>
        </div>
    </div>
</section>

<!-- Services Section - Premium Cards -->
<section class="services-premium">
    <div class="container">
        <div class="section-header-luxury">
            <div class="section-badge-glow">Our Expertise</div>
            <h2 class="section-title-luxury">
                Premium <span class="text-glow">Digital Services</span>
            </h2>
            <p class="section-subtitle-luxury">
                Cutting-edge solutions powered by modern technology and expert craftsmanship
            </p>
        </div>
        
        <div class="services-grid-luxury">
            <div class="service-card-glass">
                <div class="card-glow-border"></div>
                <div class="service-icon-luxury">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                </div>
                <h3 class="service-title-luxury">Full Stack Web Development</h3>
                <p class="service-desc-luxury">End-to-end web applications with modern frameworks, scalable architecture, and beautiful UI</p>
                <div class="service-tech">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Next.js</span>
                </div>
            </div>
            
            <div class="service-card-glass">
                <div class="card-glow-border"></div>
                <div class="service-icon-luxury">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                        <line x1="12" y1="22.08" x2="12" y2="12"/>
                    </svg>
                </div>
                <h3 class="service-title-luxury">SaaS Platform Development</h3>
                <p class="service-desc-luxury">Build subscription-based platforms with multi-tenancy, billing integration, and admin dashboards</p>
                <div class="service-tech">
                    <span>Cloud</span>
                    <span>APIs</span>
                    <span>Database</span>
                </div>
            </div>
            
            <div class="service-card-glass">
                <div class="card-glow-border"></div>
                <div class="service-icon-luxury">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                </div>
                <h3 class="service-title-luxury">AI Integration</h3>
                <p class="service-desc-luxury">Integrate AI and machine learning capabilities into your applications for intelligent automation</p>
                <div class="service-tech">
                    <span>AI/ML</span>
                    <span>APIs</span>
                    <span>Automation</span>
                </div>
            </div>
            
            <div class="service-card-glass">
                <div class="card-glow-border"></div>
                <div class="service-icon-luxury">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <line x1="9" y1="9" x2="15" y2="9"/>
                        <line x1="9" y1="15" x2="15" y2="15"/>
                    </svg>
                </div>
                <h3 class="service-title-luxury">Custom Web Applications</h3>
                <p class="service-desc-luxury">Tailored solutions designed specifically for your business needs and workflows</p>
                <div class="service-tech">
                    <span>Custom</span>
                    <span>Scalable</span>
                    <span>Secure</span>
                </div>
            </div>
            
            <div class="service-card-glass">
                <div class="card-glow-border"></div>
                <div class="service-icon-luxury">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="2" y1="12" x2="22" y2="12"/>
                        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                    </svg>
                </div>
                <h3 class="service-title-luxury">API Development</h3>
                <p class="service-desc-luxury">RESTful and GraphQL APIs with comprehensive documentation and security</p>
                <div class="service-tech">
                    <span>REST</span>
                    <span>GraphQL</span>
                    <span>Docs</span>
                </div>
            </div>
            
            <div class="service-card-glass">
                <div class="card-glow-border"></div>
                <div class="service-icon-luxury">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                        <path d="M2 2l7.586 7.586"/>
                        <circle cx="11" cy="11" r="2"/>
                    </svg>
                </div>
                <h3 class="service-title-luxury">UI/UX Design</h3>
                <p class="service-desc-luxury">Beautiful, intuitive interfaces that users love with modern design principles</p>
                <div class="service-tech">
                    <span>Figma</span>
                    <span>Design</span>
                    <span>UX</span>
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>

<!-- Portfolio Showcase Section -->
<section class="portfolio-luxury">
    <div class="container">
        <div class="section-header-luxury">
            <div class="section-badge-glow">Our Work</div>
            <h2 class="section-title-luxury">
                Success <span class="text-glow">Stories</span>
            </h2>
            <p class="section-subtitle-luxury">
                Discover how we've helped businesses transform their digital presence
            </p>
        </div>
        
        <div class="portfolio-grid-luxury">
            <div class="portfolio-card-glass">
                <div class="portfolio-image">
                    <div class="portfolio-placeholder">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                            <line x1="8" y1="21" x2="16" y2="21"/>
                            <line x1="12" y1="17" x2="12" y2="21"/>
                        </svg>
                    </div>
                </div>
                <div class="portfolio-content">
                    <h3 class="portfolio-title">E-Commerce Platform</h3>
                    <p class="portfolio-desc">Modern online store with advanced features and seamless checkout experience</p>
                    <div class="portfolio-tags">
                        <span>React</span>
                        <span>Node.js</span>
                        <span>Stripe</span>
                    </div>
                </div>
            </div>
            
            <div class="portfolio-card-glass">
                <div class="portfolio-image">
                    <div class="portfolio-placeholder">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                        </svg>
                    </div>
                </div>
                <div class="portfolio-content">
                    <h3 class="portfolio-title">SaaS Dashboard</h3>
                    <p class="portfolio-desc">Comprehensive analytics platform with real-time data visualization</p>
                    <div class="portfolio-tags">
                        <span>Next.js</span>
                        <span>PostgreSQL</span>
                        <span>AWS</span>
                    </div>
                </div>
            </div>
            
            <div class="portfolio-card-glass">
                <div class="portfolio-image">
                    <div class="portfolio-placeholder">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="2" y1="12" x2="22" y2="12"/>
                            <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                        </svg>
                    </div>
                </div>
                <div class="portfolio-content">
                    <h3 class="portfolio-title">Corporate Website</h3>
                    <p class="portfolio-desc">Professional business website with modern design and SEO optimization</p>
                    <div class="portfolio-tags">
                        <span>WordPress</span>
                        <span>Custom Theme</span>
                        <span>SEO</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="portfolio-cta">
            <a href="<?php echo home_url('/portfolio'); ?>" class="btn-primary-glow">
                <span>View All Projects</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            </a>
        </div>
    </div>
</section>

<!-- Why Choose Us Section -->
<section class="why-choose-luxury">
    <div class="container">
        <div class="section-header-luxury">
            <div class="section-badge-glow">Why Choose Us</div>
            <h2 class="section-title-luxury">
                Built for <span class="text-glow">Excellence</span>
            </h2>
            <p class="section-subtitle-luxury">
                We combine cutting-edge technology with proven expertise
            </p>
        </div>
        
        <div class="why-grid-luxury">
            <div class="why-card-glass">
                <div class="why-icon">⚡</div>
                <h3 class="why-title">Scalable Architecture</h3>
                <p class="why-desc">Built to grow with your business using modern cloud infrastructure</p>
            </div>
            
            <div class="why-card-glass">
                <div class="why-icon">🚀</div>
                <h3 class="why-title">Fast Development</h3>
                <p class="why-desc">Agile methodology ensures rapid delivery without compromising quality</p>
            </div>
            
            <div class="why-card-glass">
                <div class="why-icon">💻</div>
                <h3 class="why-title">Modern Technologies</h3>
                <p class="why-desc">Latest frameworks and tools for cutting-edge solutions</p>
            </div>
            
            <div class="why-card-glass">
                <div class="why-icon">🎨</div>
                <h3 class="why-title">Clean UI/UX</h3>
                <p class="why-desc">Beautiful, intuitive interfaces that users love</p>
            </div>
            
            <div class="why-card-glass">
                <div class="why-icon">⚙️</div>
                <h3 class="why-title">Performance Optimized</h3>
                <p class="why-desc">Lightning-fast load times and smooth user experience</p>
            </div>
            
            <div class="why-card-glass">
                <div class="why-icon">🔒</div>
                <h3 class="why-title">Secure & Reliable</h3>
                <p class="why-desc">Enterprise-grade security and 99.9% uptime guarantee</p>
            </div>
        </div>
    </div>
</section>

<!-- Development Process Section -->
<section class="process-luxury">
    <div class="container">
        <div class="section-header-luxury">
            <div class="section-badge-glow">Our Process</div>
            <h2 class="section-title-luxury">
                How We <span class="text-glow">Work</span>
            </h2>
            <p class="section-subtitle-luxury">
                A proven methodology that delivers results
            </p>
        </div>
        
        <div class="process-timeline">
            <div class="process-step">
                <div class="step-number">01</div>
                <div class="step-content">
                    <div class="step-icon">🎯</div>
                    <h3 class="step-title">Idea & Planning</h3>
                    <p class="step-desc">We analyze your requirements and create a comprehensive roadmap</p>
                </div>
            </div>
            
            <div class="process-connector"></div>
            
            <div class="process-step">
                <div class="step-number">02</div>
                <div class="step-content">
                    <div class="step-icon">🎨</div>
                    <h3 class="step-title">UI/UX Design</h3>
                    <p class="step-desc">Beautiful designs with interactive prototypes for validation</p>
                </div>
            </div>
            
            <div class="process-connector"></div>
            
            <div class="process-step">
                <div class="step-number">03</div>
                <div class="step-content">
                    <div class="step-icon">⚙️</div>
                    <h3 class="step-title">Development</h3>
                    <p class="step-desc">Clean, scalable code with rigorous testing and QA</p>
                </div>
            </div>
            
            <div class="process-connector"></div>
            
            <div class="process-step">
                <div class="step-number">04</div>
                <div class="step-content">
                    <div class="step-icon">🚀</div>
                    <h3 class="step-title">Launch & Support</h3>
                    <p class="step-desc">Smooth deployment with ongoing maintenance and optimization</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Testimonials Section -->
<section class="testimonials-luxury">
    <div class="container">
        <div class="section-header-luxury">
            <div class="section-badge-glow">Testimonials</div>
            <h2 class="section-title-luxury">
                What Clients <span class="text-glow">Say</span>
            </h2>
            <p class="section-subtitle-luxury">
                Don't just take our word for it
            </p>
        </div>
        
        <div class="testimonials-grid">
            <div class="testimonial-card-glass">
                <div class="testimonial-stars">★★★★★</div>
                <p class="testimonial-quote">"MultiMian transformed our vision into reality with exceptional expertise. The team delivered beyond our expectations."</p>
                <div class="testimonial-author">
                    <div class="author-avatar">SJ</div>
                    <div class="author-info">
                        <div class="author-name">Sarah Johnson</div>
                        <div class="author-role">CEO, TechStart</div>
                    </div>
                </div>
            </div>
            
            <div class="testimonial-card-glass">
                <div class="testimonial-stars">★★★★★</div>
                <p class="testimonial-quote">"Working with MultiMian was a game-changer. Our sales increased by 200% after the new platform launch."</p>
                <div class="testimonial-author">
                    <div class="author-avatar">AK</div>
                    <div class="author-info">
                        <div class="author-name">Ahmed Khan</div>
                        <div class="author-role">Founder, E-Commerce Plus</div>
                    </div>
                </div>
            </div>
            
            <div class="testimonial-card-glass">
                <div class="testimonial-stars">★★★★★</div>
                <p class="testimonial-quote">"The quality of code and modern design approach impressed our entire team. Highly recommended!"</p>
                <div class="testimonial-author">
                    <div class="author-avatar">LM</div>
                    <div class="author-info">
                        <div class="author-name">Lisa Martinez</div>
                        <div class="author-role">CTO, GrowthCo</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Final CTA Section -->
<section class="final-cta-luxury">
    <div class="cta-bg-effects">
        <div class="cta-glow-orb cta-glow-1"></div>
        <div class="cta-glow-orb cta-glow-2"></div>
        <div class="cta-grid"></div>
    </div>
    <div class="container">
        <div class="cta-content">
            <div class="cta-badge">
                <span class="badge-pulse"></span>
                <span>Ready to Get Started?</span>
            </div>
            <h2 class="cta-headline">
                Let's Build Your Next<br/>
                <span class="gradient-glow">Big Product</span>
            </h2>
            <p class="cta-subtitle">
                Transform your ideas into powerful digital solutions. Get a free consultation and quote within 24 hours.
            </p>
            <div class="cta-buttons">
                <a href="<?php echo home_url('/contact'); ?>" class="btn-primary-glow">
                    <span>Start a Project</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </a>
                <a href="https://wa.me/<?php echo esc_attr(get_theme_mod('multimian_whatsapp', '923258831437')); ?>?text=Hi! I would like to book a consultation." 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="btn-secondary-glass">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span>Book Consultation</span>
                </a>
            </div>
            <div class="cta-trust">
                <div class="trust-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <span>Free Consultation</span>
                </div>
                <div class="trust-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <span>Fast Delivery</span>
                </div>
                <div class="trust-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <span>100% Satisfaction</span>
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
