import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Database, 
  Cloud, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  Zap,
  Layers,
  Network
} from 'lucide-react';

export const HeroVisualizer = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { name: 'Client Request', desc: 'GET /api/projects' },
    { name: 'API Gateway', desc: 'Rate Limit & Auth Verify' },
    { name: 'Node.js Express', desc: 'Controller & Middleware' },
    { name: 'MongoDB / Cache', desc: 'Indexed Document Query' },
    { name: 'Cloud Telemetry', desc: 'CloudWatch 200 OK (42ms)' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [steps.length]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 15, y: y * -15 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-square max-w-xl mx-auto flex items-center justify-center p-4 select-none"
      style={{ perspective: '1000px' }}
    >
      {/* 3D Tilting Stage */}
      <div
        className="w-full h-full relative flex items-center justify-center transition-transform duration-200 ease-out"
        style={{
          transform: `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Futuristic Core Central Terminal Display */}
        <div className="w-full max-w-md bg-bg-card/95 border border-brand-green/30 rounded-2xl p-5 shadow-2xl backdrop-blur-xl relative z-10">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-bg-border text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
              <span className="text-brand-green font-bold">SYSTEM ARCHITECTURE MATRIX</span>
            </div>
            <span className="text-[10px] text-text-secondary">AUTO-ROUTING</span>
          </div>

          {/* Animated Data Pipeline Nodes */}
          <div className="py-4 space-y-3 font-mono text-xs">
            {/* Step 1: Client */}
            <div className={`p-2.5 rounded-lg border transition-all duration-300 flex items-center justify-between ${
              activeStep === 0 
                ? 'border-brand-green bg-brand-green/10 text-brand-green shadow-glow-sm' 
                : 'border-bg-border bg-bg-surface/50 text-text-secondary'
            }`}>
              <div className="flex items-center gap-2.5">
                <Network className="w-4 h-4 text-brand-cyan" />
                <div>
                  <div className="font-semibold text-text-primary">01 Client Browser</div>
                  <div className="text-[10px] text-text-secondary">HTTP/2 TLS Request</div>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-bg-card border border-bg-border">Payload: JSON</span>
            </div>

            {/* Connecting Arrow */}
            <div className="flex justify-center -my-1 text-brand-green/60">
              <span className="text-xs">↓</span>
            </div>

            {/* Step 2: Gateway & Auth */}
            <div className={`p-2.5 rounded-lg border transition-all duration-300 flex items-center justify-between ${
              activeStep === 1 
                ? 'border-brand-green bg-brand-green/10 text-brand-green shadow-glow-sm' 
                : 'border-bg-border bg-bg-surface/50 text-text-secondary'
            }`}>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-brand-purple" />
                <div>
                  <div className="font-semibold text-text-primary">02 API Gateway & Auth</div>
                  <div className="text-[10px] text-text-secondary">Rate-Limiter • JWT Validation</div>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-brand-purple/20 text-brand-purple border border-brand-purple/30">Verified ✓</span>
            </div>

            {/* Connecting Arrow */}
            <div className="flex justify-center -my-1 text-brand-green/60">
              <span className="text-xs">↓</span>
            </div>

            {/* Step 3: Node.js / Express API */}
            <div className={`p-2.5 rounded-lg border transition-all duration-300 flex items-center justify-between ${
              activeStep === 2 
                ? 'border-brand-green bg-brand-green/10 text-brand-green shadow-glow-sm' 
                : 'border-bg-border bg-bg-surface/50 text-text-secondary'
            }`}>
              <div className="flex items-center gap-2.5">
                <Server className="w-4 h-4 text-brand-green" />
                <div>
                  <div className="font-semibold text-text-primary">03 Node.js & Express API</div>
                  <div className="text-[10px] text-text-secondary">Async Controller • Service Tier</div>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-brand-green/20 text-brand-green border border-brand-green/30">200 OK</span>
            </div>

            {/* Connecting Arrow */}
            <div className="flex justify-center -my-1 text-brand-green/60">
              <span className="text-xs">↓</span>
            </div>

            {/* Step 4: MongoDB & Cache */}
            <div className={`p-2.5 rounded-lg border transition-all duration-300 flex items-center justify-between ${
              activeStep === 3 
                ? 'border-brand-green bg-brand-green/10 text-brand-green shadow-glow-sm' 
                : 'border-bg-border bg-bg-surface/50 text-text-secondary'
            }`}>
              <div className="flex items-center gap-2.5">
                <Database className="w-4 h-4 text-brand-green-bright" />
                <div>
                  <div className="font-semibold text-text-primary">04 MongoDB Cluster</div>
                  <div className="text-[10px] text-text-secondary">Mongoose ODM • In-Memory Cache</div>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-bg-card border border-bg-border text-brand-green">42ms</span>
            </div>
          </div>
        </div>

        {/* FLOATING CARD 1: API STATUS (Top Right) */}
        <div 
          className="absolute -top-6 -right-6 bg-bg-card/95 border border-brand-green/40 p-3.5 rounded-xl shadow-2xl backdrop-blur-md font-mono text-xs z-20 transition-transform duration-300 hover:scale-105 hidden sm:block"
          style={{ transform: 'translateZ(35px)' }}
        >
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="text-[10px] text-text-secondary uppercase tracking-wider">API STATUS</span>
            <span className="flex items-center gap-1 text-[10px] text-brand-green font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
              ONLINE
            </span>
          </div>
          <div className="text-base font-bold text-brand-green-bright flex items-center gap-2">
            <span>200 OK</span>
            <CheckCircle2 className="w-4 h-4 text-brand-green" />
          </div>
          {/* Sparkline Graphic */}
          <div className="mt-2 pt-2 border-t border-bg-border flex items-center justify-between gap-3 text-[10px] text-text-secondary">
            <span>Response Time</span>
            <span className="text-brand-green font-bold">42ms</span>
          </div>
          <div className="flex items-end gap-1 h-5 mt-1.5">
            {[40, 25, 60, 30, 80, 45, 35, 70, 40].map((val, idx) => (
              <div
                key={idx}
                className="w-1.5 bg-brand-green/40 hover:bg-brand-green rounded-t transition-all"
                style={{ height: `${val}%` }}
              />
            ))}
          </div>
        </div>

        {/* FLOATING CARD 2: SYSTEM STATUS (Bottom Left) */}
        <div 
          className="absolute -bottom-6 -left-6 bg-bg-card/95 border border-brand-purple/40 p-3.5 rounded-xl shadow-2xl backdrop-blur-md font-mono text-xs z-20 transition-transform duration-300 hover:scale-105 hidden sm:block"
          style={{ transform: 'translateZ(45px)' }}
        >
          <div className="text-[10px] text-text-secondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Zap className="w-3 h-3 text-brand-purple" />
            <span>SYSTEM HEALTH</span>
          </div>
          <div className="space-y-1 text-[11px]">
            <div className="flex justify-between gap-4">
              <span className="text-text-secondary">Server:</span>
              <span className="text-brand-green font-semibold">● Online</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-text-secondary">Database:</span>
              <span className="text-brand-green font-semibold">● Connected</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-text-secondary">Uptime:</span>
              <span className="text-brand-purple font-semibold">99.9%</span>
            </div>
            <div className="flex justify-between gap-4 pt-1 border-t border-bg-border">
              <span className="text-text-secondary">APIs:</span>
              <span className="text-brand-green-bright font-bold">20+ Features</span>
            </div>
          </div>
        </div>

        {/* FLOATING CARD 3: REAL-TIME REQUEST BADGE (Bottom Right) */}
        <div 
          className="absolute -bottom-8 -right-4 bg-bg-card/95 border border-brand-cyan/40 px-3.5 py-2 rounded-lg shadow-2xl backdrop-blur-md font-mono text-[11px] z-20 hidden md:flex items-center gap-2 text-text-primary"
          style={{ transform: 'translateZ(55px)' }}
        >
          <span className="text-brand-cyan font-bold">REQUEST</span>
          <span className="text-text-secondary">GET /api/projects</span>
          <span className="text-brand-green font-semibold">200 OK</span>
        </div>
      </div>
    </div>
  );
};
