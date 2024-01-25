import { defineCollection, z } from 'astro:content';

const releases = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			versionNumber: z.string(),
			beta: z.boolean(),
			// Transform string to Date object
			date: z.date({ coerce: true }),
		}),
});

export const collections = { releases };
