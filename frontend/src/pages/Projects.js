import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { useFetch } from '../hooks/useApi';
import './Projects.css';

export default function Projects() {
  const { data: projects, loading, error } = useFetch('/api/projects');

  return (
    <PageWrapper>
      <div className="section-wrap">
        <div className="section-eyebrow">// PROJECTS</div>
        <h2 className="section-title">Things I've Built</h2>

        {loading && (
          <div className="projects-loading">
            <div className="loading-bar" />
            <p>Loading projects from server...</p>
          </div>
        )}

        {error && (
          <div className="projects-error">
            <p>⚠ Could not reach the API. Make sure your backend is running.</p>
            <p className="error-detail">{error}</p>
          </div>
        )}

        {projects && (
          <div className="projects-grid">
            {projects.map((p, i) => (
              <motion.div
                className="project-card"
                key={p._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
              >
                <div className="project-accent" />
                <div className="project-type">// {p.category?.toUpperCase() || 'PROJECT'}</div>
                <div className="project-name">{p.title}</div>
                <div className="project-desc">{p.longDescription || p.description}</div>
                <div className="tech-stack">
                  {p.techStack?.map(t => (
                    <span className="tech" key={t}>{t}</span>
                  ))}
                </div>
                {(p.githubUrl || p.liveUrl) && (
                  <div className="project-links">
                    {p.githubUrl && (
                      <a href={p.githubUrl} target="_blank" rel="noreferrer" className="project-link">
                        GitHub →
                      </a>
                    )}
                    {p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" rel="noreferrer" className="project-link live">
                        Live Demo →
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ))}

            {/* Placeholder card */}
            <div className="project-card placeholder">
              <div className="project-type">// UPCOMING</div>
              <div className="project-name">More coming soon...</div>
              <div className="project-desc">
                Building more projects as part of university preparation — AI tools, web apps, and data projects.
              </div>
              <div className="tech-stack"><span className="tech">TBD</span></div>
            </div>
          </div>
        )}
      </div>
      <footer>Built by <span>Xrajwal</span> &nbsp;·&nbsp; Nepal &nbsp;·&nbsp; 2026</footer>
    </PageWrapper>
  );
}
