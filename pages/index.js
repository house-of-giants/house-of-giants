import { useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Container } from '@/components/Container/Container';
import { Cursor } from '@/components/Cursor/Cursor';
import Dots from '@/components/Dots/Dots';
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

			<Container background="var(--c-primary-dark)" pTop="calc(var(--sp-2xl) * 2)">
				<Dots>
					<h3>Our values &amp; ethos</h3>
					<p className="h2 -uppercase">Dreaming of innovation. Experimenting with passion. Creating with purpose. We belive creativity &amp; Technology can change the world right after punk does.</p>
					<p className="h1 -uppercase">We create Digital experiences that<br />people love to use.</p>
				</Dots>
			</Container>

			<Container background="var(--c-primary-dark)" pTop="var(--sp-2xl)">
				<h2>This is how we help you build amazing shit</h2>
			</Container>
		</>
	)
}