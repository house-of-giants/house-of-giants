import { motion } from 'framer-motion';
import { SectionHeader } from '../SectionHeader/SectionHeader';

export const ContactHeader = ({
	title = "We're ready",
	subtitle = "Let's get started.",
	accent = "Have your friends called your ideas crazy? Good. Let's talk.",
	description = "Whether it's a mind-bending digital experience or a brand that breaks the internet, we're here to turn your wildest ideas into reality. No boundaries, no bullshit.",
}) => (
	<SectionHeader
		title={title}
		subtitle={subtitle}
		accent={accent}
		description={
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<p className="text-moon-rock/80">{description}</p>
			</motion.div>
		}
	/>
);
