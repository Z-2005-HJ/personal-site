import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		github: z.string().url(),
		featured: z.boolean().optional(),
		order: z.number().default(0),
	}),
});

const daily = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/daily' }),
	schema: z.object({
		title: z.string().optional(),
		date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
	}),
});

const resume = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/resume' }),
	schema: z.object({
		name: z.string().optional(),
		summary: z.string(),
	}),
});

export const collections = { projects, daily, resume };
