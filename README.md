# 🚀 B2B Tender Management Platform

A comprehensive **full-stack tender management system** that enables companies to create, manage, and bid on business tenders efficiently.

---

## 🔐 Authentication & Authorization

- Secure user registration and login system  
- Role-based access control using **Passport.js**  
- Session management and password encryption  

---

## 🏢 Company Profile Management

- Complete CRUD operations for company profiles  
- Manage metadata: name, industry, description  
- Logo/image upload via **Supabase Storage**  
- Dynamic image URL retrieval and display  

---

## 📋 Tender Management

- Full CRUD operations on tenders  
- Tender details: title, description, deadline, budget  
- Paginated listings for performance  
- Company-specific tender dashboards  

---

## 💼 Application Workflow

- Proposal submission and tracking  
- Real-time application status updates  
- Application history management  

---

## 🔍 Advanced Search & Discovery

- Multi-criteria search: company name, industry, products/services  
- Server-side optimized queries  
- Paginated search results  

---

## 🛠️ Technology Stack

### Frontend

- **Next.js** (React + SSR)  
- **React (JSX)**  
- **Tailwind CSS**  
- Form validation and error handling  

### Backend

- **Express.js** (Node.js)
- **Passport.js** for authentication  
- **Joi/Zod** for input validation  
- Modular routing (JavaScript, not TypeScript)  

### Database

- **PostgreSQL**  
- **Sequelize ORM** with CLI  

### Storage

- **Supabase Storage**  
- Image compression and optimization  

---

## 📁 Project Structure
tender-management-platform/
├── frontend/ # Next.js frontend (JSX)
│ ├── pages/ # Next.js pages
│ ├── components/ # React components
│ ├── styles/ # Tailwind CSS styles
│ └── utils/ # Helper functions
├── backend/ # Express.js backend (JavaScript)
│ ├── routes/ # API endpoints
│ │ ├── auth.js
│ │ ├── company.js
│ │ ├── tender.js
│ │ └── application.js
│ ├── models/ # Sequelize models
│ ├── middleware/ # Auth and error middleware
│ ├── config/ # Config files
│ └── migrations/ # DB migrations
├── database/
│ ├── migrations/
│ └── seeders/
└── docs/ # Documentation

yaml
Copy
Edit

---

## 🗄️ Database Schema

### Core Tables

- `users` – Auth & user data  
- `companies` – Profile & metadata  
- `tenders` – Tender details  
- `applications` – Bids/proposals  
- `goods_services` – Products/services catalog  

### Key Relationships

- Users → Companies (**1:1**)  
- Companies → Tenders (**1:N**)  
- Tenders → Applications (**1:N**)  
- Companies → Applications (**1:N**)  

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v16+)  
- PostgreSQL (v12+)  
- npm or yarn  

---

### 🔧 Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with DB and Supabase credentials
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all  # optional
npm run dev
🔧 Frontend Setup
bash
Copy
Edit
cd frontend
npm install
cp .env.local.example .env.local
# Edit with API and Supabase keys
npm run dev
🔐 Environment Variables
Backend (.env)
ini
Copy
Edit
# DB
DB_HOST=localhost
DB_PORT=5432
DB_NAME=tender_management
DB_USER=your_username
DB_PASSWORD=your_password

# Auth
JWT_SECRET=your_jwt_secret
SESSION_SECRET=your_session_secret

# Supabase
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_KEY=your_supabase_service_key

# Server
PORT=5000
NODE_ENV=development
Frontend (.env.local)
ini
Copy
Edit
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
📚 API Endpoints
Authentication
POST /api/auth/register

POST /api/auth/login

POST /api/auth/logout

Company Management
GET /api/companies

GET /api/companies/:id

POST /api/companies

PUT /api/companies/:id

DELETE /api/companies/:id

Tender Management
GET /api/tenders

GET /api/tenders/:id

POST /api/tenders

PUT /api/tenders/:id

DELETE /api/tenders/:id

Applications
GET /api/applications

POST /api/applications

GET /api/applications/:tenderId

PUT /api/applications/:id

Search
GET /api/search/companies

GET /api/search/tenders

🧪 Testing
bash
Copy
Edit
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test

# Integration
npm run test:integration
🚀 Deployment
Backend
bash
Copy
Edit
npm run build
npm start
Frontend
bash
Copy
Edit
npm run build
npm start
🤝 Contributing
Fork the repository

Create a feature branch

bash
Copy
Edit
git checkout -b feature/your-feature
Commit and push

Open a Pull Request

📄 License
This project is licensed under the MIT License.

👤 Author
Gautam Gupta

GitHub: @GAUTAMGUPTA0004

Email: gautamguta1220@gmail.com

🙏 Acknowledgments
Express.js

Next.js

Supabase

PostgreSQL

Tailwind CSS

Passport.js

Sequelize ORM

Built with ❤️ by Gautam Gupta



