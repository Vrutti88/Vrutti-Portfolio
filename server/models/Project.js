import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    shortTitle: { type: String, required: true },
    category: { type: String, required: true },
    badge: { type: String, default: 'BACKEND' },
    year: { type: String, default: '2024' },
    tagline: { type: String, required: true },
    description: { type: String, required: true },
    problem: { type: String },
    solution: { type: String },
    technologies: [{ type: String }],
    architectureNodes: [
      {
        name: { type: String },
        role: { type: String },
        icon: { type: String }
      }
    ],
    features: [{ type: String }],
    backendDetails: { type: mongoose.Schema.Types.Mixed },
    apiEndpoints: [
      {
        method: { type: String },
        path: { type: String },
        description: { type: String }
      }
    ],
    challenges: [{ type: String }],
    results: [{ type: String }],
    github: { type: String },
    liveDemo: { type: String },
    documentation: { type: String },
    featured: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
);

export const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);
