'use client';

import { motion } from 'framer-motion';
import classNames from 'classnames';
import useMousePos from '@/utils/mousePos';

import Explore from '@/components/SVG/Explore';
import Play from '@/components/SVG/Play';
import Pause from '@/components/SVG/Pause';

export const CircleGrad = ({ children, className, solid, transparent, style, ...props }) => (
	<button
		className={classNames(
			'flex items-center justify-center rounded-full border-none cursor-none h-[254px] w-[254px] p-[var(--sp-s)] relative transition-transform duration-[233ms] ease-in-out',
			'[&_.explore]:animate-spin [&_.explore]:w-full [&_.twerk]:animate-spin [&_.twerk]:w-full',
			'[&_.play]:absolute [&_.play]:translate-x-[10px] [&_.play]:w-[82px]',
			'[&_.pause]:w-[82px]',
			className
		)}
		style={{
			background: solid
				? 'var(--c-primary-dark)'
				: transparent
					? 'transparent'
					: 'var(--grad)',
			...style,
		}}
		{...props}
	>
		{children}
	</button>
);

export const Cursor = ({ el, isPlaying }) => {
	const { clientX, clientY } = useMousePos(el);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed inset-0 cursor-none pointer-events-none z-[9999] transition-transform duration-[233ms] [transition-timing-function:cubic-bezier(0.68,-0.6,0.32,1.6)]"
		>
			<CircleGrad
				className={classNames(
					'-translate-x-1/2 -translate-y-1/2 origin-center',
					isPlaying && 'scale-[0.2]'
				)}
				style={{
					position: 'absolute',
					left: clientX || '-100%',
					top: clientY || '-100%',
				}}
			>
				{!isPlaying ? (
					<>
						<Explore />
						<Play />
					</>
				) : (
					<Pause />
				)}
			</CircleGrad>
		</motion.div>
	);
};
