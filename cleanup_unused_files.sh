#!/bin/bash

# Website Cleanup Script
# Removes unused files and directories from the Jekyll academic website
# Based on the architecture analysis in WEBSITE_ARCHITECTURE.md

echo "🧹 Starting website cleanup..."
echo "This script will remove unused template files and directories."
echo ""

# Function to safely remove files/directories
safe_remove() {
    if [ -e "$1" ]; then
        echo "Removing: $1"
        rm -rf "$1"
    else
        echo "Not found (already removed): $1"
    fi
}

# Ask for confirmation
read -p "Do you want to proceed with the cleanup? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Cleanup cancelled."
    exit 1
fi

echo ""
echo "🗑️  Removing unused template collections..."

# Remove example template collections
safe_remove "_talks"
safe_remove "_teaching" 
safe_remove "_publications"
safe_remove "_posts"

echo ""
echo "🗑️  Removing unused page templates..."

# Remove unused page templates (keeping only active ones)
safe_remove "_pages/archive-layout-with-content.md"
safe_remove "_pages/category-archive.html"
safe_remove "_pages/collection-archive.html"
safe_remove "_pages/markdown.md"
safe_remove "_pages/non-menu-page.md"
safe_remove "_pages/page-archive.html"
safe_remove "_pages/portfolio.html"
safe_remove "_pages/research.md"
safe_remove "_pages/sitemap.md"
safe_remove "_pages/tag-archive.html"
safe_remove "_pages/talks.html"
safe_remove "_pages/talkmap.html"
safe_remove "_pages/teaching.html"
safe_remove "_pages/terms.md"
safe_remove "_pages/year-archive.html"

echo ""
echo "🗑️  Removing development utilities..."

# Remove development utilities
safe_remove "markdown_generator"
safe_remove "talkmap"
safe_remove "talkmap.ipynb"
safe_remove "talkmap.py"

echo ""
echo "🗑️  Removing unused include templates..."

# Remove unused include templates (keeping only essential ones)
safe_remove "_includes/archive-single-card.html"
safe_remove "_includes/archive-single-cv.html"
safe_remove "_includes/archive-single-talk-cv.html"
safe_remove "_includes/archive-single-talk.html"
safe_remove "_includes/archive-single.html"
safe_remove "_includes/breadcrumbs.html"
safe_remove "_includes/browser-upgrade.html"
safe_remove "_includes/category-list.html"
safe_remove "_includes/comment.html"
safe_remove "_includes/comments.html"
safe_remove "_includes/comments-providers"
safe_remove "_includes/feature_row"
safe_remove "_includes/gallery"
safe_remove "_includes/group-by-array"
safe_remove "_includes/nav_list"
safe_remove "_includes/page__hero.html"
safe_remove "_includes/page__taxonomy.html"
safe_remove "_includes/paginator.html"
safe_remove "_includes/post_pagination.html"
safe_remove "_includes/read-time.html"
safe_remove "_includes/seo.html"
safe_remove "_includes/sidebar.html"
safe_remove "_includes/social-share.html"
safe_remove "_includes/tag-list.html"
safe_remove "_includes/toc"

echo ""
echo "🗑️  Removing unused layout templates..."

# Remove unused layout templates (keeping only essential ones)
safe_remove "_layouts/archive-taxonomy.html"
safe_remove "_layouts/archive.html"
safe_remove "_layouts/single.html"
safe_remove "_layouts/splash.html"
safe_remove "_layouts/talk.html"

echo ""
echo "🗑️  Cleaning up data directory..."

# Remove unused data files
safe_remove "_data/comments"

echo ""
echo "✅ Cleanup completed!"
echo ""
echo "📊 Summary of removed content:"
echo "   • Template collections (_talks, _teaching, _publications, _posts)"
echo "   • Unused page templates (17 files)"
echo "   • Development utilities (markdown_generator, talkmap)"
echo "   • Unused include templates (20+ files)"
echo "   • Unused layout templates (5 files)"
echo ""
echo "🔗 Active files remaining:"
echo "   • Core pages: about.md, publications.md, cv.md, 404.md"
echo "   • Essential layouts: minimal.html, default.html, compress.html"
echo "   • Essential includes: author-profile.html, masthead.html, footer.html, head.html, scripts.html, analytics.html"
echo "   • All assets and configuration files"
echo ""
echo "📖 See WEBSITE_ARCHITECTURE.md for complete documentation." 