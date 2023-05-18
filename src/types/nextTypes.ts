import { Metadata, ResolvingMetadata } from "next";

type BaseRouteSegmentConfig = {
  revalidate?: false | "force-cache" | 0 | number;
};

type MetadataConfig =
  | {
      metadata?: Metadata;
    }
  | {
      generateMetadata?: (
        props?: unknown,
        parent?: ResolvingMetadata
      ) => Metadata;
    };

/**
 * This type is based on what can be exported as a config from a Next.js Route Segment.
 */
type RouteSegmentConfig = BaseRouteSegmentConfig & MetadataConfig;

export type { RouteSegmentConfig };
