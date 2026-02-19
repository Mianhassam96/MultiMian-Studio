<?php
/**
 * Template Name: Signup Page
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
                <h1>Create Account</h1>
                <p>Sign up to get started with MultiMian</p>
            </div>

            <form id="registerForm" class="auth-form">
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="name" required placeholder="John Doe">
                </div>

                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="your@email.com">
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required placeholder="Create a strong password" minlength="8">
                </div>

                <div class="form-group">
                    <label for="confirm_password">Confirm Password</label>
                    <input type="password" id="confirm_password" name="confirm_password" required placeholder="Confirm your password" minlength="8">
                </div>

                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" name="terms" required>
                        <span>I agree to the <a href="<?php echo esc_url(home_url('/terms')); ?>" target="_blank">Terms of Service</a> and <a href="<?php echo esc_url(home_url('/privacy-policy')); ?>" target="_blank">Privacy Policy</a></span>
                    </label>
                </div>

                <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
            </form>

            <div class="auth-divider">
                <span>OR</span>
            </div>

            <div class="social-login">
                <p>Already have an account? <a href="<?php echo esc_url(home_url('/login')); ?>">Login</a></p>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>
