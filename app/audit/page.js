import { AuditForm } from '@/components/Audit/AuditForm';
import { Container } from '@/components/Container/Container';
import { FloatingGradients } from '@/components/FloatingGradients/FloatingGradients';
import { Section } from '@/components/Section/Section';

export default function AuditPage() {
	return (
		<main>
			<Section count="1.0" title="Website Audit" id="audit">
				<FloatingGradients variant="purple" intensity="low" />
				<Container
					className="-has-background"
					background="var(--c-primary-dark)"
					pt="var(--section-spacing-top)"
					pb="var(--section-spacing-bottom)"
				>
					<div className="max-w-7xl mx-auto">
						{/* Hero Section */}
						<div className="space-y-8 mb-16 text-center">
							<h1 className="text-[clamp(3rem,8vw,8rem)] font-black leading-[0.85] tracking-tight">
								<span className="block -grad-header">Free Website</span>
								<span className="block text-white">Audit</span>
							</h1>

							<div className="max-w-5xl mx-auto space-y-6">
								<p className="text-[clamp(1.5rem,2vw,2rem)] text-moon-rock leading-tight">
									If your website isn&apos;t converting, scaling, or performing the way it should, we&apos;ll tell you
									why, and what to do about it.
								</p>
							</div>
						</div>

						{/* Main Content Grid */}
						<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
							{/* Benefits Section - Now in a smaller column */}
							<div className="order-last lg:order-first lg:col-span-4 space-y-8">
								<div className="bg-black bg-opacity-30 p-8 rounded-xl border border-gray-800">
									<h2 className="text-2xl font-bold text-white mb-6">What You'll Get</h2>
									<ul className="space-y-4 text-moon-rock/80">
										<li className="flex items-start gap-3">
											<span className="text-cyber-green mt-1">•</span>
											<span>A breakdown of what&apos;s working, and what&apos;s not</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-cyber-green mt-1">•</span>
											<span>Clear, actionable recommendations to improve UX and drive conversions</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-cyber-green mt-1">•</span>
											<span>Technical insights on site speed, SEO, and performance bottlenecks</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-cyber-green mt-1">•</span>
											<span>Priority access to our team if you&apos;re ready to fix it</span>
										</li>
									</ul>
								</div>

								<div className="bg-black bg-opacity-30 p-8 rounded-xl border border-gray-800">
									<h2 className="text-2xl font-bold text-white mb-6">What We&apos;ll Review</h2>
									<ul className="space-y-4 text-moon-rock/80">
										<li className="flex items-center gap-2">
											<span className="text-cyber-green">→</span>
											<span>User Experience &amp; Visual Design</span>
										</li>
										<li className="flex items-center gap-2">
											<span className="text-cyber-green">→</span>
											<span>Conversion Flow & CTAs</span>
										</li>
										<li className="flex items-center gap-2">
											<span className="text-cyber-green">→</span>
											<span>Performance &amp; Page Speed</span>
										</li>
										<li className="flex items-center gap-2">
											<span className="text-cyber-green">→</span>
											<span>SEO Structure &amp; Content Strategy</span>
										</li>
										<li className="flex items-center gap-2">
											<span className="text-cyber-green">→</span>
											<span>Accessibility &amp; Usability</span>
										</li>
									</ul>
								</div>
							</div>

							{/* Form Section - Now in a larger column */}
							<div className="lg:col-span-8">
								<div className="bg-black bg-opacity-30 p-12 rounded-xl border border-gray-800 relative overflow-hidden">
									{/* Decorative gradient blobs */}
									<div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
									<div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

									<div className="relative z-10">
										<div className="text-center mb-12">
											<h2 className="text-4xl font-bold mb-4">Ready to Know What&apos;s Holding Your Site Back?</h2>
											<p className="text-moon-rock/80 text-lg">
												Fill out the form below and we&apos;ll send you a custom audit with real insights.
											</p>
										</div>
										<AuditForm />
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</Section>
		</main>
	);
}
