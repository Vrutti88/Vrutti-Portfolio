import React, { useEffect, useState, useRef } from 'react';
import { FolderGit2, Code, Cpu, Activity, Infinity as InfinityIcon } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const LiveStatsStrip = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      id: 'projects',
      num: 4,
      display: '04+',
      label: 'Projects Completed',
      icon: FolderGit2,
      accent: 'green'
    },
    {
      id: 'apis',
      num: 20,
      display: '20+',
      label: 'APIs / Backend Features',
      icon: Code,
      accent: 'green'
    },
    {
      id: 'technologies',
      num: 8,
      display: '08+',
      label: 'Technologies Arsenal',
      icon: Cpu,
      accent: 'purple'
    },
    {
      id: 'uptime',
      num: 99.9,
      display: '99.9%',
      label: 'System Mindset',
      icon: Activity,
      accent: 'cyan'
    },
    {
      id: 'learning',
      num: null,
      display: '∞',
      label: 'Learning Every Day',
      icon: InfinityIcon,
      accent: 'green'
    }
  ];

  return (
    <section ref={sectionRef} className="py-8 relative z-10 border-y border-bg-border bg-bg-primary/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 items-center">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const isPurple = stat.accent === 'purple';
            const isCyan = stat.accent === 'cyan';

            return (
              <div
                key={stat.id}
                className="flex flex-col items-center text-center p-3 rounded-lg hover:bg-bg-surface/50 transition-colors group relative"
              >
                {/* Icon Header */}
                <div className={`p-2 rounded-lg mb-2 ${
                  isPurple 
                    ? 'bg-brand-purple/10 text-brand-purple' 
                    : isCyan 
                    ? 'bg-brand-cyan/10 text-brand-cyan' 
                    : 'bg-brand-green/10 text-brand-green'
                }`}>
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </div>

                {/* Animated Metric Number */}
                <div className={`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight mb-1 ${
                  isPurple 
                    ? 'text-brand-purple' 
                    : isCyan 
                    ? 'text-brand-cyan' 
                    : 'text-brand-green-bright'
                }`}>
                  {stat.display}
                </div>

                {/* Subtitle */}
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-text-secondary">
                  {stat.label}
                </span>

                {/* Neon Separator Indicator for Desktop */}
                {idx < stats.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-bg-border" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
