import React from 'react';
import { Briefcase, Milestone, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const EngineeringJourney = () => {
  return (
    <section id="journey" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-bg-border">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brand-green uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              <span>[05] ENGINEERING JOURNEY &amp; MILESTONES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary font-sans">
              Learning &amp; Building Path
            </h2>
          </div>

          <p className="text-sm font-mono text-text-secondary mt-2 md:mt-0 max-w-md">
            Continuous technical evolution through rigorous coursework, project development, and cloud systems exploration.
          </p>
        </div>

        {/* Journey Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.journey.map((milestone, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-bg-card border border-bg-border hover:border-brand-green/40 hover:shadow-glow-sm transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Year */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded bg-bg-surface border border-bg-border font-mono text-[10px] text-brand-green font-bold">
                    {milestone.phase}
                  </span>
                  <span className="font-mono text-xs text-text-muted">
                    {milestone.year}
                  </span>
                </div>

                <h3 className="text-base font-bold font-mono text-text-primary group-hover:text-brand-green transition-colors mb-3">
                  {milestone.title}
                </h3>

                <p className="text-xs text-text-secondary leading-relaxed font-sans mb-4">
                  {milestone.description}
                </p>
              </div>

              {/* Status Badge */}
              <div className="pt-4 border-t border-bg-border/60 flex items-center justify-between text-[11px] font-mono">
                <span className="text-brand-green font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{milestone.badge}</span>
                </span>
                <span className="text-text-muted text-[10px]">Verified Milestone</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
