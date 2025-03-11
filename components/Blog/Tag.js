'use client';

import Link from 'next/link';

const Tag = ({ text }) => {
	return (
		<Link
			href={`/tags/${text.toLowerCase()}`}
			className="mr-2 mb-2 inline-block rounded-md bg-black bg-opacity-50 px-2 py-1 text-xs font-medium text-purple-400 hover:bg-purple-900 hover:bg-opacity-20 hover:text-purple-300 transition-colors duration-200 border border-purple-900 border-opacity-50"
		>
			#{text.toLowerCase()}
		</Link>
	);
};

export default Tag;
