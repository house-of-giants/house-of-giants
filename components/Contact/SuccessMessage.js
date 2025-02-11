import { motion } from 'framer-motion';

export const SuccessMessage = () => (
	<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
		<motion.div
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={{ type: 'spring', stiffness: 200, damping: 10 }}
			className="text-6xl mb-6"
		>
			⚡️
		</motion.div>
		<h3 className="text-4xl font-bold text-white mb-4">We got you</h3>
		<p className="text-wolf-gray/80 text-xl">We'll be in touch within 24 hours 🤘.</p>
	</motion.div>
);
