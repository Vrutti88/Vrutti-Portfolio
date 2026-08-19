import { store } from '../config/db.js';

export const getAllProjects = async (req, res, next) => {
  try {
    const { category, featured } = req.query;
    let projects = await store.getProjects();

    if (category && category !== 'ALL') {
      projects = projects.filter(p => p.category.toLowerCase().includes(category.toLowerCase()) || p.badge?.toLowerCase() === category.toLowerCase());
    }

    if (featured === 'true') {
      projects = projects.filter(p => p.featured === true);
    }

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (err) {
    next(err);
  }
};

export const getProjectById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await store.getProjectById(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        error: `Project not found with identifier '${id}'`
      });
    }

    res.status(200).json({
      success: true,
      data: project
    });
  } catch (err) {
    next(err);
  }
};
