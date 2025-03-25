// Importe o glob loader
import { glob } from "astro/loaders";
// Importe utilidades de `astro:content`
import { z, defineCollection } from "astro:content";
// Defina um `loader` e `schema` para cada coleção
const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});
// Exporte um único objeto `collections` para registrar sua(s) coleção(ões)
export const collections = { blog };
