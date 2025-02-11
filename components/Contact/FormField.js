import { motion } from 'framer-motion';

export const FormField = ({
	name,
	type = 'text',
	label,
	placeholder,
	required,
	register,
	focusedField,
	setFocusedField,
	options,
	rows,
}) => {
	const baseClasses = `
		w-full 
		bg-[rgba(16,19,23,0.98)] 
		border-l-[3px] 
		border-t-[1px]
		border-r-[1px]
		border-b-[1px]
		border-l-[rgba(0,255,224,0.6)]
		border-t-[rgba(0,255,224,0.2)]
		border-r-[rgba(0,255,224,0.2)]
		border-b-[rgba(0,255,224,0.2)]
		rounded-none 
		px-4 
		py-3 
		text-[rgba(0,255,224,0.9)]
		font-mono 
		text-sm
		transition-all 
		duration-300 
		focus:border-l-[rgba(0,255,224,1)]
		focus:border-t-[rgba(0,255,224,0.6)]
		focus:border-r-[rgba(0,255,224,0.6)]
		focus:border-b-[rgba(0,255,224,0.6)]
		focus:bg-[rgba(16,19,23,0.95)]
		focus:shadow-[0_0_15px_rgba(0,255,224,0.15)]
		placeholder:text-[rgba(0,255,224,0.3)]
	`;

	const labelContent = (
		<div className="flex items-center gap-2">
			<span className="text-[rgba(0,255,224,0.6)]">$</span>
			<span className="text-[rgba(0,255,224,0.8)]">{label}</span>
			{required && <span className="text-[#ff2a6d] animate-pulse">*</span>}
		</div>
	);

	return (
		<motion.div
			className="space-y-2 relative"
			whileHover={{ scale: 1.01 }}
			animate={focusedField === name ? { scale: 1.01 } : { scale: 1 }}
		>
			<label className="block font-mono text-xs tracking-wider">{labelContent}</label>

			<div className="relative">
				<div className="absolute -left-6 top-0 h-full w-[1px] bg-gradient-to-b from-[rgba(0,255,224,0)] via-[rgba(0,255,224,0.3)] to-[rgba(0,255,224,0)]" />
				<div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-[rgba(0,255,224,0.3)]" />

				{type === 'select' ? (
					<div className="relative">
						<select
							{...register(name)}
							onFocus={() => setFocusedField(name)}
							onBlur={() => setFocusedField(null)}
							className={`${baseClasses} appearance-none pr-8`}
						>
							{options.map((option) => (
								<option key={option} className="bg-[#101317]">
									{option}
								</option>
							))}
						</select>
						<div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
							<span className="text-[rgba(0,255,224,0.6)]">▼</span>
						</div>
					</div>
				) : type === 'textarea' ? (
					<textarea
						{...register(name)}
						onFocus={() => setFocusedField(name)}
						onBlur={() => setFocusedField(null)}
						placeholder={placeholder}
						rows={rows}
						className={baseClasses}
					/>
				) : (
					<input
						type={type}
						{...register(name, { required })}
						onFocus={() => setFocusedField(name)}
						onBlur={() => setFocusedField(null)}
						placeholder={placeholder}
						className={baseClasses}
					/>
				)}

				{focusedField === name && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-4 bg-[#ff2a6d]"
							style={{
								boxShadow: '0 0 8px rgba(255,42,109,0.5)',
								animation: 'pulse 2s infinite',
							}}
						/>
						<div className="absolute -right-6 top-0 h-full w-[1px] bg-gradient-to-b from-[rgba(255,42,109,0)] via-[rgba(255,42,109,0.3)] to-[rgba(255,42,109,0)]" />
					</>
				)}
			</div>

			<style jsx>{`
				@keyframes pulse {
					0% {
						opacity: 0.7;
					}
					50% {
						opacity: 1;
					}
					100% {
						opacity: 0.7;
					}
				}
			`}</style>
		</motion.div>
	);
};
