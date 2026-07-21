import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// Static search index for the `output: export` build. Fumadocs serves this as a
// pre-rendered JSON file that the client-side search reads.
export const revalidate = false;

export const { staticGET: GET } = createFromSource(source);
