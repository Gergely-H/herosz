import type { MetadataConfig, RouteSegmentConfig } from "@/types/nextTypes";
import type { Metadata } from "next";
import type { FC } from "react";

interface SuccessStoryPageProps {
  params: {
    name: string;
  };
}

const routeSegmentConfig: RouteSegmentConfig = {
  revalidate: 60,
};

const metadataConfig: MetadataConfig<SuccessStoryPageProps> = {
  generateMetadata: (props) => {
    const { params: { name } = { name: "" } } = props || {};

    const metadata: Metadata = {
      title: name,
    };

    return metadata;
  },
};

const SuccessStoryPage: FC<SuccessStoryPageProps> = () => {
  return <></>;
};

export const { revalidate } = routeSegmentConfig;
export const { generateMetadata } = metadataConfig;
export default SuccessStoryPage;
