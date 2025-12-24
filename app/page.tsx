import {
	Hero,
	Differentiation,
	FeaturedWork,
	ServicesPreview,
	SocialProof,
	PricingTeaser,
} from '@/components/organisms';

export default function Home() {
	return (
		<main>
			<Hero />
			<Differentiation />
			<FeaturedWork />
			<ServicesPreview />
			<SocialProof />
			<PricingTeaser />
		</main>
	);
}
