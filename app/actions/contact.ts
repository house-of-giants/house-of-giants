'use server';

import { Resend } from 'resend';

export interface ContactFormState {
	success: boolean;
	error: string | null;
}

const projectTypeLabels: Record<string, string> = {
	website: 'Website / Marketing Site',
	webapp: 'Web Application / SaaS',
	ecommerce: 'E-commerce Platform',
	redesign: 'Existing Site Redesign',
	'agency-partnership': 'Agency Partnership / Dev Pod',
	other: 'Something Else',
};

const budgetLabels: Record<string, string> = {
	'under-15k': 'Under $15k',
	'15k-25k': '$15k - $25k',
	'25k-50k': '$25k - $50k',
	'50k-100k': '$50k - $100k',
	'100k-plus': '$100k+',
	'not-sure': 'Not sure yet',
};

const timelineLabels: Record<string, string> = {
	asap: 'ASAP (within 1 month)',
	'1-3-months': '1-3 months',
	'3-6-months': '3-6 months',
	flexible: 'Flexible / Just exploring',
};

export async function submitContactForm(_prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
	const name = formData.get('name') as string;
	const email = formData.get('email') as string;
	const message = formData.get('message') as string;
	const projectType = formData.get('projectType') as string | null;
	const company = formData.get('company') as string | null;
	const budget = formData.get('budget') as string | null;
	const timeline = formData.get('timeline') as string | null;
	const phone = formData.get('phone') as string | null;

	if (!name || !email || !message) {
		return { success: false, error: 'Please fill in all required fields.' };
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		return { success: false, error: 'Please enter a valid email address.' };
	}

	const projectTypeDisplay = projectType ? projectTypeLabels[projectType] || projectType : 'Not specified';
	const budgetDisplay = budget ? budgetLabels[budget] || budget : 'Not specified';
	const timelineDisplay = timeline ? timelineLabels[timeline] || timeline : 'Not specified';

	try {
		const resend = new Resend(process.env.RESEND_API_KEY);
		const { error } = await resend.emails.send({
			from: 'House of Giants <noreply@houseofgiants.com>',
			to: ['hello@houseofgiants.com'],
			replyTo: email,
			subject: `New Project Inquiry from ${name}`,
			html: `
				<h2>New Contact Form Submission</h2>
				
				<h3>Contact Details</h3>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
				${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
				
				<h3>Project Details</h3>
				<p><strong>Project Type:</strong> ${projectTypeDisplay}</p>
				<p><strong>Budget:</strong> ${budgetDisplay}</p>
				<p><strong>Timeline:</strong> ${timelineDisplay}</p>
				
				<h3>Message</h3>
				<p>${message.replace(/\n/g, '<br>')}</p>
			`,
			text: `
New Contact Form Submission

Contact Details
---------------
Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
${phone ? `Phone: ${phone}` : ''}

Project Details
---------------
Project Type: ${projectTypeDisplay}
Budget: ${budgetDisplay}
Timeline: ${timelineDisplay}

Message
-------
${message}
			`,
		});

		if (error) {
			console.error('Resend error:', error);
			return { success: false, error: 'Failed to send message. Please try again.' };
		}

		return { success: true, error: null };
	} catch (error) {
		console.error('Contact form error:', error);
		return { success: false, error: 'Something went wrong. Please try again.' };
	}
}
