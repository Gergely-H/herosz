import type { RouteSegmentConfig } from "@/types/nextTypes";
import type { Metadata } from "next";
import type { FC } from "react";

interface NewsPageProps {
  params: {
    title: string;
  };
}

const routeSegmentConfig: RouteSegmentConfig = {
  revalidate: 60,
  generateMetadata: (props) => {
    const {
      params: { title },
    } = props as NewsPageProps;

    const metadata: Metadata = {
      title,
    };

    return metadata;
  },
};

const NewsPage: FC<NewsPageProps> = () => {
  return <></>;
};

export const { revalidate, generateMetadata } = routeSegmentConfig;
export default NewsPage;
