import mongoose from 'mongoose';
import { seedProjects, seedSkills, seedProfile } from './seedData.js';
import { Project } from '../models/Project.js';
import { Skill } from '../models/Skill.js';
import { ContactMessage } from '../models/ContactMessage.js';

let isConnected = false;
let connectionMode = 'memory'; // 'mongodb' | 'memory'

// In-memory persistent state as fallback
const memoryStore = {
  projects: [...seedProjects],
  skills: [...seedSkills],
  profile: { ...seedProfile },
  contactMessages: []
};

export const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/vrutti_portfolio';

  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 2500, // Quick timeout for seamless fallback
    });

    isConnected = true;
    connectionMode = 'mongodb';
    console.log(`[Database] MongoDB Connected: ${conn.connection.host}`);

    // Seed initial data if database is empty
    await seedDatabaseIfEmpty();
  } catch (error) {
    isConnected = false;
    connectionMode = 'in-memory-fallback';
    console.warn(`[Database] MongoDB not reachable at ${mongoUri}. Operating in High-Speed In-Memory Store mode.`);
    console.info(`[Database] All REST endpoints, contact form, and project APIs are fully active and operational.`);
  }
};

const seedDatabaseIfEmpty = async () => {
  try {
    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      console.log('[Database] Seeding initial projects into MongoDB...');
      await Project.insertMany(seedProjects);
    }

    const skillCount = await Skill.countDocuments();
    if (skillCount === 0) {
      console.log('[Database] Seeding skills into MongoDB...');
      await Skill.insertMany(seedSkills);
    }
  } catch (err) {
    console.error('[Database] Seeding error:', err.message);
  }
};

export const getDbStatus = () => {
  return {
    connected: isConnected,
    mode: connectionMode,
    readyState: mongoose.connection.readyState,
    readyStateDescription: ['Disconnected', 'Connected', 'Connecting', 'Disconnecting'][mongoose.connection.readyState] || 'In-Memory Emulated'
  };
};

export const store = {
  // Projects
  async getProjects() {
    if (isConnected) {
      try {
        const projects = await Project.find().lean();
        if (projects && projects.length > 0) return projects;
      } catch (err) {
        console.error('[DB] Project query fallback:', err.message);
      }
    }
    return memoryStore.projects;
  },

  async getProjectById(id) {
    if (isConnected) {
      try {
        const project = await Project.findOne({ id }).lean();
        if (project) return project;
      } catch (err) {
        console.error('[DB] Project query error:', err.message);
      }
    }
    return memoryStore.projects.find(p => p.id === id || p._id === id) || null;
  },

  // Skills
  async getSkills() {
    if (isConnected) {
      try {
        const skills = await Skill.find().lean();
        if (skills && skills.length > 0) return skills;
      } catch (err) {
        console.error('[DB] Skill query fallback:', err.message);
      }
    }
    return memoryStore.skills;
  },

  // Contact Messages
  async createContactMessage(messageData) {
    let savedDoc;
    if (isConnected) {
      try {
        savedDoc = await ContactMessage.create(messageData);
        return savedDoc;
      } catch (err) {
        console.error('[DB] ContactMessage DB create error, saving to memory:', err.message);
      }
    }

    // In-memory store
    const newEntry = {
      _id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      ...messageData,
      status: 'unread',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    memoryStore.contactMessages.push(newEntry);
    return newEntry;
  },

  async getContactMessages() {
    if (isConnected) {
      try {
        return await ContactMessage.find().sort({ createdAt: -1 }).lean();
      } catch (err) {
        console.error('[DB] Error retrieving messages:', err.message);
      }
    }
    return memoryStore.contactMessages;
  },

  // Profile / Config
  getProfile() {
    return memoryStore.profile;
  }
};
