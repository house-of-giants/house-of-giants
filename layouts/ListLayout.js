'use client';

import Link from '@/components/Blog/Link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/Container/Container';
import { FloatingGradients } from '@/components/FloatingGradients/FloatingGradients';
import LazyImage from '@/components/Image/LazyImage';

function Pagination({ totalPages, currentPage }) {
	const pathname = usePathname();
	const basePath = pathname.split('/')[1];
	const prevPage = currentPage - 1 > 0;
	const nextPage = currentPage + 1 <= totalPages;

	return (
		<div className="space-y-2 pb-8 pt-6 md:space-y-5">
			<nav className="flex justify-between">
				{!prevPage && (
					<button className="cursor-not-allowed disabled:opacity-50 pointer-events-none" disabled={!prevPage}>
						<span className="flex items-center space-x-1 text-gray-400 opacity-50">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
							</svg>
							<span>Previous</span>
						</span>
					</button>
				)}
				{prevPage && (
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
						<Link href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}>
							<span className="flex items-center space-x-1 text-gray-200 hover:text-purple-400 transition duration-300">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
								</svg>
								<span>Previous</span>
							</span>
						</Link>
					</motion.div>
				)}
				<span className="font-medieval text-gray-200">
					{currentPage} of {totalPages}
				</span>
				{!nextPage && (
					<button className="cursor-not-allowed disabled:opacity-50 pointer-events-none" disabled={!nextPage}>
						<span className="flex items-center space-x-1 text-gray-400 opacity-50">
							<span>Next</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</span>
					</button>
				)}
				{nextPage && (
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
						<Link href={`/${basePath}/page/${currentPage + 1}`}>
							<span className="flex items-center space-x-1 text-gray-200 hover:text-purple-400 transition duration-300">
								<span>Next</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</span>
						</Link>
					</motion.div>
				)}
			</nav>
		</div>
	);
}

// Animation variants for the blog post cards
const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.1,
			duration: 0.5,
			ease: [0.25, 0.1, 0.25, 1.0],
		},
	}),
	hover: {
		boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
		transition: {
			duration: 0.3,
		},
	},
};

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination, className = '' }) {
	const [searchValue, setSearchValue] = useState('');
	const filteredBlogPosts = posts.filter((post) => {
		const searchContent = post.title + post.summary + (post.tags || []).join(' ');
		return searchContent.toLowerCase().includes(searchValue.toLowerCase());
	});

	// Display posts for the current page
	const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : filteredBlogPosts;

	return (
		<Container className={`relative bg-[#1a1f24] text-gray-100 min-h-screen py-12 ${className}`}>
			<FloatingGradients variant="purple" intensity="low" />

			<div className="divide-y divide-gray-700">
				<div className="space-y-4 pt-6 pb-8 md:space-y-5">
					<motion.h1
						className="text-4xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-5xl sm:leading-10 md:text-6xl md:leading-14"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						{title}
					</motion.h1>

					<div className="relative max-w-lg">
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="relative"
						>
							<input
								aria-label="Search articles"
								type="text"
								onChange={(e) => setSearchValue(e.target.value)}
								placeholder="Search the archives..."
								className="block w-full rounded-md border border-gray-700 bg-black bg-opacity-60 backdrop-blur-sm px-4 py-3 text-gray-100 focus:border-purple-500 focus:ring-purple-500 placeholder-gray-400"
							/>
							<svg
								className="absolute right-3 top-3 h-5 w-5 text-gray-400"
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
						</motion.div>
					</div>
				</div>

				<div className="py-12">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						{!filteredBlogPosts.length && <p className="text-gray-300">No posts found.</p>}
						<AnimatePresence>
							{displayPosts.map((post, index) => {
								const { slug, date, title, excerpt, image, author } = post;
								const formattedDate = new Date(date).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'long',
									day: 'numeric',
								});

								return (
									<motion.div
										key={slug}
										custom={index}
										initial="hidden"
										animate="visible"
										whileHover="hover"
										variants={cardVariants}
										className="group relative bg-deep-plum rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-all duration-300 flex flex-col h-full shadow-lg"
									>
										<Link href={`/blog/${slug}`} aria-label={`Read "${title}"`} className="flex flex-col h-full">
											{image && (
												<div className="relative h-80 overflow-hidden">
													<LazyImage
														src={image}
														alt={title}
														fill
														priority={index < 2}
														className="transform object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
													/>
													<div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-plum/60 to-deep-plum"></div>

													<div className="absolute bottom-0 left-0 right-0 p-6 z-10">
														<div className="mb-2 flex items-center justify-between">
															<time
																className="text-xs uppercase tracking-wider text-purple-300 font-semibold"
																dateTime={date}
															>
																{formattedDate}
															</time>
														</div>

														<div className="flex items-center justify-between mb-2">
															{author && (
																<div className="flex items-center space-x-2">
																	<LazyImage
																		src={author.picture}
																		alt={author.name}
																		width={20}
																		height={20}
																		className="rounded-full"
																	/>
																	<span className="text-sm text-gray-300">{author.name}</span>
																</div>
															)}
														</div>

														<h2 className="text-2xl font-bold leading-tight tracking-tight mb-2 text-white group-hover:text-cyber-green transition-colors duration-300">
															{title}
														</h2>
													</div>
												</div>
											)}

											<div className="flex-1 p-6 flex flex-col">
												<p className="prose text-gray-300 text-sm leading-relaxed max-w-none mb-4 flex-1">{excerpt}</p>

												<div className="mt-auto pt-4 border-t border-gray-800">
													<span className="inline-flex items-center text-sm font-medium text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
														Read article
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
														</svg>
													</span>
												</div>
											</div>
										</Link>
									</motion.div>
								);
							})}
						</AnimatePresence>
					</div>
				</div>
			</div>

			{pagination && pagination.totalPages > 1 && (
				<Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
			)}
		</Container>
	);
}
