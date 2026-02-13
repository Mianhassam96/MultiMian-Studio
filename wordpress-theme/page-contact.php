<?php
/**
 * Template Name: Contact Page
 * 
 * @package MultiMian
 */

get_header();
?>

<div class="py-16 md:py-24">
    <div class="container max-w-6xl">
        <div class="text-center mb-16">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                Let's Start Your <span class="gradient-text">Project</span>
            </h1>
            <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Ready to transform your ideas into reality? Get in touch and let's discuss how we can help your business grow.
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Us a Message</h2>
                
                <form id="contact-form" class="space-y-6">
                    <div>
                        <label for="name" class="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Your Name</label>
                        <input type="text" id="name" name="name" required class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600">
                    </div>
                    
                    <div>
                        <label for="email" class="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Email Address</label>
                        <input type="email" id="email" name="email" required class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600">
                    </div>
                    
                    <div>
                        <label for="phone" class="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Phone Number (Optional)</label>
                        <input type="tel" id="phone" name="phone" class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600">
                    </div>
                    
                    <div>
                        <label for="service" class="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Service Interested In</label>
                        <select id="service" name="service" class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600">
                            <option value="">Select a service</option>
                            <option value="business-website">Business Website</option>
                            <option value="web-application">Web Application</option>
                            <option value="ecommerce">E-Commerce</option>
                            <option value="redesign">Website Redesign</option>
                            <option value="optimization">Optimization & Support</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    
                    <div>
                        <label for="message" class="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Project Details</label>
                        <textarea id="message" name="message" rows="5" required class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                    </div>
                    
                    <button type="submit" class="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                        Send Message
                    </button>
                </form>
            </div>

            <!-- Contact Information -->
            <div class="space-y-8">
                <!-- Contact Details -->
                <div class="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                    <h2 class="text-2xl font-bold mb-6">Get In Touch</h2>
                    
                    <div class="space-y-6">
                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold mb-1">Email</h3>
                                <a href="mailto:mianhassam96@gmail.com" class="text-white/90 hover:text-white">mianhassam96@gmail.com</a>
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold mb-1">Phone</h3>
                                <a href="tel:+923258831437" class="text-white/90 hover:text-white">+92 325 883 1437</a>
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold mb-1">WhatsApp</h3>
                                <a href="https://wa.me/923258831437" target="_blank" class="text-white/90 hover:text-white">Chat with us instantly</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Quick Response -->
                <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                    <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">Quick Response Guaranteed</h3>
                    <ul class="space-y-3 text-gray-600 dark:text-gray-400">
                        <li class="flex items-start gap-3">
                            <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Response within 24 hours</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Free consultation included</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span>No obligation quote</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Detailed project roadmap</span>
                        </li>
                    </ul>
                </div>

                <!-- Business Hours -->
                <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                    <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">Business Hours</h3>
                    <div class="space-y-2 text-gray-600 dark:text-gray-400">
                        <div class="flex justify-between">
                            <span>Monday - Friday:</span>
                            <span class="font-semibold">9:00 AM - 6:00 PM</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Saturday:</span>
                            <span class="font-semibold">10:00 AM - 4:00 PM</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Sunday:</span>
                            <span class="font-semibold">Closed</span>
                        </div>
                    </div>
                    <p class="mt-4 text-sm text-gray-500 dark:text-gray-500">
                        * Emergency support available 24/7 for existing clients
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<?php
get_footer();
