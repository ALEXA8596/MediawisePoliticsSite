import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');
const billAnalysisDirectory = path.join(process.cwd(), 'bill-analysis-posts');

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  coverImage?: string;
}

export function getPostSlugs(directory: string) {
  return fs.readdirSync(directory);
}

export function getPostBySlug(slug: string, directory: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(directory, `${realSlug}.md`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    type Items = {
      [key: string]: string;
    };

    const items: Items = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
      if (field === 'slug') {
        items[field] = realSlug;
      }
      if (field === 'content') {
        items[field] = content;
      }

      if (typeof data[field] !== 'undefined') {
        items[field] = data[field];
      }
    });

    return items as unknown as Post;
  } catch (e) {
    return {} as Post;
  }
}

export function getAllPosts(directory: string, fields: string[] = []) {
  const slugs = getPostSlugs(directory);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, directory, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getAllGeneralPosts(fields: string[] = []) {
  return getAllPosts(postsDirectory, fields);
}

export function getAllBillAnalysisPosts(fields: string[] = []) {
  return getAllPosts(billAnalysisDirectory, fields);
}

export function getGeneralPostBySlug(slug: string, fields: string[] = []) {
  return getPostBySlug(slug, postsDirectory, fields);
}

export function getBillAnalysisPostBySlug(slug: string, fields: string[] = []) {
  return getPostBySlug(slug, billAnalysisDirectory, fields);
}
