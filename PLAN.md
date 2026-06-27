# Website Refinement — Progress

Tracking list for the June 2026 refinement pass. Tick items as they're verified locally.

## ✅ Done

### Publications & paper naming
- [x] Drop target venue from unaccepted work: `torchsom` note `"submitted to JMLR"` → **"Preprint, Under Review"** (`_bibliography/papers.bib`)
- [x] Rename **JiT-CP → Self-Organized CP** (*Under Review*) and **AnyhowCP → Masked CP** (*To be Submitted*) in `research.md`, `talks.md`, `cv.yml`, `resume.json`
- [x] Rewrite Masked CP description to its real *mask-valid* framing (from `Mask_CP-UAI-2026/main.tex`)
- [x] Preserve generic *"Just-in-Time Learning"* where it's the soft-sensing strategy / SOM retrieval (not the renamed method)
- [x] Add both papers as `@unpublished` entries (render status, **no venue**): `Self-Organized Conformal Prediction` + `Beyond Anytime: Mask-Valid Conformal Prediction`
- [x] Fix orphaned `note` stranded outside the rubber-mixing entry

### Hackathons
- [x] New page **`/hackathons/`** under the **Engagements** dropdown
- [x] Move Mistral/Cerno card + video there (verbatim)
- [x] Add **Paris Fintech Hackathon** (Apr 25–26 2026, HEC Paris) card
- [x] Add **Hack the World(s)** (Jun 19–20 2026, ESIEE Paris, World Models/JEPA) card
- [x] Add **AI'NNOV Manufacturing IT Hackathon — Michelin** (1st place, 2024) card *(discovered in cv.yml awards)*
- [x] Fix Cerno project back-link `/outreach/#hackathons` → `/hackathons/`
- [x] Remove the hackathons section from `outreach.md`

### Schools & images
- [x] Add **RJS 2026** card (May 17–21 2026, Porquerolles; presented *Self-Organized Conformal Prediction*)
- [x] Rename Outreach `## Winter Schools` → `## Schools`
- [x] Resize Michelin DoctoBib'Day photos (12.5/13 MB → 187/183 KB) + add to Talks card
- [x] Place `RJS.JPG` → `assets/img/rjs2026.jpg`; clear the `To be used and moved/` staging folder
- [x] Fix `"self-organizings"` typo on Talks

### Research content & site-wide dash cleanup (pass 2)
- [x] Rewrite the three Michelin pillars in `research.md` from the PhD drafts: **5** adaptive soft-sensing strategies (was 3), real numbers (167→~18 variables ≈ 90% cut; 35,125 batches; ~59% short-horizon / >90% year-long error reduction, replacing the unsourced "61%")
- [x] Reframe **Self-Organized CP** around *regional coverage gaps* + *unsupervised group discovery* (SOM cells/neighborhoods/prototypes, cell-conditional coverage), in `research.md`, `papers.bib` abstract, `talks.md` posters, `outreach.md` RJS card
- [x] Reframe **Masked CP** around *beyond-anytime*, *binary monitoring masks*, *restart-validity*, linear-constraint schedules, in `research.md` + `papers.bib` abstract
- [x] Drop AI-style em/en dashes site-wide (whole-site scope): prose → commas/colons, metadata field separators → middot `·`. Swept `research.md`, `about.md`, `talks.md`, `outreach.md`, `seminars.md`, `hackathons.md`, `teaching.md`, `_projects/1_cerno.md`, `_data/cv.yml`, `assets/json/resume.json`, `_bibliography/papers.bib`
- [x] Kept intentional `---` horizontal rules, number ranges (`17-21`, `77-99%`), and compound hyphens
- [x] Static validation: **0** em/en dashes remain in content; `resume.json` payload parses (JSONC, `//` comments are pre-existing & tolerated by al-folio); `cv.yml` valid YAML; `papers.bib` braces balanced (82/82); no `JiT-CP`/`AnyhowCP` strings

### Enhancement pass: writing, organization, depth (pass 3)
- [x] **Research page** deepened (layered inline): soft sensing gains XGBoost > CatBoost > MLP, dual feature selection, two horizons (~6 weeks / 1 year); **Self-Organized CP** gains 3 retrieval rules + 8 benchmarks (7/8, ~7% gap reduction, ~6% larger sets); **Masked CP** gains restart-validity, linear-constraint schedule + replanning, polynomial vs logarithmic informativeness; soft sensor / conformal prediction / SHAP / SOM defined on first use; TorchSOM credibility anchor (Apache 2.0, 90% coverage)
- [x] **Homepage** opener sharpened (tire quality on Michelin lines, flags untrustworthy predictions), CMAP/École redundancy removed, collaboration tone warmed, research pointer added
- [x] **Talks**: two duplicate Self-Organized CP posters merged into one (SIAM UQ26 + Michelin DoctoBib'Day); rhetorical "How do you...?" openers replaced with value statements; venue + jargon context added; `over 35,000` corrected to `35,125`
- [x] **Seminars** APAW intro made concrete (names the topics actually presented); editorial "every ML practitioner should read" removed
- [x] **Outreach** ECAS and MBZUAI school cards gained an honest why-I-went / takeaway tied to the UQ and diffusion work
- [x] **Cerno** claims softened (`bias-free` to `bias-reducing`, `rethinks recruitment end-to-end` to `reimagines the first round of hiring`) plus an honest 36-hour proof-of-concept caveat
- [x] **Publications** framing intro + page description added
- [x] **CV** Research Interests rewritten to match the real work; TorchSOM line enriched
- [x] **`resume.json`** soft-sensing bullet corrected (`up to 61% MSE` to the real ~59% short / >90% year-long)
- [x] **Accents** standardized site-wide: École Polytechnique, Centre de Mathématiques Appliquées, Fréjus
- [x] Static validation: 0 em/en dashes, 0 unaccented Ecole/Mathematiques/Frejus, `resume.json` JSONC parses, `cv.yml` valid YAML, `papers.bib` 82/82, div balance preserved on talks + hackathons

### Cleanup & branding (pass 4)
- [x] **`venues.yml`** trimmed to the 5 venues actually cited (arXiv, Software, J. Neurosci. Methods, ICASSP, Systems & Control T.); dropped al-folio's unused physics defaults (AJP, PhysRev, Vision)
- [x] Cleared stale `TODO (LouisTier)` markers in `venues.yml`, `coauthors.yml` (already complete), `repositories.yml`; removed the commented al-folio example repos/users
- [x] Removed al-folio sample leftovers `_bibliography/examples.bib` + `assets/pdf/example_pdf.pdf` (grep-confirmed unreferenced; scholar reads `papers.bib` only)
- [x] Real **LB favicon**: authored `assets/img/favicon.svg` (monogram) and set `icon: favicon.svg` in `_config.yml`, replacing the `💿` emoji; dropped the stock layout TODO comment
- [x] Live verification on :8080 (after Jekyll restart): `<head>` links `/assets/img/favicon.svg` (served 200, image/svg+xml); `/publications/` still renders all 7 entries with venue badges intact; data files valid YAML

### Discovered along the way (CV data source)
- [x] The CV page renders from **`assets/json/resume.json`** (`_layouts/cv.liquid` uses it whenever `jekyll_get_json` populates `site.data.resume`); **`_data/cv.yml` is a dormant fallback that never renders**. Corrections were ported to `resume.json` (the `up to 61% MSE` figure, TorchSOM credibility line). See open decision below.

### Research revision + CV Augmodo (pass 5)
- [x] **Research page** revised per review: added the Augmodo **hard-negative / RF-DETR vs YOLO** empty-shelf-detection bullet (public-safe, no client/dataset names); trimmed soft sensing (dropped the "70/30" detail and the SHAP-selection + base-learner sentences)
- [x] Cleaned the two CP labels to full names only, **Self-Organized Conformal Prediction** and **Mask-Valid Conformal Prediction** (dropped the abbreviation + status wrapper on the research page; status still shown on Publications)
- [x] Corrected the SOCP result to the paper figure: ~8% regional-coverage-gap reduction for only ~1.2% larger prediction sets (WCovGap; sufficient-calibration subset, 7/8 improved)
- [x] **Rewrote TorchSOM** from the JMLR draft: lowest topographic error in every config (34-81% below MiniSom), 74-98% faster than MiniSom on CPU, up to ~8x faster than somoclu on GPU, plus clustering / 7 visualizations / FAISS / hex-toroidal grids, Apache-2.0 on PyPI, 90% coverage
- [x] **CV (`resume.json`)**: added the Augmodo RF-DETR/hard-negative bullet; aligned the TorchSOM speedup to the JMLR figure (74-98% on CPU), replacing the stale 77-99%
- [x] Live-verified on :8080 (`/research/` + `/cv/`); confidentiality grep clean (no client/dataset/internal names); `resume.json` JSONC parses; 0 em/en dashes

### Page-by-page review round (pass 6)
- [x] **Teaching**: class size added (20 to 25 students per session)
- [x] **Projects**: added `_projects/2_paris_fintech.md` and `_projects/3_hack_the_worlds.md` placeholders (category hackathon; event copy + `TODO (LouisTier)` for project specifics)
- [x] **Publications**: refreshed SOCP + Masked CP abstracts to the papers' verbatim text; SOCP authors confirmed against the paper
- [x] **Outreach**: schools reordered latest-first (RJS 2026, MBZUAI 2026, ECAS 2025)
- [x] **Seminars**: added a page intro, section leads, and a clearer founder heading
- [x] **Talks**: "Presented at 2 venues" badge + explicit wording on the Self-Organized CP poster; kept only the first (horizontal) Michelin DoctoBib photo
- [x] **CV (`resume.json`)**: fed with the ENSTA teaching role (20-25 students) and a new certificates section (ECAS, MBZUAI, RJS)
- [x] **Repositories**: left as-is per request

### Publications expansion (pass 7)
- [x] **Masked CP authors corrected** to Hegazy, Berthier, Dieuleveut, Jordan (Eric Moulines removed; Mahmoud Hegazy + Michael I. Jordan added), per Louis's real author block
- [x] Added 3 papers to `/publications/`: **IEEE ETFA 2026** (accepted, `@inproceedings`, venue named + ETFA badge), **C&CE 2026** (under review, no venue), **Journal of Intelligent Manufacturing 2026** (to be submitted, no venue)
- [x] Live-verified: 10 entries; ETFA shows its venue + "Accepted"; under-review / to-be-submitted entries show status only (no leaked venue); `papers.bib` braces 107/107; 0 dashes

### CV consolidation onto cv.yml (pass 8)
- [x] Migrated ALL of `resume.json` into `_data/cv.yml` (General Information, Education, Experience incl. ENSTA teaching + shelf-attention, Open Source, Honors & Awards, Skills, Research Interests, Interests, Volunteering, References)
- [x] Retired the JSON Resume route: commented out `jekyll_get_json` + `jsonresume` in `_config.yml`; **deleted `assets/json/resume.json`** so `cv.yml` is the single source
- [x] Hit a stale-watcher crash (running Jekyll tried to `stat` the just-deleted resume.json); fixed with a clean container restart (full rebuild)
- [x] Live-verified `/cv/` now renders from `cv.yml`: 10/10 sections, ENSTA teaching + shelf-attention + TorchSOM 74-98% + references + skills all present, PDF button intact, valid YAML, 0 dashes
- Note: the downloadable `assets/pdf/cv_lb.pdf` is a separate static file and does not auto-regenerate

### CV reverted to resume.json rendering (pass 9)
- [x] Louis preferred the `resume.json` rendering: recreated `assets/json/resume.json` (current content, in parity with `cv.yml`) and re-enabled the `jekyll_get_json` + `jsonresume` route in `_config.yml`
- [x] `_data/cv.yml` kept fully populated as a maintained backup (now content-equal to `resume.json`, no longer the stale fallback)
- [x] Live-verified `/cv/` renders from `resume.json` again (language flags present, cv.yml-only sections absent); teaching, shelf-attention, TorchSOM 74-98%, references all intact; PDF button intact

## 🙋 Louis needs to check
- [ ] **Hackathons page + Projects placeholders**: provide the project details (name, one-liner, teammates with links, result) for **Hack the World(s)**, **Paris Fintech**, and **AI'NNOV**. The `[bracketed]` blanks on `/hackathons/` and the `TODO (LouisTier)` notes in `_projects/2_paris_fintech.md` + `_projects/3_hack_the_worlds.md` mark exactly where.
- [x] **Masked CP author list** resolved by Louis: Hegazy, Berthier, Dieuleveut, Jordan.
- [x] **`cv.yml` decision** resolved: CV renders from `resume.json` (preferred rendering); `_data/cv.yml` kept fully populated as a maintained backup, in parity with `resume.json`. (Heads-up: two CV files now exist again on purpose, edit `resume.json` for the live CV.)
- [ ] Sanity-check the SOCP / Masked CP / ETFA / C&CE / JIM titles, authors, and abstracts on `/publications/` against the papers.
- [ ] **Optional metrics**: real numbers for Augmodo scale and APAW attendance if you want them surfaced.

## 🔍 Verify before committing
- [ ] `docker compose up` → review `/` (home), `/research/`, `/publications/`, `/hackathons/`, `/outreach/`, `/seminars/`, `/talks/`, `/teaching/`, `/cv/`
- [ ] Confirm the merged Self-Organized CP poster renders once with both venues, and the `[bracketed]` hackathon placeholders read as intended
- [ ] Commit when satisfied
