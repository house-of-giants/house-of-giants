import Link from 'next/link';

export function PostFooter() {
	return (
		<>
			<footer className="flex flex-col items-center py-24 px-8 bg-[#1a1f24]">
				<p className="text-9xl font-serif -grad-header">Like what you just read?</p>
				<div className="flex justify-center gap-8">
					<Link
						href="/blog"
						className="inline-flex hover:underline font-serif italic py-4 px-6 text-3xl text-[#F4F3EC] border border-solid border-current"
					>
						Read Some More 👀
					</Link>
					<Link
						href="/#contact"
						className="inline-flex hover:underline font-serif italic py-4 px-6 bg-[#f4f3ec] text-[#1a1f24] text-3xl border border-solid border-current"
					>
						Summon The Salespeople 🔥
					</Link>
				</div>
			</footer>
		</>
	);
}
