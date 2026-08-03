# Google search title

- [x] Inspect the current title and structured-data implementation.
- [x] Confirm current Google title-link and site-name guidance.
- [x] Add a dedicated homepage SEO title without changing its navigation label.
- [x] Align the homepage heading, Open Graph site name, and WebSite data.
- [x] Render and inspect the generated homepage metadata.
- [x] Review the final diff and commit the change atomically.

## Review

Implemented an explicit `seo_title` for the homepage while retaining `title: Home`
for navigation. The title, Open Graph, Twitter, WebPage, and WebSite signals now
agree on the preferred page and site names. The homepage hero is also a semantic
`h1`.

Verification passed for the rendered metadata values, JSON-LD parsing, YAML,
Ruby plugin syntax, and `git diff --check`. A full Jekyll build could not run on
the host's Ruby 4 because the repository's Ruby 3.1-era `eventmachine` dependency
does not compile there; GitHub Actions uses Ruby 3.1.
