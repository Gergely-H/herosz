import type { MetadataConfig, RouteSegmentConfig } from "@/types/nextTypes";
import type { Metadata } from "next";
import type { FC } from "react";

interface CatPageProps {
  params: {
    name: string;
  };
}

const routeSegmentConfig: RouteSegmentConfig = {
  revalidate: 60,
};

const metadataConfig: MetadataConfig<CatPageProps> = {
  generateMetadata: (props) => {
    const { params: { name } = { name: "" } } = props || {};

    const metadata: Metadata = {
      title: name,
    };

    return metadata;
  },
};

const CatPage: FC<CatPageProps> = () => {
  return <></>;
};

export const { revalidate } = routeSegmentConfig;
export const { generateMetadata } = metadataConfig;
export default CatPage;
