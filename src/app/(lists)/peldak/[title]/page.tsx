import type { RouteSegmentConfig } from "@/types/nextTypes";
import type { Metadata } from "next";
import type { FC } from "react";

interface ExamplePageProps {
  params: {
    title: string;
  };
}

const routeSegmentConfig: RouteSegmentConfig = {
  revalidate: 60,
  generateMetadata: (props) => {
    const {
      params: { title },
    } = props as ExamplePageProps;

    const metadata: Metadata = {
      title,
    };

    return metadata;
  },
};

const ExamplePage: FC<ExamplePageProps> = () => {
  return <></>;
};

export const { revalidate, generateMetadata } = routeSegmentConfig;
export default ExamplePage;
