import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-bg-border bg-bg-darkest relative z-10 font-mono text-xs text-text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-bg-border/60">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-bg-surface border border-brand-green/40 flex items-center justify-center">
              <span className="text-brand-green font-bold text-xs">&lt;/&gt;</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-text-primary tracking-wider">VRUTTI.DEV</span>
              <span className="text-[10px] text-text-muted">Command Center OS • MERN Engine</span>
            </div>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            data-cursor="TOP"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-bg-surface border border-bg-border hover:border-brand-green hover:text-brand-green text-text-secondary transition-all"
            title="Return to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Vrutti Patil.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-brand-green">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>STATUS: ONLINE</span>
            </span>

            <a
              href="https://github.com/Vrutti88"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-green transition-colors"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/vruttipatil/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-purple transition-colors"
            >
              LinkedIn
            </a>

            <a
              href="mailto:vruttipatil1396@gmail.com"
              className="hover:text-brand-cyan transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
