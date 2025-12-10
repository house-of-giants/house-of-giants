'use client';

import { useEffect, useState } from 'react';
import { useSection } from '../SectionContext/SectionContext';
import { TextScramble } from './TextScramble';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const BUSINESS_JARGON = [
	'Campaign Performance: Strong',
	'Customer Engagement: High',
	'Brand Awareness: Growing',
	'Team Collaboration: Active',
	'Location Growth: On Track',
	'Customer Feedback: Positive',
	'Marketing Budget: Healthy',
	'Franchise Relations: Strong',
	'Quarterly Goals: Achieved',
	'Team Morale: Excellent',
	'Brand Voice: Consistent',
	'Customer Journey: Smooth',
	'Operations: Running Smoothly',
	'Marketing Metrics: Looking Good',
	'Franchise Expansion: Planned',
	'Customer Satisfaction: High',
	'Team Productivity: Up',
	'Brand Guidelines: Followed',
	'Location Performance: Strong',
	'Marketing Strategy: Working',
];

export const SectionBar = () => {
	const { activeSection } = useSection();
	const [currentTime, setCurrentTime] = useState('');
	const [techTerms, setTechTerms] = useState(BUSINESS_JARGON.slice(0, 4));
	const [statusText, setStatusText] = useState(BUSINESS_JARGON[0]);

	const isMobile = useMediaQuery('(max-width: 640px)');
	const isTablet = useMediaQuery('(max-width: 1024px)');

	// Add default section if none is active
	const section = activeSection || { count: '0.0', title: 'Ready to Start' };

	useEffect(() => {
		const updateTechTerms = () => {
			const shuffled = [...BUSINESS_JARGON].sort(() => Math.random() - 0.5);
			setTechTerms(shuffled.slice(0, 4));
		};

		updateTechTerms();
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
		setStatusText(BUSINESS_JARGON[Math.floor(Math.random() * BUSINESS_JARGON.length)]);
	}, []);

	const renderSectionInfo = () => (
		<div className="section-info">
			{!isMobile && <span className="section-label pl-2">Current Section</span>}
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
									// <span>{term}</span>
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
			<span className="status-text pr-2">{statusText}</span>
		</div>
	);

	return (
		<div className="styled-section-bar">
			{renderSectionInfo()}
			{renderMarquee()}
			{renderStatusInfo()}
		</div>
	);
};
