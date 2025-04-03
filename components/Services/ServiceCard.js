'use client';

export const ServiceCard = ({ id, title, description, features }) => {
	return (
		<div className="service-card group relative p-8 rounded-lg border border-moon-rock/10 hover:border-transparent transition-all duration-500">
			<div className="absolute inset-0 bg-gradient-to-br from-[#00ffe0]/5 via-transparent to-[#c1ff1d]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>

			<div className="relative space-y-8">
				<div className="flex items-center justify-between">
					<span className="font-serif text-4xl italic text-moon-rock/30">{id}</span>
					<div className="h-[1px] flex-grow mx-4 bg-gradient-to-r from-[#00ffe0] to-[#c1ff1d] opacity-20 group-hover:opacity-100 transition-opacity duration-500"></div>
				</div>

				<div className="space-y-6">
					<h3 className="text-[clamp(2rem, 4vw, 3.5rem)] font-normal not-italic leading-none tracking-tight group-hover:-grad-header transition-colors duration-300">
						{title}
					</h3>
					<p className="text-moon-rock text-xl leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
					<ul className="space-y-4 text-moon-rock">
						{features.map((feature, index) => (
							<li key={index} className="flex items-center gap-3 transition-all duration-300 hover:translate-x-2">
								<span className="text-cyber-green">→</span>
								{feature}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
