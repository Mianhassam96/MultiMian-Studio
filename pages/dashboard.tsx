import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProtectedRoute from '../components/ProtectedRoute'

interface User {
  id: string
  name: string
  email: string
  hasProfile: boolean
  username?: string
}

function DashboardContent() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [profileLink, setProfileLink] = useState('')

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    try {
      const res = await fetch('/api/auth/me')
      const data = await res.json()

      if (!data.success) {
        router.push('/login')
        return
      }

      setUser(data.user)
      if (data.user.username) {
        setProfileLink(`${window.location.origin}/u/${data.user.username}`)
      }
    } catch (err) {
      router.push('/login')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/')
  }

  const copyProfileLink = () => {
    navigator.clipboard.writeText(profileLink)
    toast.success('Profile link copied!')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!user) return null

  return (
    <>
      <Head>
        <title>Dashboard - MultiMian</title>
      </Head>

      <ToastContainer position="top-right" theme="dark" />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-24">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                Welcome to Your Dashboard
              </h1>
              <p className="text-xl text-gray-400">Manage your profile and share it with the world</p>
            </div>

            {!user.hasProfile ? (
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-2 border-blue-500 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h2 className="text-2xl font-bold text-white mb-4">Create Your Profile</h2>
                <p className="text-gray-300 mb-6">
                  Set up your public profile to share with the world
                </p>
                <Link
                  href="/create-profile"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:shadow-lg transition-all"
                >
                  Create Profile Now
                </Link>
              </div>
            ) : (
              <>
                <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-700">
                  <h2 className="text-2xl font-bold text-white mb-6">Your Public Profile</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Profile Link
                      </label>
                      <div className="flex gap-3">
                        <input
                          type="text"
                          readOnly
                          value={profileLink}
                          className="flex-1 px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white"
                        />
                        <button
                          onClick={copyProfileLink}
                          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                        >
                          📋 Copy
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Link
                        href={`/u/${user.username}`}
                        target="_blank"
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center rounded-lg font-semibold hover:shadow-lg transition-all"
                      >
                        👁️ View Profile
                      </Link>
                      <Link
                        href="/edit-profile"
                        className="flex-1 px-6 py-3 border-2 border-blue-500 text-blue-400 text-center rounded-lg font-semibold hover:bg-blue-500/10 transition-all"
                      >
                        ✏️ Edit Profile
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
                    <div className="text-4xl mb-3">👁️</div>
                    <div className="text-3xl font-bold text-white mb-1">0</div>
                    <div className="text-sm text-gray-400">Profile Views</div>
                  </div>

                  <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
                    <div className="text-4xl mb-3">🔗</div>
                    <div className="text-3xl font-bold text-white mb-1">0</div>
                    <div className="text-sm text-gray-400">Link Clicks</div>
                  </div>

                  <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
                    <div className="text-4xl mb-3">📊</div>
                    <div className="text-3xl font-bold text-white mb-1">100%</div>
                    <div className="text-sm text-gray-400">Profile Complete</div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>

        {/* Logout Button - Floating */}
        <div className="fixed bottom-8 right-8 z-40">
          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold shadow-lg transition-all flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </>
  )
}

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  )
}
