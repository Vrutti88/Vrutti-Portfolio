import React from 'react';
import { 
  Globe, 
  Server, 
  Database, 
  ShieldCheck, 
  Cloud, 
  Cpu, 
  Key, 
  HardDrive, 
  Layout, 
  ShoppingCart, 
  Layers, 
  GitBranch, 
  Terminal, 
  Package,
  Zap
} from 'lucide-react';

export const ArchitectureDiagram = ({ nodes = [] }) => {
  if (!nodes || nodes.length === 0) return null;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'react': return Globe;
      case 'server': return Server;
      case 'shield': return ShieldCheck;
      case 'database': return Database;
      case 'user': return Globe;
      case 'cpu': return Cpu;
      case 'key': return Key;
      case 'cloud': return Cloud;
      case 'figma': return Layout;
      case 'layout': return Layers;
      case 'cart': return ShoppingCart;
      case 'hard-drive': return HardDrive;
      case 'git': return GitBranch;
      case 'terminal': return Terminal;
      case 'package': return Package;
      default: return Server;
    }
  };

  return (
    <div className="w-full bg-[#05080D] border border-bg-border rounded-xl p-3.5 my-3 font-mono text-xs select-none">
      <div className="text-[10px] text-text-muted uppercase tracking-wider mb-2.5 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-text-secondary font-bold">
          <Zap className="w-3 h-3 text-brand-green" />
          Architecture Flow
        </span>
        <span className="flex items-center gap-1 text-brand-green text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
          <span>Active Pipeline</span>
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 relative">
        {nodes.map((node, index) => {
          const Icon = getIcon(node.icon);
          return (
            <div key={index} className="flex items-center">
              {/* Node Card */}
              <div className="w-full p-2.5 rounded-lg bg-bg-surface/80 border border-bg-border hover:border-brand-green/60 hover:shadow-glow-sm transition-all duration-200 group/node flex flex-col justify-between hover:-translate-y-0.5">
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon className="w-3.5 h-3.5 text-brand-green group-hover/node:scale-115 transition-transform" />
                  <span className="font-bold text-text-primary text-[11px] truncate group-hover/node:text-brand-green transition-colors">
                    {node.name}
                  </span>
                </div>
                <span className="text-[9px] text-text-secondary line-clamp-1">
                  {node.role}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
