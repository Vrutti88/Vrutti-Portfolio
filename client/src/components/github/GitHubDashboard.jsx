import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  GitBranch, 
  FolderGit2, 
  ExternalLink, 
  Terminal, 
  CheckCircle2,
  Code2,
  Users,
  Flame,
  Zap,
  Copy,
  Check,
  Sparkles,
  Radio
} from 'lucide-react';
import { useGitHubData } from '../../hooks/useGitHubData';

export const GitHubDashboard = () => {
  const { profile, repos, commits, username } = useGitHubData();
  const [activeTab, setActiveTab] = useState('LOG'); // 'LOG' | 'STATUS'
  const [selectedLanguage, setSelectedLanguage] = useState('ALL');
  const [hoveredCell, setHoveredCell] = useState(null);
  const [copiedRepo, setCopiedRepo] = useState(null);
  const [animMode, setAnimMode] = useState('IDLE'); // 'IDLE' | 'WAVE' | 'SCAN' | 'RAIN'
  const [scannerCol, setScannerCol] = useState(0);

  // Month labels across 30 columns for clean side-by-side fit
  const months = ['FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const dayLabels = ['MON', '', 'WED', '', 'FRI', '', ''];

  // Generate 30-week contribution matrix (30 cols x 7 rows)
  const contributionMatrix = useMemo(() => {
    const matrix = [];
    const baseDate = new Date(2026, 7, 19); // Aug 19, 2026
    
    for (let w = 0; w < 30; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        const dayOffset = (29 - w) * 7 + (6 - d);
        const cellDate = new Date(baseDate);
        cellDate.setDate(baseDate.getDate() - dayOffset);
        
        const seed = (w * 19 + d * 29 + 13) % 100;
        let level = 0;
        let count = 0;
        let apiChanges = 0;
        let featureUpdates = 0;
        let docUpdates = 0;

        if (seed > 84) {
          level = 4;
          count = 7 + (seed % 6);
          apiChanges = 3;
          featureUpdates = Math.floor(count / 2) - 1;
          docUpdates = count - apiChanges - featureUpdates;
        } else if (seed > 62) {
          level = 3;
          count = 4 + (seed % 3);
          apiChanges = 2;
          featureUpdates = 2;
          docUpdates = count - 4;
        } else if (seed > 40) {
          level = 2;
          count = 2 + (seed % 2);
          apiChanges = 1;
          featureUpdates = 1;
          docUpdates = count - 2;
        } else if (seed > 18) {
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
          dayName: cellDate.toLocaleDateString('en-US', { weekday: 'short' }),
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
    , 0) + 80;
  }, [contributionMatrix]);

  // Scanner animation ticker when SCAN mode is active
  useEffect(() => {
    if (animMode !== 'SCAN') return;
    const interval = setInterval(() => {
      setScannerCol((prev) => (prev + 1) % 30);
    }, 85);
    return () => clearInterval(interval);
  }, [animMode]);

  // Authentic GitHub Brand Green palette with live FX states
  const getGreenCellClass = (cell) => {
    const { level, colIdx, rowIdx } = cell;

    // Laser Scanner Mode
    if (animMode === 'SCAN') {
      const distance = Math.abs(colIdx - scannerCol);
      if (distance === 0) return 'bg-[#39D353] border-[#00FF66] shadow-[0_0_18px_#00FF66] scale-125 z-20';
      if (distance === 1) return 'bg-[#26A641] border-[#39D353] shadow-[0_0_10px_#26A641]';
      if (distance === 2) return 'bg-[#006D32] border-[#26A641]';
    }

    // Matrix Rain Mode
    if (animMode === 'RAIN') {
      const isRainDrop = (colIdx * 3 + rowIdx * 7) % 11 === (Math.floor(Date.now() / 200) % 11);
      if (isRainDrop) return 'bg-[#39D353] border-[#00FF66] shadow-[0_0_16px_#00FF66] scale-125 z-20';
    }

    // Default resting states
    switch (level) {
      case 4: return 'bg-[#39D353] border-[#00FF66] shadow-[0_0_12px_#00FF66] animate-pulse';
      case 3: return 'bg-[#26A641] border-[#39D353] shadow-[0_0_8px_rgba(57,211,83,0.6)]';
      case 2: return 'bg-[#006D32] border-[#26A641] shadow-[0_0_4px_rgba(0,109,50,0.4)]';
      case 1: return 'bg-[#0E4429] border-[#006D32]';
      default: return 'bg-bg-surface border-bg-border hover:border-brand-green/50';
    }
  };

  // Trigger Wave Ripple Pulse
  const handleTriggerWave = () => {
    setAnimMode('WAVE');
    setTimeout(() => setAnimMode('IDLE'), 2400);
  };

  const getLanguageColor = (lang) => {
    switch (lang?.toLowerCase()) {
      case 'javascript': return '#F7DF1E';
      case 'typescript': return '#3178C6';
      case 'python': return '#3776AB';
      case 'c++': return '#00599C';
      case 'java': return '#EA2D2E';
      case 'html': return '#E34F26';
      case 'css': return '#1572B6';
      default: return '#00FF66';
    }
  };

  // Language Breakdown Data (GitHub Green theme)
  const languageStats = [
    { name: 'JavaScript', percent: 57, iconBg: '#F7DF1E', iconText: 'JS' },
    { name: 'Python', percent: 22, iconBg: '#3776AB', iconText: 'Py' },
    { name: 'Java', percent: 12, iconBg: '#EA2D2E', iconText: '☕' },
    { name: 'Other', percent: 9, iconBg: '#00599C', iconText: '</>' }
  ];

  // Copy Repo Clone Command
  const handleCopyClone = (repoName, cloneUrl) => {
    navigator.clipboard.writeText(`git clone ${cloneUrl}.git`);
    setCopiedRepo(repoName);
    setTimeout(() => setCopiedRepo(null), 2000);
  };

  // Fallback commits if API rate limit applies
  const displayCommits = commits && commits.length > 0 ? commits : [
    { hash: '28917ba', msg: 'feat: format Engineering Journey as horizontal 3-phase animated timeline' },
    { hash: 'e982dc4', msg: 'feat: implement animated interactive vertical timeline for Engineering Journey' },
    { hash: 'bfdf729', msg: 'fix: make Vercel serverless API routes standalone and add root type module' },
    { hash: '0edbe22', msg: 'fix: resolve Vercel CORS loopback issue by adding Vercel Serverless API routes' },
    { hash: 'e60b61c', msg: 'style: remove proficiency levels from skills cards for clean minimalist look' },
    { hash: 'e350fd4', msg: 'feat: implement alternating multi-directional sliding marquee rows for skills' }
  ];

  // Filtered Repos
  const filteredRepos = useMemo(() => {
    const repoList = repos && repos.length > 0 ? repos : [
      { id: 1, name: "Vrutti-Portfolio", html_url: `https://github.com/${username}/Vrutti-Portfolio`, description: "Production full-stack engineering portfolio with live API diagnostics console.", language: "JavaScript", stargazers_count: 3, forks_count: 1 },
      { id: 2, name: "HomeConnect-Proj", html_url: `https://github.com/${username}/HomeConnect-Proj`, description: "IoT Smart home automation hub with device telemetry streaming & threshold alarms.", language: "JavaScript", stargazers_count: 2, forks_count: 0 },
      { id: 3, name: "peer-tutor", html_url: `https://github.com/${username}/peer-tutor`, description: "Decentralized peer-to-peer tutoring and mentor booking marketplace.", language: "JavaScript", stargazers_count: 2, forks_count: 0 },
      { id: 4, name: "Project-HeadsUpForTails", html_url: `https://github.com/${username}/Project-HeadsUpForTails`, description: "E-Commerce Pet Care Engine with category filtering & tokenized auth.", language: "HTML", stargazers_count: 2, forks_count: 1 },
      { id: 5, name: "Linguahub", html_url: `https://github.com/${username}/Linguahub`, description: "Collaborative real-time language learning platform with sub-50ms peer signaling.", language: "JavaScript", stargazers_count: 3, forks_count: 1 },
      { id: 6, name: "BuildSmart-Project", html_url: `https://github.com/${username}/BuildSmart-Project`, description: "Cloud construction management platform with AWS S3 storage and CloudWatch telemetry.", language: "JavaScript", stargazers_count: 2, forks_count: 0 }
    ];

    if (selectedLanguage === 'ALL') return repoList.slice(0, 6);
    return repoList.filter(r => r.language?.toLowerCase() === selectedLanguage.toLowerCase()).slice(0, 6);
  }, [repos, username, selectedLanguage]);

  return (
    <section id="github" className="py-24 relative z-10 overflow-hidden font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-bg-border">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brand-green uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>[08] OPEN SOURCE &amp; REAL-TIME ACTIVITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary font-sans">
              GitHub Live Engineering Hub
            </h2>
          </div>

          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-bg-card border border-brand-green/40 text-brand-green text-xs font-mono font-bold shadow-glow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
              <span>Live GitHub API Sync</span>
            </span>

            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
              data-cursor="GITHUB"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-surface border border-bg-border hover:border-brand-green text-xs font-mono text-text-primary hover:text-brand-green transition-all"
            >
              <Github className="w-4 h-4" />
              <span>@{username}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Top 3 Cyber Telemetry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <motion.div 
            whileHover={{ scale: 1.03, y: -2 }}
            className="p-5 rounded-3xl bg-bg-card border border-bg-border hover:border-brand-green/50 hover:shadow-glow-sm transition-all relative overflow-hidden group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] text-text-secondary uppercase tracking-wider flex items-center gap-1.5">
                <FolderGit2 className="w-4 h-4 text-brand-green" />
                Repositories
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-brand-green/10 text-brand-green border border-brand-green/30 font-bold">
                Public
              </span>
            </div>
            <div className="text-3xl font-extrabold text-text-primary flex items-baseline gap-2">
              <span>{profile?.public_repos || 65}</span>
              <span className="text-xs text-text-muted font-normal">indexed</span>
            </div>
            <div className="text-[10px] text-text-muted mt-2">Active Git projects</div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.03, y: -2 }}
            className="p-5 rounded-3xl bg-bg-card border border-bg-border hover:border-brand-green/50 hover:shadow-glow-sm transition-all relative overflow-hidden group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] text-text-secondary uppercase tracking-wider flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-brand-green animate-pulse" />
                Year Activity
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-brand-green/10 text-brand-green border border-brand-green/30 font-bold">
                Live
              </span>
            </div>
            <div className="text-3xl font-extrabold text-brand-green flex items-baseline gap-2">
              <span>{totalCommitsCount}+</span>
              <span className="text-xs text-text-muted font-normal">commits</span>
            </div>
            <div className="text-[10px] text-text-muted mt-2">Annual contributions</div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.03, y: -2 }}
            className="p-5 rounded-3xl bg-bg-card border border-bg-border hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all relative overflow-hidden group sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] text-text-secondary uppercase tracking-wider flex items-center gap-1.5">
                <Users className="w-4 h-4 text-cyan-400" />
                Network
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-bold">
                Followers
              </span>
            </div>
            <div className="text-3xl font-extrabold text-cyan-400 flex items-baseline gap-2">
              <span>{profile?.followers || 37}</span>
              <span className="text-xs text-text-muted font-normal">engineers</span>
            </div>
            <div className="text-[10px] text-text-muted mt-2">Community connections</div>
          </motion.div>
        </div>

        {/* 🌟 MASTER SIDE-BY-SIDE ROW: ACTIVITY GRID (LEFT) + LANGUAGE BREAKDOWN (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 items-stretch">
          
          {/* LEFT: ANIMATED ACTIVITY GRID (8 COLS ON LG) */}
          <div className="lg:col-span-8 p-6 sm:p-7 rounded-3xl bg-bg-card border border-brand-green/30 shadow-[0_0_35px_rgba(0,255,102,0.1)] flex flex-col justify-between relative overflow-hidden group">
            
            {/* Continuous Ambient Laser Beam sweeping across grid */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                animate={{
                  left: ['-20%', '120%']
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-0 bottom-0 w-28 bg-gradient-to-r from-transparent via-brand-green/12 to-transparent pointer-events-none"
              />
            </div>

            <div className="relative z-10">
              {/* Header inside Card with Interactive FX controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-bg-border/60">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-brand-green tracking-wider">
                      ENGINEERING ACTIVITY
                    </h3>
                    <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
                  </div>
                  <p className="text-xs text-text-muted mt-0.5">
                    // Every square represents a step forward.
                  </p>
                </div>

                {/* Animation Trigger Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleTriggerWave}
                    title="Trigger Ripple Wave"
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all border ${
                      animMode === 'WAVE'
                        ? 'bg-brand-green text-black border-brand-green shadow-glow-sm'
                        : 'bg-bg-surface border-bg-border text-brand-green hover:bg-brand-green/10'
                    }`}
                  >
                    <Sparkles className={`w-3 h-3 ${animMode === 'WAVE' ? 'animate-spin' : ''}`} />
                    <span>Wave FX</span>
                  </button>

                  <button
                    onClick={() => setAnimMode(animMode === 'SCAN' ? 'IDLE' : 'SCAN')}
                    title="Laser Scanner"
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all border ${
                      animMode === 'SCAN'
                        ? 'bg-brand-green text-black border-brand-green shadow-glow-sm'
                        : 'bg-bg-surface border-bg-border text-cyan-400 hover:bg-cyan-400/10'
                    }`}
                  >
                    <Radio className={`w-3 h-3 ${animMode === 'SCAN' ? 'animate-pulse' : ''}`} />
                    <span>{animMode === 'SCAN' ? 'Stop' : 'Laser'}</span>
                  </button>

                  <button
                    onClick={() => setAnimMode(animMode === 'RAIN' ? 'IDLE' : 'RAIN')}
                    title="Matrix Rain"
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all border ${
                      animMode === 'RAIN'
                        ? 'bg-brand-green text-black border-brand-green shadow-glow-sm'
                        : 'bg-bg-surface border-bg-border text-purple-400 hover:bg-purple-400/10'
                    }`}
                  >
                    <Zap className="w-3 h-3" />
                    <span>{animMode === 'RAIN' ? 'Stop' : 'Rain'}</span>
                  </button>

                  <span className="text-sm font-bold text-brand-green ml-1">
                    2026
                  </span>
                </div>
              </div>

              {/* Month Header Timeline */}
              <div className="overflow-x-auto pt-1 pb-2">
                <div className="flex justify-between min-w-[540px] text-[10px] text-text-muted mb-2 pl-9 pr-1">
                  {months.map((m, i) => (
                    <span key={i} className="font-semibold text-text-secondary">{m}</span>
                  ))}
                </div>

                {/* Contribution Grid Container */}
                <div className="flex gap-2 min-w-[540px]">
                  {/* Day of Week Labels */}
                  <div className="flex flex-col justify-between text-[9px] text-text-muted font-mono pr-1 select-none">
                    {dayLabels.map((day, i) => (
                      <span key={i} className="h-3 flex items-center font-bold text-text-secondary">{day}</span>
                    ))}
                  </div>

                  {/* 30 Week Columns */}
                  <div className="flex gap-1.5 flex-1 relative">
                    {contributionMatrix.map((week, wIdx) => (
                      <div key={wIdx} className="flex flex-col gap-1.5 flex-1">
                        {week.map((cell, dIdx) => {
                          const isHovered = hoveredCell === cell;
                          const waveDelay = animMode === 'WAVE' ? (wIdx * 0.03 + dIdx * 0.02) : 0;

                          return (
                            <motion.div
                              key={dIdx}
                              animate={animMode === 'WAVE' ? {
                                scale: [1, 1.45, 1],
                                y: [0, -3, 0],
                                boxShadow: ['0 0 0px #00FF66', '0 0 16px #00FF66', '0 0 4px #00FF66']
                              } : {}}
                              transition={{ delay: waveDelay, duration: 0.4 }}
                              onMouseEnter={() => setHoveredCell(cell)}
                              onMouseLeave={() => setHoveredCell(null)}
                              className={`w-full aspect-square rounded-[3px] border transition-all duration-200 cursor-pointer relative ${getGreenCellClass(cell)} ${
                                isHovered ? 'scale-150 z-30 ring-2 ring-white border-white shadow-[0_0_18px_#00FF66]' : ''
                              }`}
                            >
                              {/* Hover Tooltip matching exact screenshot layout */}
                              {isHovered && (
                                <motion.div 
                                  initial={{ opacity: 0, y: 6, scale: 0.9 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-52 p-3 rounded-xl bg-[#030609] border border-brand-green text-xs font-mono text-text-primary shadow-[0_12px_30px_rgba(0,0,0,0.95)] z-50 pointer-events-none space-y-1.5"
                                >
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
                                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
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
                                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-solid border-t-5 border-x-transparent border-x-5 border-b-0 border-t-brand-green" />
                                </motion.div>
                              )}
                            </motion.div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Heatmap Legend & Footer */}
            <div className="mt-4 pt-3 border-t border-bg-border/60 flex items-center justify-between text-[10px] text-text-muted relative z-10">
              <div className="flex items-center gap-2">
                <span>Less</span>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-[3px] bg-[#0D1117] border border-[#21262D]" />
                  <div className="w-3 h-3 rounded-[3px] bg-[#0E4429] border border-[#006D32]" />
                  <div className="w-3 h-3 rounded-[3px] bg-[#006D32] border border-[#26A641]" />
                  <div className="w-3 h-3 rounded-[3px] bg-[#26A641] border border-[#39D353]" />
                  <div className="w-3 h-3 rounded-[3px] bg-[#39D353] border border-[#00FF66]" />
                </div>
                <span>More</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-text-secondary">🔥 18 Day Streak</span>
                <span>•</span>
                <span className="text-brand-green font-bold">{totalCommitsCount}+ Commits</span>
              </div>
            </div>
          </div>

          {/* RIGHT: LANGUAGE BREAKDOWN (4 COLS ON LG) */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-bg-card border border-bg-border shadow-2xl flex flex-col justify-between">
            <div>
              <div className="pb-3 mb-5 border-b border-bg-border flex items-center justify-between">
                <h3 className="text-xs font-bold text-brand-green uppercase tracking-wider flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-brand-green" />
                  LANGUAGE BREAKDOWN
                </h3>
                <span className="text-[10px] text-text-muted font-bold">2026 Core</span>
              </div>

              {/* Vertical Stack of Languages with Green Progress Bars */}
              <div className="space-y-4">
                {languageStats.map((item) => (
                  <div key={item.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-bg-surface border border-bg-border flex items-center justify-center text-[10px] font-bold text-yellow-400">
                          {item.iconText}
                        </span>
                        <span className="text-text-primary font-bold">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-brand-green font-bold text-xs font-mono">
                        {item.percent}%
                      </span>
                    </div>

                    {/* Glowing Green Horizontal Progress Bar */}
                    <div className="h-2 w-full rounded-full bg-bg-surface overflow-hidden border border-bg-border">
                      <div
                        className="h-full rounded-full bg-brand-green shadow-[0_0_10px_rgba(0,255,102,0.8)] transition-all duration-700"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Summary Strip */}
            <div className="mt-6 pt-4 border-t border-bg-border/60 flex items-center justify-between text-[11px] text-text-muted">
              <span>Primary Engine</span>
              <span className="text-brand-green font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
                MERN &amp; Microservices
              </span>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: INTERACTIVE DEVELOPER TERMINAL + REPOSITORIES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Interactive Cyber Terminal */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl bg-bg-card border border-brand-green/40 shadow-2xl font-mono text-xs overflow-hidden">
              {/* macOS / Unix Window Bar */}
              <div className="px-4 py-3 bg-bg-surface border-b border-bg-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="text-[11px] text-text-muted ml-2 font-bold">vrutti@github-console:~</span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 bg-bg-darkest p-0.5 rounded-lg border border-bg-border">
                  <button
                    onClick={() => setActiveTab('LOG')}
                    className={`px-2 py-0.5 rounded text-[10px] transition-all ${
                      activeTab === 'LOG' ? 'bg-brand-green/20 text-brand-green font-bold' : 'text-text-muted hover:text-text-primary'
                    }`}
                  >
                    git log
                  </button>
                  <button
                    onClick={() => setActiveTab('STATUS')}
                    className={`px-2 py-0.5 rounded text-[10px] transition-all ${
                      activeTab === 'STATUS' ? 'bg-brand-green/20 text-brand-green font-bold' : 'text-text-muted hover:text-text-primary'
                    }`}
                  >
                    git status
                  </button>
                </div>
              </div>

              {/* Terminal Screen Body */}
              <div className="p-5 space-y-3 min-h-[260px] bg-bg-darkest">
                {activeTab === 'LOG' ? (
                  <>
                    <div className="text-[11px] text-brand-green flex items-center gap-1.5 pb-2 border-b border-bg-border/40">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>$ git log --graph --oneline -n 6</span>
                    </div>

                    <div className="space-y-3 pt-1">
                      {displayCommits.map((log, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-[11px] leading-tight">
                          <span className="text-brand-green flex-shrink-0 font-bold">●</span>
                          <span className="text-purple-400 font-bold flex-shrink-0">{log.hash}</span>
                          <span className="text-text-primary line-clamp-2">{log.msg}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-[11px] text-brand-green flex items-center gap-1.5 pb-2 border-b border-bg-border/40">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>$ git status -s</span>
                    </div>

                    <div className="space-y-2 pt-2 text-[11px] text-text-secondary">
                      <div className="text-text-primary font-bold">On branch <span className="text-brand-green">main</span></div>
                      <div>Your branch is up to date with <span className="text-brand-green">'origin/main'</span>.</div>
                      <div className="mt-3 p-3 rounded-xl bg-bg-surface/60 border border-bg-border space-y-1">
                        <div className="text-brand-green flex items-center gap-1.5 font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Working tree clean</span>
                        </div>
                        <div className="text-[10px] text-text-muted">All microservice commits synced to GitHub remote.</div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-2.5 bg-bg-surface border-t border-bg-border flex items-center justify-between text-[10px] text-text-muted">
                <span className="text-brand-green flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
                  Remote: https://github.com/{username}
                </span>
                <span>UTF-8 • Zsh</span>
              </div>
            </div>
          </div>

          {/* Right Column: Public Repositories with Filter Chips & Quick Clone */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-mono text-text-secondary flex items-center gap-2">
                <span>Featured Repositories (@{username})</span>
                <span className="px-2 py-0.5 rounded bg-brand-green/10 text-brand-green text-[10px] font-bold">
                  {filteredRepos.length} Repos
                </span>
              </span>

              {/* Language Filters */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-mono">
                {['ALL', 'JavaScript', 'HTML', 'Python'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] transition-all ${
                      selectedLanguage === lang
                        ? 'bg-brand-green text-black font-bold shadow-glow-sm'
                        : 'bg-bg-card border border-bg-border text-text-muted hover:text-text-primary'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Repositories Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-mono text-xs">
              {filteredRepos.map((repo) => (
                <div
                  key={repo.id || repo.name}
                  className="p-5 rounded-3xl bg-bg-card border border-bg-border hover:border-brand-green/50 hover:shadow-glow-sm transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Sweep Light Beam */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform" />
                  </div>

                  <div>
                    {/* Repo Title & Link */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-text-primary group-hover:text-brand-green transition-colors text-sm truncate flex items-center gap-1.5"
                      >
                        <FolderGit2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
                        <span className="truncate">{repo.name}</span>
                      </a>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-text-muted group-hover:text-brand-green transition-colors"
                        title="View on GitHub"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    {/* Description */}
                    <p className="text-[11px] text-text-secondary font-sans leading-relaxed line-clamp-2 mb-4">
                      {repo.description || 'Production engineering codebase & microservice architecture.'}
                    </p>
                  </div>

                  {/* Repo Metadata Strip & Copy Clone Button */}
                  <div className="flex items-center justify-between text-[10px] text-text-muted pt-3 border-t border-bg-border/60">
                    <span className="flex items-center gap-1.5 text-text-primary font-bold">
                      <span 
                        className="w-2 h-2 rounded-full flex-shrink-0" 
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      />
                      {repo.language || 'Code'}
                    </span>

                    {/* Quick Clone Button */}
                    <button
                      onClick={() => handleCopyClone(repo.name, repo.html_url)}
                      title="Copy Git Clone Command"
                      className="px-2 py-1 rounded-lg bg-bg-surface hover:bg-brand-green/20 hover:text-brand-green border border-bg-border transition-all flex items-center gap-1.5 text-[10px] text-text-secondary"
                    >
                      {copiedRepo === repo.name ? (
                        <>
                          <Check className="w-3 h-3 text-brand-green" />
                          <span className="text-brand-green font-bold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Clone</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
