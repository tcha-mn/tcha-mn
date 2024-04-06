import { makeDataAccess, type BaseQueryOptions } from './sanity';

export interface SiteSettings {
  title: string;
  description: string;
  logo: string;
  favicon: string;
  copyright: string;
}

const SITE_SETTINGS_QUERY = ({ picture }: BaseQueryOptions) => `*[ _type == "settings" ][0]
  {
    _id,
    title,
    description,
    ${picture('logo')},
    ${picture('favicon')},
    copyright,
  }`;

export const fetchAll = makeDataAccess<SiteSettings>(SITE_SETTINGS_QUERY);
