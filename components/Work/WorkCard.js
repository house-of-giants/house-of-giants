'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const WorkCard = ({ title, type, img, url, featured = false }) => {
	return (
		<Link
			href={url}
			className="group relative block border border-wolf-gray hover:border-wolf-gray/20  rounded-lg transition-all duration-300"
		>
			<div className={`relative rounded-lg overflow-hidden ${featured ? 'aspect-[21/9]' : 'aspect-[16/9]'}`}>
				<Image
					src={img}
					alt={title}
					fill
					sizes={featured ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
					priority={featured}
					className="object-cover transition-transform duration-700 group-hover:scale-110"
				/>

				{/* Light Protection Gradient */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 " />
				<div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent opacity-60 " />

				{/* Content */}
				<div className="absolute inset-0 p-8 flex flex-col justify-end">
					{/* Top Tags */}
					<div className="flex gap-2 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						{type.map((t) => (
							<span
								key={t}
								className="text-wolf-gray text-sm px-3 py-1 rounded-full border border-wolf-gray/20 
                                 transition-colors duration-300 group-hover:border-cyber-green/20 group-hover:text-cyber-green"
							>
								{t}
							</span>
						))}
					</div>

					{/* Bottom Content */}
					<div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="transform transition-transform duration-300"
						>
							<h3 className="text-[2rem] font-black text-white mb-4 group-hover:-grad-header transition-colors duration-300">
								{title}
							</h3>

							{/* Animated Line */}
							<div className="relative mt-4 overflow-hidden">
								<div className="h-[1px] w-full bg-gradient-to-r from-[#00ffe0] to-[#c1ff1d] transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left" />
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</Link>
	);
};
