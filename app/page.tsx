import {
	Header,
	Footer,
	Hero,
	Differentiation,
	FeaturedWork,
	ServicesPreview,
	SocialProof,
	PricingTeaser,
} from '@/components/organisms';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Differentiation />
				<FeaturedWork />
				<ServicesPreview />
				<SocialProof />
				<PricingTeaser />
			</main>
			<Footer />
		</>
	);
}
