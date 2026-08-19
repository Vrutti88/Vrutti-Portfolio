export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    success: false,
    error: `Cannot ${req.method} ${req.originalUrl} — Endpoint not found`,
    availableEndpoints: [
      'GET /api/health',
      'GET /api/profile',
      'GET /api/projects',
      'GET /api/projects/:id',
      'GET /api/skills',
      'GET /api/stats',
      'GET /api/github/profile',
      'GET /api/github/repos',
      'GET /api/github/activity',
      'POST /api/contact',
      'POST /api/ping'
    ]
  });
};

export const errorHandler = (err, req, res, next) => {
  console.error(`[Server Error] ${req.method} ${req.url} ->`, err.stack || err.message);

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    success: false,
    error: err.message || 'Internal Server Error',
    environment: process.env.NODE_ENV || 'development'
  });
};
