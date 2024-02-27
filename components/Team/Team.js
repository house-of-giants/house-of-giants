'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

import { useMedia } from '@/utils/useMedia';

import { Grid } from '../Grid/Grid';
import { StyledGridItem } from '../Grid/StyledGridItem';
import Image from 'next/image';

const Team = () => {
	const isBig = useMedia(['(min-width: 1024px)'], [1], 0);
	const { scrollYProgress } = useScroll();
	const domAnim = useTransform(scrollYProgress, [0.7, 0.8], [isBig ? 550 : 0, 0]);
	const teamOpacityAnim = useTransform(scrollYProgress, [0.7, 0.8], [isBig ? 0 : 1, 1]);

	return (
		<Grid cols="1fr" gap="var(--sp-m)" pt="var(--sp-2xl)" justify="center" align="center">
			<motion.div style={{ y: domAnim, opacity: teamOpacityAnim }} className="-stagger">
				<StyledGridItem>
					<div className="team-img" style={{ display: 'flex', justifyContent: 'center' }}>
						<Image
							src="/images/dom.jpeg"
							alt=""
							width="396"
							height="547"
							sizes="100vw"
							style={{
								width: '100%',
								maxWidth: '444px',
								height: 'auto',
							}}
						/>
					</div>
					<h4 className="-m0 -lh-1 -fw-700 text-center">Dominic Magnifico</h4>
					<h5 className="-m0 -serif text-center">Founder, Developer</h5>
				</StyledGridItem>
			</motion.div>
		</Grid>
	);
};

export default Team;
