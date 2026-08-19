import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { fetchHealth } from '../../utils/apiClient';

export const TerminalModal = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'VRUTTI.OS [Version 2.6.0] — Interactive Backend Developer Shell\nType "help" to list available commands or "cat about.json" to inspect profile.'
    }
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);
  const [isMaximized, setIsMaximized] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Lock Lenis smooth scrolling and body scroll when Terminal opens
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
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = async (cmd) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    // Record in history
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const newHistory = [...history, { type: 'input', text: `$ ${trimmed}` }];
    const lower = trimmed.toLowerCase();
    const parts = trimmed.split(' ');

    if (lower === 'help') {
      newHistory.push({
        type: 'output',
        text: `AVAILABLE COMMANDS:
  help               - Display this command index
  about              - Print profile & background summary
  cat about.json     - Output raw structured developer JSON
  skills             - Inspect technology arsenal & competencies
  projects           - List engineered software & case studies
  api health         - Execute live health probe to Express backend
  curl /api/health   - Test backend HTTP GET /api/health
  github             - Display GitHub profile & active repositories
  contact            - Print communication channels
  resume             - Open curriculum vitae overview
  clear              - Wipe terminal buffer
  sudo               - Request root developer clearance
  exit               - Terminate terminal session`
      });
    } else if (lower === 'clear' || lower === 'cls') {
      setHistory([]);
      return;
    } else if (lower === 'exit') {
      onClose();
      return;
    } else if (lower === 'about') {
      newHistory.push({
        type: 'output',
        text: `NAME:        Vrutti Patil
ROLE:        B.Tech Computer Science & Engineering Student
INSTITUTE:   ITM Skills University, Kharghar (CGPA: 9.45 / 10)
SPECIALTY:   Backend Development, REST APIs, Cloud Infrastructure & System Design
TAGLINE:     "Building robust backend systems and scalable APIs that power real-world applications."`
      });
    } else if (lower === 'cat about.json' || lower === 'cat about') {
      const jsonDump = JSON.stringify(
        {
          name: portfolioData.profile.name,
          role: portfolioData.profile.role,
          cgpa: "9.45 / 10",
          university: "ITM Skills University, Kharghar",
          focus: ["Backend Development", "APIs", "Cloud (AWS)", "DevOps", "System Design"],
          currently_learning: ["Distributed Systems", "Web Security", "Kubernetes", "High-Throughput Caching"]
        },
        null,
        2
      );
      newHistory.push({ type: 'output', text: jsonDump });
    } else if (lower === 'skills') {
      const formattedSkills = portfolioData.skillCategories
        .map((cat) => `[${cat.category}]\n  ` + cat.skills.map((s) => s.name).join(', '))
        .join('\n\n');
      newHistory.push({ type: 'output', text: formattedSkills });
    } else if (lower === 'projects') {
      const formattedProjects = portfolioData.projects
        .map((p, i) => `[0${i + 1}] ${p.title}\n    Stack: ${p.technologies.join(', ')}\n    URL:   ${p.github}`)
        .join('\n\n');
      newHistory.push({ type: 'output', text: formattedProjects });
    } else if (lower === 'api health' || lower === 'curl /api/health' || lower === 'curl -i /api/health') {
      newHistory.push({ type: 'output', text: 'Sending HTTP GET /api/health probe...' });
      setHistory(newHistory);
      const res = await fetchHealth();
      setHistory((prev) => [
        ...prev,
        {
          type: 'output',
          text: `HTTP/1.1 200 OK\nContent-Type: application/json\n\n${JSON.stringify(res.data, null, 2)}`
        }
      ]);
      return;
    } else if (lower === 'github') {
      newHistory.push({
        type: 'output',
        text: `GITHUB USER:   Vrutti88\nPROFILE URL:   https://github.com/Vrutti88\nREPOSITORIES:  LinguaHub (MERN), Peer-Tutor (Firebase), HUFT-Clone, BuildSmart\nSTATUS:        Clean working tree ✓`
      });
    } else if (lower === 'contact') {
      newHistory.push({
        type: 'output',
        text: `EMAIL:     vruttipatil1396@gmail.com\nLINKEDIN:  https://linkedin.com/in/vruttipatil/\nGITHUB:    https://github.com/Vrutti88\nLOCATION:  Kharghar, Navi Mumbai, India`
      });
    } else if (lower === 'resume') {
      newHistory.push({
        type: 'output',
        text: `Directing to resume section...\nType "exit" to view in browser.`
      });
      window.location.hash = '#resume-section';
    } else if (lower.startsWith('sudo')) {
      newHistory.push({
        type: 'output',
        text: `[ROOT ACCESS GRANTED] Developer privileges enabled. Welcome, Superuser Vrutti.`
      });
    } else {
      newHistory.push({
        type: 'error',
        text: `zsh: command not found: ${trimmed}. Type "help" to inspect valid commands.`
      });
    }

    setHistory(newHistory);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < commandHistory.length) {
          setHistoryIndex(nextIndex);
          setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 pt-16 pb-8"
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
      data-lenis-prevent="true"
    >
      <div
        className={`w-full bg-[#05080D] border border-brand-green/40 rounded-xl shadow-2xl overflow-hidden font-mono flex flex-col transition-all duration-200 ${
          isMaximized ? 'h-[95vh] max-w-6xl' : 'h-[520px] max-w-3xl'
        }`}
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        data-lenis-prevent="true"
      >
        {/* Terminal Header */}
        <div className="bg-bg-surface px-4 py-2.5 border-b border-bg-border flex items-center justify-between select-none">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer" onClick={() => setIsMaximized(!isMaximized)} />
            <div className="w-3 h-3 rounded-full bg-brand-green/80 cursor-pointer" onClick={() => setIsMaximized(!isMaximized)} />
            <span className="text-xs text-text-secondary ml-3 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-brand-green" />
              vrutti@command-center:~ (zsh)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="text-text-secondary hover:text-brand-green p-1 transition-colors"
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="text-text-secondary hover:text-red-400 p-1 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Output Area */}
        <div 
          className="flex-1 p-4 overflow-y-auto space-y-2 text-xs text-text-primary selection:bg-brand-green selection:text-black overscroll-contain"
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          style={{ WebkitOverflowScrolling: 'touch', overscrollBehavior: 'contain' }}
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, idx) => (
            <div key={idx} className="whitespace-pre-wrap leading-relaxed">
              {item.type === 'input' ? (
                <span className="text-brand-green font-bold">{item.text}</span>
              ) : item.type === 'error' ? (
                <span className="text-red-400">{item.text}</span>
              ) : item.type === 'system' ? (
                <span className="text-text-secondary">{item.text}</span>
              ) : (
                <span className="text-text-primary">{item.text}</span>
              )}
            </div>
          ))}

          {/* Active Prompt Line */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-brand-green font-bold select-none">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-text-primary text-xs font-mono caret-brand-green"
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
          </div>
          <div ref={bottomRef} />
        </div>

        {/* Terminal Status Bar Footer */}
        <div className="bg-bg-surface/90 px-4 py-1.5 border-t border-bg-border flex items-center justify-between text-[11px] text-text-secondary select-none">
          <div className="flex items-center gap-3">
            <span className="text-brand-green">● ONLINE</span>
            <span>PORT: 5001</span>
            <span>NODE_ENV: production</span>
          </div>
          <span>Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
};
