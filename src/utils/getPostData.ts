import readingTime from "reading-time";
import type { BlogPost } from "../types";

export default function getPostData(post: BlogPost) {
  return {
    slug:
      post.frontmatter.slug || post.file.split("/").pop()?.split(".").shift(),
    readingTime: readingTime(post.rawContent()).text,
  };
}
