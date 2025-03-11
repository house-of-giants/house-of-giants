'use client';

import Link from 'next/link';
import Avatar from './Avatar';
import CoverImage from './CoverImage';
import { motion } from 'framer-motion';
import siteMetadata from '@/data/siteMetadata';

export function PostHeader({ title, coverImage, date, author, slug }) {
	// Split the title into words for the animation
	const titleWords = title.split(' ');

	return (
		<>
			<header className="relative overflow-hidden py-20 mb-16 bg-[#1a1f24] bg-opacity-80">
				{/* Back to blog link */}
				<div className="container max-w-[1440px] mx-auto px-4 z-20 relative">
					<Link
						href="/blog"
						className="inline-flex items-center mb-10 text-lg hover:text-[#c1ff1d] transition-colors text-white"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 mr-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
						</svg>
						Back to all posts
					</Link>
				</div>

				{/* Full width cover image with parallax effect - darker overlay */}
				<div className="absolute inset-0 z-0 opacity-20">
					<div className="absolute inset-0 bg-gradient-to-b from-[#0b0d10] via-[#0b0d10] to-[#0b0d10] opacity-80"></div>
					<motion.div
						animate={{
							y: [0, -10, 0],
							scale: [1, 1.03, 1],
						}}
						transition={{
							duration: 13,
							times: [0, 0.5, 1],
							repeat: Infinity,
							repeatType: 'loop',
							ease: 'easeInOut',
							repeatDelay: 0,
						}}
						style={{
							backgroundImage: `url(${coverImage})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							position: 'absolute',
							inset: '-20px',
							filter: 'blur(5px)',
						}}
					/>
				</div>

				{/* Header content */}
				<div className="container max-w-[1440px] mx-auto px-4 grid lg:grid-cols-[1fr_1fr] gap-12 relative z-10">
					<div className="lg:col-span-1 flex flex-col justify-center items-center lg:items-start">
						{/* Title with word-by-word reveal animation */}
						<h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-tight mb-6 text-center lg:text-left max-w-3xl">
							<span className="sr-only">{title}</span> {/* For accessibility */}
							<motion.span
								className="inline-block text-white"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								{titleWords.map((word, index) => (
									<motion.span
										key={index}
										className="inline-block mr-[0.3em] last:mr-0"
										initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
										animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
										transition={{
											duration: 0.5,
											delay: 0.1 + index * 0.1,
											ease: 'easeOut',
										}}
									>
										{word}
									</motion.span>
								))}
							</motion.span>
						</h1>

						{/* Author and date */}
						{author && (
							<div className="mt-4 mb-8 text-white">
								<Avatar name={author?.name} picture={author?.picture} date={date} />
							</div>
						)}

						{/* Social sharing */}
						<div className="flex items-center gap-3 mt-4">
							<span className="text-white opacity-80 text-sm">Share:</span>
							<div className="flex gap-3">
								<a
									href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(
										`${siteMetadata.siteUrl}/blog/${slug}`
									)}`}
									target="_blank"
									rel="noopener noreferrer"
									className="w-8 h-8 flex items-center justify-center rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 text-white transition-all"
									aria-label="Share on Twitter"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
									</svg>
								</a>
								<a
									href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
										`${siteMetadata.siteUrl}/blog/${slug}`
									)}`}
									target="_blank"
									rel="noopener noreferrer"
									className="w-8 h-8 flex items-center justify-center rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 text-white transition-all"
									aria-label="Share on Facebook"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
									</svg>
								</a>
								<a
									href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
										`${siteMetadata.siteUrl}/blog/${slug}`
									)}&title=${encodeURIComponent(title)}`}
									target="_blank"
									rel="noopener noreferrer"
									className="w-8 h-8 flex items-center justify-center rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 text-white transition-all"
									aria-label="Share on LinkedIn"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
									</svg>
								</a>
							</div>
						</div>
					</div>

					<div className="lg:col-span-1 flex justify-center items-center">
						<div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-2xl transform lg:translate-y-[-20px] h-[300px] lg:h-[350px]">
							<div className="w-full h-full">
								<img src={coverImage} alt={title} className="w-full h-full object-contain bg-[#121417]" />
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
