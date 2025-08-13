# Overview

This is a restaurant website for Seaworld Fish Bar, a local fish and chips shop in Croxley Green. The application is built as a full-stack web application featuring a React frontend with a modern UI and an Express.js backend. The site showcases the restaurant's menu (fish & chips, kebabs, and pies), provides business information, and includes a contact form for customer inquiries.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **UI Components**: Comprehensive component library built on Radix UI primitives

## Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **API Design**: RESTful API with JSON responses
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Request Handling**: Express middleware for JSON parsing, logging, and error handling
- **Development**: Hot module replacement via Vite integration in development mode

## Database Design
- **Schema**: Drizzle ORM with PostgreSQL dialect configuration
- **Tables**: Users table for authentication and contact inquiries table for form submissions
- **Migration**: Drizzle Kit for database schema management
- **Current Implementation**: MemStorage class provides in-memory data persistence for development

## Authentication & Security
- **Validation**: Zod schemas for runtime type checking and validation
- **CORS**: Express middleware configured for cross-origin requests
- **Session Management**: Structure in place for future session-based authentication

## Build & Deployment
- **Development**: Vite dev server with Express backend integration
- **Production**: Static frontend build with bundled backend using esbuild
- **Deployment Build**: Custom build script (`build-for-deployment.js`) that restructures files for static deployment
- **File Structure**: Vite outputs to `dist/public`, deployment script moves files to `dist` for compatibility
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Asset Management**: Vite handles static assets with proper optimization

# External Dependencies

## Core Framework Dependencies
- **@vitejs/plugin-react**: React support for Vite build system
- **express**: Web application framework for Node.js backend
- **drizzle-orm**: Type-safe SQL ORM with PostgreSQL support
- **@tanstack/react-query**: Server state management and caching

## Database & Storage
- **@neondatabase/serverless**: PostgreSQL database driver for serverless environments
- **drizzle-kit**: Database schema management and migration tool
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## UI & Styling
- **tailwindcss**: Utility-first CSS framework
- **@radix-ui/react-***: Headless UI component primitives
- **class-variance-authority**: Utility for handling conditional CSS classes
- **embla-carousel-react**: Carousel component library

## Form Handling & Validation
- **react-hook-form**: Performant forms with minimal re-renders
- **@hookform/resolvers**: Validation resolver for various schema libraries
- **zod**: TypeScript-first schema validation library
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation

## Development Tools
- **tsx**: TypeScript execution environment for Node.js
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling
- **wouter**: Minimalist routing library for React applications