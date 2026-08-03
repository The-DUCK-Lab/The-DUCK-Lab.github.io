# Structured-data syntax fix

- [x] Compare the local template with `origin/main` and the deployed homepage.
- [x] Reproduce the JSON-LD parse failure from the deployed HTML.
- [x] Validate the local one-character comma fix against both JSON-LD blocks.
- [x] Commit only `_includes/meta.html` as an atomic fix.
- [ ] Ask for confirmation before pushing the fix.

## Review

The deployed Organization JSON-LD is missing a comma after
`"DUCK Neuro-symbolic Lab"`, so its `alternateName` array cannot be parsed.
The user's local `_includes/meta.html` already contains the correct comma but
was never committed or pushed. Across all pages in the live sitemap, exactly one
of 32 JSON-LD blocks fails: the homepage Organization block. Applying only the
local comma change makes all 32 blocks parse successfully with Ruby's JSON
parser. The fix is committed atomically as `ddc7a8d`.

---

# Search Console sitemap fetch diagnosis

- [x] Confirm the deployed text sitemap and `robots.txt` responses.
- [x] Compare normal and Google crawler HTTP/TLS/DNS behaviour.
- [x] Verify current Google sitemap requirements from primary documentation.
- [x] Inspect repository deployment and domain configuration for a shared fetch issue.
- [x] Run Search Console Live URL Inspection on the exact submitted sitemap URL.
- [ ] Confirm that the Search Console property has no unresolved manual action.
- [x] Identify whether a code change can address the root cause.
- [x] Avoid changing production without evidence of a site-side defect.

## Review

The deployed `/sitemap.txt` returns a direct HTTP 200 as `text/plain` to normal,
desktop Googlebot, and smartphone Googlebot requests. It contains 12 absolute
HTTPS URLs, all of which return 200. `/sitemap.xml` also returns a direct 200 as
`application/xml`, validates successfully, and contains 13 reachable URLs.
`robots.txt` allows crawling and advertises the text sitemap. The standard
GitHub Pages DNS records and TLS certificate are valid.

No shared site-side delivery defect was found. Google's documentation classifies
`Sitemap could not be read` as a fetch failure and prescribes Live URL Inspection
of the exact submitted URL, where `Crawl allowed?` must be `Yes` and `Page fetch`
must be `Successful`. It also lists unresolved manual actions and transient
Google/server errors as possible causes.

Search Console's live test of `/sitemap.txt` passed on 3 August 2026 at 16:30
and reported that the URL is available to Google. This confirms Google's live
crawler can retrieve the deployed sitemap. Only the Manual Actions report and
Search Console's asynchronous sitemap-report processing remain to check.
