import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Terminal, 
  Copy, 
  Check, 
  Calendar, 
  MapPin,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const AboutSection = () => {
  const [copied, setCopied] = useState(false);

  const aboutJson = {
    name: "Vrutti Patil",
    role: "Computer Science Student & Backend Engineer",
    institution: "ITM Skills University, Kharghar",
    cgpa: "9.45 / 10",
    focus: [
      "Backend Development",
      "REST & GraphQL APIs",
      "Cloud Architecture (AWS)",
      "Database Optimization & Indexing",
      "System Design & Scalability"
    ],
    currently_learning: [
      "Distributed Systems",
      "Web Security & OWASP Standards",
      "Kubernetes & Container Orchestration",
      "High-Throughput Caching Strategies"
    ]
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(aboutJson, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-bg-border">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brand-green uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              <span>[01] PROFILE &amp; ACADEMIC FOUNDATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary font-sans">
              About &amp; Academic Timeline
            </h2>
          </div>

          <p className="text-sm font-mono text-text-secondary mt-2 md:mt-0 max-w-md">
            Computer Science undergraduate at ITM Skills University dedicated to engineering resilient software and backend architectures.
          </p>
        </div>

        {/* Master Grid: Left Terminal JSON + Bio | Right Education Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: $ cat about.json & Bio */}
          <div className="lg:col-span-6 space-y-6">
            {/* Terminal JSON Inspector */}
            <div className="rounded-2xl bg-bg-card border border-brand-green/30 shadow-2xl overflow-hidden font-mono text-xs">
              {/* Titlebar */}
              <div className="bg-bg-surface px-4 py-2.5 border-b border-bg-border flex items-center justify-between">
                <div className="flex items-center gap-2 text-text-secondary">
                  <Terminal className="w-3.5 h-3.5 text-brand-green" />
                  <span className="text-text-primary font-bold">$ cat about.json</span>
                </div>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-[11px] text-text-secondary hover:text-brand-green border border-bg-border px-2 py-0.5 rounded transition-colors"
                  title="Copy JSON to clipboard"
                >
                  {copied ? <Check className="w-3 h-3 text-brand-green" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Code Snippet */}
              <div className="p-4 overflow-x-auto text-[11px] leading-relaxed text-text-primary bg-bg-darkest border-t border-bg-border/60">
                <pre>
                  <span className="text-text-muted">&#123;</span>
                  {'\n  '}<span className="text-brand-purple">"name"</span>: <span className="text-brand-green-bright">"Vrutti Patil"</span>,
                  {'\n  '}<span className="text-brand-purple">"role"</span>: <span className="text-brand-green-bright">"Computer Science Student"</span>,
                  {'\n  '}<span className="text-brand-purple">"academic_standing"</span>: <span className="text-brand-green-bright">"9.45 / 10 CGPA"</span>,
                  {'\n  '}<span className="text-brand-purple">"focus"</span>: [
                  {'\n    '}<span className="text-brand-cyan">"Software Development"</span>,
                  {'\n    '}<span className="text-brand-cyan">"Backend Development"</span>,
                  {'\n    '}<span className="text-brand-cyan">"FullStack Development"</span>,
                  {'\n    '}<span className="text-brand-cyan">"DevOps"</span>,
                  {/* {'\n    '}<span className="text-brand-cyan">"Cloud"</span>,
                  {'\n    '}<span className="text-brand-cyan">"System Design"</span> */}
                  {'\n  '}],
                  {'\n  '}<span className="text-brand-purple">"currently_learning"</span>: [
                  {/* {'\n    '}<span className="text-brand-green">"System Design"</span>,
                  {'\n    '}<span className="text-brand-green">"DevOps"</span>, */}
                  {'\n    '}<span className="text-brand-green">"Cloud Architecture"</span>
                  {'\n    '}<span className="text-brand-green">"Web Security"</span>,
                  {'\n    '}<span className="text-brand-green">"CyberSecurity Basics"</span>,
                  {'\n  '}]
                  {'\n'}<span className="text-text-muted">&#125;</span>
                </pre>
              </div>
            </div>

            {/* Human Readable Professional Bio */}
            <div className="p-6 rounded-2xl bg-bg-card border border-bg-border space-y-4">
              <div className="flex items-center gap-2 text-sm font-mono font-bold text-text-primary">
                <span className="text-brand-green">&gt;</span>
                <span>Engineering Philosophy &amp; Vision</span>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed font-sans">
                I am a dedicated Computer Science and Engineering undergraduate with a strong academic foundation and a deep fascination for what happens behind the scenes in modern software systems.
              </p>

              <p className="text-sm text-text-secondary leading-relaxed font-sans">
                Rather than treating web development as merely visual interfaces, I focus on the engine room: designing clean REST API schemas, structuring indexed relational and document databases, securing authentication tokens with RBAC, containerizing services with Docker, and architecting scalable cloud workloads on AWS.
              </p>

              <div className="pt-3 border-t border-bg-border/60 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-bg-surface border border-bg-border text-brand-green flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Problem Solver</span>
                </span>
                <span className="px-2.5 py-1 rounded bg-bg-surface border border-bg-border text-brand-purple flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>API Designer</span>
                </span>
                <span className="px-2.5 py-1 rounded bg-bg-surface border border-bg-border text-brand-cyan flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>System Thinker</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Education Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-bg-card border border-bg-border shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-bg-border mb-6">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-brand-green" />
                  <h3 className="font-mono text-sm font-bold text-text-primary uppercase tracking-wider">
                    Education Timeline
                  </h3>
                </div>
                <span className="text-xs font-mono text-brand-green">Academic Credentials</span>
              </div>

              {/* Vertical Animated Timeline */}
              <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-brand-green before:via-brand-purple before:to-bg-border">
                {portfolioData.education.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Node Dot */}
                    <div className={`absolute -left-[29px] top-1 w-4 h-4 rounded-full border-2 transition-transform group-hover:scale-125 ${
                      item.current 
                        ? 'bg-brand-green border-brand-green-bright shadow-glow-sm' 
                        : 'bg-bg-card border-brand-purple'
                    }`} />

                    {/* Timeline Item Content Card */}
                    <div className="p-4 rounded-xl bg-bg-surface/70 border border-bg-border hover:border-brand-green/40 transition-colors space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-mono text-xs font-bold text-brand-green">
                          {item.year}
                        </span>
                        <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-bg-card border border-bg-border text-brand-green font-semibold">
                          {item.grade}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-text-primary font-mono">
                        {item.degree}
                      </h4>

                      <div className="flex items-center gap-1.5 text-xs text-text-secondary font-mono">
                        <MapPin className="w-3 h-3 text-text-muted" />
                        <span>{item.institution}</span>
                      </div>

                      <p className="text-xs text-text-secondary leading-relaxed font-sans pt-1 border-t border-bg-border/40">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
