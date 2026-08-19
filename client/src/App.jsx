import React, { useState, useEffect } from 'react';
import { BackgroundGrid } from './components/common/BackgroundGrid';
import { CustomCursor } from './components/common/CustomCursor';
import { ScrollProgress } from './components/common/ScrollProgress';
import { BootLoader } from './components/common/BootLoader';
import { Navbar } from './components/common/Navbar';
import { CommandPalette } from './components/common/CommandPalette';
import { TerminalModal } from './components/common/TerminalModal';
import { HeroSection } from './components/hero/HeroSection';
import { LiveStatsStrip } from './components/stats/LiveStatsStrip';
import { TechArsenal } from './components/tech/TechArsenal';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { ApiMonitor } from './components/api-console/ApiMonitor';
import { SystemArchitecture } from './components/system-arch/SystemArchitecture';
import { AboutSection } from './components/about/AboutSection';
import { EngineeringJourney } from './components/journey/EngineeringJourney';
import { AchievementsSection } from './components/achievements/AchievementsSection';
import { GitHubDashboard } from './components/github/GitHubDashboard';
import { ResumeSection } from './components/resume/ResumeSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/common/Footer';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export function App() {
  // Smooth scroll hook
  useSmoothScroll();

  const [booting, setBooting] = useState(() => {
    return !sessionStorage.getItem('vrutti_os_booted');
  });
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Keyboard shortcut listener (Cmd+K / Ctrl+K & ~)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
      if (e.key === '`' || e.key === '~') {
        if (!['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
          e.preventDefault();
          setTerminalOpen((prev) => !prev);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleBootComplete = () => {
    sessionStorage.setItem('vrutti_os_booted', 'true');
    setBooting(false);
  };

  return (
    <div className="relative min-h-screen bg-bg-darkest text-text-primary selection:bg-brand-green selection:text-black">
      {/* Boot Sequence Loader */}
      {booting && <BootLoader onComplete={handleBootComplete} />}

      {/* Cyber Background Grid & Canvas Particles */}
      <BackgroundGrid />

      {/* Custom Desktop Glowing Cursor */}
      <CustomCursor />

      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Navigation Command Center Header */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection onOpenTerminal={() => setTerminalOpen(true)} />
        <AboutSection />
        {/* <LiveStatsStrip /> */}
        <TechArsenal />
        <ProjectsSection />
        <ApiMonitor />
        <EngineeringJourney />
        {/* <AchievementsSection /> */}
        <SystemArchitecture />
        <GitHubDashboard />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Developer Footer */}
      <Footer />

      {/* Command Palette Modal (Cmd+K / Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Interactive Terminal Shell (Easter Egg) */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}

export default App;
