import { Container } from '@/components/Container/Container';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { Section } from '@/components/Section/Section';

// What's included section
export const PricingIncludes = ({ includes }) => {
	return (
		<Section count="3.1" title="What's Included" id="pricing-includes">
			<Container pt="var(--section-spacing-top)" pb="var(--section-spacing-bottom)">
				<SectionHeader
					title="What Every Package Includes"
					subtitle="How we approach building digital platforms that evolve with your brand."
					accent="We don't just build websites. We build systems that scale."
				/>

				<div className="mt-[var(--header-spacing)]">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="bg-black/20 p-8 rounded-lg border border-moon-rock/10"
					>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
							{/* Features List */}
							<div>
								<h3 className="text-2xl font-bold mb-6">Core Features</h3>
								<p className="text-moon-rock text-lg mb-6">The fundamentals baked into every House of Giants build.</p>

								{includes.map((item, index) => (
									<div className="flex items-start" key={index}>
										<span className="text-cyber-green text-xl mr-4">✓</span>
										<div>
											<h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
											<p className="text-moon-rock/80 text-base">{item.description}</p>
										</div>
									</div>
								))}
							</div>

							{/* Custom Layouts Explanation */}
							<div>
								<h3 className="text-2xl font-bold mb-6">Our Approach to Layouts</h3>
								<p className="text-moon-rock text-lg mb-6">
									We don't count pages—we build scalable templates. Each layout is a powerful foundation that can drive
									multiple dynamic views.
								</p>
								<div className="space-y-4">
									<div className="flex items-start">
										<span className="text-cyber-green text-xl mr-4">✓</span>
										<div>
											<h4 className="text-lg font-bold text-white mb-1">Section-Based Design</h4>
											<p className="text-moon-rock/80 text-base">
												Layouts are modular—built with interchangeable components so your site can evolve without a full
												redesign.
											</p>
										</div>
									</div>
									<div className="flex items-start">
										<span className="text-cyber-green text-xl mr-4">✓</span>
										<div>
											<h4 className="text-lg font-bold text-white mb-1">Dynamic Content Support</h4>
											<p className="text-moon-rock/80 text-base">
												Whether you&apos;re listing locations, publishing resources, or showcasing team members, a
												single layout can scale to support hundreds of entries—automatically.
											</p>
										</div>
									</div>
									<div className="flex items-start">
										<span className="text-cyber-green text-xl mr-4">✓</span>
										<div>
											<h4 className="text-lg font-bold text-white mb-1">Future-Proof UX</h4>
											<p className="text-moon-rock/80 text-base">
												Layouts keep design consistent, navigation intuitive, and performance high—even as content grows
												or priorities shift.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</Container>
		</Section>
	);
};
