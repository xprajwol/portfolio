import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { postContact } from '../hooks/useApi';
import './Contact.css';

const contactLinks = [
  { icon: '✉', label: 'xprajwol6@gmail.com', href: 'mailto:xprajwol6@gmail.com', note: '(update this)' },
  { icon: 'GH', label: 'github.com/xrajwal', href: 'https://github.com/xrajwal' },
  { icon: 'LI', label: 'linkedin.com/in/xrajwal', href: '#' },
  { icon: '📍', label: 'Kathmandu, Nepal', href: '#' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errMsg, setErrMsg] = useState('');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setErrMsg('All fields are required.');
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      await postContact(form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setErrMsg(err.response?.data?.error || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <PageWrapper>
      <div className="section-wrap">
        <div className="section-eyebrow">// CONTACT</div>
        <h2 className="section-title">Get in Touch</h2>

        <div className="contact-grid">
          {/* Left — info */}
          <motion.div
            className="contact-intro"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p>I'm open to collaboration, mentorship, project ideas, or just a conversation about CS, AI, or football. If you're from Softwarica or Coventry University — hello!</p>
            <p>Use the form or reach out directly through any of the links below.</p>
            <div className="contact-links">
              {contactLinks.map(l => (
                <a className="contact-link" href={l.href} key={l.label} target="_blank" rel="noreferrer">
                  <span className="icon">{l.icon}</span>
                  {l.label}
                  {l.note && <span className="link-note">{l.note}</span>}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="form-group">
              <label htmlFor="name">// NAME</label>
              <input
                id="name" name="name" type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">// EMAIL</label>
              <input
                id="email" name="email" type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">// MESSAGE</label>
              <textarea
                id="message" name="message"
                rows={5}
                placeholder="What's on your mind?"
                value={form.message}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
            </div>

            {status === 'success' && (
              <div className="form-feedback success">
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="form-feedback error">⚠ {errMsg}</div>
            )}

            <button
              type="submit"
              className="btn-primary"
              disabled={status === 'loading'}
              style={{ width: 'fit-content' }}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
      <footer>Built by <span>Prajwal</span> &nbsp;·&nbsp; Nepal &nbsp;·&nbsp; 2026</footer>
    </PageWrapper>
  );
}
