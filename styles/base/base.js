import { css } from 'styled-components'

export const Base = css`
	:root {
		--c-gondola: #261626;
		--c-ebony-clay: #262c36;
		--c-salt-box: #735c75;
		--c-alto: #e0e0e0;
		--c-silver: #bdbdbd;
		--c-silver-chalice: #9e9e9e;
		--c-burnt-sienna: #ef5350;
		--c-cabaret: #d43763;
		--c-jam: #a1156e;
		--c-chardonnay: #ffcd8f;
		--c-buttermilk: #ffecb3;
		--c-rajah: #f7a674;

		--c-dark-s: var(--c-ebony-clay);
		--c-dark: var(--c-gondola);
		--c-dark-h: var(--c-salt-box);

		--c-light-s: var(--c-silver-chalice);
		--c-light: var(--c-silver);
		--c-light-h: var(--c-alto);

		--c-primary-s: var(--c-jam);
		--c-primary: var(--c-cabaret);
		--c-primary-h: var(--c-burnt-sienna);

		--c-secondary-s: var(--c-rajah);
		--c-secondary: var(--c-chardonnay);
		--c-secondary-h: var(--c-buttermilk);

		--f-heading: bely-display, serif;
		--f-body: franklin-gothic-atf, sans-serif;
	}

	body{
		background-color: var(--c-light);
		color: var(--c-dark);
		margin: 0;
		overflow-x: hidden;
		font-family: var(--f-body);
	}

	html {
		font-size: 87.5%;
	}

	.textured {
		position: relative;

		&::after {
			background-image: url(/paper.png);
			content: "";
			height: 300%;
			left: -50%;
			opacity: 0.3;
			position: absolute;
			top: -100%;
			width: 300%;
			z-index: 0;
		}

		& > * {
			position: relative;
			z-index: 1;
		}
	}
`