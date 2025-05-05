import { css } from 'styled-components';

export const Base = css`
	/* @link https://utopia.fyi/type/calculator?c=320,18,1.3659098494,1140,24,1.3659098494,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l */

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
