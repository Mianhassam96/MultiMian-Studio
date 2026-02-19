import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'

interface ProfileProps {
  profile: {
    username: string
    name: string
    bio?: string
    website?: string
    location?: string
    avatar?: string
    skills: string[]
    socialLinks: {
      linkedin?: string
      github?: string
      twitter?: string
    }
    views: number
    createdAt: string
  } | null
  error?: string
}

export default function PublicProfile({ profile, error }: ProfileProps) {
  if (error || !profile) {
    return (
      <>
        <Head>
          <title>Profile Not Found - MultiMian</title>
        </Head>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-24 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-6xl font-black text-white mb-4">404</h1>
            <p className="text-xl text-gray-400 mb-8">Profile not found</p>
            <Link
              href="/signup"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:shadow-lg transition-all"
            >
              Create Your Own Profile
            </Link>
          </div>
        </div>
      </>
    )
  }

  const joinDate = new Date(profile.createdAt).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <>
      <Head>
        <title>{profile.name} (@{profile.username}) - MultiMian</title>
        <meta name="description" content={profile.bio || `${profile.name}'s profile on MultiMian`} />
        <meta property="og:title" content={`${profile.name} (@${profile.username})`} />
        <meta property="og:description" content={profile.bio || `${profile.name}'s profile on MultiMian`} />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${profile.name} (@${profile.username})`} />
        <meta name="twitter:description" content={profile.bio || `${profile.name}'s profile on MultiMian`} />
      </Head>

      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-24 pb-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Header */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-700 mb-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Avatar */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-5xl font-black">
                {profile.avatar ? (
                  <img src={profile.avatar} alt={profile.name} className="w-full h-full rounded-full object-cover" />
                ) : (
                  profile.name.charAt(0).toUpperCase()
                )}
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-black text-white mb-2">{profile.name}</h1>
                <p className="text-xl text-gray-400 mb-4">@{profile.username}</p>
                
                {profile.bio && (
                  <p className="text-gray-300 mb-4 leading-relaxed">{profile.bio}</p>
                )}

                <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-gray-400">
                  {profile.location && (
                    <span className="flex items-center gap-1">
                      📍 {profile.location}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    📅 Joined {joinDate}
                  </span>
                  <span className="flex items-center gap-1">
                    👁️ {profile.views} views
                  </span>
                </div>
              </div>
            </div>

            {/* Website */}
            {profile.website && (
              <div className="mt-6 pt-6 border-t border-gray-700">
                <a
                  href={profile.website}
                  target="_blank"
                  rel="nofollow ugc"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  🌐 {profile.website}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>

          {/* Skills */}
          {profile.skills && profile.skills.length > 0 && (
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-700 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm font-semibold text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Social Links */}
          {(profile.socialLinks.linkedin || profile.socialLinks.github || profile.socialLinks.twitter) && (
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-700 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">Connect</h2>
              <div className="flex flex-wrap gap-4">
                {profile.socialLinks.linkedin && (
                  <a
                    href={profile.socialLinks.linkedin}
                    target="_blank"
                    rel="nofollow ugc"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    💼 LinkedIn
                  </a>
                )}
                {profile.socialLinks.github && (
                  <a
                    href={profile.socialLinks.github}
                    target="_blank"
                    rel="nofollow ugc"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
                  >
                    💻 GitHub
                  </a>
                )}
                {profile.socialLinks.twitter && (
                  <a
                    href={profile.socialLinks.twitter}
                    target="_blank"
                    rel="nofollow ugc"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
                  >
                    🐦 Twitter
                  </a>
                )}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Want your own profile?</h3>
            <p className="text-gray-300 mb-6">Create your professional profile and share it with the world</p>
            <Link
              href="/signup"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:shadow-lg transition-all"
            >
              Create Your Profile
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { username } = context.params as { username: string }

  try {
    const protocol = context.req.headers.host?.includes('localhost') ? 'http' : 'https'
    const host = context.req.headers.host
    const res = await fetch(`${protocol}://${host}/api/profile/${username}`)
    const data = await res.json()

    if (!data.success) {
      return {
        props: {
          profile: null,
          error: data.message,
        },
      }
    }

    return {
      props: {
        profile: data.profile,
      },
    }
  } catch (error) {
    return {
      props: {
        profile: null,
        error: 'Failed to load profile',
      },
    }
  }
}
