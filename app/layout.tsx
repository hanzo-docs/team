import './global.css';
import type { Viewport } from 'next';
import { baseUrl, createMetadata } from '@/lib/metadata';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';

export const metadata = createMetadata({
  title: {
    template: '%s | Hanzo Team',
    default: 'Hanzo Team Documentation',
  },
  description:
    'Hanzo Team is the all-in-one workspace for project tracking, documents, chat, planning, and drive — one place to run your team.',
  metadataBase: baseUrl,
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          defer
          src="https://analytics.hanzo.ai/script.js"
          data-website-id="hanzo-team-docs"
          data-do-not-track="true"
          data-exclude-search="true"
        />
      </head>
      <body className="antialiased">
        <RootProvider search={{ options: { type: 'static' } }}>{children}</RootProvider>
      </body>
    </html>
  );
}
