export const seedProjects = [
  {
    id: "lingua-hub",
    title: "LinguaHub — Language Learning Platform",
    shortTitle: "LinguaHub",
    category: "MERN Stack / Full-Stack",
    badge: "MERN",
    year: "2024",
    tagline: "Gamified interactive language learning platform with robust REST APIs, authentication and real-time progress tracking.",
    description: "A comprehensive full-stack language learning web application designed to make vocabulary and grammar acquisition intuitive through gamified lessons, interactive quizzes, dynamic streaks, XP leaderboards, and role-based user management.",
    problem: "Traditional language learning tools often suffer from fragmented state management, insecure token handling, and lack of real-time gamification feedback loops for student retention.",
    solution: "Architected a decoupled MERN platform with stateless JWT authentication, role-based access control (RBAC), atomic database operations for leaderboard scoring, and modular REST API micro-routes.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "REST APIs"],
    architectureNodes: [
      { name: "React Client", role: "SPA UI / State Management", icon: "react" },
      { name: "Node.js API", role: "Express Gateway & Controller", icon: "server" },
      { name: "JWT Auth & RBAC", role: "Security Middleware", icon: "shield" },
      { name: "MongoDB Cluster", role: "User Profiles, Quizzes & Scores", icon: "database" }
    ],
    features: [
      "Role-Based Access Control (RBAC) separating learners, instructors, and system admins",
      "Stateless JWT Authentication with secure token expiration and refresh logic",
      "Interactive multi-tier lesson modules with dynamic quiz validation and scoring",
      "Gamified progress tracking with daily streaks, XP points, and real-time leaderboard rankings",
      "Complete CRUD operations for courses, user progress, flashcards, and achievements",
      "Optimized MongoDB indexing for sub-50ms query response times on leaderboards"
    ],
    backendDetails: {
      runtime: "Node.js v20+",
      framework: "Express.js RESTful API",
      database: "MongoDB with Mongoose ODM",
      auth: "JSON Web Tokens (JWT) + bcrypt password hashing",
      caching: "In-memory query optimization",
      endpointsCount: "16+ REST Endpoints"
    },
    apiEndpoints: [
      { method: "POST", path: "/api/auth/register", description: "Registers learner with encrypted credentials and JWT issuance" },
      { method: "POST", path: "/api/auth/login", description: "Authenticates user and returns signed bearer token" },
      { method: "GET", path: "/api/courses", description: "Fetches available language modules with difficulty filters" },
      { method: "POST", path: "/api/progress/submit-quiz", description: "Validates answers, awards XP, updates streaks atomically" },
      { method: "GET", path: "/api/leaderboard/global", description: "Returns top-ranked learners ordered by XP" }
    ],
    challenges: [
      "Handling concurrent XP updates and streak validations without database race conditions",
      "Designing a clean schema supporting hierarchical language units, lessons, and multi-choice quizzes"
    ],
    results: [
      "Achieved sub-60ms average API response time across all quiz submission routes",
      "100% test coverage on authentication and authorization middleware"
    ],
    github: "https://github.com/Vrutti88/LinguaHub",
    liveDemo: "https://linguahub-660gz56g6-vrutti-patils-projects.vercel.app",
    documentation: "https://github.com/Vrutti88/LinguaHub#readme",
    featured: true
  },
  {
    id: "peer-tutor",
    title: "Peer Tutor — Peer Tutoring Matching System",
    shortTitle: "Peer Tutor",
    category: "Firebase / Cloud Services",
    badge: "FIREBASE",
    year: "2024",
    tagline: "Intelligent peer-to-peer tutoring matching engine with automated scheduling, session analytics, and Firebase authentication.",
    description: "A centralized platform designed for academic institutions to connect students needing help with qualified peer tutors based on subject proficiency, verified availability, and scheduling compatibility.",
    problem: "Academic tutoring coordination is frequently disorganized, relying on manual spreadsheets and unverified tutor schedules, causing high no-show rates and scheduling conflicts.",
    solution: "Engineered a reactive web system powered by Firebase Authentication and Firestore database rules, featuring an automated scheduling engine, session conflict resolution, and analytics dashboard.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Firebase Auth", "Firestore DB", "Google OAuth", "Analytics"],
    architectureNodes: [
      { name: "Student Web UI", role: "Booking & Search Interface", icon: "user" },
      { name: "Matching Engine", role: "Algorithm for Subject & Slot Pairing", icon: "cpu" },
      { name: "Firebase Auth", role: "Google & Email Authentication", icon: "key" },
      { name: "Firestore Cloud DB", role: "Real-Time Bookings & Metrics", icon: "cloud" }
    ],
    features: [
      "Intelligent student-to-tutor matching algorithm based on subject keywords and availability slots",
      "Seamless Firebase Authentication supporting both Google OAuth and Email/Password flows",
      "Automated session booking, confirmation notifications, and conflict-free cancellation engine",
      "Comprehensive CRUD operations for tutor profiles, ratings, subject areas, and study schedules",
      "Interactive analytics dashboard visualizing tutor hours, completed sessions, and student feedback",
      "Fine-grained Firebase Security Rules safeguarding private student records"
    ],
    backendDetails: {
      runtime: "Serverless Firebase Cloud Architecture",
      framework: "Client-side Controller SDK + Cloud Functions",
      database: "Cloud Firestore Real-Time NoSQL Database",
      auth: "Firebase Authentication (Google OAuth + Email/Password)",
      security: "Granular Firestore Security Rules and Field Validation",
      endpointsCount: "10+ Data Access Services"
    },
    apiEndpoints: [
      { method: "GET", path: "/services/tutors/query", description: "Queries verified tutors filtered by course code and time slot" },
      { method: "POST", path: "/services/bookings/create", description: "Creates a reserved tutoring session with atomic timestamp lock" },
      { method: "PUT", path: "/services/bookings/cancel", description: "Releases reserved slot and updates tutor availability" },
      { method: "GET", path: "/services/analytics/summary", description: "Aggregates total tutoring hours and feedback scores" }
    ],
    challenges: [
      "Preventing overlapping double-bookings across concurrent student sessions",
      "Implementing strict document security rules without degrading client query responsiveness"
    ],
    results: [
      "Zero double-booking incidents through transactional Firestore batch updates",
      "Instant real-time synchronization of tutor schedules across connected clients"
    ],
    github: "https://github.com/Vrutti88/Peer-Tutor",
    liveDemo: "https://github.com/Vrutti88/Peer-Tutor",
    documentation: "https://github.com/Vrutti88/Peer-Tutor#readme",
    featured: true
  },
  {
    id: "huft-clone",
    title: "Heads Up For Tails — Pet E-Commerce Clone",
    shortTitle: "HUFT E-Commerce",
    category: "Frontend Architecture & UI/UX",
    badge: "UI / UX",
    year: "2024",
    tagline: "High-fidelity e-commerce clone featuring interactive cart logic, category filtering, tier discount calculations, and Figma prototyping.",
    description: "A meticulously crafted e-commerce platform clone of Heads Up For Tails focusing on responsive client-side state management, multi-tier pricing calculation engines, subscription boxes, and pixel-perfect design system implementation.",
    problem: "Modern pet care retail requires complex product variant selectors, customized bundle builders, and dynamic tier discounts that maintain high UI responsiveness on mobile devices.",
    solution: "Designed and built an interactive frontend application with native JavaScript data stores, dynamic DOM rendering, custom price calculators, responsive filtering grids, and Figma design alignment.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Figma", "Responsive Web Design", "Local Storage", "UI/UX Prototyping"],
    architectureNodes: [
      { name: "Figma System", role: "Design Tokens & Wireframing", icon: "figma" },
      { name: "Dynamic DOM UI", role: "Responsive Product Catalog", icon: "layout" },
      { name: "Cart Engine", role: "Client State & Tier Pricing", icon: "cart" },
      { name: "Local Storage", role: "Persistent Wishlist & Cart", icon: "hard-drive" }
    ],
    features: [
      "High-performance product catalog with multi-attribute category and price filtering",
      "Interactive shopping cart and wishlist with real-time subtotal and tax calculation",
      "Dynamic starter kit builder and custom bulk discount tier calculator",
      "Monthly pet subscription box configurator with frequency selection",
      "Complete wireframing, component design tokens, and user flow prototyping in Figma",
      "100% mobile-first responsive design tested across multiple viewports"
    ],
    backendDetails: {
      runtime: "Client-Side Engine / REST-Ready Architecture",
      framework: "Modular ES6 JavaScript Components",
      database: "Browser Storage & Mock Catalog Service",
      auth: "Guest & Registered Session State",
      styling: "Custom CSS Variables & Modern Flexbox/Grid",
      endpointsCount: "8+ Mock Data Handlers"
    },
    apiEndpoints: [
      { method: "GET", path: "/catalog/products", description: "Fetches product catalog with sorting and filter parameters" },
      { method: "POST", path: "/cart/calculate-discounts", description: "Computes bulk tier discounts and coupon code deductions" },
      { method: "GET", path: "/subscription/plans", description: "Retrieves monthly recurring pet care subscription packages" }
    ],
    challenges: [
      "Structuring complex client-side pricing algorithms for bundle discounts without external libraries",
      "Ensuring fluid performance across heavy image catalogs on lower-end mobile browsers"
    ],
    results: [
      "Sub-10ms cart calculation latency using optimized JavaScript reducers",
      "Perfect fidelity match with production Figma design specifications"
    ],
    github: "https://github.com/Vrutti88/HUFT-Clone",
    liveDemo: "https://github.com/Vrutti88/HUFT-Clone",
    documentation: "https://github.com/Vrutti88/HUFT-Clone#readme",
    featured: true
  },
  {
    id: "build-smart",
    title: "BuildSmart — Construction Project Cloud",
    shortTitle: "BuildSmart",
    category: "Cloud & Microservices",
    badge: "CLOUD",
    year: "2024",
    tagline: "Cloud-based project management platform with role-based access, AWS S3 blueprint storage, and CloudWatch telemetry.",
    description: "An enterprise construction lifecycle management architecture featuring Nginx reverse proxy, Node.js API services, MariaDB RDS relational persistence, and automated AWS CloudWatch monitoring.",
    problem: "Construction teams struggle with disjointed tracking between site engineers, architects, and managers, requiring secure blueprint storage and auditable work logs.",
    solution: "Designed a multi-tier cloud architecture with AWS S3 pre-signed URLs for blueprint uploads, MariaDB relational schema for milestone audit trails, and CloudWatch performance alarms.",
    technologies: ["React", "Nginx", "Node.js", "Express", "MariaDB", "AWS S3", "CloudWatch", "Docker"],
    architectureNodes: [
      { name: "React Frontend", role: "Engineer & Admin Portal", icon: "react" },
      { name: "Nginx Gateway", role: "Reverse Proxy & TLS Termination", icon: "shield" },
      { name: "Node.js Services", role: "Business Logic & REST API", icon: "server" },
      { name: "MariaDB & S3", role: "Relational DB & Asset Storage", icon: "database" }
    ],
    features: [
      "Multi-tenant construction milestone tracking and resource allocation dashboards",
      "Secure AWS S3 bucket integration for CAD files and site inspection photo uploads",
      "Role-based access separating general contractors, sub-contractors, and clients",
      "Automated CloudWatch metrics monitoring API endpoint response latencies and server load"
    ],
    backendDetails: {
      runtime: "Node.js on AWS EC2 / Containerized",
      framework: "Express.js REST Services",
      database: "MariaDB (AWS RDS)",
      storage: "AWS S3 Bucket with Signed URLs",
      monitoring: "AWS CloudWatch & Alarms"
    },
    github: "https://github.com/Vrutti88/BuildSmart",
    liveDemo: "https://github.com/Vrutti88/BuildSmart",
    featured: false
  },
  {
    id: "edu-stream",
    title: "EduStream — Virtual Classroom Platform",
    shortTitle: "EduStream",
    category: "DevOps & CI/CD",
    badge: "DEVOPS",
    year: "2024",
    tagline: "Scalable virtual learning infrastructure with automated Jenkins CI/CD pipelines, Docker containers, and Kubernetes orchestration.",
    description: "An educational streaming and course orchestration platform featuring complete automated containerization workflows, multi-stage Jenkins pipelines, and Kubernetes deployment manifests.",
    problem: "Educational software deployments frequently suffer downtime during peak lecture hours without automated rollback and scalable container orchestration.",
    solution: "Implemented an end-to-end DevOps pipeline utilizing Git triggers, Jenkins automated testing stages, Docker multi-stage image builds, and Kubernetes / AWS EKS cluster deployment.",
    technologies: ["Node.js", "Docker", "Jenkins", "Kubernetes", "AWS EKS", "CI/CD", "Linux", "Shell Scripting"],
    architectureNodes: [
      { name: "Git Source", role: "Version Control Webhook", icon: "git" },
      { name: "Jenkins Pipeline", role: "Build, Test & Dockerize", icon: "terminal" },
      { name: "Container Registry", role: "Image Versioning", icon: "package" },
      { name: "Kubernetes Cluster", role: "Pod Autoscaling & Ingress", icon: "cloud" }
    ],
    features: [
      "Automated CI/CD workflow triggering builds and unit tests on every Git pull request",
      "Lightweight Docker multi-stage images optimized for sub-100MB footprint",
      "Kubernetes deployment manifests with Horizontal Pod Autoscaling (HPA) and rolling updates",
      "Shell automation scripts for automated cluster health checks and log harvesting"
    ],
    backendDetails: {
      runtime: "Node.js Containerized Service",
      ci_cd: "Jenkins Automated Multi-Branch Pipeline",
      orchestration: "Kubernetes (K8s) & AWS EKS",
      container: "Docker Multi-Stage Alpine Builds",
      infra: "Linux / Terraform manifests"
    },
    github: "https://github.com/Vrutti88/EduStream",
    liveDemo: "https://github.com/Vrutti88/EduStream",
    featured: false
  },
  {
    id: "home-connect",
    title: "HomeConnect — Smart Home Automation Backend",
    shortTitle: "HomeConnect",
    category: "IoT & System Design",
    badge: "SYSTEM DESIGN",
    year: "2024",
    tagline: "Event-driven smart device control API gateway managing device state telemetry, automation triggers, and alert dispatch.",
    description: "A resilient backend architecture built to ingest high-frequency IoT telemetry, evaluate automation trigger rules, and manage real-time device actuation with relational persistence.",
    problem: "Smart home hubs must process sporadic sensor telemetry spikes and trigger automations reliably without latency lag or command dropping.",
    solution: "Designed an API Gateway service layer with dedicated rule-engine processors, MySQL relational persistence for device audit logs, and asynchronous alert dispatch pipelines.",
    technologies: ["Node.js", "Express", "MySQL", "API Gateway", "WebSockets", "System Design", "Microservices"],
    architectureNodes: [
      { name: "Smart Devices", role: "Sensors & Actuator Payloads", icon: "cpu" },
      { name: "API Gateway", role: "Rate Limiting & Authentication", icon: "shield" },
      { name: "Automation Core", role: "Rule Evaluation & Triggers", icon: "server" },
      { name: "MySQL / DB", role: "Telemetry History & Device State", icon: "database" }
    ],
    features: [
      "High-throughput REST and WebSocket ingestion endpoints for device sensor packets",
      "Automated conditional rule engine (e.g. Temperature > Threshold -> Trigger AC actuation)",
      "Structured MySQL schema recording time-series telemetry events and user activity audits",
      "Centralized device health monitoring and automated offline alerts"
    ],
    backendDetails: {
      runtime: "Node.js Event-Driven Engine",
      framework: "Express API Gateway + WebSocket Server",
      database: "MySQL Relational Telemetry Store",
      architecture: "Decoupled Service Layers with Pub/Sub Queues",
      security: "Device API Token Authentication"
    },
    github: "https://github.com/Vrutti88/HomeConnect",
    liveDemo: "https://github.com/Vrutti88/HomeConnect",
    featured: false
  }
];

export const seedSkills = [
  {
    category: "LANGUAGES",
    description: "Core programming languages for algorithms, backend systems, and web applications",
    skills: [
      { name: "C++", level: "Advanced", usage: "Data structures, algorithms, memory management, competitive problem solving", icon: "cpp" },
      { name: "Java", level: "Proficient", usage: "Object-oriented programming, enterprise backend principles, multithreading", icon: "java" },
      { name: "Python", level: "Proficient", usage: "Scripting, automation, data processing, backend API prototyping", icon: "python" },
      { name: "JavaScript", level: "Advanced", usage: "Asynchronous I/O, full-stack development, modern ES6+, runtime systems", icon: "javascript" }
    ]
  },
  {
    category: "BACKEND",
    description: "Server runtimes, API frameworks, protocols, and microservice architectures",
    skills: [
      { name: "Node.js", level: "Advanced", usage: "Event-driven asynchronous backend runtime for scalable high-concurrency APIs", icon: "nodejs" },
      { name: "Express.js", level: "Advanced", usage: "RESTful routing, custom middleware pipelines, error handling, security headers", icon: "express" },
      { name: "REST APIs", level: "Advanced", usage: "Stateless HTTP resource design, status codes, query pagination, versioning", icon: "api" },
      { name: "GraphQL", level: "Intermediate", usage: "Declarative schema querying, mutations, resolver architecture, reduced over-fetching", icon: "graphql" }
    ]
  },
  {
    category: "DATABASES",
    description: "Relational, NoSQL, and Cloud databases with schema design and query optimization",
    skills: [
      { name: "MongoDB", level: "Advanced", usage: "Document schema modeling, aggregation pipelines, Mongoose ODM, indexing", icon: "mongodb" },
      { name: "MySQL", level: "Proficient", usage: "Relational schema design, normalization, ACID transactions, complex joins", icon: "mysql" },
      { name: "MariaDB", level: "Proficient", usage: "High-performance relational persistence, storage engines, RDS deployment", icon: "mariadb" },
      { name: "Firebase", level: "Proficient", usage: "Cloud Firestore, real-time listeners, security rules, serverless auth", icon: "firebase" }
    ]
  },
  {
    category: "CLOUD",
    description: "Cloud infrastructure, compute instances, object storage, identity, and telemetry",
    skills: [
      { name: "AWS", level: "Proficient", usage: "Cloud infrastructure provisioning, cloud security, modern hosting architecture", icon: "aws" },
      { name: "EC2", level: "Proficient", usage: "Virtual compute instances, SSH configuration, security groups, application hosting", icon: "ec2" },
      { name: "S3", level: "Proficient", usage: "Object storage buckets, IAM bucket policies, pre-signed upload URLs, static assets", icon: "s3" },
      { name: "RDS", level: "Proficient", usage: "Managed relational database instances, automated snapshots, multi-AZ setup", icon: "rds" },
      { name: "IAM", level: "Proficient", usage: "Principle of least privilege, roles, policies, service access management", icon: "iam" },
      { name: "CloudWatch", level: "Proficient", usage: "Server telemetry metrics, log aggregation, automated alarm triggers", icon: "cloudwatch" },
      { name: "VPC", level: "Intermediate", usage: "Virtual private clouds, subnets, route tables, network isolation", icon: "vpc" }
    ]
  },
  {
    category: "DEVOPS",
    description: "Containerization, CI/CD automation, orchestration, and Unix systems engineering",
    skills: [
      { name: "Docker", level: "Proficient", usage: "Containerization, Dockerfile multi-stage builds, Docker Compose environments", icon: "docker" },
      { name: "Jenkins", level: "Proficient", usage: "Automated CI/CD build pipelines, test triggers, deployment webhooks", icon: "jenkins" },
      { name: "Git", level: "Advanced", usage: "Branching strategies, commit history, rebase, merge conflict resolution", icon: "git" },
      { name: "GitHub", level: "Advanced", usage: "Remote repositories, GitHub Actions workflows, code reviews, open source", icon: "github" },
      { name: "Terraform", level: "Intermediate", usage: "Infrastructure as Code (IaC), declarative cloud resource provisioning", icon: "terraform" },
      { name: "Kubernetes", level: "Intermediate", usage: "Container orchestration, Pods, Deployments, Services, ConfigMaps", icon: "kubernetes" },
      { name: "EKS", level: "Intermediate", usage: "AWS Elastic Kubernetes Service cluster deployment and management", icon: "eks" },
      { name: "CI/CD", level: "Proficient", usage: "Continuous integration & deployment pipelines for zero-downtime releases", icon: "cicd" },
      { name: "Linux", level: "Advanced", usage: "Ubuntu/Debian server administration, process management, permissions, systemd", icon: "linux" },
      { name: "Shell Scripting", level: "Proficient", usage: "Bash/Zsh automation scripts, server maintenance, build task automation", icon: "terminal" }
    ]
  },
  {
    category: "SYSTEM DESIGN",
    description: "Architectural principles for scalable, resilient, and fault-tolerant software systems",
    skills: [
      { name: "Database Design", level: "Advanced", usage: "Entity-relationship modeling, indexing strategies, normalization & de-normalization", icon: "database" },
      { name: "REST API Design", level: "Advanced", usage: "Resource naming, HTTP verbs, payload validation, RFC-compliant error schemas", icon: "api" },
      { name: "Microservices", level: "Intermediate", usage: "Decoupled domain services, independent scaling, API gateway routing", icon: "network" },
      { name: "Scalability", level: "Proficient", usage: "Horizontal vs vertical scaling, stateless service tiers, concurrency optimization", icon: "trending-up" },
      { name: "Caching", level: "Proficient", usage: "In-memory caching strategies, TTL management, cache invalidation", icon: "zap" },
      { name: "Load Balancing", level: "Intermediate", usage: "Reverse proxies, round-robin distribution, health check traffic routing", icon: "layers" }
    ]
  },
  {
    category: "DESIGN",
    description: "UI/UX wireframing, component design systems, and responsive interface workflows",
    skills: [
      { name: "Figma", level: "Proficient", usage: "Interactive wireframing, high-fidelity prototypes, UI design systems, auto-layout", icon: "figma" },
      { name: "Wireframing", level: "Proficient", usage: "User flow mapping, low-fidelity architectural layouts, UX optimization", icon: "layout" },
      { name: "Prototyping", level: "Proficient", usage: "Interactive component states, click-through transitions, user journey testing", icon: "play" },
      { name: "Canva", level: "Proficient", usage: "Graphic assets, visual branding, presentation materials", icon: "image" },
      { name: "Responsive Design", level: "Advanced", usage: "Mobile-first layouts, flexible grids, fluid typography, media queries", icon: "smartphone" }
    ]
  }
];

export const seedProfile = {
  name: "Vrutti Patil",
  headline: "B.Tech Computer Science & Engineering Student",
  focus: "Backend Engineering, APIs, Cloud, DevOps, System Design and Web Security",
  tagline: "Building robust backend systems and scalable APIs that power real-world applications.",
  email: "vruttipatil1396@gmail.com",
  github: "https://github.com/Vrutti88",
  githubUsername: "Vrutti88",
  linkedin: "https://linkedin.com/in/vruttipatil/",
  location: "Kharghar, Navi Mumbai, India",
  status: "ONLINE",
  statusBadge: "BACKEND DEVELOPER",
  availabilityBadge: "AVAILABLE TO LEARN / COLLABORATE",
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "ITM Skills University, Kharghar",
      timeline: "July 2024 – Present",
      grade: "CGPA: 9.45 / 10",
      description: "Focusing on core computer science foundations, backend architecture, cloud engineering, database management systems, and system design.",
      current: true
    },
    {
      degree: "Higher Secondary Certificate (HSC) — Science",
      institution: "Pace Junior Science College",
      timeline: "2024",
      grade: "Science Stream",
      description: "Rigorous coursework in Physics, Chemistry, Mathematics, and Computer Science fundamentals.",
      current: false
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "St. Xavier's High School",
      timeline: "2022",
      grade: "Distinction",
      description: "Foundational academic training with emphasis on mathematics, science, and analytical problem-solving.",
      current: false
    }
  ],
  stats: {
    projectsCount: 4,
    apisCount: 20,
    technologiesCount: 8,
    uptimePercent: "99.9%",
    mindset: "Infinite Learning"
  },
  journey: [
    {
      year: "2024 – Present",
      title: "Full-Stack & Backend Systems Engineering",
      description: "Architecting decoupled MERN applications (LinguaHub), exploring cloud microservices on AWS, mastering Docker containerization, and applying system design paradigms."
    },
    {
      year: "2024",
      title: "B.Tech CSE at ITM Skills University & Cloud Exploration",
      description: "Commenced undergraduate studies (current CGPA: 9.45/10). Deepened expertise in Data Structures in C++, Java OOP, Firebase architectures, and cloud services."
    },
    {
      year: "2022 – 2024",
      title: "Computer Science Foundations & Problem Solving",
      description: "Completed higher secondary education at Pace Junior Science College. Built foundational programming logic, algorithmic thinking, and modern web basics."
    }
  ],
  achievements: [
    {
      title: "Academic Excellence — 9.45 CGPA",
      issuer: "ITM Skills University",
      date: "2024 – Present",
      description: "Consistently maintained top academic ranking across B.Tech Computer Science coursework in data structures, programming, and software fundamentals.",
      badge: "ACADEMIC"
    },
    {
      title: "Student Portfolio Hackathon 2026 Contender",
      issuer: "Technical Showcase",
      date: "2026",
      description: "Architected a full-stack developer operating system portfolio featuring real API monitoring, system flow visualizations, and MERN backend integration.",
      badge: "HACKATHON"
    }
  ],
  certifications: [
    {
      title: "Full-Stack Web Development & APIs",
      issuer: "Self-Directed / Academic Project Showcase",
      date: "2024",
      description: "Demonstrated practical mastery of REST API development, JWT security, MongoDB schema modeling, and responsive React frontend architecture.",
      badge: "VERIFIED"
    },
    {
      title: "Cloud & DevOps Fundamentals in Progress",
      issuer: "Continuous Learning Path",
      date: "2024 – 2025",
      description: "Actively training across AWS core services (EC2, S3, RDS, IAM), Docker containerization, and Kubernetes cluster fundamentals.",
      badge: "IN PROGRESS"
    }
  ]
};
