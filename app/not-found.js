import Link from 'next/link';

export default function NotFound() {
	return (
		<>
			<main className="flex min-h-[calc(100vh-332px)] flex-col items-center justify-center p-24">
				<div className="text-center">
					<h1 className="text-6xl font-bold mb-4">404</h1>
					<h2 className="text-2xl mb-8">Page Not Found</h2>
					<p className="mb-8">The page you're looking for doesn't exist or has been moved.</p>
					<Link
						href="/"
						className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
					>
						Return Home
					</Link>
				</div>
			</main>
		</>
	);
}
