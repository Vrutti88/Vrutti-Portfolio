const seedProjects = [
  {
    title: "LinguaHub",
    slug: "linguahub",
    year: "2024",
    tagline: "Collaborative Real-Time Language Learning Platform",
    description: "Architected a collaborative language exchange application featuring sub-50ms peer messaging, grammar evaluation microservices, and audio room signaling with automated session state persistence.",
    category: "Full Stack",
    role: "Full-Stack Engineer & System Architect",
    timeline: "3 Months (Production v1.4)",
    technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Docker", "AWS S3", "HTML5", "CSS3", "JavaScript"],
    metrics: [
      { label: "Signaling Latency", value: "<45ms" },
      { label: "Concurrent Sessions", value: "500+" },
      { label: "Payload Reduction", value: "38%" }
    ],
    liveDemo: "https://linguahub-pearl.vercel.app",
    githubUrl: "https://github.com/Vrutti88/LinguaHub"
  },
  {
    title: "Heads Up For Tails (HUFT)",
    slug: "huft-clone",
    year: "2024",
    tagline: "E-Commerce Pet Care Engine with Dynamic Catalog & Auth",
    description: "Engineered an end-to-end e-commerce store clone with structured category filtering, persistent multi-item cart state, dynamic price calculations, and secure tokenized authentication flow.",
    category: "Full Stack",
    role: "Frontend & API Integration Lead",
    timeline: "2 Months",
    technologies: ["JavaScript", "HTML5", "CSS3", "REST APIs", "Node.js", "Express.js", "MongoDB"],
    metrics: [
      { label: "Catalog Items", value: "200+" },
      { label: "Cart Redundancy", value: "0%" },
      { label: "Lighthouse Score", value: "96/100" }
    ],
    liveDemo: "https://heads-up-for-tails.vercel.app",
    githubUrl: "https://github.com/Vrutti88/HUFT-Clone"
  },
  {
    title: "Peer Tutor",
    slug: "peer-tutor",
    year: "2024",
    tagline: "Decentralized Academic Mentorship & Scheduling Engine",
    description: "Developed a peer-to-peer tutoring marketplace enabling academic skill-matching, slot-based booking reservations, and real-time subject matching.",
    category: "Full Stack",
    role: "Backend & Systems Lead",
    timeline: "2.5 Months",
    technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JavaScript", "HTML5", "CSS3"],
    metrics: [
      { label: "Match Efficiency", value: "92%" },
      { label: "Booking Throughput", value: "120/min" },
      { label: "Query Optimization", value: "4x Faster" }
    ],
    liveDemo: "https://peer-tutor-beryl.vercel.app",
    githubUrl: "https://github.com/Vrutti88/Peer-Tutor"
  },
  {
    title: "HomeConnect",
    slug: "home-connect",
    year: "2026",
    tagline: "IoT Smart Automation Hub & Appliance Telemetry Gateway",
    description: "Designed a centralized smart home automation hub facilitating real-time telemetry streaming, room-by-room appliance management, and threshold alarm routines.",
    category: "Full Stack",
    role: "Full-Stack Engineer",
    timeline: "3 Months",
    technologies: ["Node.js", "Express.js", "MongoDB", "JavaScript", "HTML5", "CSS3", "REST APIs", "Docker"],
    metrics: [
      { label: "Command Latency", value: "18ms" },
      { label: "Simulated Devices", value: "50+" },
      { label: "Uptime Metric", value: "99.9%" }
    ],
    liveDemo: "https://home-connect-proj.vercel.app",
    githubUrl: "https://github.com/Vrutti88/HomeConnect"
  }
];

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  return res.status(200).json({
    ok: true,
    count: seedProjects.length,
    data: seedProjects
  });
}
