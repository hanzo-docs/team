# Hanzo Team Docs

Product documentation for **Hanzo Team** — the all-in-one workspace for project
tracking, documents, chat, planning, and drive. Published at
**[docs.hanzo.team](https://docs.hanzo.team)**.

Built on the house docs stack: **[Fumadocs](https://fumadocs.dev)** + Next.js
(static export) + Tailwind, the same toolchain as the rest of the `hanzo-docs`
org. Served on the **Hanzo native stack** — the export is baked into
`ghcr.io/hanzoai/team-docs` (`Dockerfile`: build stage + `ghcr.io/hanzoai/static`),
built by in-cluster BuildKit / arcd (`ci/buildkit-job.yaml`, `.github/workflows/build.yml`),
run by the operator (`universe` `crs/team-docs-site.yaml`), and routed by
`hanzoai/ingress`' file provider. No Cloudflare Pages.

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
in that folder's `meta.json`. Push to `main` and native CI rebuilds
`ghcr.io/hanzoai/team-docs` and rolls docs.hanzo.team forward.

## Attribution

Adapted from the upstream Huly documentation under the Eclipse Public License
2.0. See [`NOTICE`](./NOTICE) and [`LICENSE`](./LICENSE).
