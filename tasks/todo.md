# Search Console sitemap fallback

- [x] Verify the generated XML sitemap over HTTP and as Googlebot.
- [x] Validate its XML structure and every listed URL.
- [x] Obtain Search Console's detailed error.
- [x] Add a Google-supported text sitemap to bypass XML parsing.
- [x] Advertise the text sitemap from `robots.txt`.
- [x] Render and validate the text sitemap output.
- [x] Review and commit the change atomically.

## Review

Added a dynamically generated `/sitemap.txt` containing the site's navigable
pages and member profiles, and made it the sitemap advertised by `robots.txt`.
The existing XML sitemap remains available, but Google can now use the simpler
text format that bypasses the failing XML parsing path.

Verification rendered 12 unique, absolute, same-origin HTTPS URLs with no blank
lines or duplicates. The front matter parses successfully and `git diff --check`
passes.
