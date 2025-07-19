// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/blogs" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }).optional(),
      tags: z.array(z.string())
    })
});
const member = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/members" }),
    schema: z.object({
      name: z.string(),
      joinYear: z.number().int().min(1900).max(new Date().getFullYear()),
      role: z.string(),
      image: z.object({
        src: z.string(),
        alt: z.string()
      }).optional(),
      events: z.array(z.string()).optional()
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = { blog,member };