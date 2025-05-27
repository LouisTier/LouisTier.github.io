# Personal Website Architecture Documentation

## 🏗️ Project Overview

This is a Jekyll-based academic portfolio website built on the [Academic Pages](https://github.com/academicpages/academicpages.github.io) template. The site showcases academic research, publications, CV, and professional experience with a modern dark/light mode toggle.

## 📁 Directory Structure & Usage

### 🔄 **Currently Active Files & Directories**

#### **Core Site Configuration**

```bash
_config.yml          # Main Jekyll configuration
_config.dev.yml      # Development-specific settings
Gemfile              # Ruby dependencies
Gemfile.lock         # Locked dependency versions
```

#### **Content Pages (Active)**

```
_pages/
├── about.md            # ✅ Home page (permalink: /)
├── publications.md     # ✅ Publications with talks section (permalink: /publications/)
├── cv.md               # ✅ Comprehensive CV (permalink: /cv/)
├── teaching.md         # ✅ Teaching experience (permalink: /teaching/)
├── portfolio.md        # ✅ Portfolio showcase (permalink: /portfolio/)
├── talks.md            # ✅ Standalone talks page (permalink: /talks/)
└── 404.md              # ✅ Error page (permalink: /404.html)
```

#### **Assets & Styling**

```
assets/
├── css/
│   ├── main.scss           # ✅ Main stylesheet entry point
│   ├── minimal.css         # ✅ Custom component styles
│   ├── dark-mode.css       # ✅ Dark mode theme styles
│   ├── collapse.css        # ✅ Collapsible UI components
│   └── academicons.css     # ✅ Academic icon fonts
├── js/
│   ├── _main.js            # ✅ Core JavaScript functionality
│   ├── custom.js           # ✅ Custom site interactions
│   ├── collapse.js         # ✅ Collapsible element handlers
│   └── main.min.js         # ✅ Minified production JS
└── fonts/                  # ✅ Icon font files (FontAwesome, Academicons)
```

#### **Site Data & Configuration**
```
_data/
├── navigation.yml     # ✅ Main navigation menu configuration
├── authors.yml        # ✅ Author information for multi-author support
└── ui-text.yml        # ✅ Internationalization strings
```

#### **Templates & Layouts**
```
_layouts/
├── minimal.html       # ✅ Primary layout for content pages
├── default.html       # ✅ Base HTML structure
├── single.html        # ✅ Individual post/page layout
└── compress.html      # ✅ HTML minification layout

_includes/
├── author-profile.html    # ✅ Sidebar author information
├── masthead.html          # ✅ Site header and navigation
├── footer.html            # ✅ Site footer
├── head.html              # ✅ HTML head section
├── scripts.html           # ✅ JavaScript loading
└── analytics.html         # ✅ Google Analytics integration
```

#### **Media & Downloads**
```
images/
├── profile.jpg        # ✅ Author profile photo
└── manifest.json      # ✅ PWA manifest file

files/pdf/
├── CV_LouisBERTHIER.pdf    # ✅ Downloadable CV
└── IRP_LouisBERTHIER.pdf   # ✅ Research project report
```

### ❌ **Unused Files & Directories (Can be Removed)**

#### **Template Example Content**
```
_talks/                                     # ❌ Example talk files (replaced by publications.md)
├── 2012-03-01-talk-1.md
├── 2013-03-01-tutorial-1.md
├── 2014-02-01-talk-2.md
└── 2014-03-01-talk-3.md

_teaching/                                  # ❌ Example teaching files (not in navigation)
├── 2014-spring-teaching-1.md
└── 2015-spring-teaching-2.md

_publications/                              # ❌ Example publication files (replaced by publications.md)
├── 2009-10-01-paper-title-number-1.md
├── 2010-10-01-paper-title-number-2.md
└── 2015-10-01-paper-title-number-3.md

_posts/                                     # ❌ Blog posts (not used, no blog navigation)
├── 2012-08-14-blog-post-1.md
├── 2013-08-14-blog-post-2.md
├── 2014-08-14-blog-post-3.md
├── 2015-08-14-blog-post-4.md
└── 2199-01-01-future-post.md
```

#### **Unused Page Templates**
```
_pages/
├── archive-layout-with-content.md    # ❌ Not linked in navigation
├── category-archive.html             # ❌ No categories used
├── collection-archive.html           # ❌ Not linked
├── markdown.md                       # ❌ Commented out in navigation
├── non-menu-page.md                  # ❌ Test page, not linked
├── page-archive.html                 # ❌ Not linked
├── research.md                       # ❌ Separate research page not used
├── sitemap.md                        # ❌ Not linked
├── tag-archive.html                  # ❌ No tags used
├── talkmap.html                      # ❌ Geographic talk mapping (talkmap_link: false)
├── terms.md                          # ❌ Not linked
└── year-archive.html                 # ❌ Commented out in navigation
```

#### **Utility Scripts (Development Only)**
```
markdown_generator/            # ❌ Development utilities, not used in production
├── PubsFromBib.ipynb          # Script to generate publications from BibTeX
├── publications.ipynb         # Notebook for publication management
├── publications.py            # Python script for publication generation
├── publications.tsv           # Publication data template
├── pubsFromBib.py             # BibTeX to markdown converter
├── talks.ipynb                # Notebook for talk management
├── talks.py                   # Python script for talk generation
└── talks.tsv                  # Talk data template

talkmap/                       # ❌ Geographic talk mapping (disabled)
├── leaflet_dist/              # Leaflet.js library
├── map.html                   # Interactive map
└── org-locations.js           # Location data

talkmap.ipynb                  # ❌ Jupyter notebook for map generation
talkmap.py                     # ❌ Python script for map generation
```

#### **Unused Include Templates**
```
_includes/
├── archive-single-card.html      # ❌ Card layout for archives
├── archive-single-cv.html        # ❌ CV-style archive entries
├── archive-single-talk-cv.html   # ❌ Talk entries for CV
├── archive-single-talk.html      # ❌ Individual talk layout
├── archive-single.html           # ❌ Generic archive entry
├── breadcrumbs.html              # ❌ Navigation breadcrumbs
├── browser-upgrade.html          # ❌ Browser compatibility notice
├── category-list.html            # ❌ Category listing
├── comment.html                  # ❌ Comment system
├── comments.html                 # ❌ Comments section
├── feature_row                   # ❌ Featured content rows
├── gallery                       # ❌ Image gallery
├── group-by-array                # ❌ Array grouping utility
├── nav_list                      # ❌ Navigation list generator
├── page__hero.html               # ❌ Hero section template
├── page__taxonomy.html           # ❌ Taxonomy display
├── paginator.html                # ❌ Pagination controls
├── post_pagination.html          # ❌ Post navigation
├── read-time.html                # ❌ Reading time estimation
├── seo.html                      # ❌ SEO meta tags (basic SEO handled in head)
├── sidebar.html                  # ❌ Generic sidebar (custom sidebar used)
├── social-share.html             # ❌ Social sharing buttons
├── tag-list.html                 # ❌ Tag listing
└── toc                           # ❌ Table of contents
```

#### **Unused Layout Templates**
```
_layouts/
├── archive-taxonomy.html         # ❌ Archive by taxonomy
├── archive.html                  # ❌ Archive listing
├── single.html                   # ❌ Single post layout
├── splash.html                   # ❌ Landing page layout
└── talk.html                     # ❌ Individual talk layout
```

## 🔗 **File Relationships & Dependencies**

### **Page Flow**
```
Navigation (_data/navigation.yml)
    ↓
Home (about.md) → Publications (publications.md) → CV (cv.md)
    ↓                    ↓                            ↓
Layout: minimal.html → Layout: minimal.html → Layout: minimal.html
    ↓                    ↓                            ↓
Includes: author-profile.html, masthead.html, footer.html
```

### **Styling Architecture**
```
main.scss (entry point)
    ↓
Imports from _sass/ directory
    ↓
Enhanced by:
├── minimal.css (component styles)
├── dark-mode.css (theme switching)
├── collapse.css (UI interactions)
└── academicons.css (academic icons)
```

### **JavaScript Dependencies**
```
_main.js (core functionality)
    ↓
Enhanced by:
├── custom.js (site-specific interactions)
├── collapse.js (collapsible elements)
└── jQuery plugins (navigation, etc.)
```

## 🎛️ **Key Features & Functionality**

### **Active Features**
- ✅ **Dark/Light Mode Toggle** - Complete theme switching
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Academic Publications** - Organized with tabs (Journals, Conferences, Talks, Posters)
- ✅ **MT180 Science Communication** - Featured presentation with video
- ✅ **Interactive CV** - Tabbed sections with awards, education, experience
- ✅ **Professional Profile** - Author sidebar with social links
- ✅ **SEO Optimization** - Meta tags, structured data
- ✅ **Performance Optimization** - Minified assets, efficient loading

### **Disabled/Unused Features**
- ❌ **Blog System** - Posts collection exists but not in navigation
- ❌ **Talk Map** - Geographic visualization disabled (talkmap_link: false)
- ❌ **Comments** - Comment system not configured
- ❌ **Portfolio Section** - Commented out in navigation
- ❌ **Teaching Pages** - Individual teaching posts disabled
- ❌ **Archive Pages** - Category/tag archives not used
- ❌ **Social Sharing** - Social share buttons not included

## 🛠️ **Development Workflow**

### **Local Development**
```bash
bundle install                                                  # Install dependencies 
bundle exec jekyll serve --config _config.yml,_config.dev.yml   
jekyll serve -l -H localhost
```

### **Key Configuration Files**
- `_config.yml` - Production settings
- `_config.dev.yml` - Development overrides
- `_data/navigation.yml` - Menu structure
- `assets/css/main.scss` - Styling entry point

### **Content Management**
- **Publications** - Edit `_pages/publications.md`
- **CV** - Edit `_pages/cv.md`
- **Profile** - Edit `_pages/about.md`
- **Site Settings** - Edit `_config.yml`
- **New Pages** - Use `_pages/TEMPLATE.md` as template (always use `.md` format)

## 🧹 **Cleanup Recommendations**

### **Safe to Remove**
1. **Template Collections**: `_talks/`, `_teaching/`, `_publications/`, `_posts/`
2. **Unused Pages**: Most files in `_pages/` except `about.md`, `publications.md`, `cv.md`, `404.md`
3. **Development Tools**: `markdown_generator/`, `talkmap/`, `talkmap.ipynb`, `talkmap.py`
4. **Unused Templates**: Most files in `_includes/` and `_layouts/` that aren't referenced

### **Keep for Future Use**
- All configuration files (`_config.yml`, `Gemfile`, etc.)
- All active assets (`assets/css/`, `assets/js/`, `assets/fonts/`)
- Core templates (`_layouts/minimal.html`, `_layouts/default.html`)
- Essential includes (`_includes/author-profile.html`, etc.)
- User files (`images/profile.jpg`, `files/pdf/`)

## 📋 **File Format Consistency**

### **Standardized on Markdown (.md)**
All content pages use Markdown format for consistency and maintainability:
- ✅ **Easy Content Editing** - Natural, readable syntax
- ✅ **Version Control Friendly** - Clear diffs in Git
- ✅ **Consistent Experience** - Same editing workflow across all pages
- ✅ **Future-Proofing** - Portable format across platforms

### **Format Guidelines**
- **Content Pages**: Always use `.md` (about.md, publications.md, cv.md)
- **Page Template**: Use `_pages/TEMPLATE.md` for new pages
- **Layout**: All content pages use `layout: minimal`
- **HTML Files**: Only for complex dynamic functionality (currently none in active use)

## 📊 **Site Performance**

### **Optimizations Implemented**
- **CSS Minification** - Via `compress.html` layout
- **JavaScript Bundling** - Minified `main.min.js`
- **Font Optimization** - Local font hosting
- **Image Optimization** - Responsive profile image
- **Lazy Loading** - For non-critical resources

### **Core Web Vitals Considerations**
- **LCP** - Optimized through critical CSS inlining
- **CLS** - Stable layouts with proper sizing
- **FID** - Minimal JavaScript blocking

---

*Last Updated: January 2025*
*Maintained by: Louis Berthier* 