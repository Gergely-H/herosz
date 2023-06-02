import type { MetadataConfig, RouteSegmentConfig } from "@/types/nextTypes";
import type { Metadata } from "next";
import type { FC } from "react";

type Props = {
  params: {
    title: string;
  };
};

const routeSegmentConfig: RouteSegmentConfig = {
  revalidate: 60,
};

const metadataConfig: MetadataConfig<Props> = {
  generateMetadata: (props) => {
    const { params: { title } = { title: "" } } = props || {};

    const metadata: Metadata = {
      title,
    };

    return metadata;
  },
};

const NewsPage: FC<Props> = () => {
  return <></>;
};

export const { revalidate } = routeSegmentConfig;
export const { generateMetadata } = metadataConfig;
export default NewsPage;
