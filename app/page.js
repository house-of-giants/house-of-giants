'use client';

import { Hero } from '@/components/Hero/Hero';
import { Services } from '@/components/Services/Services';
import { FloatingGradients } from '@/components/FloatingGradients/FloatingGradients';
import { Work } from '@/components/Work/Work';
import { Clients } from '@/components/Clients/Clients';
import { Impact } from '@/components/Impact/Impact';
import ContactForm from '@/components/Contact/ContactForm';
import { SectionSeparator } from '@/components/SectionSeparator/SectionSeparator';
import { work } from '@/data/work';
import CanonicalLink from '@/components/SEO/CanonicalLink';

export default function Page() {
	return (
		<main className="relative">
			<FloatingGradients intensity="high" />
			<CanonicalLink path="/" />
			<div className="-mt-18 lg:-mt-24 2xl:-mt-36">
				<Hero />
			</div>
			<SectionSeparator />
			<Services />
			<SectionSeparator />
			<Work items={work} />
			<SectionSeparator />
			<Clients />
			<SectionSeparator />
			<Impact />
			<ContactForm />
		</main>
	);
}
