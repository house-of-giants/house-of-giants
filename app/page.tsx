import { Header, Footer } from '@/components/layout';
import {
	Hero,
	Differentiation,
	FeaturedWork,
	ServicesPreview,
	SocialProof,
	PricingTeaser,
	CTABlock,
} from '@/components/home';

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
				<CTABlock />
			</main>
			<Footer />
		</>
	);
}
