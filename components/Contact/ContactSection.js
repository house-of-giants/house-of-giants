import React from 'react';
import { StyledContact } from './StyledContact';

export const ContactSection = ({ id, children, className, background, pt, pb }) => (
	<StyledContact id={id} className={className} $pTop={pt} $pBottom={pb} $background={background}>
		<div className="contact-wrap">{children}</div>
	</StyledContact>
);
