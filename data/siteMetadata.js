const siteMetadata = {
	title: '🤘 House of Giants | Denver Based Web Development Studio',
	author: 'Dominic Magnifico',
	headerTitle: 'House of Giants',
	description:
		'At House of Giants, we craft bold and thoughtfully designed digital experiences to push creative boundaries. We specialize in custom website and web app development that merges innovative design with powerful functionality. From artist platforms to business solutions, we turn digital visions into reality without ever compromising on quality or creativity.',
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
