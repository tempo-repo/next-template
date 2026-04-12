import { Metadata } from 'next';
import { Merge, RequiredDeep } from 'type-fest';

/**
 * This namespace contains all types associated to OpenGraph configuration.
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace OpenGraph {
  // Matches configuration type from Next.js config.
  export type Config = NonNullable<Metadata['openGraph']>;
  type RequiredConfig = RequiredDeep<Config>;

  // Matches single OG-image object for seo config.
  export type Image = Exclude<RequiredConfig['images'], unknown[]>;

  // OpenGraph config adapted for project needs.
  export type ModifiedConfig = Merge<Config, { images: Array<Image> }>;
}
