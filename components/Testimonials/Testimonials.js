'use client';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Arrow from '../SVG/Arrow';
import { useMediaQuery } from '../../hooks/useMediaQuery';
const Testimonials = ({ noHeader = false }) => {
	const isMobile = useMediaQuery('(max-width: 1024px)');
	return (
		<div className="testimonials-section mt-32">
			{!noHeader && (
				<h3 className="text-center mb-16">
					<span className="block text-[clamp(3rem,8vw,6rem)] font-black leading-[0.85] -grad-header">Don't take</span>
					<span className="block text-[clamp(3rem,8vw,6rem)] text-white leading-[0.85] font-bold mt-4">
						our word for it.
					</span>
				</h3>
			)}

			<Carousel
				infiniteLoop
				showIndicators={true}
				centerMode={isMobile ? false : true}
				centerSlidePercentage={isMobile ? 100 : 50}
				swipeable={true}
				showStatus={false}
				showThumbs={false}
				className="testimonial-carousel"
				selectedItem={1}
				renderArrowNext={(onClickHandler, hasNext, label) =>
					hasNext && (
						<button className="testimonial-arrow -next" type="button" onClick={onClickHandler} title={label}>
							<Arrow fill="var(--c-cyber-green)" />
						</button>
					)
				}
				renderArrowPrev={(onClickHandler, hasPrev, label) =>
					hasPrev && (
						<button className="testimonial-arrow -prev" type="button" onClick={onClickHandler} title={label}>
							<Arrow fill="var(--c-cyber-green)" />
						</button>
					)
				}
			>
				<div>
					<blockquote>
						They even took the time for in-depth research before calls which proved to me they understood the history
						and path.
					</blockquote>
					<figcaption>
						Bodie Johnson
						<br />
						CEO &amp; Owner, BackForty Management
					</figcaption>
				</div>
				<div>
					<blockquote>
						Our website looks fantastic and we are getting more business off of it than we previously were. HoG did a
						great job listening to our needs and designing a website that looks and runs fantastic.
					</blockquote>
					<figcaption>
						Kathleen Lannes
						<br />
						Sales Manager, Longero
					</figcaption>
				</div>
				<div>
					<blockquote>
						I was most impressed with how seriously they took my ideas and incorporated them into their awesome design
						ability.
					</blockquote>
					<figcaption>
						Sheryl Glubok
						<br />
						Independent Filmmaker
					</figcaption>
				</div>
				<div>
					<blockquote>
						The outcome has been fantastic, as we&apos;re successfully generating new people who want to get involved in
						our program.
					</blockquote>
					<figcaption>
						Ann Marie Beresford
						<br />
						Executive Director, Adaptive Sports Association
					</figcaption>
				</div>
				<div>
					<blockquote>House of Giants was really forward-thinking in their design.</blockquote>
					<figcaption>
						Devan Crean
						<br />
						Former Marketing &amp; Communications Manager, Air Methods
					</figcaption>
				</div>
				<div>
					<blockquote>They do a great job at getting to know the brand and investing in our collaboration.</blockquote>
					<figcaption>
						Katie Zak
						<br />
						Marketing Director, Untapped Learning
					</figcaption>
				</div>
			</Carousel>
		</div>
	);
};

export default Testimonials;
