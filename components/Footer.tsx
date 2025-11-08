export default function Footer() {
  return (
    <footer className="border-t bg-gradient-to-r from-white/60 via-primary/5 to-white/60 dark:from-gray-900/60 dark:via-primary/5 dark:to-gray-900/60 backdrop-blur-sm">
      <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-muted">
          © {new Date().getFullYear()} Mian Hassam — Full-stack developer
          <br />
          <span className="text-xs opacity-75">Building amazing digital experiences</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-sm text-muted">
            <a href="#" className="hover:text-primary transition-colors duration-300 hover:underline">Privacy</a>
            <span aria-hidden>·</span>
            <a href="#" className="hover:text-primary transition-colors duration-300 hover:underline">Terms</a>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="https://github.com/Mianhassam96" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover-lift p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-muted"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.8-1.4-3.8-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.7 1.6.7 1.7 1.6.1 3.1-1.1 3.8-2 .1-.9.6-1.5 1-1.9-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2.9-.2 1.8-.3 2.7-.3s1.9.1 2.7.3c2.3-1.6 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.7.9 1.2 2 1.2 3.3 0 4.4-2.8 5.4-5.4 5.7.6.5 1 1.3 1 2.6v3.8c0 .4.2.8.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/mianhassam96/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover-lift p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-muted"><path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.07 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM8.5 8h3.8v2.18h.06c.53-1 1.82-2.06 3.75-2.06 4 0 4.74 2.64 4.74 6.07V24h-4V15.5c0-2.04-.04-4.66-2.84-4.66-2.84 0-3.28 2.22-3.28 4.5V24h-4z"/></svg>
            </a>
            <a href="https://www.facebook.com/mian.hassam.kz" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover-lift p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-muted"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="https://twitter.com/mianhassam96" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover-lift p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-muted"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
