import axios from 'axios';
import { memoryCache } from './cache.js';

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'Vrutti88';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';

const getAuthHeaders = () => {
  const headers = {
    'User-Agent': 'Vrutti-Patil-Developer-Portfolio/1.0',
    'Accept': 'application/vnd.github.v3+json'
  };
  if (GITHUB_TOKEN) {
    headers['Authorization'] = `token ${GITHUB_TOKEN}`;
  }
  return headers;
};

// Fallback data if GitHub is unreachable
const fallbackProfile = {
  login: "Vrutti88",
  name: "Vrutti Patil",
  bio: "B.Tech CSE Student | Backend, APIs, Cloud & System Design Enthusiast",
  public_repos: 15,
  public_gists: 0,
  followers: 12,
  following: 15,
  avatar_url: "https://avatars.githubusercontent.com/u/149861614?v=4",
  html_url: "https://github.com/Vrutti88",
  company: "ITM Skills University",
  location: "Kharghar, Navi Mumbai",
  created_at: "2023-11-04T12:00:00Z"
};

const fallbackRepos = [
  {
    id: 101,
    name: "LinguaHub",
    full_name: "Vrutti88/LinguaHub",
    description: "Full-Stack MERN language learning platform with JWT auth, RBAC, quizzes, streaks & leaderboards.",
    html_url: "https://github.com/Vrutti88/LinguaHub",
    language: "JavaScript",
    stargazers_count: 8,
    forks_count: 2,
    updated_at: new Date().toISOString(),
    topics: ["react", "nodejs", "express", "mongodb", "jwt", "gamification"]
  },
  {
    id: 102,
    name: "Peer-Tutor",
    full_name: "Vrutti88/Peer-Tutor",
    description: "Peer tutoring matching web platform with Firebase auth, scheduling engine, and analytics dashboard.",
    html_url: "https://github.com/Vrutti88/Peer-Tutor",
    language: "JavaScript",
    stargazers_count: 5,
    forks_count: 1,
    updated_at: new Date().toISOString(),
    topics: ["firebase", "javascript", "oauth", "scheduling", "analytics"]
  },
  {
    id: 103,
    name: "HUFT-Clone",
    full_name: "Vrutti88/HUFT-Clone",
    description: "Heads Up For Tails Pet E-Commerce clone featuring interactive cart, discount calculations, and Figma design.",
    html_url: "https://github.com/Vrutti88/HUFT-Clone",
    language: "HTML",
    stargazers_count: 4,
    forks_count: 1,
    updated_at: new Date().toISOString(),
    topics: ["html5", "css3", "javascript", "figma", "ecommerce"]
  },
  {
    id: 104,
    name: "BuildSmart",
    full_name: "Vrutti88/BuildSmart",
    description: "Cloud-based construction project management platform with AWS S3 storage and CloudWatch telemetry.",
    html_url: "https://github.com/Vrutti88/BuildSmart",
    language: "JavaScript",
    stargazers_count: 3,
    forks_count: 0,
    updated_at: new Date().toISOString(),
    topics: ["react", "aws-s3", "cloudwatch", "mariadb", "docker"]
  }
];

export const fetchGitHubProfile = async () => {
  const cacheKey = `gh_profile_${GITHUB_USERNAME}`;
  const cached = memoryCache.get(cacheKey);
  if (cached) return { data: cached, fromCache: true };

  try {
    const res = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      headers: getAuthHeaders(),
      timeout: 4000
    });
    memoryCache.set(cacheKey, res.data, 600); // 10 min
    return { data: res.data, fromCache: false };
  } catch (err) {
    console.warn(`[GitHub API] Failed to fetch profile for ${GITHUB_USERNAME}: ${err.message}. Using fallback data.`);
    return { data: fallbackProfile, fromCache: false, isFallback: true };
  }
};

export const fetchGitHubRepos = async () => {
  const cacheKey = `gh_repos_${GITHUB_USERNAME}`;
  const cached = memoryCache.get(cacheKey);
  if (cached) return { data: cached, fromCache: true };

  try {
    const res = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`, {
      headers: getAuthHeaders(),
      timeout: 4000
    });
    memoryCache.set(cacheKey, res.data, 600);
    return { data: res.data, fromCache: false };
  } catch (err) {
    console.warn(`[GitHub API] Failed to fetch repos for ${GITHUB_USERNAME}: ${err.message}. Using fallback data.`);
    return { data: fallbackRepos, fromCache: false, isFallback: true };
  }
};
