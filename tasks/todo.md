# Add Findings of EMNLP 2026 paper to Research

- [x] Inspect the publication schema, ordering, and Research-page rendering.
- [x] Verify the title, author order, venue, date, and canonical paper link.
- [x] Add the paper to the hand-edited publication source.
- [x] Validate the YAML and generated Research-page inclusion.
- [x] Commit the publication update atomically and ask before pushing.

## Review

Added *Stay Within Your Bounds* as the first paper in the 2026 Research list,
with the verified author order, Findings of EMNLP venue, official conference
date, arXiv abstract link, and public code repository. The shared fallback image
is used until a paper-specific graphic is available.

The publication source parses as valid YAML, contains no duplicate identifiers,
and passes required-field, author-order, image-existence, and Research-page
ordering checks. The local Manubot/Jekyll dependencies are not installed, so the
generated citation and deployed page will be verified through the repository's
CI workflow after an approved push. The content change was committed atomically
as `89caf7b`.

---

# Findings of EMNLP 2026 news item

- [x] Match the existing news-feed format and ordering.
- [x] Verify the paper title, authors, affiliations, and venue on arXiv.
- [x] Add a warm announcement highlighting the Luxembourg collaboration.
- [x] Congratulate Vincenzo on his first paper.
- [x] Validate the YAML, link, ordering, and Markdown structure.
- [x] Commit the news item atomically and ask before pushing.
- [x] Verify public Google Scholar profiles for the named collaborators.
- [x] Add the verified profile links to the announcement.

## Review

Added an August 2026 announcement for *Stay Within Your Bounds*, linking to the
arXiv abstract page and noting its acceptance as a long paper to Findings of
EMNLP 2026. The copy recognises Vincenzo Collura, Karim Tit, Mike Papadakis, and
Maxime Cordy at the University of Luxembourg and congratulates Vincenzo on his
first paper.

The news YAML parses successfully, all required fields are present, the feed
remains newest-first, and the Markdown link and milestone text are present. A
full local Jekyll build was unavailable because the checkout's bundled gems are
not installed; the link uses the same Markdown structure as existing entries.
The announcement was committed atomically as `2c61344`.

Karim Tit, Mike Papadakis, and Maxime Cordy now link to verified public Google
Scholar profiles. No public Scholar profile could be found for Vincenzo Collura,
so his name links to his official University of Luxembourg profile rather than
risking a false attribution. This can be replaced if a Scholar URL is provided.
The collaborator-link update was committed atomically as `8223d55`.

---

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
