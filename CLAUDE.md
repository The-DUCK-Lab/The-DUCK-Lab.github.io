# DUCK Lab website — maintainer notes

Jekyll site (Lab Website Template), deployed to GitHub Pages from `main`.

## Content data files

- `_data/news.yaml` — the news feed. Newest first, sorted by `date` (`MM-YYYY`).
  Every entry **must** declare a `members: [...]` list, or it won't appear on any
  member page (member-page matching is by `members[]` only).
- `_data/sources.yaml` — **hand-edited** list of publications (the source of truth).
- `_data/citations.yaml` — **generated**, do not hand-edit. Produced from
  `sources.yaml` by `_cite/cite.py`. The research page reads *this* file.

## Publications pipeline (`sources.yaml` → `citations.yaml`)

`_cite/cite.py` runs **Manubot** on each source's `id` to fetch metadata, then
overlays the fields you set in `sources.yaml` (`citation.update(source)` — your
fields win). Practical consequences:

- **Every entry needs an `id` that Manubot can resolve** (`doi:…`, `arxiv:…`, or
  `url:https://…`). If Manubot errors on a user-entered source, CI **fails**
  (`cite.py` exits 1). The research page also looks papers up by `id`, so it
  cannot be blank.
- For papers with no DOI/arXiv yet, use the **OpenReview _forum_ URL** as the id
  (`url:https://openreview.net/forum?id=XXXX`). The `/pdf?id=…` URL errors in
  Manubot; the `/forum?…` one returns harmless placeholder metadata that your
  explicit `title`/`authors`/etc. override.
- To render a paper with **no clickable link**, set `link: ""` explicitly —
  otherwise Manubot fills `link` from the resolved URL.
- Images live in `images/research/`; reference as `image: /images/research/<file>.png`.

## ⚠️ Build-ordering quirk when editing `sources.yaml`

`on-push` runs `update-citations` (regenerates `citations.yaml`, auto-commits it)
**then** `build-site`. But `build-site` checks out the *triggering* commit, and the
citations auto-commit is made with `GITHUB_TOKEN`, which (by GitHub design) does
**not** trigger a new workflow. So the site is built **one commit before** the
regenerated citations exist — a newly added paper appears in `citations.yaml` on
`main` but **not on the live site** until the next build.

**Fix:** after `on-push` finishes, manually rebuild against main's tip:

```
gh workflow run build-site.yaml --ref main
```

(News-only or other non-`sources.yaml` edits are unaffected — they're in the
triggering commit already.)

## Commit / push conventions

Atomic commits (one logical change each). Ask before pushing. Branch structure:
work on `main`; GitHub Pages is served from the `gh-pages` branch by CI.
