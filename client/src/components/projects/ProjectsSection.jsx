import React, { useState, useEffect } from 'react';
import { FolderGit2, Sparkles, Filter, Code2, Layers } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { CaseStudyModal } from './CaseStudyModal';
import { portfolioData } from '../../data/portfolioData';
import { fetchProjects } from '../../utils/apiClient';

export const ProjectsSection = () => {
  const [projects, setProjects] = useState(portfolioData.projects);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        if (isMounted && data && Array.isArray(data) && data.length > 0) {
          // Merge API data with portfolioData to ensure rich fields are never lost
          const merged = data.map((apiProj) => {
            const local = portfolioData.projects.find(
              (p) => p.id === apiProj.id || p.shortTitle === apiProj.shortTitle || p.slug === apiProj.slug
            );
            return { ...(local || {}), ...apiProj };
          });
          setProjects(merged.length > 0 ? merged : portfolioData.projects);
        }
      } catch (err) {
        console.warn('Using local seed projects:', err);
      }
    };
    loadProjects();
    return () => { isMounted = false; };
  }, []);

  const filters = [
    { id: 'ALL', label: 'All Projects' },
    { id: 'MERN', label: 'MERN / Full-Stack' },
    { id: 'FIREBASE', label: 'Firebase / Cloud' },
    { id: 'UI / UX', label: 'Frontend / UI' },
    { id: 'CLOUD', label: 'Cloud Architecture' },
    { id: 'DEVOPS', label: 'DevOps & CI/CD' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'ALL') return true;
    const filterKey = activeFilter.toLowerCase().replace(/\s+/g, '');
    const badge = (p.badge || '').toLowerCase().replace(/\s+/g, '');
    const category = (p.category || '').toLowerCase().replace(/\s+/g, '');
    return badge.includes(filterKey) || category.includes(filterKey);
  });

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-bg-border">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brand-green uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>[03] FEATURED PROJECTS &amp; CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary font-sans">
              Production Architecture Showcases
            </h2>
          </div>

          <p className="text-sm font-mono text-text-secondary mt-2 md:mt-0 max-w-md">
            Engineered systems with real REST APIs, authentication security, database indexing, and interactive architecture flows.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              data-cursor="FILTER"
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all duration-200 border ${
                activeFilter === filter.id
                  ? 'border-brand-green bg-brand-green/15 text-brand-green shadow-glow-sm'
                  : 'border-bg-border bg-bg-surface/70 text-text-secondary hover:border-brand-green/40 hover:text-text-primary'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id || project.shortTitle}
              project={project}
              onSelectCaseStudy={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
