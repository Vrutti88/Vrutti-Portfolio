import mongoose from 'mongoose';

const skillItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String, default: 'Proficient' },
  usage: { type: String, required: true },
  icon: { type: String }
});

const skillCategorySchema = new mongoose.Schema(
  {
    category: { type: String, required: true, unique: true },
    description: { type: String },
    skills: [skillItemSchema]
  },
  {
    timestamps: true
  }
);

export const Skill = mongoose.models.Skill || mongoose.model('Skill', skillCategorySchema);
