import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  // Basic Information
  name: {
    type: String,
    required: [true, 'Skill name is required'],
    trim: true,
    maxlength: [50, 'Skill name cannot exceed 50 characters'],
    unique: true,
    index: true
  },

  // File Upload Fields
  logo: {
    type: String, 
  },
  originalLogoName: {
    type: String,
    required: [true, 'Original logo name is required']
  },
  logoFile: {
    type: Buffer, 
    select: false 
  },
  logoContentType: {
    type: String,
    select: false
  },

  // Links
  link: {
    type: String,
    required: [true, 'Documentation link is required'],
    validate: {
      validator: function(v) {
        return /^(https?:\/\/).+\..+/i.test(v);
      },
      message: props => `${props.value} is not a valid URL!`
    }
  },

  // Categorization
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: {
      values: [
        'frontend',
        'backend',
        'database',
        'authentication',
        'devops',
        'testing',
        'ui-ux',
        'mobile',
        'other'
      ],
      message: '{VALUE} is not a valid category'
    },
    default: 'other',
    index: true
  },

  // Metadata
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for logo URL
skillSchema.virtual('logoUrl').get(function() {
  return `${process.env.BASE_URL}${this.logo}`;
});

// Virtual for logo preview (base64)
skillSchema.virtual('logoPreview').get(function() {
  if (this.logoFile && this.logoContentType) {
    return `data:${this.logoContentType};base64,${this.logoFile.toString('base64')}`;
  }
  return this.logoUrl;
});

// Update timestamp before saving
skillSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});



const Skill = mongoose.models.skills || mongoose.model('skills', skillSchema);

export default Skill;