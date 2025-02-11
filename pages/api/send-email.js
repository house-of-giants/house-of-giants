import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
	try {
		await sendgrid.send({
			to: 'hello@houseofgiants.com',
			from: 'hello@houseofgiants.com',
			subject: req.body.subject,
			html: `
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
								<div class="value">${req.body.name}</div>
								<div class="value"><a href="mailto:${req.body.email}" style="color: #00ffe0;">${req.body.email}</a></div>
							</div>

							<hr class="divider" />

							<div class="section">
								<div class="label">// Project Type</div>
								<div class="value">${req.body.project}</div>
							</div>

							<div class="section">
								<div class="label">// Timeline</div>
								<div class="value">${req.body.timeline}</div>
							</div>

							<div class="section">
								<div class="label">// Budget Range</div>
								<div class="value">${req.body.budget}</div>
							</div>

							<hr class="divider" />

							<div class="section">
								<div class="label">// Share your digital dreams</div>
								<div class="value">${req.body.inspiration || 'Not provided'}</div>
							</div>

							<div class="section">
								<div class="label">// What does victory look like?</div>
								<div class="value">${req.body.goals || 'Not provided'}</div>
							</div>

							<div class="section">
								<div class="label">// What are we building?</div>
								<div class="value">${req.body.desc || 'Not provided'}</div>
							</div>
						</div>
					</body>
				</html>
			`,
		});

		return res.status(200).json({ status: 200, error: null });
	} catch (error) {
		console.error('SendGrid Error:', error);
		return res.status(error.statusCode || 500).json({ error: error.message });
	}
}

export default sendEmail;
