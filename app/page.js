'use client';

import { Hero } from '@/components/Hero/Hero';
import { Services } from '@/components/Services/Services';
import { FloatingGradients } from '@/components/FloatingGradients/FloatingGradients';
import Reel from '@/components/Reel/Reel';
import { Work } from '@/components/Work/Work';
import { Clients } from '@/components/Clients/Clients';
import { Impact } from '@/components/Impact/Impact';
import ContactForm from '@/components/Contact/ContactForm';
import { SectionSeparator } from '@/components/SectionSeparator/SectionSeparator';

const work = [
	{
		title: 'Shakey Graves',
		type: ['Design', 'Development'],
		img: '/images/shakeycard.jpg',
		url: '/work/shakey-graves',
	},
	{
		title: 'Hayashi',
		type: ['Design', 'Development'],
		img: '/images/hayashicard.jpg',
		url: '/work/hayashi',
	},
	{
		title: 'BackForty',
		type: ['Design', 'Development'],
		img: '/images/backfortycard.jpg',
		url: '/work/backforty',
	},
];

export default function Page() {
	return (
		<main className="relative">
			<FloatingGradients />
			<Reel />
			<Hero />
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
