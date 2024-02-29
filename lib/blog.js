import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = join(process.cwd(), 'posts');

export function getPostSlugs() {
	return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug) {
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = join(postsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);

	return {
		...data,
		slug: realSlug,
		content,
	};
}

export function getSortedPostsData() {
	const slugs = getPostSlugs();
	const posts = slugs.map((slug) => getPostBySlug(slug)).sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

	return posts;
}

export async function getPostData(id) {
	const fullPath = path.join(postsDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');

	const { data, content } = matter(fileContents);
	const processedContent = await remark().use(html).process(content);
	const contentHtml = processedContent.toString();

	return {
		id,
		contentHtml,
		...data,
	};
}

export function getAllPostIds() {
	const fileNames = fs.readdirSync(postsDirectory);

	return fileNames.map((fileName) => {
		return {
			params: {
				slug: fileName.replace(/\.md$/, ''),
			},
		};
	});
}
