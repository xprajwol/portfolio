import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import './About.css';

const skills = [
  { name: 'Python', level: 80, sub: 'Primary Language' },
  { name: 'OpenCV', level: 70, sub: 'Computer Vision' },
  { name: 'Machine Learning', level: 60, sub: 'LBPH / Algorithms' },
  { name: 'Mathematics', level: 75, sub: 'NEB Grade XII' },
  { name: 'Problem Solving', level: 72, sub: 'Debugging & Systems' },
];

const tools = ['Python', 'OpenCV', 'pyttsx3', 'NumPy', 'Git', 'VS Code', 'Linux'];
const interests = ['🇦🇷 Football', '🎵 Music', '🔍 Fact-Checking', '🧠 AI/ML', '📡 Computer Vision', '📚 History'];

export default function About() {
  return (
    <PageWrapper>
      <div className="section-wrap">
        <div className="section-eyebrow">// ABOUT_ME</div>
        <h2 className="section-title">Who I Am</h2>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p>I'm <strong>Prajwal</strong>, a student based in <strong>Kathmandu, Nepal</strong>, currently completing NEB 10+2 (Grade XII). My focus lies at the intersection of software engineering and artificial intelligence.</p>
            <p>I enjoy building things that actually work — my most significant project is a <strong>real-time face detection and recognition system</strong> built with Python, OpenCV, and LBPH algorithms, complete with voice announcement features.</p>
            <p>Outside code, I follow football passionately (Real Madrid), enjoy Nepali and Bollywood music, and have a deep interest in how technology shapes our understanding of truth — from fact-checking viral claims to exploring the history of ideas.</p>
            <div className="interest-tags">
              {interests.map(i => <span className="tag" key={i}>{i}</span>)}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Skills panel */}
            <div className="skills-panel">
              <h3>// TECH_STACK</h3>
              {skills.map((s, i) => (
                <div className="skill-row" key={s.name}>
                  <div className="skill-name">
                    {s.name} <span>{s.sub}</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-fill"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.6, ease: 'easeOut' }}
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tools panel */}
            <div className="skills-panel" style={{ marginTop: '1rem' }}>
              <h3>// TOOLS</h3>
              <div className="interest-tags">
                {tools.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <footer>Built by <span>Prajwal</span> &nbsp;·&nbsp; Nepal &nbsp;·&nbsp; 2026</footer>
    </PageWrapper>
  );
}
