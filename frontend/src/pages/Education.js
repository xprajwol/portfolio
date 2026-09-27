import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import './Education.css';

const timeline = [
  {
    year: '2026 – 2030 .Current',
    degree: 'BSc (Hons) Computer Science with Artificial Intelligence',
    institution: 'Softwarica College of IT & E-Commerce · Coventry University, UK',
    description: 'Planning to pursue a bachelor\'s degree specialising in AI and software systems. The programme covers machine learning, data structures, algorithms, software engineering, and AI ethics.',
    badge: '41B',
    color: 'var(--cyan)',
    dotColor: 'var(--cyan)',
  },
  {
    year: '2024 – 2026',
    degree: 'NEB 10+2 — Grade XII (Science)',
    institution: 'Nepal Education Board · Nepal',
    collage: 'dhambojhi secondary school',
    description: 'Completing higher secondary education with a focus on Physics, Mathematics, and Computer Science. Topics include complex numbers, conic sections, differential equations, semiconductor physics, and diffraction.',
    badge: 'Completed',
    color: 'var(--violet)',
    dotColor: 'var(--violet)',
  },
  {
    year: 'PRIOR',
    degree: 'SEE — Secondary Education Examination',
    institution: 'Nepal Education Board',
    collage: 'dhambojhi secondary school',
    description: 'Completed the SEE (formerly SLC), Nepal\'s national Grade 10 board examination, laying the foundation in sciences and mathematics.',
    badge: 'Completed',
    color: 'var(--muted)',
    dotColor: 'var(--muted)',
  },
];

export default function Education() {
  return (
    <PageWrapper>
      <div className="section-wrap">
        <div className="section-eyebrow">// EDUCATION</div>
        <h2 className="section-title">Academic Path</h2>

        <div className="edu-timeline">
          {timeline.map((item, i) => (
            <motion.div
              className="edu-item"
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 * i + 0.2 }}
            >
              <div className="edu-dot" style={{ borderColor: item.dotColor }}>
                <div className="edu-dot-inner" style={{ background: item.dotColor }} />
              </div>
              <div className="edu-card" style={{ borderColor: `${item.color}22` }}>
                <div className="edu-year" style={{ color: item.color }}>{item.year}</div>
                <div className="edu-degree">{item.degree}</div>
                <div className="edu-inst">{item.institution}</div>
                <div className="edu-desc">{item.description}</div>
                <span className="edu-badge" style={{ color: item.color, borderColor: `${item.color}44` }}>
                  {item.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <footer>Built by <span>Prajwal</span> &nbsp;·&nbsp; Nepal &nbsp;·&nbsp; 2026</footer>
    </PageWrapper>
  );
}
