import { fetchGitHubProfile, fetchGitHubRepos } from '../utils/githubService.js';
import { store } from '../config/db.js';

export const getGitHubProfile = async (req, res, next) => {
  try {
    const result = await fetchGitHubProfile();
    res.status(200).json({
      success: true,
      fromCache: result.fromCache,
      isFallback: result.isFallback || false,
      data: result.data
    });
  } catch (err) {
    next(err);
  }
};

export const getGitHubRepos = async (req, res, next) => {
  try {
    const result = await fetchGitHubRepos();
    res.status(200).json({
      success: true,
      fromCache: result.fromCache,
      isFallback: result.isFallback || false,
      count: result.data.length,
      data: result.data
    });
  } catch (err) {
    next(err);
  }
};

export const getStats = async (req, res, next) => {
  try {
    const profile = store.getProfile();
    const projects = await store.getProjects();
    const skills = await store.getSkills();

    // Aggregate statistics
    let totalSkillItems = 0;
    skills.forEach(cat => {
      totalSkillItems += (cat.skills ? cat.skills.length : 0);
    });

    res.status(200).json({
      success: true,
      data: {
        projectsCompleted: projects.length,
        featuredProjects: projects.filter(p => p.featured).length,
        apisDeveloped: 20,
        skillCategories: skills.length,
        technologiesCount: totalSkillItems,
        systemUptime: "99.9%",
        academicGrade: "9.45 / 10 CGPA",
        status: "ONLINE"
      }
    });
  } catch (err) {
    next(err);
  }
};

export const getProfileInfo = (req, res) => {
  const profile = store.getProfile();
  res.status(200).json({
    success: true,
    data: profile
  });
};
