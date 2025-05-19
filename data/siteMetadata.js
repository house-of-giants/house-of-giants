const siteMetadata = {
	title: 'Smarter Websites for Brands That Move Fast',
	author: 'Dominic Magnifico',
	headerTitle: 'House of Giants',
	description:
		'Award-winning custom web development for startups and restaurants. Our Denver team builds high-performance websites that drive conversions and scale with your business.',
	language: 'en-us',
	theme: 'system', // system, dark or light
	siteUrl: 'https://houseofgiants.com',
	siteLogo: '/images/logo.png',
	socialBanner: 'https://houseofgiants.com/api/og',
	mastodon: '',
	email: 'hello@houseofgiants.com',
	github: 'https://github.com/house-of-giants',
	twitter: 'https://twitter.com/_houseofgiants',
	facebook: 'https://facebook.com/houseofgiants',
	youtube: '',
	linkedin: 'https://www.linkedin.com/company/houseofgiants/',
	threads: 'https://www.threads.net/_houseofgiants',
	instagram: 'https://www.instagram.com/_houseofgiants',
	locale: 'en-US',
	getOgImage: function (title) {
		return `https://houseofgiants.com/api/og?title=${encodeURIComponent(title || this.title)}`;
	},
};

module.exports = siteMetadata;
