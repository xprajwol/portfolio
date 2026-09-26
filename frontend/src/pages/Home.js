import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import './Home.css';

export default function Home() {
  const nav = useNavigate();

  return (
    <PageWrapper>
      <div className="home-container">
        {/* Corner decorations */}
        <div className="corner-tl" />
        <div className="corner-br" />

        <motion.div
          className="home-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <motion.div
            className="home-tag"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            // PORTFOLIO_v1.0 — XRAJWAL
          </motion.div>

          <motion.h1
            className="home-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Raj<span>wal</span>
          </motion.h1>

          <motion.p
            className="home-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            CS &amp; AI Student &nbsp;·&nbsp; Developer &nbsp;·&nbsp; Builder
          </motion.p>

          <motion.p
            className="home-bio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            Engineering student from Nepal, exploring the intersection of computer science 
            and artificial intelligence. I build real things — from face-recognition systems 
            to intelligent tools — while preparing for a BSc in CS with AI.
          </motion.p>

          <motion.div
            className="home-btns"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            <button className="btn-primary" onClick={() => nav('/projects')}>
              View Projects
            </button>
            <button className="btn-outline" onClick={() => nav('/contact')}>
              Get in Touch
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="home-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { num: '01+', label: 'Projects' },
            { num: 'NEB', label: 'Grade XII' },
            { num: 'NPL', label: 'Based in' },
          ].map(s => (
            <div className="stat-item" key={s.label}>
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
      <footer>
        Built by <span>Xrajwal</span> &nbsp;·&nbsp; Nepal &nbsp;·&nbsp; 2026
      </footer>
    </PageWrapper>
  );
}
