import Cursor from '@/components/Cursor'
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
				<link href="https://fonts.googleapis.com/css?family=Crimson+Text|Roboto:300,400,900&display=swap" rel="stylesheet"></link>
				<link rel="stylesheet" href="https://use.typekit.net/itw5okx.css"></link>
			</Head>
			<Cursor />
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}