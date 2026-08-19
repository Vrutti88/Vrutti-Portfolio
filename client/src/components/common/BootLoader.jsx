import React, { useState, useEffect } from 'react';
import { Terminal, Check, Cpu } from 'lucide-react';

export const BootLoader = ({ onComplete }) => {
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);

  const bootSequence = [
    { text: 'VRUTTI.OS v2.6.0 (x86_64-antigravity-linux)', delay: 100 },
    { text: 'Initializing developer runtime environment...', delay: 250 },
    { text: 'Mounting virtual file system /dev/vrutti-portfolio...', delay: 400 },
    { text: 'Connecting Node.js & Express REST API Gateway...', delay: 600 },
    { text: 'Verifying MongoDB cluster & seed schemas....... [ OK ]', delay: 850 },
    { text: 'Synchronizing GitHub telemetry (Vrutti88)........ [ OK ]', delay: 1100 },
    { text: 'Compiling interactive system architecture........ [ OK ]', delay: 1300 },
    { text: 'VRUTTI.DEV System Ready. Initiating GUI shell...', delay: 1500 }
  ];

  useEffect(() => {
    // Keyboard listener for instant skip
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    let timeouts = [];

    bootSequence.forEach((item, index) => {
      const t = setTimeout(() => {
        setLogs((prev) => [...prev, item.text]);
        setProgress(Math.round(((index + 1) / bootSequence.length) * 100));

        if (index === bootSequence.length - 1) {
          setTimeout(() => {
            onComplete();
          }, 300);
        }
      }, item.delay);
      timeouts.push(t);
    });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      timeouts.forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#030609] flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-bg-card border border-brand-green/30 rounded-lg shadow-2xl overflow-hidden font-mono text-sm relative">
        {/* Terminal Titlebar */}
        <div className="bg-bg-surface px-4 py-2.5 border-b border-bg-border flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-brand-green/80" />
            <span className="text-xs text-text-secondary ml-2 font-mono flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-brand-green" />
              system_boot.sh — vrutti-os
            </span>
          </div>

          <button
            onClick={onComplete}
            className="text-xs text-text-secondary hover:text-brand-green border border-bg-border hover:border-brand-green/50 px-2 py-0.5 rounded transition-colors"
          >
            Skip [ESC]
          </button>
        </div>

        {/* Console Output Area */}
        <div className="p-5 min-h-[220px] max-h-[280px] overflow-y-auto space-y-2 text-xs">
          {logs.map((log, i) => (
            <div key={i} className="flex items-start space-x-2 animate-fadeIn">
              <span className="text-brand-green font-bold">&gt;</span>
              <span className={log.includes('[ OK ]') ? 'text-brand-green-bright' : 'text-text-primary'}>
                {log}
              </span>
            </div>
          ))}
          <div className="flex items-center space-x-2">
            <span className="text-brand-green font-bold">&gt;</span>
            <span className="inline-block w-2 h-4 bg-brand-green animate-blink" />
          </div>
        </div>

        {/* Progress Bar Bottom */}
        <div className="bg-bg-surface/80 px-4 py-2 border-t border-bg-border flex items-center justify-between text-xs text-text-secondary">
          <div className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-brand-green animate-spin" />
            <span>BOOTING SYSTEM</span>
          </div>
          <span>{progress}%</span>
        </div>
        <div className="h-1 bg-bg-surface w-full">
          <div
            className="h-full bg-brand-green transition-all duration-150 ease-out shadow-[0_0_8px_#00FF66]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
