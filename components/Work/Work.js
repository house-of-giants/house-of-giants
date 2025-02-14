'use client';

import { Container } from '../Container/Container';
import { Section } from '../Section/Section';
import { WorkCard } from './WorkCard';
import { SectionHeader } from '../SectionHeader/SectionHeader';

export const Work = ({ items }) => {
	return (
		<Section count="4.0" title="Work" id="work">
			<Container
				className="-has-background relative z-10"
				background="var(--c-primary-dark)"
				pt="var(--section-spacing-top)"
				pb="var(--section-spacing-bottom)"
			>
				<SectionHeader
					title="Our Work"
					subtitle="speaks for itself."
					accent="Pushing pixels and breaking boundaries."
				/>

				{/* Featured Work */}
				<div className="mb-[var(--content-spacing)]">
					<WorkCard {...items[0]} featured />
				</div>

				{/* Other Work */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--content-spacing)]">
					{items.slice(1).map((item) => (
						<WorkCard key={item.title} {...item} />
					))}
				</div>
			</Container>
		</Section>
	);
};
