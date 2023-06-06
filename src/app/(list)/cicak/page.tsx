import List from '@/components/List';
import type { FC } from 'react';

/**
 * Typescript cannot handle async Server Components yet.
 * https://github.com/vercel/next.js/issues/42292
 * https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
 */
/* @ts-expect-error Async Server Component */
const CatsPage: FC = async () => {
  return <List></List>;
};

export default CatsPage;
