import { getDbStatus } from '../config/db.js';

const startTime = Date.now();

export const getHealth = (req, res) => {
  const dbStatus = getDbStatus();
  const uptimeSeconds = Math.floor((Date.now() - startTime) / 1000);

  res.status(200).json({
    status: 'ok',
    service: 'vrutti-portfolio-api',
    developer: 'Vrutti Patil',
    timestamp: new Date().toISOString(),
    uptime: `${uptimeSeconds}s`,
    uptimeSeconds,
    environment: process.env.NODE_ENV || 'development',
    database: {
      status: dbStatus.connected ? 'online' : 'in-memory-emulated',
      mode: dbStatus.mode,
      details: dbStatus.readyStateDescription
    },
    memoryUsage: {
      rss: `${Math.round(process.memoryUsage().rss / 1024 / 1024)} MB`,
      heapUsed: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB`
    },
    latency: 'sub-5ms'
  });
};

export const pingPong = (req, res) => {
  const start = Date.now();
  res.status(200).json({
    message: 'pong',
    service: 'vrutti-portfolio-api',
    receivedAt: start,
    responseTime: `${Date.now() - start}ms`
  });
};
