import { css } from 'styled-components'

export const Typography = css`
	@font-face {
		font-family: 'Nikolai';
		src:
			url('/fonts/Nikolai/italic/Nikolai-Italic.woff2') format('woff2'),
			url('/fonts/Nikolai/italic/Nikolai-Italic.woff') format('woff');
		font-style: italic;
		font-display: swap;
	}

	@font-face {
		font-family: 'Nikolai';
		src:
			url('/fonts/Nikolai/regular/Nikolai-Regular.woff2') format('woff2'),
			url('/fonts/Nikolai/regular/Nikolai-Regular.woff') format('woff');
		font-display: swap;
	}

	p {
		font-size: var(--fs-base);
		margin-bottom: var(--sp-m);

		& a {
			font-weight: 700;
		}
	}

	h1, .h1, h2, .h2, h3, h4, h5 {
		font-family: var(--f-heading);
		font-weight: 400;
		line-height: 1.15;
		margin: 0 0 var(--sp-m);
	}

	h1,
	.h1 {
		font-size: var(--fs-xl);
		font-weight: 800;
		hyphens: auto;
		margin-top: 0;
		text-transform: uppercase;
		
		@media (min-width: 768px) {
			font-size: var(--fs-3xl);
		}
	}

	h2,
	.h2 {
		font-size: var(--fs-l);
		font-weight: 500;
		line-height: 1.2;
		
		@media (min-width: 768px) {
			font-size: var(--fs-xl);
		}
	}

	.h2 + .h1 {
		margin-top: var(--sp-2xl);
	}

	h3,
	.h3 {
		font-family: var(--f-serif);
		font-size: var(--fs-l);
		font-style: italic;
	}

	h4,
	.h4 {
		font-size: var(--fs-m);
		font-weight: 700;
	}

	h5,
	.h5 {
		font-size: var(--fs-base);
	}

	.-serif {
		font-family: var(--f-serif);
	}

	.-fw-700 {
		font-weight: 700;
	}

	.-lh-1 {
		line-height: 1;
	}

	.screen-reader-text {
		clip: rect(1px, 1px, 1px, 1px);
		clip-path: inset(50%);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		width: 1px;
	}
`