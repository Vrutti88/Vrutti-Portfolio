import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  User, 
  Code2, 
  FolderGit2, 
  Activity, 
  Cpu, 
  Briefcase, 
  Trophy, 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  Terminal, 
  CornerDownLeft,
  X
} from 'lucide-react';

export const CommandPalette = ({ isOpen, onClose, onOpenTerminal }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const commands = [
    {
      id: 'about',
      title: 'Read About & Education Timeline',
      category: 'Navigation',
      icon: User,
      action: () => { window.location.hash = '#about'; onClose(); }
    },
    {
      id: 'skills',
      title: 'Explore Technology Arsenal',
      category: 'Navigation',
      icon: Code2,
      action: () => { window.location.hash = '#skills'; onClose(); }
    },
    {
      id: 'projects',
      title: 'Navigate to Projects Showcase',
      category: 'Navigation',
      icon: FolderGit2,
      action: () => { window.location.hash = '#projects'; onClose(); }
    },
    {
      id: 'api-console',
      title: 'Open Live API Health & Latency Console',
      category: 'API Engine',
      icon: Activity,
      action: () => { window.location.hash = '#api-console'; onClose(); }
    },
    {
      id: 'journey',
      title: 'View Engineering Journey',
      category: 'Navigation',
      icon: Briefcase,
      action: () => { window.location.hash = '#journey'; onClose(); }
    },
    // {
    //   id: 'achievements',
    //   title: 'View Achievements & Certifications',
    //   category: 'Navigation',
    //   icon: Trophy,
    //   action: () => { window.location.hash = '#achievements'; onClose(); }
    // },
    {
      id: 'terminal',
      title: 'Launch Interactive Terminal (vrutti-os)',
      category: 'Developer Tools',
      icon: Terminal,
      action: () => { onClose(); onOpenTerminal(); }
    },
    {
      id: 'system-arch',
      title: 'View Portfolio System Architecture Blueprint',
      category: 'Architecture',
      icon: Cpu,
      action: () => { window.location.hash = '#system-arch'; onClose(); }
    },
    // {
    //   id: 'github',
    //   title: 'Inspect GitHub Activity & Git Terminal',
    //   category: 'Navigation',
    //   icon: Github,
    //   action: () => { window.location.hash = '#github'; onClose(); }
    // },
    {
      id: 'resume',
      title: 'Download / View Resume',
      category: 'Documents',
      icon: FileText,
      action: () => { window.location.hash = '#resume-section'; onClose(); }
    },
    {
      id: 'contact',
      title: 'Send a Message / Transmit Contact Request',
      category: 'Communication',
      icon: Mail,
      action: () => { window.location.hash = '#contact'; onClose(); }
    },
    {
      id: 'ext-github',
      title: 'Open GitHub Profile (@Vrutti88)',
      category: 'External Links',
      icon: Github,
      action: () => { window.open('https://github.com/Vrutti88', '_blank'); onClose(); }
    },
    {
      id: 'ext-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'External Links',
      icon: Linkedin,
      action: () => { window.open('https://linkedin.com/in/vruttipatil/', '_blank'); onClose(); }
    }
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  // Lock Lenis smooth scrolling and body scroll when Command Palette opens
  useEffect(() => {
    if (isOpen) {
      if (window.lenis) {
        window.lenis.stop();
      }
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        if (window.lenis) {
          window.lenis.start();
        }
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-start justify-center pt-20 sm:pt-24 px-4"
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
      data-lenis-prevent="true"
    >
      <div 
        className="w-full max-w-xl bg-bg-card border border-brand-green/40 rounded-xl shadow-2xl overflow-hidden font-sans animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        data-lenis-prevent="true"
      >
        {/* Search Input Bar */}
        <div className="p-3.5 border-b border-bg-border flex items-center gap-3 bg-bg-surface">
          <Search className="w-5 h-5 text-brand-green" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
            placeholder="Type a command or search portfolio sections..."
            className="flex-1 bg-transparent border-none text-text-primary placeholder:text-text-muted text-sm focus:outline-none font-mono"
          />
          <button 
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div 
          ref={listRef}
          className="max-h-80 overflow-y-auto p-2 space-y-1 overscroll-contain"
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          style={{ WebkitOverflowScrolling: 'touch', overscrollBehavior: 'contain' }}
        >
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-text-secondary">
              No matching command found for "{query}".
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const Icon = cmd.icon;
              const isSelected = idx === selectedIndex;

              return (
                <div
                  key={cmd.id}
                  onClick={() => cmd.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-colors text-xs font-mono ${
                    isSelected
                      ? 'bg-brand-green/15 text-brand-green border border-brand-green/30'
                      : 'text-text-primary hover:bg-bg-surface border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded ${isSelected ? 'bg-brand-green/20 text-brand-green' : 'bg-bg-surface text-text-secondary'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-text-primary">{cmd.title}</div>
                      <div className="text-[10px] text-text-secondary">{cmd.category}</div>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="flex items-center gap-1 text-[10px] text-brand-green opacity-80">
                      <span>Jump</span>
                      <CornerDownLeft className="w-3 h-3" />
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Command Palette Footer */}
        <div className="px-4 py-2 border-t border-bg-border bg-bg-surface/60 flex items-center justify-between text-[11px] font-mono text-text-secondary">
          <div className="flex items-center gap-3">
            <span><kbd className="bg-bg-card px-1.5 py-0.5 rounded border border-bg-border text-text-primary">↑</kbd> <kbd className="bg-bg-card px-1.5 py-0.5 rounded border border-bg-border text-text-primary">↓</kbd> navigate</span>
            <span><kbd className="bg-bg-card px-1.5 py-0.5 rounded border border-bg-border text-text-primary">↵</kbd> select</span>
          </div>
          <span><kbd className="bg-bg-card px-1.5 py-0.5 rounded border border-bg-border text-text-primary">ESC</kbd> close</span>
        </div>
      </div>
    </div>
  );
};
