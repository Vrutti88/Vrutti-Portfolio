import { useState, useEffect } from 'react';

const USERNAME = 'Vrutti88';
const CACHE_KEY = `gh_cache_${USERNAME}`;
const CACHE_TTL_MS = 60 * 1000; // 1 minute live cache

export const useGitHubData = () => {
  const [profile, setProfile] = useState({
    login: USERNAME,
    name: "Vrutti Patil",
    public_repos: 65,
    followers: 37,
    following: 33,
    avatar_url: `https://avatars.githubusercontent.com/u/185190226?v=4`,
    html_url: `https://github.com/${USERNAME}`
  });

  const [repos, setRepos] = useState([]);
  const [commits, setCommits] = useState([]);
  const [totalStars, setTotalStars] = useState(0);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    let isMounted = true;

    // Load from cache first for instant render
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed.profile) setProfile(parsed.profile);
        if (parsed.repos && parsed.repos.length > 0) setRepos(parsed.repos);
        if (parsed.commits && parsed.commits.length > 0) setCommits(parsed.commits);
        if (parsed.totalStars !== undefined) setTotalStars(parsed.totalStars);
        if (parsed.timestamp) setLastUpdated(new Date(parsed.timestamp));
        setLoading(false);
      }
    } catch {
      // Ignore cache read errors
    }

    const fetchRealTimeGitHubData = async () => {
      try {
        // 1. Fetch User Profile
        const profilePromise = fetch(`https://api.github.com/users/${USERNAME}`)
          .then(res => res.ok ? res.json() : null)
          .catch(() => null);

        // 2. Fetch User Public Repositories (Sorted by last updated)
        const reposPromise = fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=12`)
          .then(res => res.ok ? res.json() : null)
          .catch(() => null);

        // 3. Fetch Recent Portfolio Commits
        const commitsPromise = fetch(`https://api.github.com/repos/${USERNAME}/Vrutti-Portfolio/commits?per_page=6`)
          .then(res => res.ok ? res.json() : null)
          .catch(() => null);

        const [profileData, reposData, commitsData] = await Promise.all([
          profilePromise,
          reposPromise,
          commitsPromise
        ]);

        if (!isMounted) return;

        let calculatedStars = 0;
        let validRepos = [];
        let validCommits = [];

        if (profileData) {
          setProfile(profileData);
        }

        if (Array.isArray(reposData) && reposData.length > 0) {
          validRepos = reposData;
          setRepos(reposData);
          calculatedStars = reposData.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
          setTotalStars(calculatedStars);
        }

        if (Array.isArray(commitsData) && commitsData.length > 0) {
          validCommits = commitsData.map(c => ({
            hash: c.sha ? c.sha.slice(0, 7) : 'HEAD',
            msg: c.commit?.message ? c.commit.message.split('\n')[0] : 'Update codebase',
            date: c.commit?.author?.date || new Date().toISOString()
          }));
          setCommits(validCommits);
        }

        const now = new Date();
        setLastUpdated(now);

        // Update local cache
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({
            profile: profileData || profile,
            repos: validRepos.length > 0 ? validRepos : repos,
            commits: validCommits.length > 0 ? validCommits : commits,
            totalStars: calculatedStars,
            timestamp: now.toISOString()
          }));
        } catch {
          // Ignore cache write errors
        }
      } catch (err) {
        console.warn('Real-time GitHub fetch error, using cache/fallback:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchRealTimeGitHubData();

    // Auto-refresh every 60 seconds
    const interval = setInterval(fetchRealTimeGitHubData, CACHE_TTL_MS);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return { 
    profile, 
    repos, 
    commits, 
    totalStars, 
    loading, 
    lastUpdated,
    username: USERNAME 
  };
};
