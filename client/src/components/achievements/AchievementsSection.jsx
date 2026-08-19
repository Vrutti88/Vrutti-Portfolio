import React from 'react';
import { Trophy, Award, CheckCircle, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-bg-border">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brand-green uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              <span>[06] RECOGNITION &amp; CREDENTIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary font-sans">
              Achievements &amp; Certifications
            </h2>
          </div>

          <p className="text-sm font-mono text-text-secondary mt-2 md:mt-0 max-w-md">
            Verified academic excellence, project portfolio validations, and ongoing technical certifications.
          </p>
        </div>

        {/* Master Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Achievements Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-mono font-bold text-brand-green pb-2 border-b border-bg-border">
              <Trophy className="w-4 h-4" />
              <span>Academic &amp; Technical Achievements</span>
            </div>

            <div className="space-y-4">
              {portfolioData.achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-bg-card border border-bg-border hover:border-brand-green/40 transition-colors space-y-3 group"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-brand-green/15 text-brand-green border border-brand-green/30 text-[10px] font-mono font-bold">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-text-muted">{item.date}</span>
                  </div>

                  <h3 className="text-base font-bold font-mono text-text-primary group-hover:text-brand-green transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs font-mono text-brand-purple">
                    Issuer: {item.issuer}
                  </div>

                  <p className="text-xs text-text-secondary leading-relaxed font-sans pt-1 border-t border-bg-border/60">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Learning Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-mono font-bold text-brand-purple pb-2 border-b border-bg-border">
              <Award className="w-4 h-4" />
              <span>Verified Portfolios &amp; Certifications</span>
            </div>

            <div className="space-y-4">
              {portfolioData.certifications.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-bg-card border border-bg-border hover:border-brand-purple/40 transition-colors space-y-3 group"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold border ${
                      item.badge === 'VERIFIED'
                        ? 'bg-brand-green/15 text-brand-green border-brand-green/30'
                        : 'bg-brand-purple/15 text-brand-purple border-brand-purple/30'
                    }`}>
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-text-muted">{item.date}</span>
                  </div>

                  <h3 className="text-base font-bold font-mono text-text-primary group-hover:text-brand-purple transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs font-mono text-brand-cyan">
                    Scope: {item.issuer}
                  </div>

                  <p className="text-xs text-text-secondary leading-relaxed font-sans pt-1 border-t border-bg-border/60">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
