import type { RouteSegmentConfig } from "@/types/nextTypes";
import type { Metadata } from "next";
import type { FC } from "react";

interface SupporterPageProps {
  params: {
    name: string;
  };
}

const routeSegmentConfig: RouteSegmentConfig = {
  revalidate: 60,
  generateMetadata: (props) => {
    const {
      params: { name },
    } = props as SupporterPageProps;

    const metadata: Metadata = {
      title: name,
    };

    return metadata;
  },
};

const SupporterPage: FC<SupporterPageProps> = () => {
  return <></>;
};

export const { revalidate, generateMetadata } = routeSegmentConfig;
export default SupporterPage;
