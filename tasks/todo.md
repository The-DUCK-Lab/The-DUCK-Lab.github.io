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
