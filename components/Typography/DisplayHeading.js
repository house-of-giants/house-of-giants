import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled.h1`
	color: var(--c-secondary-h);
	font-size: calc(3.375rem + 8vw);
	line-height: 0.8;
	margin: 0px auto;
	max-width: 75%;
	padding: 0px 2.25rem;
	top: 0px;

	& .home-title span {
		display: inline-block;
		opacity: 0;
		transform: translate(0px, 100%);
	}
	`

const DisplayHeading = ({ children }) => (
	<StyledHeading>
		{children}
	</StyledHeading>
)

export default DisplayHeading