# Seneca Science Club Website

A professional, modern website for the Seneca Science Club built with Angular frontend and Node.js backend, featuring event management, member registration, blog system, and more.

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

**Required Environment Variables:**
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/seneca_science_club"

# Server
PORT=5000
NODE_ENV=development

# JWT
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d

# Cloudinary (for media uploads)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Email (for contact forms)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### 4. Database Setup
```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# (Optional) Open Prisma Studio to view/edit data
npx prisma studio
```

### 5. Start Development Servers
```bash
# Start both frontend and backend (recommended)
npm run dev

# Or start them separately:
npm run server:dev    # Backend on port 5000
npm run client:dev    # Frontend on port 4200
```

## 🌐 Access Points

- **Frontend**: http://localhost:4200
- **Backend API**: http://localhost:5000
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
├── prisma/               # Database schema and migrations
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

## 🗄️ Database Schema

The application uses the following main entities:

- **Users**: Member profiles and authentication
- **Events**: Club events with registration system
- **Blog Posts**: Content management system
- **Gallery Items**: Photo and video management
- **Team Members**: Leadership team profiles
- **Contact Messages**: Contact form submissions

## 🔐 Authentication & Authorization

- **JWT Tokens**: Secure authentication system
- **Role-Based Access**: Admin, Moderator, and Member roles
- **Protected Routes**: API endpoints with proper authorization
- **Password Security**: Bcrypt hashing for user passwords

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

## 📝 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user profile

### Event Endpoints
- `GET /api/events` - List all events
- `POST /api/events` - Create new event (Admin)
- `GET /api/events/:id` - Get event details
- `POST /api/events/:id/register` - Register for event

### Blog Endpoints
- `GET /api/blog` - List blog posts
- `POST /api/blog` - Create blog post (Authenticated)
- `GET /api/blog/:id` - Get blog post details

### Gallery Endpoints
- `GET /api/gallery` - List gallery items
- `POST /api/gallery` - Upload media (Authenticated)

### Team Endpoints
- `GET /api/team` - List team members
- `POST /api/team` - Add team member (Admin)

### Contact Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contact/faq` - Get FAQ data

## 🐛 Troubleshooting

### Common Issues

**Database Connection Error**
- Ensure PostgreSQL is running
- Check DATABASE_URL in .env file
- Verify database exists and is accessible

**Port Already in Use**
- Change PORT in .env file
- Kill processes using the port: `lsof -ti:5000 | xargs kill -9`

**Frontend Build Errors**
- Clear node_modules: `rm -rf client/node_modules && npm install`
- Check Angular version compatibility

**Media Upload Issues**
- Verify Cloudinary credentials in .env
- Check file size limits (10MB for images, 50MB for videos)

## 📞 Support

For support and questions:
- **Email**: scienceclub@senecacollege.ca
- **Issues**: Create an issue on GitHub
- **Documentation**: Check the code comments and API endpoints

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Seneca College for supporting student initiatives
- Angular and Node.js communities for excellent documentation
- Material Design team for beautiful UI components
- Open source contributors who made this project possible

---

**Built with ❤️ by the Seneca Science Club Team**
