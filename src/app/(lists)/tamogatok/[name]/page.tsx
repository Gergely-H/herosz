import type { MetadataConfig, RouteSegmentConfig } from "@/types/nextTypes";
import type { Metadata } from "next";
import type { FC } from "react";

type Props = {
  params: {
    name: string;
  };
};

const routeSegmentConfig: RouteSegmentConfig = {
  revalidate: 60,
};

const metadataConfig: MetadataConfig<Props> = {
  generateMetadata: (props) => {
    const { params: { name } = { name: "" } } = props || {};

    const metadata: Metadata = {
      title: name,
    };

    return metadata;
  },
};

const SupporterPage: FC<Props> = () => {
  return <></>;
};

export const { revalidate } = routeSegmentConfig;
export const { generateMetadata } = metadataConfig;
export default SupporterPage;
