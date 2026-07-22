import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  // Emit `route/index.html` (not flat `route.html`) so a generic static host
  // serves every page from its own directory index — the Next-default flat
  // `.html` is shadowed by the RSC sibling directory Next also emits, which
  // 404s clean URLs. With trailingSlash the directory index resolves in place.
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);
