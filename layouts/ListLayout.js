'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

import Link from '@/components/Blog/Link';
import { Container } from '@/components/Container/Container';
import Image from 'next/image';

function Pagination({ totalPages, currentPage }) {
	const pathname = usePathname();
	const basePath = pathname.split('/')[1];
	const prevPage = currentPage - 1 > 0;
	const nextPage = currentPage + 1 <= totalPages;

	return (
		<div className="space-y-2 pb-8 pt-6 md:space-y-5">
			<nav className="flex justify-between">
				{!prevPage && (
					<button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
						Previous
					</button>
				)}
				{prevPage && (
					<Link href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`} rel="prev">
						Previous
					</Link>
				)}
				<span>
					{currentPage} of {totalPages}
				</span>
				{!nextPage && (
					<button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
						Next
					</button>
				)}
				{nextPage && (
					<Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
						Next
					</Link>
				)}
			</nav>
		</div>
	);
}

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
	const [searchValue, setSearchValue] = useState('');
	const filteredBlogPosts = posts.filter((post) => {
		const searchContent = post.title + post.summary + post.tags?.join(' ');
		return searchContent.toLowerCase().includes(searchValue.toLowerCase());
	});

	const displayPosts = initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts;

	return (
		<Container as="section">
			<div className="divide-y divide-gray-300 ">
				<div className="space-y-2 pb-8 pt-6 md:space-y-5">
					<h1 className="font-heading font-black text-gray-900">{title}</h1>
					<div className="relative">
						<label>
							<span className="sr-only">Search articles</span>
							<input
								aria-label="Search articles"
								type="text"
								onChange={(e) => setSearchValue(e.target.value)}
								placeholder="👁 Lookin' for something? 👁"
								className="block py-8 px-4 w-full placeholder:font-black placeholder:text-gray-400 placeholder:uppercase rounded-md border-0 bg-gray-100 text-gray-900"
							/>
						</label>
						<svg
							className="absolute right-4 top-[50%] translate-y-[-50%] h-5 w-5 text-gray-400 dark:text-gray-300"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</div>
				</div>
				<ul className="divide-y divide-gray-300">
					{!filteredBlogPosts.length && 'No posts found.'}
					{displayPosts.map((post) => {
						const { slug, date, title, excerpt } = post;
						const formatDate = new Date(date);
						return (
							<li key={slug} className="py-12">
								<article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
									<dl>
										<dt className="sr-only">Published on</dt>
										<dd className="text-base font-medium leading-6 text-gray-700">
											<time dateTime={date}>{formatDate.toDateString()}</time>
										</dd>
									</dl>
									<div className="space-y-3 xl:col-span-3">
										<div>
											<h3 className="text-3xl mb-0">
												<Link href={`/blog/${slug}`} className="text-gray-900">
													{title}
												</Link>
											</h3>
										</div>
										<div className="prose max-w-none text-gray-900">{excerpt}</div>
									</div>
								</article>
							</li>
						);
					})}
				</ul>
			</div>
			{pagination && pagination.totalPages > 1 && !searchValue && (
				<Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
			)}
		</Container>
	);
}
