import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    title: "MultiMian SkyScope Weather",
    description: "A modern weather app that displays real-time weather data, maps, and forecasts with a responsive and elegant interface.",
    tech: ["Next.js", "React", "OpenWeather API", "Leaflet"],
    image: "/portfolio/skyscope.jpg",
    demo: "https://v0-weather-app-sauqh5veloe.vercel.app/",
    repo: "https://github.com/Mianhassam96/MultiMian-SkyScope"
  },
  {
    title: "MianPix",
    description: "MianPix is a modern, fast, and user-friendly image editing web app that allows anyone to upload, preview, and enhance images instantly. With a clean interface and smooth animations, users can edit photos effortlessly—whether it’s adjusting, cropping, or preparing images for download.",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    image: "/portfolio/MianPix.jpg",
    demo: "https://mianhassam96.github.io/MianPix/",
    repo: "https://github.com/Mianhassam96/MianPix"
  },
  {
    title: "MultiMian TypePro",
    description: "MultiMian TypePro is an advanced, interactive typing speed and accuracy testing tool designed to help users improve their typing skills. It goes beyond basic typing tests by providing real-time analysis, performance metrics, and engaging animations to make practicing fun and productive.",
    tech: ["React", "Node.js", "D3.js", "PostgreSQL"],
    image: "/portfolio/dashboard.jpg",
    demo: "https://mianhassam96.github.io/MultiMian-TypePro/",
    repo: "https://github.com/Mianhassam96/MultiMian-TypePro"
  },
  {
    title: "Real-time Character Counter",
    description: "A Real-time Character Counter that helps users track the number of characters, words, and remaining characters while typing. Features include a customizable character limit, a progress bar, copy and reset buttons, speech-to-text functionality, and a dark mode toggle for an enhanced user experience. Built with HTML, CSS, and JavaScript.",
    tech: ["React", "Node.js", "D3.js", "PostgreSQL"],
    image: "/portfolio/dashboard.jpg",
    demo: "https://real-time-character-counter-blond.vercel.app/",
    repo: "https://github.com/Mianhassam96/Real-Time-Character-Counter"
  },
  {
    title: "Video-Processor",
    description: "Video-Processor is your all-in-one solution for seamless video handling. Upload videos, generate instant links, and download them in versatile formats—original, audio-only, or muted. Built with cutting-edge technologies like Vite, TypeScript, React, shadcn-ui, and Tailwind CSS for an exceptional experience.",
    tech: ["React", "Node.js", "D3.js", "PostgreSQL"],
    image: "/portfolio/dashboard.jpg",
    demo: "https://video-processor-lac.vercel.app/",
    repo: "https://github.com/Mianhassam96/Video-Processor"
  },
    {
    title: "GitHub-Profile-Viewer---MultiMian",
    description: "A web app to search and view GitHub profiles, showcasing user details, repositories, followers, and more. Built with HTML, CSS, and JavaScript, this app uses the GitHub API to fetch data. Features a clean UI with responsive design and includes social media links. A simple tool for exploring GitHub users.",
    tech: ["React", "Node.js", "D3.js", "PostgreSQL"],
    image: "/portfolio/dashboard.jpg",
    demo: "https://git-hub-profile-viewer-multi-mian.vercel.app/",
    repo: "https://github.com/Mianhassam96/GitHub-Profile-Viewer---MultiMian"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Portfolio() {
  return (
    <div className="container py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
          Portfolio Showcase: Dive into My World of Code
        </h1>
        <p className="text-xl text-muted mb-4">
          Every project I create tells a story — a blend of innovation, logic, and design. From sleek frontends to powerful backends, each piece of work reflects my passion for building functional, scalable, and visually engaging digital solutions.
        </p>
        <p className="text-md text-muted">
          I’ve developed everything from interactive tools and business websites to AI-powered applications and creative platforms, each tailored to deliver real results and a seamless user experience.
        </p>

        <div className="mt-6 inline-flex items-center gap-3 text-sm text-primary bg-primary/5 px-4 py-2 rounded-xl">
          <span>💡</span>
          <span>Explore my latest projects that showcase what’s possible when creativity meets clean code.</span>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="glass-card rounded-2xl overflow-hidden group"
          >
            <div className="aspect-video bg-primary/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20"></div>
              {/* Add actual project images here */}
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span 
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {project.demo && project.demo !== '#' && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-accentBlue text-white rounded-md hover:opacity-95 transition">
                    Live Demo
                  </a>
                )}
                {project.repo && project.repo !== '#' && (
                  <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-primary/20 rounded-md text-primary hover:bg-primary/5 transition">
                    GitHub Repo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center"
      >
        <Link href="/contact" className="inline-flex items-center gap-2 glass-button px-8 py-4 rounded-xl font-medium">
          Start Your Project
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
          </svg>
        </Link>
      </motion.div>
    </div>
  )
}
