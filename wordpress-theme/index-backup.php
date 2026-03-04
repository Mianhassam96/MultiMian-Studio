<?php
/**
 * The main template file - Home Page
 */

get_header(); ?>

<!-- Hero Section -->
<section class="hero-section" style="background: linear-gradient(135deg, #0a0f1e 0%, #0f172a 25%, #1e293b 75%, #334155 100%); padding: 12rem 2rem 10rem; position: relative; overflow: hidden; margin-top: 70px;">
    <div style="position: absolute; inset: 0; background-image: radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0); background-size: 40px 40px;"></div>
    <div style="position: absolute; top: 10%; right: 5%; width: 600px; height: 600px; background: radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent 70%); border-radius: 50%; filter: blur(100px); animation: pulse 8s ease-in-out infinite;"></div>
    <div style="position: absolute; bottom: 10%; left: 5%; width: 500px; height: 500px; background: radial-gradient(circle, rgba(37, 99, 235, 0.15), transparent 70%); border-radius: 50%; filter: blur(100px); animation: pulse 10s ease-in-out infinite;"></div>
    
    <div class="hero-content" style="position: relative; z-index: 1; max-width: 1200px; margin: 0 auto;">
        <div style="display: inline-flex; align-items: center; gap: 0.625rem; padding: 0.75rem 1.5rem; background: rgba(59, 130, 246, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 50px; color: #60a5fa; font-weight: 700; font-size: 0.9375rem; margin-bottom: 2.5rem; animation: fadeInUp 0.8s ease-out; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);">
            <span style="display: inline-flex; width: 10px; height: 10px; background: #3b82f6; border-radius: 50%; animation: pulse 2s ease-in-out infinite; box-shadow: 0 0 12px rgba(59, 130, 246, 0.8);"></span>
            Available for New Projects
        </div>
        
        <h1 style="font-size: 5rem; font-weight: 900; margin-bottom: 2rem; line-height: 1.1; animation: fadeInUp 0.8s ease-out 0.1s both; letter-spacing: -0.02em;">
            <span style="color: white; display: block; margin-bottom: 0.5rem;">Transform Ideas Into</span>
            <span style="background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 25%, #93c5fd 50%, #60a5fa 75%, #3b82f6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; background-size: 200% auto; animation: gradient 3s linear infinite; display: inline-block;">Digital Reality</span>
        </h1>
        
        <p style="font-size: 1.5rem; color: #cbd5e1; margin-bottom: 3.5rem; max-width: 800px; margin-left: auto; margin-right: auto; line-height: 1.8; animation: fadeInUp 0.8s ease-out 0.2s both; font-weight: 400;">
            We craft exceptional web experiences that drive growth, engage users, and deliver measurable results for forward-thinking businesses.
        </p>
        
        <div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; margin-bottom: 4rem; animation: fadeInUp 0.8s ease-out 0.3s both;">
            <a href="<?php echo home_url('/contact'); ?>" style="display: inline-flex; align-items: center; gap: 0.875rem; padding: 1.25rem 3rem; background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; border-radius: 1rem; font-weight: 700; font-size: 1.125rem; box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.1); transition: all 0.3s ease; text-decoration: none; position: relative; overflow: hidden;">
                <span style="position: absolute; inset: 0; background: linear-gradient(135deg, #2563eb, #1e40af); opacity: 0; transition: opacity 0.3s ease;"></span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="position: relative; z-index: 1;">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
                <span style="position: relative; z-index: 1;">Start Your Project</span>
            </a>
            <a href="<?php echo home_url('/portfolio'); ?>" style="display: inline-flex; align-items: center; gap: 0.875rem; padding: 1.25rem 3rem; background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); color: white; border: 2px solid rgba(255, 255, 255, 0.15); border-radius: 1rem; font-weight: 700; font-size: 1.125rem; transition: all 0.3s ease; text-decoration: none; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                </svg>
                View Portfolio
            </a>
        </div>
        
        <div style="display: flex; align-items: center; justify-content: center; gap: 3rem; flex-wrap: wrap; animation: fadeInUp 0.8s ease-out 0.4s both;">
            <div style="display: flex; align-items: center; gap: 0.75rem; color: #e2e8f0;">
                <div style="width: 2.5rem; height: 2.5rem; background: linear-gradient(135deg, #3b82f6, #2563eb); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                </div>
                <span style="font-size: 1rem; font-weight: 600;">Free Consultation</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.75rem; color: #e2e8f0;">
                <div style="width: 2.5rem; height: 2.5rem; background: linear-gradient(135deg, #3b82f6, #2563eb); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                </div>
                <span style="font-size: 1rem; font-weight: 600;">Fast Delivery</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.75rem; color: #e2e8f0;">
                <div style="width: 2.5rem; height: 2.5rem; background: linear-gradient(135deg, #3b82f6, #2563eb); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                </div>
                <span style="font-size: 1rem; font-weight: 600;">100% Satisfaction</span>
            </div>
        </div>
    </div>
</section>

<!-- Services Section -->
<section class="section" style="background: linear-gradient(to bottom, #ffffff, #f9fafb, #ffffff);">
    <div class="container">
        <div class="text-center mb-5">
            <div style="display: inline-block; padding: 0.75rem 1.5rem; background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1)); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 9999px; color: #3b82f6; font-weight: 700; font-size: 0.875rem; margin-bottom: 1.5rem;">
                ✨ Our Expertise
            </div>
            <h2 class="section-title">Comprehensive <span class="gradient-text">Digital Solutions</span></h2>
            <p class="section-subtitle">From concept to deployment, we deliver cutting-edge web solutions that drive business growth and user engagement</p>
        </div>
        
        <div class="grid grid-2">
            <div class="card">
                <div class="card-icon">🌐</div>
                <h3 class="card-title">Business Websites</h3>
                <p class="card-description">Professional websites that establish your online presence and convert visitors into customers</p>
                <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.5rem;">
                    <span style="padding: 0.5rem 1rem; background: linear-gradient(135deg, #3b82f6, #06b6d4); background-opacity: 0.1; color: #374151; border-radius: 0.75rem; font-size: 0.875rem; font-weight: 700;">Custom Design</span>
                    <span style="padding: 0.5rem 1rem; background: linear-gradient(135deg, #3b82f6, #06b6d4); background-opacity: 0.1; color: #374151; border-radius: 0.75rem; font-size: 0.875rem; font-weight: 700;">SEO Ready</span>
                    <span style="padding: 0.5rem 1rem; background: linear-gradient(135deg, #3b82f6, #06b6d4); background-opacity: 0.1; color: #374151; border-radius: 0.75rem; font-size: 0.875rem; font-weight: 700;">Fast Loading</span>
                    <span style="padding: 0.5rem 1rem; background: linear-gradient(135deg, #3b82f6, #06b6d4); background-opacity: 0.1; color: #374151; border-radius: 0.75rem; font-size: 0.875rem; font-weight: 700;">Mobile Responsive</span>
                </div>
            </div>
            
            <div class="card">
                <div class="card-icon">⚡</div>
                <h3 class="card-title">SaaS Platforms</h3>
                <p class="card-description">Scalable subscription-based applications with advanced features and integrations</p>
                <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.5rem;">
                    <span style="padding: 0.5rem 1rem; background: linear-gradient(135deg, #8b5cf6, #ec4899); background-opacity: 0.1; color: #374151; border-radius: 0.75rem; font-size: 0.875rem; font-weight: 700;">Multi-tenant</span>
                    <span style="padding: 0.5rem 1rem; background: linear-gradient(135deg, #8b5cf6, #ec4899); background-opacity: 0.1; color: #374151; border-radius: 0.75rem; font-size: 0.875rem; font-weight: 700;">Subscription Billing</span>
                    <span style="padding: 0.5rem 1rem; background: linear-gradient(135deg, #8b5cf6, #ec4899); background-opacity: 0.1; color: #374151; border-radius: 0.75rem; font-size: 0.875rem; font-weight: 700;">Admin Dashboard</span>
                    <span style="padding: 0.5rem 1rem; background: linear-gradient(135deg, #8b5cf6, #ec4899); background-opacity: 0.1; color: #374151; border-radius: 0.75rem; font-size: 0.875rem; font-weight: 700;">API Integration</span>
                </div>
            </div>
            
            <div class="card">
                <div class="card-icon">🛒</div>
                <h3 class="card-title">E-Commerce Solutions</h3>
                <p class="card-description">Complete online stores with secure payment processing and inventory management</p>
                <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.5rem;">
                    <span style="padding: 0.5rem 1rem; background: linear-gradient(135deg, #10b981, #059669); background-opacity: 0.1; color: #374151; border-radius: 0.75rem; font-size: 0.875rem; font-weight: 700;">Payment Gateway</span>
                    <span style="padding: 0.5rem 1rem; background: linear-gradient(135deg, #10b981, #059669); background-opacity: 0.1; color: #374151; border-radius: 0.75rem; font-size: 0.875rem; font-weight: 700;">Product Management</span>
                    <span style="padding: 0.5rem 1rem; background: linear-gradient(135deg, #10b981, #059669); background-opacity: 0.1; color: #374151; border-radius: 0.75rem; font-size: 0.875rem; font-weight: 700;">Order Tracking</span>
                    <span style="padding: 0.5rem 1rem; background: linear-gradient(135deg, #10b981, #059669); background-opacity: 0.1; color: #374151; border-radius: 0.75rem; font-size: 0.875rem; font-weight: 700;">Analytics</span>
                </div>
            </div>
            
            <div class="card">
                <div class="card-icon">📱</div>
                <h3 class="card-title">Web Applications</h3>
                <p class="card-description">Custom web applications tailored to your specific business requirements</p>
                <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.5rem;">
                    <span style="padding: 0.5rem 1rem; background: linear-gradient(135deg, #f97316, #ef4444); background-opacity: 0.1; color: #374151; border-radius: 0.75rem; font-size: 0.875rem; font-weight: 700;">Custom Features</span>
                    <span style="padding: 0.5rem 1rem; background: linear-gradient(135deg, #f97316, #ef4444); background-opacity: 0.1; color: #374151; border-radius: 0.75rem; font-size: 0.875rem; font-weight: 700;">Database Design</span>
                    <span style="padding: 0.5rem 1rem; background: linear-gradient(135deg, #f97316, #ef4444); background-opacity: 0.1; color: #374151; border-radius: 0.75rem; font-size: 0.875rem; font-weight: 700;">User Authentication</span>
                    <span style="padding: 0.5rem 1rem; background: linear-gradient(135deg, #f97316, #ef4444); background-opacity: 0.1; color: #374151; border-radius: 0.75rem; font-size: 0.875rem; font-weight: 700;">Cloud Hosting</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Features Section -->
<section class="section" style="background: linear-gradient(135deg, #f9fafb, #dbeafe);">
    <div class="container">
        <div class="text-center mb-5">
            <div style="display: inline-block; padding: 0.5rem 1rem; background: rgba(139, 92, 246, 0.1); color: #8b5cf6; border-radius: 9999px; font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem;">
                Why Choose Us
            </div>
            <h2 class="section-title">Built for <span class="gradient-text">Excellence</span></h2>
            <p class="section-subtitle">We combine cutting-edge technology with proven expertise to deliver exceptional results</p>
        </div>
        
        <div class="grid grid-3">
            <div class="card">
                <div class="card-icon">⚡</div>
                <h3 class="card-title">Lightning Fast</h3>
                <p class="card-description">Optimized for speed and performance with advanced caching and CDN integration</p>
            </div>
            
            <div class="card">
                <div class="card-icon">🎨</div>
                <h3 class="card-title">Beautiful Design</h3>
                <p class="card-description">Stunning, modern designs that captivate users and enhance brand identity</p>
            </div>
            
            <div class="card">
                <div class="card-icon">📱</div>
                <h3 class="card-title">Fully Responsive</h3>
                <p class="card-description">Perfect experience across all devices with mobile-first design approach</p>
            </div>
            
            <div class="card">
                <div class="card-icon">🔒</div>
                <h3 class="card-title">Secure & Reliable</h3>
                <p class="card-description">Enterprise-grade security with SSL, data encryption, and regular backups</p>
            </div>
            
            <div class="card">
                <div class="card-icon">🚀</div>
                <h3 class="card-title">SEO Optimized</h3>
                <p class="card-description">Built-in SEO best practices to help you rank higher on search engines</p>
            </div>
            
            <div class="card">
                <div class="card-icon">💼</div>
                <h3 class="card-title">Business Growth</h3>
                <p class="card-description">Strategic solutions designed to drive conversions and business success</p>
            </div>
        </div>
    </div>
</section>

<!-- Technologies Section -->
<section class="section" style="background: white;">
    <div class="container">
        <div class="text-center mb-5">
            <div style="display: inline-block; padding: 0.5rem 1rem; background: rgba(16, 185, 129, 0.1); color: #10b981; border-radius: 9999px; font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem;">
                Technology Stack
            </div>
            <h2 class="section-title">Modern <span class="gradient-text">Tech Stack</span></h2>
            <p class="section-subtitle">We use the latest and most reliable technologies to build scalable, maintainable solutions</p>
        </div>
        
        <div class="grid grid-4">
            <div class="card" style="text-align: center;">
                <div class="card-icon">⚛️</div>
                <h4 style="font-weight: 700; font-size: 1.125rem; margin-bottom: 0.5rem;">React</h4>
                <p style="font-size: 0.875rem; color: var(--text-secondary);">Modern UI Library</p>
            </div>
            
            <div class="card" style="text-align: center;">
                <div class="card-icon">▲</div>
                <h4 style="font-weight: 700; font-size: 1.125rem; margin-bottom: 0.5rem;">Next.js</h4>
                <p style="font-size: 0.875rem; color: var(--text-secondary);">Full-Stack Framework</p>
            </div>
            
            <div class="card" style="text-align: center;">
                <div class="card-icon">🟢</div>
                <h4 style="font-weight: 700; font-size: 1.125rem; margin-bottom: 0.5rem;">Node.js</h4>
                <p style="font-size: 0.875rem; color: var(--text-secondary);">Server Runtime</p>
            </div>
            
            <div class="card" style="text-align: center;">
                <div class="card-icon">📘</div>
                <h4 style="font-weight: 700; font-size: 1.125rem; margin-bottom: 0.5rem;">TypeScript</h4>
                <p style="font-size: 0.875rem; color: var(--text-secondary);">Type Safety</p>
            </div>
            
            <div class="card" style="text-align: center;">
                <div class="card-icon">🍃</div>
                <h4 style="font-weight: 700; font-size: 1.125rem; margin-bottom: 0.5rem;">MongoDB</h4>
                <p style="font-size: 0.875rem; color: var(--text-secondary);">NoSQL Database</p>
            </div>
            
            <div class="card" style="text-align: center;">
                <div class="card-icon">🐘</div>
                <h4 style="font-weight: 700; font-size: 1.125rem; margin-bottom: 0.5rem;">PostgreSQL</h4>
                <p style="font-size: 0.875rem; color: var(--text-secondary);">SQL Database</p>
            </div>
            
            <div class="card" style="text-align: center;">
                <div class="card-icon">☁️</div>
                <h4 style="font-weight: 700; font-size: 1.125rem; margin-bottom: 0.5rem;">AWS</h4>
                <p style="font-size: 0.875rem; color: var(--text-secondary);">Cloud Platform</p>
            </div>
            
            <div class="card" style="text-align: center;">
                <div class="card-icon">🐳</div>
                <h4 style="font-weight: 700; font-size: 1.125rem; margin-bottom: 0.5rem;">Docker</h4>
                <p style="font-size: 0.875rem; color: var(--text-secondary);">Containerization</p>
            </div>
        </div>
    </div>
</section>

<!-- Process Section -->
<section class="section" style="background: linear-gradient(135deg, #dbeafe, #e0e7ff);">
    <div class="container">
        <div class="text-center mb-5">
            <div style="display: inline-block; padding: 0.5rem 1rem; background: rgba(99, 102, 241, 0.1); color: #6366f1; border-radius: 9999px; font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem;">
                Our Methodology
            </div>
            <h2 class="section-title">Proven <span class="gradient-text">Development Process</span></h2>
            <p class="section-subtitle">Our streamlined approach ensures quality delivery and client satisfaction at every step</p>
        </div>
        
        <div class="grid grid-4">
            <div class="card" style="text-align: center;">
                <div class="card-icon">🎯</div>
                <div style="font-size: 2.5rem; font-weight: 700; color: #3b82f6; margin-bottom: 1rem;">01</div>
                <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem;">Discovery & Planning</h3>
                <p class="card-description">We analyze your requirements and create a comprehensive project roadmap</p>
            </div>
            
            <div class="card" style="text-align: center;">
                <div class="card-icon">🎨</div>
                <div style="font-size: 2.5rem; font-weight: 700; color: #3b82f6; margin-bottom: 1rem;">02</div>
                <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem;">Design & Prototype</h3>
                <p class="card-description">Beautiful, user-centered designs with interactive prototypes for validation</p>
            </div>
            
            <div class="card" style="text-align: center;">
                <div class="card-icon">⚙️</div>
                <div style="font-size: 2.5rem; font-weight: 700; color: #3b82f6; margin-bottom: 1rem;">03</div>
                <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem;">Development & Testing</h3>
                <p class="card-description">Clean, scalable code with rigorous testing and quality assurance</p>
            </div>
            
            <div class="card" style="text-align: center;">
                <div class="card-icon">🚀</div>
                <div style="font-size: 2.5rem; font-weight: 700; color: #3b82f6; margin-bottom: 1rem;">04</div>
                <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem;">Launch & Support</h3>
                <p class="card-description">Smooth deployment with ongoing maintenance and optimization support</p>
            </div>
        </div>
    </div>
</section>

<!-- Portfolio Showcase -->
<section class="section" style="background: white;">
    <div class="container">
        <div class="text-center mb-5">
            <div style="display: inline-block; padding: 0.5rem 1rem; background: rgba(236, 72, 153, 0.1); color: #ec4899; border-radius: 9999px; font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem;">
                Our Work
            </div>
            <h2 class="section-title">Success <span class="gradient-text">Stories</span></h2>
            <p class="section-subtitle">Discover how we've helped businesses transform their digital presence and achieve remarkable growth</p>
        </div>
        
        <div class="grid grid-3" style="margin-bottom: 3rem;">
            <div class="card" style="text-align: center;">
                <div class="card-icon">🚀</div>
                <div style="font-size: 2.5rem; font-weight: 700; margin-bottom: 0.5rem;">50+</div>
                <p style="color: var(--text-secondary); font-weight: 500;">Projects Completed</p>
            </div>
            
            <div class="card" style="text-align: center;">
                <div class="card-icon">😊</div>
                <div style="font-size: 2.5rem; font-weight: 700; margin-bottom: 0.5rem;">30+</div>
                <p style="color: var(--text-secondary); font-weight: 500;">Happy Clients</p>
            </div>
            
            <div class="card" style="text-align: center;">
                <div class="card-icon">⭐</div>
                <div style="font-size: 2.5rem; font-weight: 700; margin-bottom: 0.5rem;">5+</div>
                <p style="color: var(--text-secondary); font-weight: 500;">Years Experience</p>
            </div>
        </div>
        
        <div class="text-center">
            <a href="<?php echo home_url('/portfolio'); ?>" class="btn-primary" style="display: inline-flex; align-items: center; gap: 0.75rem;">
                <span>📁</span>
                <span>View Full Portfolio</span>
            </a>
        </div>
    </div>
</section>

<!-- Testimonials Section -->
<section class="section" style="background: linear-gradient(135deg, #fce7f3, #fbcfe8);">
    <div class="container">
        <div class="text-center mb-5">
            <div style="display: inline-block; padding: 0.5rem 1rem; background: rgba(139, 92, 246, 0.1); color: #8b5cf6; border-radius: 9999px; font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem;">
                Client Testimonials
            </div>
            <h2 class="section-title">What Our <span class="gradient-text">Clients Say</span></h2>
            <p class="section-subtitle">Don't just take our word for it - hear from the businesses we've helped transform</p>
        </div>
        
        <div class="grid grid-3">
            <div class="card">
                <div style="display: flex; gap: 0.25rem; margin-bottom: 1.5rem;">
                    <span style="color: #eab308; font-size: 1.5rem;">★</span>
                    <span style="color: #eab308; font-size: 1.5rem;">★</span>
                    <span style="color: #eab308; font-size: 1.5rem;">★</span>
                    <span style="color: #eab308; font-size: 1.5rem;">★</span>
                    <span style="color: #eab308; font-size: 1.5rem;">★</span>
                </div>
                <p style="color: var(--text-primary); margin-bottom: 2rem; font-size: 1.125rem; font-style: italic; line-height: 1.7;">
                    "MultiMian transformed our vision into reality with exceptional expertise. The team delivered beyond our expectations and helped us achieve 300% growth in online conversions."
                </p>
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <div style="width: 3.5rem; height: 3.5rem; border-radius: 50%; background: linear-gradient(135deg, #3b82f6, #8b5cf6); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 1.125rem;">
                        SJ
                    </div>
                    <div>
                        <div style="font-weight: 700; font-size: 1.125rem;">Sarah Johnson</div>
                        <div style="color: var(--text-secondary);">CEO, TechStart</div>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div style="display: flex; gap: 0.25rem; margin-bottom: 1.5rem;">
                    <span style="color: #eab308; font-size: 1.5rem;">★</span>
                    <span style="color: #eab308; font-size: 1.5rem;">★</span>
                    <span style="color: #eab308; font-size: 1.5rem;">★</span>
                    <span style="color: #eab308; font-size: 1.5rem;">★</span>
                    <span style="color: #eab308; font-size: 1.5rem;">★</span>
                </div>
                <p style="color: var(--text-primary); margin-bottom: 2rem; font-size: 1.125rem; font-style: italic; line-height: 1.7;">
                    "Working with MultiMian was a game-changer. Our sales increased by 200% after the new platform launch. Their attention to detail and technical expertise is unmatched."
                </p>
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <div style="width: 3.5rem; height: 3.5rem; border-radius: 50%; background: linear-gradient(135deg, #10b981, #3b82f6); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 1.125rem;">
                        AK
                    </div>
                    <div>
                        <div style="font-weight: 700; font-size: 1.125rem;">Ahmed Khan</div>
                        <div style="color: var(--text-secondary);">Founder, E-Commerce Plus</div>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div style="display: flex; gap: 0.25rem; margin-bottom: 1.5rem;">
                    <span style="color: #eab308; font-size: 1.5rem;">★</span>
                    <span style="color: #eab308; font-size: 1.5rem;">★</span>
                    <span style="color: #eab308; font-size: 1.5rem;">★</span>
                    <span style="color: #eab308; font-size: 1.5rem;">★</span>
                    <span style="color: #eab308; font-size: 1.5rem;">★</span>
                </div>
                <p style="color: var(--text-primary); margin-bottom: 2rem; font-size: 1.125rem; font-style: italic; line-height: 1.7;">
                    "The quality of code and modern design approach impressed our entire team. MultiMian delivered a scalable solution that continues to serve us perfectly as we grow."
                </p>
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <div style="width: 3.5rem; height: 3.5rem; border-radius: 50%; background: linear-gradient(135deg, #8b5cf6, #ec4899); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 1.125rem;">
                        LM
                    </div>
                    <div>
                        <div style="font-weight: 700; font-size: 1.125rem;">Lisa Martinez</div>
                        <div style="color: var(--text-secondary);">CTO, GrowthCo</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="section" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%); color: white; position: relative; overflow: hidden;">
    <div style="position: absolute; inset: 0; background-image: radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.1) 1px, transparent 0); background-size: 40px 40px;"></div>
    <div style="position: absolute; top: 20%; right: 10%; width: 400px; height: 400px; background: radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent 70%); border-radius: 50%; filter: blur(80px);"></div>
    <div style="position: absolute; bottom: 20%; left: 10%; width: 350px; height: 350px; background: radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent 70%); border-radius: 50%; filter: blur(80px);"></div>
    
    <div class="container" style="position: relative; z-index: 1;">
        <div class="text-center">
            <div style="display: inline-block; padding: 0.75rem 1.5rem; background: rgba(59, 130, 246, 0.15); backdrop-filter: blur(10px); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 50px; color: #60a5fa; font-weight: 700; font-size: 0.875rem; margin-bottom: 2rem;">
                🚀 Ready to Get Started?
            </div>
            <h2 style="font-size: 3.5rem; font-weight: 900; margin-bottom: 1.5rem; color: white; line-height: 1.2;">
                Let's Build Something <span style="background: linear-gradient(135deg, #60a5fa, #a78bfa, #f0abfc); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Extraordinary</span>
            </h2>
            <p style="font-size: 1.375rem; margin-bottom: 3rem; color: #cbd5e1; max-width: 750px; margin-left: auto; margin-right: auto; line-height: 1.7;">
                Transform your digital presence with our expert development team. From concept to launch, we bring your vision to life with cutting-edge technology and exceptional design.
            </p>
            <div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; margin-bottom: 4rem;">
                <a href="<?php echo home_url('/contact'); ?>" style="display: inline-flex; align-items: center; gap: 0.875rem; padding: 1.25rem 3rem; background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; border-radius: 1rem; font-weight: 700; font-size: 1.125rem; box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4); transition: all 0.3s ease; text-decoration: none;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                    </svg>
                    <span>Start Your Project</span>
                </a>
                <a href="<?php echo home_url('/portfolio'); ?>" style="display: inline-flex; align-items: center; gap: 0.875rem; padding: 1.25rem 3rem; background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); color: white; border: 2px solid rgba(255, 255, 255, 0.15); border-radius: 1rem; font-weight: 700; font-size: 1.125rem; transition: all 0.3s ease; text-decoration: none;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <rect x="3" y="3" width="7" height="7"/>
                        <rect x="14" y="3" width="7" height="7"/>
                        <rect x="14" y="14" width="7" height="7"/>
                        <rect x="3" y="14" width="7" height="7"/>
                    </svg>
                    <span>View Our Work</span>
                </a>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; max-width: 900px; margin: 0 auto;">
                <div style="text-align: center; padding: 1.5rem; background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border-radius: 1rem; border: 1px solid rgba(255, 255, 255, 0.1);">
                    <div style="font-size: 2.5rem; font-weight: 900; color: #60a5fa; margin-bottom: 0.5rem;">24/7</div>
                    <div style="color: #cbd5e1; font-weight: 600;">Support Available</div>
                </div>
                <div style="text-align: center; padding: 1.5rem; background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border-radius: 1rem; border: 1px solid rgba(255, 255, 255, 0.1);">
                    <div style="font-size: 2.5rem; font-weight: 900; color: #60a5fa; margin-bottom: 0.5rem;">100%</div>
                    <div style="color: #cbd5e1; font-weight: 600;">Client Satisfaction</div>
                </div>
                <div style="text-align: center; padding: 1.5rem; background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border-radius: 1rem; border: 1px solid rgba(255, 255, 255, 0.1);">
                    <div style="font-size: 2.5rem; font-weight: 900; color: #60a5fa; margin-bottom: 0.5rem;">Fast</div>
                    <div style="color: #cbd5e1; font-weight: 600;">Delivery Time</div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
