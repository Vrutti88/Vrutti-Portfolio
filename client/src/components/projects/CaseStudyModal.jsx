import React, { useEffect, useRef } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  ShieldCheck, 
  Server, 
  Database, 
  Zap, 
  AlertCircle, 
  CheckCircle2,
  Code2,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { ArchitectureDiagram } from './ArchitectureDiagram';

export const CaseStudyModal = ({ project, onClose }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // 1. Lock background body scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // 2. Pause global Lenis smooth scrolling so trackpad/wheel scrolls the modal natively
    if (window.lenis) {
      window.lenis.stop();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      if (window.lenis) {
        window.lenis.start();
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      data-lenis-prevent="true"
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 pt-16 sm:pt-20 pb-8"
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()}
    >
      <div 
        data-lenis-prevent="true"
        className="w-full max-w-4xl bg-bg-darkest border border-brand-green/40 rounded-2xl shadow-2xl overflow-hidden font-sans my-auto animate-fadeIn max-h-[85vh] flex flex-col relative z-10"
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-bg-surface px-6 py-4 border-b border-bg-border flex items-center justify-between sticky top-0 z-20 flex-shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-brand-green/15 border border-brand-green/30 text-brand-green text-xs font-mono font-bold">
              {project.badge || 'PROJECT'}
            </span>
            <h2 className="text-base sm:text-lg font-bold text-text-primary font-mono truncate max-w-md">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-text-secondary hover:text-brand-green flex items-center gap-1"
              >
                {/* <Github className="w-4 h-4" /> */}
                {/* <span className="hidden sm:inline">Repo</span> */}
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-bg-card hover:bg-bg-elevated text-text-secondary hover:text-red-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Scroll Body with Native Trackpad Scroll & Lenis-Prevent */}
        <div 
          ref={scrollContainerRef}
          data-lenis-prevent="true"
          className="p-6 overflow-y-auto space-y-8 text-sm overscroll-contain flex-1 select-text"
          style={{ 
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-y'
          }}
          onWheel={(e) => e.stopPropagation()}
        >
          {/* Tagline & Overview */}
          <div className="p-4 rounded-xl bg-bg-card border border-bg-border">
            <p className="text-base text-text-primary leading-relaxed font-sans mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-bg-border/60">
              {project.technologies?.map((tech) => (
                <span key={tech} className="px-2 py-0.5 rounded bg-bg-surface border border-bg-border text-[11px] font-mono text-brand-green">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 01 & 02: Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-bg-surface/60 border border-red-500/20">
              <div className="flex items-center gap-2 text-xs font-mono text-red-400 font-bold mb-2">
                <AlertCircle className="w-4 h-4" />
                <span>01 — THE PROBLEM</span>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                {project.problem || 'Legacy coordination bottlenecks and fragmented state synchronization across client tiers.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-bg-surface/60 border border-brand-green/20">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-green font-bold mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>02 — THE ENGINEERING SOLUTION</span>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                {project.solution || 'Engineered modular decoupled services with stateless token authentication and atomic data persistence.'}
              </p>
            </div>
          </div>

          {/* 03: Architecture Flowchart */}
          <div>
            <div className="text-xs font-mono text-brand-green font-bold mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>03 — SYSTEM ARCHITECTURE BLUEPRINT</span>
            </div>
            <ArchitectureDiagram nodes={project.architectureNodes} />
          </div>

          {/* 04 & 05: Backend & Database Specs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-bg-card border border-bg-border">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-purple font-bold mb-3">
                <Server className="w-4 h-4" />
                <span>04 — BACKEND ARCHITECTURE</span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-text-secondary">
                <li><strong className="text-text-primary">Runtime:</strong> {project.backendDetails?.runtime || 'Node.js LTS'}</li>
                <li><strong className="text-text-primary">Framework:</strong> {project.backendDetails?.framework || 'Express.js RESTful API'}</li>
                <li><strong className="text-text-primary">Endpoints:</strong> {project.backendDetails?.endpointsCount || '12+ Routes'}</li>
                <li><strong className="text-text-primary">Security:</strong> Helmet Headers, CORS, Rate Limiters</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-bg-card border border-bg-border">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan font-bold mb-3">
                <Database className="w-4 h-4" />
                <span>05 — DATABASE &amp; DATA MODEL</span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-text-secondary">
                <li><strong className="text-text-primary">Database:</strong> {project.backendDetails?.database || 'MongoDB / Mongoose ODM'}</li>
                <li><strong className="text-text-primary">Indexing:</strong> High-frequency compound indexes</li>
                <li><strong className="text-text-primary">Integrity:</strong> Atomic document updates &amp; validation</li>
                <li><strong className="text-text-primary">Latency:</strong> Sub-50ms query round-trip</li>
              </ul>
            </div>
          </div>

          {/* 06 & 07: Key Features & API Endpoints */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-brand-green font-bold flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>06 &amp; 07 — REST APIS &amp; FEATURE IMPLEMENTATIONS</span>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {project.features?.map((feat, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-bg-surface/50 border border-bg-border flex items-start gap-2.5 text-xs text-text-secondary">
                  <span className="text-brand-green font-bold font-mono">[{idx + 1}]</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* API Endpoints Sample Table */}
            {project.apiEndpoints && project.apiEndpoints.length > 0 && (
              <div className="mt-4 rounded-xl border border-bg-border overflow-hidden">
                <div className="bg-bg-surface px-4 py-2 text-xs font-mono text-text-primary font-bold border-b border-bg-border">
                  Core API Contract Endpoints
                </div>
                <div className="divide-y divide-bg-border/60 bg-bg-card text-xs font-mono">
                  {project.apiEndpoints.map((ep, i) => (
                    <div key={i} className="p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          ep.method === 'GET' ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30' :
                          ep.method === 'POST' ? 'bg-green-500/15 text-green-400 border border-green-500/30' :
                          'bg-yellow-500/15 text-yellow-400 border border-yellow-500/30'
                        }`}>
                          {ep.method}
                        </span>
                        <span className="text-text-primary font-semibold">{ep.path}</span>
                      </div>
                      <span className="text-text-secondary text-[11px] font-sans sm:text-right">{ep.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 08 & 09: Engineering Challenges & Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-bg-card border border-bg-border">
              <div className="flex items-center gap-2 text-xs font-mono text-yellow-400 font-bold mb-2">
                <AlertCircle className="w-4 h-4" />
                <span>08 — ENGINEERING CHALLENGES</span>
              </div>
              <ul className="space-y-2 text-xs text-text-secondary list-disc pl-4">
                {project.challenges?.map((c, i) => <li key={i}>{c}</li>) || (
                  <li>Designing robust schemas and preventing race conditions in high-concurrency requests.</li>
                )}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-bg-card border border-bg-border">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-green font-bold mb-2">
                <Zap className="w-4 h-4" />
                <span>09 — QUANTIFIABLE RESULTS</span>
              </div>
              <ul className="space-y-2 text-xs text-text-secondary list-disc pl-4">
                {project.results?.map((r, i) => <li key={i}>{r}</li>) || (
                  <li>100% verified route resilience with sub-60ms response performance.</li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="bg-bg-surface px-6 py-4 border-t border-bg-border flex flex-wrap items-center justify-between gap-3 sticky bottom-0 z-20 flex-shrink-0">
          <div className="text-xs font-mono text-text-secondary">
            <span>Case Study: {project.shortTitle}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-bg-card border border-bg-border hover:border-brand-green text-xs font-mono text-text-primary hover:text-brand-green transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-brand-green text-black font-mono text-xs font-bold shadow-glow-sm hover:bg-brand-green-bright transition-all"
            >
              Close Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
