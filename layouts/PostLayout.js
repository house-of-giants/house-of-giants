import { PostBody } from '@/components/Blog/PostBody';
import { PostFooter } from '@/components/Blog/PostFooter';
import { PostHeader } from '@/components/Blog/PostHeader';
import siteMetadata from '@/data/siteMetadata';
import Link from 'next/link';
import { FloatingGradients } from '@/components/FloatingGradients/FloatingGradients';
import { Section } from '@/components/Section/Section';
import Image from 'next/image';

export default function PostLayout({ post, content }) {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.title,
		description: post.summary,
		image: post.image.startsWith('http') ? post.image : `${siteMetadata.siteUrl}${post.image}`,
		datePublished: new Date(post.date).toISOString(),
		dateModified: new Date(post.lastmod || post.date).toISOString(),
		author: {
			'@type': 'Person',
			name: post.author?.name || siteMetadata.author,
			url: siteMetadata.siteUrl,
		},
		publisher: {
			'@type': 'Organization',
			name: siteMetadata.title,
			logo: {
				'@type': 'ImageObject',
				url: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
			},
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `${siteMetadata.siteUrl}/blog/${post.slug}`,
		},
	};

	return (
		<main className="relative bg-[#1a1f24] text-gray-100 min-h-screen">
			<FloatingGradients variant="purple" intensity="low" />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

			<article className="relative z-10">
				<PostHeader title={post.title} coverImage={post.image} date={post.date} author={post.author} slug={post.slug} />

				<div className="container max-w-[880px] mx-auto px-4">
					{/* Reading guide - appears on side of content on larger screens */}
					<div className="lg:flex lg:gap-12">
						<div className="lg:w-[680px]">
							{/* Main content */}
							<div className="relative">
								<PostBody content={content} />
							</div>
						</div>
					</div>
				</div>

				{/* Related posts section */}
				{post.related && post.related.length > 0 && (
					<Section count="2.0" title="Related Articles">
						<div className="container max-w-7xl mx-auto px-4 py-16">
							<h2 className="text-4xl md:text-5xl font-black mb-12 text-white">You might also like</h2>
							<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
								{post.related.map((relatedPost) => (
									<Link
										key={relatedPost.slug}
										href={`/blog/${relatedPost.slug}`}
										className="group block overflow-hidden rounded-lg bg-gray-800 bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 border border-gray-800 hover:border-purple-900"
									>
										<div className="relative h-48 overflow-hidden">
											{relatedPost.image && (
												<Image
													src={relatedPost.image}
													alt={relatedPost.title}
													fill
													className="object-cover group-hover:scale-105 transition-transform duration-500"
												/>
											)}
											<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
										</div>
										<div className="p-6">
											<h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
												{relatedPost.title}
											</h3>
											<p className="text-sm text-gray-400 mb-3">
												{new Date(relatedPost.date).toLocaleDateString('en-US', {
													year: 'numeric',
													month: 'long',
													day: 'numeric',
												})}
											</p>
											<p className="text-gray-300 line-clamp-3">{relatedPost.summary}</p>
										</div>
									</Link>
								))}
							</div>
						</div>
					</Section>
				)}
			</article>

			<PostFooter slug={post.slug} title={post.title} tags={post.tags} />
		</main>
	);
}
