'use client';

import { createContext, useContext, useState } from 'react';

const SectionContext = createContext();

export function SectionProvider({ children }) {
	const [activeSection, setActiveSection] = useState({
		count: '1.0',
		title: 'Digital Interactive',
	});

	return <SectionContext.Provider value={{ activeSection, setActiveSection }}>{children}</SectionContext.Provider>;
}

export function useSection() {
	const context = useContext(SectionContext);
	if (!context) {
		throw new Error('useSection must be used within a SectionProvider');
	}
	return context;
}
