'use client';

export const TechCard = ({ title, category, description, features, icon: Icon, index }) => {
	return (
		<div className="tech-feature-card group" key={index}>
			<div className="flex flex-col items-start gap-8">
				<div className="w-full flex justify-between items-center pb-6 relative">
					{Icon}
					<span className="font-serif text-2xl italic -grad-header">{String(index + 1).padStart(2, '0')}</span>
					<div
						className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#00ffe0] via-[#7dff5d] to-[#c1ff1d] 
                        transition-opacity duration-300 group-hover:opacity-100"
					></div>
				</div>

				<div className="space-y-6">
					<div className="space-y-1">
						<span className="text-sm uppercase tracking-widest text-moon-rock/70">{category}</span>
						<h3 className="text-[2.5rem] font-black leading-none tracking-tight group-hover:-grad-header transition-colors duration-300">
							{title}
						</h3>
					</div>
					<p
						className="text-moon-rock text-[clamp(1rem,2vw,1.25rem)] leading-relaxed"
						dangerouslySetInnerHTML={{ __html: description }}
					/>
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
