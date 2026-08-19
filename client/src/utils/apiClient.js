import axios from 'axios';
import { portfolioData } from '../data/portfolioData';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const fetchHealth = async () => {
  try {
    const res = await api.get('/health');
    return { ok: true, data: res.data };
  } catch (err) {
    return {
      ok: false,
      error: err.message,
      data: {
        status: 'simulated-local',
        service: 'vrutti-portfolio-api',
        timestamp: new Date().toISOString(),
        uptime: '99.9%',
        database: { status: 'in-memory-active', mode: 'client-fallback' },
        memoryUsage: { heapUsed: '42 MB' }
      }
    };
  }
};

export const pingApi = async () => {
  const start = performance.now();
  try {
    const res = await api.post('/ping');
    const latency = Math.round(performance.now() - start);
    return { ok: true, latency, data: res.data, status: res.status };
  } catch (err) {
    const latency = Math.round(performance.now() - start) || 18;
    return {
      ok: false,
      latency,
      data: { message: 'pong', service: 'vrutti-portfolio-api-fallback' },
      status: 200
    };
  }
};

export const fetchProjects = async () => {
  try {
    const res = await api.get('/projects');
    return res.data?.data || portfolioData.projects;
  } catch (err) {
    return portfolioData.projects;
  }
};

export const fetchSkills = async () => {
  try {
    const res = await api.get('/skills');
    return res.data?.data || portfolioData.skillCategories;
  } catch (err) {
    return portfolioData.skillCategories;
  }
};

export const fetchStats = async () => {
  try {
    const res = await api.get('/stats');
    return res.data?.data || null;
  } catch (err) {
    return null;
  }
};

export const fetchGitHub = async () => {
  try {
    const [profileRes, reposRes] = await Promise.allSettled([
      api.get('/github/profile'),
      api.get('/github/repos')
    ]);

    const profile = profileRes.status === 'fulfilled' ? profileRes.value.data?.data : null;
    const repos = reposRes.status === 'fulfilled' ? reposRes.value.data?.data : [];

    return { profile, repos };
  } catch (err) {
    return { profile: null, repos: [] };
  }
};

export const sendContactMessage = async (payload) => {
  try {
    const res = await api.post('/contact', payload);
    return { ok: true, data: res.data };
  } catch (err) {
    const errorMsg = err.response?.data?.error || err.message || 'Failed to submit message.';
    return { ok: false, error: errorMsg };
  }
};
