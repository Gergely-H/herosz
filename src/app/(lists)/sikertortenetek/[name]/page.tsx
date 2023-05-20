import type { RouteSegmentConfig } from "@/types/nextTypes";
import type { Metadata } from "next";
import type { FC } from "react";

interface SuccessStoryPageProps {
  params: {
    name: string;
  };
}

const routeSegmentConfig: RouteSegmentConfig = {
  revalidate: 60,
  generateMetadata: (props) => {
    const {
      params: { name },
    } = props as SuccessStoryPageProps;

    const metadata: Metadata = {
      title: name,
    };

    return metadata;
  },
};

const SuccessStoryPage: FC<SuccessStoryPageProps> = () => {
  return <></>;
};

export const { revalidate, generateMetadata } = routeSegmentConfig;
export default SuccessStoryPage;
