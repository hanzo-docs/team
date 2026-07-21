import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout options (nav title, links) used by both the home and docs
 * layouts so the Hanzo Team brand and top navigation stay in one place.
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2 font-semibold">
          <span
            aria-hidden
            className="inline-flex h-5 w-5 items-center justify-center rounded-[5px] bg-fd-primary text-fd-primary-foreground text-[11px] font-bold"
          >
            H
          </span>
          Hanzo Team
        </span>
      ),
      url: '/',
    },
    githubUrl: 'https://github.com/hanzoai/team',
    links: [
      { text: 'Documentation', url: '/docs', active: 'nested-url' },
      { text: 'Hanzo AI', url: 'https://hanzo.ai' },
    ],
  };
}
