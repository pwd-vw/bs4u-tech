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

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    chapter: z.number(),
    description: z.string().optional(),
    sourcePath: z.string().optional(),
  }),
});

const tutorialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    device: z.enum(['raspberry-pi5', 'radxa-dragon-q6a', 'edge-generic']),
    order: z.number(),
    level: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner'),
    description: z.string().optional(),
    githubPath: z.string().optional(),
  }),
});

const storiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    device: z.string().optional(),
    githubUrl: z.string().url().optional(),
  }),
});

export const collections = {
  learn: learnCollection,
  blog: blogCollection,
  tutorials: tutorialsCollection,
  stories: storiesCollection,
};
