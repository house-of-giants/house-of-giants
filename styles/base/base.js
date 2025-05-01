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
		--c-cyber-purple: #9b4dff;
		--c-cyber-pink: #ff2a6d;
		--c-white: #fefefe;
		--c-accent: var(--c-cyber-green);

		--grad: linear-gradient(270deg, var(--c-cyber-green) 0%, var(--c-neon-sky) 100%);

		--f-heading: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
			'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
		--f-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
			'Segoe UI Emoji', 'Segoe UI Symbol';
		--f-serif: var(--font-nikolai), serif;

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

		--section-spacing-top: calc(var(--sp-xl) * 2);
		--section-spacing-bottom: calc(var(--sp-xl) * 2);
		--header-spacing: clamp(3rem, 8vw, 8rem);
		--title-spacing: clamp(2rem, 4vw, 4rem);
		--content-spacing: clamp(2rem, 6vw, 6rem);
	}

	body {
		background: var(--c-moon-rock);
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

	.grad-border {
		background:
			linear-gradient(var(--c-primary-dark), var(--c-primary-dark)) padding-box,
			linear-gradient(to right, #00ffe0, #c1ff1d) border-box;
		border: 2px solid transparent;
		border-radius: 0.5rem;
	}

	.-grad-header-retro {
		background: linear-gradient(to right, #ff2a6d 0%, /* Hot neon pink */ #9b4dff 100% /* Electric purple */);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		color: transparent;
	}

	/* Fallback for better accessibility */
	@media (prefers-reduced-motion: reduce) {
		.-grad-header-retro {
			background: #ff2a6d;
			-webkit-text-fill-color: initial;
			color: #ff2a6d;
		}
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

	label {
		font-weight: 700;
		font-size: var(--fs-base);
		margin-bottom: var(--sp-xs);
	}

	input,
	textarea,
	select {
		background-color: transparent;
		border: 1px solid var(--c-wolf-gray);
		box-sizing: border-box;
		font-size: var(--fs-s);
		padding: var(--sp-2xs) var(--sp-xs);
	}

	textarea {
		resize: none;
		width: 100%;
	}

	.highlight {
		color: var(--c-white);
	}

	.client-logo {
		position: relative;
		transition: all 0.3s ease;
		filter: grayscale(100%) brightness(0.8);
		opacity: 0.6;
	}

	.client-logo:hover {
		filter: grayscale(0%) brightness(1);
		opacity: 1;
		transform: translateY(-4px);
	}

	.testimonial-carousel {
		padding: var(--sp-xl) 0;

		& .slide {
			align-items: center;
			background: rgba(255, 255, 255, 0.03);
			border: 1px solid rgba(255, 255, 255, 0.1);
			border-radius: 12px;
			display: flex;
			padding: var(--sp-2xl);
			backdrop-filter: blur(10px);
			transition: all 0.3s ease;
			opacity: 0.5;
			transform: scale(0.9);
		}

		& .selected {
			opacity: 1;
			transform: scale(1);
			background: rgba(255, 255, 255, 0.05);
			border-color: rgba(255, 255, 255, 0.2);
			box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
		}

		& blockquote {
			font-family: var(--f-serif);
			font-size: clamp(2rem, 2vw, 3.5rem);
			line-height: 1.1;
			margin: 0 0 var(--sp-xl);
			color: var(--c-white);
			position: relative;
			padding-top: var(--sp-xl);

			&::before {
				content: '"';
				position: absolute;
				top: -0.2em;
				left: -0.1em;
				font-size: 8em;
				color: var(--c-cyber-green);
				opacity: 0.3;
				font-family: var(--f-heading);
				line-height: 1;
				background: var(--grad);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				background-clip: text;
			}

			&::after {
				content: '"';
				font-family: var(--f-heading);
				color: var(--c-cyber-green);
				margin-left: 0.1em;
				font-size: 1.2em;
				line-height: 0;
				vertical-align: -0.15em;
				background: var(--grad);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				background-clip: text;
			}
		}

		& figcaption {
			display: inline-block;
			font-size: var(--fs-s);
			color: var(--c-wolf-gray);
			font-family: var(--f-serif);
			font-style: italic;
			position: relative;

			&::after {
				content: '';
				display: block;
				clear: both;
				margin: 0 auto;
				left: 0;
				top: 50%;
				height: 1px;
				background: var(--grad);
			}
		}
	}

	.testimonial-arrow {
		position: absolute;
		top: 50%;
		transform: translateY(-50%) translateX(-100%);
		border-radius: 50%;
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.3s ease;
		z-index: 2;

		&.-prev {
			left: -24px;
			transform: translateY(-50%) rotate(180deg) translateX(-100%);
		}

		&.-next {
			right: -24px;
		}

		@media (max-width: 768px) {
			top: auto;
			bottom: -60px;
			transform: none;

			&.-prev {
				left: auto;
				right: 60px;
				transform: rotate(180deg);
			}

			&.-next {
				right: 0;
			}
		}
	}

	.case-study-card {
		position: relative;
		transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
		border-radius: 12px;

		&:hover {
			transform: translateY(-8px);
		}

		& img {
			border-radius: 12px;
			border: 1px solid rgba(255, 255, 255, 0.1);
		}

		&::before {
			content: '';
			position: absolute;
			inset: -1px;
			border-radius: 6px;
			padding: 1px;
			background: var(--grad);
			-webkit-mask:
				linear-gradient(#fff 0 0) content-box,
				linear-gradient(#fff 0 0);
			mask:
				linear-gradient(#fff 0 0) content-box,
				linear-gradient(#fff 0 0);
			-webkit-mask-composite: xor;
			mask-composite: exclude;
			opacity: 0;
			transition: opacity 0.5s ease;
		}

		&:hover::before {
			opacity: 1;
		}

		/* Enhance text visibility */
		& h3 {
			text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
			position: relative;

			&::after {
				content: '';
				position: absolute;
				left: 0;
				bottom: -8px;
				width: 0;
				height: 2px;
				background: var(--grad);
				transition: width 0.3s ease;
			}
		}

		&:hover h3::after {
			width: 100%;
		}

		/* Project type pills */
		& .text-wolf-gray {
			background: rgba(0, 0, 0, 0.3);
			backdrop-filter: blur(4px);
			transition: all 0.3s ease;
		}

		&:hover .text-wolf-gray {
			background: rgba(255, 255, 255, 0.1);
			border-color: rgba(255, 255, 255, 0.3);
		}
	}

	.work-header {
		margin-bottom: var(--sp-3xl);

		@media (min-width: 768px) {
			margin-bottom: calc(var(--sp-3xl) * 2);
		}
	}

	.tech-card {
		position: relative;
		padding: var(--sp-xl);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		transition: all 0.3s ease;
		background: rgba(255, 255, 255, 0.03);
		backdrop-filter: blur(10px);

		&:hover {
			transform: translateY(-4px);
			border-color: rgba(255, 255, 255, 0.2);
			box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
		}

		&::before {
			content: '';
			position: absolute;
			inset: -1px;
			border-radius: 13px;
			padding: 1px;
			background: var(--grad);
			-webkit-mask:
				linear-gradient(#fff 0 0) content-box,
				linear-gradient(#fff 0 0);
			mask:
				linear-gradient(#fff 0 0) content-box,
				linear-gradient(#fff 0 0);
			-webkit-mask-composite: xor;
			mask-composite: exclude;
			opacity: 0;
			transition: opacity 0.3s ease;
		}

		&:hover::before {
			opacity: 0.5;
		}
	}

	.tech-feature-card {
		position: relative;
		padding: var(--sp-xl);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		transition: all 0.3s ease;
		background: rgba(255, 255, 255, 0.03);
		backdrop-filter: blur(10px);
		overflow: hidden;

		&:hover {
			transform: translateY(-4px);
			border-color: rgba(255, 255, 255, 0.2);
			box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
		}

		&::before {
			content: '';
			position: absolute;
			inset: -1px;
			border-radius: 13px;
			padding: 1px;
			background: var(--grad);
			-webkit-mask:
				linear-gradient(#fff 0 0) content-box,
				linear-gradient(#fff 0 0);
			mask:
				linear-gradient(#fff 0 0) content-box,
				linear-gradient(#fff 0 0);
			-webkit-mask-composite: xor;
			mask-composite: exclude;
			opacity: 0;
			transition: opacity 0.3s ease;
		}

		&:hover::before {
			opacity: 0.5;
		}

		/* Icon styles */
		& svg {
			transition: all 0.3s ease;
		}

		&:hover svg {
			color: var(--c-cyber-green);
			transform: scale(1.1);
		}

		/* List item hover effects */
		& li {
			transition: all 0.3s ease;
		}

		& li:hover {
			color: var(--c-white);
			transform: translateX(8px);
		}

		& li span {
			transition: transform 0.3s ease;
		}

		& li:hover span {
			transform: scale(1.2);
		}
	}

	.-hero-headline {
		font-size: clamp(3.5rem, 12vw, 12rem);
		font-weight: 900;
		line-height: 0.85;
		letter-spacing: -0.02em;
		padding-right: clamp(1rem, 4vw, 4rem);
		max-width: 95vw;

		@media (min-width: 768px) {
			max-width: 85vw;
		}

		&.-stagger {
			padding-left: clamp(1rem, 8vw, 8rem);
		}
	}

	.-hero-description {
		font-family: var(--f-serif);
		font-size: clamp(1.25rem, 2vw, 1.75rem);
		line-height: 1.2;
		max-width: 45ch;
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);

		@media (max-width: 768px) {
			position: relative;
			top: 0;
			transform: none;
			margin-top: var(--sp-xl);
		}
	}

	.-hero-tagline {
		position: absolute;
		bottom: var(--sp-2xl);
		max-width: 65ch;

		@media (max-width: 768px) {
			position: relative;
			bottom: auto;
			margin-top: var(--sp-2xl);
		}
	}

	.headline-container {
		position: relative;
		overflow: hidden;
		padding: 0.5rem 0;
	}

	.headline-container span {
		display: block;
		transform-origin: left;
	}

	.-grad-header {
		background: linear-gradient(to right, #00ffe0, #c1ff1d);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	@media (hover: hover) {
		.headline-container:hover span {
			animation: glitch 0.5s cubic-bezier(0.6, 0.05, -0.01, 0.9) both;
		}
	}

	@keyframes glitch {
		0% {
			transform: skew(0deg);
		}
		20% {
			transform: skew(2deg);
		}
		40% {
			transform: skew(-2deg);
		}
		60% {
			transform: skew(1deg);
		}
		80% {
			transform: skew(-1deg);
		}
		100% {
			transform: skew(0deg);
		}
	}
`;
