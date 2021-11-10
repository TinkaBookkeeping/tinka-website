import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { POSTS_PATH } from '../utils/mdxUtils';

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
  content: string;
};

export function getPageData<P extends PageData>(path: string): P {
  const fileContents = fs.readFileSync(path, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  } as P;
}

export interface HomeData extends PageData {
  data: {
    title: string;
    data: Date;
  };
}

export type Section = {
  type: 'header' | 'content';
  [key: string]: any;
};
export interface PageFieldData extends PageData {
  data: {
    title: string;
    data: string;
    sections: Section[];
  };
}

export function getHomeData(): PageFieldData {
  const data = getPageData<PageFieldData>('content/pages/home.md');
  return data;
}
