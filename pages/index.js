import { useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Container } from '@/components/Container/Container';
import { Cursor } from '@/components/Cursor/Cursor';
import { Video } from '@/components/Video/Video';	

export default function Home() {
	const [cursor, setCursor] = useState(false);
	const [isPlaying, setPlaying] = useState(false);
	const mouseEl = useRef(null);
	const videoEl = useRef(null);

	const handlePlayPause = () => {
		setPlaying(!isPlaying);

		if(isPlaying) {
			videoEl.current.pause();
		} else {
			videoEl.current.play();
		}
	}

	return (
		<>
			<Container ref={mouseEl} onMouseEnter={() => setCursor(true)} onMouseLeave={() => setCursor(false)}>
				<AnimatePresence>
					{cursor && <Cursor el={mouseEl} video={videoEl} setPlaying={setPlaying} isPlaying={isPlaying} />}
				</AnimatePresence>
				<Video poster="/images/poster.jpg" controls ref={videoEl} onClick={() => handlePlayPause()}>
					<source src="/video/reel2022.mp4" type="video/webm" />
					<source src="/video/reel2022.mp4" type="video/mp4" />
				</Video>
			</Container>
		</>
	)
}