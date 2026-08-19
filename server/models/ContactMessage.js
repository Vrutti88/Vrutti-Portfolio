import mongoose from 'mongoose';

const contactMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters']
    },
    email: {
      type: String,
      required: [true, 'Please provide your email address'],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email address'
      ]
    },
    subject: {
      type: String,
      required: [true, 'Please provide a subject'],
      trim: true,
      maxlength: [150, 'Subject cannot exceed 150 characters']
    },
    message: {
      type: String,
      required: [true, 'Please provide a message body'],
      trim: true,
      maxlength: [3000, 'Message cannot exceed 3000 characters']
    },
    ip: {
      type: String,
      default: 'anonymous'
    },
    userAgent: {
      type: String,
      default: 'unknown'
    },
    status: {
      type: String,
      enum: ['unread', 'read', 'archived'],
      default: 'unread'
    }
  },
  {
    timestamps: true
  }
);

export const ContactMessage = mongoose.models.ContactMessage || mongoose.model('ContactMessage', contactMessageSchema);
