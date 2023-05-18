import { Metadata, ResolvingMetadata } from "next";

type BaseRouteSegmentConfig = {
  revalidate?: false | "force-cache" | 0 | number;
};

type RouteSegmentConfig = BaseRouteSegmentConfig &
  (
    | {
        metadata?: Metadata;
      }
    | {
        generateMetadata?: (
          props?: unknown,
          parent?: ResolvingMetadata
        ) => Metadata;
      }
  );

export type { RouteSegmentConfig };
