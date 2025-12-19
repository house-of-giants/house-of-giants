import { Metadata } from 'next';
import { Suspense } from 'react';
import ContactContent from './contact-content';

export const metadata: Metadata = {
	title: 'Contact House of Giants | Start Your Web Development Project',
	description:
		'Ready to build something? Tell us about your project. We respond within 24 hours. Custom web development for startups and scale-ups.',
	keywords: [
		'contact web developer',
		'hire web developer denver',
		'web development inquiry',
		'startup web development contact',
		'custom web development quote',
		'web design consultation',
	],
	openGraph: {
		title: 'Contact House of Giants | Start Your Web Development Project',
		description: 'Ready to build something? Tell us about your project. We respond within 24 hours.',
		url: 'https://houseofgiants.com/contact',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Contact House of Giants | Start Your Web Development Project',
		description: 'Ready to build something? Tell us about your project. We respond within 24 hours.',
	},
};

const contactJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'ContactPage',
	name: 'Contact House of Giants',
	description: 'Get in touch to start your custom web development project.',
	url: 'https://houseofgiants.com/contact',
	mainEntity: {
		'@type': 'Organization',
		name: 'House of Giants',
		url: 'https://houseofgiants.com',
		email: 'hello@houseofgiants.com',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Denver',
			addressRegion: 'CO',
			addressCountry: 'US',
		},
		contactPoint: {
			'@type': 'ContactPoint',
			contactType: 'sales',
			email: 'hello@houseofgiants.com',
			availableLanguage: 'English',
		},
	},
};

function ContactPageSkeleton() {
	return (
		<div className="bg-background min-h-screen">
			<div className="border-border/50 h-20 border-b">
				<div className="container-wide flex h-full items-center justify-between">
					<div className="bg-muted h-8 w-32 animate-pulse rounded" />
					<div className="flex gap-6">
						<div className="bg-muted h-4 w-16 animate-pulse rounded" />
						<div className="bg-muted h-4 w-16 animate-pulse rounded" />
						<div className="bg-muted h-4 w-16 animate-pulse rounded" />
					</div>
				</div>
			</div>

			<div className="flex min-h-[40vh] items-center justify-center pt-32 pb-16">
				<div className="container-wide text-center">
					<div className="bg-muted mx-auto mb-6 h-16 w-3/4 max-w-2xl animate-pulse rounded-lg" />
					<div className="bg-muted mx-auto h-6 w-2/3 max-w-xl animate-pulse rounded" />
				</div>
			</div>

			<div className="container-wide py-16">
				<div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
					<div className="space-y-6">
						{[1, 2, 3, 4].map((i) => (
							<div key={i} className="space-y-2">
								<div className="bg-muted h-4 w-24 animate-pulse rounded" />
								<div className="bg-muted h-12 w-full animate-pulse rounded-lg" />
							</div>
						))}
						<div className="bg-muted h-14 w-full animate-pulse rounded-lg" />
					</div>

					<div className="order-first space-y-8 lg:order-last">
						<div className="bg-muted h-28 animate-pulse rounded-lg" />
						<div className="bg-muted h-20 animate-pulse rounded-lg" />
						<div>
							<div className="bg-muted mb-4 h-4 w-20 animate-pulse rounded" />
							<div className="grid grid-cols-3 gap-4">
								{[1, 2, 3, 4, 5, 6].map((i) => (
									<div key={i} className="bg-muted aspect-[3/2] animate-pulse rounded-lg" />
								))}
							</div>
						</div>
						<div className="bg-muted h-24 animate-pulse rounded-lg" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default function ContactPage() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
			<Suspense fallback={<ContactPageSkeleton />}>
				<ContactContent />
			</Suspense>
		</>
	);
}
