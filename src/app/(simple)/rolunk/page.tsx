import { usePage } from '@/hooks/pageHooks';
import t from '@/translations/hu';
import { MetadataConfig } from '@/types/nextTypes';
import { Page } from '@/types/pageTypes';
import type { FC } from 'react';

const pageType = Page.AboutUs;

const metadataConfig: MetadataConfig = {
  metadata: {
    title: t.navigation.items.aboutUs,
  },
};

/**
 * Typescript cannot handle async Server Components yet.
 * https://github.com/vercel/next.js/issues/42292
 * https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
 */
/* @ts-expect-error Async Server Component */
const AboutUsPage: FC = async () => {
  const { pageContent } = await usePage(pageType);
  return <>{pageContent}</>;
};

export const { metadata } = metadataConfig;
export default AboutUsPage;
