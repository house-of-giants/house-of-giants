import { generateCanonicalUrl } from '@/utils/canonical';

export default function CanonicalLink({ path }) {
	const canonicalUrl = generateCanonicalUrl(path);

	return <link rel="canonical" href={canonicalUrl} />;
}
