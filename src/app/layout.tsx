import { RouteSegmentConfig } from "@/types/nextTypes";
import { Inter } from "next/font/google";
import Head from "next/head";
import type { FC, PropsWithChildren } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const META_TITLE = "Herosz Budapesti Állatotthon";

const routeSegmentConfig: RouteSegmentConfig = {
  metadata: {
    title: {
      default: META_TITLE,
      template: `%s - ${META_TITLE}`,
    },
    description: "A Herosz Budapesti Állatotthon weboldala.",
  },
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        {/**
         * This meta tag is needed to avoid 403 response when fetching images of google docs.
         * https://stackoverflow.com/a/74495028
         */}
        <meta name="referrer" content="no-referrer" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export { metadata };
export default RootLayout;
