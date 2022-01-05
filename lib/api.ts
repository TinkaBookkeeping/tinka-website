import fs from 'fs';
import matter from 'gray-matter';
import yaml from 'js-yaml';
import { join } from 'path';
import { POSTS_PATH } from '../utils/mdxUtils';
import { Office } from 'types/layout';

export function getPostSlugs(): string[] {
  return fs.readdirSync(POSTS_PATH);
}

type PostItems = {
  [key: string]: string;
};

export function getPostBySlug(slug: string, fields: string[] = []): PostItems {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(POSTS_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: PostItems = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []): PostItems[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

type PageData = {
  data: {
    [key: string]: any;
  };
  content: string | null;
};

export function getPageData<P extends PageData>(path: string): P {
  try {
    const fileContents = fs.readFileSync(`content/pages/${path}.md`, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      data,
      content,
    } as P;
  } catch (error) {
    return {
      data: null,
      content: null,
    } as P;
  }
}

export function getPagePaths(): string[] {
  const files = fs.readdirSync(join('content', 'pages'));
  return files.map((f) => f.replace('.md', ''));
}

export type TeamListData = {
  slug: string;
  pageData: PageData;
};

export type ClientListData = {
  name: string;
  url?: string;
  image: string;
};

export function getClients(): ClientListData[] {
  const files = fs.readdirSync(join('content', 'clients.yaml'));
  const clients = files.map((fileName) => {
    const fileContents = fs.readFileSync(
      join('content', 'client', fileName),
      'utf8'
    );
    const { data } = matter(fileContents) as PageData;
    const { name, url, image } = data;
    return {
      name,
      url,
      image,
    } as ClientListData;
  });
  return clients;
}

export function getTeamMembers(): TeamListData[] {
  const files = fs.readdirSync(join('content', 'staff'));
  const staff = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const fileContents = fs.readFileSync(
      join('content', 'staff', fileName),
      'utf8'
    );
    const { data, content } = matter(fileContents) as PageData;
    return {
      slug,
      pageData: {
        data,
        content,
      },
    } as TeamListData;
  });
  return staff;
}

export interface HomeData extends PageData {
  data: {
    title: string;
    data: Date;
  };
}

export type Section = {
  type: 'header' | 'content' | '2col';
  [key: string]: any;
};
export interface PageFieldData extends PageData {
  data: {
    title: string;
    data: string;
    sections: Section[];
  };
}

export type SiteData = {
  offices: Office[];
};

export function getSiteData(): SiteData {
  const data = yaml.load(fs.readFileSync(`config/siteSettings.yaml`, 'utf8'));
  return data as SiteData;
}

export function getHomeData(): PageFieldData {
  const data = getPageData<PageFieldData>('content/pages/home.md');
  return data;
}
