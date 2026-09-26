const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Seed data — runs once if DB is empty
const seedProjects = [
  {
    title: 'Real-Time Face Detection & Recognition System',
    description: 'Live face recognition pipeline with voice announcements using webcam feed.',
    longDescription:
      'A real-time computer vision system that detects and recognises faces from a live webcam stream. Trained on a custom dataset using the LBPH (Local Binary Pattern Histogram) algorithm. Announces recognised names aloud via pyttsx3 text-to-speech. Resolved production-level bugs including a corrupted OpenCV installation and Windows-specific TTS silent failures by implementing a per-call engine instantiation pattern.',
    techStack: ['Python', 'OpenCV', 'LBPH', 'pyttsx3', 'NumPy'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/xrajwal',
    featured: true,
    order: 1
  }
];

async function ensureSeed() {
  const count = await Project.countDocuments();
  if (count === 0) {
    await Project.insertMany(seedProjects);
    console.log('✅ Projects seeded');
  }
}

// GET /api/projects
router.get('/', async (req, res) => {
  try {
    await ensureSeed();
    const projects = await Project.find().sort({ order: 1, createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch projects.' });
  }
});

// GET /api/projects/:id
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch project.' });
  }
});

module.exports = router;
