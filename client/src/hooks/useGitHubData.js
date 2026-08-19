import { useState, useEffect } from 'react';
import { fetchGitHub } from '../utils/apiClient';

const defaultProfile = {
  login: "Vrutti88",
  name: "Vrutti Patil",
  bio: "B.Tech CSE Student | Backend, APIs, Cloud & System Design Enthusiast",
  public_repos: 15,
  followers: 12,
  following: 15,
  avatar_url: "https://avatars.githubusercontent.com/u/149861614?v=4",
  html_url: "https://github.com/Vrutti88"
};

const defaultRepos = [
  {
    id: 101,
    name: "LinguaHub",
    description: "Full-Stack MERN language learning platform with JWT auth, RBAC, quizzes, streaks & leaderboards.",
    html_url: "https://github.com/Vrutti88/LinguaHub",
    language: "JavaScript",
    stargazers_count: 8,
    forks_count: 2,
    topics: ["react", "nodejs", "express", "mongodb", "jwt"]
  },
  {
    id: 102,
    name: "Peer-Tutor",
    description: "Peer tutoring matching web platform with Firebase auth, scheduling engine, and analytics dashboard.",
    html_url: "https://github.com/Vrutti88/Peer-Tutor",
    language: "JavaScript",
    stargazers_count: 5,
    forks_count: 1,
    topics: ["firebase", "javascript", "oauth", "scheduling"]
  },
  {
    id: 103,
    name: "HUFT-Clone",
    description: "Heads Up For Tails Pet E-Commerce clone featuring interactive cart, discount calculations, and Figma design.",
    html_url: "https://github.com/Vrutti88/HUFT-Clone",
    language: "HTML",
    stargazers_count: 4,
    forks_count: 1,
    topics: ["html5", "css3", "javascript", "figma"]
  },
  {
    id: 104,
    name: "BuildSmart",
    description: "Cloud-based construction project management platform with AWS S3 storage and CloudWatch telemetry.",
    html_url: "https://github.com/Vrutti88/BuildSmart",
    language: "JavaScript",
    stargazers_count: 3,
    forks_count: 0,
    topics: ["react", "aws-s3", "cloudwatch", "mariadb"]
  }
];

export const useGitHubData = () => {
  const [profile, setProfile] = useState(defaultProfile);
  const [repos, setRepos] = useState(defaultRepos);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        const { profile: p, repos: r } = await fetchGitHub();
        if (isMounted) {
          if (p) setProfile(p);
          if (r && r.length > 0) setRepos(r);
        }
      } catch (err) {
        console.warn('Error loading GitHub proxy data:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    load();
    return () => { isMounted = false; };
  }, []);

  return { profile, repos, loading };
};
