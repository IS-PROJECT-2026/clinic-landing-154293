# Amani Family Clinic — Landing Page

A functional landing page for a fictional Nairobi family clinic, built to demonstrate a
professional-grade Git and GitHub workflow: milestone planning, issue tracking, feature
branches, conventional commits, code review via pull requests, engineered merge conflict
resolution, and CI/CD deployment through GitHub Pages.

**Live site:** https://IS-PROJECT-2026.github.io/clinic-landing-<your-admission-number>/
*(update this link once Pages is live — see Day 1 checklist)*

## What it does

- Presents the clinic's services, care team, and hours
- Lets a visitor request an appointment slot through a client-side validated form
- Responsive layout with a mobile navigation toggle

## Tech stack

- HTML5, CSS3 (custom properties, CSS Grid/Flexbox, no framework)
- Vanilla JavaScript (form validation, nav toggle)
- Google Fonts (Fraunces, IBM Plex Sans)
- Deployed via GitHub Pages from `main`

## Project management

This repository is planned with GitHub Milestones, Issues, and a Kanban Project Board.
See the **Milestones** and **Projects** tabs of this repository for the phase breakdown
and task history.

## Local development

Static site — no build step required.

```bash
git clone https://github.com/IS-PROJECT-2026/clinic-landing-<your-admission-number>.git
cd clinic-landing-<your-admission-number>
open index.html   # or use a local server, e.g. `python3 -m http.server`
```

## Merge conflict evidence

Screenshots and explanations for the three engineered merge conflicts live in
[`/evidence`](./evidence) and are documented in [`submission.md`](./submission.md).
