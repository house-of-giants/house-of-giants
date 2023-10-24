import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';
import Arrow from '../SVG/Arrow';

const Testimonials = () => {
	return (
		<Carousel
			infiniteLoop
			showIndicators={false}
			showStatus={false}
			showThumbs={false}
			renderArrowNext={(onClickHandler, hasNext, label) =>
				hasNext && (
					<button className="arrow -next" type="button" onClick={onClickHandler} title={label}>
						<Arrow fill="var(--c-white)" />
					</button>
				)
			}
			renderArrowPrev={(onClickHandler, hasPrev, label) =>
				hasPrev && (
					<button className="arrow -prev" type="button" onClick={onClickHandler} title={label}>
						<Arrow fill="var(--c-white)" />
					</button>
				)
			}
		>
			<div>
				<blockquote>
					They even took the time for in-depth research before calls which proved to me they understood the history and
					path.
				</blockquote>
				<figcaption>
					Bodie Johnson
					<br />
					CEO &amp; Owner, BackForty Management
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
	);
};

export default Testimonials;
