import { AnimateSharedLayout } from 'framer-motion'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import PrimaryNav from '@/components/Nav/PrimaryNav'
import { Base, Typography } from '@/styles/base'
import Footer from '@/components/Global/Footer'

const GlobalStyle = createGlobalStyle`
	${Base}
	${Typography}
`

const theme = {}

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="stylesheet" href="https://use.typekit.net/itw5okx.css"></link>
				<link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml"></link>
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
				<PrimaryNav />
				<AnimateSharedLayout>
					<Component {...pageProps} />
				</AnimateSharedLayout>
				<Footer />
			</div>
		</>
	)
}