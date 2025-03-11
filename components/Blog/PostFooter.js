'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import siteMetadata from '@/data/siteMetadata';

export function PostFooter({ slug, title, tags }) {
	const [email, setEmail] = useState('');
	const [subscribed, setSubscribed] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		// Here you would normally connect to your newsletter service (Mailchimp, ConvertKit, etc.)
		// For now we'll just show a success message
		if (email) {
			setSubscribed(true);
		}
	};

	return (
		<>
			{/* 
			// Author bio section - Commented out as requested but code preserved
			<section className="container max-w-4xl mx-auto px-4 py-16 border-t border-gray-200">
				<div className="grid md:grid-cols-[1fr_2fr] gap-8 items-center">
					<div>
						<div className="w-32 h-32 rounded-full overflow-hidden mx-auto md:mx-0">
							<img src="/images/author-placeholder.jpg" alt="Author" className="w-full h-full object-cover" />
						</div>
					</div>
					<div>
						<h3 className="text-2xl font-bold mb-3">About the author</h3>
						<p className="text-lg mb-4">
							House of Giants is a digital studio specializing in crafting bold and thoughtfully designed digital
							experiences. We push creative boundaries while delivering functional solutions.
						</p>
						<div className="flex gap-4">
							<Link
								href="https://twitter.com/_houseofgiants"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#1DA1F2] hover:opacity-80 transition-opacity"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
									<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
								</svg>
							</Link>
							<Link
								href="https://linkedin.com/company/houseofgiants"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#0077b5] hover:opacity-80 transition-opacity"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
									<path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
								</svg>
							</Link>
							<Link
								href="https://instagram.com/_houseofgiants"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#E1306C] hover:opacity-80 transition-opacity"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</section>
			*/}

			{/* 
			// Newsletter signup - Commented out as requested but code preserved
			<section className="bg-[#1a1f24] text-white py-16">
				<div className="container max-w-4xl mx-auto px-4">
					<div className="flex flex-col items-center text-center mb-8">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h2 className="text-6xl md:text-7xl font-serif -grad-header mb-6">Stay in the loop</h2>
							<p className="text-xl max-w-2xl mb-8">
								Subscribe to our newsletter for the latest articles, case studies, and insights from our team.
							</p>
						</motion.div>

						{!subscribed ? (
							<form onSubmit={handleSubmit} className="w-full max-w-md">
								<div className="flex flex-col sm:flex-row gap-4">
									<input
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder="Enter your email"
										className="flex-grow px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b4dff]"
										required
									/>
									<button
										type="submit"
										className="px-6 py-3 bg-gradient-to-r from-[#9b4dff] to-[#ff2a6d] rounded-md font-medium hover:opacity-90 transition-opacity"
									>
										Subscribe
									</button>
								</div>
								<p className="text-xs mt-2 text-gray-400">We respect your privacy. Unsubscribe at any time.</p>
							</form>
						) : (
							<div className="w-full max-w-md p-4 bg-white bg-opacity-10 rounded-md text-center">
								<svg
									className="w-16 h-16 mx-auto text-green-400 mb-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									></path>
								</svg>
								<h3 className="text-2xl font-bold mb-2">Thanks for subscribing!</h3>
								<p>We've sent a confirmation to your email.</p>
							</div>
						)}
					</div>
				</div>
			</section>
			*/}

			{/* Tags and Share Section */}
			{tags && tags.length > 0 && (
				<section className="container max-w-[880px] mx-auto px-4 py-12 border-t border-gray-200 border-opacity-20">
					<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
						{/* Tags */}
						<div>
							<h3 className="text-lg font-bold mb-4">Tags</h3>
							<div className="flex flex-wrap gap-2">
								{tags.map((tag) => (
									<Link
										key={tag}
										href={`/blog/tag/${tag}`}
										className="px-3 py-1 bg-[#1a1f24] text-[#F4F3EC] rounded-full text-sm hover:bg-opacity-80 transition-colors"
									>
										{tag}
									</Link>
								))}
							</div>
						</div>

						{/* Share */}
						<div>
							<h3 className="text-lg font-bold mb-4">Share this article</h3>
							<div className="flex gap-3">
								<a
									href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(
										`${siteMetadata.siteUrl}/blog/${slug}`
									)}`}
									target="_blank"
									rel="noopener noreferrer"
									className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1f24] hover:bg-[#1DA1F2] text-white transition-colors"
									aria-label="Share on Twitter"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
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
									className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1f24] hover:bg-[#3b5998] text-white transition-colors"
									aria-label="Share on Facebook"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
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
									className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1f24] hover:bg-[#0077b5] text-white transition-colors"
									aria-label="Share on LinkedIn"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</section>
			)}

			{/* CTA footer */}
			<footer className="flex flex-col items-center py-24 px-8 bg-[#1a1f24] text-white border-t border-white border-opacity-10">
				<motion.p
					className="text-6xl md:text-9xl font-serif -grad-header mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					Like what you just read?
				</motion.p>
				<div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
					<Link
						href="/blog"
						className="inline-flex hover:underline font-serif italic py-4 px-6 text-xl md:text-3xl text-[#F4F3EC] border border-solid border-current hover:bg-white hover:bg-opacity-5 transition-colors"
					>
						Read Some More 👀
					</Link>
					<Link
						href="/#contact"
						className="inline-flex hover:underline font-serif italic py-4 px-6 bg-[#f4f3ec] text-[#1a1f24] text-xl md:text-3xl border border-solid border-current hover:bg-opacity-90 transition-colors"
					>
						Summon The Salespeople 🔥
					</Link>
				</div>
			</footer>
		</>
	);
}
