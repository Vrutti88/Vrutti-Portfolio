# </> VRUTTI.DEV — Backend Developer Command Center & Developer OS

> **"Building robust backend systems and scalable APIs that power real-world applications."**  
> *Production-Grade Personal Portfolio Website for **Vrutti Patil** — Built for the **Student Portfolio Hackathon 2026**.*

---

## 🌟 Executive Overview & Architectural Philosophy

**VRUTTI.DEV** is an industry-level developer portfolio built from the ground up to showcase modern **Backend Engineering, RESTful APIs, Cloud Infrastructure, DevOps pipelines, and System Design**.

Rather than presenting a generic static frontend, the platform **behaves as a living distributed backend system**:
- **Live Interactive API Diagnostics Console**: Allows visitors and evaluators to execute live HTTP probes against the Express backend with sub-millisecond response latency monitoring and payload inspection.
- **Interactive 2.5D/3D Architecture Visualizer**: An active telemetry display with animated data packets navigating `Client` $\to$ `API Gateway` $\to$ `Node.js API` $\to$ `MongoDB` $\to$ `Cloud`.
- **Full MERN Stack**: Node.js, Express.js, MongoDB (with resilient in-memory fallback), React 18, Vite, and Tailwind CSS.
- **Developer Utilities**: Integrated terminal easter egg (`vrutti-os v2.6.0`), Raycast/VS Code style command palette (`Cmd+K`), and GitHub API proxy with TTL caching for `@Vrutti88`.

---

## 🛠️ Technology Arsenal

| Layer | Technologies & Tools |
| :--- | :--- |
| **Backend Runtime** | **Node.js (v20+)**, **Express.js (v4)**, RESTful Routing, Middleware Pipelines |
| **Database & Cache** | **MongoDB / Mongoose ODM**, In-Memory TTL Cache Layer, Resilient Schema Engine |
| **Security & Middleware** | **Helmet** (Security Headers), **CORS**, **Express-Rate-Limit** (API & Contact gates), Regex Validation |
| **Frontend Framework** | **React 18**, **Vite**, **Tailwind CSS**, Modern Modular Architecture |
| **Animations & Motion** | **Framer Motion**, **Lenis Smooth Scroll**, HTML5 Canvas Network Particles |
| **Cloud & DevOps Ready** | **AWS (EC2, S3, RDS, IAM, CloudWatch)**, **Docker Multi-Stage Builds**, **Git/GitHub CI** |
| **Icons & Typography** | **Lucide React**, **JetBrains Mono**, **Inter** |

---

## 📂 Project Directory Structure

```
vrutti-portfolio/
│
├── client/                               # Frontend Single Page Application (SPA)
│   ├── public/                           # Static assets, SVG icons, robots.txt
│   ├── src/
│   │   ├── assets/                       # Visual assets and tokens
│   │   ├── components/
│   │   │   ├── about/                    # AboutSection, Terminal JSON, Education Timeline
│   │   │   ├── achievements/             # Achievements & Certifications
│   │   │   ├── api-console/              # ApiMonitor, RequestTester, Latency Chart
│   │   │   ├── common/                   # Navbar, Footer, Cursor, BootLoader, CommandPalette, TerminalModal
│   │   │   ├── contact/                  # Terminal Contact Form ($ send_message)
│   │   │   ├── github/                   # GitHubDashboard, Heatmap Matrix, Git Log Terminal
│   │   │   ├── hero/                     # HeroSection & HeroVisualizer (3D tilt & packet flow)
│   │   │   ├── journey/                  # EngineeringJourney ("Learning & Building")
│   │   │   ├── projects/                 # ProjectCard, ArchitectureDiagram, CaseStudyModal
│   │   │   ├── resume/                   # ResumeSection & Document Previewer
│   │   │   ├── stats/                    # LiveStatsStrip with viewport counting
│   │   │   ├── system-arch/              # SystemArchitecture ("How This Portfolio Works")
│   │   │   └── tech/                     # TechArsenal with category filters & tooltips
│   │   ├── data/
│   │   │   └── portfolioData.js          # Centralized Single Source of Truth
│   │   ├── hooks/                        # useApiHealth, useGitHubData, useSmoothScroll
│   │   ├── utils/                        # apiClient (Axios with auto-fallback)
│   │   ├── App.jsx                       # Master Application Root
│   │   ├── main.jsx                      # Client Entrypoint
│   │   └── index.css                     # Tailwind tokens, glowing scanlines, glassmorphism
│   ├── index.html                        # SEO Meta Tags, OpenGraph, Typography Fonts
│   ├── tailwind.config.js                # Custom near-black & neon green theme tokens
│   └── vite.config.js                    # Vite configuration & dev proxy
│
├── server/                               # Production Express REST Backend
│   ├── config/
│   │   ├── db.js                         # Mongoose connector + auto-resilient in-memory store
│   │   └── seedData.js                   # Authoritative developer datasets
│   ├── controllers/                      # Health, Projects, Skills, Contact, GitHub, Stats
│   ├── middleware/                       # Rate limiters, request validation, error handlers
│   ├── models/                           # ContactMessage, Project, Skill Mongoose models
│   ├── routes/
│   │   └── apiRoutes.js                  # Centralized REST endpoint router
│   ├── utils/                            # GitHub API proxy & memory cache
│   ├── server.js                         # Express server bootstrap
│   ├── package.json                      # Server dependencies
│   ├── .env                              # Server environment variables
│   └── .env.example                      # Environment template
│
├── package.json                          # Root scripts for concurrent workspace execution
└── README.md                             # Comprehensive technical documentation
```

---

## 📡 REST API Documentation

All routes are mounted under the `/api` prefix and protected by global rate limiting.

### 1. System Health & Telemetry
- **`GET /api/health`**
  - **Description**: Returns live server status, uptime seconds, memory RSS/heap metrics, and database state.
  - **Sample Output**:
    ```json
    {
      "status": "ok",
      "service": "vrutti-portfolio-api",
      "developer": "Vrutti Patil",
      "uptime": "120s",
      "database": { "status": "online", "mode": "mongodb" },
      "memoryUsage": { "heapUsed": "22 MB" }
    }
    ```
- **`POST /api/ping`**
  - **Description**: High-speed echo probe for calculating round-trip network latency.

### 2. Projects & Case Studies
- **`GET /api/projects`**
  - **Description**: Fetches all engineered project catalog items with architecture flows.
  - **Query Params**: `?category=MERN` or `?featured=true`
- **`GET /api/projects/:id`**
  - **Description**: Returns complete 10-point engineering case study for a specific project.

### 3. Technology Arsenal
- **`GET /api/skills`**
  - **Description**: Returns categorized skills (Languages, Backend, Databases, Cloud, DevOps, System Design, Design).

### 4. GitHub Integration
- **`GET /api/github/profile`**
  - **Description**: Fetches public profile for `@Vrutti88` with in-memory TTL caching (600s).
- **`GET /api/github/repos`**
  - **Description**: Returns repository metadata, stargazer counts, and commit topics.

### 5. Contact Form Submission
- **`POST /api/contact`**
  - **Rate Limit**: Max 8 messages per hour per IP.
  - **Validation Rules**: `name` (2-100 chars), `email` (valid regex), `subject` (2-150 chars), `message` (5-3000 chars).
  - **Sample Request**:
    ```json
    {
      "name": "Sarah Connor",
      "email": "sarah@cyberdyne.io",
      "subject": "Backend Engineer Opportunity",
      "message": "We loved your LinguaHub architecture case study and want to chat!"
    }
    ```

---

## 💻 Local Installation & Setup

### Prerequisites
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)
- *(Optional)* **MongoDB** running locally or via MongoDB Atlas URI

### 1. Clone & Install Dependencies
```bash
# Clone the repository
git clone https://github.com/Vrutti88/vrutti-portfolio.git
cd vrutti-portfolio

# Install backend and frontend dependencies
npm run install:all
```

### 2. Environment Configuration
Create `server/.env` based on `server/.env.example`:
```env
PORT=5001
NODE_ENV=development
CLIENT_URL=http://localhost:5173
MONGODB_URI=mongodb://localhost:27017/vrutti_portfolio
GITHUB_USERNAME=Vrutti88
GITHUB_TOKEN=
```

> **Note**: If `MONGODB_URI` is omitted or MongoDB is not running locally, the server **automatically engages its High-Speed In-Memory Store**, allowing 100% of routes and contact submissions to function seamlessly with zero crashes.

### 3. Start Development Servers
In separate terminals (or concurrently):
```bash
# Start Backend Express API (Port 5001)
npm run dev:server

# Start Frontend React Client (Port 5173)
npm run dev:client
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

---

## ⚡ Interactive Features & Shortcuts

- **Command Palette**: Press `Cmd + K` (Mac) or `Ctrl + K` (Windows/Linux) anywhere to launch the spotlight search.
- **Interactive Developer Shell**: Press `` ` `` / `~` or click the `<Terminal />` icon in the navigation bar to access `vrutti-os`.
  - Supported terminal commands: `help`, `about`, `cat about.json`, `skills`, `projects`, `curl /api/health`, `github`, `contact`, `resume`, `sudo`, `clear`, `exit`.
- **Live API Diagnostics Console**: Scroll to the `#api-console` section to execute live HTTP GET/POST requests and benchmark latency in real-time.
- **Architecture Case Studies**: Click `> Case Study` on any project card to inspect schemas, challenges, and solutions.

---

## 👤 Author Profile

- **Developer**: **Vrutti Patil**
- **Education**: B.Tech Computer Science and Engineering, ITM Skills University (CGPA: 9.45 / 10)
- **Email**: [vruttipatil1396@gmail.com](mailto:vruttipatil1396@gmail.com)
- **GitHub**: [github.com/Vrutti88](https://github.com/Vrutti88)
- **LinkedIn**: [linkedin.com/in/vruttipatil/](https://linkedin.com/in/vruttipatil/)

---
*Created for the **Student Portfolio Hackathon 2026** • Designed with precision.*
