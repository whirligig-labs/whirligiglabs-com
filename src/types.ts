export interface BaseFrontmatterData {
  title: string;
  publishDate: string;
  description: string;
}

export type FrontmatterData<T> = BaseFrontmatterData | T;

export interface BlogPost {
  frontmatter: BaseFrontmatterData;
}

export interface Project extends BlogPost {}
