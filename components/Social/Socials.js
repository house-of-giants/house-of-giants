export const Socials = ({ theme = 'light' }) => {
	const socialLinks = [
		{ href: 'https://bsky.app/profile/houseofgiants.com', label: 'Bluesky' },
		{ href: 'https://instagram.com/_houseofgiants', label: 'Instagram' },
		{ href: 'https://linkedin.com/company/houseofgiants', label: 'LinkedIn' },
	];

	return (
		<div className="flex items-center gap-3">
			{socialLinks.map(({ href, label }, index) => (
				<a
					key={href}
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					className={`
						relative group flex items-center gap-2
						px-3 h-8 rounded-full overflow-hidden
						transition-all duration-300 hover:scale-105
						${
							theme === 'light'
								? 'bg-[rgba(0,255,224,0.1)] hover:bg-[rgba(0,255,224,0.2)]'
								: 'bg-[rgba(255,42,109,0.1)] hover:bg-[rgba(255,42,109,0.2)]'
						}
					`}
				>
					{/* Gradient Border */}
					<div
						className={`
							absolute inset-0 rounded-full
							bg-gradient-to-r p-[1px]
							${
								theme === 'light'
									? 'from-[rgba(0,255,224,0.3)] to-[rgba(193,255,29,0.3)]'
									: 'from-[rgba(255,42,109,0.3)] to-[rgba(155,77,255,0.3)]'
							}
						`}
					>
						<div
							className={`
							w-full h-full rounded-full
							${theme === 'light' ? 'bg-[var(--c-primary-dark)]' : 'bg-white'}
						`}
						/>
					</div>

					{/* Number */}
					<span
						className={`
						relative z-10 text-xs font-mono
						${theme === 'light' ? 'text-[rgba(0,255,224,0.8)]' : 'text-[var(--c-primary-dark)]'}
					`}
					>
						{(index + 1).toString().padStart(2, '0')}
					</span>

					{/* Label */}
					<span
						className={`
						relative z-10 text-xs font-mono hidden md:block
						${theme === 'light' ? 'text-[rgba(0,255,224,0.8)]' : 'text-[var(--c-primary-dark)]'}
					`}
					>
						{label}
					</span>
				</a>
			))}
		</div>
	);
};
