import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Layers, 
  ArrowRight,
  Sparkles,
  Activity,
  CheckCircle2
} from 'lucide-react';
import { ArchitectureDiagram } from './ArchitectureDiagram';

export const ProjectCard = ({ project, onSelectCaseStudy }) => {
  const [isHovered, setIsHovered] = useState(false);

  const badgeUpper = (project.badge || '').toUpperCase();
  
  const isMern = badgeUpper.includes('MERN') || badgeUpper.includes('FULL');
  const isFirebase = badgeUpper.includes('FIREBASE');
  const isUiUx = badgeUpper.includes('UI') || badgeUpper.includes('UX');
  const isCloud = badgeUpper.includes('CLOUD') || badgeUpper.includes('AWS');
  const isDevops = badgeUpper.includes('DEVOPS') || badgeUpper.includes('DOCKER') || badgeUpper.includes('CI/CD');
  const isSystem = badgeUpper.includes('SYSTEM') || badgeUpper.includes('ARCH');

  // Accent color per category
  const accentColor = isMern 
    ? '#00FF66' 
    : isFirebase 
    ? '#FFA000' 
    : isUiUx 
    ? '#00F0FF' 
    : isCloud
    ? '#FF9900'
    : isDevops
    ? '#38BDF8'
    : isSystem
    ? '#A855F7'
    : '#00FF66';

  // Badge CSS classes
  const badgeClasses = isMern
    ? 'bg-brand-green/15 text-brand-green border-brand-green/40'
    : isFirebase
    ? 'bg-amber-500/15 text-amber-400 border-amber-500/40'
    : isUiUx
    ? 'bg-cyan-500/15 text-cyan-400 border-cyan-500/40'
    : isCloud
    ? 'bg-orange-500/15 text-orange-400 border-orange-500/40'
    : isDevops
    ? 'bg-sky-500/15 text-sky-400 border-sky-500/40'
    : isSystem
    ? 'bg-purple-500/15 text-purple-400 border-purple-500/40'
    : 'bg-brand-green/15 text-brand-green border-brand-green/40';

  // Card Border & Hover Glow CSS
  const cardBorderClasses = isMern
    ? 'border-brand-green/30 hover:border-brand-green hover:shadow-[0_10px_30px_rgba(0,255,102,0.18)]'
    : isFirebase
    ? 'border-amber-500/30 hover:border-amber-400 hover:shadow-[0_10px_30px_rgba(255,160,0,0.18)]'
    : isUiUx
    ? 'border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_10px_30px_rgba(0,240,255,0.18)]'
    : isCloud
    ? 'border-orange-500/30 hover:border-orange-400 hover:shadow-[0_10px_30px_rgba(255,153,0,0.18)]'
    : isDevops
    ? 'border-sky-500/30 hover:border-sky-400 hover:shadow-[0_10px_30px_rgba(56,189,248,0.18)]'
    : isSystem
    ? 'border-purple-500/30 hover:border-purple-400 hover:shadow-[0_10px_30px_rgba(168,85,247,0.18)]'
    : 'border-brand-green/30 hover:border-brand-green hover:shadow-[0_10px_30px_rgba(0,255,102,0.18)]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full group"
    >
      <div 
        className={`h-full flex flex-col justify-between p-6 rounded-2xl bg-bg-card border transition-all duration-300 relative overflow-hidden ${cardBorderClasses}`}
      >
        {/* Top Animated Laser Beam Line */}
        <div 
          className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, transparent, ${accentColor}, transparent)`
          }}
        />

        {/* Ambient Corner Radial Glow */}
        {/* <div 
          className="absolute top-0 right-0 w-36 h-36 rounded-full blur-2xl pointer-events-none transition-opacity duration-500 opacity-20 group-hover:opacity-60"
          style={{ backgroundColor: accentColor }}
        /> */}

        {/* Top Meta Bar */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded border transition-all ${badgeClasses}`}>
                {project.badge}
              </span>

              {/* Status pulse dot */}
              <span className="flex items-center gap-1 text-[10px] font-mono text-text-muted">
                <span 
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: accentColor }}
                />
                <span className="hidden sm:inline">Active</span>
              </span>
            </div>

            <span className="text-xs font-mono text-text-muted">
              {project.year || '2024'}
            </span>
          </div>

          {/* Project Title with smooth highlight */}
          <h3 
            className="text-xl font-bold font-mono text-text-primary transition-colors mb-2"
            style={{
              color: isHovered ? accentColor : undefined
            }}
          >
            {project.shortTitle || project.title}
          </h3>

          {/* Tagline */}
          <p className="text-xs text-text-secondary leading-relaxed font-sans mb-4 line-clamp-2">
            {project.tagline || project.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies?.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md bg-bg-surface border border-bg-border text-[10px] font-mono text-text-primary transition-colors"
                style={{
                  borderColor: isHovered ? `${accentColor}30` : undefined
                }}
              >
                {tech}
              </span>
            ))}
            {project.technologies?.length > 5 && (
              <span className="px-1.5 py-0.5 rounded-md bg-bg-surface border border-bg-border text-[10px] font-mono text-text-muted">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Embedded Architecture Flow Diagram */}
          <ArchitectureDiagram nodes={project.architectureNodes} />
        </div>

        {/* Action Buttons Row */}
        <div className="pt-4 mt-2 border-t border-bg-border/70 flex items-center justify-between gap-2 font-mono text-xs">
          <button
            onClick={() => onSelectCaseStudy(project)}
            data-cursor="CASE STUDY"
            className="flex items-center gap-1.5 font-bold py-1 transition-all group/btn"
            style={{
              color: accentColor
            }}
          >
            <span className="group-hover/btn:underline">&gt; Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </button>

          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="GITHUB"
                className="p-2 rounded-lg bg-bg-surface border border-bg-border hover:text-text-primary text-text-secondary transition-all hover:scale-105"
                style={{
                  borderColor: isHovered ? `${accentColor}50` : undefined,
                  color: isHovered ? accentColor : undefined
                }}
                title="View GitHub Repository"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                data-cursor="DEMO"
                className="p-2 rounded-lg bg-bg-surface border border-bg-border hover:text-text-primary text-text-secondary transition-all hover:scale-105"
                style={{
                  borderColor: isHovered ? `${accentColor}50` : undefined,
                  color: isHovered ? accentColor : undefined
                }}
                title="Live Demo / Repository Link"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
