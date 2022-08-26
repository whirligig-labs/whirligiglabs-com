export interface BaseFrontmatterData {
  title: string;
  publishDate: string;
  description: string;
  slug?: string;
}

export type FrontmatterData<T> = BaseFrontmatterData | T;

export interface BlogPostFrontmatterData extends BaseFrontmatterData {}

export interface BlogPost {
  frontmatter: BlogPostFrontmatterData;
  file: string;
  rawContent: () => string;
  url: string | undefined;
  getHeadings(): Promise<{ depth: number; slug: string; text: string }[]>;
}

export interface ProjectFrontmatterData extends BaseFrontmatterData {
  url: string;
}

export interface Project extends BlogPost {
  frontmatter: ProjectFrontmatterData;
}
