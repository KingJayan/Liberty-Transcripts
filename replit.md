# Liberty Transcripts Website

## Overview
Liberty Transcripts is a federal court-approved transcription vendor website specializing in providing reliable and accurate AAERT-certified court transcripts for federal courts across the nation. This is a PHP-based website with static HTML pages and basic file upload functionality.

## Project Architecture

### Technology Stack
- **Backend**: PHP 8.2 (using built-in PHP server)
- **Frontend**: HTML, CSS (W3.CSS framework), JavaScript
- **Server**: PHP built-in development server

### Directory Structure
```
├── src/                          # Main source directory
│   ├── assets/                   # Static assets
│   │   ├── images/               # Logo, banners, icons
│   │   ├── scripts/              # JavaScript files
│   │   └── stylesheets/          # CSS files (form.css, w3.css)
│   ├── data/                     # User-generated data (gitignored)
│   │   ├── uploads/              # Audio file uploads
│   │   └── form-submissions/     # Form submission records
│   ├── index.php                 # Main routing controller
│   ├── index.html                # Homepage
│   ├── sendfile.html             # Audio upload page
│   ├── requestform.html          # Bankruptcy transcript request form
│   ├── management-bios.html      # Management bios page
│   ├── federal-bankruptcy.html   # Federal bankruptcy jurisdictions
│   ├── federal-district.html     # Federal district jurisdictions
│   └── state.html                # State court jurisdictions
├── templates/                    # Template files
├── config.json                   # Application configuration
└── composer.json                 # PHP dependencies
```

## Key Features
1. **Homepage**: Company overview, certifications, testimonials, FAQs
2. **Audio Upload**: Allows users to upload audio files for transcription
3. **Transcript Request Form**: Bankruptcy transcript request submission
4. **Court Jurisdictions**: Information pages for federal bankruptcy, federal district, and state courts
5. **Management Bios**: Information about the management team

## Routing
The site uses PHP-based routing in `src/index.php`:
- `/` → index.html (homepage)
- `/form` → sendfile.html (audio upload)
- `/request-form` → requestform.html (transcript request)
- `/bios` → management-bios.html
- `/fed-bank` → federal-bankruptcy.html
- `/fed-dist` → federal-district.html
- `/state-courts` → state.html

## Development Setup
- PHP 8.2 is installed via Nix
- Server runs on port 5000 (required for Replit environment)
- Server binds to 0.0.0.0 for proper iframe proxy functionality

## Recent Changes
- **2025-10-20**: Initial Replit environment setup
  - Created .gitignore for PHP project
  - Created data directories for uploads and form submissions (outside web root for security)
  - Configured PHP built-in server workflow on port 5000
  - Created project documentation
  - Fixed routing bugs in index.php (malformed in_array entries)
  - Updated config.json to match correct server settings (port 5000, host 0.0.0.0)
  - Added .htaccess to prevent direct access to data directory under src
  - Created deployment script with PORT environment variable support

## Security
- User uploads are stored in `data/` directory at project root (outside web root)
- Removed `src/data/` to prevent any files under web root
- Router script (`router.php`) blocks access to:
  - `/data/` paths
  - Sensitive PHP files (phpinfo.php, monitor.php, upload.php, request-form-handle.php)
- Removed phpinfo.php and monitor.php from src directory

## Notes
- The `data/` directory is gitignored to prevent committing user uploads and form submissions
- The website uses W3.CSS for responsive design
- Deployment uses autoscale target with bash script that respects PORT environment variable
- Router script is used with PHP built-in server for security and proper routing
- Some PHP files (upload.php, request-form-handle.php) contain file handling logic but routing in index.php determines which pages are actually served
