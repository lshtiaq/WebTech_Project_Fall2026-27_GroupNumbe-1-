# AIUB Placement Hub: Alumni

## Technology

- HTML5
- CSS3, including Flexbox and CSS Grid
- Roboto Condensed from Google Fonts, with system font fallbacks
- Local image assets

No package installation or build step is required.

## Project structure

```text
.
├── README.md
├── assets/
│   ├── aiub-favicon.png
│   ├── aiub-seal-small.jpg
│   ├── company logo.jpg
│   └── profile image .png
├── design/
│   └── style.css
└── page/
    ├── alumni-dashboard.html
    ├── alumni-directory.html
    ├── alumni-login.html
    ├── alumni-profile.html
    ├── alumni-register.html
    ├── apply-job.html
    ├── career-support.html
    ├── companies.html
    ├── edit-profile.html
    ├── find-jobs.html
    ├── job-details.html
    ├── manage-jobs.html
    ├── messages.html
    ├── my-applications.html
    ├── notifications.html
    ├── post-job.html
    ├── student-details.html
    └── student-list.html
```

## Pages

| Page | Purpose |
|---|---|
| `alumni-login.html`, `alumni-register.html` | Alumni sign-in and registration screens |
| `alumni-dashboard.html` | Overview statistics, recent activity, posted jobs, and quick links |
| `alumni-profile.html`, `edit-profile.html` | Alumni profile display and editing screen |
| `alumni-directory.html`, `student-list.html`, `student-details.html` | Alumni and student discovery and profile screens |
| `find-jobs.html`, `job-details.html`, `apply-job.html`, `my-applications.html` | Job search, details, application, and application status screens |
| `post-job.html`, `manage-jobs.html` | Job posting and management screens |
| `messages.html`, `notifications.html` | Sample messaging and recent notification screens |
| `companies.html`, `career-support.html` | Employer directory and career resources |

## Run locally

Open the project folder in VS Code and use Live Server on a page in `page/`, or start Python's static server from the project root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/page/alumni-dashboard.html`.

## Design and navigation

All pages share `design/style.css` for the AIUB-blue navigation, centered seal, sidebar, cards, and footer. The seal links to the alumni dashboard, which acts as the project's home page. The top-bar Notifications link opens `notifications.html`. The shared footer includes project links and AIUB contact information.

## Scope and limitations

This is a desktop-oriented, static prototype. It has no backend, database, authentication, or persistent data storage. Forms and sample message, job, and notification content are for presentation; they do not represent live services. Responsive tablet and mobile breakpoints are not included.
