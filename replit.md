# Liberty Transcripts Website

## Overview
Liberty Transcripts specializes in providing reliable and accurate AAERT-certified court transcripts. This website has been built with Astro + Vue for modern performance and maintainability.

## Technology Stack

### Current Stack (Migrated from PHP - October 2025)
- **Framework**: Astro 5.x with Vue 3 integration
- **Frontend**: HTML, CSS (W3.CSS framework), Vue.js for interactive components
- **Styling**: Custom CSS with W3.CSS framework
- **Server**: Astro dev server (development), Node.js server (production)
- **Email Integration**: Resend API for form submissions

### Migration Details
- **From**: PHP 8.2 with static HTML pages
- **To**: Astro + Vue
- **Benefits**: Better performance, modern development workflow, easier maintenance

## Project Architecture

### Directory Structure
```
├── public/                       # Static assets
│   └── assets/
│       ├── images/               # Logos, banners, icons  
│       ├── scripts/              # JavaScript files
│       └── stylesheets/          # CSS files (form.css, w3.css)
├── src/                          # Source code
│   ├── components/               # Vue components
│   │   └── TranscriptRequestForm.vue
│   ├── layouts/                  # Astro layouts
│   │   └── MainLayout.astro
│   └── pages/                    # Routes (file-based routing)
│       ├── api/                  # API endpoints
│       │   └── submit-transcript-request.js
│       ├── index.astro           # Homepage
│       ├── form.astro            # Audio upload page
│       ├── bios.astro            # Management bios
│       └── request-form.astro    # Transcript request form
├── astro.config.mjs              # Astro configuration
├── package.json                  # Dependencies
└── .env.example                  # Environment variables template
```

## Key Features
1. **Homepage**: Company overview, certifications, testimonials, FAQs
2. **Audio Upload**: File upload via SendThisFile embedded iframe
3. **Transcript Request Form**: Vue-powered form with email notifications
4. **Management Bios**: Information about the founder and team

## Routing
Astro uses file-based routing:
- `/` → index.astro (homepage)
- `/form` → form.astro (audio upload)
- `/request-form` → request-form.astro (transcript request)
- `/bios` → bios.astro (management bios)

## Development Setup

### Prerequisites
- Node.js 20.x or higher
- npm package manager (comes with Node.js)

### Installation
```bash
npm install
```

### Environment Variables
Copy `.env.example` to `.env` and configure:
```bash
RESEND_API_KEY=your_resend_api_key_here
OWNER_EMAIL=dbpatel1180@gmail.com
SPONSOR_EMAIL=sponsor@example.com
```

### Running Locally
```bash
npm run dev
```
Server runs on http://localhost:5000

### Building for Production
```bash
npm run build
npm run preview
```

## Deployment Options

### Option 1: Replit Deployment (Recommended)
**Pros**: Server-side rendering, API routes work, email sending functional
**Cons**: Requires Replit hosting

1. Set environment variables in Replit Secrets:
   - `RESEND_API_KEY`
   - `OWNER_EMAIL`
   - `SPONSOR_EMAIL`
2. The workflow is already configured to run `npm run dev`
3. For production deployment, use Replit's deploy feature

### Option 2: W3Spaces / Static Hosting
**Pros**: Can use free static hosting  
**Cons**: API routes don't work, need alternative form solution

To deploy to W3Spaces or other static hosts:

1. **Change astro.config.mjs output to static:**
   ```javascript
   export default defineConfig({
     output: 'static',  // Changed from 'server'
     // ... rest of config
   });
   ```

2. **Replace the form submission:**
   - Use a service like Web3Forms, Formspree, or Getform
   - Update `TranscriptRequestForm.vue` to submit to their endpoint
   - Example with Web3Forms:
     ```javascript
     const response = await fetch('https://api.web3forms.com/submit', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({
         access_key: 'YOUR_WEB3FORMS_KEY',
         ...formData.value
       })
     });
     ```

3. **Build and deploy:**
   ```bash
   npm run build
   # Upload 'dist/' folder to W3Spaces
   ```

## Form Submission Details

### Current Setup (Replit)
- Form submissions handled by `/api/submit-transcript-request`
- Uses Resend API to send emails
- Sends to both owner and sponsor email addresses
- Includes all form fields in email body

### Alternative Setup (Static Hosting)
Replace Resend with a static-friendly service:
- **Web3Forms**: Free, supports multiple recipients
- **Formspree**: Free tier available
- **Getform**: Good UI for managing submissions

## Design Changes from Previous Version

### Changes Made in Migration
1. **Removed jurisdiction buttons and asterisk text** from homepage (security - impersonation concerns)
2. **Centered the service map** on homepage for better visual presentation
3. **Removed court approval listings** from all pages
4. **Removed jurisdiction pages entirely** (federal-bankruptcy, federal-district, state)
5. **Replaced Google Form** with custom Vue form component
6. **Updated bio** to remove list of large cases (security concerns)
7. **Modernized tech stack** from PHP to Astro + Vue

### Preserved Features
- All original styling and design aesthetics
- W3.CSS framework for responsive design
- Same navigation structure
- Audio upload via SendThisFile integration
- Contact information and footer

## Security Notes
- Environment variables stored in `.env` (never committed to git)
- `.env` file is in `.gitignore` to prevent accidental exposure
- API keys managed through Replit Secrets in production
- Form validation on both client and server side

## Content Security
Due to impersonation concerns:
- Court approval listings have been removed from public display
- Specific jurisdiction lists are no longer published
- Large case names removed from management bio
- Clients can contact directly for jurisdiction information

## CSS Organization
Main stylesheets:
- **form.css**: Custom styles for the site (typography, parallax effects, forms)
- **w3.css**: W3.CSS framework for responsive grid and components

## Recent Changes
- **2025-10-20**: Migrated from PHP to Astro + Vue
  - Removed PHP backend completely
  - Implemented Vue-based form with Resend email integration
  - Cleaned up unused files and dependencies
  - Updated documentation for new architecture
  - Configured dual deployment options (Replit + Static)
  - Removed jurisdiction pages and court listings per security requirements
  - Centered map and improved homepage layout
  - Updated management bio content

## Notes for Future Updates
- To update management bio: Edit `src/pages/bios.astro`
- To change form behavior: Modify `src/components/TranscriptRequestForm.vue`
- To update navigation: Edit `src/layouts/MainLayout.astro`
- To change homepage content: Edit `src/pages/index.astro`

## Pending Tasks
- [ ] Get updated management bio content from user
- [ ] Set up Resend API key in environment variables
- [ ] Configure sponsor email address
- [ ] Test form submission end-to-end
- [ ] Decide on final deployment platform (Replit vs W3Spaces)
