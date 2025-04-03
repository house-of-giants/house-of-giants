'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<>
			<main className="flex min-h-[calc(100vh-332px)] flex-col items-center justify-center p-24">
				<div className="text-center">
					<h1 className="text-6xl font-bold mb-4">500</h1>
					<h2 className="text-2xl mb-8">Something went wrong!</h2>
					<p className="mb-8">We're sorry, but something went wrong on our end.</p>
					<div className="space-x-4">
						<button
							onClick={() => reset()}
							className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
						>
							Try again
						</button>
						<Link
							href="/"
							className="inline-block bg-gray-200 text-black px-6 py-3 rounded-md hover:bg-gray-300 transition-colors"
						>
							Return Home
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}
