'use client';

import { motion } from 'framer-motion';
import { Container } from '../Container/Container';
import { Section } from '../Section/Section';
import { HeroContent } from './HeroContent';
import { SectionBar } from '../SectionBar/SectionBar';

export const Hero = () => {
	return (
		<Section count="1.0" title="House of Giants">
			<SectionBar />
			<Container
				className="-has-background relative overflow-hidden"
				background="var(--c-primary-dark)"
				pt="var(--section-spacing-top)"
				pb="var(--section-spacing-bottom)"
			>
				<HeroContent />
			</Container>
		</Section>
	);
};
