# Gram Tarang Food Testing Lab Website

A modern, responsive website for Gram Tarang Food Testing Lab (GTFTL) - a NABL-accredited analytical testing laboratory specializing in food, pharmaceutical, marine products, and forensic sample analysis.

## 🏢 About GTFTL

Gram Tarang Foods Testing Pvt. Ltd. (FTL) was established in 2022 as a NABL-accredited analytical testing laboratory located in Paralakhemundi, Gajapati, Odisha. The laboratory serves as both a commercial testing facility and a skill development hub for students, researchers, and industry professionals.

## ✨ Features

### 🌐 Website Features
- **Responsive Design**: Mobile-first, modern UI/UX with Tailwind CSS
- **Interactive Equipment Gallery**: Detailed view of laboratory instruments
- **Service Management**: Comprehensive testing service listings
- **Team Showcase**: Complete team profiles with expertise areas
- **Internship Portal**: Online application system for training programs
- **Contact System**: Multiple contact methods with form submissions
- **Blog System**: Dynamic blog/article management with search and filtering
- **Admin Panel**: Complete administrative control with secure authentication

### 🔬 Laboratory Services
- Food Testing & Analysis
- Pharmaceutical Testing
- Marine Products Testing
- Microbiological Testing
- Forensic Material Analysis
- Nutritional & Nutraceutical Testing
- Animal Cell Culture
- In Silico Analysis

### 🎓 Training Programs
- 15 days program (₹15,000)
- 1 Month program (₹25,000)
- 3 Months program (₹40,000)
- 6 Months program (₹70,000)

### 🔐 Admin Features
- **Secure Authentication**: JWT-based login system with password encryption
- **Dashboard**: Real-time statistics and activity overview
- **Contact Management**: View, manage, and export contact form submissions
- **Application Management**: Handle internship applications with file downloads
- **Blog Management**: Create, edit, publish, and delete blog articles
- **User Management**: Admin profile management and password updates
- **Protected Routes**: Secure access control for all admin functions

### 📝 Blog System
- **Article Management**: Full CRUD operations for blog posts
- **Rich Content**: Support for featured images and rich text content
- **Categories**: Organized by Food Testing, Research, Technology, Training, News
- **Search & Filter**: Advanced filtering by category, tags, and content
- **SEO Friendly**: Clean URLs and optimized for search engines
- **Public Interface**: Beautiful responsive blog pages for visitors
- **Analytics**: View tracking and engagement metrics

## 🛠 Tech Stack

### Frontend
- **React.js** - Frontend framework
- **Tailwind CSS** - Styling and responsive design
- **Framer Motion** - Animations and interactions
- **React Router** - Navigation
- **Axios** - API communication
- **React Toastify** - Notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database (Local installation)
- **Mongoose** - MongoDB object modeling
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

### Tools & Libraries
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll animations
- **Concurrently** - Run multiple commands

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (Local installation at mongodb://localhost:27017/ftl)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/fraz660/Food_testing_lab_website
   cd Food_testing_lab_website
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Start MongoDB service**
   Ensure MongoDB is running on your local machine at `mongodb://localhost:27017`

4. **Create default admin user**
   ```bash
   npm run create-admin
   ```
   This will create the initial super-admin account needed to access the dashboard.

5. **Run the application**
   ```bash
   # Development mode (runs both frontend and backend)
   npm run dev
   ```

6. **Access the application**
   - **Website**: http://localhost:3000
   - **Admin Login**: http://localhost:3000/admin/login
   - **Backend API**: http://localhost:5000

### 🔐 Admin Access
- Login URL: http://localhost:3000/admin/login
- Use the credentials created during the `npm run create-admin` step.
- ⚠️ **Important**: Ensure you set a strong password for security!

## 📁 Project Structure

```
food_testing_lad_website/
├── backend/                     # Backend server
│   ├── config/                 # Database and app configuration
│   │   └── database.js        # MongoDB connection
│   ├── models/                # Mongoose data models
│   │   ├── Admin.js           # Admin user model
│   │   ├── Blog.js            # Blog post model
│   │   ├── Contact.js         # Contact form model
│   │   ├── InternshipApplication.js
│   │   └── ServiceRequest.js
│   ├── routes/                # API route handlers
│   │   ├── auth.js            # Authentication routes
│   │   ├── blog.js            # Blog CRUD routes
│   │   ├── contact.js         # Contact form routes
│   │   └── internship.js      # Internship routes
│   ├── middleware/            # Express middleware
│   │   └── auth.js            # JWT authentication
│   ├── scripts/               # Utility scripts
│   │   └── createAdmin.js     # Admin creation script
│   └── server.js              # Main server file
├── client/                    # React frontend
│   ├── public/               # Public assets
│   │   ├── images/           # Lab equipment images
│   │   └── index.html        # HTML template
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── Navbar.js     # Navigation component
│   │   │   ├── Footer.js     # Footer component
│   │   │   └── ProtectedRoute.js # Auth guard
│   │   ├── pages/           # Page components
│   │   │   ├── Home.js       # Homepage
│   │   │   ├── About.js      # About page
│   │   │   ├── Services.js   # Services page
│   │   │   ├── Equipment.js  # Equipment gallery
│   │   │   ├── Team.js       # Team profiles
│   │   │   ├── Internship.js # Training programs
│   │   │   ├── Contact.js    # Contact page
│   │   │   ├── Blog.js       # Blog pages
│   │   │   ├── AdminLogin.js # Admin login
│   │   │   └── AdminDashboard.js # Admin panel
│   │   ├── App.js           # Main app component
│   │   ├── index.js         # Entry point
│   │   └── index.css        # Global styles
│   ├── package.json         # Frontend dependencies
│   └── tailwind.config.js   # Tailwind configuration
├── uploads/                 # File upload directories
│   ├── resumes/            # Internship application resumes
│   └── blog-images/        # Blog featured images
├── image/                   # Original equipment images
├── package.json            # Backend dependencies
└── README.md              # Project documentation
```

## 📊 Database Schema

### Collections
- **contacts** - Contact form submissions with status management
- **internshipapplications** - Internship applications with resume uploads
- **servicerequests** - Service request inquiries
- **blogs** - Blog posts with rich content, categories, and analytics
- **admins** - Admin user accounts with authentication and roles

## 🔗 API Endpoints

### Public Endpoints
- `POST /api/contact` - Submit contact form
- `POST /api/internship` - Submit internship application
- `POST /api/service-request` - Submit service request
- `GET /api/blogs` - Get published blog posts with pagination
- `GET /api/blogs/:slug` - Get single blog post by slug
- `GET /api/blogs/featured/posts` - Get featured blog posts

### Authentication Endpoints
- `POST /api/auth/login` - Admin login with credentials
- `GET /api/auth/profile` - Get current admin profile
- `PUT /api/auth/profile` - Update admin profile
- `POST /api/auth/logout` - Admin logout
- `GET /api/auth/verify` - Verify JWT token validity

### Admin Endpoints (Protected)
- `GET /api/admin/contacts/admin` - Get all contact submissions
- `GET /api/admin/internships/admin` - Get all internship applications
- `GET /api/admin/service-requests` - Get all service requests
- `GET /api/admin/blogs/all` - Get all blog posts (including drafts)
- `POST /api/admin/blogs/create` - Create new blog post
- `PUT /api/admin/blogs/:id` - Update existing blog post
- `DELETE /api/admin/blogs/:id` - Delete blog post
- `PATCH /api/admin/contacts/:id` - Update contact status
- `PATCH /api/admin/internships/:id` - Update application status

## 🖼 Laboratory Equipment

The website showcases 12+ advanced instruments including:
- LC-MS/MS (Liquid Chromatography–Mass Spectrometry)
- GC-MS/MS (Gas Chromatography–Mass Spectrometry)  
- ICP-MS (Inductively Coupled Plasma–Mass Spectrometry)
- HPLC (High-Performance Liquid Chromatography)
- FTIR (Fourier Transform Infrared Spectroscopy)
- UV-Vis Spectrophotometer
- And more...

## 👥 Team

### Board of Directors
- **Dr. Preetha Bhadra** - Managing Director
- **Prof. Supriya Pattanaik** - Director
- **Prof. D. N. Rao** - Director

### Technical Team
- **Dr. Bhadram Kalyan Chekraverthy** - Technical Manager (Chemical)
- **Dr. Pratyush Kumar Das** - Technical Manager (Biological)
- **Mr. Victor Pradhan** - Senior Analyst (Chemical)
- **Ms. Debarati Nandi** - Senior Analyst (Chemical)
- **Ms. Swapna Rani Nag** - Senior Analyst (Biological)
- **Mr. Badal Kumar Biswal** - Junior Analyst (Chemical)
- **Mr. Sanket Bhowmik** - Junior Analyst (Biological)

## 🎯 Key Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **SEO Optimized**: Proper meta tags and structured content
- **Fast Loading**: Optimized images and lazy loading
- **Interactive Elements**: Hover effects, modals, and animations
- **Form Handling**: Robust form validation and submission
- **File Uploads**: Resume upload for internship applications
- **Admin Dashboard**: Complete management system

## 🔒 Admin Panel

Access the admin panel at `/admin` to manage:
- Contact form submissions
- Internship applications
- Service requests
- Content management (future feature)
- User statistics and analytics

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers (1920px+)
- Laptops (1024px - 1919px)
- Tablets (768px - 1023px)
- Mobile phones (320px - 767px)

## 🚀 Deployment

### Production Build
```bash
# Build frontend
cd client
npm run build
cd ..

# Start production server
NODE_ENV=production npm start
```

### Environment Variables for Production
```env
NODE_ENV=production
MONGODB_URI=your-production-mongodb-uri
PORT=80
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact Information

**Gram Tarang Food Testing Lab**
- **Address**: Plot No.1, IDCO Industrial Estate, Main Road, Paralakhemundi, Gajapati, Odisha – 751200
- **Email**: md@ftl.esse.co.in
- **Phone**: +91 94387 32495
- **Website**: [ftl.org.in](https://ftl.org.in)

## 📝 License

This project is proprietary software developed for Gram Tarang Food Testing Lab.

## 📚 Additional Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Express.js Documentation](https://expressjs.com/)

---

**Built with ❤️ for Gram Tarang Food Testing Lab**
