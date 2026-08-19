import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  GitBranch, 
  GitCommit, 
  Users, 
  FolderGit2, 
  ExternalLink, 
  Terminal, 
  CheckCircle2,
  Code2,
  Activity,
  GitFork,
  Flame,
  Zap,
  Copy,
  Check,
  Sparkles,
  Layers,
  Cloud,
  Brain,
  Target,
  Rocket
} from 'lucide-react';
import { useGitHubData } from '../../hooks/useGitHubData';

export const GitHubDashboard = () => {
  const { profile, repos, commits, username } = useGitHubData();
  const [hoveredCell, setHoveredCell] = useState(null);

  // Month labels across 36 columns
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const dayLabels = ['MON', '', 'WED', '', 'FRI', '', ''];

  // Generate 36-week contribution matrix (36 cols x 7 rows)
  const contributionMatrix = useMemo(() => {
    const matrix = [];
    const baseDate = new Date(2026, 7, 19); // Aug 19, 2026
    
    for (let w = 0; w < 36; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        const dayOffset = (35 - w) * 7 + (6 - d);
        const cellDate = new Date(baseDate);
        cellDate.setDate(baseDate.getDate() - dayOffset);
        
        const seed = (w * 17 + d * 23 + 11) % 100;
        let level = 0;
        let count = 0;
        let apiChanges = 0;
        let featureUpdates = 0;
        let docUpdates = 0;

        if (seed > 85) {
          level = 4;
          count = 7 + (seed % 6);
          apiChanges = 3;
          featureUpdates = Math.floor(count / 2) - 1;
          docUpdates = count - apiChanges - featureUpdates;
        } else if (seed > 65) {
          level = 3;
          count = 4 + (seed % 3);
          apiChanges = 2;
          featureUpdates = 2;
          docUpdates = count - 4;
        } else if (seed > 42) {
          level = 2;
          count = 2 + (seed % 2);
          apiChanges = 1;
          featureUpdates = 1;
          docUpdates = count - 2;
        } else if (seed > 20) {
          level = 1;
          count = 1;
          apiChanges = 1;
          featureUpdates = 0;
          docUpdates = 0;
        }

        days.push({
          level,
          count,
          apiChanges,
          featureUpdates,
          docUpdates,
          dateStr: cellDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase(),
          colIdx: w,
          rowIdx: d
        });
      }
      matrix.push(days);
    }
    return matrix;
  }, []);

  // Total calculated contributions
  const totalCommitsCount = useMemo(() => {
    return contributionMatrix.reduce((acc, week) => 
      acc + week.reduce((dAcc, day) => dAcc + day.count, 0)
    , 0) + 65;
  }, [contributionMatrix]);

  // Purple / Violet palette matching the screenshot
  const getPurpleCellClass = (level) => {
    switch (level) {
      case 4: return 'bg-[#A855F7] border-[#C084FC] shadow-[0_0_10px_rgba(168,85,247,0.8)]';
      case 3: return 'bg-[#7C3AED] border-[#9333EA] shadow-[0_0_6px_rgba(124,58,237,0.6)]';
      case 2: return 'bg-[#4C1D95] border-[#6B21A8]';
      case 1: return 'bg-[#2E1065]/90 border-[#3B0764]';
      default: return 'bg-[#0E121B] border-[#1E293B]/60 hover:border-purple-500/50';
    }
  };

  // Language Breakdown Data
  const languageStats = [
    { name: 'JavaScript', percent: 57, color: '#A855F7', iconBg: '#F7DF1E', iconText: 'JS' },
    { name: 'Python', percent: 22, color: '#7C3AED', iconBg: '#3776AB', iconText: 'Py' },
    { name: 'Java', percent: 12, color: '#6D28D9', iconBg: '#EA2D2E', iconText: '☕' },
    { name: 'Other', percent: 9, color: '#581C87', iconBg: '#00599C', iconText: '</>' }
  ];

  return (
    <section id="github" className="py-20 relative z-10 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Terminal Command Header */}
        <div className="mb-6 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-text-primary">
            <span className="text-brand-green font-bold">$</span>
            <span className="text-brand-green">git</span>
            <span className="text-text-secondary">activity</span>
            <span className="text-purple-400">--year=2026</span>
          </div>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs text-text-muted hover:text-brand-green transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>@{username}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Master 2-Column Grid matching the screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* ================= LEFT COLUMN: ACTIVITY HEATMAP & STATS ================= */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Main Heatmap Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#04070D] border border-[#1E293B] shadow-2xl relative">
              
              {/* Header inside Card */}
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-purple-400 tracking-wider">
                    ENGINEERING ACTIVITY
                  </h3>
                  <p className="text-xs text-text-muted mt-0.5">
                    // Every square represents a step forward.
                  </p>
                </div>

                <span className="text-base font-bold text-purple-400">
                  2026
                </span>
              </div>

              {/* Month Header Timeline */}
              <div className="overflow-x-auto pt-6 pb-2">
                <div className="flex justify-between min-w-[620px] text-[10px] text-text-muted mb-2.5 pl-9 pr-1">
                  {months.map((m, i) => (
                    <span key={i} className="font-semibold text-text-secondary">{m}</span>
                  ))}
                </div>

                {/* Contribution Grid Container */}
                <div className="flex gap-2 min-w-[620px]">
                  {/* Day of Week Labels */}
                  <div className="flex flex-col justify-between text-[9px] text-text-muted font-mono pr-1 select-none">
                    {dayLabels.map((day, i) => (
                      <span key={i} className="h-3 flex items-center font-bold text-text-secondary">{day}</span>
                    ))}
                  </div>

                  {/* 36 Week Columns */}
                  <div className="flex gap-1.5 flex-1 relative">
                    {contributionMatrix.map((week, wIdx) => (
                      <div key={wIdx} className="flex flex-col gap-1.5 flex-1">
                        {week.map((cell, dIdx) => {
                          const isHovered = hoveredCell === cell;

                          return (
                            <div
                              key={dIdx}
                              onMouseEnter={() => setHoveredCell(cell)}
                              onMouseLeave={() => setHoveredCell(null)}
                              className={`w-full aspect-square rounded-[3px] border transition-all duration-200 cursor-pointer relative ${getPurpleCellClass(cell.level)} ${
                                isHovered ? 'scale-135 z-30 ring-2 ring-white border-white shadow-[0_0_15px_#A855F7]' : ''
                              }`}
                            >
                              {/* Hover Tooltip matching exact screenshot layout */}
                              {isHovered && (
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 p-3 rounded-xl bg-[#090D16] border border-[#334155] text-xs font-mono text-text-primary shadow-[0_12px_30px_rgba(0,0,0,0.95)] z-50 pointer-events-none animate-fadeIn space-y-1.5">
                                  <div className="text-[11px] font-bold text-text-primary">
                                    {cell.dateStr}
                                  </div>
                                  <div className="text-[10px] text-text-secondary">
                                    {cell.count} {cell.count === 1 ? 'contribution' : 'contributions'}
                                  </div>

                                  {cell.count > 0 && (
                                    <div className="pt-1.5 border-t border-bg-border/60 space-y-1 text-[10px]">
                                      {cell.apiChanges > 0 && (
                                        <div className="flex items-center gap-1.5 text-text-secondary">
                                          <span className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0" />
                                          <span>{cell.apiChanges} API changes</span>
                                        </div>
                                      )}
                                      {cell.featureUpdates > 0 && (
                                        <div className="flex items-center gap-1.5 text-text-secondary">
                                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                                          <span>{cell.featureUpdates} Feature updates</span>
                                        </div>
                                      )}
                                      {cell.docUpdates > 0 && (
                                        <div className="flex items-center gap-1.5 text-text-secondary">
                                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                                          <span>{cell.docUpdates} Documentation</span>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                  
                                  {/* Downward Pointer */}
                                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-solid border-t-5 border-x-transparent border-x-5 border-b-0 border-t-[#334155]" />
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Heatmap Legend */}
              <div className="mt-6 flex items-center gap-2 text-[10px] text-text-muted">
                <span>Less</span>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-[3px] bg-[#0E121B] border border-[#1E293B]" />
                  <div className="w-3 h-3 rounded-[3px] bg-[#2E1065] border border-[#3B0764]" />
                  <div className="w-3 h-3 rounded-[3px] bg-[#4C1D95] border-[#6B21A8]" />
                  <div className="w-3 h-3 rounded-[3px] bg-[#7C3AED] border-[#9333EA]" />
                  <div className="w-3 h-3 rounded-[3px] bg-[#A855F7] border-[#C084FC]" />
                </div>
                <span>More</span>
              </div>
            </div>

            {/* Bottom 2 Cards Grid matching screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Contributions */}
              <div className="p-5 rounded-2xl bg-[#04070D] border border-[#1E293B] flex items-center gap-4 group hover:border-purple-500/40 transition-all">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-text-primary">
                    247
                  </div>
                  <div className="text-xs text-text-secondary">
                    Contributions
                  </div>
                </div>
              </div>

              {/* Card 2: Repositories */}
              <div className="p-5 rounded-2xl bg-[#04070D] border border-[#1E293B] flex items-center gap-4 group hover:border-brand-green/40 transition-all">
                <div className="p-3 rounded-xl bg-brand-green/10 border border-brand-green/30 text-brand-green flex items-center justify-center">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-text-primary">
                    {profile?.public_repos || 18}
                  </div>
                  <div className="text-xs text-text-secondary">
                    Repositories
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: SYSTEM OVERVIEW & BREAKDOWN ================= */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Card 1: SYSTEM OVERVIEW */}
            <div className="p-6 rounded-2xl bg-[#04070D] border border-[#1E293B] shadow-xl">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1E293B]">
                <h3 className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                  SYSTEM OVERVIEW
                </h3>
                <span className="flex items-center gap-1.5 text-brand-green text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                  ACTIVE
                </span>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-text-muted flex items-center gap-2">
                    <Target className="w-3.5 h-3.5 text-purple-400" />
                    Focus
                  </span>
                  <span className="text-brand-green font-semibold">
                    Backend / APIs
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-text-muted flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5 text-purple-400" />
                    Stack
                  </span>
                  <span className="text-brand-green font-semibold">
                    JS / Node / Python
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-text-muted flex items-center gap-2">
                    <Cloud className="w-3.5 h-3.5 text-purple-400" />
                    Infra
                  </span>
                  <span className="text-brand-green font-semibold">
                    AWS / Docker / K8s
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-text-muted flex items-center gap-2">
                    <Brain className="w-3.5 h-3.5 text-purple-400" />
                    Mindset
                  </span>
                  <span className="text-brand-green font-semibold">
                    Build. Learn. Secure.
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: LANGUAGE BREAKDOWN */}
            <div className="p-6 rounded-2xl bg-[#04070D] border border-[#1E293B] shadow-xl">
              <div className="pb-3 mb-4 border-b border-[#1E293B]">
                <h3 className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                  LANGUAGE BREAKDOWN
                </h3>
              </div>

              <div className="space-y-3">
                {languageStats.map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-xs gap-3">
                    <div className="flex items-center gap-2 w-28">
                      <span className="w-4 h-4 rounded bg-bg-surface flex items-center justify-center text-[9px] font-bold text-yellow-400">
                        {item.iconText}
                      </span>
                      <span className="text-text-primary font-semibold truncate">
                        {item.name}
                      </span>
                    </div>

                    <span className="text-text-secondary text-[11px] w-8 text-right">
                      {item.percent}%
                    </span>

                    {/* Purple Horizontal Progress Bar */}
                    <div className="flex-1 h-2 rounded-full bg-[#0E121B] overflow-hidden border border-[#1E293B]">
                      <div
                        className="h-full rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.7)]"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: CURRENTLY BUILDING */}
            <div className="p-6 rounded-2xl bg-[#04070D] border border-[#1E293B] shadow-xl">
              <div className="pb-2 mb-3 border-b border-[#1E293B] flex items-center justify-between">
                <h3 className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                  CURRENTLY BUILDING
                </h3>
                <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" style={{ animationDuration: '8s' }} />
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <div className="flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-brand-green" />
                  <span className="font-bold text-text-primary">LinguaHub &amp; HomeConnect</span>
                </div>
                <span className="text-brand-green text-[10px] font-bold">Production v2.0</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
