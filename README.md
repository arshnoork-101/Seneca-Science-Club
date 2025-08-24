# Seneca Science Club Website

A professional, modern website for the Seneca Science Club built with Angular frontend and Node.js backend, featuring event management, member registration, blog system, and more.

🎥 **Live Demo**  
- 🎥 [Video Demo](https://drive.google.com/file/d/1B-HiJsJLB5A82UBNU-c24_RBvvmjlVna/view?usp=drive_link)  
- **Frontend**: [seneca-science-club-frontend.vercel.app](https://seneca-science-club-frontend-dkp1.vercel.app/)  
- **Backend API**: [ssc-backend.onrender.com](https://ssc-backend-49m0.onrender.com/)  


## 🌟 Features

### Frontend (Angular)
- **Responsive Design**: Mobile-first approach with Material Design
- **Component-Based Architecture**: Modular, maintainable code structure
- **Modern UI/UX**: Beautiful animations, smooth transitions, and intuitive navigation
- **Progressive Web App**: Fast loading and offline capabilities

### Backend (Node.js + Express)
- **RESTful API**: Clean, well-documented endpoints
- **Database Integration**: PostgreSQL with Prisma ORM
- **Authentication**: JWT-based secure authentication system
- **File Uploads**: Cloudinary integration for media management
- **Email Notifications**: Automated email system for contact forms

### Core Functionality
- **Event Management**: Create, manage, and register for events
- **Member System**: User profiles, authentication, and role management
- **Blog Platform**: Content management with rich text editor
- **Gallery**: Photo and video showcase with filtering
- **Team Profiles**: Leadership team showcase
- **Contact System**: Contact forms with email notifications
- **Admin Dashboard**: Comprehensive management interface

## 🚀 Tech Stack

### Frontend
- **Angular 17**: Latest version with modern features
- **Angular Material**: Material Design components
- **SCSS**: Advanced CSS with variables and mixins
- **RxJS**: Reactive programming for state management
- **TypeScript**: Type-safe JavaScript development

### Backend
- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Fast, unopinionated web framework
- **PostgreSQL**: Robust, open-source database
- **Prisma**: Modern database toolkit and ORM
- **JWT**: JSON Web Token authentication
- **Cloudinary**: Cloud media management
- **Nodemailer**: Email sending capabilities

### Development Tools
- **Nodemon**: Auto-restart server during development
- **Concurrently**: Run frontend and backend simultaneously
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** (v8 or higher)
- **PostgreSQL** (v12 or higher)
- **Git**

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/seneca-science-club.git
cd seneca-science-club
```

### 2. Install Dependencies
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

### 3. Environment Configuration
```bash
# Copy environment template
cp env.example .env

# Edit .env file with your configuration
nano .env
```

### ⚡5. Start Development Servers
```bash
# Start both frontend and backend (recommended)
npm run dev

# Or start them separately:
npm run server:dev    # Backend on port 3001
npm run client:dev    # Frontend on port 4200
```

## 🌐 Access Points

- **Frontend**: http://localhost:4200
- **Backend API**: http://localhost:3001
- **API Documentation**: http://localhost:5000/api/health
- **Database Studio**: http://localhost:5555 (when running `npx prisma studio`)

## 📁 Project Structure

```
seneca-science-club/
├── server/                 # Backend Node.js application
│   ├── config/            # Database and configuration
│   ├── middleware/        # Express middleware
│   ├── routes/            # API route handlers
│   └── index.js           # Main server file
├── client/                # Frontend Angular application
│   ├── src/
│   │   ├── app/          # Angular components and services
│   │   ├── assets/       # Static assets
│   │   └── styles.scss   # Global styles
│   ├── angular.json      # Angular configuration
│   └── package.json      # Frontend dependencies
├── package.json          # Backend dependencies and scripts
└── README.md            # This file
```

## 🔧 Available Scripts

### Backend Scripts
```bash
npm run server:dev        # Start backend with nodemon
npm run start             # Start production server
npm run db:migrate        # Run database migrations
npm run db:generate       # Generate Prisma client
npm run db:studio         # Open Prisma Studio
```

### Frontend Scripts
```bash
cd client
npm start                 # Start development server
npm run build             # Build for production
npm run test              # Run unit tests
```

### Combined Scripts
```bash
npm run dev               # Start both frontend and backend
npm run install:all       # Install all dependencies
```

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Breakpoints at 576px, 768px, 992px, and 1200px
- Touch-friendly navigation
- Optimized layouts for all screen sizes

## 🚀 Deployment

### Production Build
```bash
# Build frontend
cd client
npm run build

# Start production server
npm start
```

### Environment Variables for Production
```env
NODE_ENV=production
PORT=5000
DATABASE_URL="your-production-database-url"
JWT_SECRET="your-production-jwt-secret"
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 📞 Support

For support and questions:
- **Email**: senecascienceclub@senecacollege.ca
- **Issues**: Create an issue on GitHub
- **Documentation**: Check the code comments and API endpoints


## 🙏 Acknowledgments

- Seneca College for supporting student initiatives
- Angular and Node.js communities for excellent documentation
- Material Design team for beautiful UI components
- Open source contributors who made this project possible

---

**Built with ❤️ by the Seneca Science Club Team**