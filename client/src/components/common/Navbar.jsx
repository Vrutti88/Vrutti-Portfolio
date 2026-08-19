import React, { useState, useEffect } from 'react';
import { 
  User, 
  Code2, 
  FolderGit2, 
  Briefcase, 
  Trophy, 
  Mail, 
  Github, 
  FileText, 
  Menu, 
  X, 
  Terminal, 
  Command, 
  Activity, 
  Sun, 
  Moon,
  ExternalLink 
} from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const Navbar = ({ onOpenTerminal, onOpenCommandPalette }) => {
  const { theme, toggleTheme, isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: '<About />', href: '#about', icon: User, id: 'about' },
    { name: '<Skills />', href: '#skills', icon: Code2, id: 'skills' },
    { name: '<Projects />', href: '#projects', icon: FolderGit2, id: 'projects' },
    { name: '<API Console />', href: '#api-console', icon: Activity, id: 'api-console' },
    { name: '<Journey />', href: '#journey', icon: Briefcase, id: 'journey' },
    { name: '<Contact />', href: '#contact', icon: Mail, id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['hero', 'about', 'skills', 'projects', 'api-console', 'system-arch', 'journey', 'achievements', 'github', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-bg-darkest/90 backdrop-blur-md border-b border-bg-border/80 py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group cursor-pointer"
            data-cursor="HOME"
          >
            <div className="w-8 h-8 rounded bg-bg-surface border border-brand-green/40 flex items-center justify-center group-hover:border-brand-green group-hover:shadow-glow-sm transition-all duration-300">
              <span className="font-mono text-brand-green font-bold text-xs">&lt;/&gt;</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-bold tracking-wider text-text-primary group-hover:text-brand-green transition-colors flex items-center gap-1.5">
                VRUTTI.DEV
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
              </span>
              <span className="text-[10px] font-mono text-text-secondary tracking-tight hidden sm:inline">
                SYS_ONLINE ● 99.9%
              </span>
            </div>
          </a>

          {/* Desktop Terminal Nav Buttons */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  data-cursor="NAVIGATE"
                  className={`group relative px-2.5 py-1.5 rounded text-xs font-mono transition-all duration-200 flex items-center gap-1.5 border ${
                    isActive
                      ? 'border-brand-green/60 text-brand-green bg-brand-green/10 shadow-glow-sm'
                      : 'border-transparent text-text-secondary hover:text-text-primary hover:border-brand-green/40 hover:bg-bg-surface'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110 ${isActive ? 'text-brand-green' : 'text-text-muted group-hover:text-brand-green'}`} />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Quick Action Utilities */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Theme Toggle (Light / Dark) */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded bg-bg-surface/80 border border-bg-border hover:border-brand-green/50 text-text-secondary hover:text-brand-green transition-all relative group"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode (Default)"}
              data-cursor="THEME"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-brand-green group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-bg-surface/80 border border-bg-border hover:border-brand-green/50 text-text-secondary hover:text-brand-green text-xs font-mono transition-all"
              title="Open Command Palette (Cmd+K)"
              data-cursor="CMD+K"
            >
              <Command className="w-3.5 h-3.5 text-brand-green" />
              <span className="hidden md:inline">⌘K</span>
            </button>

            {/* Terminal Easter Egg Trigger */}
            <button
              onClick={onOpenTerminal}
              className="p-1.5 rounded bg-bg-surface/80 border border-bg-border hover:border-brand-green/50 text-text-secondary hover:text-brand-green transition-all"
              title="Launch Terminal OS"
              data-cursor="SHELL"
            >
              <Terminal className="w-4 h-4 text-brand-green" />
            </button>

            {/* Resume CTA */}
            <a
              href="#resume-section"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-brand-green bg-brand-green/10 text-brand-green hover:bg-brand-green hover:text-black font-mono text-xs font-semibold shadow-glow-sm hover:shadow-glow-md transition-all duration-200"
              data-cursor="RESUME"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Actions (Theme Toggle + Terminal + Hamburger) */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded bg-bg-surface border border-bg-border text-text-primary"
              title={isDark ? "Light Mode" : "Dark Mode"}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-brand-green" />}
            </button>

            <button
              onClick={onOpenTerminal}
              className="p-2 rounded bg-bg-surface border border-bg-border text-brand-green"
              title="Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded bg-bg-surface border border-bg-border text-text-primary hover:border-brand-green focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-brand-green" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Terminal-Style Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-bg-darkest/95 backdrop-blur-xl lg:hidden flex flex-col pt-20 px-6 pb-8 border-b border-bg-border animate-fadeIn font-mono">
          <div className="text-xs text-text-secondary mb-4 flex items-center justify-between pb-2 border-b border-bg-border">
            <span>$ navigate --target=section</span>
            <span className="text-brand-green">VRUTTI_OS</span>
          </div>

          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-lg bg-bg-surface/60 border border-bg-border hover:border-brand-green text-sm text-text-primary hover:text-brand-green transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-brand-green" />
                    <span>{link.name}</span>
                  </div>
                  <span className="text-xs text-text-muted">&gt;</span>
                </a>
              );
            })}
          </div>

          <div className="mt-auto pt-6 border-t border-bg-border flex flex-col gap-3">
            {/* Theme Toggle Button in Mobile Drawer */}
            <button
              onClick={() => {
                toggleTheme();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between p-2.5 rounded bg-bg-surface border border-bg-border text-xs text-text-primary hover:text-brand-green"
            >
              <div className="flex items-center gap-2">
                {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-brand-green" />}
                <span>Theme: {isDark ? 'Dark Mode (Active)' : 'Light Mode (Active)'}</span>
              </div>
              <span className="text-brand-green font-bold text-[10px]">Toggle</span>
            </button>

            <a
              href="https://github.com/Vrutti88"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded bg-bg-surface border border-bg-border text-xs text-text-primary hover:text-brand-green"
            >
              <Github className="w-4 h-4" />
              <span>GitHub: @Vrutti88</span>
              <ExternalLink className="w-3 h-3 text-text-muted" />
            </a>

            <a
              href="#resume-section"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded bg-brand-green text-black font-bold text-xs shadow-glow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>View / Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
