import type { FC } from "react";

/**
 * Typescript cannot handle async Server Components yet.
 * https://github.com/vercel/next.js/issues/42292
 * https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
 */
/* @ts-expect-error Async Server Component */
const NewsListPage: FC = async () => {
  return <></>;
};

export default NewsListPage;