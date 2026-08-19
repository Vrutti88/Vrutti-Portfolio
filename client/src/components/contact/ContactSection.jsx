import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Terminal, 
  Sparkles, 
  Clock 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sendContactMessage } from '../../utils/apiClient';
import { portfolioData } from '../../data/portfolioData';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' }); // 'idle' | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', message: 'Transmitting payload to backend REST server...' });

    const result = await sendContactMessage(formData);

    if (result.ok) {
      setStatus({
        state: 'success',
        message: '✓ MESSAGE TRANSMITTED SUCCESSFULLY — Logged to server queue.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Trigger celebratory cyber confetti
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#00FF66', '#39FF88', '#A855F7', '#00F0FF']
        });
      } catch (err) {
        // Safe fallback
      }
    } else {
      setStatus({
        state: 'error',
        message: `✕ TRANSMISSION FAILED: ${result.error || 'Server error occurred'}`
      });
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-bg-border">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brand-green uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>[10] COMMUNICATION DISPATCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary font-sans">
              LET'S BUILD SOMETHING AMAZING
            </h2>
          </div>

          <p className="text-sm font-mono text-text-secondary mt-2 md:mt-0 max-w-md">
            I'm always open to discussing backend projects, scalable architectures, and collaborative opportunities.
          </p>
        </div>

        {/* Master Grid: Left Form | Right Contact Coordinates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Terminal Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-bg-card border border-brand-green/30 shadow-2xl overflow-hidden font-mono text-xs">
              {/* Terminal Titlebar */}
              <div className="bg-bg-surface px-5 py-3 border-b border-bg-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-brand-green/80" />
                  <span className="text-text-secondary ml-2 flex items-center gap-1.5 font-bold">
                    <Terminal className="w-3.5 h-3.5 text-brand-green" />
                    $ send_message --dispatch=api
                  </span>
                </div>

                <span className="text-[10px] text-brand-green uppercase tracking-wider">
                  POST /api/contact
                </span>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-bg-darkest border-t border-bg-border/60">
                <div className="space-y-1.5">
                  <label className="text-text-secondary flex items-center justify-between">
                    <span>name: <span className="text-brand-green">*</span></span>
                    <span className="text-[10px] text-text-muted">Sender Identity</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Turing"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-bg-surface border border-bg-border text-text-primary focus:outline-none focus:border-brand-green font-mono text-xs transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-text-secondary flex items-center justify-between">
                    <span>email: <span className="text-brand-green">*</span></span>
                    <span className="text-[10px] text-text-muted">Reply Coordinates</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@developer.io"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-bg-surface border border-bg-border text-text-primary focus:outline-none focus:border-brand-green font-mono text-xs transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-text-secondary flex items-center justify-between">
                    <span>subject: <span className="text-brand-green">*</span></span>
                    <span className="text-[10px] text-text-muted">Topic / Opportunity</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Backend Internship / Project Collaboration"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-bg-surface border border-bg-border text-text-primary focus:outline-none focus:border-brand-green font-mono text-xs transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-text-secondary flex items-center justify-between">
                    <span>message: <span className="text-brand-green">*</span></span>
                    <span className="text-[10px] text-text-muted">Max 3000 chars</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter project specifications, ideas, or inquiry..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-bg-surface border border-bg-border text-text-primary focus:outline-none focus:border-brand-green font-mono text-xs transition-colors resize-none"
                  />
                </div>

                {/* Status Message Display */}
                {status.state !== 'idle' && (
                  <div
                    className={`p-3 rounded-lg border flex items-start gap-2 text-xs leading-relaxed animate-fadeIn ${
                      status.state === 'success'
                        ? 'bg-brand-green/10 border-brand-green text-brand-green-bright'
                        : status.state === 'error'
                        ? 'bg-red-500/10 border-red-500 text-red-400'
                        : 'bg-brand-purple/10 border-brand-purple text-brand-purple'
                    }`}
                  >
                    {status.state === 'success' ? (
                      <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    ) : status.state === 'error' ? (
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Clock className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5 animate-spin" />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={status.state === 'loading'}
                  data-cursor="SEND"
                  className="w-full py-3 rounded-lg bg-brand-green text-black font-bold text-xs shadow-glow-sm hover:shadow-glow-md hover:bg-brand-green-bright transition-all flex items-center justify-center gap-2"
                >
                  <Send className={`w-4 h-4 ${status.state === 'loading' ? 'animate-pulse' : ''}`} />
                  <span>[ EXECUTE SEND_MESSAGE ]</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Direct Contact Info Coordinates */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <a
              href={`mailto:${portfolioData.profile.email}`}
              data-cursor="EMAIL"
              className="p-5 rounded-2xl bg-bg-card border border-bg-border hover:border-brand-green/50 transition-all block group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-brand-green/10 text-brand-green group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">Direct Email</div>
                  <div className="text-sm font-mono font-bold text-text-primary group-hover:text-brand-green transition-colors">
                    {portfolioData.profile.email}
                  </div>
                </div>
              </div>
              <p className="text-xs text-text-secondary font-sans">
                Best for project proposals, technical inquiries, and recruitment.
              </p>
            </a>

            {/* LinkedIn Card */}
            <a
              href={portfolioData.profile.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="LINKEDIN"
              className="p-5 rounded-2xl bg-bg-card border border-bg-border hover:border-brand-purple/50 transition-all block group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-brand-purple/10 text-brand-purple group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">Professional Network</div>
                  <div className="text-sm font-mono font-bold text-text-primary group-hover:text-brand-purple transition-colors">
                    linkedin.com/in/vruttipatil
                  </div>
                </div>
              </div>
              <p className="text-xs text-text-secondary font-sans">
                Connect for professional networking and technical discussions.
              </p>
            </a>

            {/* GitHub Card */}
            <a
              href={portfolioData.profile.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="GITHUB"
              className="p-5 rounded-2xl bg-bg-card border border-bg-border hover:border-brand-cyan/50 transition-all block group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-brand-cyan/10 text-brand-cyan group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">Source Repositories</div>
                  <div className="text-sm font-mono font-bold text-text-primary group-hover:text-brand-cyan transition-colors">
                    github.com/Vrutti88
                  </div>
                </div>
              </div>
              <p className="text-xs text-text-secondary font-sans">
                Explore source code, project commits, and documentation.
              </p>
            </a>

            {/* Location Card */}
            {/* <div className="p-5 rounded-2xl bg-bg-card border border-bg-border font-mono text-xs space-y-1">
              <div className="flex items-center gap-2 text-text-secondary mb-1">
                <MapPin className="w-4 h-4 text-brand-green" />
                <span className="uppercase tracking-wider text-[10px]">Location</span>
              </div>
              <div className="font-bold text-text-primary">{portfolioData.profile.location}</div>
              <div className="text-[11px] text-text-muted">Timezone: IST (UTC+05:30) • Open to Remote &amp; On-Site</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
