# Overview

This is a full-stack web application for Jotah, India's first and only rolling paper brand. The application is specifically focused on showcasing Jotah's premium rolling papers, featuring actual product images and the official logo. The site provides online ordering through major delivery platforms (Zepto, Blinkit, Instamart), a "What the Fun" QR code page, and contact forms for customer inquiries. Built as a modern React frontend with an Express.js backend, it emphasizes Jotah's pioneering position as India's indigenous rolling paper company.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components built on top of Radix UI primitives
- **Styling**: Tailwind CSS with custom brand color variables and typography (Playfair Display for headings, Inter for body text)
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation for type-safe form handling

## Backend Architecture
- **Framework**: Express.js with TypeScript running in ESM mode
- **Database ORM**: Drizzle ORM configured for PostgreSQL with Neon serverless database
- **API Design**: RESTful API with dedicated routes for contact forms and dealer search
- **Data Storage**: In-memory storage implementation (MemStorage) for development with interface for easy database migration
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

## Database Schema
- **Users**: Basic user authentication structure (id, username, password)
- **Contacts**: Contact form submissions with inquiry types and timestamps
- **Dealers**: Store locator data with geographic coordinates and status tracking

## Development Tools
- **Build System**: Vite for frontend bundling with esbuild for backend compilation
- **Type Safety**: Shared TypeScript types between frontend and backend via shared schema
- **Code Quality**: TypeScript strict mode enabled across the entire codebase
- **Development Experience**: Hot module replacement for frontend and tsx for backend development

## Design System
- **Brand Colors**: Custom CSS variables for saddle brown, goldenrod, warm cream, and other brand colors
- **Component Library**: Comprehensive UI component system with consistent styling and behavior
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Accessibility**: Radix UI primitives ensure proper ARIA attributes and keyboard navigation

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database for production data storage
- **Drizzle Kit**: Database migrations and schema management

## UI and Styling
- **Radix UI**: Headless UI primitives for accessible components (dialogs, dropdowns, forms, etc.)
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Typography with Playfair Display and Inter font families

## Development and Build Tools
- **Vite**: Frontend build tool and development server
- **esbuild**: Backend compilation for production builds
- **PostCSS**: CSS processing with Autoprefixer
- **tsx**: TypeScript execution for development

## Form and Data Management
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema definition
- **TanStack Query**: Server state management and data fetching
- **date-fns**: Date manipulation utilities

## Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## Additional Utilities
- **clsx & tailwind-merge**: Conditional CSS class management
- **class-variance-authority**: Component variant handling
- **wouter**: Lightweight routing for React applications