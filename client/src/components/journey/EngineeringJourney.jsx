import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Code2, 
  Server, 
  Rocket, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Sparkles,
  ArrowRight,
  Zap,
  Terminal,
  Activity,
  Layers
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const EngineeringJourney = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Icon mapping for each timeline milestone
  const getMilestoneIcon = (idx) => {
    switch (idx) {
      case 0: return GraduationCap;
      case 1: return Code2;
      case 2: return Server;
      case 3: return Rocket;
      default: return Zap;
    }
  };

  return (
    <section id="journey" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-4 border-b border-bg-border">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brand-green uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>[05] ENGINEERING CHRONOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary font-sans">
              Learning &amp; Building Journey
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-mono text-text-secondary">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-bg-card border border-brand-green/30 text-brand-green font-bold">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>Active Timeline Pipeline</span>
            </span>
          </div>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          {/* Central Vertical Glowing Conduit Spine (Desktop: Center, Mobile: Left) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 bg-gradient-to-b from-brand-green/80 via-purple-500/60 to-brand-green/20 rounded-full shadow-[0_0_15px_rgba(0,255,102,0.4)]">
            {/* Animated Laser Light Beam travelling down the timeline wire */}
            <motion.div
              animate={{
                top: ['0%', '100%'],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute left-1/2 -translate-x-1/2 w-2 h-16 bg-gradient-to-b from-transparent via-white to-brand-green rounded-full shadow-[0_0_20px_#00FF66]"
            />
          </div>

          {/* Timeline Milestones Stack */}
          <div className="space-y-12 md:space-y-16 relative z-10">
            {portfolioData.journey.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              const isHovered = hoveredIdx === idx;
              const Icon = getMilestoneIcon(idx);
              const isCurrent = milestone.isCurrent;

              return (
                <motion.div
                  key={milestone.phase}
                  initial={{ opacity: 0, y: 35, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-6 md:gap-12 pl-14 md:pl-0`}
                >
                  {/* CENTRAL / SIDE TIMELINE NODE MARKER */}
                  <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 -translate-y-1/2 z-20">
                    <motion.div
                      whileHover={{ scale: 1.25, rotate: 12 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className={`relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-2xl border-2 transition-all duration-300 shadow-xl cursor-pointer ${
                        isCurrent
                          ? 'bg-bg-darkest border-brand-green shadow-[0_0_25px_rgba(0,255,102,0.6)] text-brand-green'
                          : isHovered
                          ? 'bg-bg-darkest border-brand-green shadow-glow-md text-brand-green'
                          : 'bg-bg-card border-bg-border hover:border-brand-green/60 text-text-secondary'
                      }`}
                    >
                      {/* Pulsing Radar Ring for Current Active Phase */}
                      {isCurrent && (
                        <>
                          <span className="absolute inset-0 rounded-2xl bg-brand-green/30 animate-ping" />
                          <span className="absolute -inset-1.5 rounded-2xl border border-brand-green/50 animate-pulse" />
                        </>
                      )}

                      <Icon className="w-5 h-5 relative z-10" />
                    </motion.div>
                  </div>

                  {/* TIMELINE CONTENT CARD */}
                  <div className="w-full md:w-[calc(50%-3rem)]">
                    <motion.div
                      whileHover={{ 
                        y: -5,
                        boxShadow: isCurrent 
                          ? '0 0 35px rgba(0,255,102,0.25), 0 0 15px rgba(0,255,102,0.15)' 
                          : '0 0 30px rgba(0,0,0,0.8), 0 0 15px rgba(0,255,102,0.1)'
                      }}
                      className={`p-6 sm:p-7 rounded-3xl bg-[#05080D] border transition-all duration-300 relative group overflow-hidden ${
                        isCurrent
                          ? 'border-brand-green/60 shadow-[0_0_25px_rgba(0,255,102,0.12)]'
                          : 'border-bg-border hover:border-brand-green/40 shadow-xl'
                      }`}
                    >
                      {/* Sweep Light Beam Wave on Card Hover */}
                      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform" />
                      </div>

                      {/* Top Metadata Strip */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-bg-border/60 text-xs font-mono">
                        {/* Phase Badge & Status */}
                        <div className="flex items-center gap-2">
                          <span className={`px-2.5 py-1 rounded-xl font-bold text-[11px] border ${
                            isCurrent
                              ? 'bg-brand-green/20 text-brand-green border-brand-green/40 shadow-glow-sm'
                              : 'bg-bg-surface text-brand-green border-bg-border'
                          }`}>
                            {milestone.phase}
                          </span>
                          <span className="text-[10px] text-text-muted uppercase tracking-wider">
                            {milestone.status}
                          </span>
                        </div>

                        {/* Year Range */}
                        <div className="flex items-center gap-1.5 text-text-secondary text-[11px]">
                          <Calendar className="w-3.5 h-3.5 text-brand-green" />
                          <span>{milestone.year}</span>
                        </div>
                      </div>

                      {/* Title & Institution */}
                      <div className="mb-3">
                        <h3 className="text-lg sm:text-xl font-bold font-sans text-text-primary group-hover:text-brand-green transition-colors leading-snug">
                          {milestone.title}
                        </h3>

                        {milestone.institution && (
                          <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted mt-1">
                            <MapPin className="w-3 h-3 text-purple-400" />
                            <span>{milestone.institution}</span>
                          </div>
                        )}
                      </div>

                      {/* Detailed Description */}
                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans mb-5">
                        {milestone.description}
                      </p>

                      {/* Key Tech & Skills Chips for this Milestone */}
                      {milestone.tags && (
                        <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-bg-border/40">
                          {milestone.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-lg bg-bg-surface/80 border border-bg-border text-[10px] font-mono text-text-secondary group-hover:border-brand-green/30 group-hover:text-text-primary transition-colors"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Milestone Footer Badge */}
                      <div className="mt-4 pt-3 flex items-center justify-between text-[11px] font-mono text-text-muted">
                        <span className="inline-flex items-center gap-1.5 text-brand-green font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{milestone.badge}</span>
                        </span>
                        <span className="text-[10px]">
                          {isCurrent ? '⚡ Active Phase' : 'Verified Milestone'}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for Desktop Alternating Grid alignment */}
                  <div className="hidden md:block w-[calc(50%-3rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM HUD PROGRESS SUMMARY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-6 sm:p-7 rounded-3xl bg-bg-card border border-brand-green/30 shadow-2xl font-mono text-xs"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-2xl bg-brand-green/10 border border-brand-green/40 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-brand-green animate-spin" style={{ animationDuration: '8s' }} />
              </div>
              <div>
                <div className="font-bold text-text-primary text-sm font-sans flex items-center gap-2">
                  Continuous Engineering Velocity
                  <span className="px-2 py-0.5 rounded bg-brand-green/20 text-brand-green text-[10px] font-mono">
                    9.45 CGPA
                  </span>
                </div>
                <div className="text-text-secondary text-xs mt-0.5">
                  Blending foundational algorithmic discipline with rapid modern full-stack deployment.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-shrink-0 text-text-muted text-[11px]">
              <div className="text-center sm:text-right">
                <div className="text-brand-green font-bold text-base">4 Phases</div>
                <div>Chronology Tracked</div>
              </div>
              <div className="w-px h-8 bg-bg-border" />
              <div className="text-center sm:text-right">
                <div className="text-purple-400 font-bold text-base">100%</div>
                <div>Milestone Success</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
