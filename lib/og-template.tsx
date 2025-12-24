import { ReactNode } from 'react';

interface OGTemplateProps {
	eyebrow: string;
	children: ReactNode;
	footer?: ReactNode;
}

// Brand colors
export const ogColors = {
	background: '#0d1017',
	foreground: '#f2f2f2',
	primary: '#7dd87d',
	accent: '#a5e887',
	muted: '#8b9cad',
	mutedDark: '#6b7c8f',
	cardBg: 'rgba(255,255,255,0.05)',
	cardBorder: 'rgba(255,255,255,0.1)',
	primaryBg: 'rgba(125,216,125,0.15)',
	primaryBorder: 'rgba(125,216,125,0.3)',
};

// Shared text styles
export const ogText = {
	eyebrow: {
		fontSize: '14px',
		fontWeight: 600,
		letterSpacing: '0.2em',
		textTransform: 'uppercase' as const,
		color: ogColors.primary,
	},
	headline: {
		display: 'flex' as const,
		fontSize: '64px',
		fontWeight: 700,
		color: ogColors.foreground,
		lineHeight: 1.1,
		whiteSpace: 'nowrap' as const,
	},
	headlineLarge: {
		display: 'flex' as const,
		fontSize: '72px',
		fontWeight: 700,
		color: ogColors.foreground,
		lineHeight: 1.1,
		whiteSpace: 'nowrap' as const,
	},
	gradient: {
		background: `linear-gradient(135deg, ${ogColors.primary} 0%, ${ogColors.accent} 100%)`,
		backgroundClip: 'text' as const,
		color: 'transparent',
	},
	body: {
		fontSize: '22px',
		color: ogColors.muted,
		lineHeight: 1.5,
	},
	label: {
		fontSize: '14px',
		color: ogColors.mutedDark,
	},
	logo: {
		fontSize: '28px',
		fontWeight: 700,
		color: ogColors.foreground,
		letterSpacing: '-0.02em',
	},
};

export function OGTemplate({ eyebrow, children, footer }: OGTemplateProps) {
	return (
		<div
			style={{
				height: '100%',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				backgroundColor: ogColors.background,
				padding: '60px',
				position: 'relative',
			}}
		>
			{/* Grid pattern overlay */}
			<div
				style={{
					position: 'absolute',
					inset: 0,
					backgroundImage:
						'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
					backgroundSize: '60px 60px',
				}}
			/>

			{/* Gradient glow */}
			<div
				style={{
					position: 'absolute',
					top: '-150px',
					right: '-100px',
					width: '500px',
					height: '500px',
					background: 'radial-gradient(circle, rgba(125,216,125,0.12) 0%, transparent 70%)',
					borderRadius: '50%',
				}}
			/>

			{/* Content */}
			<div style={{ display: 'flex', flexDirection: 'column', zIndex: 10 }}>
				{/* Eyebrow */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '12px',
						marginBottom: '20px',
					}}
				>
					<span style={ogText.eyebrow}>{eyebrow}</span>
				</div>

				{/* Page-specific content */}
				{children}
			</div>

			{/* Bottom bar */}
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'flex-end',
					zIndex: 10,
				}}
			>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
					<span style={ogText.logo}>House of Giants</span>
					<span style={ogText.label}>Denver, Colorado</span>
				</div>

				{footer}
			</div>

			{/* Top accent bar */}
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					height: '4px',
					background: `linear-gradient(90deg, ${ogColors.primary} 0%, ${ogColors.accent} 50%, ${ogColors.primary} 100%)`,
				}}
			/>
		</div>
	);
}

interface HeadlineProps {
	lines: Array<{
		text?: string;
		gradient?: string;
		gap?: string;
	}>;
	size?: 'default' | 'large';
}

export function OGHeadline({ lines, size = 'default' }: HeadlineProps) {
	const baseStyle = size === 'large' ? ogText.headlineLarge : ogText.headline;

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				marginBottom: '32px',
			}}
		>
			{lines.map((line, i) => (
				<div
					key={i}
					style={{
						...baseStyle,
						gap: line.gap || '18px',
					}}
				>
					{line.text && <span>{line.text}</span>}
					{line.gradient && <span style={ogText.gradient}>{line.gradient}</span>}
				</div>
			))}
		</div>
	);
}

// Helper for service/tag badges
interface BadgeProps {
	items: string[];
	highlightFirst?: boolean;
}

export function OGBadges({ items, highlightFirst = true }: BadgeProps) {
	return (
		<div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
			{items.map((item, i) => {
				const isHighlighted = highlightFirst && i === 0;
				return (
					<div
						key={item}
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '10px',
							padding: '12px 20px',
							backgroundColor: isHighlighted ? ogColors.primaryBg : ogColors.cardBg,
							border: `1px solid ${isHighlighted ? ogColors.primaryBorder : ogColors.cardBorder}`,
							whiteSpace: 'nowrap',
						}}
					>
						<div
							style={{
								width: '6px',
								height: '6px',
								backgroundColor: isHighlighted ? ogColors.primary : ogColors.mutedDark,
							}}
						/>
						<span
							style={{
								fontSize: '16px',
								fontWeight: 500,
								color: isHighlighted ? ogColors.primary : '#c5d4e3',
							}}
						>
							{item}
						</span>
					</div>
				);
			})}
		</div>
	);
}

// Helper for stat displays
interface StatProps {
	stats: Array<{ value: string; label: string }>;
}

export function OGStats({ stats }: StatProps) {
	return (
		<div style={{ display: 'flex', gap: '48px' }}>
			{stats.map((stat) => (
				<div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
					<span
						style={{
							fontSize: '48px',
							fontWeight: 700,
							color: ogColors.primary,
						}}
					>
						{stat.value}
					</span>
					<span
						style={{
							fontSize: '14px',
							fontWeight: 500,
							color: ogColors.mutedDark,
							textTransform: 'uppercase',
							letterSpacing: '0.1em',
						}}
					>
						{stat.label}
					</span>
				</div>
			))}
		</div>
	);
}
