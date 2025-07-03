# Amaury Castillo-Acevedo Portfolio Website

## Overview

This is a personal portfolio website for Amaury Castillo-Acevedo, a 17-year-old web developer. The application is built as a full-stack web application using React on the frontend and Express.js on the backend, with a focus on showcasing web development services and providing a contact form for potential clients.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend components:

**Frontend**: React-based single-page application with TypeScript
**Backend**: Express.js server with RESTful API endpoints
**Database**: PostgreSQL with Drizzle ORM (configured but using in-memory storage currently)
**Styling**: Tailwind CSS with shadcn/ui component library
**Build Tool**: Vite for frontend bundling and development
**Email Service**: Nodemailer for contact form submissions

## Key Components

### Frontend Architecture
- **React 18** with TypeScript for type safety
- **Wouter** for client-side routing (lightweight React Router alternative)
- **TanStack Query** for server state management and API calls
- **Framer Motion** for animations and transitions
- **React Hook Form** with Zod validation for form handling
- **shadcn/ui** components built on Radix UI primitives
- **Tailwind CSS** for styling with custom design tokens

### Backend Architecture
- **Express.js** server with middleware for JSON parsing and request logging
- **RESTful API** design with proper error handling
- **Nodemailer** integration for email functionality
- **Session management** with connect-pg-simple (configured for PostgreSQL sessions)
- **CORS and security** middleware setup

### Database Layer
- **Drizzle ORM** with PostgreSQL dialect for type-safe database operations
- **Database schema** defined in shared directory for contact messages
- **In-memory storage fallback** for development (MemStorage class)
- **Migration system** configured with drizzle-kit

### UI/UX Design
- **Component-based architecture** with reusable UI components
- **Responsive design** with mobile-first approach
- **Accessibility features** built into Radix UI components
- **Smooth scroll navigation** between sections
- **Toast notifications** for user feedback
- **Professional color scheme** with primary blue (#3B82F6) and accent gold (#F59E0B)

## Data Flow

1. **User Interaction**: Users navigate through different sections (Home, Services, Projects, Contact)
2. **Form Submission**: Contact form data is validated client-side using Zod schemas
3. **API Communication**: React Query handles API calls to backend endpoints
4. **Data Processing**: Express server validates and processes contact form submissions
5. **Email Delivery**: Nodemailer sends email notifications to the business owner
6. **Data Storage**: Contact messages are stored (currently in-memory, configured for PostgreSQL)
7. **User Feedback**: Toast notifications inform users of successful/failed submissions

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth transitions
- **Lucide React**: Icon library for consistent iconography

### Backend Services
- **Nodemailer**: Email service integration
- **Neon Database**: PostgreSQL hosting service (@neondatabase/serverless)
- **Session Management**: PostgreSQL session store

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for production
- **Replit Integration**: Development environment optimizations

## Deployment Strategy

The application is designed for easy deployment with the following approach:

**Development Mode**: 
- Vite dev server for frontend with hot module replacement
- Express server with middleware mode integration
- In-memory storage for rapid development

**Production Build**:
- Vite builds optimized frontend bundle to `dist/public`
- ESBuild bundles Express server to `dist/index.js`
- Static file serving for production assets
- Environment variable configuration for database and email

**Database Setup**:
- PostgreSQL database provisioned via DATABASE_URL environment variable
- Drizzle migrations managed through `db:push` script
- Fallback to in-memory storage during development

**Email Configuration**:
- Gmail SMTP setup with app passwords
- Environment variables for email credentials
- Graceful fallback if email service is unavailable

## Changelog

- July 03, 2025. Initial setup
- July 03, 2025. Added user's personal photo to hero section
- July 03, 2025. Enhanced email functionality with proper Gmail SMTP configuration
- July 03, 2025. Created detailed project pages for Rubik's Cube Analysis, Mental Health Campaign, and Scent & Memory Research
- July 03, 2025. Added navigation between main portfolio and individual project detail pages
- July 03, 2025. Fixed CSS import order issue to resolve font loading errors

## User Preferences

Preferred communication style: Simple, everyday language.