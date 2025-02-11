'use client';

import Link from 'next/link';
import { Button } from '../Button/Button';
import Arrow from '../SVG/Arrow';
import Mark from '../SVG/Mark';
import { StyledHeader } from './StyledHeader';

export const Header = () => (
	<StyledHeader>
		<Link href="/">
			<h1 className="flex items-center gap-4">
				<Mark width="50" height="50" />
				<div className="flex flex-col gap-2">
					<span>House of Giants</span>
					<span className="text-sm -grad-header-retro">
						Custom Websites • Web Apps • Interactive Design • Digital Strategy
					</span>
				</div>
			</h1>
		</Link>
		<div className="flex gap-6">
			<Button href="/blog">Blog</Button>
			<Button href="#contact" style={{ backgroundColor: '#1a1f24', color: '#F4F3EC' }}>
				Start your project <Arrow width="13" height="13" fill="#F4F3EC" />
			</Button>
		</div>
	</StyledHeader>
);
