import type { RouteSegmentConfig } from "@/types/nextTypes";
import type { Metadata } from "next";
import type { FC } from "react";

interface CatPageProps {
  params: {
    name: string;
  };
}

const routeSegmentConfig: RouteSegmentConfig = {
  revalidate: 60,
  generateMetadata: (props) => {
    const {
      params: { name },
    } = props as CatPageProps;

    const metadata: Metadata = {
      title: name,
    };

    return metadata;
  },
};

const CatPage: FC<CatPageProps> = () => {
  return <></>;
};

export const { revalidate, generateMetadata } = routeSegmentConfig;
export default CatPage;
