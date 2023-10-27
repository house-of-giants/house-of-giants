import { useRef, useState } from 'react';
import { motion, AnimatePresence, useTransform, useScroll } from 'framer-motion';

import { Container } from '@/components/Container/Container';
import { Cursor } from '@/components/Cursor/Cursor';
import { Video } from '@/components/Video/Video';

const Reel = () => {
	const [cursor, setCursor] = useState(false);
	const [isPlaying, setPlaying] = useState(false);
	const mouseEl = useRef(null);
	const videoEl = useRef(null);
	const { scrollYProgress } = useScroll();
	const scaleAnim = useTransform(scrollYProgress, [0.01, 0.1], [1, 0.75]);
	const opacityAnim = useTransform(scrollYProgress, [0.1, 0.15], [1, 0]);
	const handlePlayPause = () => {
		setPlaying(!isPlaying);

		if (isPlaying) {
			videoEl.current.pause();
		} else {
			videoEl.current.play();
		}
	};

	return (
		<Container ref={mouseEl} onMouseEnter={() => setCursor(true)} onMouseLeave={() => setCursor(false)} stick={true}>
			<AnimatePresence>
				{cursor && <Cursor el={mouseEl} video={videoEl} setPlaying={setPlaying} isPlaying={isPlaying} />}
			</AnimatePresence>
			<motion.div style={{ scale: scaleAnim, opacity: opacityAnim }}>
				<Video poster="/images/poster.jpg" controls ref={videoEl} onClick={() => handlePlayPause()} loop>
					<source src="/video/reel2022.webm" type="video/webm" />
					<source src="/video/reel2022.mp4" type="video/mp4" />
				</Video>
			</motion.div>
		</Container>
	);
};

export default Reel;
