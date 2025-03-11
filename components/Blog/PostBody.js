'use client';

import { useEffect } from 'react';
import markdownStyles from './markdown-styles.module.css';

export const PostBody = (props) => {
	const { content } = props;

	useEffect(() => {
		// Add reading progress functionality
		const progressBar = document.getElementById('reading-progress');
		if (progressBar) {
			const updateProgress = () => {
				const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
				const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
				const scrolled = (winScroll / height) * 100;
				progressBar.style.width = scrolled + '%';
			};

			window.addEventListener('scroll', updateProgress);
			return () => window.removeEventListener('scroll', updateProgress);
		}

		// Add ids to headings for better navigation
		const headings = document.querySelectorAll('.markdown h2, .markdown h3');
		const tocContainer = document.querySelector('.toc-container');

		// If there are headings and a TOC container, generate the TOC
		if (headings.length > 0 && tocContainer) {
			// Clear any existing TOC content
			tocContainer.innerHTML = '';

			// Generate TOC items
			headings.forEach((heading, index) => {
				// Set id if not already present
				if (!heading.id) {
					heading.id = 'heading-' + index;
				}

				// Create TOC item
				const tocItem = document.createElement('a');
				tocItem.href = '#' + heading.id;
				tocItem.className =
					heading.tagName === 'H2'
						? 'block hover:text-purple-400 transition-colors mb-2 font-medium'
						: 'block hover:text-purple-400 transition-colors ml-4 text-sm text-gray-400';
				tocItem.textContent = heading.textContent;

				// Add active state on scroll
				const observer = new IntersectionObserver(
					([entry]) => {
						if (entry.isIntersecting) {
							// Remove active class from all TOC items
							document.querySelectorAll('.toc-container a').forEach((item) => {
								item.classList.remove('text-purple-400');
							});
							// Add active class to current TOC item
							tocItem.classList.add('text-purple-400');
						}
					},
					{ rootMargin: '-100px 0px -66% 0px' }
				);
				observer.observe(heading);

				tocContainer.appendChild(tocItem);

				// Add anchor links to headings
				const anchor = document.createElement('a');
				anchor.className = 'anchor-link';
				anchor.href = '#' + heading.id;
				anchor.innerHTML =
					'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
				anchor.style.opacity = '0';
				anchor.style.marginLeft = '0.5rem';
				heading.style.position = 'relative';
				heading.appendChild(anchor);

				heading.addEventListener('mouseenter', () => {
					anchor.style.opacity = '0.5';
				});
				heading.addEventListener('mouseleave', () => {
					anchor.style.opacity = '0';
				});
			});
		}

		// Add styling to code blocks
		const codeBlocks = document.querySelectorAll('.markdown pre code');
		codeBlocks.forEach((codeBlock) => {
			// Add copy button to code blocks
			const copyButton = document.createElement('button');
			copyButton.className = 'copy-button';
			copyButton.innerHTML = 'Copy';
			copyButton.style.position = 'absolute';
			copyButton.style.top = '0.5rem';
			copyButton.style.right = '0.5rem';
			copyButton.style.padding = '0.25rem 0.5rem';
			copyButton.style.fontSize = '0.75rem';
			copyButton.style.background = 'rgba(155, 77, 255, 0.2)';
			copyButton.style.color = '#c4b5fd';
			copyButton.style.borderRadius = '0.25rem';
			copyButton.style.cursor = 'pointer';
			copyButton.style.transition = 'all 0.2s';

			copyButton.addEventListener('click', () => {
				navigator.clipboard.writeText(codeBlock.textContent).then(() => {
					copyButton.innerHTML = 'Copied!';
					setTimeout(() => {
						copyButton.innerHTML = 'Copy';
					}, 2000);
				});
			});

			copyButton.addEventListener('mouseenter', () => {
				copyButton.style.background = 'rgba(155, 77, 255, 0.4)';
			});
			copyButton.addEventListener('mouseleave', () => {
				copyButton.style.background = 'rgba(155, 77, 255, 0.2)';
			});

			codeBlock.parentNode.style.position = 'relative';
			codeBlock.parentNode.appendChild(copyButton);
		});
	}, []);

	// Calculate reading time based on word count
	const readingTime = Math.ceil(content.split(' ').length / 200);

	return (
		<section className="relative">
			<div className="container max-w-3xl mx-auto px-4 md:px-0 pb-12">
				{/* Reading progress bar */}
				<div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
					<div id="reading-progress" className="h-full bg-gradient-to-r from-[#9b4dff] to-[#ff2a6d] w-0"></div>
				</div>

				{/* Reading time estimate */}
				<div className="flex items-center justify-end mb-8 text-sm text-gray-400">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-4 w-4 mr-1"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<span id="reading-time">{readingTime} min read</span>
				</div>

				{/* Article content */}
				<div
					className={`${markdownStyles['markdown']} prose prose-lg lg:prose-xl dark:prose-invert prose-headings:text-white prose-h2:border-b prose-h2:border-gray-800 prose-h2:pb-2 prose-img:rounded-xl prose-img:shadow-lg max-w-none`}
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</div>
		</section>
	);
};
