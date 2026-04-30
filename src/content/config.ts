import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    locale: z.enum(['fr-fr', 'en-us']),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
};
