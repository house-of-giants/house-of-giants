import styled from 'styled-components';

export const StyledSectionBar = styled.div`
	align-items: center;
	background: var(--c-primary-dark);
	backdrop-filter: blur(10px);
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	display: flex;
	font-family: var(--f-sans);
	font-size: 13px;
	gap: var(--sp-xs);
	height: 40px;
	justify-content: space-between;
	padding: 0 var(--sp-sm);
	position: sticky;
	width: 100%;
	z-index: 40;
	top: var(--header-height);
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

	.section-info {
		display: flex;
		align-items: center;
		gap: 12px;
		color: #ffffff;
		min-width: 280px;
		font-weight: 500;

		.section-label {
			color: #00ffe0;
			font-size: 11px;
			text-transform: uppercase;
			letter-spacing: 0.5px;
		}

		.section-number {
			color: #ffffff;
			font-weight: 600;
			background: rgba(0, 255, 224, 0.1);
			padding: 2px 6px;
			border-radius: 4px;
			border: 1px solid rgba(0, 255, 224, 0.2);
		}

		.separator {
			width: 1px;
			height: 16px;
			background: linear-gradient(
				180deg,
				rgba(0, 255, 224, 0.05) 0%,
				rgba(0, 255, 224, 0.3) 50%,
				rgba(0, 255, 224, 0.05) 100%
			);
		}

		.timestamp {
			color: rgba(255, 255, 255, 0.8);
			font-weight: 500;
			font-size: 11px;
			font-variant-numeric: tabular-nums;
		}

		.coordinates {
			color: #00ffe0;
			font-size: 10px;
			opacity: 0.8;
		}
	}

	.marquee-container {
		flex: 1;
		overflow: hidden;
		position: relative;
		margin: 0 var(--sp-sm);

		&::before,
		&::after {
			background: linear-gradient(to right, var(--c-primary-dark), rgba(0, 0, 0, 0));
			content: '';
			position: absolute;
			top: 0;
			bottom: 0;
			width: 40px;
			z-index: 1;
		}

		&::before {
			left: 0;
		}

		&::after {
			right: 0;
			transform: rotate(180deg);
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
		animation: marquee 40s linear infinite;
		white-space: nowrap;

		.text {
			color: rgba(255, 255, 255, 0.9);
			font-size: 12px;
			padding-right: 32px;
			font-weight: 500;
		}
	}

	.status-info {
		display: flex;
		align-items: center;
		gap: 8px;
		min-width: 160px;

		.status-dot {
			width: 8px;
			height: 8px;
			background: #00ffe0;
			border-radius: 50%;
			box-shadow: 0 0 8px rgba(0, 255, 224, 0.5);
		}

		.status-text {
			color: rgba(255, 255, 255, 0.9);
			font-weight: 500;
			font-size: 12px;
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

	.section-title {
		color: #00ffe0;
		font-weight: 600;
		margin-right: 8px;
		text-shadow: 0 0 8px rgba(0, 255, 224, 0.3);
	}

	.tech-term {
		opacity: 0.9;
	}

	&.mobile {
		padding: 8px 12px;
		height: 36px;
		font-size: 12px;

		.section-info {
			min-width: auto;
			gap: 6px;
		}

		.marquee-container {
			margin: 0 12px;

			.marquee-content {
				animation-duration: 30s;
			}
		}

		.section-title {
			margin-right: 6px;
		}
	}

	@media (max-width: 768px) {
		.marquee-container {
			margin: 0 12px;
		}

		.section-info {
			min-width: auto;
		}
	}

	@media (max-width: 640px) {
		padding: 8px 12px;

		.marquee-content {
			animation-duration: 25s;
		}
	}
`;
