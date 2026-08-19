import React, { useState } from 'react';
import { 
  Globe, 
  Server, 
  Database, 
  ShieldCheck, 
  Github, 
  Mail, 
  ArrowRight, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Zap 
} from 'lucide-react';

export const SystemArchitecture = () => {
  const [activePipeline, setActivePipeline] = useState('MAIN');

  const pipelines = [
    { id: 'MAIN', name: 'Core MERN REST Pipeline' },
    { id: 'GITHUB', name: 'GitHub Caching Proxy' },
    { id: 'CONTACT', name: 'Contact Form Pipeline' },
  ];

  return (
    <section id="system-arch" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-bg-border">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brand-green uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              <span>[07] SYSTEM ARCHITECTURE BLUEPRINT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary font-sans">
              How This Portfolio Operates
            </h2>
          </div>

          <p className="text-sm font-mono text-text-secondary mt-2 md:mt-0 max-w-md">
            This website itself acts as a living demonstration of decoupled MERN architecture, rate limiting, and cached proxy systems.
          </p>
        </div>

        {/* Pipeline Selector */}
        <div className="flex items-center gap-2 mb-8">
          {pipelines.map((pipe) => (
            <button
              key={pipe.id}
              onClick={() => setActivePipeline(pipe.id)}
              data-cursor="SELECT"
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border ${
                activePipeline === pipe.id
                  ? 'border-brand-green bg-brand-green/15 text-brand-green shadow-glow-sm'
                  : 'border-bg-border bg-bg-surface/60 text-text-secondary hover:border-brand-green/40 hover:text-text-primary'
              }`}
            >
              {pipe.name}
            </button>
          ))}
        </div>

        {/* Architecture Flow Canvas */}
        <div className="p-6 sm:p-8 rounded-2xl bg-bg-card border border-brand-green/30 shadow-2xl relative overflow-hidden font-mono text-xs">
          {activePipeline === 'MAIN' && (
            <div className="space-y-6">
              <div className="text-[11px] text-text-secondary">
                Pipeline: <strong className="text-brand-green">Full-Stack Client-to-Database Data Lifecycle</strong>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                {/* Node 1 */}
                <div className="p-4 rounded-xl bg-bg-surface border border-bg-border flex flex-col justify-between space-y-3">
                  <div className="flex items-center justify-between">
                    <Globe className="w-5 h-5 text-brand-cyan" />
                    <span className="text-[10px] px-2 py-0.5 rounded bg-bg-card text-brand-cyan border border-bg-border">01 Client</span>
                  </div>
                  <div>
                    <div className="font-bold text-text-primary text-sm">React 18 + Vite</div>
                    <div className="text-[11px] text-text-secondary font-sans mt-1">
                      Smooth scrolling via Lenis, stateful query hooks, dynamic visualizers &amp; Tailwind CSS.
                    </div>
                  </div>
                  <div className="text-[10px] text-text-muted">Transport: HTTPS / REST</div>
                </div>

                {/* Node 2 */}
                <div className="p-4 rounded-xl bg-bg-surface border border-bg-border flex flex-col justify-between space-y-3">
                  <div className="flex items-center justify-between">
                    <ShieldCheck className="w-5 h-5 text-brand-purple" />
                    <span className="text-[10px] px-2 py-0.5 rounded bg-bg-card text-brand-purple border border-bg-border">02 Gateway</span>
                  </div>
                  <div>
                    <div className="font-bold text-text-primary text-sm">Express Middleware</div>
                    <div className="text-[11px] text-text-secondary font-sans mt-1">
                      Helmet headers, CORS origin verification, and IP-based rate limiting (200 req / 15m).
                    </div>
                  </div>
                  <div className="text-[10px] text-text-muted">Security: RFC-compliant</div>
                </div>

                {/* Node 3 */}
                <div className="p-4 rounded-xl bg-bg-surface border border-bg-border flex flex-col justify-between space-y-3">
                  <div className="flex items-center justify-between">
                    <Server className="w-5 h-5 text-brand-green" />
                    <span className="text-[10px] px-2 py-0.5 rounded bg-bg-card text-brand-green border border-bg-border">03 Controller</span>
                  </div>
                  <div>
                    <div className="font-bold text-text-primary text-sm">Node.js API Engine</div>
                    <div className="text-[11px] text-text-secondary font-sans mt-1">
                      Async controllers, parametric routing, payload sanitizer, and error boundaries.
                    </div>
                  </div>
                  <div className="text-[10px] text-text-muted">Port: 5001 / Micro-routes</div>
                </div>

                {/* Node 4 */}
                <div className="p-4 rounded-xl bg-bg-surface border border-bg-border flex flex-col justify-between space-y-3">
                  <div className="flex items-center justify-between">
                    <Database className="w-5 h-5 text-brand-green-bright" />
                    <span className="text-[10px] px-2 py-0.5 rounded bg-bg-card text-brand-green-bright border border-bg-border">04 Persistence</span>
                  </div>
                  <div>
                    <div className="font-bold text-text-primary text-sm">MongoDB / Store</div>
                    <div className="text-[11px] text-text-secondary font-sans mt-1">
                      Mongoose ODM schemas with compound indexing and auto-resilient in-memory fallback.
                    </div>
                  </div>
                  <div className="text-[10px] text-brand-green font-bold">Query Latency: &lt;50ms</div>
                </div>
              </div>
            </div>
          )}

          {activePipeline === 'GITHUB' && (
            <div className="space-y-6">
              <div className="text-[11px] text-text-secondary">
                Pipeline: <strong className="text-brand-purple">Cached GitHub REST Proxy for @Vrutti88</strong>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-bg-surface border border-bg-border space-y-2">
                  <div className="flex items-center justify-between">
                    <Github className="w-5 h-5 text-brand-purple" />
                    <span className="text-[10px] px-2 py-0.5 rounded bg-bg-card text-text-secondary">Upstream</span>
                  </div>
                  <div className="font-bold text-text-primary">api.github.com/users/Vrutti88</div>
                  <div className="text-text-secondary text-[11px] font-sans">
                    Fetches real public repositories, stargazer metrics, and profile metadata.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-bg-surface border border-brand-purple/40 space-y-2">
                  <div className="flex items-center justify-between">
                    <Zap className="w-5 h-5 text-brand-purple" />
                    <span className="text-[10px] px-2 py-0.5 rounded bg-brand-purple/20 text-brand-purple">Cache Layer</span>
                  </div>
                  <div className="font-bold text-text-primary">TTL In-Memory Cache (600s)</div>
                  <div className="text-text-secondary text-[11px] font-sans">
                    Protects upstream rate limits while serving instant sub-5ms responses to visitors.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-bg-surface border border-bg-border space-y-2">
                  <div className="flex items-center justify-between">
                    <CheckCircle2 className="w-5 h-5 text-brand-green" />
                    <span className="text-[10px] px-2 py-0.5 rounded bg-bg-card text-brand-green">Client Feed</span>
                  </div>
                  <div className="font-bold text-text-primary">GET /api/github/repos</div>
                  <div className="text-text-secondary text-[11px] font-sans">
                    Feeds the contribution matrix heatmap and live repository showcase cards.
                  </div>
                </div>
              </div>
            </div>
          )}

          {activePipeline === 'CONTACT' && (
            <div className="space-y-6">
              <div className="text-[11px] text-text-secondary">
                Pipeline: <strong className="text-brand-green">Validated Message Ingestion Pipeline</strong>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-bg-surface border border-bg-border space-y-2">
                  <div className="flex items-center justify-between">
                    <Mail className="w-5 h-5 text-brand-green" />
                    <span className="text-[10px] px-2 py-0.5 rounded bg-bg-card text-text-secondary">Form Submission</span>
                  </div>
                  <div className="font-bold text-text-primary">POST /api/contact</div>
                  <div className="text-text-secondary text-[11px] font-sans">
                    Transmits Name, Email, Subject, and Message with client-side regex pre-validation.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-bg-surface border border-brand-green/40 space-y-2">
                  <div className="flex items-center justify-between">
                    <ShieldCheck className="w-5 h-5 text-brand-green" />
                    <span className="text-[10px] px-2 py-0.5 rounded bg-brand-green/20 text-brand-green">Security Middleware</span>
                  </div>
                  <div className="font-bold text-text-primary">Strict Rate Limiter (8/hr)</div>
                  <div className="text-text-secondary text-[11px] font-sans">
                    Sanitizes strings, prevents spam, and enforces maximum length constraints.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-bg-surface border border-bg-border space-y-2">
                  <div className="flex items-center justify-between">
                    <Database className="w-5 h-5 text-brand-green-bright" />
                    <span className="text-[10px] px-2 py-0.5 rounded bg-bg-card text-brand-green">Mongoose Queue</span>
                  </div>
                  <div className="font-bold text-text-primary">ContactMessage Model</div>
                  <div className="text-text-secondary text-[11px] font-sans">
                    Persists records with timestamps, client userAgent, and unread status flag.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
