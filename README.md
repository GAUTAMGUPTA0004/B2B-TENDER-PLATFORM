B2B Tender Management Platform
A comprehensive full-stack tender management system that enables companies to create, manage, and bid on business tenders efficiently.
🚀 Features
🔐 Authentication & Authorization

Secure user registration and login system
Role-based access control using Passport.js
Session management and password encryption

🏢 Company Profile Management

Complete CRUD operations for company profiles
Company metadata management (name, industry, description)
Logo and image upload functionality via Supabase Storage
Dynamic image URL retrieval and display

📋 Tender Management

Create, read, update, and delete tenders
Comprehensive tender details (title, description, deadline, budget)
Paginated tender listings for better performance
Company-specific tender management dashboard

💼 Application Workflow

Streamlined proposal submission system
Application tracking and management
Real-time application status updates
Comprehensive application history

🔍 Advanced Search & Discovery

Multi-criteria search functionality
Search by company name, industry, or products/services
Server-side search optimization
Paginated search results

🛠️ Technology Stack
Frontend

Next.js - React-based framework with SSR/SSG capabilities
React - Component-based UI library
Tailwind CSS - Utility-first CSS framework
Client-side validation - Form validation and error handling

Backend

Express.js - Node.js web framework
Passport.js - Authentication middleware
Joi/Zod - Schema validation
Modular routing - Organized API endpoints

Database

PostgreSQL - Relational database management
Sequelize ORM - Database abstraction layer
Sequelize CLI - Database migrations and seeding

Storage

Supabase Storage - Cloud-based file storage
Image optimization - Automated image processing

📁 Project Structure
tender-management-platform/
├── frontend/                 # Next.js frontend
│   ├── pages/               # Next.js pages
│   ├── components/          # React components
│   ├── styles/             # CSS and styling
│   └── utils/              # Utility functions
├── backend/                 # Express.js backend
│   ├── routes/             # API routes
│   │   ├── auth.js         # Authentication routes
│   │   ├── company.js      # Company management
│   │   ├── tender.js       # Tender operations
│   │   └── application.js  # Application handling
│   ├── models/             # Database models
│   ├── middleware/         # Custom middleware
│   ├── config/             # Configuration files
│   └── migrations/         # Database migrations
├── database/               # Database related files
│   ├── migrations/         # Sequelize migrations
│   └── seeders/           # Database seeders
└── docs/                  # Documentation
🗄️ Database Schema
Core Tables

users - User authentication and basic info
companies - Company profiles and metadata
tenders - Tender listings and details
applications - Proposal submissions
goods_services - Products/services catalog

Key Relationships

Users → Companies (One-to-One)
Companies → Tenders (One-to-Many)
Tenders → Applications (One-to-Many)
Companies → Applications (One-to-Many)

🚀 Installation & Setup
Prerequisites

Node.js (v16 or higher)
PostgreSQL (v12 or higher)
npm or yarn package manager

Backend Setup
bash# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Configure database connection
# Edit .env file with your database credentials

# Run migrations
npx sequelize-cli db:migrate

# Seed database (optional)
npx sequelize-cli db:seed:all

# Start development server
npm run dev
Frontend Setup
bash# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local

# Start development server
npm run dev
🔧 Environment Variables
Backend (.env)
env# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=tender_management
DB_USER=your_username
DB_PASSWORD=your_password

# Authentication
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
env# API
NEXT_PUBLIC_API_URL=http://localhost:5000

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
📚 API Endpoints
Authentication

POST /api/auth/register - User registration
POST /api/auth/login - User login
POST /api/auth/logout - User logout

Company Management

GET /api/companies - List all companies
GET /api/companies/:id - Get company details
POST /api/companies - Create company profile
PUT /api/companies/:id - Update company profile
DELETE /api/companies/:id - Delete company profile

Tender Management

GET /api/tenders - List all tenders (paginated)
GET /api/tenders/:id - Get tender details
POST /api/tenders - Create new tender
PUT /api/tenders/:id - Update tender
DELETE /api/tenders/:id - Delete tender

Application Management

GET /api/applications - List applications
POST /api/applications - Submit application
GET /api/applications/:tenderId - Get applications for tender
PUT /api/applications/:id - Update application status

Search

GET /api/search/companies - Search companies
GET /api/search/tenders - Search tenders

🎯 Key Features Implementation
Search Functionality

Multi-criteria filtering - Search by name, industry, products/services
Server-side optimization - Efficient database queries
Pagination - Improved performance for large datasets
Real-time results - Dynamic search with debouncing

File Upload System

Supabase Integration - Secure cloud storage
Image optimization - Automatic compression and resizing
URL generation - Dynamic image URL retrieval
File validation - Type and size restrictions

Security Features

Input validation - Joi/Zod schema validation
SQL injection prevention - Parameterized queries
Authentication middleware - Route protection
Error handling - Comprehensive error management

🧪 Testing
bash# Run backend tests
cd backend
npm test

# Run frontend tests
cd frontend
npm test

# Run integration tests
npm run test:integration
🚀 Deployment
Backend Deployment
bash# Build for production
npm run build

# Start production server
npm start
Frontend Deployment
bash# Build for production
npm run build

# Start production server
npm start
🤝 Contributing

Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
👥 Authors

Gautam Gupta - Initial work - GAUTAMGUPTA0004

🙏 Acknowledgments

Express.js community for the robust backend framework
Next.js team for the powerful React framework
Supabase for the excellent storage solution
PostgreSQL for the reliable database system

📞 Support
For support, email gautamguta1220@gmail.com 

Built with ❤️ by Gautam Gupta

