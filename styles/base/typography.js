import { css } from 'styled-components'

export const Typography = css`
	p {
		font-weight: 100;
		font-size: 1.618rem;
		margin-bottom: 1.15rem;
	}

	h1, .h1, h2, .h2, h3, h4, h5 {
		font-family: var(--f-heading);
		font-weight: 400;
		line-height: 1.15;
		margin: 2.75rem 0 1.05rem;
	}

	h1,
	.h1 {
		font-size: 4.236rem;
		margin-top: 0;

		@media (min-width: 768px) {
			font-size: 6.854rem;
		}
	}

	h2,
	.h2 {
		font-size: 2.618rem;

		@media (min-width: 768px) {
			font-size: 4.236rem;
		}
	}

	h3,
	.h3 {
		font-size: 2.618rem;
	}

	h4,
	.h4 {
		font-size: 1.618rem;
	}

	h5,
	.h5 {
		font-size: 1em;
	}

	small {
		font-size: 2rem;
		letter-spacing: 0;
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

	a {
		color: var(--c-dark);
		text-decoration: none;
		box-shadow: 0 -.15rem 0 inset var(--c-primary-h);
		transition: 300ms ease box-shadow;

		&:hover,
		&:focus {
			box-shadow: 0 -.5rem 0 inset var(--c-primary-h);
			outline: none;
		}

		&.-nobox {
			box-shadow: none;
		}
	}

	hr {
		border-color: var(--c-light-h);
		border-bottom: none;
	}
`