import styled from 'styled-components';

export const StyledSectionBar = styled.div`
	border: 1px solid var(--c-white);
	display: grid;
	grid-template-columns: fit-content(40px) 120px 1fr fit-content(250px);
	font-size: var(--fs-2xs);
	margin-bottom: calc(var(--sp-2xl) * 2);

	& .title {
		display: block;
		font-family: var(--f-serif);
		font-size: inherit;
		font-style: italic;
		font-weight: 500;
		line-height: 1;
		overflow: hidden;
		margin: 0 var(--sp-2xs);
		width: 100%;
		white-space: nowrap;
	}

	& .text {
		align-items: center;
		animation: marquee 10000ms linear infinite;
		display: inline-flex;
		will-change: transform;
	}

	& > p,
	& .marquee {
		align-items: center;
		box-sizing: border-box;
		display: flex;
		font-size: inherit;
		font-weight: 500;
		line-height: 1;
		margin: 0;
		overflow: hidden;
		padding: calc(var(--sp-2xs) / 2);

		&:not(:last-child) {
			border-right: 1px solid var(--c-white);
		}

		&:last-child {
			border-left: 1px solid var(--c-white);
			margin-left: auto;
		}

		& > svg {
			padding-left: var(--sp-2xs);
			padding-right: var(--sp-2xs);
		}
	}

	& svg {
		width: 16px;
	}

	@keyframes marquee {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}
`;
