import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Github, 
  Linkedin, 
  FileText, 
  Activity, 
  Sparkles, 
  Terminal, 
  ShieldAlert,
  Layers
} from 'lucide-react';
import { HeroVisualizer } from './HeroVisualizer';
import { portfolioData } from '../../data/portfolioData';

export const HeroSection = ({ onOpenTerminal }) => {
  const [greetingText, setGreetingText] = useState('');
  const [typedTitle, setTypedTitle] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const fullGreeting = "Hello World! I'm";
  const titles = [
    "VRUTTI PATIL",
    "SOFTWARE DEVELOPER",
    "BACKEND DEVELOPER",
    "FULLSTACK DEVELOPER",
    "VRUTTI PATIL"
  ];

  // 1. Initial Typewriter for "Hello World! I'm"
  useEffect(() => {
    let charIdx = 0;
    const greetingTimer = setInterval(() => {
      if (charIdx <= fullGreeting.length) {
        setGreetingText(fullGreeting.substring(0, charIdx));
        charIdx++;
      } else {
        clearInterval(greetingTimer);
      }
    }, 65);

    return () => clearInterval(greetingTimer);
  }, []);

  // 2. Loop Typewriter for Title / Roles
  useEffect(() => {
    // Wait until greeting is almost typed
    const currentWord = titles[phraseIndex];
    let speed = isDeleting ? 45 : 100;

    if (!isDeleting && typedTitle === currentWord) {
      // Pause at full word before deleting
      speed = phraseIndex === 0 ? 3500 : 2000;
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, speed);
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting && typedTitle === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timer = setTimeout(() => {
      setTypedTitle((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [typedTitle, isDeleting, phraseIndex, titles]);

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Branding, Heading, Badges, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5 font-mono text-xs">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg-surface border border-brand-green/40 text-brand-green shadow-glow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                <span className="font-semibold tracking-wide">BACKEND DEVELOPER</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg-surface border border-brand-purple/40 text-brand-purple">
                <span className="w-2 h-2 rounded-full bg-brand-purple" />
                <span className="tracking-wide">AVAILABLE TO LEARN / COLLABORATE</span>
              </div>
            </div>

            {/* Greeting Typewriter */}
            <div className="mb-2 flex items-center gap-2">
              <span className="font-mono text-sm sm:text-base text-brand-green tracking-wide">
                {greetingText}
              </span>
              {greetingText.length < fullGreeting.length && (
                <span className="inline-block w-2 h-4 bg-brand-green animate-blink" />
              )}
            </div>

            {/* Main Title Typewriter Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-text-primary mb-5 font-mono min-h-[50px] sm:min-h-[75px] flex items-center">
              <span className="text-text-primary">{typedTitle}</span>
              <span className="terminal-cursor ml-2 shadow-[0_0_10px_#00FF66]" />
            </h1>

            {/* Sub-headline */}
            {/* <p className="text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed mb-8">
              Building <span className="text-brand-green font-semibold">robust backend systems</span> and{' '}
              <span className="text-brand-green font-semibold">scalable APIs</span> that power real-world applications.
            </p> */}

            {/* Academic Credential Pill */}
            {/* <div className="mb-8 p-3 rounded-lg bg-bg-surface/60 border border-bg-border text-xs font-mono text-text-secondary flex items-center gap-2 max-w-xl">
              <span className="text-brand-green font-bold">&gt;</span>
              <span>
                <strong className="text-text-primary">B.Tech Computer Science &amp; Engineering</strong> at ITM Skills University (CGPA: 9.45 / 10)
              </span>
            </div> */}

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              {/* <a
                href="#projects"
                data-cursor="PROJECTS"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-green text-black font-mono text-xs sm:text-sm font-bold shadow-glow-md hover:shadow-glow-lg hover:bg-brand-green-bright transition-all duration-200"
              >
                <span>&gt; View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a> */}

              {/* <a
                href="#contact"
                data-cursor="CONTACT"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-bg-surface border border-bg-border hover:border-brand-purple text-text-primary hover:text-brand-purple font-mono text-xs sm:text-sm transition-all duration-200"
              >
                <span>&gt; Contact Me</span>
                <Mail className="w-4 h-4" />
              </a> */}

              {/* <a
                href="#api-console"
                data-cursor="TEST API"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-bg-surface border border-brand-green/30 hover:border-brand-green text-brand-green font-mono text-xs transition-all duration-200"
                title="Open Live API Diagnostics"
              >
                <Activity className="w-4 h-4" />
                <span>Test API Console</span>
              </a> */}
            </div>

            {/* Social Buttons Strip */}
            <div className="flex items-center gap-3 pt-4 border-t border-bg-border/60 w-full font-mono text-xs">
              <span className="text-text-muted mr-1 hidden sm:inline">$ connect:</span>

              <a
                href="https://github.com/Vrutti88"
                target="_blank"
                rel="noreferrer"
                data-cursor="GITHUB"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-bg-surface/80 border border-bg-border hover:border-brand-green hover:text-brand-green text-text-secondary transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/vruttipatil/"
                target="_blank"
                rel="noreferrer"
                data-cursor="LINKEDIN"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-bg-surface/80 border border-bg-border hover:border-brand-green hover:text-brand-green text-text-secondary transition-all"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:vruttipatil1396@gmail.com"
                data-cursor="EMAIL"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-bg-surface/80 border border-bg-border hover:border-brand-green hover:text-brand-green text-text-secondary transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>

              <a
                href="#resume-section"
                data-cursor="RESUME"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-bg-surface/80 border border-brand-green/40 text-brand-green hover:bg-brand-green/10 transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive System Architecture Visualization */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroVisualizer />
          </div>
        </div>
      </div>
    </section>
  );
};
