# 848vania.github.io

Personal AI engineer portfolio for **Vania Miriam Ortiz Ramos**.
Deployed at [https://848vania.github.io](https://848vania.github.io).

Built with Jekyll + a fully custom theme. One-page layout with sections for:
About · Projects · Skills · Credentials · Experience · Research · Contact

---

## Local Development

### Option A — Ruby & Jekyll directly

**Requirements:** Ruby 3.x, Bundler

```bash
bundle install
bundle exec jekyll serve --livereload
```

Visit `http://localhost:4000`.

### Option B — Docker

```bash
docker-compose up
```

Visit `http://localhost:4000`. Live-reload is enabled on port 35729.

To rebuild the image after changing Gemfile:

```bash
docker-compose build
docker-compose up
```

### Option C — VS Code Dev Container

1. Open the folder in VS Code.
2. Install the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).
3. Click **Reopen in Container** when prompted.
4. The container starts and runs `bundle install` automatically.
5. Open a terminal inside the container and run:

```bash
bundle exec jekyll serve --livereload --config _config.yml,_config_docker.yml
```

---

## How to Edit Content

All portfolio content is stored in `_data/` YAML files. You never need to edit HTML to update your content.

### Profile & contact info

Edit `_data/profile.yml`:
- `name`, `role`, `location`
- `email`, `github`, `linkedin`
- `hero_headline`, `hero_subtitle`
- `badges` — the small tags shown in the hero section

Also update `_config.yml` → `author` section with the same email/github/linkedin values (used by the footer and CV link).

### CV file

Drop your CV PDF at:

```
assets/files/cv.pdf
```

The CV link in the nav, hero buttons, and contact section all point to `/assets/files/cv.pdf` automatically.

### Projects

Edit `_data/projects.yml`. Each entry:

```yaml
- title: "Project Name"
  description: "Short description of the project."
  tech:
    - Python
    - FastAPI
  github: "https://github.com/848vania/repo"  # or leave ""
  link: "https://demo.example.com"             # or leave ""
  featured: true   # set false to hide from homepage
```

### Skills

Edit `_data/skills.yml`. Each entry is a category + list of skill names:

```yaml
- category: "Machine Learning & AI"
  items:
    - Python
    - PyTorch
    - Scikit-learn
```

### Awards & Certifications

Edit `_data/credentials.yml`. Type options: `Award`, `Certification`, `Training`.

```yaml
- type: "Award"
  title: "Award Title"
  description: "Brief description."
  date: "2024"
  link: ""   # optional URL
```

### Education

Edit `_data/education.yml`:

```yaml
- degree: "M.S. in Computer Science"
  university: "University Name"
  location: "Seoul, South Korea"
  dates: "2023 – 2025"
  focus: "Machine Learning, Computer Vision"
```

### Work Experience

Edit `_data/experience.yml`. Each entry has a bullets list:

```yaml
- role: "AI Engineer"
  organization: "Company Name"
  location: "Seoul, South Korea"
  dates: "2024 – Present"
  bullets:
    - "What you did and the impact it had."
    - "Another achievement."
```

### Publications / Research interests

Edit `_data/publications.yml`:

- If you have no publications yet, only `research_interests` is shown.
- To add publications, populate the `items` list:

```yaml
items:
  - title: "Paper Title"
    venue: "Conference Name"
    year: 2024
    description: "Short abstract."
    url: "https://arxiv.org/..."
```

### Navigation labels

To change nav labels, edit `_includes/header.html`. The section `id` values in `index.html` must match the anchor links in the nav.

---

## Deploy to GitHub Pages

### 1. Create the repository

The repository name **must** be:

```
848vania.github.io
```

Go to [github.com/new](https://github.com/new) and create a public repository with this exact name.

### 2. Push the project

```bash
git init
git add .
git commit -m "Initial AI engineer portfolio"
git branch -M main
git remote add origin https://github.com/848vania/848vania.github.io.git
git push -u origin main
```

### 3. Enable GitHub Pages with GitHub Actions

Go to the repository on GitHub:

1. **Settings** → **Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**

The included `.github/workflows/pages.yml` workflow will automatically build and deploy the site on every push to `main`.

The site will be live at `https://848vania.github.io` within a few minutes.

---

## Project Structure

```
.
├── _data/           # All content: profile, projects, skills, credentials, experience
├── _includes/       # Reusable HTML components (header, footer, cards)
├── _layouts/        # Page layout templates
├── assets/
│   ├── css/         # main.scss — full design system
│   ├── js/          # main.js — nav behavior
│   ├── img/         # Place images here
│   └── files/       # Place cv.pdf here
├── .devcontainer/   # VS Code Dev Container config
├── .github/workflows/ # GitHub Actions deploy workflow
├── _config.yml      # Jekyll config (site title, author, plugins)
├── Dockerfile       # Local development Docker image
├── docker-compose.yml
├── Gemfile          # Ruby dependencies
└── index.html       # One-page homepage
```

---

## Customizing the Design

The entire visual design lives in `assets/css/main.scss`. CSS custom properties at the top of the file control the color palette and typography:

```scss
:root {
  --color-bg:      #0F172A;   /* dark navy background */
  --color-surface: #1E293B;   /* card background */
  --color-accent:  #38BDF8;   /* cyan — links, highlights, buttons */
  --color-success: #22C55E;   /* green — credentials, awards */
  /* ... */
}
```

Edit these variables to change the entire site's color scheme.
