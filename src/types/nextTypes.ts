import type { Metadata, ResolvingMetadata } from "next";
import type { XOR } from "./utilityTypes";

type MetadataConfig<PageProps = unknown> = XOR<
  {
    metadata: Metadata;
  },
  {
    generateMetadata: (props: PageProps, parent: ResolvingMetadata) => Metadata;
  }
>;

type RouteSegmentConfig = {
  revalidate?: false | "force-cache" | 0 | number;
};

/**
 * These types are based on what can be exported as a config from a Next.js Route Segment.
 */
export type { MetadataConfig, RouteSegmentConfig };
