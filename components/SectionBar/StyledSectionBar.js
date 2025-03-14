import styled from 'styled-components';

export const StyledSectionBar = styled.div`
	align-items: center;
	background: rgba(26, 31, 36, 0.95);
	backdrop-filter: blur(10px);
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	display: flex;
	font-family: var(--f-mono);
	font-size: 12px;
	gap: var(--sp-xs);
	height: 32px;
	justify-content: space-between;
	padding: 0 var(--sp-xs);
	position: sticky;
	width: 100%;
	z-index: 40;
	top: var(--header-height);

	.section-info {
		display: flex;
		align-items: center;
		gap: 8px;
		color: #00ffe0;
		min-width: 260px;
		font-weight: 500;

		.section-label {
			color: rgba(0, 255, 224, 0.5);
			font-size: 10px;
		}

		.section-number {
			color: #00ffe0;
			font-weight: 600;
		}

		.separator {
			width: 1px;
			height: 14px;
			background: linear-gradient(
				180deg,
				rgba(0, 255, 224, 0.05) 0%,
				rgba(0, 255, 224, 0.3) 50%,
				rgba(0, 255, 224, 0.05) 100%
			);
		}

		.timestamp {
			color: rgba(125, 255, 93, 0.9);
			font-weight: 600;
			letter-spacing: 1px;
			font-size: 10px;
			font-variant-numeric: tabular-nums;
		}
	}

	.marquee-container {
		flex: 1;
		overflow: hidden;
		opacity: 0.6;
		position: relative;

		&::before,
		&::after {
			background: var(--grad);
			content: '';
			position: absolute;
			opacity: 0.5;
			top: 0;
			bottom: 0;
			width: 1px;
			z-index: 1;
		}

		&::before {
			left: 0;
		}

		&::after {
			right: 0;
		}
	}

	.marquee {
		position: relative;
		width: 100%;
		display: flex;
		overflow: hidden;
	}

	.marquee-content {
		display: flex;
		animation: marquee 30s linear infinite;
		white-space: nowrap;

		.text {
			color: rgba(0, 255, 224, 0.8);
			font-size: 10px;
			letter-spacing: 1px;
			text-transform: uppercase;
			padding-right: 24px;
			font-weight: 500;
		}
	}

	.status-info {
		display: flex;
		align-items: center;
		gap: 8px;
		min-width: 140px;

		.status-dot {
			width: 8px;
			height: 8px;
			background: linear-gradient(to right, #ff2a6d 0%, #9b4dff 100%);
			border-radius: 50%;
			box-shadow: 0 0 10px rgba(255, 42, 109, 0.5);
			animation: pulse 2s infinite;
		}

		.status-text {
			background: linear-gradient(to right, #ff2a6d 0%, #9b4dff 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			font-weight: 600;
			letter-spacing: 1px;
			font-size: 10px;

			&::before,
			&::after {
				color: rgba(255, 42, 109, 0.5);
			}
		}
	}

	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	@keyframes pulse {
		0% {
			opacity: 0.7;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0.7;
		}
	}

	&.sticky {
	}

	.scramble-text {
		display: inline-block;
		color: inherit;
		font-family: inherit;

		&.scrambling {
			color: #7dff5d;
			text-shadow: 0 0 8px rgba(125, 255, 93, 0.5);
		}
	}

	.section-title {
		background: linear-gradient(to right, #ff2a6d 0%, #9b4dff 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		font-weight: 600;
		text-shadow: 0 0 8px rgba(255, 42, 109, 0.3);
		margin-right: 8px;
		position: relative;
	}

	.tech-term {
		opacity: 0.6;
	}

	&.mobile {
		padding: 4px 8px;
		height: 28px;
		font-size: 10px;

		.section-info {
			min-width: auto;
			gap: 4px;
		}

		.marquee-container {
			margin: 0 8px;

			.marquee-content {
				animation-duration: 20s;
			}
		}

		.section-title {
			margin-right: 4px;
		}
	}

	@media (max-width: 768px) {
		.marquee-container {
			margin: 0 8px;
		}

		.section-info {
			min-width: auto;
		}
	}

	@media (max-width: 640px) {
		padding: 4px 8px;

		.marquee-content {
			animation-duration: 15s;
		}
	}
`;
