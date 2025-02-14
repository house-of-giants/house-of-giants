import styled from 'styled-components';
import { StyledButton } from '../Button/StyledButton';
import { StyledContainer } from '../Container/StyledContainer';

export const StyledHeader = styled.header`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 0 auto;
	padding: 0.825rem var(--sp-xs);
	position: sticky;
	top: 0;
	background: rgba(255, 255, 255, 0.8);
	backdrop-filter: blur(10px);
	z-index: 50;

	@media (min-width: 1100px) {
		flex-direction: row;
		padding: var(--sp-s) var(--sp-2xs);
	}

	@media (min-width: calc(1440px + (var(--sp-2xs) * 2))) {
		padding: var(--sp-s) 0;
	}

	& h1 {
		align-items: center;
		display: inline-flex;
		font-size: var(--fs-m);
		margin-bottom: 0;
		word-break: break-word;
		-webkit-hyphens: none;

		& svg {
			margin-right: var(--sp-2xs);
		}
	}

	${StyledButton} {
		margin-left: auto;
		white-space: nowrap;
	}

	& + ${StyledContainer} {
		margin-top: var(--sp-s);
	}
`;
