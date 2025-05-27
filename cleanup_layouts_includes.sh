#!/bin/bash

# Cleanup Script for Unused Layouts and Includes
# Removes template files that are not used in the current minimal website design

echo "🧹 Cleaning up unused layouts and includes..."
echo ""

# Function to safely remove files/directories
safe_remove() {
    if [ -e "$1" ]; then
        echo "✅ Removing: $1"
        rm -rf "$1"
    else
        echo "⚠️  Not found (already removed): $1"
    fi
}

# Ask for confirmation
read -p "This will remove unused layout and include files. Continue? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Cleanup cancelled."
    exit 1
fi

echo ""
echo "🗑️  Removing unused layout files..."

# Remove unused layouts (keep: compress.html, default.html, minimal.html)
safe_remove "_layouts/archive-taxonomy.html"
safe_remove "_layouts/archive.html"
safe_remove "_layouts/single.html"
safe_remove "_layouts/splash.html"
safe_remove "_layouts/talk.html"

echo ""
echo "🗑️  Removing unused include files..."

# Remove archive-related includes
safe_remove "_includes/archive-single-card.html"
safe_remove "_includes/archive-single-cv.html"
safe_remove "_includes/archive-single-talk-cv.html"
safe_remove "_includes/archive-single-talk.html"
safe_remove "_includes/archive-single.html"

# Remove navigation includes (replaced by custom minimal layout)
safe_remove "_includes/masthead.html"
safe_remove "_includes/sidebar.html"
safe_remove "_includes/author-profile.html"
safe_remove "_includes/breadcrumbs.html"

# Remove social/comment includes
safe_remove "_includes/comments.html"
safe_remove "_includes/comments-providers/"
safe_remove "_includes/social-share.html"

# Remove unused UI components
safe_remove "_includes/feature_row"
safe_remove "_includes/gallery"
safe_remove "_includes/page__hero.html"
safe_remove "_includes/toc"
safe_remove "_includes/nav_list"

# Remove pagination includes
safe_remove "_includes/paginator.html"
safe_remove "_includes/post_pagination.html"

# Remove taxonomy includes
safe_remove "_includes/category-list.html"
safe_remove "_includes/tag-list.html"
safe_remove "_includes/page__taxonomy.html"

# Remove utility includes
safe_remove "_includes/read-time.html"
safe_remove "_includes/group-by-array"
safe_remove "_includes/comment.html"

echo ""
echo "✅ Layout and include cleanup completed!"
echo ""
echo "📋 Remaining essential files:"
echo "   _layouts/:"
echo "     ✅ compress.html (HTML minification)"
echo "     ✅ default.html (base template)"
echo "     ✅ minimal.html (main layout)"
echo ""
echo "   _includes/:"
echo "     ✅ base_path (path utility)"
echo "     ✅ head.html (HTML head)"
echo "     ✅ head/custom.html (custom head content)"
echo "     ✅ scripts.html (JavaScript loading)"
echo "     ✅ seo.html (SEO meta tags)"
echo "     ✅ analytics.html (analytics integration)"
echo "     ✅ browser-upgrade.html (IE upgrade notice)"
echo "     ✅ footer/ (footer content)"
echo ""
echo "🎉 Your website structure is now optimized!" 