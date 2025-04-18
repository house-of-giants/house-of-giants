import { css } from 'styled-components';

export const Typography = css`
	/* Remove the old @font-face declarations since they're now handled by Next.js font optimization */

	p {
		font-size: var(--fs-base);
		margin-bottom: var(--sp-m);

		& a {
			font-weight: 700;
		}
	}

	h1,
	.h1,
	h2,
	.h2,
	h3,
	h4,
	h5 {
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

	.-fs-s {
		font-size: var(--fs-s);
	}

	.-serif {
		font-family: var(--f-serif);
	}

	.-fw-700 {
		font-weight: 700;
	}

	.-fw-500 {
		font-weight: 500;
	}

	.-fw-900 {
		font-weight: 900;
	}

	.-lh-1 {
		line-height: 1;
	}

	.-lh-2 {
		line-height: 1.3;

		@media (min-width: 1024px) {
			line-height: 2;
		}
	}

	.-m-sm {
		font-size: var(--fs-m);
		text-transform: none;

		@media (min-width: 768px) {
			font-size: var(--fs-l);
			text-transform: uppercase;
		}
	}

	.-cross {
		background-image: url('/images/cross.png');
		background-size: cover;
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
`;
