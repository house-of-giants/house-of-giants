'use client';

import Image from 'next/image';
import { Section } from '@/components/templates/section';
import { SectionHeader } from '@/components/templates/section-header';
import { Reveal } from './reveal';

interface CaseStudyGalleryProps {
	images: string[];
	caption?: string;
}

export function CaseStudyGallery({ images, caption }: CaseStudyGalleryProps) {
	return (
		<Section padding="default">
			{caption && (
				<SectionHeader
					eyebrow="Visuals"
					title="Project Gallery"
					description={caption}
					align="center"
					className="mb-12"
				/>
			)}

			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
				{images.map((image, index) => {
					const isFullWidth = (index + 1) % 3 === 0;

					return (
						<div
							key={index}
							className={isFullWidth ? 'relative aspect-video md:col-span-2' : 'relative aspect-square md:aspect-4/3'}
						>
							<Reveal delay={index * 0.1} className="h-full w-full">
								<div className="group border-border bg-muted relative h-full w-full overflow-hidden border">
									<Image
										src={image}
										alt={`Gallery image ${index + 1}`}
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-105"
										sizes={isFullWidth ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
									/>
									<div className="bg-primary/10 pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
								</div>
							</Reveal>
						</div>
					);
				})}
			</div>
		</Section>
	);
}
