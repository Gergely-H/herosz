import type { MetadataConfig, RouteSegmentConfig } from "@/types/nextTypes";
import type { Metadata } from "next";
import type { FC } from "react";

interface NewsPageProps {
  params: {
    title: string;
  };
}

const routeSegmentConfig: RouteSegmentConfig = {
  revalidate: 60,
};

const metadataConfig: MetadataConfig<NewsPageProps> = {
  generateMetadata: (props) => {
    const { params: { title } = { title: "" } } = props || {};

    const metadata: Metadata = {
      title,
    };

    return metadata;
  },
};

const NewsPage: FC<NewsPageProps> = () => {
  return <></>;
};

export const { revalidate } = routeSegmentConfig;
export const { generateMetadata } = metadataConfig;
export default NewsPage;
