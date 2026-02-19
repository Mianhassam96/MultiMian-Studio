<?php
/**
 * Template Name: Login Page
 *
 * @package MultiMian
 */

// Redirect if already logged in
if (is_user_logged_in()) {
    wp_redirect(home_url('/dashboard'));
    exit;
}

get_header();
?>

<div class="auth-page">
    <div class="auth-container">
        <div class="auth-card">
            <div class="auth-header">
                <h1>Welcome Back</h1>
                <p>Login to your account to continue</p>
            </div>

            <form id="loginForm" class="auth-form">
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="your@email.com">
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required placeholder="Enter your password">
                </div>

                <div class="form-group-row">
                    <label class="checkbox-label">
                        <input type="checkbox" name="remember">
                        <span>Remember me</span>
                    </label>
                    <a href="<?php echo esc_url(wp_lostpassword_url()); ?>" class="forgot-link">Forgot Password?</a>
                </div>

                <button type="submit" class="btn btn-primary btn-block">Login</button>
            </form>

            <div class="auth-divider">
                <span>OR</span>
            </div>

            <div class="social-login">
                <p>Don't have an account? <a href="<?php echo esc_url(home_url('/signup')); ?>">Sign up</a></p>
            </div>
        </div>
    </div>
</div>

<style>
.auth-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    position: relative;
    overflow: hidden;
}

.auth-page::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url('data:image/svg+xml,<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></svg>');
}

.auth-container {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 450px;
}

.auth-card {
    background: white;
    border-radius: 1.5rem;
    padding: 3rem;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.dark-mode .auth-card {
    background: #1f2937;
}

.auth-header {
    text-align: center;
    margin-bottom: 2rem;
}

.auth-header h1 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    color: #111827;
}

.dark-mode .auth-header h1 {
    color: white;
}

.auth-header p {
    color: #6b7280;
    margin: 0;
}

.dark-mode .auth-header p {
    color: #9ca3af;
}

.auth-form {
    margin-bottom: 1.5rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #374151;
}

.dark-mode .form-group label {
    color: #d1d5db;
}

.form-group input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid #e5e7eb;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: all 0.3s;
}

.dark-mode .form-group input {
    background: #374151;
    border-color: #4b5563;
    color: white;
}

.form-group input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-group-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.checkbox-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    font-size: 0.875rem;
    color: #6b7280;
}

.dark-mode .checkbox-label {
    color: #9ca3af;
}

.forgot-link {
    font-size: 0.875rem;
    color: #3b82f6;
    font-weight: 600;
}

.forgot-link:hover {
    color: #2563eb;
}

.btn-block {
    width: 100%;
    padding: 0.875rem;
    font-size: 1rem;
    font-weight: 700;
}

.auth-divider {
    position: relative;
    text-align: center;
    margin: 1.5rem 0;
}

.auth-divider::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #e5e7eb;
}

.dark-mode .auth-divider::before {
    background: #374151;
}

.auth-divider span {
    position: relative;
    background: white;
    padding: 0 1rem;
    color: #9ca3af;
    font-size: 0.875rem;
    font-weight: 600;
}

.dark-mode .auth-divider span {
    background: #1f2937;
}

.social-login {
    text-align: center;
}

.social-login p {
    color: #6b7280;
    font-size: 0.875rem;
}

.dark-mode .social-login p {
    color: #9ca3af;
}

.social-login a {
    color: #3b82f6;
    font-weight: 700;
}

.social-login a:hover {
    color: #2563eb;
}

.form-message {
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    font-size: 0.875rem;
}

.form-message.success {
    background: #d1fae5;
    color: #065f46;
    border: 1px solid #10b981;
}

.form-message.error {
    background: #fee2e2;
    color: #991b1b;
    border: 1px solid #ef4444;
}

@media (max-width: 640px) {
    .auth-card {
        padding: 2rem;
    }
    
    .auth-header h1 {
        font-size: 1.5rem;
    }
}
</style>

<?php get_footer(); ?>
