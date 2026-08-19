import React, { useState, useRef } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  CheckCircle2, 
  Printer, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  X,
  Sparkles,
  BookOpen,
  GraduationCap,
  Briefcase,
  Code2,
  Layers,
  Cpu
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const ResumeSection = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const printableRef = useRef(null);

  // Lock Lenis smooth scrolling and body scroll when resume modal opens
  React.useEffect(() => {
    if (isPreviewOpen) {
      if (window.lenis) {
        window.lenis.stop();
      }
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        if (window.lenis) {
          window.lenis.start();
        }
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isPreviewOpen]);

  const handlePrint = () => {
    const printContent = printableRef.current;
    if (!printContent) return;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Vrutti_Patil_Resume</title>
          <meta charset="utf-8" />
          <style>
            @page { margin: 15mm; size: A4; }
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
              color: #111827;
              line-height: 1.45;
              font-size: 10.5pt;
              margin: 0;
              padding: 10px;
            }
            .header { text-align: center; border-bottom: 2px solid #111827; padding-bottom: 8px; margin-bottom: 12px; }
            .name { font-size: 22pt; font-weight: bold; margin: 0; letter-spacing: 0.5px; }
            .contacts { font-size: 9pt; margin-top: 4px; color: #374151; display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }
            .contacts a { color: #111827; text-decoration: none; }
            .section { margin-bottom: 14px; }
            .section-title { font-size: 11pt; font-weight: bold; text-transform: uppercase; border-bottom: 1px solid #9CA3AF; padding-bottom: 2px; margin-bottom: 6px; letter-spacing: 0.5px; }
            .summary { font-size: 9.5pt; text-align: justify; }
            .skill-row { margin-bottom: 3px; font-size: 9pt; }
            .skill-name { font-weight: bold; }
            .item-header { display: flex; justify-content: space-between; align-items: baseline; font-size: 9.5pt; }
            .item-title { font-weight: bold; }
            .item-meta { font-style: italic; color: #4B5563; }
            .item-dates { font-weight: 500; font-size: 9pt; }
            ul { margin: 3px 0 8px 18px; padding: 0; }
            li { font-size: 9pt; margin-bottom: 2.5px; }
          </style>
        </head>
        <body>
          ${printContent.innerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  const handleDownloadTxt = () => {
    const resumeText = `VRUTTI PATIL
Phone: +91-9321428539 | Email: vruttipatil1396@gmail.com
LinkedIn: https://linkedin.com/in/vruttipatil/ | GitHub: https://github.com/Vrutti88

=======================================================
SUMMARY
=======================================================
Dedicated Computer Science undergraduate passionate about full-stack development, cloud technologies and system design. Proficient in React.js, Node.js, Express.js, AWS, Docker and modern web development practices, with experience building responsive applications and deploying cloud-based solutions. A quick learner with strong problem-solving skills, seeking opportunities to contribute to innovative engineering teams while growing as a software developer.

=======================================================
SKILLS
=======================================================
• Programming Languages: C++, Java, Python, JavaScript
• Web Technologies: HTML5, CSS3, React.js, Node.js, Express.js, REST APIs, GraphQL
• Databases: MySQL, MongoDB, Firebase, MariaDB
• Cloud & AWS: Amazon EC2, Amazon S3, Amazon RDS, IAM, CloudWatch, VPC, Cloud Computing
• DevOps: Docker, Jenkins, Git, GitHub, Terraform, Kubernetes (EKS), CI/CD, Linux, Shell Scripting
• System Design: Database Design, REST API Design, Microservices, Scalability, Caching, Load Balancing
• IoT: ESP8266, Arduino, Blynk, Sinric Pro
• Design: UI Design, Figma, Wireframing, Prototyping, Canva, Responsive Design
• Tools: Git, GitHub, VS Code, Postman, MS Office

=======================================================
EDUCATION
=======================================================
B.Tech - Computer Science and Engineering                July 2024 - Present
ITM Skills University, Kharghar                         CGPA: 9.45 / 10

HSC in Science                                          July 2022 - May 2024
Pace Junior Science College, Thane                      79.33%

SSC                                                     May 2022
St. Xavier’s High School, Airoli                        90.20%

=======================================================
PROJECTS
=======================================================
1. LinguaHub – Language Learning Platform | MERN Stack (Dec 2025)
   - Developed a full-stack web application using React, Node.js, Express and MongoDB.
   - Implemented JWT-based authentication and role-based access control.
   - Built REST APIs for lessons, quizzes and progress tracking.
   - Integrated database operations supporting CRUD functionality.
   - Designed user-friendly interface with gamification features like streaks and leaderboard.

2. Peer Tutor – Peer Tutoring Matching System | Firebase, JavaScript, HTML, CSS (Oct 2025)
   - Developed a platform connecting students and tutors based on subject and availability.
   - Integrated Firebase Authentication with Google and email login.
   - Developed matching algorithm for tutor recommendations.
   - Implemented session booking, view and cancel features using CRUD logic.
   - Created analytics dashboard to visualize user activity.

3. Heads Up For Tails – Pet E-Commerce Website Clone | HTML, CSS, JavaScript, Figma (Jun 2025)
   - Cloned a pet e-commerce website that enables users to efficiently find food, toys and care products for pets.
   - Developed responsive product pages using HTML and CSS with clean layouts and smooth navigation.
   - Added dynamic features such as category filtering, cart, wishlist and price calculator using JavaScript.
   - Designed starter kits, bulk discount tiers and a monthly subscription box to improve user experience.
   - Designed the UI and user flow in Figma and used Excel to plan pricing and revenue.

=======================================================
OTHERS
=======================================================
Languages: English, Hindi, Marathi, German (Basic)
Hobbies & Interests: Sketching, Exploring new technologies, Problem solving, Learning new skills, Creative Activities
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Vrutti_Patil_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="resume-section" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-bg-border">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brand-green uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>[09] CURRICULUM VITAE &amp; CREDENTIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary font-sans">
              Developer Resume Document
            </h2>
          </div>

          <p className="text-sm font-mono text-text-secondary mt-2 md:mt-0 max-w-md">
            Verified academic standing, core competencies, and project portfolio architecture summary.
          </p>
        </div>

        {/* Resume Hero Display Card */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-bg-card border border-brand-green/40 shadow-2xl p-6 sm:p-10 font-mono relative overflow-hidden">
          {/* Subtle Decorative Circuit Glow */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Identity Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-bg-border">
            <div>
              <span className="text-xs text-brand-green font-bold uppercase tracking-wider">
                &lt;OFFICIAL RESUME /&gt;
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary mt-1 font-sans">
                VRUTTI PATIL
              </h3>
              <p className="text-xs text-text-secondary mt-1">
                B.Tech Computer Science &amp; Engineering • ITM Skills University (CGPA 9.45 / 10)
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                data-cursor="PRINT / SAVE PDF"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-brand-green text-black font-bold text-xs shadow-glow-sm hover:bg-brand-green-bright transition-all"
                title="Download / Save as PDF"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>

              <button
                onClick={() => setIsPreviewOpen(true)}
                data-cursor="PREVIEW"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-bg-surface border border-bg-border hover:border-brand-green text-text-primary hover:text-brand-green text-xs transition-all"
              >
                <Eye className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>
            </div>
          </div>

          {/* Quick Summary Grid */}
          <div className="py-6 space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-bg-surface border border-bg-border space-y-1">
                <div className="text-text-muted text-[10px] uppercase tracking-wider">Degree &amp; Institute</div>
                <div className="font-bold text-text-primary">B.Tech CSE (July 2024 – Present)</div>
                <div className="text-brand-green font-bold">ITM Skills University, Kharghar • 9.45 CGPA</div>
              </div>

              <div className="p-3.5 rounded-xl bg-bg-surface border border-bg-border space-y-1">
                <div className="text-text-muted text-[10px] uppercase tracking-wider">Contact Coordinates</div>
                <div className="font-bold text-text-primary">+91-9321428539</div>
                <div className="text-brand-purple font-semibold truncate">vruttipatil1396@gmail.com</div>
              </div>
            </div>

            {/* Core Competencies Matrix */}
            <div className="p-4 rounded-xl bg-bg-surface/50 border border-bg-border space-y-2">
              <div className="text-text-muted text-[10px] uppercase tracking-wider">Core Technical Arsenal</div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Firebase', 'C++', 'Java', 'Python', 'JavaScript', 'AWS (EC2, S3, RDS)', 'Docker', 'Kubernetes (EKS)', 'REST APIs', 'Git', 'Figma', 'System Design'].map((skill) => (
                  <span key={skill} className="px-2 py-0.5 rounded bg-bg-card border border-bg-border text-brand-green text-[11px]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card Footer Verification */}
          <div className="pt-4 border-t border-bg-border/60 flex items-center justify-between text-[11px] text-text-secondary">
            <span className="flex items-center gap-1.5 text-brand-green">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified Developer Resume</span>
            </span>
            <span className="text-text-muted">Status: Open to Internships / Opportunities</span>
          </div>
        </div>
      </div>

      {/* High-Fidelity Resume Modal */}
      {isPreviewOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 pt-16 sm:pt-20 pb-8"
          onClick={() => setIsPreviewOpen(false)}
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          data-lenis-prevent="true"
        >
          <div 
            className="w-full max-w-4xl bg-white text-gray-900 rounded-2xl shadow-2xl overflow-hidden font-sans max-h-[85vh] flex flex-col animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            data-lenis-prevent="true"
          >
            {/* Modal Actions Bar */}
            <div className="bg-[#0b0f17] text-white px-6 py-3.5 border-b border-gray-800 flex items-center justify-between flex-shrink-0 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
                <span className="font-bold text-xs text-brand-green">VRUTTI_PATIL_RESUME.PDF</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-green text-black font-bold text-xs shadow-sm hover:bg-brand-green-bright transition-all"
                  title="Print or Save as PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>

                <button
                  onClick={handleDownloadTxt}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800 text-gray-200 hover:text-white border border-gray-700 text-xs transition-all"
                  title="Download raw text"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>TXT</span>
                </button>

                <button 
                  onClick={() => setIsPreviewOpen(false)} 
                  className="p-1.5 rounded-lg bg-gray-800 text-gray-400 hover:text-red-400 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Resume Content Container (Printable Paper Layout) */}
            <div 
              className="p-6 sm:p-10 overflow-y-auto space-y-6 text-sm bg-white text-gray-900 select-text leading-relaxed overscroll-contain"
              data-lenis-prevent="true"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              style={{ WebkitOverflowScrolling: 'touch', overscrollBehavior: 'contain' }}
            >
              <div ref={printableRef} className="space-y-5 max-w-3xl mx-auto">
                {/* Header */}
                <div className="header text-center border-b-2 border-gray-900 pb-3">
                  <h1 className="name text-3xl font-extrabold tracking-tight text-gray-900 uppercase">
                    VRUTTI PATIL
                  </h1>
                  <div className="contacts text-xs text-gray-700 mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                    <span className="flex items-center gap-1 font-medium">📞 +91-9321428539</span>
                    <span>•</span>
                    <a href="mailto:vruttipatil1396@gmail.com" className="hover:underline text-blue-700 font-medium">
                      ✉️ vruttipatil1396@gmail.com
                    </a>
                    <span>•</span>
                    <a href="https://linkedin.com/in/vruttipatil/" target="_blank" rel="noreferrer" className="hover:underline text-blue-700 font-medium">
                      🔗 linkedin.com/in/vruttipatil/
                    </a>
                    <span>•</span>
                    <a href="https://github.com/Vrutti88" target="_blank" rel="noreferrer" className="hover:underline text-blue-700 font-medium">
                      🐙 github.com/Vrutti88
                    </a>
                  </div>
                </div>

                {/* Summary */}
                <div className="section">
                  <h2 className="section-title text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-400 pb-1 mb-2">
                    Summary
                  </h2>
                  <p className="summary text-xs sm:text-[13px] text-gray-800 leading-relaxed text-justify">
                    Dedicated Computer Science undergraduate passionate about full-stack development, cloud technologies and system design. Proficient in React.js, Node.js, Express.js, AWS, Docker and modern web development practices, with experience building responsive applications and deploying cloud-based solutions. A quick learner with strong problem-solving skills, seeking opportunities to contribute to innovative engineering teams while growing as a software developer.
                  </p>
                </div>

                {/* Skills */}
                <div className="section">
                  <h2 className="section-title text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-400 pb-1 mb-2">
                    Skills
                  </h2>
                  <div className="space-y-1 text-xs sm:text-[12.5px] text-gray-800">
                    <div className="skill-row"><strong className="skill-name text-gray-900">Programming Languages:</strong> C++, Java, Python, JavaScript</div>
                    <div className="skill-row"><strong className="skill-name text-gray-900">Web Technologies:</strong> HTML5, CSS3, React.js, Node.js, Express.js, REST APIs, GraphQL</div>
                    <div className="skill-row"><strong className="skill-name text-gray-900">Databases:</strong> MySQL, MongoDB, Firebase, MariaDB</div>
                    <div className="skill-row"><strong className="skill-name text-gray-900">Cloud &amp; AWS:</strong> Amazon EC2, Amazon S3, Amazon RDS, IAM, CloudWatch, VPC, Cloud Computing</div>
                    <div className="skill-row"><strong className="skill-name text-gray-900">DevOps:</strong> Docker, Jenkins, Git, GitHub, Terraform, Kubernetes (EKS), CI/CD, Linux, Shell Scripting</div>
                    <div className="skill-row"><strong className="skill-name text-gray-900">System Design:</strong> Database Design, REST API Design, Microservices, Scalability, Caching, Load Balancing</div>
                    <div className="skill-row"><strong className="skill-name text-gray-900">IoT:</strong> ESP8266, Arduino, Blynk, Sinric Pro</div>
                    <div className="skill-row"><strong className="skill-name text-gray-900">Design:</strong> UI Design, Figma, Wireframing, Prototyping, Canva, Responsive Design</div>
                    <div className="skill-row"><strong className="skill-name text-gray-900">Tools:</strong> Git, GitHub, VS Code, Postman, MS Office</div>
                  </div>
                </div>

                {/* Education */}
                <div className="section">
                  <h2 className="section-title text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-400 pb-1 mb-2">
                    Education
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <div className="item-header flex items-center justify-between text-xs sm:text-[13px]">
                        <span className="item-title font-bold text-gray-900">B.Tech - Computer Science and Engineering</span>
                        <span className="item-dates text-gray-700 font-semibold">July 2024 - Present</span>
                      </div>
                      <div className="item-header flex items-center justify-between text-xs text-gray-700">
                        <span className="item-meta italic">ITM Skills University, Kharghar</span>
                        <span className="font-bold text-gray-900">CGPA: 9.45 / 10</span>
                      </div>
                    </div>

                    <div>
                      <div className="item-header flex items-center justify-between text-xs sm:text-[13px]">
                        <span className="item-title font-bold text-gray-900">HSC in Science</span>
                        <span className="item-dates text-gray-700 font-semibold">July 2022 - May 2024</span>
                      </div>
                      <div className="item-header flex items-center justify-between text-xs text-gray-700">
                        <span className="item-meta italic">Pace Junior Science College, Thane</span>
                        <span className="font-bold text-gray-900">79.33%</span>
                      </div>
                    </div>

                    <div>
                      <div className="item-header flex items-center justify-between text-xs sm:text-[13px]">
                        <span className="item-title font-bold text-gray-900">SSC</span>
                        <span className="item-dates text-gray-700 font-semibold">May 2022</span>
                      </div>
                      <div className="item-header flex items-center justify-between text-xs text-gray-700">
                        <span className="item-meta italic">St. Xavier’s High School, Airoli</span>
                        <span className="font-bold text-gray-900">90.20%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="section">
                  <h2 className="section-title text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-400 pb-1 mb-2">
                    Projects
                  </h2>
                  <div className="space-y-4">
                    {/* LinguaHub */}
                    <div>
                      <div className="item-header flex items-center justify-between text-xs sm:text-[13px]">
                        <span className="item-title font-bold text-gray-900">
                          LinguaHub – Language Learning Platform <span className="font-normal text-gray-600">| MERN Stack</span>
                        </span>
                        <span className="item-dates text-gray-700 font-semibold">Dec 2025</span>
                      </div>
                      <ul className="list-disc pl-5 mt-1 space-y-0.5 text-xs text-gray-800">
                        <li>Developed a full-stack web application using React, Node.js, Express and MongoDB.</li>
                        <li>Implemented JWT-based authentication and role-based access control.</li>
                        <li>Built REST APIs for lessons, quizzes and progress tracking.</li>
                        <li>Integrated database operations supporting CRUD functionality.</li>
                        <li>Designed user-friendly interface with gamification features like streaks and leaderboard.</li>
                      </ul>
                    </div>

                    {/* Peer Tutor */}
                    <div>
                      <div className="item-header flex items-center justify-between text-xs sm:text-[13px]">
                        <span className="item-title font-bold text-gray-900">
                          Peer Tutor – Peer Tutoring Matching System <span className="font-normal text-gray-600">| Firebase, JavaScript, HTML, CSS</span>
                        </span>
                        <span className="item-dates text-gray-700 font-semibold">Oct 2025</span>
                      </div>
                      <ul className="list-disc pl-5 mt-1 space-y-0.5 text-xs text-gray-800">
                        <li>Developed a platform connecting students and tutors based on subject and availability.</li>
                        <li>Integrated Firebase Authentication with Google and email login.</li>
                        <li>Developed matching algorithm for tutor recommendations.</li>
                        <li>Implemented session booking, view and cancel features using CRUD logic.</li>
                        <li>Created analytics dashboard to visualize user activity.</li>
                      </ul>
                    </div>

                    {/* Heads Up For Tails */}
                    <div>
                      <div className="item-header flex items-center justify-between text-xs sm:text-[13px]">
                        <span className="item-title font-bold text-gray-900">
                          Heads Up For Tails – Pet E-Commerce Website Clone <span className="font-normal text-gray-600">| HTML, CSS, JavaScript, Figma</span>
                        </span>
                        <span className="item-dates text-gray-700 font-semibold">Jun 2025</span>
                      </div>
                      <ul className="list-disc pl-5 mt-1 space-y-0.5 text-xs text-gray-800">
                        <li>Cloned a pet e-commerce website that enables users to efficiently find food, toys and care products for pets.</li>
                        <li>Developed responsive product pages using HTML and CSS with clean layouts and smooth navigation.</li>
                        <li>Added dynamic features such as category filtering, cart, wishlist and price calculator using JavaScript.</li>
                        <li>Designed starter kits, bulk discount tiers and a monthly subscription box to improve user experience.</li>
                        <li>Designed the UI and user flow in Figma and used Excel to plan pricing and revenue.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Others */}
                <div className="section">
                  <h2 className="section-title text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-400 pb-1 mb-2">
                    Others
                  </h2>
                  <div className="space-y-1 text-xs text-gray-800">
                    <div><strong className="text-gray-900">Languages:</strong> English, Hindi, Marathi, German (Basic)</div>
                    <div><strong className="text-gray-900">Hobbies &amp; Interests:</strong> Sketching, Exploring new technologies, Problem solving, Learning new skills, Creative Activities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
