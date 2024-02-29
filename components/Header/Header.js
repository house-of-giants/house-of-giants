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
		<div className="flex gap-4">
			<Button href="/blog">Blog</Button>
			<Button href="#contact" style={{ backgroundColor: '#1a1f24', color: '#F4F3EC' }}>
				Start your project <Arrow width="13" height="13" fill="#F4F3EC" />
			</Button>
		</div>
	</StyledHeader>
);
