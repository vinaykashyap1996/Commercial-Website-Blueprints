# Contributing to Commercial Website Blueprints

Thank you for your interest in contributing! Whether you're adding a new blueprint, improving an existing one, or fixing a typo, your help makes this repo better for everyone.

## How to Add a New Blueprint

### 1. Choose Your Project

Pick a project type that:
- Has clear commercial value (something clients or businesses pay for)
- Can be primarily built using AI tools (Claude, ChatGPT, Cursor, v0, etc.)
- Doesn't already exist in the repo

### 2. Use the Template

Copy the `_template/` directory as your starting point:

```bash
cp -r _template blueprints/<category>/<your-blueprint-name>
```

**Category folders:**
- `landing-pages` — single-page marketing sites, launch pages
- `web-apps` — SaaS products, dashboards, tools
- `e-commerce` — storefronts, marketplaces, checkout flows
- `chrome-extensions` — browser extensions
- `portfolio-agency` — portfolio sites, agency websites
- `apis-backends` — REST APIs, backend services
- `mobile-apps` — React Native, Flutter, native apps
- `3d-experiences` — Three.js, WebGL, immersive web
- `cli-tools` — command-line tools and utilities

### 3. Fill In All Required Files

Every blueprint **must** include:

| File | Purpose |
|------|---------|
| `README.md` | Overview with metadata table, screenshots, prerequisites |
| `BLUEPRINT.md` | The full step-by-step tutorial |
| `prompts/01-*.md` through `prompts/0N-*.md` | Numbered AI prompt files |
| `starter-code/` | Minimal skeleton files (not the finished code) |

Optional but recommended:
- `screenshots/` — visual references for each step
- `deploy/` — deployment configs (vercel.json, netlify.toml, etc.)

### 4. Follow the Style Guide

- **Folder names**: `kebab-case`, lowercase (e.g., `ai-saas-dashboard`)
- **Prompt files**: numbered sequentially (`01-setup.md`, `02-core.md`, etc.)
- **Starter code**: should be skeleton/scaffolding only, not the complete solution
- **Screenshots**: descriptive names (`hero-desktop.png`, `step-01-result.png`)
- **Commercial value**: include a realistic range based on freelance/agency rates

### 5. Submit a Pull Request

1. Fork the repo
2. Create a branch: `git checkout -b add/your-blueprint-name`
3. Add your blueprint following the template
4. Test that all file links in your README and BLUEPRINT work
5. Submit a PR using the pull request template

## Improving Existing Blueprints

Found a bug, unclear instruction, or missing step? PRs to improve existing blueprints are welcome:

- Fix typos and broken links
- Clarify confusing steps in BLUEPRINT.md
- Add missing screenshots
- Update outdated dependencies or deployment steps
- Improve AI prompts based on your experience

## Reporting Issues

Use the **Blueprint Request** issue template to suggest new blueprints, or open a general issue for bugs and improvements.

## Code of Conduct

Be respectful and constructive. We're all here to learn and build.
