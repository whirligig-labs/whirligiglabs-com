import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://whirligiglabs.com",
  integrations: [mdx(), solid(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: "monokai",
    },
    rehypePlugins: [
      [
        "rehype-external-links",
        {
          target: "_blank",
        },
      ],
    ],
  },
});
