import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, ArrowRight, Activity, Terminal } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const EngineeringJourney = () => {
  return (
    <section id="journey" className="py-20 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-bg-border">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brand-green uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>[05] ENGINEERING CHRONOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary font-sans">
              Engineering Journey &amp; Milestones
            </h2>
          </div>

          <p className="text-sm font-mono text-text-secondary mt-2 md:mt-0 max-w-md">
            Continuous technical evolution through algorithmic foundations, CSE coursework, and cloud systems engineering.
          </p>
        </div>

        {/* HORIZONTAL TIMELINE TRACK (DESKTOP & TABLET) */}
        <div className="hidden md:block relative mb-8 px-8">
          {/* Background Connecting Rail */}
          <div className="absolute left-12 right-12 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-brand-green/30 via-brand-green/60 to-brand-green/80">
            {/* Animated Laser Pulse traveling horizontally across timeline */}
            <motion.div
              animate={{
                left: ['0%', '100%'],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-brand-green to-white rounded-full shadow-[0_0_12px_#00FF66]"
            />
          </div>

          {/* Timeline Step Nodes */}
          <div className="relative flex justify-between items-center z-10">
            {portfolioData.journey.map((item, idx) => {
              const isLast = idx === portfolioData.journey.length - 1;
              return (
                <div key={item.phase} className="flex flex-col items-center">
                  <div
                    className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 bg-bg-darkest font-mono text-xs font-bold transition-all duration-300 ${
                      isLast
                        ? 'border-brand-green text-brand-green shadow-[0_0_15px_rgba(0,255,102,0.6)]'
                        : 'border-brand-green/50 text-text-secondary'
                    }`}
                  >
                    {isLast && (
                      <span className="absolute inset-0 rounded-full bg-brand-green/30 animate-ping" />
                    )}
                    <span>0{idx + 1}</span>
                  </div>
                  <span className="mt-2 text-[10px] font-mono text-text-muted uppercase tracking-wider">
                    {item.phase}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3 HORIZONTAL JOURNEY CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.journey.map((milestone, idx) => {
            const isCurrent = milestone.isCurrent;

            return (
              <motion.div
                key={milestone.phase}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.12 }}
                whileHover={{ 
                  y: -6,
                  boxShadow: isCurrent 
                    ? '0 0 30px rgba(0,255,102,0.2), 0 0 10px rgba(0,255,102,0.1)' 
                    : '0 0 25px rgba(0,0,0,0.8), 0 0 15px rgba(0,255,102,0.1)'
                }}
                className={`p-6 sm:p-7 rounded-3xl bg-bg-card border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                  isCurrent
                    ? 'border-brand-green/50 shadow-[0_0_20px_rgba(0,255,102,0.08)]'
                    : 'border-bg-border hover:border-brand-green/40'
                }`}
              >
                {/* Sweep Light Beam on Hover */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform" />
                </div>

                <div>
                  {/* Top Badge & Year Header */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="px-3 py-1 rounded-xl bg-bg-surface border border-bg-border font-mono text-xs text-brand-green font-bold">
                      {milestone.phase}
                    </span>
                    <span className="font-mono text-xs text-text-muted">
                      {milestone.year}
                    </span>
                  </div>

                  {/* Milestone Title */}
                  <h3 className="text-lg font-bold font-mono text-text-primary group-hover:text-brand-green transition-colors mb-3 leading-snug">
                    {milestone.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans mb-6">
                    {milestone.description}
                  </p>
                </div>

                {/* Bottom Status Footer */}
                <div className="pt-4 border-t border-bg-border/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-brand-green font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-green" />
                    <span>{milestone.badge}</span>
                  </span>
                  <span className="text-text-muted text-[11px]">
                    Verified Milestone
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
