# 🏗️ B2B Tender Management Platform

A full-stack B2B platform that enables companies to:

- 🔐 Register & manage profiles
- 📢 Create & publish tenders
- 🔎 Browse & search tenders/companies
- 📄 Apply to tenders
- 💾 Upload company logos using Supabase

---

## 📁 Project Structure

B2B-TENDER-MANAGEMENT-PLATFORM/
│
├── backend/ # Express + Sequelize + PostgreSQL API
│ ├── src/
│ ├── utils/
│ ├── .env
│ └── package.json
│
├── frontend/ # Next.js + Tailwind frontend
│ ├── pages/
│ ├── styles/
│ └── package.json

yaml
Copy
Edit

---

## ⚙️ Tech Stack

### 🔧 Backend

- Node.js + Express.js
- PostgreSQL (via Sequelize)
- JWT-based Authentication
- Supabase Storage (for file uploads)

### 💻 Frontend

- Next.js (TypeScript)
- Tailwind CSS
- Axios for API calls

---

## 🚀 Getting Started

### 🔨 Backend Setup

1. **Configure PostgreSQL**: Create a database named `Tender` in pgAdmin or CLI.
2. **Add `.env` in `/backend`**:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=Tender
DB_USER=postgres
DB_PASS=your_db_password
JWT_SECRET=your_jwt_secret
PORT=5000
Run Backend:

bash
Copy
Edit
cd backend
npm install
npm run dev
✅ Server runs at http://localhost:5000

💻 Frontend Setup
Navigate to frontend:

bash
Copy
Edit
cd frontend
npm install
npm run dev
Visit App:
Open http://localhost:3000 in your browser.

🛠️ Features
✅ Company Registration & Login

✅ Create/View Tenders

✅ Apply to Tenders

✅ Company Profile Management

✅ Search Companies by name or industry

✅ JWT Authentication with protected routes

✅ Supabase File Uploads (e.g., logos)

🧪 Sample API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register a company
POST	/api/auth/login	Login to get JWT
GET	/api/company	Get all companies
POST	/api/tender	Create a new tender
GET	/api/tender	List all tenders
POST	/api/apply/:tenderId	Apply to a tender

📷 Screenshots
Include screenshots or a Loom walkthrough here (if available)

📦 Deployment Suggestions
Backend: Host on Render or Railway

Frontend: Deploy via Vercel

DB: Use Supabase or ElephantSQL

👤 Author
Gautam Gupta

GitHub: @GAUTAMGUPTA0004

📝 License
This project is for educational and internship use. Customize as needed.
