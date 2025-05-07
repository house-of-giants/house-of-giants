import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
	try {
		// Determine the type of form submission
		const isQuickForm = req.body.subject.includes('Quick Contact Form');
		const isAuditForm = req.body.subject.includes('Website Audit Request');

		// Create appropriate HTML template based on form type
		let emailHtml;
		if (isAuditForm) {
			emailHtml = generateAuditFormEmail(req.body);
		} else if (isQuickForm) {
			emailHtml = generateQuickFormEmail(req.body);
		} else {
			emailHtml = generateDetailedFormEmail(req.body);
		}

		await sendgrid.send({
			to: 'hello@houseofgiants.com',
			from: 'hello@houseofgiants.com',
			subject: req.body.subject,
			html: emailHtml,
		});

		return res.status(200).json({ status: 200, error: null });
	} catch (error) {
		console.error('SendGrid Error:', error);
		return res.status(error.statusCode || 500).json({ error: error.message });
	}
}

// Template for the website audit form
function generateAuditFormEmail(data) {
	return `
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width">
				<style>
					body { 
						font-family: 'Courier New', Courier, monospace;
						line-height: 1.6;
						color: rgba(255, 255, 255, 0.9);
						background: #101317;
						margin: 0;
						padding: 0;
					}
					.container { 
						max-width: 600px;
						margin: 0 auto;
						padding: 20px;
						background: rgba(16, 19, 23, 0.98);
					}
					.header { 
						background: linear-gradient(90deg, #00ffe0 0%, #c1ff1d 100%);
						padding: 24px;
						border-radius: 4px;
						margin-bottom: 32px;
						border-left: 3px solid rgba(0, 255, 224, 0.6);
					}
					.header h1 { 
						color: #101317;
						margin: 0;
						font-size: 24px;
						font-weight: 700;
						letter-spacing: 0.5px;
					}
					.section { 
						margin-bottom: 32px;
						padding: 20px;
						border-left: 3px solid rgba(0, 255, 224, 0.6);
						background: rgba(0, 255, 224, 0.05);
					}
					.label { 
						font-weight: 600;
						color: #00ffe0;
						text-transform: uppercase;
						font-size: 14px;
						letter-spacing: 1px;
						margin-bottom: 12px;
					}
					.value { 
						margin-top: 8px;
						font-size: 16px;
						padding-left: 16px;
						border-left: 2px solid rgba(0, 255, 224, 0.2);
						color: rgba(255, 255, 255, 0.9);
					}
					.divider { 
						border: none;
						height: 1px;
						background: linear-gradient(90deg, 
							rgba(0, 255, 224, 0) 0%,
							rgba(0, 255, 224, 0.2) 50%,
							rgba(0, 255, 224, 0) 100%
						);
						margin: 32px 0;
					}
					.website-link {
						color: #00ffe0;
						text-decoration: none;
						word-break: break-all;
					}
					.website-link:hover {
						text-decoration: underline;
					}
					.hot-lead {
						background: rgba(255, 42, 109, 0.1);
						border: 1px solid rgba(255, 42, 109, 0.3);
						padding: 16px;
						border-radius: 4px;
						margin-top: 32px;
					}
					.hot-lead .label {
						color: #ff2a6d;
					}
					.focus-area {
						display: inline-block;
						background: rgba(0, 255, 224, 0.1);
						padding: 4px 12px;
						border-radius: 4px;
						margin: 4px 0;
						border: 1px solid rgba(0, 255, 224, 0.2);
					}
				</style>
			</head>
			<body>
				<div class="container">
					<div class="header">
						<h1>🔍 New Website Audit Request</h1>
					</div>
					
					<div class="section">
						<div class="label">// Contact Info</div>
						<div class="value">${data.name}</div>
						<div class="value"><a href="mailto:${data.email}" style="color: #00ffe0;">${data.email}</a></div>
						<div class="value">${data.company}</div>
					</div>

					<hr class="divider" />

					<div class="section">
						<div class="label">// Website Details</div>
						<div class="value">
							<a href="${data.website}" class="website-link" target="_blank">${data.website}</a>
						</div>
					</div>

					<div class="section">
						<div class="label">// Primary Focus Area</div>
						<div class="value">
							<span class="focus-area">${data.feedback}</span>
						</div>
					</div>

					${
						data.followup
							? `
					<div class="hot-lead">
						<div class="label">🔥 Hot Lead</div>
						<div class="value">
							This client is open to a follow-up conversation about implementing the recommendations.
						</div>
					</div>
					`
							: ''
					}
				</div>
			</body>
		</html>
	`;
}

// Template for the quick contact form (simpler version)
function generateQuickFormEmail(data) {
	return `
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width">
				<style>
					body { 
						font-family: 'Courier New', Courier, monospace;
						line-height: 1.6;
						color: rgba(255, 255, 255, 0.9);
						background: #101317;
						margin: 0;
						padding: 0;
					}
					.container { 
						max-width: 600px;
						margin: 0 auto;
						padding: 20px;
						background: rgba(16, 19, 23, 0.98);
					}
					.header { 
						background: linear-gradient(90deg, #00ffe0 0%, #c1ff1d 100%);
						padding: 24px;
						border-radius: 4px;
						margin-bottom: 32px;
						border-left: 3px solid rgba(0, 255, 224, 0.6);
					}
					.header h1 { 
						color: #101317;
						margin: 0;
						font-size: 24px;
						font-weight: 700;
						letter-spacing: 0.5px;
					}
					.section { 
						margin-bottom: 32px;
						padding: 20px;
						border-left: 3px solid rgba(0, 255, 224, 0.6);
						background: rgba(0, 255, 224, 0.05);
					}
					.label { 
						font-weight: 600;
						color: #00ffe0;
						text-transform: uppercase;
						font-size: 14px;
						letter-spacing: 1px;
						margin-bottom: 12px;
					}
					.value { 
						margin-top: 8px;
						font-size: 16px;
						padding-left: 16px;
						border-left: 2px solid rgba(0, 255, 224, 0.2);
						color: rgba(255, 255, 255, 0.9);
					}
					.divider { 
						border: none;
						height: 1px;
						background: linear-gradient(90deg, 
							rgba(0, 255, 224, 0) 0%,
							rgba(0, 255, 224, 0.2) 50%,
							rgba(0, 255, 224, 0) 100%
						);
						margin: 32px 0;
					}
					strong {
						color: #c1ff1d;
						font-weight: normal;
					}
					.emoji {
						font-size: 20px;
						margin-right: 8px;
					}
					.note {
						font-style: italic;
						color: rgba(255, 255, 255, 0.7);
						font-size: 14px;
						margin-top: 32px;
						padding: 16px;
						border: 1px dashed rgba(0, 255, 224, 0.3);
						background: rgba(0, 255, 224, 0.05);
						border-radius: 4px;
					}
				</style>
			</head>
			<body>
				<div class="container">
					<div class="header">
						<h1>🚀 Quick Contact Inquiry</h1>
					</div>
					
					<div class="section">
						<div class="label">// Contact Info</div>
						<div class="value">${data.name}</div>
						<div class="value"><a href="mailto:${data.email}" style="color: #00ffe0;">${data.email}</a></div>
					</div>

					<hr class="divider" />

					<div class="section">
						<div class="label">// Project Description</div>
						<div class="value">${data.desc || 'Not provided'}</div>
					</div>
					
					<div class="note">
						This message was sent from the simple contact form on the homepage. 
						The user may be waiting for your response to provide more detailed information.
					</div>
				</div>
			</body>
		</html>
	`;
}

// Template for the detailed contact form (original version)
function generateDetailedFormEmail(data) {
	return `
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width">
				<style>
					body { 
						font-family: 'Courier New', Courier, monospace;
						line-height: 1.6;
						color: rgba(255, 255, 255, 0.9);
						background: #101317;
						margin: 0;
						padding: 0;
					}
					.container { 
						max-width: 600px;
						margin: 0 auto;
						padding: 20px;
						background: rgba(16, 19, 23, 0.98);
					}
					.header { 
						background: linear-gradient(90deg, #00ffe0 0%, #c1ff1d 100%);
						padding: 24px;
						border-radius: 4px;
						margin-bottom: 32px;
						border-left: 3px solid rgba(0, 255, 224, 0.6);
					}
					.header h1 { 
						color: #101317;
						margin: 0;
						font-size: 24px;
						font-weight: 700;
						letter-spacing: 0.5px;
					}
					.section { 
						margin-bottom: 32px;
						padding: 20px;
						border-left: 3px solid rgba(0, 255, 224, 0.6);
						background: rgba(0, 255, 224, 0.05);
					}
					.label { 
						font-weight: 600;
						color: #00ffe0;
						text-transform: uppercase;
						font-size: 14px;
						letter-spacing: 1px;
						margin-bottom: 12px;
					}
					.value { 
						margin-top: 8px;
						font-size: 16px;
						padding-left: 16px;
						border-left: 2px solid rgba(0, 255, 224, 0.2);
						color: rgba(255, 255, 255, 0.9);
					}
					.divider { 
						border: none;
						height: 1px;
						background: linear-gradient(90deg, 
							rgba(0, 255, 224, 0) 0%,
							rgba(0, 255, 224, 0.2) 50%,
							rgba(0, 255, 224, 0) 100%
						);
						margin: 32px 0;
					}
					strong {
						color: #c1ff1d;
						font-weight: normal;
					}
					.emoji {
						font-size: 20px;
						margin-right: 8px;
					}
				</style>
			</head>
			<body>
				<div class="container">
					<div class="header">
						<h1>⚡ New Project Inquiry</h1>
					</div>
					
					<div class="section">
						<div class="label">// Contact Info</div>
						<div class="value">${data.name}</div>
						<div class="value"><a href="mailto:${data.email}" style="color: #00ffe0;">${data.email}</a></div>
					</div>

					<hr class="divider" />

					<div class="section">
						<div class="label">// Project Type</div>
						<div class="value">${data.project || 'Not specified'}</div>
					</div>

					<div class="section">
						<div class="label">// Timeline</div>
						<div class="value">${data.timeline || 'Not specified'}</div>
					</div>

					<div class="section">
						<div class="label">// Budget Range</div>
						<div class="value">${data.budget || 'Not specified'}</div>
					</div>

					<hr class="divider" />

					<div class="section">
						<div class="label">// Share your digital dreams</div>
						<div class="value">${data.inspiration || 'Not provided'}</div>
					</div>

					<div class="section">
						<div class="label">// What does victory look like?</div>
						<div class="value">${data.goals || 'Not provided'}</div>
					</div>

					<div class="section">
						<div class="label">// What are we building?</div>
						<div class="value">${data.desc || 'Not provided'}</div>
					</div>
				</div>
			</body>
		</html>
	`;
}

export default sendEmail;
