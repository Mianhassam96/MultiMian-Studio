import mongoose, { Schema, Document, Model } from 'mongoose'

export interface ISocialLinks {
  linkedin?: string
  github?: string
  twitter?: string
}

export interface IProfile extends Document {
  userId: mongoose.Types.ObjectId
  username: string
  bio?: string
  website?: string
  location?: string
  avatar?: string
  skills: string[]
  socialLinks: ISocialLinks
  isPublic: boolean
  views: number
  createdAt: Date
  updatedAt: Date
}

const ProfileSchema: Schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
      trim: true,
      lowercase: true,
      minlength: [3, 'Username must be at least 3 characters'],
      maxlength: [30, 'Username cannot exceed 30 characters'],
      match: [/^[a-z0-9_-]+$/, 'Username can only contain lowercase letters, numbers, hyphens, and underscores'],
    },
    bio: {
      type: String,
      maxlength: [300, 'Bio cannot exceed 300 characters'],
      trim: true,
    },
    website: {
      type: String,
      trim: true,
      match: [/^https?:\/\/.+/, 'Please enter a valid URL'],
    },
    location: {
      type: String,
      trim: true,
      maxlength: [100, 'Location cannot exceed 100 characters'],
    },
    avatar: {
      type: String,
      default: '',
    },
    skills: {
      type: [String],
      default: [],
      validate: {
        validator: function(v: string[]) {
          return v.length <= 20
        },
        message: 'Cannot have more than 20 skills',
      },
    },
    socialLinks: {
      linkedin: { type: String, trim: true },
      github: { type: String, trim: true },
      twitter: { type: String, trim: true },
    },
    isPublic: {
      type: Boolean,
      default: true,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

ProfileSchema.index({ username: 1 })
ProfileSchema.index({ userId: 1 })
ProfileSchema.index({ isPublic: 1 })

const Profile: Model<IProfile> = mongoose.models.Profile || mongoose.model<IProfile>('Profile', ProfileSchema)

export default Profile
