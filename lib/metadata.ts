import type { Metadata } from 'next';

export const baseUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://docs.hanzo.team');

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: baseUrl,
      siteName: 'Hanzo Team',
      type: 'website',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@hanzoai',
      creator: '@hanzoai',
      ...override.twitter,
    },
    metadataBase: baseUrl,
  };
}
