export interface BaseFrontmatterData {
  title: string;
  publishDate: string;
  description: string;
  slug?: string;
}

export type FrontmatterData<T> = BaseFrontmatterData | T;

export interface BlogPost {
  frontmatter: BaseFrontmatterData;
  file: string;
  rawContent: () => string;
  url: string | undefined;
  getHeadings(): Promise<{ depth: number; slug: string; text: string }[]>;
}

export interface Project extends BlogPost {}
