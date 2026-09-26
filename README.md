# Xrajwal — Full-Stack Portfolio

**Stack:** React + Express + MongoDB Atlas  
**Free Hosting:** Vercel (frontend) + Railway (backend) + MongoDB Atlas (database)

---

## 📁 Project Structure

```
portfolio/
├── frontend/          ← React app (Vercel)
│   ├── src/
│   │   ├── pages/     ← Home, About, Education, Projects, Contact
│   │   ├── components/← Navbar, PageWrapper
│   │   └── hooks/     ← useApi.js (axios calls to backend)
│   └── package.json
│
└── backend/           ← Express API (Railway)
    ├── models/        ← Message.js, Project.js (Mongoose)
    ├── routes/        ← contact.js, projects.js
    └── server.js
```

---

## 🚀 Deployment (100% Free)

### Step 1 — MongoDB Atlas (Database)
1. Go to https://mongodb.com/atlas → Free account
2. Create a free **M0 cluster** (512MB — more than enough)
3. Database Access → Add user (username + password)
4. Network Access → Add IP → **0.0.0.0/0** (allow all)
5. Connect → Drivers → Copy the connection string:
   `mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/portfolio`

### Step 2 — Backend on Railway
1. Go to https://railway.app → Sign up free (GitHub login)
2. New Project → Deploy from GitHub → select your repo
3. Select the `backend` folder as root
4. Add environment variables:
   ```
   MONGODB_URI=mongodb+srv://...
   EMAIL_USER=your@gmail.com
   EMAIL_PASS=your_gmail_app_password
   FRONTEND_URL=https://YOUR_VERCEL_URL.vercel.app
   PORT=5000
   ADMIN_SECRET=any_secret_key_you_choose
   ```
5. Deploy → Railway gives you a URL like `https://portfolio-api.up.railway.app`

### Step 3 — Frontend on Vercel
1. Go to https://vercel.com → Sign up free (GitHub login)
2. Import your GitHub repo → select `frontend` folder as root
3. Add environment variable:
   ```
   REACT_APP_API_URL=https://YOUR_RAILWAY_URL.up.railway.app
   ```
4. Deploy → get URL like `https://xrajwal.vercel.app`
5. Go back to Railway → update `FRONTEND_URL` with your Vercel URL → redeploy

### Step 4 — Go back and update Railway
After Vercel gives you your URL, update Railway's `FRONTEND_URL` env var.

---

## 💻 Running Locally

```bash
# Terminal 1 — Backend
cd backend
cp .env.example .env      # fill in your values
npm install
npm run dev               # runs on http://localhost:5000

# Terminal 2 — Frontend
cd frontend
cp .env.example .env      # set REACT_APP_API_URL=http://localhost:5000
npm install
npm start                 # runs on http://localhost:3000
```

---

## ✏️ Customising

- **Add a project:** Go to Railway console → your MongoDB → insert a document into `projects` collection
- **Update email:** Edit `contactLinks` in `frontend/src/pages/Contact.js`
- **Update GitHub/LinkedIn:** Same file, update the `href` values
- **Read messages:** `GET /api/contact` with header `x-admin-secret: YOUR_SECRET`

---

## 🔧 Gmail App Password Setup
1. Google Account → Security → 2-Step Verification → ON
2. App passwords → Select app: Mail → Generate
3. Copy the 16-char password → paste as `EMAIL_PASS`
