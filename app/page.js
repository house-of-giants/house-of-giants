'use client';

import { useState } from 'react';
import { Hero } from '@/components/Hero/Hero';
import { Services } from '@/components/Services/Services';
import { Work } from '@/components/Work/Work';
import { Clients } from '@/components/Clients/Clients';
import { Impact } from '@/components/Impact/Impact';
import ContactForm from '@/components/Contact/ContactForm';
import { SectionSeparator } from '@/components/SectionSeparator/SectionSeparator';
import { work } from '@/data/work';
import CanonicalLink from '@/components/SEO/CanonicalLink';
import { PricingCTA } from '@/components/PricingCTA/PricingCTA';

export default function Page() {
	const [selectedAudience, setSelectedAudience] = useState(null);

	const handleAudienceSelect = (audience) => {
		setSelectedAudience(audience);
	};

	return (
		<main className="relative">
			<CanonicalLink path="/" />
			<div className="-mt-18 lg:-mt-24 2xl:-mt-36">
				<Hero onAudienceSelect={handleAudienceSelect} />
			</div>
			{/* Skip standalone AudienceSelector since it's now integrated in Hero */}
			<Services selectedAudience={selectedAudience} />
			<Work items={work} />
			<Clients />
			<Impact />
			<PricingCTA />
			<ContactForm formSource="Homepage" selectedAudience={selectedAudience} />
		</main>
	);
}
