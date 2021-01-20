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
			</Head>
			<GlobalStyle />
			<PrimaryNav />
			<AnimateSharedLayout>
				<Component {...pageProps} />
			</AnimateSharedLayout>
			<Footer />
		</>
	)
}