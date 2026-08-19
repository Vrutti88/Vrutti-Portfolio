import { store } from '../config/db.js';

export const getAllSkills = async (req, res, next) => {
  try {
    const { category } = req.query;
    let skills = await store.getSkills();

    if (category && category !== 'ALL') {
      skills = skills.filter(s => s.category.toLowerCase() === category.toLowerCase());
    }

    res.status(200).json({
      success: true,
      count: skills.length,
      data: skills
    });
  } catch (err) {
    next(err);
  }
};
