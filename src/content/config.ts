import { defineCollection, z } from 'astro:content';

const learnCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    description: z.string().optional(),
    githubPath: z.string().optional(),
    colabUrl: z.string().url().optional(),
  }),
});

export const collections = {
  learn: learnCollection,
};
