import styled from 'styled-components'

const StyledHero = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	min-height: 40vh;
	overflow: hidden;
	position: relative;
	
	@media (min-width: 1024px) {
		min-height: 100vh;
	}

	& img {
		position: absolute;
		currentcolor;
		mix-blend-mode: screen;
		opacity: 0.1;
		width: 100%;
		z-index: -1;

		&:first-of-type {
			top: 0;
		}

		&:last-of-type {
			bottom: 0;
			transform: rotate(180deg);
		}
	}

	& .hero-scene {
		background-repeat: repeat-x;
		background-size: cover;
		opacity: 0.1;
		position: absolute;
		height: 50vh;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		transform: rotate(180deg);
		z-index: -1;
	}

	& .blurbwrap {
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		z-index: 5;
		
		@media (min-width: 1024px) {
			min-height: 50vh;
		}
	}

	& h5 {
		margin-top: 0;
	}

	& .blurb {
		box-sizing: border-box;
		height: 100%;
		margin: 0 auto;
		padding: 1.5rem 3rem;
		width: 100%;

		& > * {
			@media (min-width: 768px) {
				max-width: 60%;
			}
		}
	}

	& .y-up {
		opacity: 0;
		transform: translateY(100%);
		transform-origin: center left;
	}

	& p {
		box-shadow: none;
		color: var(--c-dark);
		font-size: 1.5rem;
		font-weight: 100;
		margin-top: 0;

		@media(min-width: 780px) {
			font-size: calc(0.75rem + 1vw);
		}

		& .line {
			text-decoration: underline;
			text-decoration-color: var(--c-primary-h);
			font-weight: 600;
			line-height: 0;
		}
	}
`

export default StyledHero