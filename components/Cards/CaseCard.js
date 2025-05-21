import Link from 'next/link';

const CaseCard = ({ title, type, img, url }) => (
	<Link
		className="border border-white p-8 relative aspect-[20/27] group hover:border-transparent transition-colors case-link"
		href={url}
	>
		<div className="flex items-center justify-center">
			<div className="w-full aspect-video flex flex-col">
				<div
					className="card__img"
					style={{
						backgroundImage: `url(${img})`,
						columns: 5,
						translate: 'none',
						rotate: 'none',
						scale: 'none',
						opacity: 0,
						transform: 'translate(0%, 100%)',
					}}
				>
					<div
						className="card__img-wrap"
						style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0%, -100%)' }}
					>
						<div
							className="card__img-inner"
							style={{
								backgroundImage: `url(${img})`,
								clipPath: 'polygon(0% 0%, 20% 0%, 20% 100%, 0% 100%)',
								left: '0px',
								translate: 'none',
								rotate: 'none',
								scale: 'none',
								transform: 'translate(0%, 42.9988%)',
							}}
						/>
						<div
							className="card__img-inner"
							style={{
								backgroundImage: `url(${img})`,
								clipPath: 'polygon(20% 0%, 40% 0%, 40% 100%, 20% 100%)',
								left: '-1px',
								translate: 'none',
								rotate: 'none',
								scale: 'none',
								transform: 'translate(0%, -23.5242%)',
							}}
						/>
						<div
							className="card__img-inner"
							style={{
								backgroundImage: `url(${img})`,
								clipPath: 'polygon(40% 0%, 60% 0%, 60% 100%, 40% 100%)',
								left: '-2px',
								translate: 'none',
								rotate: 'none',
								scale: 'none',
								transform: 'translate(0%, 64.4302%)',
							}}
						/>
						<div
							className="card__img-inner"
							style={{
								backgroundImage: `url(${img})`,
								clipPath: 'polygon(60% 0%, 80% 0%, 80% 100%, 60% 100%)',
								left: '-3px',
								translate: 'none',
								rotate: 'none',
								scale: 'none',
								transform: 'translate(0%, -33.4043%)',
							}}
						/>
						<div
							className="card__img-inner"
							style={{
								backgroundImage: `url(${img})`,
								clipPath: 'polygon(80% 0%, 100% 0%, 100% 100%, 80% 100%)',
								left: '-4px',
								translate: 'none',
								rotate: 'none',
								scale: 'none',
								transform: 'translate(0%, 53.8825%)',
							}}
						/>
					</div>
				</div>
				<p className="font-serif italic leading-none mb-4 mix-blend-difference">{type.join(' + ')}</p>
				<p className="font-bold text-4xl leading-none mix-blend-difference">{title}</p>
				<p className="font-serif italic justify-self-end absolute bottom-0 gradient-text-anim">Learn More &rarr;</p>
			</div>
		</div>
	</Link>
);

export default CaseCard;
