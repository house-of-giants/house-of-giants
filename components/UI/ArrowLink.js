'use client';

export const ArrowLink = ({ href, children }) => {
	return (
		<a href={href} className="text-wolf-gray hover:text-white transition-colors duration-300 flex items-center gap-2">
			{children}
			<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
				<path d="M5 12h14M12 5l7 7-7 7" />
			</svg>
		</a>
	);
};
