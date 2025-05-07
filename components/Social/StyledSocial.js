'use client';

import styled from 'styled-components';

export const StyledSocial = styled.div`
	background-color: var(--c-white);
	font-size: var(--fs-s);
	transition: transform 333ms cubic-bezier(0.25, 1, 0.5, 1);
	width: 100%;

	@media (min-width: 1220px) {
		background: linear-gradient(-270deg, var(--c-neon-sky) 0%, var(--c-cyber-green) 100%);
		background-color: transparent;
		max-width: 80vw;
	}

	&.-active {
		@media (min-width: 1220px) {
			transform: translateX(-60vw);
		}
	}

	& .wrap {
		border-top: 1px solid var(--c-primary-dark);
		display: flex;
		justify-content: space-between;
		padding-top: var(--sp-s);
	}

	ul {
		margin: 0;
		padding: 0;
	}

	& li {
		display: inline;

		&:not(:last-child) {
			padding-right: var(--sp-m);
		}
	}

	& a {
		align-items: center;
		color: var(--c-primary-dark);
		display: inline-flex;
		font-family: var(--f-serif);
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}

		& svg {
			margin-left: var(--sp-2xs);
		}
	}

	& p {
		font-size: var(--fs-s);
	}
`;
