import { Metadata } from 'next';
import { headers } from 'next/headers';

import { Constants } from '@/constants';

/**
 * Generates proper SEO config for pages.
 *
 * Builder instances have to be created with dedicated async method, because
 * we need to parse headers in initializer.
 *
 * @example
 * export async function generateMetadata(): Promise<Metadata> {
 *   return (await SEOBuilder.create()).build();
 * }
 */
export class SEOBuilder {
  private _applicationName: string = Constants.APP_NAME;
  private readonly _canonical: string;
  private _title: NonNullable<Metadata['title']> = {
    default: Constants.APP_NAME,
    template: Constants.APP_TITLE_TEMPLATE,
  };
  private _description: string | undefined = Constants.APP_DESCRIPTION;
  private _appleWebApp: Metadata['appleWebApp'] = {
    capable: false,
    statusBarStyle: 'default',
    title: Constants.APP_DEFAULT_TITLE,
  };

  private constructor({ headers }: SEOBuilderProps) {
    // Setup canonical URL
    const headersMap = new Map<string, string>(headers);
    const host: string = headersMap.get('host') ?? 'localhost:3000';
    const protocol: string =
      headersMap.get('x-forwarded-proto') ||
      (host?.includes('localhost') ? 'http' : 'https');
    this._canonical = `${protocol}://${host}`;
  }

  static async create(): Promise<SEOBuilder> {
    return new SEOBuilder({
      headers: (await headers()).entries().toArray(),
    });
  }

  title(newTitle: SEOBuilderType['_title']): SEOBuilder {
    this._title = newTitle;
    return this;
  }

  description(newDesc: SEOBuilderType['_description']): SEOBuilder {
    this._description = newDesc;
    return this;
  }

  appleWebApp(newConf: SEOBuilderType['_appleWebApp']): SEOBuilder {
    this._appleWebApp = newConf;
    return this;
  }

  build(): Metadata {
    return {
      applicationName: this._applicationName,
      metadataBase: new URL(this._canonical),
      title: this._title,
      description: this._description,
      appleWebApp: this._appleWebApp,
      formatDetection: {
        telephone: false,
      },
      // TODO Implement OG
      openGraph: undefined,
      twitter: {
        card: 'summary',
        title: this._title,
        description: this._description,
      },
    };
  }
}

type SEOBuilderType = Awaited<ReturnType<(typeof SEOBuilder)['create']>>;

interface SEOBuilderProps {
  headers: [key: string, value: string][];
}
