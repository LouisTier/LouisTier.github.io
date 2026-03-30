# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal academic website for Louis Berthier (PhD Candidate, Applied Mathematics & ML, École Polytechnique). Built on the **al-folio** Jekyll theme, deployed to GitHub Pages at `LouisTier.github.io`.

## Build & Development Commands

```bash
# Local development with Docker (recommended)
docker compose up

# Local development without Docker (requires Ruby 3.3.5, ImageMagick, Python 3)
bundle install
bundle exec jekyll serve --livereload

# Production build (as CI does it)
JEKYLL_ENV=production bundle exec jekyll build

# CSS purging (run after build, as deploy workflow does)
npm install -g purgecss
purgecss -c purgecss.config.js

# Format Liquid templates
npx prettier --write "**/*.liquid"
```

The Docker setup serves on `localhost:8080` with live reload on port 35729. It auto-restarts Jekyll when `_config.yml` changes.

## Deployment

- Push to `master` triggers `.github/workflows/deploy.yml`
- Builds with `JEKYLL_ENV=production`, purges CSS, deploys `_site/` to the `gh-pages` branch
- Only triggers on changes to site-relevant files (assets, templates, scss, bib, yml, etc.)

## Architecture

### Content Collections

- `_pages/` — top-level site pages (about, cv, publications, talks, teaching, etc.). Unused pages live in `_pages/unused/`.
- `_bibliography/papers.bib` — BibTeX file driving the publications page via `jekyll-scholar`
- `_data/` — structured data: `cv.yml`, `coauthors.yml`, `repositories.yml`, `socials.yml`, `venues.yml`
- `_news/`, `_posts/`, `_projects/`, `_books/` — content collections defined in `_config.yml`

### Templating

- `_layouts/` — Liquid layouts (`about`, `page`, `post`, `bib`, `cv`, `distill`, etc.)
- `_includes/` — reusable Liquid partials (header, footer, scripts, social, citations, etc.)
- `_sass/` — SCSS partials (`_base.scss`, `_layout.scss`, `_themes.scss`, `_variables.scss`)

### Custom Plugins

`_plugins/` contains Ruby plugins for the build:

- `cache-bust.rb` — cache busting for assets
- `external-posts.rb` — pulls posts from external RSS feeds
- `google-scholar-citations.rb`, `inspirehep-citations.rb` — fetch citation counts
- `hide-custom-bibtex.rb` — filters internal BibTeX fields from output
- `download-3rd-party.rb` — downloads third-party libraries when `third_party_libraries.download: true` in config

### Configuration

`_config.yml` is the central config file. Key sections:

- Site metadata (name, URL, description)
- Feature flags (`enable_math`, `enable_darkmode`, `enable_masonry`, etc.)
- `third_party_libraries` — CDN URLs and SRI hashes for all JS/CSS dependencies
- `scholar` — jekyll-scholar settings for bibliography rendering
- `jekyll-archives` — year/tag/category archive generation

### Assets

`assets/` contains `css/`, `js/`, `img/`, `json/resume.json` (drives the CV page via `jekyll-get-json`), `pdf/`, `jupyter/`, `bibliography/`, and media files.

## Key Patterns

- Pages use YAML front matter for layout, title, permalink, and feature toggles
- The site owner uses `TODO (LouisTier):` comments in config/pages to mark pending customizations
- Bibliography entries in `papers.bib` support custom fields (`preview`, `pdf`, `code`, `slides`, `poster`, `arxiv`, `selected`) that control rendering in `_layouts/bib.liquid`
- Third-party libraries can be served from CDN (default) or downloaded locally by setting `third_party_libraries.download: true`
