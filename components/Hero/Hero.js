'use client';

import { Container } from '../Container/Container';
import { Section } from '../Section/Section';
import { HeroContent } from './HeroContent';

export const Hero = () => {
	return (
		<Section count="1.0" title="House of Giants">
			<Container
				className="-has-background relative overflow-hidden min-h-[calc(100vh+var(--header-height))] flex flex-col justify-center px-4 md:px-8"
				background="var(--c-primary-dark)"
				pt="clamp(var(--sp-xl), 15vh, 9rem)"
				pb="clamp(var(--sp-xl), 15vh, 9rem)"
			>
				<div className="max-w-[1440px] mx-auto w-full">
					<HeroContent />
				</div>
			</Container>
		</Section>
	);
};
