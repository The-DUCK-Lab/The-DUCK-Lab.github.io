# Lessons

- A successful public and Googlebot-user-agent fetch does not prove that Google
  Search Console can retrieve a sitemap from its own infrastructure. Before
  concluding that a `Couldn't fetch` status is stale, obtain the sitemap detail
  error or live URL-inspection result and use that diagnostic to distinguish a
  hosting/access problem from a parsing problem.
- If Search Console gives the same `Unable to read sitemap` result for valid XML
  and plain-text sitemaps, do not add another format fallback. Treat the shared
  property, hostname, DNS, TLS, redirect, or Google fetch path as the primary
  suspect and verify that layer before making another production change.
- When a dirty file contains a change that directly overlaps the feature being
  pushed, identify and validate that change before classifying it as unrelated.
  Preserve user ownership, but explicitly surface the overlap and ask whether
  the fix should be included so a known production error is not left behind.
