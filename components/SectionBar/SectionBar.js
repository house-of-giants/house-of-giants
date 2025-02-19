'use client';

import { useEffect, useState } from 'react';
import { StyledSectionBar } from './StyledSectionBar';
import { useSection } from '../SectionContext/SectionContext';
import { TextScramble } from './TextScramble';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const TECH_JARGON = [
	'SYS_MALLOC 0xDEADBEEF',
	'THREAD_PRIORITY_HIGH',
	'RENDER_PIPELINE_ACTIVE',
	'GPU_BUFFER_SYNCED',
	'MUTEX_LOCK 0xCAFEBABE',
	'KERNEL_PANIC_AVOIDED',
	'QUANTUM_BITS_ALIGNED',
	'NEURAL_NET_TRAINING',
	'BLOCKCHAIN_VERIFIED',
	'IPV6_PACKETS_ROUTED',
	'CACHE_INVALIDATED',
	'STACK_OVERFLOW 0xB16B00B5',
	'MATRIX_CALCULATIONS',
	'FLUX_CAPACITOR_CHARGED',
	'ENCRYPTION_KEY 0xC0FFEE',
	'MEMORY_HEAP_OPTIMIZED',
	'TCP_HANDSHAKE_COMPLETE',
	'DNS_CACHE_POISONED',
	'FIREWALL_RULES_UPDATED',
	'SSH_TUNNEL_ESTABLISHED',
];

export const SectionBar = () => {
	const { activeSection } = useSection();
	const [currentTime, setCurrentTime] = useState('');
	const [techTerms, setTechTerms] = useState(TECH_JARGON.slice(0, 4));
	const [statusText, setStatusText] = useState(TECH_JARGON[0]);

	const isMobile = useMediaQuery('(max-width: 640px)');
	const isTablet = useMediaQuery('(max-width: 1024px)');

	// Add default section if none is active
	const section = activeSection || { count: '0.0', title: 'SYSTEM_IDLE' };

	useEffect(() => {
		const updateTechTerms = () => {
			const shuffled = [...TECH_JARGON].sort(() => Math.random() - 0.5);
			setTechTerms(shuffled.slice(0, 4));
		};

		const termInterval = setInterval(updateTechTerms, 10000);
		return () => clearInterval(termInterval);
	}, []);

	useEffect(() => {
		const updateTime = () => {
			const now = new Date();
			setCurrentTime(
				now.toLocaleTimeString('en-US', {
					hour12: false,
					hour: '2-digit',
					minute: '2-digit',
					second: '2-digit',
				})
			);
		};

		updateTime(); // Initial update
		const timeInterval = setInterval(updateTime, 1000); // Update every second

		return () => clearInterval(timeInterval); // Cleanup interval on unmount
	}, []);

	useEffect(() => {
		// Set random status text after initial render
		setStatusText(TECH_JARGON[Math.floor(Math.random() * TECH_JARGON.length)]);
	}, []);

	const renderSectionInfo = () => (
		<div className="section-info">
			{!isMobile && <span className="section-label">PROCESS_ID</span>}
			<span className="section-number">[{section.count}]</span>
			<div className="separator" />
			<span className="timestamp">T+{currentTime}</span>
			{!isTablet && (
				<>
					<div className="separator" />
					<span className="coordinates text-[10px] text-cyber-green/50">39.769940°N 104.943737°W</span>
				</>
			)}
		</div>
	);

	const renderMarquee = () => (
		<div className="marquee-container">
			<div className="marquee">
				<div className="marquee-content">
					{Array.from({ length: isMobile ? 2 : 3 }).map((_, i) => (
						<span key={i} className="text">
							<span className="section-title">
								// [ <TextScramble text={section.title.toUpperCase()} /> ]
							</span>{' '}
							{techTerms.slice(0, isMobile ? 2 : isTablet ? 3 : 4).map((term, i) => (
								<span key={term} className="tech-term">
									// <TextScramble text={term} />
								</span>
							))}
						</span>
					))}
				</div>
			</div>
		</div>
	);

	const renderStatusInfo = () => (
		<div className="status-info">
			<div className="status-dot" />
			<span className="status-text">{statusText}</span>
		</div>
	);

	return (
		<>
			<StyledSectionBar>
				{renderSectionInfo()}
				{renderMarquee()}
				{renderStatusInfo()}
			</StyledSectionBar>
		</>
	);
};
