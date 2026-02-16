import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

interface Profile {
  id: string
  name: string
  username: string
  role: string
  bio: string
  skills: string[]
  location: string
  profileImage?: string
}

export default function Profiles() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  // Mock data - Replace with actual API call
  const profiles: Profile[] = [
    {
      id: '1',
      name: 'Mian Hassam',
      username: 'mian-hassam',
      role: 'Full Stack Developer',
      bio: 'Founder of MultiMian. Specializing in React, Next.js, and Node.js.',
      skills: ['React', 'Next.js', 'Node.js', 'TypeScript'],
      location: 'Pakistan',
      profileImage: '/images/mian-hassam-founder.jpg'
    }
    // Add more profiles here
  ]

  const allSkills = Array.from(new Set(profiles.flatMap(p => p.skills)))

  const filteredProfiles = profiles.filter(profile => {
    const matchesSearch = profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         profile.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         profile.bio.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesSkill = !selectedSkill || profile.skills.includes(selectedSkill)
    
    return matchesSearch && matchesSkill
  })

  return (
    <>
      <Head>
        <title>Developer Profiles | MultiMian Community</title>
        <meta name="description" content="Browse developer profiles in the MultiMian community. Connect with talented developers, designers, and tech professionals." />
        <meta name="keywords" content="developer profiles, tech community, web developers, React developers, Next.js developers, MultiMian" />
      </Head>

      <div className="py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
            <span className="text-sm font-medium text-primary">👥 Developer Community</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Meet Our Developer Community
          </h1>
          
          <p className="text-xl md:text-2xl text-muted leading-relaxed mb-8">
            Connect with talented developers, designers, and tech professionals from around the world.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 glass-button px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              <span>🚀</span> Create Your Profile
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary/30 rounded-xl text-primary hover:bg-primary/5 transition-all font-semibold text-lg"
            >
              Learn More
            </Link>
          </div>
        </motion.section>

        {/* Search and Filter */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="glass-card p-6 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, role, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🔍</span>
              </div>

              {/* Results Count */}
              <div className="flex items-center justify-center md:justify-end gap-2 text-muted">
                <span className="font-semibold text-primary">{filteredProfiles.length}</span>
                <span>{filteredProfiles.length === 1 ? 'profile' : 'profiles'} found</span>
              </div>
            </div>

            {/* Skill Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedSkill(null)}
                className={`px-4 py-2 rounded-xl font-medium transition-all ${
                  !selectedSkill
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                All Skills
              </button>
              {allSkills.map((skill, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSkill(skill)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all ${
                    selectedSkill === skill
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Profiles Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {filteredProfiles.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No profiles found</h3>
              <p className="text-muted mb-6">Try adjusting your search or filters</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedSkill(null)
                }}
                className="glass-button px-6 py-3 rounded-xl font-semibold"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProfiles.map((profile, idx) => (
                <motion.div
                  key={profile.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all group"
                >
                  <Link href={`/profile/${profile.username}`}>
                    <div className="text-center">
                      {/* Profile Image */}
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-all">
                        {profile.profileImage ? (
                          <img 
                            src={profile.profileImage} 
                            alt={profile.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-3xl font-bold">
                            {profile.name.charAt(0)}
                          </div>
                        )}
                      </div>

                      {/* Name and Role */}
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {profile.name}
                      </h3>
                      <p className="text-primary font-semibold mb-3">{profile.role}</p>

                      {/* Location */}
                      <p className="text-sm text-muted mb-4 flex items-center justify-center gap-1">
                        <span>📍</span> {profile.location}
                      </p>

                      {/* Bio */}
                      <p className="text-sm text-muted mb-4 line-clamp-2">
                        {profile.bio}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 justify-center mb-4">
                        {profile.skills.slice(0, 3).map((skill, skillIdx) => (
                          <span
                            key={skillIdx}
                            className="text-xs px-3 py-1 bg-primary/10 border border-primary/20 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                        {profile.skills.length > 3 && (
                          <span className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                            +{profile.skills.length - 3}
                          </span>
                        )}
                      </div>

                      {/* View Profile Button */}
                      <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        View Profile
                        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center glass-card p-12 rounded-3xl bg-gradient-to-r from-primary/10 to-primary-dark/10"
        >
          <div className="text-5xl mb-4">🚀</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Growing Community</h2>
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Create your profile, showcase your skills, and connect with other developers.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 glass-button px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            Create Your Profile Now
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.section>
      </div>
    </>
  )
}
