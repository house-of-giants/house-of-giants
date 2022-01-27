import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import { Base, Typography } from '@/styles/base'

import { Header } from '@/components/Header/Header'

const GlobalStyle = createGlobalStyle`
	${Base}
	${Typography}
`

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>House of Giants :: A digital interactive studio</title>
				<link rel="stylesheet" href="https://use.typekit.net/itw5okx.css"></link>
				<link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml"></link>

				<meta name="description" content="Dreaming of innovation. Experimenting with passion. Creating with purpose. We are a digital interactive studio focused on creating beautiful, bold, thoughtfully crafted websites." />
				<meta name="image" content="/social/share.jpg" />

				<meta property="og:url" content="https://houseofgiants.com" />
				<meta property="og:title" content="House of Giants :: A digital interactive studio" />
				<meta property="og:description" content="Dreaming of innovation. Experimenting with passion. Creating with purpose. We are a digital interactive studio focused on creating beautiful, bold, thoughtfully crafted websites." />
				<meta property="og:image" content="/social/share.jpg" />

				{/* Start Twitter specific meta */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="_houseofgiants" />
				<meta name="twitter:title" content="House of Giants" />
				<meta name="twitter:description" content="Dreaming of innovation. Experimenting with passion. Creating with purpose. We are a digital interactive studio focused on creating beautiful, bold, thoughtfully crafted websites." />
				<meta name="twitter:image" content="/social/share.jpg" />

				<script async src="https://www.googletagmanager.com/gtag/js?id=G-9QXCP9HFX0" />
				<script dangerouslySetInnerHTML={
					{ __html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', 'G-9QXCP9HFX0');
					`}
				}>
				</script>
			</Head>
			<GlobalStyle />
			<div className="global-wrap">
				<Header />
				<Component {...pageProps} />
			</div>
		</>
	)
}