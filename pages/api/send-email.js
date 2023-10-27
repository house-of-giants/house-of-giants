import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
	try {
		await sendgrid.send({
			to: 'hello@houseofgiants.com', // Your email where you'll receive emails
			from: 'hello@houseofgiants.com', // your website email address here
			subject: req.body.subject,
			html: `
			<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN">
				<html>
					<head>
						<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
						<meta name="viewport" content="width=device-width">
						<title>Lead from houseofgiants.com</title>
					</head>
						<body>
							<table align="center" class="container float-center">
								<tbody>
									<tr>
										<td>
											<table class="spacer">
												<tbody>
													<tr>
														<td height="16px" style="font-size:16px;line-height:16px;">&#xA0;</td>
													</tr>
												</tbody>
											</table>
											<table class="row">
												<tbody>
													<tr>
														<th class="small-12 large-12 columns first last">
															<table>
																<tr>
																	<th style="text-align: left">
																		<p><strong>Name</strong>: ${req.body.name}</p>
																		<p><strong>Email</strong>: ${req.body.email}</p>
																		<p><strong>Project</strong>: ${req.body.project}</p>
																		<p><strong>Description</strong>:</p>
																		<p>${req.body.desc}</p>
																	</th>
																	<th class="expander"></th>
																</tr>
															</table>
														</th>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
						<!-- prevent Gmail on iOS font size manipulation -->
						<div style="display:none; white-space:nowrap; font:15px courier; line-height:0;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div>
					</body>
				</html>
			`,
		});
	} catch (error) {
		return res.status(error.statusCode || 500).json({ error: error.message });
	}

	console.log(res);

	return res.status(200).json({ error: '' });
}

export default sendEmail;
