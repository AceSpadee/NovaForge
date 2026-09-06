# NovaForge

NovaForge is a full-stack agency-style web application built as a production-focused development project. It demonstrates the process of taking a modern web application from local development through deployment, accessibility testing, security improvements, and automated CI/CD.

## Live Site

[View NovaForge](https://novaforge.novaforgeweb.workers.dev)

## Features

- Responsive small-business website
- React component-based frontend
- Accessible keyboard navigation and skip links
- Interactive FAQ section
- Contact form with validation
- Cloudflare Turnstile bot protection
- Email delivery through Resend
- Express API running on Cloudflare Workers
- Production error handling
- SEO and accessibility optimization
- Automated CI/CD with GitHub Actions

## Tech Stack

### Frontend

- React
- Vite
- JavaScript
- HTML
- CSS

### Backend

- Node.js
- Express

### Services

- Cloudflare Workers
- Cloudflare Turnstile
- Resend

### Development / DevOps

- Git
- GitHub
- GitHub Actions
- Wrangler
- ESLint

## Architecture

The React frontend and Express backend are deployed together through Cloudflare Workers.

The frontend sends contact requests to the Express API:

```text
React Frontend
      |
      v
/api/contact
      |
      v
Cloudflare Worker
      |
      v
Express
   /      \
Turnstile  Resend
```

Turnstile verifies that the request is legitimate before the backend sends the contact email through Resend.

## CI/CD

NovaForge uses GitHub Actions for automated continuous integration and deployment.

```text
Feature Branch
      |
      v
Pull Request
      |
      v
Install Dependencies
      |
      v
ESLint
      |
      v
Production Build
      |
      v
CI Passes
      |
      v
Merge to Main
      |
      v
Automatic Cloudflare Deployment
```

The `main` branch is protected and requires the CI checks to pass before pull requests can be merged.

## Environment Variables

The application uses environment variables for configuration and sensitive credentials.

Frontend:

```text
VITE_TURNSTILE_SITE_KEY
```

Backend:

```text
RESEND_API_KEY
TURNSTILE_SECRET_KEY
CONTACT_TO_EMAIL
JSON_BODY_LIMIT
```

Secret values are not stored in the repository. Production secrets are managed through Cloudflare and GitHub Actions secrets.

## Accessibility and Performance

The project includes:

- Semantic HTML landmarks
- Keyboard navigation
- Visible focus states
- Skip-to-content navigation
- Accessible FAQ controls
- Accessible contact form labels and status messages
- Reduced-motion support
- Responsive layouts
- Security headers
- Lighthouse optimization

Production Lighthouse testing reached approximately:

- Performance: 99
- Accessibility: 100
- SEO: 100

## Local Development

Install frontend dependencies:

```bash
npm ci
```

Install backend dependencies:

```bash
npm ci --prefix server
```

Start development:

```bash
npm run dev
```

Run linting:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## What I Learned

This project was built to practice the complete lifecycle of a full-stack application, including:

- React component architecture
- Express APIs and middleware
- Frontend/backend integration
- Environment variable and secret management
- Third-party API integration
- Accessibility
- Production deployment
- Cloudflare Workers
- Git branching and pull requests
- Protected branches
- Continuous integration
- Continuous deployment
- Production debugging and testing

## Project Purpose

NovaForge is an agency-style development project created to demonstrate and practice modern full-stack web development and production deployment workflows.