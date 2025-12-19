import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { caseStudies, getCaseStudyBySlug } from '@/lib/data/case-studies';
import CaseStudyContent from './case-study-content';

interface PageProps {
	params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
	return caseStudies.map((study) => ({
		slug: study.slug,
	}));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const study = getCaseStudyBySlug(slug);

	if (!study) {
		return {
			title: 'Case Study Not Found',
		};
	}

	const title = `${study.title} Case Study | House of Giants`;
	const description = study.hook;

	return {
		title,
		description,
		keywords: [...study.services, study.industry, 'case study', 'web development', 'custom web app', study.client.name],
		openGraph: {
			title: `${study.title} | House of Giants`,
			description,
			url: `https://houseofgiants.com/work/${study.slug}`,
			type: 'article',
			images: [
				{
					url: study.images.hero,
					width: 1200,
					height: 630,
					alt: study.title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: study.title,
			description,
			images: [study.images.hero],
		},
		alternates: {
			canonical: `/work/${study.slug}`,
		},
	};
}

function generateJsonLd(study: NonNullable<ReturnType<typeof getCaseStudyBySlug>>) {
	return {
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		name: study.title,
		description: study.hook,
		author: {
			'@type': 'Organization',
			name: 'House of Giants',
			url: 'https://houseofgiants.com',
		},
		datePublished: study.timeline,
		keywords: study.services.join(', '),
		about: {
			'@type': 'Organization',
			name: study.client.name,
			description: study.client.description,
		},
		...(study.testimonial && {
			review: {
				'@type': 'Review',
				reviewBody: study.testimonial.quote,
				author: {
					'@type': 'Person',
					name: study.testimonial.author,
					jobTitle: study.testimonial.title,
				},
			},
		}),
	};
}

export default async function CaseStudyPage({ params }: PageProps) {
	const { slug } = await params;
	const study = getCaseStudyBySlug(slug);

	if (!study) {
		notFound();
	}

	const jsonLd = generateJsonLd(study);

	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<CaseStudyContent study={study} />
		</>
	);
}
