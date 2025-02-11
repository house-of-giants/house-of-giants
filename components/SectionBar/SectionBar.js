'use client';

import { useEffect, useState, useRef } from 'react';
import { StyledSectionBar } from './StyledSectionBar';
import { useSection } from '../SectionContext/SectionContext';
import { TextScramble } from './TextScramble';

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
	const [isSticky, setIsSticky] = useState(false);
	const [currentTime, setCurrentTime] = useState('');
	const [techTerms, setTechTerms] = useState(TECH_JARGON.slice(0, 4));
	const [statusText] = useState(TECH_JARGON[Math.floor(Math.random() * TECH_JARGON.length)]);
	const barRef = useRef(null);
	const heroRef = useRef(null);

	useEffect(() => {
		const updateTechTerms = () => {
			const shuffled = [...TECH_JARGON].sort(() => Math.random() - 0.5);
			setTechTerms(shuffled.slice(0, 4));
		};

		const termInterval = setInterval(updateTechTerms, 10000);
		return () => clearInterval(termInterval);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (barRef.current && heroRef.current) {
				const barRect = barRef.current.getBoundingClientRect();
				const heroRect = heroRef.current.getBoundingClientRect();

				if (heroRect.top >= 0) {
					// When scrolling back up to hero
					setIsSticky(false);
				} else if (heroRect.bottom > 0) {
					// When within hero section
					setIsSticky(barRect.top <= 0);
				}
			}
		};

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

		// Find hero section
		heroRef.current = barRef.current?.closest('section');

		window.addEventListener('scroll', handleScroll);
		const timeInterval = setInterval(updateTime, 1000);
		updateTime();

		return () => {
			window.removeEventListener('scroll', handleScroll);
			clearInterval(timeInterval);
		};
	}, []);

	return (
		<>
			<div style={{ height: isSticky ? '32px' : '0' }} />
			<StyledSectionBar ref={barRef} className={isSticky ? 'sticky' : ''}>
				<div className="section-info">
					<span className="section-label">PROCESS_ID</span>
					<span className="section-number">[{activeSection.count}]</span>
					<div className="separator" />
					<span className="timestamp">T+{currentTime}</span>
					<div className="separator" />
					<span className="coordinates text-[10px] text-cyber-green/50">39.769940°N 104.943737°W</span>
				</div>

				<div className="marquee-container">
					<div className="marquee">
						<div className="marquee-content">
							{Array.from({ length: 3 }).map((_, i) => (
								<span key={i} className="text">
									<span className="section-title">
										// [ <TextScramble text={activeSection.title.toUpperCase()} /> ]
									</span>{' '}
									{techTerms.map((term, i) => (
										<span key={term} className="tech-term">
											// <TextScramble text={term} />
										</span>
									))}
								</span>
							))}
						</div>
					</div>
				</div>

				<div className="status-info">
					<div className="status-dot" />
					<span className="status-text">{statusText}</span>
				</div>
			</StyledSectionBar>
		</>
	);
};
