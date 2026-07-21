# Hanzo Team Docs

Product documentation for **Hanzo Team** — the all-in-one workspace for project
tracking, documents, chat, planning, and drive. Published at
**[docs.hanzo.team](https://docs.hanzo.team)**.

Built on the house docs stack: **[Fumadocs](https://fumadocs.dev)** + Next.js
(static export) + Tailwind, the same toolchain as the rest of the `hanzo-docs`
org. Deployed to **Cloudflare Pages** by self-hosted CI (Cloudflare credentials
are pulled from Hanzo KMS — never hard-coded).

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3007
```

## Build

```bash
pnpm build      # static export to ./out
```

## Structure

```
content/docs/       # MDX docs (one folder per section, meta.json = sidebar order)
app/                # Next.js app router + Fumadocs layouts
lib/                # source loader, shared layout options, metadata
source.config.ts    # Fumadocs MDX collections
```

Add a page: drop an `.mdx` file under `content/docs/<section>/` and list its slug
in that folder's `meta.json`. Push to `main` and CI redeploys to
docs.hanzo.team.

## Attribution

Adapted from the upstream Huly documentation under the Eclipse Public License
2.0. See [`NOTICE`](./NOTICE) and [`LICENSE`](./LICENSE).
