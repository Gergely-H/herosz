import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { MetadataConfig } from "@/types/nextTypes";
import { Inter } from "next/font/google";
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
    /**
     * This metadata is needed to avoid 403 response when fetching images of Google Docs.
     * https://stackoverflow.com/a/74495028
     */
    referrer: "no-referrer",
  },
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="hu">
      <body className={`${inter.className} overflow-y-scroll`}>
        <Header />
        <main className="flex flex-col items-center justify-between px-24 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export const { metadata } = metadataConfig;
export default RootLayout;
