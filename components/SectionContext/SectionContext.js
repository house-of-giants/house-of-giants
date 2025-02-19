'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const SectionContext = createContext();

// Helper function to set default section title based on route
function getDefaultSectionTitle(pathname) {
	if (pathname === '/') return 'House of Giants';
	if (pathname.startsWith('/work/')) return 'Project Overview';
	if (pathname.startsWith('/blog')) return 'Blog';
	return 'House of Giants';
}

export const useSection = () => {
	const context = useContext(SectionContext);
	if (!context) {
		throw new Error('useSection must be used within a SectionProvider');
	}
	return context;
};

export function SectionProvider({ children }) {
	const pathname = usePathname();
	const [activeSection, setActiveSection] = useState({
		count: '1.0',
		title: getDefaultSectionTitle(pathname),
	});

	// Reset section on route change
	useEffect(() => {
		setActiveSection({
			count: '1.0',
			title: getDefaultSectionTitle(pathname),
		});
	}, [pathname]);

	return <SectionContext.Provider value={{ activeSection, setActiveSection }}>{children}</SectionContext.Provider>;
}
