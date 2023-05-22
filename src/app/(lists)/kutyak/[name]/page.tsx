import type { RouteSegmentConfig } from "@/types/nextTypes";
import type { Metadata } from "next";
import type { FC } from "react";

interface DogPageProps {
  params: {
    name: string;
  };
}

const routeSegmentConfig: RouteSegmentConfig = {
  revalidate: 60,
  generateMetadata: (props) => {
    const {
      params: { name },
    } = props as DogPageProps;

    const metadata: Metadata = {
      title: name,
    };

    return metadata;
  },
};

const DogPage: FC<DogPageProps> = () => {
  return <></>;
};

export const { revalidate, generateMetadata } = routeSegmentConfig;
export default DogPage;