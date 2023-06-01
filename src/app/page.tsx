import type { RouteSegmentConfig } from "@/types/nextTypes";
import type { FC } from "react";
import { getDoc } from "./googleDriveApi";

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
  const doc = await getDoc(process.env.TEMP_DOC || "");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-12">
      {doc}
    </main>
  );
};

export const { revalidate } = routeSegmentConfig;
export default Home;
