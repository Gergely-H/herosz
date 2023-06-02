import { usePage } from "@/hooks/pageHooks";
import type { RouteSegmentConfig } from "@/types/nextTypes";
import { Page } from "@/types/pageTypes";
import type { FC } from "react";

const pageType = Page.Home;

const routeSegmentConfig: RouteSegmentConfig = {
  revalidate: 60,
};

/**
 * Typescript cannot handle async Server Components yet.
 * https://github.com/vercel/next.js/issues/42292
 * https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
 */
/* @ts-expect-error Async Server Component */
const Home: FC = async () => {
  const { pageContent } = await usePage(pageType);

  return <>{pageContent}</>;
};

export const { revalidate } = routeSegmentConfig;
export default Home;
