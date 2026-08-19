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
  CheckCircle2
} from 'lucide-react';
import { TechIcon } from './TechIcon';
import { portfolioData } from '../../data/portfolioData';

// Brand color palette for vibrant resting and glowing hover states
const BRAND_COLORS = {
  // Languages
  'javascript': '#F7DF1E',
  'js': '#F7DF1E',
  'c++': '#00599C',
  'cpp': '#00599C',
  'java': '#EA2D2E',
  'python': '#3776AB',
  
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
  'github': '#E6EDF3',
  'terraform': '#7B42BC',
  'kubernetes': '#326CE5',
  'eks': '#326CE5',
  'linux': '#FCC624',
  'shell scripting': '#00FF66',
  'cicd': '#00FF66',
  'ci/cd': '#00FF66',

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

  // Quick Featured Brand Strip
  const featuredStack = [
    { name: 'JavaScript', label: 'JavaScript' },
    { name: 'Node.js', label: 'Node.js' },
    { name: 'Express.js', label: 'Express.js' },
    { name: 'Python', label: 'Python' },
    { name: 'MongoDB', label: 'MongoDB' },
    { name: 'MySQL', label: 'MySQL' },
    { name: 'MariaDB', label: 'MariaDB' },
    { name: 'Docker', label: 'Docker' },
    { name: 'AWS', label: 'AWS' },
    { name: 'Git', label: 'Git' },
    { name: 'Linux', label: 'Linux' },
  ];

  const categories = [
    { id: 'ALL', name: 'All Skills', icon: Cpu },
    { id: 'BACKEND', name: 'Backend & APIs', icon: Server },
    { id: 'CLOUD', name: 'Cloud (AWS)', icon: Cloud },
    { id: 'DEVOPS', name: 'DevOps & CI/CD', icon: Terminal },
    { id: 'DATABASES', name: 'Databases', icon: Database },
    { id: 'LANGUAGES', name: 'Languages', icon: Code2 },
    { id: 'SYSTEM DESIGN', name: 'System Design', icon: Layers },
    { id: 'DESIGN', name: 'Design / UX', icon: Palette },
  ];

  // Flatten all skills into a single unified list
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

  // Filter skills based on active filter button and search query
  const filteredSkills = useMemo(() => {
    return allSkillsList.filter((skill) => {
      const matchesCategory = activeCategory === 'ALL' || skill.category === activeCategory;
      const matchesQuery = !searchQuery || 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.usage && skill.usage.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesQuery;
    });
  }, [allSkillsList, activeCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 relative z-10">
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

          <p className="text-sm font-mono text-text-secondary mt-2 md:mt-0 max-w-md">
            Production runtimes, databases, cloud architecture, and DevOps toolchains.
          </p>
        </div>

        {/* TOP FEATURED BRAND STRIP */}
        <div className="mb-10 p-5 rounded-2xl bg-bg-card border border-brand-green/30 shadow-xl relative">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-bg-border text-xs font-mono">
            <span className="flex items-center gap-2 text-brand-green font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-green animate-spin" style={{ animationDuration: '6s' }} />
              CORE TECH STACK
            </span>
            <span className="text-text-muted text-[11px] hidden sm:inline">Production Mastered</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {featuredStack.map((tech, idx) => {
              const brandColor = BRAND_COLORS[tech.name.toLowerCase()] || '#00FF66';

              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.3 }}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -3,
                    boxShadow: `0 0 20px ${brandColor}50, inset 0 0 10px ${brandColor}20`
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#05080D] border transition-colors duration-200 cursor-pointer group"
                  style={{
                    borderColor: `${brandColor}40`
                  }}
                >
                  {/* Subtle sweep light beam on hover */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/12 to-transparent transition-transform" />
                  </div>

                  <div className="flex items-center justify-center group-hover:rotate-6 group-hover:scale-115 transition-transform duration-300">
                    <TechIcon name={tech.name} size={22} className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-text-primary group-hover:text-brand-green transition-colors">
                    {tech.label}
                  </span>
                </motion.div>
              );
            })}
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
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
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
                </motion.button>
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
              placeholder="Filter skills (e.g. Node, AWS, C++)..."
              className="w-full pl-10 pr-3.5 py-2 rounded-xl bg-bg-surface/80 border border-bg-border text-xs font-mono text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-green transition-all focus:shadow-glow-sm"
            />
          </div>
        </div>

        {/* Unified Skills Stream Container */}
        <div className="p-6 sm:p-8 rounded-2xl bg-bg-card border border-bg-border shadow-2xl relative">
          {/* Top Status Header */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-bg-border/60 text-xs font-mono text-text-secondary relative z-10">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
              Showing <strong className="text-brand-green font-bold">{filteredSkills.length}</strong> technologies
              {activeCategory !== 'ALL' && <span> in <span className="text-brand-green font-bold">{activeCategory}</span></span>}
            </span>
            <span className="text-text-muted text-[11px] hidden sm:inline flex items-center gap-1">
              <Zap className="w-3 h-3 text-brand-green" />
              Full Brand Color Badges Active
            </span>
          </div>

          {/* Flex-Wrap Chips Grid with Full Brand Colors */}
          <motion.div 
            layout 
            className="flex flex-wrap gap-3.5 relative z-20 pt-4 pb-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, idx) => {
                const isHovered = hoveredSkill?.name === skill.name;
                const brandColor = BRAND_COLORS[skill.name.toLowerCase()] || '#00FF66';

                return (
                  <motion.div
                    layout
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.75, transition: { duration: 0.15 } }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 25, 
                      delay: Math.min(idx * 0.018, 0.3) 
                    }}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -4,
                      boxShadow: `0 0 24px ${brandColor}55, 0 0 12px ${brandColor}30, inset 0 0 12px ${brandColor}20`,
                      borderColor: brandColor,
                      zIndex: 40
                    }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    data-cursor="INSPECT"
                    className="relative inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#05080D] border transition-all duration-200 group cursor-pointer"
                    style={{
                      borderColor: isHovered ? brandColor : `${brandColor}40`,
                      boxShadow: isHovered 
                        ? `0 0 24px ${brandColor}55` 
                        : `0 0 10px ${brandColor}12`
                    }}
                  >
                    {/* Inner light reflection wave on hover */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/12 to-transparent transition-transform" />
                    </div>

                    {/* Brand Icon (Full Color SVG Badge) */}
                    <div className="flex items-center justify-center group-hover:scale-120 group-hover:rotate-6 transition-transform duration-300 flex-shrink-0 drop-shadow-md">
                      <TechIcon name={skill.name} size={24} className="w-6 h-6" />
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

                    {/* Subtle Pulsing Dot with Brand Color */}
                    <span 
                      className="w-1.5 h-1.5 rounded-full opacity-60 group-hover:opacity-100 group-hover:animate-ping"
                      style={{ backgroundColor: brandColor }}
                    />

                    {/* Highly-Visible Floating Tooltip with Arrow Tip */}
                    {isHovered && skill.usage && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.92 }}
                        transition={{ duration: 0.15 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-[#030609] border text-text-primary text-xs font-mono px-3.5 py-1.5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.9)] whitespace-nowrap z-50 pointer-events-none flex items-center gap-2"
                        style={{ borderColor: brandColor }}
                      >
                        <span 
                          className="w-2 h-2 rounded-full animate-ping flex-shrink-0"
                          style={{ backgroundColor: brandColor }}
                        />
                        <span style={{ color: brandColor }} className="font-bold">{skill.name}:</span>
                        <span className="text-gray-200">{skill.usage}</span>
                        
                        {/* Downward Arrow */}
                        <div 
                          className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-solid border-t-6 border-x-transparent border-x-6 border-b-0"
                          style={{ borderTopColor: brandColor }}
                        />
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Dedicated Live HUD Status Bar at bottom of card */}
          <div className="mt-6 pt-4 border-t border-bg-border/60 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 overflow-hidden">
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
                  Hover over any technology chip to inspect production engineering usage.
                </span>
              )}
            </div>

            <div className="hidden sm:flex items-center gap-2 text-[11px] text-text-muted flex-shrink-0">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              <span>Verified Full-Stack &amp; Cloud Stack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
