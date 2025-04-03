'use client';

export const TechCard = ({ title, category, description, features, index }) => {
	return (
		<div className="tech-feature-card group relative p-8 rounded-lg border border-moon-rock/10 hover:border-transparent transition-all duration-500">
			{/* Subtle gradient background */}
			<div className="absolute inset-0 bg-gradient-to-br from-[#00ffe0]/5 via-transparent to-[#ff2a6d]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>

			<div className="relative space-y-8">
				{/* Header with category */}
				<div className="flex items-center justify-between">
					<span className="text-sm uppercase tracking-widest text-moon-rock/75">{category}</span>
				</div>

				{/* Content */}
				<div className="space-y-6">
					<h3 className="text-[clamp(2rem, 4vw, 2.5rem)] font-normal not-italic leading-none tracking-tight -grad-header">
						{title}
					</h3>
					<p className="text-moon-rock text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
					<ul className="space-y-4 text-moon-rock">
						{features.map((feature, index) => (
							<li key={index} className="flex items-center gap-3 pl-4 transition-all duration-300 hover:translate-x-2">
								<span className="text-[var(--c-accent)]">→</span>
								{feature}
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* Bottom gradient line */}
			<div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#00ffe0] via-[#9b4dff] to-[#ff2a6d] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
		</div>
	);
};
