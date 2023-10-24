import { css } from 'styled-components';

export const Base = css`
	/* @link https://utopia.fyi/type/calculator?c=320,18,1.3659098494,1140,24,1.3659098494,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l */

	:root {
		--fluid-min-width: 320;
		--fluid-max-width: 1440;

		--fluid-screen: 100vw;
		--fluid-bp: calc(
			(var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) / (var(--fluid-max-width) - var(--fluid-min-width))
		);

		--container-width: 1440px;

		--c-primary-dark: #1a1f24;
		--c-wolf-gray: #6d7985;
		--c-moon-rock: #ececec;
		--c-neon-sky: #00ffe0;
		--c-cyber-green: #c1ff1d;
		--c-white: #ffffff;

		--grad: linear-gradient(270deg, var(--c-cyber-green) 0%, var(--c-neon-sky) 100%);

		--f-heading: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
			'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
		--f-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
			'Segoe UI Emoji', 'Segoe UI Symbol';
		--f-serif: Nikolai, serif;

		--fs-xs: clamp(0.6rem, 0.52rem + 0.39vw, 0.8rem);
		--fs-s: clamp(0.82rem, 0.72rem + 0.54vw, 1.1rem);
		--fs-base: clamp(1.13rem, 0.98rem + 0.73vw, 1.5rem);
		--fs-m: clamp(1.54rem, 1.34rem + 1vw, 2.05rem);
		--fs-l: clamp(2.1rem, 1.83rem + 1.37vw, 2.8rem);
		--fs-xl: clamp(2.87rem, 2.49rem + 1.86vw, 3.82rem);
		--fs-2xl: clamp(3.92rem, 3.41rem + 2.55vw, 5.22rem);
		--fs-3xl: clamp(5.35rem, 4.65rem + 3.48vw, 7.13rem);
	}

	/* @link https://utopia.fyi/space/calculator?c=320,18,1.3659098494,1140,24,1.3659098494,5,2,&s=0.75|0.5,1.5|2|3|3, */

	@media screen and (min-width: 1140px) {
		:root {
			--fluid-screen: calc(var(--fluid-max-width) * 1px);
		}
	}

	:root {
		--fc-2xs-min: (var(--fc-s-min) * 0.5);
		--fc-2xs-max: (var(--fc-s-max) * 0.5);

		--fc-xs-min: (var(--fc-s-min) * 0.75);
		--fc-xs-max: (var(--fc-s-max) * 0.75);

		--fc-s-min: (var(--f-0-min, 18));
		--fc-s-max: (var(--f-0-max, 24));

		--fc-m-min: (var(--fc-s-min) * 1.5);
		--fc-m-max: (var(--fc-s-max) * 1.5);

		--fc-l-min: (var(--fc-s-min) * 2);
		--fc-l-max: (var(--fc-s-max) * 2);

		--fc-xl-min: (var(--fc-s-min) * 3);
		--fc-xl-max: (var(--fc-s-max) * 3);

		--fc-2xl-min: (var(--fc-s-min) * 3);
		--fc-2xl-max: (var(--fc-s-max) * 3);

		/* T-shirt sizes */
		--sp-2xs: calc(((var(--fc-2xs-min) / 16) * 1rem) + (var(--fc-2xs-max) - var(--fc-2xs-min)) * var(--fluid-bp));
		--sp-xs: calc(((var(--fc-xs-min) / 16) * 1rem) + (var(--fc-xs-max) - var(--fc-xs-min)) * var(--fluid-bp));
		--sp-s: calc(((var(--fc-s-min) / 16) * 1rem) + (var(--fc-s-max) - var(--fc-s-min)) * var(--fluid-bp));
		--sp-m: calc(((var(--fc-m-min) / 16) * 1rem) + (var(--fc-m-max) - var(--fc-m-min)) * var(--fluid-bp));
		--sp-l: calc(((var(--fc-l-min) / 16) * 1rem) + (var(--fc-l-max) - var(--fc-l-min)) * var(--fluid-bp));
		--sp-xl: calc(((var(--fc-xl-min) / 16) * 1rem) + (var(--fc-xl-max) - var(--fc-xl-min)) * var(--fluid-bp));
		--sp-2xl: calc(((var(--fc-2xl-min) / 16) * 1rem) + (var(--fc-2xl-max) - var(--fc-2xl-min)) * var(--fluid-bp));

		/* One-up pairs */
		--sp-2xs-xs: calc(((var(--fc-2xs-min) / 16) * 1rem) + (var(--fc-xs-max) - var(--fc-2xs-min)) * var(--fluid-bp));
		--sp-xs-s: calc(((var(--fc-xs-min) / 16) * 1rem) + (var(--fc-s-max) - var(--fc-xs-min)) * var(--fluid-bp));
		--sp-s-m: calc(((var(--fc-s-min) / 16) * 1rem) + (var(--fc-m-max) - var(--fc-s-min)) * var(--fluid-bp));
		--sp-m-l: calc(((var(--fc-m-min) / 16) * 1rem) + (var(--fc-l-max) - var(--fc-m-min)) * var(--fluid-bp));
		--sp-l-xl: calc(((var(--fc-l-min) / 16) * 1rem) + (var(--fc-xl-max) - var(--fc-l-min)) * var(--fluid-bp));
		--sp-xl-2xl: calc(((var(--fc-xl-min) / 16) * 1rem) + (var(--fc-2xl-max) - var(--fc-xl-min)) * var(--fluid-bp));
	}

	body {
		background: var(--c-white);
		color: var(--c-primary-dark);
		font-family: var(--f-body);
		margin: 0;
		min-height: 100%;
	}

	html {
		font-size: 87.5%;
	}

	.-c-wolf-gray {
		color: var(--c-wolf-gray);
	}

	.-fs-2xl {
		font-size: var(--fs-l);

		@media (min-width: 768px) {
			font-size: var(--fs-2xl);
		}
	}

	.-lh-1 {
		line-height: 1;
	}

	.-m0 {
		margin: 0;
	}

	.-uppercase {
		text-transform: uppercase;
	}

	.-green {
		color: var(--c-cyber-green);
		font-weight: 700;
	}

	.-stagger {
		padding-bottom: var(--sp-xl);

		@media (min-width: 768px) {
			padding-bottom: 0;

			&:first-child {
				padding-top: var(--sp-2xs);
			}

			&:nth-child(2) {
				padding-top: calc(var(--sp-2xl) * 4);
			}

			&:last-child {
				padding-top: var(--sp-l);
			}
		}
	}

	.-grad-header {
		background: var(--grad);
		background-clip: text;
		display: block;
		padding-bottom: var(--sp-2xs);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.-dots {
		overflow: hidden;
		position: relative;

		@media (min-width: 768px) {
			overflow: visible;
		}

		&::before {
			background-image: url('/images/dots.png');
			background-repeat: repeat;
			bottom: 0;
			content: '';
			height: 33%;
			left: 0;
			position: absolute;
			transform: translateY(0);
			width: 100%;
			z-index: 0;
		}

		& span {
			position: relative;
			z-index: 1;
		}

		&.-dots-l {
			padding-left: var(--sp-l);

			&::before {
				bottom: initial;
				height: 150%;
				top: 0;
				transform: translateY(-15%);
				width: 10%;
			}
		}
	}

	.carousel-root {
		margin-top: var(--sp-2xl);

		@media (min-width: 768px) {
			margin: 0;
		}
	}

	.carousel {
		display: grid;
		padding: var(--sp-xl) 0;

		@media (min-width: 768px) {
			gap: calc(var(--sp-2xl) * 2.75);
			grid-template-columns: 1.5fr 1fr;
			margin: 0;
			padding: calc(var(--sp-2xl) * 2) 0 calc(var(--sp-2xl) * 2) var(--sp-xl);
		}

		& .arrow {
			border: none;
			background-color: transparent;
			cursor: pointer;
			display: flex;
			height: 35px;
			padding: 0;
			position: absolute;
			top: 0;
			width: 35px;

			@media (min-width: 768px) {
				grid-row: 1;
				grid-column: 2;
			}

			&:hover {
				& path {
					fill: var(--c-cyber-green);
				}
			}

			&.-prev {
				transform: rotate(-180deg);
			}

			&.-next {
				left: 75px;
			}
		}

		& .slider-wrapper {
			margin: 0;
		}

		& .slide {
			text-align: left;
		}

		& blockquote {
			font-size: var(--fs-l);
			margin: 0 0 var(--sp-m);
			quotes: '“' '”' '‘' '’';

			&::before,
			&::after {
				color: var(--c-cyber-green);
			}

			&::before {
				content: open-quote;
				padding-right: var(--sp-2xs);
			}

			&::after {
				content: close-quote;
			}
		}

		& figcaption {
			color: var(--c-wolf-gray);
		}
	}

	label {
		font-weight: 700;
		font-size: var(--fs-base);
		margin-bottom: var(--sp-xs);
	}

	input,
	textarea,
	select {
		border: 1px solid var(--c-primary-dark);
		box-sizing: border-box;
		font-size: var(--fs-s);
		padding: var(--sp-2xs) var(--sp-xs);
	}

	textarea {
		resize: none;
		width: 100%;
	}
`;
