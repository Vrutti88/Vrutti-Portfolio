export const portfolioData = {
  profile: {
    name: "Vrutti Patil",
    brandName: "</> VRUTTI.DEV",
    role: "B.Tech Computer Science & Engineering Student",
    title: "Aspiring Full-Stack & Cloud / Backend Engineer",
    phone: "+91-9321428539",
    email: "vruttipatil1396@gmail.com",
    github: "https://github.com/Vrutti88",
    githubUsername: "Vrutti88",
    linkedin: "https://linkedin.com/in/vruttipatil/",
    location: "Kharghar, Navi Mumbai, India",
    statusBadge: "BACKEND / FULL-STACK DEVELOPER",
    availabilityBadge: "AVAILABLE TO LEARN / COLLABORATE",
    systemStatus: "ONLINE",
    resumeUrl: "#resume-section",
    summary: "Dedicated Computer Science undergraduate passionate about full-stack development, cloud technologies and system design. Proficient in React.js, Node.js, Express.js, AWS, Docker and modern web development practices, with experience building responsive applications and deploying cloud-based solutions. A quick learner with strong problem-solving skills, seeking opportunities to contribute to innovative engineering teams while growing as a software developer.",
    stats: [
      { id: "projects", label: "Projects Completed", value: "04+", count: 4, suffix: "+" },
      { id: "apis", label: "APIs / Backend Features", value: "20+", count: 20, suffix: "+" },
      { id: "technologies", label: "Core Tech Stacks", value: "08+", count: 8, suffix: "+" },
      { id: "uptime", label: "System Mindset", value: "99.9%", count: 99.9, suffix: "%" },
      { id: "learning", label: "Continuous Growth", value: "∞", count: 0, suffix: "∞" }
    ],
    spokenLanguages: ["English", "Hindi", "Marathi", "German (Basic)"],
    hobbies: ["Sketching", "Exploring new technologies", "Problem solving", "Learning new skills", "Creative Activities"]
  },

  education: [
    {
      year: "July 2024 – Present",
      period: "July 2024 – Present",
      degree: "B.Tech - Computer Science and Engineering",
      institution: "ITM Skills University, Kharghar",
      grade: "CGPA: 9.45 / 10",
      description: "Focusing on data structures, algorithms, backend architecture, relational & NoSQL databases, cloud computing, and software system design.",
      current: true
    },
    {
      year: "July 2022 – May 2024",
      period: "July 2022 – May 2024",
      degree: "HSC in Science",
      institution: "Pace Junior Science College, Thane",
      grade: "79.33%",
      description: "Rigorous academic training in Physics, Chemistry, Advanced Mathematics, and Computer Science fundamentals.",
      current: false
    },
    {
      year: "May 2022",
      period: "Completed May 2022",
      degree: "SSC",
      institution: "St. Xavier’s High School, Airoli",
      grade: "90.20%",
      description: "Strong academic foundation with distinction in mathematics, sciences, and analytical problem-solving.",
      current: false
    }
  ],

  journey: [
    {
      phase: "Phase 01",
      year: "2022 – 2024",
      title: "Foundations & Algorithmic Thinking",
      institution: "Pace Junior Science College, Thane",
      badge: "FOUNDATION",
      status: "COMPLETED",
      description: "Completed higher secondary education with distinction in Science & Mathematics. Built rigorous foundations in programming logic, data structures, and computer science principles.",
      tags: ["C++", "Algorithms", "Mathematics", "Problem Solving", "Web Standards"]
    },
    {
      phase: "Phase 02",
      year: "2024 – 2028",
      title: "B.Tech Computer Science & Engineering",
      institution: "ITM Skills University, Navi Mumbai",
      badge: "9.45 CGPA",
      status: "IN PROGRESS",
      description: "Enrolled in B.Tech CSE maintaining top academic standing (9.45 CGPA). Deepened expertise in C++ memory management, Java Object-Oriented Architecture, relational databases, and operating systems.",
      tags: ["Core CS", "Java OOP", "C++ Memory Mgmt", "MySQL & ACID", "Data Structures"]
    },
    {
      phase: "Phase 03",
      year: "2024 – 2026",
      title: "Full-Stack Backend, Cloud APIs & Microservices",
      institution: "Independent & Open Source Production",
      badge: "ACTIVE PRODUCTION",
      status: "CURRENT FOCUS",
      isCurrent: true,
      description: "Architected 4 production web platforms (LinguaHub, HUFT Clone, Peer-Tutor, HomeConnect). Integrated AWS cloud suites (EC2, S3, RDS, CloudWatch), automated Docker containers, and high-speed RESTful APIs.",
      tags: ["Node.js", "Express.js", "MongoDB", "AWS Suite", "Docker", "RESTful Architecture"]
    },
    {
      phase: "Phase 04",
      year: "2026 & Beyond",
      title: "Cloud Native Orchestration & Scalable Systems",
      institution: "Enterprise Systems & DevOps",
      badge: "NEXT HORIZON",
      status: "UPCOMING",
      description: "Advancing into Kubernetes cluster orchestration, Infrastructure as Code with Terraform, Redis distributed caching, reverse-proxy load balancing, and high-concurrency microservices.",
      tags: ["Kubernetes", "Terraform (IaC)", "Distributed Caching", "CI/CD Automation", "System Design"]
    }
  ],

  skillCategories: [
    {
      category: "LANGUAGES",
      description: "Core programming languages for algorithms, systems, and backend runtimes",
      skills: [
        { name: "C++", level: "Advanced", usage: "Data structures, memory allocation, competitive problem solving", icon: "cpp", highlight: true },
        { name: "Java", level: "Proficient", usage: "Object-oriented architectures, multithreading, enterprise backend logic", icon: "java", highlight: false },
        { name: "Python", level: "Proficient", usage: "Automation scripts, backend prototyping, data handling", icon: "python", highlight: false },
        { name: "JavaScript", level: "Advanced", usage: "Asynchronous runtime, full-stack microservices, modern ES6+", icon: "javascript", highlight: true }
      ]
    },
    {
      category: "BACKEND",
      description: "Server runtimes, RESTful frameworks, middleware pipelines, and API protocols",
      skills: [
        { name: "Node.js", level: "Advanced", usage: "Event-driven asynchronous backend runtime for high-throughput APIs", icon: "nodejs", highlight: true },
        { name: "Express.js", level: "Advanced", usage: "REST routing, middleware pipelines, rate-limiting, error handling", icon: "express", highlight: true },
        { name: "REST APIs", level: "Advanced", usage: "Stateless endpoint design, JSON schemas, status codes, query pagination", icon: "api", highlight: true },
        { name: "GraphQL", level: "Intermediate", usage: "Schema querying, mutations, resolver patterns, reduced over-fetching", icon: "graphql", highlight: false }
      ]
    },
    {
      category: "DATABASES",
      description: "Document, relational, and cloud databases with schema modeling & query optimization",
      skills: [
        { name: "MySQL", level: "Advanced", usage: "Relational schema design, normalization, ACID transactions, complex joins", icon: "mysql", highlight: true },
        { name: "MongoDB", level: "Advanced", usage: "Document schema modeling, aggregation pipelines, Mongoose ODM", icon: "mongodb", highlight: true },
        { name: "Firebase", level: "Proficient", usage: "Cloud Firestore, real-time sync, security rules, serverless auth", icon: "firebase", highlight: false },
        { name: "MariaDB", level: "Proficient", usage: "High-performance relational storage, RDS instances, indexing", icon: "mariadb", highlight: false }
      ]
    },
    {
      category: "CLOUD",
      description: "AWS cloud infrastructure, compute instances, object buckets, and telemetry",
      skills: [
        { name: "AWS", level: "Proficient", usage: "Cloud architecture provisioning, IAM security, scalable hosting", icon: "aws", highlight: true },
        { name: "EC2", level: "Proficient", usage: "Virtual compute instances, SSH configurations, security groups", icon: "ec2", highlight: false },
        { name: "S3", level: "Proficient", usage: "Object storage buckets, IAM policies, pre-signed upload URLs", icon: "s3", highlight: false },
        { name: "RDS", level: "Proficient", usage: "Managed relational database instances, backups, connection pooling", icon: "rds", highlight: false },
        { name: "IAM", level: "Proficient", usage: "Principle of least privilege, roles, policies, service credentials", icon: "iam", highlight: false },
        { name: "CloudWatch", level: "Proficient", usage: "Server telemetry metrics, log aggregation, threshold alarms", icon: "cloudwatch", highlight: false },
        { name: "VPC", level: "Intermediate", usage: "Virtual private clouds, subnets, route tables, network isolation", icon: "vpc", highlight: false }
      ]
    },
    {
      category: "DEVOPS",
      description: "Containerization, automated CI/CD pipelines, Git, and Linux administration",
      skills: [
        { name: "Docker", level: "Proficient", usage: "Containerization, multi-stage Dockerfiles, Compose orchestration", icon: "docker", highlight: true },
        { name: "Jenkins", level: "Proficient", usage: "Automated CI/CD build pipelines, test runners, deployment hooks", icon: "jenkins", highlight: false },
        { name: "Git", level: "Advanced", usage: "Branching strategies, commit history, rebase, merge conflict resolution", icon: "git", highlight: true },
        { name: "GitHub", level: "Advanced", usage: "Remote repositories, GitHub Actions workflows, code reviews", icon: "github", highlight: true },
        { name: "Terraform", level: "Intermediate", usage: "Infrastructure as Code (IaC), declarative cloud provisioning", icon: "terraform", highlight: false },
        { name: "Kubernetes", level: "Intermediate", usage: "Container orchestration, Pods, Deployments, Services, Ingress", icon: "kubernetes", highlight: false },
        { name: "EKS", level: "Intermediate", usage: "AWS Elastic Kubernetes Service cluster deployment and management", icon: "eks", highlight: false },
        { name: "CI/CD", level: "Proficient", usage: "Continuous integration & deployment pipelines for zero downtime", icon: "cicd", highlight: false },
        { name: "Linux", level: "Advanced", usage: "Ubuntu/Debian server administration, permissions, systemd, process logs", icon: "linux", highlight: true },
        { name: "Shell Scripting", level: "Proficient", usage: "Bash/Zsh automation scripts, server maintenance, build automation", icon: "terminal", highlight: false }
      ]
    },
    {
      category: "SYSTEM DESIGN",
      description: "Architectural patterns for scalable, reliable, and fault-tolerant software",
      skills: [
        { name: "Database Design", level: "Advanced", usage: "Entity-relationship modeling, indexing strategies, normalization", icon: "database", highlight: true },
        { name: "REST API Design", level: "Advanced", usage: "Resource naming, HTTP verbs, payload validation, RFC error schemas", icon: "api", highlight: true },
        { name: "Microservices", level: "Intermediate", usage: "Decoupled domain services, independent scaling, API gateway routing", icon: "network", highlight: false },
        { name: "Scalability", level: "Proficient", usage: "Horizontal vs vertical scaling, stateless service tiers, concurrency", icon: "trending-up", highlight: false },
        { name: "Caching", level: "Proficient", usage: "In-memory caching strategies, TTL management, cache invalidation", icon: "zap", highlight: false },
        { name: "Load Balancing", level: "Intermediate", usage: "Reverse proxies, round-robin distribution, health check traffic routing", icon: "layers", highlight: false }
      ]
    },
    {
      category: "DESIGN",
      description: "UI/UX wireframing, component design systems, and responsive layout workflows",
      skills: [
        { name: "Figma", level: "Advanced", usage: "Interactive wireframing, high-fidelity prototypes, design tokens", icon: "figma", highlight: true },
        { name: "Wireframing", level: "Advanced", usage: "User flow mapping, low-fidelity layouts, UX structure", icon: "layout", highlight: false },
        { name: "Prototyping", level: "Advanced", usage: "Interactive component states, click-through transitions", icon: "play", highlight: false },
        { name: "Canva", level: "Advanced", usage: "Graphic assets, visual branding, presentation materials", icon: "image", highlight: false },
        { name: "Responsive Design", level: "Proficient", usage: "Mobile-first layouts, flexible grids, fluid typography, media queries", icon: "smartphone", highlight: true }
      ]
    }
  ],

  projects: [
    {
      id: "lingua-hub",
      title: "LinguaHub – Language Learning Platform | MERN Stack",
      shortTitle: "LinguaHub",
      category: "MERN Stack / Full-Stack",
      badge: "MERN",
      year: "Dec 2025",
      tagline: "Developed a full-stack web application using React, Node.js, Express and MongoDB with JWT authentication, role-based access, and gamification.",
      description: "A full-stack language learning web application designed to make vocabulary and grammar acquisition engaging through gamified lessons, interactive quizzes, dynamic streaks, XP leaderboards, and role-based user access.",
      problem: "Traditional language learning tools often suffer from fragmented state management, insecure token handling, and lack of real-time gamification feedback loops for student retention.",
      solution: "Architected a decoupled MERN platform with stateless JWT authentication, role-based access control (RBAC), atomic database operations for leaderboard scoring, and modular REST API micro-routes.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "Tailwind CSS"],
      architectureNodes: [
        { name: "React Client", role: "SPA UI / State Management", icon: "react" },
        { name: "Node.js API", role: "Express Gateway & Controller", icon: "server" },
        { name: "JWT Auth & RBAC", role: "Security Middleware", icon: "shield" },
        { name: "MongoDB Cluster", role: "User Profiles, Quizzes & Scores", icon: "database" }
      ],
      features: [
        "Developed a full-stack web application using React, Node.js, Express and MongoDB",
        "Implemented JWT-based authentication and role-based access control",
        "Built REST APIs for lessons, quizzes and progress tracking",
        "Integrated database operations supporting CRUD functionality",
        "Designed user-friendly interface with gamification features like streaks and leaderboard"
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
      liveDemo: "https://linguahub-pearl.vercel.app",
      documentation: "https://github.com/Vrutti88/LinguaHub#readme",
      featured: true
    },
    {
      id: "peer-tutor",
      title: "Peer Tutor – Peer Tutoring Matching System | Firebase, JavaScript, HTML, CSS",
      shortTitle: "Peer Tutor",
      category: "Full-Stack / Firebase",
      badge: "FIREBASE",
      year: "Oct 2025",
      tagline: "Developed a platform connecting students and tutors based on subject and availability with Firebase Auth, matching algorithms, and analytics.",
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
        "Developed a platform connecting students and tutors based on subject and availability",
        "Integrated Firebase Authentication with Google and email login",
        "Developed matching algorithm for tutor recommendations",
        "Implemented session booking, view and cancel features using CRUD logic",
        "Created analytics dashboard to visualize user activity"
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
      liveDemo: "https://peer-tutor-beryl.vercel.app",
      documentation: "https://github.com/Vrutti88/Peer-Tutor#readme",
      featured: true
    },
    {
      id: "huft-clone",
      title: "Heads Up For Tails – Pet E-Commerce Website Clone | HTML, CSS, JavaScript, Figma",
      shortTitle: "HUFT E-Commerce",
      category: "Frontend Architecture & UI/UX",
      badge: "UI / UX",
      year: "Jun 2025",
      tagline: "Cloned a pet e-commerce website with responsive product pages, category filtering, cart, wishlist, starter kits, and Figma UI design.",
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
        "Cloned a pet e-commerce website that enables users to efficiently find food, toys and care products for pets",
        "Developed responsive product pages using HTML and CSS with clean layouts and smooth navigation",
        "Added dynamic features such as category filtering, cart, wishlist and price calculator using JavaScript",
        "Designed starter kits, bulk discount tiers and a monthly subscription box to improve user experience",
        "Designed the UI and user flow in Figma and used Excel to plan pricing and revenue"
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
      liveDemo: "https://heads-up-for-tails.vercel.app",
      documentation: "https://github.com/Vrutti88/HUFT-Clone#readme",
      featured: true
    },
    {
      id: "build-smart",
      title: "BuildSmart — Construction Project Cloud",
      shortTitle: "BuildSmart",
      category: "Cloud & Microservices",
      badge: "CLOUD",
      year: "2026",
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
      year: "2026",
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
      year: "2026",
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
      liveDemo: "https://home-connect-proj.vercel.app",
      featured: false
    }
  ],

  achievements: [
    {
      title: "Academic Excellence — 9.45 CGPA",
      issuer: "ITM Skills University, Kharghar",
      date: "2024 – Present",
      description: "Ranked among top performers across B.Tech Computer Science coursework covering Data Structures, C++, OOP, and System Fundamentals.",
      badge: "ACADEMIC"
    },
    {
      title: "Student Portfolio Hackathon 2026 Contender",
      issuer: "Technical Showcase",
      date: "2026",
      description: "Engineered a production-ready Developer Command Center with live backend health diagnostics, animated architecture diagrams, and MERN API integration.",
      badge: "HACKATHON"
    }
  ],

  certifications: [
    {
      title: "Full-Stack Web Development & APIs",
      issuer: "Academic & Project Portfolio",
      date: "2024",
      description: "Demonstrated practical mastery in building RESTful services with Node.js, Express, MongoDB, and React with JWT authentication.",
      badge: "VERIFIED"
    },
    {
      title: "Cloud & DevOps Architecture in Progress",
      issuer: "Active Continuous Learning",
      date: "2024 – 2025",
      description: "Hands-on experience with AWS cloud services (EC2, S3, RDS, IAM, CloudWatch) and containerization via Docker.",
      badge: "IN PROGRESS"
    }
  ],

  gitTerminalLogs: [
    { hash: "a8f21c7", msg: "feat: implement LinguaHub real-time XP leaderboard & streaks" },
    { hash: "91c3d2e", msg: "feat: add JWT authentication & role-based access control (RBAC)" },
    { hash: "72bd9af", msg: "feat: construct REST API endpoints for course modules & quizzes" },
    { hash: "4fd120c", msg: "refactor: optimize MongoDB query indexing for sub-50ms latency" },
    { hash: "3e89a1b", msg: "docs: add comprehensive system architecture & Swagger schemas" }
  ]
};
