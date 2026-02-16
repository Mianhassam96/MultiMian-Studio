import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

interface User {
  name: string
  email: string
  loggedIn: boolean
}

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [profileStrength, setProfileStrength] = useState(75) // Mock profile completion percentage

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user')
    if (!userData) {
      router.push('/login')
      return
    }
    
    try {
      const parsedUser = JSON.parse(userData)
      if (!parsedUser.loggedIn) {
        router.push('/login')
        return
      }
      setUser(parsedUser)
    } catch {
      router.push('/login')
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/')
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'profile', name: 'My Profile', icon: '👤' },
    { id: 'projects', name: 'My Projects', icon: '💼' },
    { id: 'submit', name: 'Submit Project', icon: '➕' },
    { id: 'articles', name: 'My Articles', icon: '📝' },
    { id: 'resources', name: 'Saved Resources', icon: '📚' },
    { id: 'settings', name: 'Account Settings', icon: '⚙️' },
  ]

  return (
    <>
      <Head>
        <title>Dashboard - MultiMian</title>
        <meta name="description" content="Manage your projects, submit requests, and access premium content." />
      </Head>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-2xl font-bold" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                <span className="text-blue-600 dark:text-blue-400">MULTI</span>
                <span className="text-gray-900 dark:text-white">MIAN</span>
              </Link>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Welcome, <strong className="text-gray-900 dark:text-white">{user.name}</strong>
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-3">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{user.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
                </div>

                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-semibold'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <span className="text-xl">{tab.icon}</span>
                      <span>{tab.name}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-3xl">💼</span>
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Active</span>
                        </div>
                        <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">0</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Active Projects</div>
                      </div>

                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-3xl">📝</span>
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Published</span>
                        </div>
                        <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">0</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Articles</div>
                      </div>

                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-3xl">📚</span>
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Saved</span>
                        </div>
                        <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">0</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Resources</div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button
                          onClick={() => setActiveTab('submit')}
                          className="flex items-center gap-3 p-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
                        >
                          <span className="text-2xl">➕</span>
                          <div className="text-left">
                            <div className="font-semibold text-gray-900 dark:text-white">Submit New Project</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Start a new project request</div>
                          </div>
                        </button>

                        <button
                          onClick={() => setActiveTab('articles')}
                          className="flex items-center gap-3 p-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-500 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
                        >
                          <span className="text-2xl">✍️</span>
                          <div className="text-left">
                            <div className="font-semibold text-gray-900 dark:text-white">Write Guest Article</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Submit a guest post</div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'profile' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-6">
                      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Profile</h1>
                      <Link
                        href="/profile/mian-hassam"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                      >
                        <span>👁️</span> View Public Profile
                      </Link>
                    </div>

                    {/* Profile Strength */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-900/30">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-lg mb-1">Profile Strength</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Complete your profile to increase visibility</p>
                        </div>
                        <div className="text-right">
                          <div className="text-4xl font-bold text-blue-600">{profileStrength}%</div>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-4 rounded-full transition-all duration-500"
                          style={{ width: `${profileStrength}%` }}
                        ></div>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="text-xs px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">✓ Basic Info</span>
                        <span className="text-xs px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">✓ Bio</span>
                        <span className="text-xs px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">✓ Skills</span>
                        <span className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">○ Website</span>
                        <span className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">○ Social Links</span>
                      </div>
                    </div>

                    {/* Profile Form */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Edit Profile</h2>
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              defaultValue={user.name}
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Username * <span className="text-xs text-gray-500">(unique)</span>
                            </label>
                            <input
                              type="text"
                              defaultValue="mian-hassam"
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                            <p className="text-xs text-gray-500 mt-1">Your profile URL: multimian.com/profile/mian-hassam</p>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Role / Title *
                          </label>
                          <input
                            type="text"
                            defaultValue="Full Stack Developer"
                            placeholder="e.g., Full Stack Developer, UI/UX Designer"
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Bio * <span className="text-xs text-gray-500">(500-1000 characters)</span>
                          </label>
                          <textarea
                            rows={6}
                            defaultValue="Full Stack Developer & Founder of MultiMian. Specializing in React, Next.js, Node.js, and modern web technologies."
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="Tell us about yourself, your experience, and what you do..."
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Location
                          </label>
                          <input
                            type="text"
                            defaultValue="Pakistan"
                            placeholder="e.g., New York, USA"
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Experience Level
                          </label>
                          <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                            <option>Junior (0-2 years)</option>
                            <option>Mid-Level (2-5 years)</option>
                            <option selected>Senior (5+ years)</option>
                            <option>Expert (10+ years)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Skills <span className="text-xs text-gray-500">(comma separated)</span>
                          </label>
                          <input
                            type="text"
                            defaultValue="React, Next.js, Node.js, TypeScript, MongoDB"
                            placeholder="React, Node.js, Python, etc."
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                        </div>

                        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Links & Social Media</h3>
                          
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                🌐 Website URL
                              </label>
                              <input
                                type="url"
                                placeholder="https://yourwebsite.com"
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                              />
                              <p className="text-xs text-gray-500 mt-1">Links will be marked as rel=&quot;ugc nofollow&quot; for SEO safety</p>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                💼 LinkedIn
                              </label>
                              <input
                                type="url"
                                placeholder="https://linkedin.com/in/yourprofile"
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                💻 GitHub
                              </label>
                              <input
                                type="url"
                                placeholder="https://github.com/yourusername"
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                🐦 Twitter
                              </label>
                              <input
                                type="url"
                                placeholder="https://twitter.com/yourusername"
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-4 pt-6">
                          <button
                            type="submit"
                            className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                          >
                            Save Changes
                          </button>
                          <button
                            type="button"
                            className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>

                    {/* Copy Profile Link */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                      <h3 className="font-bold text-lg mb-4">Share Your Profile</h3>
                      <div className="flex gap-3">
                        <input
                          type="text"
                          readOnly
                          value="https://multimian.com/profile/mian-hassam"
                          className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                        />
                        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                          Copy Link
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'projects' && (
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Projects</h2>
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4">💼</div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">No projects yet</p>
                      <button
                        onClick={() => setActiveTab('submit')}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                      >
                        Submit Your First Project
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'submit' && (
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Submit New Project</h2>
                    <form className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Project Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          placeholder="My Awesome Project"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Project Type
                        </label>
                        <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                          <option>Business Website</option>
                          <option>Web Application</option>
                          <option>E-Commerce</option>
                          <option>Landing Page</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Project Description
                        </label>
                        <textarea
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          placeholder="Tell us about your project..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all"
                      >
                        Submit Project Request
                      </button>
                    </form>
                  </div>
                )}

                {activeTab === 'articles' && (
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Articles</h2>
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4">📝</div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">No articles yet</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                        Submit guest articles to share your knowledge and get backlinks
                      </p>
                      <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors">
                        Write Your First Article
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'resources' && (
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Saved Resources</h2>
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4">📚</div>
                      <p className="text-gray-600 dark:text-gray-400">No saved resources yet</p>
                    </div>
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Account Settings</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={user.name}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          readOnly
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={user.email}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          readOnly
                        />
                      </div>

                      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                        Update Profile
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
