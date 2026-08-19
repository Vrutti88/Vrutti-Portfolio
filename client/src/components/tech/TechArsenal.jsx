import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Terminal, 
  Layers, 
  Palette, 
  Cpu, 
  Search,
  Sparkles,
  Zap,
  ArrowRight,
  ArrowLeft,
  SlidersHorizontal,
  LayoutGrid
} from 'lucide-react';
import { TechIcon } from './TechIcon';
import { portfolioData } from '../../data/portfolioData';

// Brand color palette for vibrant resting, borders, and glowing hover states
const BRAND_COLORS = {
  // Languages
  'javascript': '#F7DF1E',
  'js': '#F7DF1E',
  'c++': '#00599C',
  'cpp': '#00599C',
  'java': '#EA2D2E',
  'python': '#3776AB',
  'react': '#00D8FF',
  'html5': '#E34F26',
  'css3': '#1572B6',
  'tailwindcss': '#06B6D4',
  
  // Backend
  'node.js': '#5FA04E',
  'nodejs': '#5FA04E',
  'express.js': '#00FF66',
  'express': '#00FF66',
  'rest apis': '#00FF66',
  'rest api': '#00FF66',
  'rest api design': '#00FF66',
  'graphql': '#E10098',

  // Databases
  'mongodb': '#47A248',
  'mysql': '#00758F',
  'mariadb': '#00A3C4',
  'firebase': '#FFA000',

  // Cloud (AWS Suite)
  'aws': '#FF9900',
  'ec2': '#FF9900',
  's3': '#E05243',
  'rds': '#3B48CC',
  'iam': '#E7157B',
  'cloudwatch': '#FF4F8B',
  'vpc': '#8C4FFF',

  // DevOps & Infrastructure
  'docker': '#2496ED',
  'jenkins': '#D24939',
  'git': '#F05032',
  'github': '#FFFFFF',
  'terraform': '#7B42BC',
  'kubernetes': '#326CE5',
  'eks': '#326CE5',
  'linux': '#FCC624',
  'shell scripting': '#00FF66',
  'bash': '#00FF66',
  'cicd': '#00C4CC',
  'ci/cd': '#00C4CC',

  // System Design
  'microservices': '#A855F7',
  'scalability': '#00D8FF',
  'caching': '#F59E0B',
  'load balancing': '#00D8FF',
  'database design': '#3B48CC',

  // Design
  'figma': '#F24E1E',
  'canva': '#00C4CC',
  'wireframing': '#A855F7',
  'prototyping': '#A855F7',
  'responsive design': '#00FF66'
};

export const TechArsenal = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [viewMode, setViewMode] = useState('SLIDER'); // 'SLIDER' | 'GRID'

  // Flatten all skills into a single dictionary
  const skillMap = useMemo(() => {
    const map = {};
    portfolioData.skillCategories.forEach((group) => {
      group.skills.forEach((skill) => {
        map[skill.name.toLowerCase()] = {
          ...skill,
          category: group.category
        };
      });
    });
    return map;
  }, []);

  // Define the 4 Alternating Sliding Rows
  const rowDefinitions = useMemo(() => [
    {
      id: 'row-1',
      title: 'Languages & Backend Runtimes',
      direction: 'right', // Row 1: Sliding to the RIGHT
      speedClass: 'animate-marquee-right',
      skills: [
        skillMap['javascript'] || { name: 'JavaScript', usage: 'Asynchronous runtime, modern ES6+' },
        skillMap['node.js'] || { name: 'Node.js', usage: 'Event-driven high-throughput backend runtime' },
        skillMap['express.js'] || { name: 'Express.js', usage: 'REST routing & middleware pipelines' },
        skillMap['c++'] || { name: 'C++', usage: 'Data structures & memory optimization' },
        skillMap['java'] || { name: 'Java', usage: 'OOP architecture & multithreading' },
        skillMap['python'] || { name: 'Python', usage: 'Prototyping, scripting & automation' },
        skillMap['rest apis'] || { name: 'REST APIs', usage: 'Stateless endpoints & JSON schemas' },
        skillMap['graphql'] || { name: 'GraphQL', usage: 'Declarative schema & efficient queries' },
        { name: 'React', usage: 'Declarative UI components & state management', category: 'LANGUAGES' },
        { name: 'Tailwind CSS', usage: 'Utility-first modern responsive styling', category: 'DESIGN' },
      ]
    },
    {
      id: 'row-2',
      title: 'Cloud Architecture & Database Stores',
      direction: 'left', // Row 2: Sliding to the LEFT
      speedClass: 'animate-marquee-left',
      skills: [
        skillMap['mongodb'] || { name: 'MongoDB', usage: 'Document modeling & aggregation pipelines' },
        skillMap['aws'] || { name: 'AWS', usage: 'Cloud provisioning & scalable hosting' },
        skillMap['mysql'] || { name: 'MySQL', usage: 'ACID transactions & relational schema' },
        skillMap['ec2'] || { name: 'EC2', usage: 'Virtual compute instances & security groups' },
        skillMap['mariadb'] || { name: 'MariaDB', usage: 'High-performance relational storage' },
        skillMap['s3'] || { name: 'S3', usage: 'Object storage & pre-signed secure uploads' },
        skillMap['firebase'] || { name: 'Firebase', usage: 'Firestore NoSQL & serverless auth' },
        skillMap['rds'] || { name: 'RDS', usage: 'Managed database instances & backups' },
        skillMap['iam'] || { name: 'IAM', usage: 'Least privilege access & security policies' },
        skillMap['cloudwatch'] || { name: 'CloudWatch', usage: 'Server metrics, telemetry & threshold alarms' },
        skillMap['vpc'] || { name: 'VPC', usage: 'Virtual private clouds & network isolation' },
      ]
    },
    {
      id: 'row-3',
      title: 'DevOps Toolchain & Container Orchestration',
      direction: 'right', // Row 3: Sliding to the RIGHT
      speedClass: 'animate-marquee-right-fast',
      skills: [
        skillMap['docker'] || { name: 'Docker', usage: 'Multi-stage containers & Compose configs' },
        skillMap['kubernetes'] || { name: 'Kubernetes', usage: 'Pod orchestration, ingress & scaling' },
        skillMap['jenkins'] || { name: 'Jenkins', usage: 'Automated CI/CD build & test pipelines' },
        skillMap['git'] || { name: 'Git', usage: 'Branching models & version control' },
        skillMap['github'] || { name: 'GitHub', usage: 'Actions workflows & code reviews' },
        skillMap['terraform'] || { name: 'Terraform', usage: 'Infrastructure as Code (IaC)' },
        skillMap['eks'] || { name: 'EKS', usage: 'AWS managed Kubernetes clusters' },
        skillMap['linux'] || { name: 'Linux', usage: 'Ubuntu/Debian server administration' },
        skillMap['shell scripting'] || { name: 'Shell Scripting', usage: 'Bash/Zsh server maintenance scripts' },
        skillMap['ci/cd'] || { name: 'CI/CD', usage: 'Continuous automated delivery pipelines' },
      ]
    },
    {
      id: 'row-4',
      title: 'System Design & Modern Interface Engineering',
      direction: 'left', // Row 4: Sliding to the LEFT
      speedClass: 'animate-marquee-left-fast',
      skills: [
        skillMap['microservices'] || { name: 'Microservices', usage: 'Decoupled services & gateway routing' },
        skillMap['figma'] || { name: 'Figma', usage: 'UI design tokens & wireframing systems' },
        skillMap['scalability'] || { name: 'Scalability', usage: 'Stateless service tiers & concurrency' },
        skillMap['canva'] || { name: 'Canva', usage: 'Visual branding & graphics production' },
        skillMap['caching'] || { name: 'Caching', usage: 'In-memory strategies & TTL invalidation' },
        skillMap['responsive design'] || { name: 'Responsive Design', usage: 'Mobile-first fluid grids & queries' },
        skillMap['load balancing'] || { name: 'Load Balancing', usage: 'Reverse proxies & round-robin routing' },
        skillMap['wireframing'] || { name: 'Wireframing', usage: 'Low-fidelity architectural user flows' },
        skillMap['database design'] || { name: 'Database Design', usage: 'ER modeling, normalization & indexing' },
        skillMap['prototyping'] || { name: 'Prototyping', usage: 'Interactive click-through user journeys' },
        skillMap['rest api design'] || { name: 'REST API Design', usage: 'RFC schemas & payload validation' },
      ]
    }
  ], [skillMap]);

  // Categories list for filter tabs
  const categories = [
    { id: 'ALL', name: 'All Arsenal', icon: Cpu },
    { id: 'BACKEND', name: 'Backend & APIs', icon: Server },
    { id: 'CLOUD', name: 'Cloud (AWS)', icon: Cloud },
    { id: 'DEVOPS', name: 'DevOps & CI/CD', icon: Terminal },
    { id: 'DATABASES', name: 'Databases', icon: Database },
    { id: 'LANGUAGES', name: 'Languages', icon: Code2 },
    { id: 'SYSTEM DESIGN', name: 'System Design', icon: Layers },
    { id: 'DESIGN', name: 'Design / UX', icon: Palette },
  ];

  // Flatten all skills for Grid mode / search queries
  const allSkillsList = useMemo(() => {
    const list = [];
    const seen = new Set();

    portfolioData.skillCategories.forEach((group) => {
      group.skills.forEach((skill) => {
        const uniqueKey = skill.name.toLowerCase();
        if (!seen.has(uniqueKey)) {
          seen.add(uniqueKey);
          list.push({
            ...skill,
            category: group.category
          });
        }
      });
    });

    return list;
  }, []);

  // Filtered skills for Grid mode
  const filteredGridSkills = useMemo(() => {
    return allSkillsList.filter((skill) => {
      const matchesCategory = activeCategory === 'ALL' || skill.category === activeCategory;
      const matchesQuery = !searchQuery || 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.usage && skill.usage.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesQuery;
    });
  }, [allSkillsList, activeCategory, searchQuery]);

  // Render individual Skill Card Chip
  const renderSkillCard = (skill, keySuffix = '') => {
    const isHovered = hoveredSkill?.name === skill.name;
    const brandColor = BRAND_COLORS[skill.name.toLowerCase()] || '#00FF66';
    const isMismatchedFilter = activeCategory !== 'ALL' && skill.category && skill.category !== activeCategory;
    const isMatchingSearch = searchQuery && (
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.usage && skill.usage.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
      <div
        key={`${skill.name}-${keySuffix}`}
        onMouseEnter={() => setHoveredSkill(skill)}
        onMouseLeave={() => setHoveredSkill(null)}
        data-cursor="INSPECT"
        className={`relative inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-bg-card border transition-all duration-300 group cursor-pointer flex-shrink-0 select-none ${
          isMismatchedFilter ? 'opacity-30 grayscale' : 'opacity-100'
        } ${isMatchingSearch ? 'ring-2 ring-brand-green ring-offset-2 ring-offset-bg-darkest shadow-glow-md' : ''}`}
        style={{
          borderColor: isHovered ? brandColor : `${brandColor}45`,
          boxShadow: isHovered 
            ? `0 0 28px ${brandColor}60, 0 0 12px ${brandColor}30, inset 0 0 14px ${brandColor}20` 
            : `0 0 12px ${brandColor}12`,
          transform: isHovered ? 'scale(1.08) translateY(-4px)' : 'scale(1)'
        }}
      >
        {/* Subtle sweep light beam on hover */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform" />
        </div>

        {/* Brand Icon (Original Official Vector Image) */}
        <div className="flex items-center justify-center group-hover:rotate-6 group-hover:scale-115 transition-transform duration-300 flex-shrink-0 drop-shadow-md">
          <TechIcon name={skill.name} size={26} className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>

        {/* Skill Name */}
        <span 
          className="font-mono text-xs sm:text-sm font-bold text-text-primary transition-colors whitespace-nowrap"
          style={{
            color: isHovered ? brandColor : undefined
          }}
        >
          {skill.name}
        </span>

        {/* Pulsing Brand Dot */}
        <span 
          className="w-1.5 h-1.5 rounded-full opacity-60 group-hover:opacity-100 group-hover:animate-ping ml-0.5 flex-shrink-0"
          style={{ backgroundColor: brandColor }}
        />

        {/* Tooltip on Hover */}
        {isHovered && skill.usage && (
          <div
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-bg-darkest border text-text-primary text-xs font-mono px-3.5 py-1.5 rounded-xl shadow-2xl whitespace-nowrap z-50 pointer-events-none flex items-center gap-2 animate-fadeIn"
            style={{ borderColor: brandColor }}
          >
            <span 
              className="w-2 h-2 rounded-full animate-ping flex-shrink-0"
              style={{ backgroundColor: brandColor }}
            />
            <span style={{ color: brandColor }} className="font-bold">{skill.name}:</span>
            <span className="text-text-secondary">{skill.usage}</span>
            
            {/* Downward Arrow */}
            <div 
              className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-solid border-t-6 border-x-transparent border-x-6 border-b-0"
              style={{ borderTopColor: brandColor }}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-bg-border">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brand-green uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>[01] TECHNOLOGY ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary font-sans">
              Engineering Stack &amp; Tooling
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <p className="text-sm font-mono text-text-secondary max-w-sm hidden sm:block">
              Hover over any sliding technology to pause and inspect engineering specs.
            </p>
            {/* View Mode Switcher */}
            <div className="flex items-center p-1 bg-bg-card border border-bg-border rounded-xl">
              <button
                onClick={() => setViewMode('SLIDER')}
                title="Sliding Rows Mode"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  viewMode === 'SLIDER' 
                    ? 'bg-brand-green/20 text-brand-green border border-brand-green/40 shadow-glow-sm' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sliding Rows</span>
              </button>
              <button
                onClick={() => setViewMode('GRID')}
                title="Grid / Filter Mode"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  viewMode === 'GRID' 
                    ? 'bg-brand-green/20 text-brand-green border border-brand-green/40 shadow-glow-sm' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">All Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  data-cursor="FILTER"
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-200 border ${
                    isActive
                      ? 'border-brand-green bg-brand-green/15 text-brand-green shadow-glow-sm font-bold'
                      : 'border-bg-border bg-bg-surface/60 text-text-secondary hover:border-brand-green/40 hover:text-text-primary'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technologies..."
              className="w-full pl-10 pr-3.5 py-2 rounded-xl bg-bg-surface/80 border border-bg-border text-xs font-mono text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-green transition-all focus:shadow-glow-sm"
            />
          </div>
        </div>

        {/* MAIN DISPLAY CONTAINER */}
        <div className="p-4 sm:p-6 md:p-8 rounded-3xl bg-bg-card border border-bg-border shadow-2xl relative">
          {/* Top Status Header */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-bg-border/60 text-xs font-mono text-text-secondary relative z-10">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
              <span>Multi-Directional Continuous Stream</span>
              {activeCategory !== 'ALL' && <span> • Filter: <strong className="text-brand-green">{activeCategory}</strong></span>}
            </span>
            <span className="text-text-muted text-[11px] hidden sm:flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-brand-green font-bold">
                <ArrowRight className="w-3.5 h-3.5" /> Row 1 &amp; 3 (Right)
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 text-purple-400 font-bold">
                <ArrowLeft className="w-3.5 h-3.5" /> Row 2 &amp; 4 (Left)
              </span>
            </span>
          </div>

          {/* VIEW MODE 1: ALTERNATING SLIDING ROWS */}
          {viewMode === 'SLIDER' ? (
            <div className="space-y-5 marquee-edge-mask py-2">
              {rowDefinitions.map((row, rowIdx) => {
                const isRight = row.direction === 'right';

                return (
                  <div 
                    key={row.id} 
                    className="relative overflow-hidden marquee-pause-hover group py-1"
                  >
                    {/* Infinite Marquee Stream (Repeated 3 times for seamless endless loop) */}
                    <div className={`${row.speedClass} flex items-center gap-3.5`}>
                      {/* Repeat 1 */}
                      {row.skills.map((skill) => renderSkillCard(skill, `p1-r${rowIdx}`))}
                      {/* Repeat 2 */}
                      {row.skills.map((skill) => renderSkillCard(skill, `p2-r${rowIdx}`))}
                      {/* Repeat 3 */}
                      {row.skills.map((skill) => renderSkillCard(skill, `p3-r${rowIdx}`))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* VIEW MODE 2: GRID FILTER VIEW */
            <motion.div 
              layout 
              className="flex flex-wrap gap-3.5 py-4 min-h-[220px]"
            >
              <AnimatePresence mode="popLayout">
                {filteredGridSkills.map((skill) => renderSkillCard(skill, 'grid'))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* DEDICATED LIVE INSPECT STATUS CONSOLE (Always at bottom) */}
          <div className="mt-8 pt-4 border-t border-bg-border/60 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 overflow-hidden flex-1 mr-4">
              <span className="text-brand-green font-bold flex items-center gap-1.5 flex-shrink-0">
                <Terminal className="w-3.5 h-3.5" />
                $ inspect:
              </span>
              {hoveredSkill ? (
                <span className="text-text-primary animate-fadeIn flex items-center gap-2 truncate">
                  <strong 
                    style={{ color: BRAND_COLORS[hoveredSkill.name.toLowerCase()] || '#00FF66' }}
                  >
                    {hoveredSkill.name}
                  </strong>
                  <span className="text-text-muted">—</span>
                  <span className="text-text-secondary">{hoveredSkill.usage}</span>
                </span>
              ) : (
                <span className="text-text-muted italic">
                  Hover over any sliding technology badge to pause animation &amp; inspect details.
                </span>
              )}
            </div>

            <div className="hidden sm:flex items-center gap-2 text-[11px] text-text-muted flex-shrink-0">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              <span>Active Marquee Stream</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
