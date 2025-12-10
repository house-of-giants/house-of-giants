import { NextResponse } from 'next/server';

export function proxy(request) {
	// Get the If-Modified-Since header from the request
	const ifModifiedSince = request.headers.get('if-modified-since');

	// Get the current time
	const now = new Date();

	// For static pages, we'll use a 24-hour cache
	const lastModified = new Date(now.getTime() - 24 * 60 * 60 * 1000);

	// If the client has a cached version and it's not modified
	if (ifModifiedSince && new Date(ifModifiedSince) >= lastModified) {
		return new NextResponse(null, {
			status: 304,
			headers: {
				'Last-Modified': lastModified.toUTCString(),
				'Cache-Control': 'public, max-age=86400, must-revalidate',
			},
		});
	}

	// Otherwise, proceed with the request and add cache headers
	const response = NextResponse.next();
	response.headers.set('Last-Modified', lastModified.toUTCString());
	response.headers.set('Cache-Control', 'public, max-age=86400, must-revalidate');

	return response;
}

// Apply middleware to all routes
export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
};
