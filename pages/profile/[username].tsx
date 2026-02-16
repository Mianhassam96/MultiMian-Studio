import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface UserProfile {
  id: string
  name: string
  username: string
  email: string
  bio: string
  website?: string
  linkedin?: string
  github?: string
  twitter?: string
  location?: string
  skills: string[]
  role: string
  experience: string
  profileImage?: string
  createdAt: string
}

export default function PublicProfile() {
  const router = useRouter()
  const { username } = router.query
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (username) {
      // TODO: Replace with actual API call
      // For now, using mock data
      const mockProfile: UserProfile = {
        id: '1',
        name: 'Mian Hassam',
        username: username as string,
        email: 'mianhassam96@gmail.com',
        bio: 'Full Stack Developer & Founder of MultiMian. Specializing in React, Next.js, Node.js, and modern web technologies. Building scalable web applications and helping businesses grow online.',
        website: 'https://mianhassam96.github.io/MultiMian-Studio/',
        linkedin: 'https://linkedin.com/in/mianhassam',
        github: 'https://github.com/Mianhassam96',
        twitter: 'https://twitter.com/mianhassam',
        location: 'Pakistan',
        skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'AWS'],
        role: 'Full Stack Developer',
        experience: '5+ years',
        profileImage: '/images/mian-hassam-founder.jpg',
        createdAt: '2024-01-01'
      }
      
      setProfile(mockProfile)
      setLoading(false)
    }
  }, [username])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted">Loading profile...</p>
        </div>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Profile Not Found</h1>
          <p className="text-muted mb-8">The profile you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/profiles" className="glass-button px-6 py-3 rounded-xl">
            Browse All Profiles
          </Link>
        </div>
      </div>
    )
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    url: `https://mianhassam96.github.io/MultiMian-Studio/profile/${profile.username}`,
    jobTitle: profile.role,
    description: profile.bio,
    ...(profile.website && { sameAs: [profile.website] })
  }

  return (
    <>
      <Head>
        <title>{profile.name} | Developer Profile | MultiMian</title>
        <meta name="description" content={`View ${profile.name}'s professional profile, skills, and website on MultiMian. ${profile.role} with expertise in ${profile.skills.slice(0, 3).join(', ')}.`} />
        <meta property="og:title" content={`${profile.name} | Developer Profile | MultiMian`} />
        <meta property="og:description" content={profile.bio} />
        <meta property="og:type" content="profile" />
        <link rel="canonical" href={`https://mianhassam96.github.io/MultiMian-Studio/profile/${profile.username}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-dark/10 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                  {profile.profileImage ? (
                    <img 
                      src={profile.profileImage} 
                      alt={profile.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-5xl font-bold">
                      {profile.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
                  <span className="text-white text-xl">✓</span>
                </div>
              </motion.div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-5xl font-bold mb-2"
                >
                  {profile.name}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-primary font-semibold mb-3"
                >
                  {profile.role}
                </motion.p>

                {profile.location && (
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-muted mb-4 flex items-center justify-center md:justify-start gap-2"
                  >
                    <span>📍</span> {profile.location}
                  </motion.p>
                )}

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-muted mb-6 max-w-2xl"
                >
                  {profile.bio}
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap items-center justify-center md:justify-start gap-4"
                >
                  {profile.website && (
                    <a
                      href={profile.website}
                      target="_blank"
                      rel="ugc nofollow"
                      className="inline-flex items-center gap-2 glass-button px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all"
                    >
                      <span>🌐</span> Visit Website
                    </a>
                  )}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary/30 rounded-xl text-primary hover:bg-primary/5 transition-all font-semibold"
                  >
                    <span>💬</span> Get in Touch
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span>👤</span> About
              </h2>
              <p className="text-muted leading-relaxed whitespace-pre-line">
                {profile.bio}
              </p>
            </motion.section>

            {/* Skills Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span>⚡</span> Skills & Expertise
              </h2>
              <div className="flex flex-wrap gap-3">
                {profile.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary-dark/10 border border-primary/20 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.section>

            {/* Experience Section */}
            {profile.experience && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl"
              >
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span>💼</span> Experience
                </h2>
                <p className="text-muted text-lg">{profile.experience} of professional experience</p>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Social Links */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span>🔗</span> Connect
              </h2>
              <div className="space-y-4">
                {profile.website && (
                  <a
                    href={profile.website}
                    target="_blank"
                    rel="ugc nofollow"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      🌐
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">Website</div>
                      <div className="text-xs text-muted truncate">Visit portfolio</div>
                    </div>
                  </a>
                )}
                
                {profile.github && (
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="ugc nofollow"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      💻
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">GitHub</div>
                      <div className="text-xs text-muted truncate">View code</div>
                    </div>
                  </a>
                )}

                {profile.linkedin && (
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="ugc nofollow"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      💼
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">LinkedIn</div>
                      <div className="text-xs text-muted truncate">Connect professionally</div>
                    </div>
                  </a>
                )}

                {profile.twitter && (
                  <a
                    href={profile.twitter}
                    target="_blank"
                    rel="ugc nofollow"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      🐦
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">Twitter</div>
                      <div className="text-xs text-muted truncate">Follow updates</div>
                    </div>
                  </a>
                )}
              </div>
            </motion.section>

            {/* Member Since */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl text-center"
            >
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="font-bold mb-2">Member Since</h3>
              <p className="text-muted">
                {new Date(profile.createdAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long' 
                })}
              </p>
            </motion.section>

            {/* CTA */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl text-center bg-gradient-to-br from-primary/10 to-primary-dark/10"
            >
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-bold mb-2">Join Our Community</h3>
              <p className="text-sm text-muted mb-4">
                Create your profile and connect with developers
              </p>
              <Link
                href="/signup"
                className="inline-block glass-button px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all"
              >
                Create Profile
              </Link>
            </motion.section>
          </div>
        </div>
      </div>
    </>
  )
}
