# Hanzo Team docs (docs.hanzo.team) — a Fumadocs static export served by the
# Hanzo native static server. Two stages, one image, no runtime Node.
#
#   1. build  — pnpm build → Next.js `output: 'export'` → /app/out
#   2. serve  — ghcr.io/hanzoai/static (scratch + Go binary): serves /public on
#               :3000 with the clean-URL `.html` fallback + in-place directory
#               index, so /docs/full-manual resolves from the flat
#               docs/full-manual.html export with zero redirects. CSP is widened
#               for the site's own JS via HANZO_STATIC_CSP (set on the operator
#               CR crs/team-docs-site.yaml).
FROM node:22-slim AS build
WORKDIR /app
RUN corepack enable
COPY . .
RUN pnpm install --frozen-lockfile
ENV NODE_OPTIONS=--max-old-space-size=8192
RUN pnpm build

FROM ghcr.io/hanzoai/static:v0.5.1
COPY --from=build /app/out /public
