import PrimaryNav from '@/components/Nav/PrimaryNav'
import { Base, Typography } from '@/styles/base'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

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
			<Component {...pageProps} />
		</>
	)
}