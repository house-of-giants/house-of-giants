import { Resend } from 'resend';
import { NextResponse } from 'next/server';

interface ContactFormData {
	name: string;
	email: string;
	projectType: string | null;
	message: string;
	company?: string;
	budget?: string | null;
	timeline?: string | null;
	phone?: string;
}

const projectTypeLabels: Record<string, string> = {
	website: 'Website / Marketing Site',
	webapp: 'Web Application / SaaS',
	ecommerce: 'E-commerce Platform',
	redesign: 'Existing Site Redesign',
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

export async function POST(request: Request) {
	try {
		const body: ContactFormData = await request.json();

		const { name, email, projectType, message, company, budget, timeline, phone } = body;

		if (!name || !email || !message) {
			return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
		}

		const projectTypeDisplay = projectType ? projectTypeLabels[projectType] || projectType : 'Not specified';
		const budgetDisplay = budget ? budgetLabels[budget] || budget : 'Not specified';
		const timelineDisplay = timeline ? timelineLabels[timeline] || timeline : 'Not specified';

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
			return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
		}

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error('Contact form error:', error);
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
}
