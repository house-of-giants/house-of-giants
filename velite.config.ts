import rehypeShiki from '@shikijs/rehype';
import { defineCollection, defineConfig, s } from 'velite';
import { cyberDarkTheme } from './lib/themes/cyber-dark';

const posts = defineCollection({
	name: 'Post',
	pattern: 'posts/**/*.md',
	schema: s
		.object({
			title: s.string().max(200),
			image: s.string().optional(),
			author: s.object({
				name: s.string(),
				picture: s.string(),
			}),
			excerpt: s.string(),
			date: s.isodate(),
			published: s.boolean().default(true),
			tags: s.array(s.string()).default([]),
			rawSlug: s.path(),
			metadata: s.metadata(),
			content: s.markdown(),
		})
		.transform((data) => {
			const slug = data.rawSlug.replace(/^posts\//, '');
			return {
				...data,
				slug,
				permalink: `/blog/${slug}`,
			};
		}),
});

export default defineConfig({
	root: 'content',
	output: {
		data: '.velite',
		assets: 'public/static',
		base: '/static/',
		name: '[name]-[hash:6].[ext]',
		clean: true,
	},
	collections: { posts },
	markdown: {
		rehypePlugins: [
			[
				rehypeShiki as never,
				{
					theme: cyberDarkTheme,
					addLanguageClass: true,
				},
			],
		],
	},
});
