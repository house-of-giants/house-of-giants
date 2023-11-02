'use client';

import Link from 'next/link';
import { Button } from '../Button/Button';
import Arrow from '../SVG/Arrow';
import Mark from '../SVG/Mark';
import { StyledHeader } from './StyledHeader';

export const Header = () => (
	<StyledHeader>
		<Link href="/">
			<h1>
				<Mark width="32" height="50" /> House of Giants
			</h1>
		</Link>
		<Button href="#contact">
			Start your project <Arrow width="13" height="13" />
		</Button>
	</StyledHeader>
);
