import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { MetadataConfig } from "@/types/nextTypes";
import { Inter } from "next/font/google";
import Head from "next/head";
import type { FC, PropsWithChildren } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const META_TITLE = "Herosz Budapesti Állatotthon";
const metadataConfig: MetadataConfig = {
  metadata: {
    title: {
      default: META_TITLE,
      template: `%s - ${META_TITLE}`,
    },
    description: "Herosz Budapesti Állatotthon weboldala.",
  },
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="hu">
      <Head>
        {/**
         * This meta tag is needed to avoid 403 response when fetching images of google docs.
         * https://stackoverflow.com/a/74495028
         */}
        <meta name="referrer" content="no-referrer" />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export const { metadata } = metadataConfig;
export default RootLayout;
