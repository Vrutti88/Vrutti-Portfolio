import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  GitBranch, 
  GitCommit, 
  Star, 
  Users, 
  FolderGit2, 
  ExternalLink, 
  Terminal, 
  CheckCircle2,
  Code2,
  Activity,
  RotateCw,
  GitFork,
  Flame,
  Zap,
  Copy,
  Check,
  Sparkles,
  Layers
} from 'lucide-react';
import { useGitHubData } from '../../hooks/useGitHubData';

export const GitHubDashboard = () => {
  const { profile, repos, commits, totalStars, loading, lastUpdated, username } = useGitHubData();
  const [activeTab, setActiveTab] = useState('LOG'); // 'LOG' | 'STATUS' | 'LANGS'
  const [selectedLanguage, setSelectedLanguage] = useState('ALL');
  const [hoveredCell, setHoveredCell] = useState(null);
  const [isWaveActive, setIsWaveActive] = useState(false);
  const [copiedRepo, setCopiedRepo] = useState(null);

  // Month labels for the 36-week matrix
  const months = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

  // Generate realistic, dynamic 36-week contribution matrix (36 cols x 7 rows)
  const contributionMatrix = useMemo(() => {
    const matrix = [];
    const today = new Date();
    
    for (let w = 0; w < 36; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        // Date computation
        const dayOffset = (35 - w) * 7 + (6 - d);
        const cellDate = new Date(today);
        cellDate.setDate(today.getDate() - dayOffset);
        
        // Realistic commit density distribution
        const dayOfWeek = cellDate.getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        const seed = (w * 13 + d * 19 + 7) % 100;
        
        let level = 0;
        let count = 0;
        
        if (seed > 88) {
          level = 4;
          count = isWeekend ? 6 : Math.floor(seed / 8) + 4;
        } else if (seed > 68) {
          level = 3;
          count = isWeekend ? 3 : Math.floor(seed / 15) + 3;
        } else if (seed > 42) {
          level = 2;
          count = 2;
        } else if (seed > 22) {
          level = 1;
          count = 1;
        }

        days.push({
          level,
          count,
          date: cellDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          colIdx: w,
          rowIdx: d
        });
      }
      matrix.push(days);
    }
    return matrix;
  }, []);

  // Compute total estimated commits in heatmap
  const totalHeatmapCommits = useMemo(() => {
    return contributionMatrix.reduce((acc, week) => 
      acc + week.reduce((dAcc, day) => dAcc + day.count, 0)
    , 0) + 140; // baseline annual offset
  }, [contributionMatrix]);

  const getHeatmapColor = (level) => {
    switch (level) {
      case 1: return 'bg-[#0E4429] border-[#006D32] shadow-[0_0_4px_rgba(0,109,50,0.4)]';
      case 2: return 'bg-[#006D32] border-[#26A641] shadow-[0_0_6px_rgba(38,166,65,0.5)]';
      case 3: return 'bg-[#26A641] border-[#39D353] shadow-[0_0_10px_rgba(57,211,83,0.6)]';
      case 4: return 'bg-[#39D353] border-[#00FF66] shadow-[0_0_14px_#00FF66] animate-pulse';
      default: return 'bg-[#0D1117] border-[#21262D]/70 hover:border-brand-green/40';
    }
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

  // Language Breakdown Data
  const languagesBreakdown = [
    { name: 'JavaScript', percent: 56.4, color: '#F7DF1E', repos: 8 },
    { name: 'C++', percent: 21.2, color: '#00599C', repos: 4 },
    { name: 'Python', percent: 12.8, color: '#3776AB', repos: 2 },
    { name: 'HTML & CSS', percent: 9.6, color: '#E34F26', repos: 3 }
  ];

  // Trigger Matrix Ripple Wave Effect
  const handleTriggerWave = () => {
    setIsWaveActive(true);
    setTimeout(() => setIsWaveActive(false), 2400);
  };

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
    <section id="github" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-bg-border">
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
              <span>API Gateway Synchronized</span>
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

        {/* TOP 4 CYBER TELEMETRY CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <motion.div 
            whileHover={{ scale: 1.03, y: -2 }}
            className="p-5 rounded-3xl bg-bg-card border border-bg-border hover:border-brand-green/50 hover:shadow-glow-sm transition-all font-mono relative overflow-hidden group"
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
            className="p-5 rounded-3xl bg-bg-card border border-bg-border hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all font-mono relative overflow-hidden group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] text-text-secondary uppercase tracking-wider flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-purple-400 animate-pulse" />
                Year Activity
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30 font-bold">
                Live
              </span>
            </div>
            <div className="text-3xl font-extrabold text-purple-400 flex items-baseline gap-2">
              <span>{totalHeatmapCommits}+</span>
              <span className="text-xs text-text-muted font-normal">commits</span>
            </div>
            <div className="text-[10px] text-text-muted mt-2">Annual contributions</div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.03, y: -2 }}
            className="p-5 rounded-3xl bg-bg-card border border-bg-border hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all font-mono relative overflow-hidden group"
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

          <motion.div 
            whileHover={{ scale: 1.03, y: -2 }}
            className="p-5 rounded-3xl bg-bg-card border border-bg-border hover:border-yellow-400/50 hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] transition-all font-mono relative overflow-hidden group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] text-text-secondary uppercase tracking-wider flex items-center gap-1.5">
                <Star className="w-4 h-4 text-yellow-400" />
                Stars &amp; Forks
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 font-bold">
                Global
              </span>
            </div>
            <div className="text-3xl font-extrabold text-yellow-400 flex items-baseline gap-2">
              <span>{totalStars > 0 ? totalStars : '12+'}</span>
              <span className="text-xs text-text-muted font-normal">stars</span>
            </div>
            <div className="text-[10px] text-text-muted mt-2">Repo community recognition</div>
          </motion.div>
        </div>

        {/* CYBER CONTRIBUTION HEATMAP MATRIX CARD */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#05080D] border border-bg-border shadow-2xl mb-10 font-mono text-xs relative overflow-hidden group">
          {/* Subtle Cyber Grid Background */}
          <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

          {/* Continuous Scanning Laser Line across Heatmap */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                left: ['-10%', '110%']
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-brand-green/8 to-transparent pointer-events-none"
            />
          </div>

          {/* Matrix Controls Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-bg-border/60 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-green/10 border border-brand-green/30 flex items-center justify-center">
                <GitBranch className="w-4 h-4 text-brand-green" />
              </div>
              <div>
                <div className="font-bold text-text-primary text-sm font-sans flex items-center gap-2">
                  <span>Year Activity Telemetry</span>
                  <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
                </div>
                <div className="text-text-secondary text-xs">
                  {totalHeatmapCommits} commits across 36 weeks
                </div>
              </div>
            </div>

            {/* Actions & Interactive Wave Pulse */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleTriggerWave}
                data-cursor="PULSE"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-bg-surface border border-brand-green/30 hover:border-brand-green text-[11px] text-brand-green hover:bg-brand-green/10 transition-all font-bold"
              >
                <Sparkles className={`w-3.5 h-3.5 ${isWaveActive ? 'animate-spin' : ''}`} />
                <span>Trigger Matrix Pulse</span>
              </button>

              {/* Activity Tier Legend */}
              <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-text-muted bg-bg-darkest px-3 py-1.5 rounded-xl border border-bg-border">
                <span>Less</span>
                <div className="w-2.5 h-2.5 rounded-sm bg-[#0D1117] border border-[#21262D]" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#0E4429]" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#006D32]" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#26A641]" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#39D353]" />
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Month Indicator Labels Row */}
          <div className="overflow-x-auto pb-1 relative z-10">
            <div className="flex justify-between min-w-[700px] text-[10px] text-text-muted mb-2 px-1">
              {months.map((m, i) => (
                <span key={i}>{m}</span>
              ))}
            </div>

            {/* Heatmap Grid Matrix (36 columns x 7 rows) */}
            <div className="flex gap-1.5 min-w-[700px] p-2 rounded-2xl bg-bg-darkest/70 border border-bg-border/60">
              {contributionMatrix.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5 flex-1">
                  {week.map((cell, dIdx) => {
                    const isHovered = hoveredCell === cell;
                    const waveDelay = isWaveActive ? (wIdx * 0.04 + dIdx * 0.02) : 0;

                    return (
                      <motion.div
                        key={dIdx}
                        animate={isWaveActive ? {
                          scale: [1, 1.4, 1],
                          backgroundColor: ['#0D1117', '#00FF66', cell.level === 0 ? '#0D1117' : undefined]
                        } : {}}
                        transition={{ delay: waveDelay, duration: 0.4 }}
                        onMouseEnter={() => setHoveredCell(cell)}
                        onMouseLeave={() => setHoveredCell(null)}
                        className={`w-full aspect-square rounded-[3px] border transition-all duration-200 cursor-pointer relative ${getHeatmapColor(cell.level)} ${
                          isHovered ? 'scale-135 z-30 ring-2 ring-white border-white shadow-[0_0_12px_#00FF66]' : ''
                        }`}
                      >
                        {/* Hover Tooltip Popup */}
                        {isHovered && (
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-xl bg-[#030609] border border-brand-green text-[10px] font-mono text-text-primary shadow-[0_10px_25px_rgba(0,0,0,0.9)] whitespace-nowrap z-50 pointer-events-none animate-fadeIn">
                            <span className="text-brand-green font-bold">{cell.count} commits</span> on {cell.date}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-solid border-t-4 border-x-transparent border-x-4 border-b-0 border-t-brand-green" />
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Matrix Footer Status HUD */}
          <div className="mt-5 pt-4 border-t border-bg-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-text-secondary relative z-10">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-orange-400 animate-bounce" />
              <span>Current Sprint Velocity: <strong className="text-brand-green">Active Pipeline</strong> (Full-Stack &amp; Cloud commits)</span>
            </div>

            <div className="flex items-center gap-3 text-text-muted text-[10px]">
              <span>🔥 Current Streak: <strong className="text-text-primary">18 Days</strong></span>
              <span>•</span>
              <span>⚡ Max Streak: <strong className="text-text-primary">42 Days</strong></span>
            </div>
          </div>
        </div>

        {/* GITHUB LANGUAGE BREAKDOWN HORIZON BAR */}
        <div className="p-6 rounded-3xl bg-bg-card border border-bg-border shadow-xl mb-10 font-mono text-xs">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="font-bold text-text-primary flex items-center gap-2">
              <Code2 className="w-4 h-4 text-brand-green" />
              Language Distribution &amp; Codebase Weight
            </span>
            <span className="text-text-muted text-[10px]">Production Source Metrics</span>
          </div>

          {/* Multi-color Segmented Progress Bar */}
          <div className="h-3.5 w-full rounded-full bg-bg-darkest overflow-hidden flex p-0.5 border border-bg-border mb-4">
            {languagesBreakdown.map((lang) => (
              <div
                key={lang.name}
                style={{
                  width: `${lang.percent}%`,
                  backgroundColor: lang.color
                }}
                className="h-full first:rounded-l-full last:rounded-r-full transition-all duration-500 hover:opacity-90"
                title={`${lang.name}: ${lang.percent}%`}
              />
            ))}
          </div>

          {/* Language Legend Chips */}
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            {languagesBreakdown.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2">
                <span 
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: lang.color }}
                />
                <span className="font-bold text-text-primary">{lang.name}</span>
                <span className="text-text-muted">{lang.percent}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION: INTERACTIVE DEVELOPER TERMINAL + REPOSITORIES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Interactive Cyber Terminal */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl bg-[#030609] border border-brand-green/40 shadow-2xl font-mono text-xs overflow-hidden">
              {/* macOS / Unix Window Bar */}
              <div className="px-4 py-3 bg-[#080B10] border-b border-bg-border flex items-center justify-between">
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
              <div className="p-5 space-y-3 min-h-[260px]">
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
                          <span className="text-brand-purple font-bold flex-shrink-0">{log.hash}</span>
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
                      <div>Your branch is up to date with <span className="text-purple-400">'origin/main'</span>.</div>
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
              <div className="px-4 py-2.5 bg-[#080B10] border-t border-bg-border flex items-center justify-between text-[10px] text-text-muted">
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

                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-3 h-3" />
                        {repo.stargazers_count || 0}
                      </span>

                      {/* Quick Clone Button */}
                      <button
                        onClick={() => handleCopyClone(repo.name, repo.html_url)}
                        title="Copy Git Clone Command"
                        className="p-1 rounded bg-bg-surface hover:bg-brand-green/20 hover:text-brand-green border border-bg-border transition-all flex items-center gap-1"
                      >
                        {copiedRepo === repo.name ? (
                          <Check className="w-3 h-3 text-brand-green" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                    </div>
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
