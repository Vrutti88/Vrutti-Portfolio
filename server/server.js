import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import apiRoutes from './routes/apiRoutes.js';
import { apiLimiter } from './middleware/rateLimiter.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Connect Database (with automatic fallback to resilient in-memory storage)
connectDB();

// Security Headers
app.use(
  helmet({
    crossOriginResourcePolicy: false,
    contentSecurityPolicy: false
  })
);

// CORS configuration
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:3000',
  process.env.CLIENT_URL
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
        callback(null, true);
      } else {
        callback(null, true); // Permissive for local dev preview
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
  })
);

// Body Parsers
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Request Logger
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[API] ${req.method} ${req.originalUrl} ${res.statusCode} (${duration}ms)`);
  });
  next();
});

// Root API Greeting & System Meta
app.get('/', (req, res) => {
  res.status(200).json({
    system: "VRUTTI.DEV Backend Command Center",
    status: "ONLINE",
    tagline: "Building robust backend systems and scalable APIs that power real-world applications.",
    developer: {
      name: "Vrutti Patil",
      role: "B.Tech CSE Student & Backend Developer",
      github: "https://github.com/Vrutti88",
      linkedin: "https://linkedin.com/in/vruttipatil/",
      email: "vruttipatil1396@gmail.com"
    },
    endpoints: {
      health: "/api/health",
      projects: "/api/projects",
      skills: "/api/skills",
      stats: "/api/stats",
      github_profile: "/api/github/profile",
      github_repos: "/api/github/repos",
      contact: "POST /api/contact"
    }
  });
});

// Mount API routes under /api with rate limiting
app.use('/api', apiLimiter, apiRoutes);

// Error Handlers
app.use(notFoundHandler);
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 VRUTTI.DEV Backend API Engine ONLINE on port ${PORT}`);
  console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`📂 Projects:     http://localhost:${PORT}/api/projects`);
  console.log(`⚡ Skills:       http://localhost:${PORT}/api/skills`);
  console.log(`=======================================================`);
});
