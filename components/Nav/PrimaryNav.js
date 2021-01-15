import Link from 'next/link'
import styled from 'styled-components'

import Spaceship from '@/components/SVG/Spaceship'

const StyledNav = styled.nav`
	background-color: transparent;
	border-bottom: 1px solid var(--c-dark);
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 10;

	& .wrap {
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		max-width: 1280px;
		padding: 0 1rem;
	}

	& ul {
		list-style: none;
	}

	& li {
		display: inline;

		&:not(:last-child) {
			margin-right: 2rem;
		}
	}

	& a {
		font-size: 1rem;
		font-weight: 900;
		text-transform: uppercase;
	}

	& svg {
		height: 30px;
		width: auto;
	}
`

const PrimaryNav = () => (
	<StyledNav>
		<div className="wrap">
			<Link href="/"> 
				<a className='-nobox'><Spaceship /></a>
			</Link>
			<ul>
				<li>
					<Link href="/about"><a>About</a></Link>
				</li>
				<li>
					<Link href="/work"><a>Work</a></Link>
				</li>
				<li>
					<Link href="/contact"><a>Contact</a></Link>
				</li>
			</ul>
		</div>
	</StyledNav>
)

export default PrimaryNav