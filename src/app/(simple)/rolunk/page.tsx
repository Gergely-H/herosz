import { usePage } from "@/hooks/pageHooks";
import { Page } from "@/types/pageTypes";
import type { FC } from "react";

const pageType = Page.AboutUs;

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

export default AboutUsPage;
