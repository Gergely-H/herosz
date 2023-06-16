import List from '@/components/List';
import { MetadataConfig } from '@/types/nextTypes';
import type { FC } from 'react';

const metadataConfig: MetadataConfig = {
  metadata: {
    title: 'Példák',
  },
};

/**
 * Typescript cannot handle async Server Components yet.
 * https://github.com/vercel/next.js/issues/42292
 * https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
 */
/* @ts-expect-error Async Server Component */
const ExamplesPage: FC = async () => {
  return <List></List>;
};

export const { metadata } = metadataConfig;
export default ExamplesPage;
