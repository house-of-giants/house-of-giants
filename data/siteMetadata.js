const siteMetadata = {
	title: 'Custom Web Development & Scalable Websites | House of Giants',
	author: 'Dominic Magnifico',
	headerTitle: 'House of Giants',
	description:
		'We build high-performance websites and web apps for ambitious startups, QSR brands, and creative teams. No templates. No bloat. Just custom code, smart UX, and strategy that scales.',
	language: 'en-us',
	theme: 'system',
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
