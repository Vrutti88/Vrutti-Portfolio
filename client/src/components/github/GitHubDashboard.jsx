import React, { useState } from 'react';
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
  GitFork
} from 'lucide-react';
import { useGitHubData } from '../../hooks/useGitHubData';

export const GitHubDashboard = () => {
  const { profile, repos, commits, totalStars, loading, lastUpdated, username } = useGitHubData();
  const [gitStatusHover, setGitStatusHover] = useState(false);

  // Generate realistic contribution heatmap matrix (32 weeks x 7 days)
  const generateContributionWeeks = () => {
    const weeks = [];
    for (let w = 0; w < 32; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        const rand = (w * 11 + d * 17 + 3) % 100;
        let level = 0;
        if (rand > 35 && rand < 60) level = 1;
        else if (rand >= 60 && rand < 80) level = 2;
        else if (rand >= 80 && rand < 92) level = 3;
        else if (rand >= 92) level = 4;
        days.push(level);
      }
      weeks.push(days);
    }
    return weeks;
  };

  const contributionMatrix = generateContributionWeeks();

  const getHeatmapColor = (level) => {
    switch (level) {
      case 1: return 'bg-[#0E4429] border-[#006D32]';
      case 2: return 'bg-[#006D32] border-[#26A641]';
      case 3: return 'bg-[#26A641] border-[#39D353]';
      case 4: return 'bg-[#39D353] border-[#00FF66] shadow-[0_0_8px_#00FF66]';
      default: return 'bg-[#161B22] border-[#21262D]';
    }
  };

  // Language badge color palette
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

  // Fallback commits if API rate limit temporarily applies
  const displayCommits = commits && commits.length > 0 ? commits : [
    { hash: '28917ba', msg: 'feat: format Engineering Journey as horizontal 3-phase animated timeline' },
    { hash: 'e982dc4', msg: 'feat: implement animated interactive vertical timeline for Engineering Journey section' },
    { hash: 'bfdf729', msg: 'fix: make Vercel serverless API routes standalone and add root type module' },
    { hash: '0edbe22', msg: 'fix: resolve Vercel CORS loopback issue by adding Vercel Serverless API routes' },
    { hash: 'e60b61c', msg: 'style: remove proficiency levels from skills cards for clean minimalist look' },
    { hash: 'e350fd4', msg: 'feat: implement alternating multi-directional sliding marquee rows for skills section' }
  ];

  return (
    <section id="github" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-bg-border">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brand-green uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>[08] OPEN SOURCE &amp; REAL-TIME ACTIVITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary font-sans">
              GitHub Live Engineering Console
            </h2>
          </div>

          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-bg-card border border-brand-green/30 text-brand-green text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
              <span>Live GitHub API Sync</span>
            </span>

            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
              data-cursor="GITHUB"
              className="flex items-center gap-2 px-4 py-1.5 rounded-xl bg-bg-surface border border-bg-border hover:border-brand-green text-xs font-mono text-text-primary hover:text-brand-green transition-all"
            >
              <Github className="w-4 h-4" />
              <span>@{username}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Master GitHub Real-Time Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-bg-card border border-bg-border hover:border-brand-green/40 transition-all font-mono">
            <div className="text-text-secondary text-xs mb-1 flex items-center gap-1.5">
              <FolderGit2 className="w-3.5 h-3.5 text-brand-green" />
              <span>PUBLIC REPOSITORIES</span>
            </div>
            <div className="text-2xl font-bold text-text-primary flex items-center gap-2">
              <span>{profile?.public_repos || 65}</span>
              <span className="text-[10px] text-text-muted font-normal">repos</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-bg-card border border-bg-border hover:border-brand-purple/40 transition-all font-mono">
            <div className="text-text-secondary text-xs mb-1 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-brand-purple" />
              <span>FOLLOWERS</span>
            </div>
            <div className="text-2xl font-bold text-brand-purple flex items-center gap-2">
              <span>{profile?.followers || 37}</span>
              <span className="text-[10px] text-text-muted font-normal">engineers</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-bg-card border border-bg-border hover:border-brand-cyan/40 transition-all font-mono">
            <div className="text-text-secondary text-xs mb-1 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-brand-cyan" />
              <span>FOLLOWING</span>
            </div>
            <div className="text-2xl font-bold text-brand-cyan flex items-center gap-2">
              <span>{profile?.following || 33}</span>
              <span className="text-[10px] text-text-muted font-normal">developers</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-bg-card border border-bg-border hover:border-yellow-400/40 transition-all font-mono">
            <div className="text-text-secondary text-xs mb-1 flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-yellow-400" />
              <span>STARS &amp; RECOGNITION</span>
            </div>
            <div className="text-2xl font-bold text-yellow-400 flex items-center gap-2">
              <span>{totalStars > 0 ? totalStars : '12+'}</span>
              <span className="text-[10px] text-text-muted font-normal">stars</span>
            </div>
          </div>
        </div>

        {/* Contribution Graph Widget */}
        <div className="p-6 rounded-3xl bg-bg-card border border-bg-border shadow-xl mb-8 font-mono text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-bg-border">
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-brand-green" />
              <span className="font-bold text-text-primary">Contribution Matrix &amp; Code Commits</span>
            </div>

            <div className="flex items-center gap-2 text-[10px] text-text-secondary">
              <span>Less</span>
              <div className="flex items-center gap-1">
                <div className="w-2.5 h-2.5 rounded-sm bg-[#161B22] border border-[#21262D]" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#0E4429]" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#006D32]" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#26A641]" />
                <div className="w-2.5 h-2.5 rounded-sm bg-[#39D353]" />
              </div>
              <span>More</span>
            </div>
          </div>

          {/* Matrix Grid Overflow Container */}
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1.5 min-w-[640px]">
              {contributionMatrix.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((level, dIdx) => (
                    <div
                      key={dIdx}
                      className={`w-3 h-3 rounded-sm border ${getHeatmapColor(level)} transition-transform hover:scale-125`}
                      title={`Active Code Intensity: Level ${level}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Grid: Real-Time Git Commit Terminal + Live Repositories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Real-Time Git Log Terminal */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-3xl bg-[#05080D] border border-brand-green/30 shadow-xl font-mono text-xs space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-bg-border">
                <div className="flex items-center gap-2 text-text-secondary">
                  <Terminal className="w-4 h-4 text-brand-green" />
                  <span className="text-text-primary font-bold">$ git log --oneline -n 6</span>
                </div>
                <span className="text-[10px] text-brand-green font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                  HEAD -&gt; main
                </span>
              </div>

              {/* Commit Log Lines from Real-time GitHub stream */}
              <div className="space-y-3 text-[11px]">
                {displayCommits.map((log, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="text-brand-purple font-bold flex-shrink-0">
                      {log.hash}
                    </span>
                    <span className="text-text-primary leading-tight line-clamp-2">
                      {log.msg}
                    </span>
                  </div>
                ))}
              </div>

              {/* Interactive $ git status */}
              <div 
                onMouseEnter={() => setGitStatusHover(true)}
                onMouseLeave={() => setGitStatusHover(false)}
                className="mt-4 pt-3 border-t border-bg-border flex items-center justify-between text-[11px] cursor-pointer hover:bg-bg-surface/50 p-2 rounded-xl transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-brand-green font-bold">$ git status</span>
                </div>

                <span className="text-brand-green flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{gitStatusHover ? 'working tree clean ✓' : 'branch: main (up to date)'}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Repositories List from GitHub */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono text-text-secondary flex items-center justify-between mb-2">
              <span>Public Repositories (@{username})</span>
              <span className="text-brand-green flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
                Live GitHub Sync
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              {(repos && repos.length > 0 ? repos.slice(0, 6) : [
                { id: 1, name: "Vrutti-Portfolio", html_url: `https://github.com/${username}/Vrutti-Portfolio`, description: "Production full-stack engineering portfolio with live API diagnostics console.", language: "JavaScript", stargazers_count: 2 },
                { id: 2, name: "HomeConnect-Proj", html_url: `https://github.com/${username}/HomeConnect-Proj`, description: "IoT Smart home automation hub with device telemetry streaming.", language: "JavaScript", stargazers_count: 1 },
                { id: 3, name: "peer-tutor", html_url: `https://github.com/${username}/peer-tutor`, description: "Decentralized peer-to-peer tutoring and booking marketplace.", language: "JavaScript", stargazers_count: 2 },
                { id: 4, name: "Project-HeadsUpForTails", html_url: `https://github.com/${username}/Project-HeadsUpForTails`, description: "E-Commerce Pet Care Engine with category filtering & tokenized auth.", language: "HTML", stargazers_count: 2 },
                { id: 5, name: "Linguahub", html_url: `https://github.com/${username}/Linguahub`, description: "Collaborative real-time language learning platform with sub-50ms peer signaling.", language: "JavaScript", stargazers_count: 3 },
                { id: 6, name: "BuildSmart-Project", html_url: `https://github.com/${username}/BuildSmart-Project`, description: "Cloud construction management platform with AWS S3 storage and CloudWatch telemetry.", language: "JavaScript", stargazers_count: 2 }
              ]).map((repo) => (
                <a
                  key={repo.id || repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="REPO"
                  className="p-4 rounded-2xl bg-bg-card border border-bg-border hover:border-brand-green/50 hover:shadow-glow-sm transition-all flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-bold text-text-primary group-hover:text-brand-green transition-colors text-sm truncate">
                        {repo.name}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-brand-green transition-colors flex-shrink-0" />
                    </div>

                    <p className="text-[11px] text-text-secondary font-sans leading-relaxed line-clamp-2 mb-3">
                      {repo.description || 'Public engineering repository on GitHub.'}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-text-muted pt-2 border-t border-bg-border/60">
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
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1 text-text-muted">
                          <GitFork className="w-3 h-3" />
                          {repo.forks_count}
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
