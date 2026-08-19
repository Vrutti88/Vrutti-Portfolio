import express from 'express';
import { getHealth, pingPong } from '../controllers/healthController.js';
import { getAllProjects, getProjectById } from '../controllers/projectController.js';
import { getAllSkills } from '../controllers/skillController.js';
import { submitContact, getContactMessages } from '../controllers/contactController.js';
import { getGitHubProfile, getGitHubRepos, getStats, getProfileInfo } from '../controllers/githubController.js';
import { validateContactInput } from '../middleware/validation.js';
import { contactLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

// System Health & Monitoring
router.get('/health', getHealth);
router.post('/ping', pingPong);
router.get('/stats', getStats);
router.get('/profile', getProfileInfo);

// Projects
router.get('/projects', getAllProjects);
router.get('/projects/:id', getProjectById);

// Skills
router.get('/skills', getAllSkills);

// GitHub Integration
router.get('/github/profile', getGitHubProfile);
router.get('/github/repos', getGitHubRepos);

// Contact Form (with validation and strict rate limiter)
router.post('/contact', contactLimiter, validateContactInput, submitContact);
router.get('/contact', getContactMessages);
router.get('/contact/messages', getContactMessages);

export default router;
