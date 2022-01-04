import { PostType } from './post';

export interface MetaProps
  extends Pick<PostType, 'date' | 'description' | 'image' | 'title'> {
  /**
   * For the meta tag `og:type`
   */
  type?: string;
}

export type Office = {
  title: string;
  address: string;
  addressRegion: string;
  addressLocality: string;
  postalCode: string;
  phone: string;
  map: string;
};

export type SiteSettings = {
  offices: Office[];
};
