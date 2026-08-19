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
  Code2
} from 'lucide-react';
import { useGitHubData } from '../../hooks/useGitHubData';
import { portfolioData } from '../../data/portfolioData';

export const GitHubDashboard = () => {
  const { profile, repos, loading } = useGitHubData();
  const [activeTab, setActiveTab] = useState('REPOS');
  const [gitStatusHover, setGitStatusHover] = useState(false);

  // Generate realistic contribution heatmap squares (52 weeks x 7 days)
  const generateContributionWeeks = () => {
    const weeks = [];
    for (let w = 0; w < 32; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        // Frequency patterns
        const rand = (w * 7 + d * 13) % 100;
        let level = 0;
        if (rand > 40 && rand < 65) level = 1;
        else if (rand >= 65 && rand < 85) level = 2;
        else if (rand >= 85 && rand < 95) level = 3;
        else if (rand >= 95) level = 4;
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
      case 4: return 'bg-[#39D353] border-[#00FF66] shadow-[0_0_6px_#00FF66]';
      default: return 'bg-[#161B22] border-[#21262D]';
    }
  };

  return (
    <section id="github" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-bg-border">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brand-green uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              <span>[08] OPEN SOURCE &amp; CODE ACTIVITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary font-sans">
              GitHub Engineering Console
            </h2>
          </div>

          <a
            href="https://github.com/Vrutti88"
            target="_blank"
            rel="noreferrer"
            data-cursor="GITHUB"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-surface border border-bg-border hover:border-brand-green text-xs font-mono text-text-primary hover:text-brand-green transition-all mt-4 md:mt-0"
          >
            <Github className="w-4 h-4" />
            <span>@Vrutti88 on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Master GitHub Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-bg-card border border-bg-border font-mono">
            <div className="text-text-secondary text-xs mb-1 flex items-center gap-1.5">
              <FolderGit2 className="w-3.5 h-3.5 text-brand-green" />
              <span>PUBLIC REPOSITORIES</span>
            </div>
            <div className="text-2xl font-bold text-text-primary">
              {profile?.public_repos || 15}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-bg-card border border-bg-border font-mono">
            <div className="text-text-secondary text-xs mb-1 flex items-center gap-1.5">
              <GitCommit className="w-3.5 h-3.5 text-brand-purple" />
              <span>YEAR CONTRIBUTIONS</span>
            </div>
            <div className="text-2xl font-bold text-brand-purple">
              245+
            </div>
          </div>

          <div className="p-4 rounded-xl bg-bg-card border border-bg-border font-mono">
            <div className="text-text-secondary text-xs mb-1 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-brand-cyan" />
              <span>COMMUNITY FOLLOWERS</span>
            </div>
            <div className="text-2xl font-bold text-brand-cyan">
              {profile?.followers || 12}+
            </div>
          </div>

          <div className="p-4 rounded-xl bg-bg-card border border-bg-border font-mono">
            <div className="text-text-secondary text-xs mb-1 flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-yellow-400" />
              <span>STARS &amp; RECOGNITION</span>
            </div>
            <div className="text-2xl font-bold text-yellow-400">
              85+
            </div>
          </div>
        </div>

        {/* Contribution Graph Widget */}
        <div className="p-6 rounded-2xl bg-bg-card border border-bg-border shadow-xl mb-8 font-mono text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-bg-border">
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-brand-green" />
              <span className="font-bold text-text-primary">Contribution Matrix Activity</span>
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
                      title={`Active Day: Intensity Level ${level}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Grid: Git Log Terminal + Repositories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Simulated Git Log Terminal */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-[#05080D] border border-brand-green/30 shadow-xl font-mono text-xs space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-bg-border">
                <div className="flex items-center gap-2 text-text-secondary">
                  <Terminal className="w-4 h-4 text-brand-green" />
                  <span className="text-text-primary font-bold">$ git log --oneline -n 5</span>
                </div>
                <span className="text-[10px] text-brand-green font-bold">HEAD -&gt; main</span>
              </div>

              {/* Commit Log Lines */}
              <div className="space-y-2.5 text-[11px]">
                {portfolioData.gitTerminalLogs.map((log, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="text-brand-purple font-bold">{log.hash}</span>
                    <span className="text-text-primary leading-tight">{log.msg}</span>
                  </div>
                ))}
              </div>

              {/* Interactive $ git status */}
              <div 
                onMouseEnter={() => setGitStatusHover(true)}
                onMouseLeave={() => setGitStatusHover(false)}
                className="mt-4 pt-3 border-t border-bg-border flex items-center justify-between text-[11px] cursor-pointer hover:bg-bg-surface/50 p-2 rounded transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-brand-green font-bold">$ git status</span>
                </div>

                <span className="text-brand-green flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{gitStatusHover ? 'working tree clean ✓' : 'branch: main'}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Public Repositories List */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono text-text-secondary flex items-center justify-between mb-2">
              <span>Featured Repositories (@Vrutti88)</span>
              <span className="text-brand-green">Auto-Synchronized</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="REPO"
                  className="p-4 rounded-xl bg-bg-card border border-bg-border hover:border-brand-green/50 transition-all flex flex-col justify-between group hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-bold text-text-primary group-hover:text-brand-green transition-colors text-sm truncate">
                        {repo.name}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-brand-green transition-colors flex-shrink-0" />
                    </div>

                    <p className="text-[11px] text-text-secondary font-sans leading-relaxed line-clamp-2 mb-3">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-text-muted pt-2 border-t border-bg-border/60">
                    <span className="text-brand-green flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-brand-green" />
                      {repo.language || 'JavaScript'}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      {repo.stargazers_count || 5}
                    </span>
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
